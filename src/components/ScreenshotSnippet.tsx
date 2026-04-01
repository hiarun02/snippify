"use client";

import {ChangeEvent} from "react";
import {
  useEditorStore,
  type ScreenshotAspectRatio,
  type ScreenshotSettings,
} from "@/store/useEditorStore";
import {getLayoutTransform} from "@/constants/layoutPresets";

interface ScreenshotSnippetProps {
  settings: ScreenshotSettings;
}

const ASPECT_RATIO_VALUE_MAP: Record<ScreenshotAspectRatio, string> = {
  "16:9": "16 / 9",
  "3:2": "3 / 2",
  "4:3": "4 / 3",
  "5:4": "5 / 4",
  "1:1": "1 / 1",
  "4:5": "4 / 5",
  "3:4": "3 / 4",
  "2:3": "2 / 3",
  "9:16": "9 / 16",
};

export default function ScreenshotSnippet({settings}: ScreenshotSnippetProps) {
  const gradient = useEditorStore((state) => state.screenshotGradient);
  const setPreviewRef = useEditorStore((state) => state.setPreviewRef);
  const uploadedImage = useEditorStore((state) => state.uploadedImage);
  const setUploadedImage = useEditorStore((state) => state.setUploadedImage);
  const imageSrc = uploadedImage;
  const safePaddingPercent = Math.max(0, Math.min(settings.paddingPercent, 20));
  const aspectRatioValue =
    ASPECT_RATIO_VALUE_MAP[settings.aspectRatio] ??
    ASPECT_RATIO_VALUE_MAP["16:9"];

  const borderRadiusMap = {
    sharp: 0,
    curved: 16,
    round: 28,
  };
  const borderRadius = borderRadiusMap[settings.borderStyle];

  const getFrameStyles = () => {
    return {
      borderRadius: `${borderRadius}px`,
      backgroundImage: "none",
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  };

  const getScreenshotWrapperStyles = (): React.CSSProperties => {
    switch (settings.frameStyle) {
      case "glass-light":
        return {
          padding: "0px",
          border: "2px solid rgba(255, 255, 255, 0.62)",
          backgroundColor: "transparent",
          backdropFilter: "blur(7px)",
        };
      case "glass-dark":
        return {
          padding: "0px",
          border: "2px solid rgba(255, 255, 255, 0.26)",
          backgroundColor: "transparent",
          backdropFilter: "blur(7px)",
        };
      case "outline":
        return {
          padding: "0px",
          border: "2.5px solid rgba(255, 255, 255, 0.8)",
          backgroundColor: "transparent",
        };
      case "border":
        return {
          padding: "0px",
          border: "3.5px solid rgba(255, 255, 255, 0.88)",
          backgroundColor: "transparent",
        };
      case "border-dark":
        return {
          padding: "0px",
          border: "3.5px solid rgba(20, 24, 35, 0.95)",
          backgroundColor: "transparent",
        };
      case "default":
      default:
        return {
          backgroundColor: "transparent",
        };
    }
  };

  const getScreenshotShadowStyles = (): React.CSSProperties => {
    switch (settings.shadowStyle) {
      case "hug":
        return {
          boxShadow:
            "0 1px 3px rgba(15, 23, 42, 0.14), 0 6px 14px rgba(15, 23, 42, 0.2)",
        };
      case "soft":
        return {
          boxShadow:
            "0 4px 12px rgba(15, 23, 42, 0.16), 0 14px 30px -6px rgba(15, 23, 42, 0.3)",
        };
      case "strong":
        return {
          boxShadow:
            "0 8px 20px rgba(15, 23, 42, 0.2), 0 24px 54px -10px rgba(15, 23, 42, 0.36)",
        };
      case "none":
      default:
        return {
          boxShadow: "none",
        };
    }
  };

  const getFrameBorderWidthPx = () => {
    switch (settings.frameStyle) {
      case "glass-light":
      case "glass-dark":
        return 2;
      case "outline":
        return 2.5;
      case "border":
      case "border-dark":
        return 3.5;
      case "default":
      default:
        return 0;
    }
  };

  const getLayoutPresetStyles = (): React.CSSProperties => {
    return {
      transform: getLayoutTransform(settings.layoutPreset),
      transformOrigin: "center",
      filter: "none",
    };
  };

  const frameBorderWidthPx = getFrameBorderWidthPx();
  const innerImageRadiusPx = Math.max(borderRadius - frameBorderWidthPx, 0);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    // Keep persisted payloads within practical localStorage bounds.
    if (file.size > 4 * 1024 * 1024) {
      window.alert(
        "Please upload an image under 4MB for reliable persistence.",
      );
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setUploadedImage(base64);
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="flex w-full flex-col items-center gap-5 px-1 pb-6 sm:gap-6 sm:pb-8">
      <input
        id="screenshot-file"
        type="file"
        accept="image/*"
        aria-label="Upload screenshot"
        onChange={handleFileChange}
        className="hidden"
      />

      <div
        ref={setPreviewRef}
        className="mx-auto box-border w-full max-w-[615px] rounded-lg"
        style={{background: gradient, padding: "32px"}}
      >
        <div
          className="relative w-full"
          style={{
            ...getFrameStyles(),
            aspectRatio: aspectRatioValue,
            overflow: imageSrc ? "visible" : "hidden",
          }}
        >
          <div
            className="absolute flex items-center justify-center"
            style={{
              inset: `${safePaddingPercent}%`,
              borderRadius: `${borderRadius}px`,
              overflow: imageSrc ? "visible" : "hidden",
            }}
          >
            {imageSrc ? (
              <div
                className="relative inline-flex items-center justify-center overflow-hidden"
                data-layout-effect="true"
                data-layout-preset={settings.layoutPreset}
                style={{
                  borderRadius: `${borderRadius}px`,
                  maxWidth: `calc(100% - ${frameBorderWidthPx * 2}px)`,
                  maxHeight: `calc(100% - ${frameBorderWidthPx * 2}px)`,
                  boxSizing: "border-box",
                  transition:
                    "transform 260ms cubic-bezier(0.22, 1, 0.36, 1), filter 260ms cubic-bezier(0.22, 1, 0.36, 1)",
                  ...getLayoutPresetStyles(),
                  ...getScreenshotShadowStyles(),
                  ...getScreenshotWrapperStyles(),
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageSrc}
                  alt="Screenshot preview"
                  className="block h-auto w-auto max-h-full max-w-full"
                  style={{borderRadius: `${innerImageRadiusPx}px`}}
                />

                <button
                  type="button"
                  data-export-ignore="true"
                  onClick={() => setUploadedImage("")}
                  aria-label="Remove screenshot"
                  title="Remove screenshot"
                  className="absolute right-2 top-2 z-20 inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/25 bg-black/55 text-white backdrop-blur-sm transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M3 6h18" />
                    <path d="M8 6V4h8v2" />
                    <path d="M19 6l-1 14H6L5 6" />
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                  </svg>
                </button>
              </div>
            ) : (
              <div
                className="relative w-full max-h-full overflow-hidden"
                style={{
                  aspectRatio: ASPECT_RATIO_VALUE_MAP["16:9"],
                  borderRadius: `${borderRadius}px`,
                  backgroundImage: "url('/editor-bg.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )}
          </div>

          {!imageSrc ? (
            <label
              htmlFor="screenshot-file"
              data-export-ignore="true"
              className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-lg border border-white/20 bg-black/45 px-4 py-2 text-sm text-white backdrop-blur-sm"
            >
              Choose file
            </label>
          ) : null}
        </div>
      </div>
    </section>
  );
}
