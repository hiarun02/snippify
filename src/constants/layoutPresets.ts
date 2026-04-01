export interface LayoutTransformValues {
  perspective: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  translateX: number;
  translateY: number;
  scale: number;
}

export interface LayoutPreset {
  id: string;
  name: string;
  values: LayoutTransformValues;
  exportSafeTransform: string;
}

export interface LayoutPresetCategory {
  id: string;
  name: string;
  presets: LayoutPreset[];
}

export const LAYOUT_PRESET_CATEGORIES: LayoutPresetCategory[] = [
  {
    id: "popular",
    name: "Popular",
    presets: [
      {
        id: "default",
        name: "Default",
        values: {
          perspective: 2400,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          translateX: 0,
          translateY: 0,
          scale: 1,
        },
        exportSafeTransform: "translate(0%, 0%) rotate(0deg) scale(1)",
      },
      {
        id: "saas-hero",
        name: "SaaS Hero",
        values: {
          perspective: 2400,
          rotateX: 8,
          rotateY: -6,
          rotateZ: 0,
          translateX: 0,
          translateY: -2,
          scale: 0.98,
        },
        exportSafeTransform: "translate(0%, -2%) rotate(-2deg) scale(0.98)",
      },
      {
        id: "product-shot",
        name: "Product Shot",
        values: {
          perspective: 2000,
          rotateX: 5,
          rotateY: 12,
          rotateZ: 0,
          translateX: 3,
          translateY: -1,
          scale: 0.97,
        },
        exportSafeTransform: "translate(3%, -1%) rotate(4deg) scale(0.97)",
      },
      {
        id: "app-preview",
        name: "App Preview",
        values: {
          perspective: 2400,
          rotateX: 12,
          rotateY: -10,
          rotateZ: 0,
          translateX: -2,
          translateY: -3,
          scale: 0.96,
        },
        exportSafeTransform: "translate(-2%, -3%) rotate(-3deg) scale(0.96)",
      },
      {
        id: "clean-angle",
        name: "Clean Angle",
        values: {
          perspective: 2400,
          rotateX: 6,
          rotateY: 8,
          rotateZ: -2,
          translateX: 2,
          translateY: -1,
          scale: 0.98,
        },
        exportSafeTransform: "translate(2%, -1%) rotate(-2deg) scale(0.98)",
      },
      {
        id: "landing-page",
        name: "Landing Page",
        values: {
          perspective: 1800,
          rotateX: 15,
          rotateY: 0,
          rotateZ: 0,
          translateX: 0,
          translateY: -5,
          scale: 0.95,
        },
        exportSafeTransform: "translate(0%, -5%) rotate(0deg) scale(0.95)",
      },
    ],
  },
  {
    id: "basic",
    name: "Basic",
    presets: [
      {
        id: "tilt-left",
        name: "Tilt Left",
        values: {
          perspective: 2400,
          rotateX: 0,
          rotateY: 0,
          rotateZ: -8,
          translateX: 0,
          translateY: 0,
          scale: 0.95,
        },
        exportSafeTransform: "translate(0%, 0%) rotate(-8deg) scale(0.95)",
      },
      {
        id: "tilt-right",
        name: "Tilt Right",
        values: {
          perspective: 2400,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 8,
          translateX: 0,
          translateY: 0,
          scale: 0.95,
        },
        exportSafeTransform: "translate(0%, 0%) rotate(8deg) scale(0.95)",
      },
      {
        id: "subtle-left",
        name: "Subtle Left",
        values: {
          perspective: 2400,
          rotateX: 3,
          rotateY: -8,
          rotateZ: 0,
          translateX: -2,
          translateY: 0,
          scale: 1,
        },
        exportSafeTransform: "translate(-2%, 0%) rotate(-3deg) scale(1)",
      },
      {
        id: "subtle-right",
        name: "Subtle Right",
        values: {
          perspective: 2400,
          rotateX: 3,
          rotateY: 8,
          rotateZ: 0,
          translateX: 2,
          translateY: 0,
          scale: 1,
        },
        exportSafeTransform: "translate(2%, 0%) rotate(3deg) scale(1)",
      },
      {
        id: "lean-back",
        name: "Lean Back",
        values: {
          perspective: 2400,
          rotateX: -15,
          rotateY: 0,
          rotateZ: 0,
          translateX: 0,
          translateY: 5,
          scale: 0.98,
        },
        exportSafeTransform: "translate(0%, 5%) rotate(0deg) scale(0.98)",
      },
      {
        id: "lean-forward",
        name: "Lean Forward",
        values: {
          perspective: 2400,
          rotateX: 18,
          rotateY: 0,
          rotateZ: 0,
          translateX: 0,
          translateY: -4,
          scale: 0.97,
        },
        exportSafeTransform: "translate(0%, -4%) rotate(0deg) scale(0.97)",
      },
    ],
  },
  {
    id: "dramatic",
    name: "Dramatic",
    presets: [
      {
        id: "dramatic-left",
        name: "Dramatic Left",
        values: {
          perspective: 2400,
          rotateX: 10,
          rotateY: -20,
          rotateZ: 8,
          translateX: -4,
          translateY: -2,
          scale: 0.95,
        },
        exportSafeTransform: "translate(-4%, -2%) rotate(8deg) scale(0.95)",
      },
      {
        id: "dramatic-right",
        name: "Dramatic Right",
        values: {
          perspective: 2400,
          rotateX: 10,
          rotateY: 20,
          rotateZ: -8,
          translateX: 4,
          translateY: -2,
          scale: 0.95,
        },
        exportSafeTransform: "translate(4%, -2%) rotate(-8deg) scale(0.95)",
      },
      {
        id: "hero-left",
        name: "Hero Left",
        values: {
          perspective: 1800,
          rotateX: 8,
          rotateY: -25,
          rotateZ: 5,
          translateX: -6,
          translateY: 0,
          scale: 0.92,
        },
        exportSafeTransform: "translate(-6%, 0%) rotate(5deg) scale(0.92)",
      },
      {
        id: "hero-right",
        name: "Hero Right",
        values: {
          perspective: 1800,
          rotateX: 8,
          rotateY: 25,
          rotateZ: -5,
          translateX: 6,
          translateY: 0,
          scale: 0.92,
        },
        exportSafeTransform: "translate(6%, 0%) rotate(-5deg) scale(0.92)",
      },
      {
        id: "showcase-l",
        name: "Showcase L",
        values: {
          perspective: 1500,
          rotateX: 15,
          rotateY: -30,
          rotateZ: 5,
          translateX: -10,
          translateY: -3,
          scale: 0.88,
        },
        exportSafeTransform: "translate(-10%, -3%) rotate(5deg) scale(0.88)",
      },
      {
        id: "showcase-r",
        name: "Showcase R",
        values: {
          perspective: 1500,
          rotateX: 15,
          rotateY: 30,
          rotateZ: -5,
          translateX: 10,
          translateY: -3,
          scale: 0.88,
        },
        exportSafeTransform: "translate(10%, -3%) rotate(-5deg) scale(0.88)",
      },
    ],
  },
  {
    id: "perspective",
    name: "Perspective",
    presets: [
      {
        id: "top-down",
        name: "Top Down",
        values: {
          perspective: 2400,
          rotateX: 40,
          rotateY: 0,
          rotateZ: 0,
          translateX: 0,
          translateY: -5,
          scale: 0.95,
        },
        exportSafeTransform: "translate(0%, -5%) rotate(0deg) scale(0.95)",
      },
      {
        id: "bottom-up",
        name: "Bottom Up",
        values: {
          perspective: 2400,
          rotateX: -35,
          rotateY: 0,
          rotateZ: 0,
          translateX: 0,
          translateY: 8,
          scale: 0.95,
        },
        exportSafeTransform: "translate(0%, 8%) rotate(0deg) scale(0.95)",
      },
      {
        id: "lay-flat",
        name: "Lay Flat",
        values: {
          perspective: 2400,
          rotateX: 55,
          rotateY: 0,
          rotateZ: 0,
          translateX: 0,
          translateY: -12,
          scale: 0.8,
        },
        exportSafeTransform: "translate(0%, -12%) rotate(0deg) scale(0.8)",
      },
      {
        id: "magazine",
        name: "Magazine",
        values: {
          perspective: 2400,
          rotateX: 58,
          rotateY: 8,
          rotateZ: 38,
          translateX: 0,
          translateY: -8,
          scale: 0.82,
        },
        exportSafeTransform: "translate(0%, -8%) rotate(38deg) scale(0.82)",
      },
      {
        id: "isometric-l",
        name: "Isometric L",
        values: {
          perspective: 2400,
          rotateX: 45,
          rotateY: 0,
          rotateZ: -45,
          translateX: 0,
          translateY: -5,
          scale: 0.9,
        },
        exportSafeTransform: "translate(0%, -5%) rotate(-45deg) scale(0.9)",
      },
      {
        id: "isometric-r",
        name: "Isometric R",
        values: {
          perspective: 2400,
          rotateX: 38.4,
          rotateY: -6.4,
          rotateZ: 25,
          translateX: 0,
          translateY: -5.8,
          scale: 0.9,
        },
        exportSafeTransform: "translate(0%, -5.8%) rotate(25deg) scale(0.9)",
      },
      {
        id: "isometric-top",
        name: "Isometric Top",
        values: {
          perspective: 2400,
          rotateX: 50,
          rotateY: 0,
          rotateZ: 45,
          translateX: 0,
          translateY: -8,
          scale: 0.85,
        },
        exportSafeTransform: "translate(0%, -8%) rotate(45deg) scale(0.85)",
      },
      {
        id: "table-left",
        name: "Table Left",
        values: {
          perspective: 2400,
          rotateX: 55,
          rotateY: 10,
          rotateZ: -35,
          translateX: 0,
          translateY: -10,
          scale: 0.8,
        },
        exportSafeTransform: "translate(0%, -10%) rotate(-35deg) scale(0.8)",
      },
    ],
  },
  {
    id: "zoom",
    name: "Zoom",
    presets: [
      {
        id: "zoom-center",
        name: "Zoom Center",
        values: {
          perspective: 2400,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          translateX: 0,
          translateY: 0,
          scale: 1.2,
        },
        exportSafeTransform: "translate(0%, 0%) rotate(0deg) scale(1.2)",
      },
      {
        id: "zoom-left",
        name: "Zoom Left",
        values: {
          perspective: 2400,
          rotateX: 0,
          rotateY: 8,
          rotateZ: 0,
          translateX: 15,
          translateY: 0,
          scale: 1.15,
        },
        exportSafeTransform: "translate(15%, 0%) rotate(3deg) scale(1.15)",
      },
      {
        id: "zoom-right",
        name: "Zoom Right",
        values: {
          perspective: 2400,
          rotateX: 0,
          rotateY: -8,
          rotateZ: 0,
          translateX: -15,
          translateY: 0,
          scale: 1.15,
        },
        exportSafeTransform: "translate(-15%, 0%) rotate(-3deg) scale(1.15)",
      },
      {
        id: "zoom-top",
        name: "Zoom Top",
        values: {
          perspective: 2400,
          rotateX: 5,
          rotateY: 0,
          rotateZ: 0,
          translateX: 0,
          translateY: 12,
          scale: 1.15,
        },
        exportSafeTransform: "translate(0%, 12%) rotate(0deg) scale(1.15)",
      },
      {
        id: "zoom-bottom",
        name: "Zoom Bottom",
        values: {
          perspective: 2400,
          rotateX: -5,
          rotateY: 0,
          rotateZ: 0,
          translateX: 0,
          translateY: -12,
          scale: 1.15,
        },
        exportSafeTransform: "translate(0%, -12%) rotate(0deg) scale(1.15)",
      },
    ],
  },
  {
    id: "half-section",
    name: "Half Section",
    presets: [
      {
        id: "half-left",
        name: "Half Left",
        values: {
          perspective: 2400,
          rotateX: 0,
          rotateY: 12,
          rotateZ: -2,
          translateX: 20,
          translateY: 0,
          scale: 1.25,
        },
        exportSafeTransform: "translate(20%, 0%) rotate(-2deg) scale(1.25)",
      },
      {
        id: "half-right",
        name: "Half Right",
        values: {
          perspective: 2400,
          rotateX: 0,
          rotateY: -12,
          rotateZ: 2,
          translateX: -20,
          translateY: 0,
          scale: 1.25,
        },
        exportSafeTransform: "translate(-20%, 0%) rotate(2deg) scale(1.25)",
      },
      {
        id: "half-top",
        name: "Half Top",
        values: {
          perspective: 2400,
          rotateX: 10,
          rotateY: 0,
          rotateZ: 0,
          translateX: 0,
          translateY: 18,
          scale: 1.25,
        },
        exportSafeTransform: "translate(0%, 18%) rotate(0deg) scale(1.25)",
      },
      {
        id: "half-bottom",
        name: "Half Bottom",
        values: {
          perspective: 2400,
          rotateX: -10,
          rotateY: 0,
          rotateZ: 0,
          translateX: 0,
          translateY: -18,
          scale: 1.25,
        },
        exportSafeTransform: "translate(0%, -18%) rotate(0deg) scale(1.25)",
      },
    ],
  },
  {
    id: "float",
    name: "Float",
    presets: [
      {
        id: "float-up",
        name: "Float Up",
        values: {
          perspective: 2400,
          rotateX: 12,
          rotateY: 0,
          rotateZ: 0,
          translateX: 0,
          translateY: -10,
          scale: 1.05,
        },
        exportSafeTransform: "translate(0%, -10%) rotate(0deg) scale(1.05)",
      },
      {
        id: "float-down",
        name: "Float Down",
        values: {
          perspective: 2400,
          rotateX: -8,
          rotateY: 0,
          rotateZ: 0,
          translateX: 0,
          translateY: 10,
          scale: 1.05,
        },
        exportSafeTransform: "translate(0%, 10%) rotate(0deg) scale(1.05)",
      },
      {
        id: "hover-left",
        name: "Hover Left",
        values: {
          perspective: 2000,
          rotateX: 5,
          rotateY: -15,
          rotateZ: 3,
          translateX: -8,
          translateY: -5,
          scale: 1.02,
        },
        exportSafeTransform: "translate(-8%, -5%) rotate(3deg) scale(1.02)",
      },
      {
        id: "hover-right",
        name: "Hover Right",
        values: {
          perspective: 2000,
          rotateX: 5,
          rotateY: 15,
          rotateZ: -3,
          translateX: 8,
          translateY: -5,
          scale: 1.02,
        },
        exportSafeTransform: "translate(8%, -5%) rotate(-3deg) scale(1.02)",
      },
    ],
  },
];

