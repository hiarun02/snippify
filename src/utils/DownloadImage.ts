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

function applyExportVisualFixes(root: HTMLElement) {
  root
    .querySelectorAll<HTMLElement>("[data-layout-effect='true']")
    .forEach((el) => {
      // Prevent export renderers from creating hard-corner artifacts near tilted edges.
      el.style.overflow = "hidden";
      el.style.backgroundClip = "padding-box";

      if (el.dataset.shadowStyle === "none") {
        el.style.boxShadow = "none";
      }
    });
}

function createSanitizedClone(node: HTMLElement, applyLayoutFallback = false) {
  const rect = node.getBoundingClientRect();
  const width = Math.max(1, Math.round(rect.width));
  const height = Math.max(1, Math.round(rect.height));

  const wrapper = document.createElement("div");
  wrapper.style.position = "fixed";
  wrapper.style.left = "-100000px";
  wrapper.style.top = "0";
  wrapper.style.width = `${width}px`;
  wrapper.style.height = `${height}px`;
  wrapper.style.pointerEvents = "none";

  const clone = node.cloneNode(true) as HTMLElement;
  clone.style.width = `${width}px`;
  clone.style.height = `${height}px`;
  clone.style.margin = "0";
  clone.style.transform = "none";

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

  return await html2canvas(node, {
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
}

async function captureCanvasWithHtmlToImage(node: HTMLElement) {
  const {toCanvas} = await import("html-to-image");
  const rect = node.getBoundingClientRect();
  const width = Math.max(1, Math.round(rect.width));
  const height = Math.max(1, Math.round(rect.height));

  return await toCanvas(node, {
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
    try {
      if (useLayoutFallback) {
        const {clone, dispose} = createSanitizedClone(node, true);
        try {
          applyExportVisualFixes(clone);
          const canvas = await captureCanvasWithHtmlToImage(clone);
          const blob = await canvasToBlob(
            canvas,
            mimeType,
            format === "png" ? undefined : quality,
          );
          downloadBlob(blob, filename);
          onSuccess?.();
          return;
        } finally {
          dispose();
        }
      }

      const {clone, dispose} = createSanitizedClone(node, false);
      try {
        applyExportVisualFixes(clone);
        const canvas = await captureCanvasWithHtmlToImage(clone);
        const blob = await canvasToBlob(
          canvas,
          mimeType,
          format === "png" ? undefined : quality,
        );
        downloadBlob(blob, filename);
        onSuccess?.();
        return;
      } finally {
        dispose();
      }
    } catch {
      try {
        const {clone, dispose} = createSanitizedClone(node, false);
        try {
          applyExportVisualFixes(clone);
          const canvas = await captureCanvasWithHtmlToImage(clone);
          const blob = await canvasToBlob(
            canvas,
            mimeType,
            format === "png" ? undefined : quality,
          );
          downloadBlob(blob, filename);
          onSuccess?.();
          return;
        } finally {
          dispose();
        }
      } catch {
        try {
          const {clone, dispose} = createSanitizedClone(node, true);
          try {
            applyExportVisualFixes(clone);
            const canvas = await captureCanvasWithHtmlToImage(clone);
            const blob = await canvasToBlob(
              canvas,
              mimeType,
              format === "png" ? undefined : quality,
            );
            downloadBlob(blob, filename);
            onSuccess?.();
            return;
          } finally {
            dispose();
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
