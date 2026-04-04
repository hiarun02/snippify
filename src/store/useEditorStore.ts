import {create} from "zustand";
import {
  DEFAULT_LAYOUT_PRESET,
  LEGACY_LAYOUT_PRESET_MAP,
  isLayoutPresetId,
  type LayoutPresetId,
} from "@/constants/layoutPresets";

export type ScreenshotAspectRatio =
  | "16:9"
  | "3:2"
  | "4:3"
  | "5:4"
  | "1:1"
  | "4:5"
  | "3:4"
  | "2:3"
  | "9:16";

export type ScreenshotLayoutPreset = LayoutPresetId;

export interface ScreenshotSettings {
  paddingPercent: number;
  borderStyle: "sharp" | "curved" | "round";
  shadowStyle: "none" | "hug" | "soft" | "strong";
  layoutPreset: ScreenshotLayoutPreset;
  aspectRatio: ScreenshotAspectRatio;
  frameStyle:
    | "default"
    | "glass-light"
    | "glass-dark"
    | "border"
    | "border-dark";
}

type ScreenshotFrameStyle = ScreenshotSettings["frameStyle"];

interface EditorStore {
  // Code
  code: string;
  setCode: (code: string) => void;

  // Font Size
  fontSize: number;
  setFontSize: (fontSize: number) => void;

  // Code snippet padding
  codePadding: number;
  setCodePadding: (codePadding: number) => void;

  // Code gradient
  codeGradient: string;
  setCodeGradient: (gradient: string) => void;

  // Screenshot gradient
  screenshotGradient: string;
  setScreenshotGradient: (gradient: string) => void;

  // Background
  isBackgroundHidden: boolean;
  setIsBackgroundHidden: (isBackgroundHidden: boolean) => void;

  // Line Numbers
  showLineNumbers: boolean;
  setShowLineNumbers: (showLineNumbers: boolean) => void;

  // Code theme preset
  codeThemePreset: string;
  setCodeThemePreset: (codeThemePreset: string) => void;

  // Code language
  codeLanguage: string;
  setCodeLanguage: (codeLanguage: string) => void;

  // Uploaded image (screenshot)
  uploadedImage: string;
  setUploadedImage: (image: string) => void;

  // Screenshot settings
  screenshotSettings: ScreenshotSettings;
  setScreenshotSettings: (settings: ScreenshotSettings) => void;

  // Export Loading
  isExporting: boolean;
  setIsExporting: (isExporting: boolean) => void;

  // Preview Ref
  previewRef: HTMLDivElement | null;
  setPreviewRef: (ref: HTMLDivElement | null) => void;

  // Client hydration
  hydrateFromStorage: () => void;
}

type PersistedEditorState = {
  code: string;
  fontSize: number;
  codePadding: number;
  codeGradient: string;
  screenshotGradient: string;
  isBackgroundHidden: boolean;
  showLineNumbers: boolean;
  codeThemePreset: string;
  codeLanguage: string;
  uploadedImage: string;
  screenshotSettings: ScreenshotSettings;
};

const DEFAULT_CODE =
  'function greetUser(name) {\n  const cleanName = name.trim();\n  if (!cleanName) return "Hello, guest!";\n  return `Hello, ${cleanName}!`;\n}\n\ngreetUser("Arun");';
const DEFAULT_GRADIENT =
  "center / cover no-repeat url('/screenshot-bgs/macos-gold.svg')";
const DEFAULT_SCREENSHOT_GRADIENT =
  "center / cover no-repeat url('/screenshot-bgs/mac-bg-4.jpg')";
const STORAGE_KEY = "snippify-editor-state";
const CODE_SAVE_DEBOUNCE_MS = 250;
const MAX_PERSISTED_IMAGE_SIZE_BYTES = 4 * 1024 * 1024;

const DEFAULT_SCREENSHOT_SETTINGS: ScreenshotSettings = {
  paddingPercent: 5,
  borderStyle: "curved",
  shadowStyle: "none",
  layoutPreset: DEFAULT_LAYOUT_PRESET,
  aspectRatio: "16:9",
  frameStyle: "default",
};