export const LAYOUT_PRESETS = LAYOUT_PRESET_CATEGORIES.flatMap(
  (category) => category.presets,
);

export type LayoutPresetId = (typeof LAYOUT_PRESETS)[number]["id"];

export const DEFAULT_LAYOUT_PRESET: LayoutPresetId = "default";

const LAYOUT_PRESET_ID_SET = new Set(LAYOUT_PRESETS.map((preset) => preset.id));

export function isLayoutPresetId(value: unknown): value is LayoutPresetId {
  return typeof value === "string" && LAYOUT_PRESET_ID_SET.has(value);
}

export function getLayoutPresetById(presetId: LayoutPresetId): LayoutPreset {
  return (
    LAYOUT_PRESETS.find((preset) => preset.id === presetId) ?? LAYOUT_PRESETS[0]
  );
}

export function getLayoutTransform(presetId: LayoutPresetId): string {
  const {values} = getLayoutPresetById(presetId);
  return `perspective(${values.perspective}px) translate(${values.translateX}%, ${values.translateY}%) rotateX(${values.rotateX}deg) rotateY(${values.rotateY}deg) rotateZ(${values.rotateZ}deg) scale(${values.scale})`;
}

export function getExportSafeLayoutTransform(presetId: LayoutPresetId): string {
  const {values, exportSafeTransform} = getLayoutPresetById(presetId);

  // Approximate 3D tilt in 2D exports where rotateX/rotateY may be dropped.
  const skewX = Math.max(-18, Math.min(18, values.rotateY * 0.35));
  const skewY = Math.max(-18, Math.min(18, values.rotateX * -0.28));
  const has3DTilt =
    Math.abs(values.rotateX) > 0.25 || Math.abs(values.rotateY) > 0.25;

  if (!has3DTilt) {
    return exportSafeTransform;
  }

  return `translate(${values.translateX}%, ${values.translateY}%) rotate(${values.rotateZ}deg) skewX(${skewX}deg) skewY(${skewY}deg) scale(${values.scale})`;
}

export function shouldUseExportSafeLayoutTransform(
  presetId: LayoutPresetId,
): boolean {
  const {values} = getLayoutPresetById(presetId);
  const combined3DTilt = Math.abs(values.rotateX) + Math.abs(values.rotateY);
  return combined3DTilt > 18 || Math.abs(values.rotateX) > 14;
}

export const LEGACY_LAYOUT_PRESET_MAP: Record<string, LayoutPresetId> = {
  center: "default",
  "tilt-left": "tilt-left",
  "tilt-right": "tilt-right",
  "lift-up": "float-up",
  "lift-down": "float-down",
};
