import {
  DEFAULT_LAYOUT_PRESET,
  getExportSafeLayoutTransform,
  isLayoutPresetId,
  shouldUseExportSafeLayoutTransform,
} from "@/constants/layoutPresets";

export type ImageExportFormat = "png" | "jpg" | "webp";

interface ExportImageOptions {
  format?: ImageExportFormat;
  filename?: string;
}

function getMimeType(format: ImageExportFormat) {
  if (format === "jpg") {
    return "image/jpeg";
  }
  if (format === "webp") {
    return "image/webp";
  }
  return "image/png";
}

function getFormatQuality(format: ImageExportFormat) {
  if (format === "jpg") {
    return 0.9;
  }
  if (format === "webp") {
    return 0.85;
  }
  return 1;
}

function triggerBrowserDownload(url: string, filename: string) {
  const link = document.createElement("a");
  link.download = filename;
  link.href = url;
  link.rel = "noopener";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  mimeType: string,
  quality?: number,
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
          return;
        }
        reject(new Error("Failed to convert canvas to blob."));
      },
      mimeType,
      quality,
    );
  });
}

function getRoundedCornerRadius(node: HTMLElement) {
  const elements = [
    node,
    ...Array.from(node.querySelectorAll<HTMLElement>("*")),
  ];
  const radiusValues = elements.flatMap((element) => {
    const computedStyle = window.getComputedStyle(element);
    return [
      computedStyle.borderTopLeftRadius,
      computedStyle.borderTopRightRadius,
      computedStyle.borderBottomRightRadius,
      computedStyle.borderBottomLeftRadius,
    ]
      .map((value) => Number.parseFloat(value))
      .filter((value) => Number.isFinite(value));
  });

  return radiusValues.length ? Math.max(...radiusValues) : 0;
}

function drawRoundedRectPath(
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  radius: number,
) {
  const safeRadius = Math.max(0, Math.min(radius, width / 2, height / 2));

  context.beginPath();
  context.moveTo(safeRadius, 0);
  context.lineTo(width - safeRadius, 0);
  context.quadraticCurveTo(width, 0, width, safeRadius);
  context.lineTo(width, height - safeRadius);
  context.quadraticCurveTo(width, height, width - safeRadius, height);
  context.lineTo(safeRadius, height);
  context.quadraticCurveTo(0, height, 0, height - safeRadius);
  context.lineTo(0, safeRadius);
  context.quadraticCurveTo(0, 0, safeRadius, 0);
  context.closePath();
}

