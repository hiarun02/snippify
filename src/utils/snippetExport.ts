const getNodeSize = (node: HTMLElement) => {
  const rect = node.getBoundingClientRect();
  const width = Math.max(1, Math.round(rect.width));
  const height = Math.max(1, Math.round(rect.height));
  return {width, height};
};

const getBaseOptions = (node: HTMLElement) => {
  const {width, height} = getNodeSize(node);

  return {
    cacheBust: true,
    width,
    height,
    skipFonts: true,
    style: {
      margin: "0",
      transform: "none",
      left: "0",
      top: "0",
    },
    // Avoid cssRules SecurityError from cross-origin stylesheets.
    fontEmbedCSS: "",
  };
};

const downloadDataUrl = (dataUrl: string, filename: string) => {
  const link = document.createElement("a");
  link.download = filename;
  link.href = dataUrl;
  link.click();
};

const downloadBlob = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = filename;
  link.href = url;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 500);
};

export async function saveNodeAsPng(node: HTMLElement, filename = "code.png") {
  const {toBlob, toPng} = await import("html-to-image");
  const {width, height} = getNodeSize(node);

  const baseOptions = {
    ...getBaseOptions(node),
    quality: 1,
    pixelRatio: 2,
    canvasWidth: width,
    canvasHeight: height,
  };

  const blob = await toBlob(node, baseOptions);
  if (blob) {
    downloadBlob(blob, filename);
    return;
  }

  const dataUrl = await toPng(node, baseOptions);
  downloadDataUrl(dataUrl, filename);
}

export async function saveNodeAsSvg(node: HTMLElement, filename = "code.svg") {
  const {toSvg} = await import("html-to-image");
  const dataUrl = await toSvg(node, getBaseOptions(node));
  const response = await fetch(dataUrl);
  const blob = await response.blob();
  downloadBlob(blob, filename);
}

export async function copyNodeAsImage(node: HTMLElement) {
  const {toBlob, toPng} = await import("html-to-image");

  const blob = await toBlob(node, {
    ...getBaseOptions(node),
    quality: 1,
    pixelRatio: 2,
  });

  if (blob && navigator.clipboard && "write" in navigator.clipboard) {
    await navigator.clipboard.write([new ClipboardItem({[blob.type]: blob})]);
    return;
  }

  const fallbackPng = await toPng(node, {
    ...getBaseOptions(node),
    quality: 1,
    pixelRatio: 2,
  });
  downloadDataUrl(fallbackPng, "code.png");
}
