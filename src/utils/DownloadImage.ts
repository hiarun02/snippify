export default async function exportAsImage(
  node: HTMLElement,
  onStart?: () => void,
  onSuccess?: () => void,
  onError?: (error: Error) => void,
) {
  if (!node) {
    return;
  }

  try {
    onStart?.();
    const {toPng} = await import("html-to-image");
    const dataUrl = await toPng(node, {quality: 0.89});
    const link = document.createElement("a");
    link.download = "code.png";
    link.href = dataUrl;
    link.click();
    onSuccess?.();
  } catch (err) {
    console.error("Could not export as image", err);
    onError?.(err as Error);
  }
}