function applyRoundedCornerMask(canvas: HTMLCanvasElement, node: HTMLElement) {
  const radius = getRoundedCornerRadius(node);
  if (radius <= 0) {
    return canvas;
  }

  const rect = node.getBoundingClientRect();
  const width = Math.max(1, Math.round(rect.width));
  const height = Math.max(1, Math.round(rect.height));
  const scaleX = canvas.width / width;
  const scaleY = canvas.height / height;
  const scale = Math.min(scaleX, scaleY);
  const scaledRadius = Math.max(0, radius * scale);

  if (!Number.isFinite(scaledRadius) || scaledRadius <= 0) {
    return canvas;
  }

  const maskedCanvas = document.createElement("canvas");
  maskedCanvas.width = canvas.width;
  maskedCanvas.height = canvas.height;

  const context = maskedCanvas.getContext("2d");
  if (!context) {
    return canvas;
  }

  context.clearRect(0, 0, maskedCanvas.width, maskedCanvas.height);
  drawRoundedRectPath(
    context,
    maskedCanvas.width,
    maskedCanvas.height,
    scaledRadius,
  );
  context.clip();
  context.drawImage(canvas, 0, 0);

  return maskedCanvas;
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  triggerBrowserDownload(url, filename);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function shouldUseLayoutFallback(node: HTMLElement) {
  const layoutEl = node.querySelector<HTMLElement>(
    "[data-layout-effect='true']",
  );
  const preset = layoutEl?.dataset.layoutPreset;
  if (
    !preset ||
    !isLayoutPresetId(preset) ||
    preset === DEFAULT_LAYOUT_PRESET
  ) {
    return false;
  }

  return shouldUseExportSafeLayoutTransform(preset);
}

function applyExportLayoutFallback(root: HTMLElement) {
  root
    .querySelectorAll<HTMLElement>("[data-layout-effect='true']")
    .forEach((el) => {
      const preset = el.dataset.layoutPreset;
      const safePreset = isLayoutPresetId(preset)
        ? preset
        : DEFAULT_LAYOUT_PRESET;
      el.style.transform = getExportSafeLayoutTransform(safePreset);
      el.style.transformOrigin = "center";
      el.style.filter = "none";
    });
}

function createSanitizedClone(node: HTMLElement, applyLayoutFallback = false) {
  const rect = node.getBoundingClientRect();
  const width = Math.max(1, Math.round(rect.width));
  const height = Math.max(1, Math.round(rect.height));
  const computedStyle = window.getComputedStyle(node);
  const borderRadius = computedStyle.borderRadius;

  const wrapper = document.createElement("div");
  wrapper.style.position = "fixed";
  wrapper.style.left = "-100000px";
  wrapper.style.top = "0";
  wrapper.style.width = `${width}px`;
  wrapper.style.height = `${height}px`;
  wrapper.style.pointerEvents = "none";
  wrapper.style.overflow = "hidden";

  const clone = node.cloneNode(true) as HTMLElement;
  clone.style.width = `${width}px`;
  clone.style.height = `${height}px`;
  clone.style.margin = "0";
  clone.style.transform = "none";
  clone.style.borderRadius = borderRadius;
  clone.style.overflow = "hidden";
  clone.style.backgroundClip = "padding-box";
  clone.style.clipPath =
    borderRadius && borderRadius !== "0px"
      ? `inset(0 round ${borderRadius})`
      : "none";

  clone.querySelectorAll("[data-export-ignore='true']").forEach((el) => {
    el.remove();
  });

  clone.querySelectorAll<HTMLElement>("*").forEach((el) => {
    el.style.backdropFilter = "none";
    el.style.transition = "none";
    el.style.animation = "none";
  });

  if (applyLayoutFallback) {
    applyExportLayoutFallback(clone);
  }

  wrapper.appendChild(clone);
  document.body.appendChild(wrapper);

  return {
    clone,
    width,
    height,
    dispose: () => {
      if (wrapper.parentNode) {
        wrapper.parentNode.removeChild(wrapper);
      }
    },
  };
}

async function captureCanvas(node: HTMLElement) {
  const html2canvas = (await import("html2canvas")).default;
  const rect = node.getBoundingClientRect();
  const width = Math.max(1, Math.round(rect.width));
  const height = Math.max(1, Math.round(rect.height));

  const canvas = await html2canvas(node, {
    backgroundColor: null,
    width,
    height,
    useCORS: true,
    allowTaint: true,
    scale: 2,
    logging: false,
    removeContainer: true,
    ignoreElements: (el) =>
      el instanceof HTMLElement && el.dataset.exportIgnore === "true",
  });

  return applyRoundedCornerMask(canvas, node);
}

async function captureCanvasWithHtmlToImage(node: HTMLElement) {
  const {toCanvas} = await import("html-to-image");
  const rect = node.getBoundingClientRect();
  const width = Math.max(1, Math.round(rect.width));
  const height = Math.max(1, Math.round(rect.height));

  const canvas = await toCanvas(node, {
    cacheBust: true,
    width,
    height,
    pixelRatio: 2,
    skipFonts: true,
    filter: (domNode) => {
      if (domNode instanceof HTMLElement) {
        return domNode.dataset.exportIgnore !== "true";
      }
      return true;
    },
    style: {
      margin: "0",
      left: "0",
      top: "0",
    },
  });

  return applyRoundedCornerMask(canvas, node);
}

export default async function exportAsImage(
  node: HTMLElement,
  options?: ExportImageOptions,
  onStart?: () => void,
  onSuccess?: () => void,
  onError?: (error: Error) => void,
) {
  if (!node) {
    return;
  }

  try {
    onStart?.();
    const format = options?.format ?? "png";
    const mimeType = getMimeType(format);
    const quality = getFormatQuality(format);
    const filename = options?.filename ?? `snippet.${format}`;
    const useLayoutFallback = shouldUseLayoutFallback(node);

    const exportFromClone = async (applyLayoutFallback: boolean) => {
      const {clone, dispose} = createSanitizedClone(node, applyLayoutFallback);
      try {
        const canvas = await captureCanvas(clone);
        const blob = await canvasToBlob(
          canvas,
          mimeType,
          format === "png" ? undefined : quality,
        );
        downloadBlob(blob, filename);
        onSuccess?.();
        return true;
      } finally {
        dispose();
      }
    };

    try {
      if (await exportFromClone(useLayoutFallback)) {
        return;
      }

      const canvas = await captureCanvasWithHtmlToImage(node);
      const blob = await canvasToBlob(
        canvas,
        mimeType,
        format === "png" ? undefined : quality,
      );
      downloadBlob(blob, filename);
      onSuccess?.();
      return;
    } catch {
      try {
        if (await exportFromClone(false)) {
          return;
        }
      } catch {
        try {
          if (await exportFromClone(true)) {
            return;
          }
        } catch {
          const canvas = await captureCanvas(node);
          const blob = await canvasToBlob(
            canvas,
            mimeType,
            format === "png" ? undefined : quality,
          );
          downloadBlob(blob, filename);
          onSuccess?.();
          return;
        }
      }
    }
  } catch (err) {
    console.error("Could not export as image", err);
    onError?.(err as Error);
  }
}
