import {create} from "zustand";
import type {ThemeStyle} from "@/lib/theme";

interface EditorStore {
  // Language
  language: string;
  setLanguage: (language: string) => void;

  // Theme
  theme: ThemeStyle | "";
  setTheme: (theme: ThemeStyle | "") => void;

  // Font Size
  fontSize: number;
  setFontSize: (fontSize: number) => void;

  // Gradient
  gradient: string;
  setGradient: (gradient: string) => void;

  // Background
  isBackgroundHidden: boolean;
  setIsBackgroundHidden: (isBackgroundHidden: boolean) => void;

  // Line Numbers
  showLineNumbers: boolean;
  setShowLineNumbers: (showLineNumbers: boolean) => void;

  // Export Loading
  isExporting: boolean;
  setIsExporting: (isExporting: boolean) => void;

  // Preview Ref
  previewRef: HTMLDivElement | null;
  setPreviewRef: (ref: HTMLDivElement | null) => void;
}

export const useEditorStore = create<EditorStore>((set) => ({
  // Language state
  language: "javascript",
  setLanguage: (language) => set({language}),

  // Theme state
  theme: "",
  setTheme: (theme) => set({theme}),

  // Font size state
  fontSize: 14,
  setFontSize: (fontSize) => set({fontSize}),

  // Gradient state
  gradient:
    "linear-gradient( 177.5deg,  rgba(255,200,42,1) 28.3%, rgba(202,32,132,1) 79.8% )",
  setGradient: (gradient) => set({gradient}),

  // Background state
  isBackgroundHidden: false,
  setIsBackgroundHidden: (isBackgroundHidden) => set({isBackgroundHidden}),

  // Line numbers state
  showLineNumbers: true,
  setShowLineNumbers: (showLineNumbers) => set({showLineNumbers}),

  // Export loading state
  isExporting: false,
  setIsExporting: (isExporting) => set({isExporting}),

  // Preview ref state
  previewRef: null,
  setPreviewRef: (previewRef) => set({previewRef}),
}));