const isValidLayoutPreset = (
  value: unknown,
): value is ScreenshotLayoutPreset => {
  return isLayoutPresetId(value);
};

const normalizeFrameStyle = (value: unknown): ScreenshotFrameStyle => {
  if (value === "outline") {
    return "border";
  }

  if (
    value === "default" ||
    value === "glass-light" ||
    value === "glass-dark" ||
    value === "border" ||
    value === "border-dark"
  ) {
    return value;
  }

  return DEFAULT_SCREENSHOT_SETTINGS.frameStyle;
};

const normalizeScreenshotSettings = (
  settings?: Partial<ScreenshotSettings>,
): ScreenshotSettings => {
  return {
    ...DEFAULT_SCREENSHOT_SETTINGS,
    ...(settings ?? {}),
    frameStyle: normalizeFrameStyle(settings?.frameStyle),
    layoutPreset: (() => {
      const rawLayout = settings?.layoutPreset;
      if (isValidLayoutPreset(rawLayout)) {
        return rawLayout;
      }
      if (
        typeof rawLayout === "string" &&
        LEGACY_LAYOUT_PRESET_MAP[rawLayout]
      ) {
        return LEGACY_LAYOUT_PRESET_MAP[rawLayout];
      }
      return DEFAULT_SCREENSHOT_SETTINGS.layoutPreset;
    })(),
  };
};

const getStoredState = (): Partial<PersistedEditorState> | null => {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error("Failed to load state from localStorage:", error);
    return null;
  }
};

