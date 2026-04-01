"use client";

import {type ChangeEvent, useState} from "react";
import {
  Select,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from "../ui/select";
import {ScreenshotSnippetBgCategories} from "@/constants/gradient";
import {Input} from "../ui/input";
import {Label} from "../ui/label";
import {Button} from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {useEditorStore} from "@/store/useEditorStore";
import {ImageIcon, Copy, EllipsisVertical} from "lucide-react";
import {
  copyNodeAsImage,
  saveNodeAsPng,
  saveNodeAsSvg,
} from "@/utils/snippetExport";

const CODE_PADDING_OPTIONS = [4, 8, 16, 32, 64, 128];
const CODE_THEME_PRESETS = [
  {value: "snippify-midnight", label: "Midnight"},
  {value: "snippify-carbon", label: "Carbon"},
  {value: "snippify-github-dark", label: "GitHub Dark"},
  {value: "snippify-emerald-night", label: "Emerald Night"},
  {value: "snippify-porcelain", label: "Porcelain (Light)"},
];

const CODE_LANGUAGES = [
  {value: "javascript", label: "JavaScript"},
  {value: "typescript", label: "TypeScript"},
  {value: "python", label: "Python"},
  {value: "java", label: "Java"},
  {value: "go", label: "Go"},
  {value: "rust", label: "Rust"},
  {value: "cpp", label: "C++"},
  {value: "csharp", label: "C#"},
  {value: "php", label: "PHP"},
  {value: "ruby", label: "Ruby"},
  {value: "sql", label: "SQL"},
  {value: "bash", label: "Bash"},
  {value: "html", label: "HTML"},
  {value: "css", label: "CSS"},
  {value: "json", label: "JSON"},
  {value: "yaml", label: "YAML"},
  {value: "xml", label: "XML"},
];

export default function CodeEditorFooter() {
  const gradient = useEditorStore((state) => state.codeGradient);
  const setGradient = useEditorStore((state) => state.setCodeGradient);

  const fontSize = useEditorStore((state) => state.fontSize);
  const setFontSize = useEditorStore((state) => state.setFontSize);
  const codePadding = useEditorStore((state) => state.codePadding);
  const setCodePadding = useEditorStore((state) => state.setCodePadding);
  const isBackgroundHidden = useEditorStore(
    (state) => state.isBackgroundHidden,
  );
  const setIsBackgroundHidden = useEditorStore(
    (state) => state.setIsBackgroundHidden,
  );
  const showLineNumbers = useEditorStore((state) => state.showLineNumbers);
  const setShowLineNumbers = useEditorStore(
    (state) => state.setShowLineNumbers,
  );
  const codeThemePreset = useEditorStore((state) => state.codeThemePreset);
  const setCodeThemePreset = useEditorStore(
    (state) => state.setCodeThemePreset,
  );
  const codeLanguage = useEditorStore((state) => state.codeLanguage);
  const setCodeLanguage = useEditorStore((state) => state.setCodeLanguage);
  const previewRef = useEditorStore((state) => state.previewRef);
  const isExporting = useEditorStore((state) => state.isExporting);
  const setIsExporting = useEditorStore((state) => state.setIsExporting);

  const [exportStatus, setExportStatus] = useState<
    "idle" | "png" | "svg" | "copy" | "error"
  >("idle");

  const categoryDisplayOrder = [
    "abstract",
    "macos",
    "windows",
    "linux",
    "gradient",
    "magic",
    "raycast",
    "radiant",
  ];
  const sortedCategories = [...ScreenshotSnippetBgCategories].sort(
    (first, second) => {
      const firstIndex = categoryDisplayOrder.indexOf(first.id);
      const secondIndex = categoryDisplayOrder.indexOf(second.id);

      if (firstIndex === -1 && secondIndex === -1) {
        return first.label.localeCompare(second.label);
      }
      if (firstIndex === -1) {
        return 1;
      }
      if (secondIndex === -1) {
        return -1;
      }

      return firstIndex - secondIndex;
    },
  );

  const runExport = async (
    action: "png" | "svg" | "copy",
    callback: () => Promise<void>,
  ) => {
    if (!previewRef) {
      return;
    }

    try {
      setIsExporting(true);
      setExportStatus("idle");
      await callback();
      setExportStatus(action);
      setTimeout(() => setExportStatus("idle"), 2000);
    } catch (error) {
      console.error("Export failed", error);
      setExportStatus("error");
      setTimeout(() => setExportStatus("idle"), 3000);
    } finally {
      setIsExporting(false);
    }
  };

  const handleSavePng = async () => {
    await runExport("png", async () => {
      const node = previewRef as HTMLElement;
      await saveNodeAsPng(node, "code.png");
    });
  };

  const handleSaveSvg = async () => {
    await runExport("svg", async () => {
      const node = previewRef as HTMLElement;
      await saveNodeAsSvg(node, "code.svg");
    });
  };

  const handleCopyImage = async () => {
    await runExport("copy", async () => {
      const node = previewRef as HTMLElement;
      await copyNodeAsImage(node);
    });
  };

  return (
    <section className="fixed bottom-0 z-10 flex w-full justify-center">
      <div className="mx-auto flex w-full max-w-6xl justify-center">
        <div className="flex flex-col items-center w-full px-2 sm:px-10 py-2 sm:py-4 min-h-auto sm:min-h-20 rounded-t-2xl bg-white/20 text-black backdrop-blur-2xl border border-black/10 dark:bg-[#111010]/80 dark:text-gray-100 dark:border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-10 w-full">
            <div className="space-y-1">
              <Label
                className="text-xs text-gray-800 dark:text-gray-200/90"
                htmlFor="gradient"
              >
                Bg Gradient
              </Label>
              <Select
                onValueChange={(value: string) => {
                  setGradient(value);
                }}
              >
                <SelectTrigger
                  id="gradient"
                  className="border-black/30 bg-white/80 space-x-2 w-16 h-7 flex items-center justify-center dark:border-white/15 dark:bg-[#111010]/80 dark:text-gray-100"
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{background: gradient}}
                  ></div>
                </SelectTrigger>
                <SelectContent className="!w-[252px]">
                  {sortedCategories.map((category, categoryIndex) => (
                    <SelectGroup key={category.id}>
                      <SelectLabel className="px-2 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
                        {category.label}
                      </SelectLabel>
                      <div className="grid grid-cols-4 gap-2 px-2 pb-2">
                        {category.options.map((item) => (
                          <SelectItem
                            key={item.name}
                            value={item.gradient}
                            className="h-auto rounded-md p-0 pr-0"
                            aria-label={item.name}
                            title={item.name}
                          >
                            <div
                              className={`h-10 w-10 rounded-md border ${
                                gradient === item.gradient
                                  ? "border-blue-500 ring-2 ring-blue-400/70"
                                  : "border-black/15 dark:border-white/15"
                              }`}
                              style={{background: item.gradient}}
                            />
                          </SelectItem>
                        ))}
                      </div>
                      {categoryIndex < sortedCategories.length - 1 ? (
                        <SelectSeparator className="mx-2 my-1 bg-black/10 dark:bg-white/10" />
                      ) : null}
                    </SelectGroup>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1 flex flex-col relative">
              <Label
                className="text-xs w-full text-gray-800 dark:text-gray-200/90"
                htmlFor="removeBg"
              >
                Background
              </Label>
              <Select
                value={isBackgroundHidden ? "no" : "yes"}
                onValueChange={(value: string) => {
                  setIsBackgroundHidden(value === "no");
                }}
              >
                <SelectTrigger
                  id="removeBg"
                  className="w-16 h-7 text-xs border-black/30 bg-white/80 dark:border-white/15 dark:bg-[#111010]/80 dark:text-gray-100"
                >
                  <SelectValue placeholder="Yes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1 flex flex-col relative">
              <Label
                className="text-xs w-full text-gray-800 dark:text-gray-200/90"
                htmlFor="lineNumbers"
              >
                Line Numbers
              </Label>
              <Select
                value={showLineNumbers ? "yes" : "no"}
                onValueChange={(value: string) => {
                  setShowLineNumbers(value === "yes");
                }}
              >
                <SelectTrigger
                  id="lineNumbers"
                  className="w-16 h-7 text-xs border-black/30 bg-white/80 dark:border-white/15 dark:bg-[#111010]/80 dark:text-gray-100"
                >
                  <SelectValue placeholder="Yes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1 flex flex-col relative">
              <Label
                className="text-xs w-full text-gray-800 dark:text-gray-200/90"
                htmlFor="codeLanguage"
              >
                Language
              </Label>
              <Select
                value={codeLanguage}
                onValueChange={(value: string) => {
                  setCodeLanguage(value);
                }}
              >
                <SelectTrigger
                  id="codeLanguage"
                  className="w-28 h-7 text-xs border-black/30 bg-white/80 dark:border-white/15 dark:bg-[#111010]/80 dark:text-gray-100"
                >
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  {CODE_LANGUAGES.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1 flex flex-col relative">
              <Label
                className="text-xs w-full text-gray-800 dark:text-gray-200/90"
                htmlFor="codeTheme"
              >
                Theme
              </Label>
              <Select
                value={codeThemePreset}
                onValueChange={(value: string) => {
                  setCodeThemePreset(value);
                }}
              >
                <SelectTrigger
                  id="codeTheme"
                  className="w-28 h-7 text-xs border-black/30 bg-white/80 dark:border-white/15 dark:bg-[#111010]/80 dark:text-gray-100"
                >
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  {CODE_THEME_PRESETS.map((preset) => (
                    <SelectItem key={preset.value} value={preset.value}>
                      {preset.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Label
                className="text-xs text-gray-800 dark:text-gray-200/90"
                htmlFor="fontSize"
              >
                Font Size
              </Label>
              <Input
                id="fontSize"
                type="number"
                value={fontSize}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFontSize(parseInt(e.target.value, 10) || 16)
                }
                className="w-16 text-center h-7 font-xs border-black/30 bg-white/80 [color-scheme:dark] dark:border-white/15 dark:bg-[#111010]/80 dark:text-gray-100"
              />
            </div>
            <div className="space-y-1">
              <Label
                className="text-xs text-gray-800 dark:text-gray-200/90"
                htmlFor="snippetPadding"
              >
                Padding
              </Label>
              <Select
                value={String(codePadding)}
                onValueChange={(value: string) =>
                  setCodePadding(parseInt(value, 10))
                }
              >
                <SelectTrigger
                  id="snippetPadding"
                  className="w-16 h-7 text-xs border-black/30 bg-white/80 dark:border-white/15 dark:bg-[#111010]/80 dark:text-gray-100"
                >
                  <SelectValue placeholder="32" />
                </SelectTrigger>
                <SelectContent>
                  {CODE_PADDING_OPTIONS.map((padding) => (
                    <SelectItem key={padding} value={String(padding)}>
                      {padding}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1 flex flex-col">
              <Label className="text-xs text-gray-800 dark:text-gray-200/90">
                Export image
              </Label>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    aria-label="Open export options"
                    className="w-10 h-7 px-0 text-base font-semibold bg-white/80 border-black/30 dark:border-white/15 dark:bg-[#111010]/80 dark:text-gray-100"
                  >
                    <EllipsisVertical />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[340px] border-white/10 bg-[#15171c] p-4 text-gray-100">
                  <DialogHeader>
                    <DialogTitle className="sr-only">
                      Download Options
                    </DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col gap-2">
                    <Button
                      onClick={handleSavePng}
                      disabled={isExporting}
                      aria-busy={isExporting}
                      aria-label="Save code snippet as PNG"
                      variant="ghost"
                      className="h-10 justify-start rounded-md px-3 text-base text-gray-100 hover:bg-white/10"
                    >
                      <span className="flex items-center gap-2">
                        <ImageIcon className="h-4 w-4" />
                        Save PNG
                      </span>
                    </Button>
                    <Button
                      onClick={handleSaveSvg}
                      disabled={isExporting}
                      aria-busy={isExporting}
                      aria-label="Save code snippet as SVG"
                      variant="ghost"
                      className="h-10 justify-start rounded-md px-3 text-base text-gray-100 hover:bg-white/10"
                    >
                      <span className="flex items-center gap-2">
                        <ImageIcon className="h-4 w-4" />
                        Save SVG
                      </span>
                    </Button>
                    <Button
                      onClick={handleCopyImage}
                      disabled={isExporting}
                      aria-busy={isExporting}
                      aria-label="Copy code snippet image"
                      variant="ghost"
                      className="h-10 justify-start rounded-md px-3 text-base text-gray-100 hover:bg-white/10"
                    >
                      <span className="flex items-center gap-2">
                        <Copy className="h-4 w-4" />
                        {exportStatus === "copy" ? "Copied" : "Copy Image"}
                      </span>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <span className="pointer-events-none absolute left-0 bottom-full mb-1 whitespace-nowrap rounded bg-black/60 px-1.5 py-0.5 text-[11px] text-white dark:bg-black/70">
                {isExporting
                  ? "Exporting..."
                  : exportStatus === "png"
                    ? "PNG saved"
                    : exportStatus === "svg"
                      ? "SVG saved"
                      : exportStatus === "copy"
                        ? "Copied"
                        : exportStatus === "error"
                          ? "Export failed"
                          : ""}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