export const useEditorStore = create<EditorStore>((set) => {
  let persistedCache: PersistedEditorState | null = null;
  let codeSaveTimeout: ReturnType<typeof setTimeout> | null = null;
  let pendingCodePatch: Partial<PersistedEditorState> = {};

  const getDefaultPersistedState = (): PersistedEditorState => ({
    code: DEFAULT_CODE,
    fontSize: 17,
    codePadding: 64,
    codeGradient: DEFAULT_GRADIENT,
    screenshotGradient: DEFAULT_SCREENSHOT_GRADIENT,
    isBackgroundHidden: false,
    showLineNumbers: false,
    codeThemePreset: "snippify-midnight",
    codeLanguage: "javascript",
    uploadedImage: "",
    screenshotSettings: DEFAULT_SCREENSHOT_SETTINGS,
  });

  const ensurePersistedCache = (): PersistedEditorState => {
    if (persistedCache) {
      return persistedCache;
    }

    const stored = getStoredState();
    const defaults = getDefaultPersistedState();
    persistedCache = {
      ...defaults,
      ...stored,
      screenshotSettings: normalizeScreenshotSettings(
        stored?.screenshotSettings,
      ),
    };
    return persistedCache;
  };

  const writePersistedState = (nextState: PersistedEditorState) => {
    if (typeof window === "undefined") return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
    } catch (error) {
      console.error("Failed to save state to localStorage:", error);
    }
  };

  const saveToLocalStorage = (
    patch: Partial<PersistedEditorState>,
    options: {debounceCode?: boolean} = {},
  ) => {
    const nextState: PersistedEditorState = {
      ...ensurePersistedCache(),
      ...patch,
      screenshotSettings: {
        ...ensurePersistedCache().screenshotSettings,
        ...(patch.screenshotSettings ?? {}),
      },
    };
    persistedCache = nextState;

    if (!options.debounceCode) {
      writePersistedState(nextState);
      return;
    }

    pendingCodePatch = {...pendingCodePatch, ...patch};
    if (codeSaveTimeout) {
      clearTimeout(codeSaveTimeout);
    }
    codeSaveTimeout = setTimeout(() => {
      const mergedState: PersistedEditorState = {
        ...ensurePersistedCache(),
        ...pendingCodePatch,
        screenshotSettings: {
          ...ensurePersistedCache().screenshotSettings,
          ...(pendingCodePatch.screenshotSettings ?? {}),
        },
      };
      persistedCache = mergedState;
      writePersistedState(mergedState);
      pendingCodePatch = {};
      codeSaveTimeout = null;
    }, CODE_SAVE_DEBOUNCE_MS);
  };

  return {
    // Code state
    code: DEFAULT_CODE,
    setCode: (code) => {
      const newState = {code};
      saveToLocalStorage(newState, {debounceCode: true});
      set(newState);
    },

    // Font size state
    fontSize: 17,
    setFontSize: (fontSize) => {
      const newState = {fontSize};
      saveToLocalStorage(newState);
      set(newState);
    },

    // Code snippet padding state
    codePadding: 64,
    setCodePadding: (codePadding) => {
      const newState = {codePadding};
      saveToLocalStorage(newState);
      set(newState);
    },

    // Code gradient state
    codeGradient: DEFAULT_GRADIENT,
    setCodeGradient: (gradient) => {
      const newState = {codeGradient: gradient};
      saveToLocalStorage(newState);
      set(newState);
    },

    // Screenshot gradient state
    screenshotGradient: DEFAULT_SCREENSHOT_GRADIENT,
    setScreenshotGradient: (gradient) => {
      const newState = {screenshotGradient: gradient};
      saveToLocalStorage(newState);
      set(newState);
    },

    // Background state
    isBackgroundHidden: false,
    setIsBackgroundHidden: (isBackgroundHidden) => {
      const newState = {isBackgroundHidden};
      saveToLocalStorage(newState);
      set(newState);
    },

    // Line numbers state
    showLineNumbers: false,
    setShowLineNumbers: (showLineNumbers) => {
      const newState = {showLineNumbers};
      saveToLocalStorage(newState);
      set(newState);
    },

    // Code theme preset state
    codeThemePreset: "snippify-midnight",
    setCodeThemePreset: (codeThemePreset) => {
      const newState = {codeThemePreset};
      saveToLocalStorage(newState);
      set(newState);
    },

    // Code language state
    codeLanguage: "javascript",
    setCodeLanguage: (codeLanguage) => {
      const newState = {codeLanguage};
      saveToLocalStorage(newState);
      set(newState);
    },

    // Uploaded image state
    uploadedImage: "",
    setUploadedImage: (uploadedImage) => {
      if (uploadedImage.length > MAX_PERSISTED_IMAGE_SIZE_BYTES * 1.37) {
        console.warn(
          "Uploaded image is too large to persist safely; ignoring save.",
        );
        set({uploadedImage});
        return;
      }
      const newState = {uploadedImage};
      saveToLocalStorage(newState);
      set(newState);
    },

    screenshotSettings: DEFAULT_SCREENSHOT_SETTINGS,
    setScreenshotSettings: (screenshotSettings) => {
      const newState = {screenshotSettings};
      saveToLocalStorage(newState);
      set(newState);
    },

    // Export loading state
    isExporting: false,
    setIsExporting: (isExporting) => set({isExporting}),

    // Preview ref state
    previewRef: null,
    setPreviewRef: (previewRef) => set({previewRef}),

    hydrateFromStorage: () => {
      const storedState = getStoredState();
      if (!storedState) return;

      set((state) => ({
        ...state,
        code: storedState.code ?? state.code,
        fontSize: storedState.fontSize ?? state.fontSize,
        codePadding: storedState.codePadding ?? state.codePadding,
        codeGradient: storedState.codeGradient ?? state.codeGradient,
        screenshotGradient:
          storedState.screenshotGradient ?? state.screenshotGradient,
        isBackgroundHidden:
          storedState.isBackgroundHidden ?? state.isBackgroundHidden,
        showLineNumbers: storedState.showLineNumbers ?? state.showLineNumbers,
        codeThemePreset: storedState.codeThemePreset ?? state.codeThemePreset,
        codeLanguage: storedState.codeLanguage ?? state.codeLanguage,
        uploadedImage: storedState.uploadedImage ?? state.uploadedImage,
        screenshotSettings: storedState.screenshotSettings
          ? normalizeScreenshotSettings({
              ...state.screenshotSettings,
              ...storedState.screenshotSettings,
            })
          : state.screenshotSettings,
      }));

      persistedCache = {
        ...getDefaultPersistedState(),
        ...storedState,
        screenshotSettings: normalizeScreenshotSettings(
          storedState.screenshotSettings,
        ),
      };
    },
  };
});
