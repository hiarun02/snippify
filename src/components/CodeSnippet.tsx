"use client";

import {useEffect, useRef, useState} from "react";
import Editor from "@monaco-editor/react";
import type * as MonacoEditor from "monaco-editor";
import {useEditorStore} from "@/store/useEditorStore";

const THEME_SURFACE_COLORS: Record<string, string> = {
  "snippify-midnight": "#1f2330",
  "snippify-carbon": "#1b1d22",
  "snippify-github-dark": "#0d1117",
  "snippify-emerald-night": "#08211d",
  "snippify-porcelain": "#f8fafc",
};

export default function CodeSnippet() {
  const code = useEditorStore((state) => state.code);
  const setCode = useEditorStore((state) => state.setCode);
  const gradient = useEditorStore((state) => state.codeGradient);
  const fontSize = useEditorStore((state) => state.fontSize);
  const codePadding = useEditorStore((state) => state.codePadding);
  const isBackgroundHidden = useEditorStore(
    (state) => state.isBackgroundHidden,
  );
  const showLineNumbers = useEditorStore((state) => state.showLineNumbers);
  const codeThemePreset = useEditorStore((state) => state.codeThemePreset);
  const codeLanguage = useEditorStore((state) => state.codeLanguage);
  const setPreviewRef = useEditorStore((state) => state.setPreviewRef);
  const monacoRef = useRef<typeof MonacoEditor | null>(null);
  const editorRef = useRef<MonacoEditor.editor.IStandaloneCodeEditor | null>(
    null,
  );
  const contentSizeDisposableRef = useRef<MonacoEditor.IDisposable | null>(
    null,
  );
  const effectiveFontSize = Math.max(fontSize || 16, 10);
  const effectiveCodePadding = Math.max(0, Math.min(codePadding || 0, 128));
  const defaultEditorVerticalPadding = 45;
  const editorLanguage = codeLanguage;
  const minEditorHeight = 280;
  const [editorHeight, setEditorHeight] = useState(minEditorHeight);
  const editorSurfaceColor =
    THEME_SURFACE_COLORS[codeThemePreset] ??
    THEME_SURFACE_COLORS["snippify-midnight"];

  useEffect(() => {
    return () => {
      contentSizeDisposableRef.current?.dispose();
    };
  }, []);

  const updateEditorHeight = () => {
    if (!editorRef.current) {
      return;
    }

    const contentHeight = editorRef.current.getContentHeight();
    const nextHeight = Math.max(minEditorHeight, Math.ceil(contentHeight));
    setEditorHeight(nextHeight);
    editorRef.current.layout();
  };

  return (
    <div
      ref={setPreviewRef}
      data-export-sharp-border="true"
      className={`mx-auto box-border w-full max-w-[615px] rounded-lg ${
        isBackgroundHidden ? "!bg-none shadow-none" : ""
      }`}
      style={{
        background: gradient,
        padding: `${effectiveCodePadding}px`,
      }}
    >
      <div
        data-export-sharp-border="true"
        className="relative w-full overflow-hidden rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.4),0_6px_20px_rgba(0,0,0,0.4)]"
        style={{backgroundColor: editorSurfaceColor}}
      >
        <div className="flex items-center space-x-2 absolute left-4 top-3 z-10">
          <span className="w-[9px] h-[9px] max-sm:w-2 max-sm:h-2 rounded-full bg-red-500"></span>
          <span className="w-[9px] h-[9px] max-sm:w-2 max-sm:h-2 rounded-full bg-yellow-500"></span>
          <span className="w-[9px] h-[9px] max-sm:w-2 max-sm:h-2 rounded-full bg-green-500"></span>
        </div>

        <Editor
          beforeMount={(monaco) => {
            monacoRef.current = monaco;
            monaco.editor.defineTheme("snippify-midnight", {
              base: "vs-dark",
              inherit: true,
              rules: [
                {token: "comment", foreground: "6f7685", fontStyle: "italic"},
                {token: "keyword", foreground: "ff7ab2"},
                {token: "string", foreground: "9ece6a"},
                {token: "number", foreground: "ff9e64"},
              ],
              colors: {
                "editor.background": "#1f2330",
                "editor.lineHighlightBackground": "#2a2f3a",
              },
            });
            monaco.editor.defineTheme("snippify-carbon", {
              base: "vs-dark",
              inherit: true,
              rules: [
                {token: "comment", foreground: "7d8590", fontStyle: "italic"},
                {token: "keyword", foreground: "7aa2f7"},
                {token: "string", foreground: "8dc891"},
                {token: "number", foreground: "f7b267"},
              ],
              colors: {
                "editor.background": "#1b1d22",
                "editor.lineHighlightBackground": "#242833",
              },
            });
            monaco.editor.defineTheme("snippify-github-dark", {
              base: "vs-dark",
              inherit: true,
              rules: [
                {token: "comment", foreground: "8b949e", fontStyle: "italic"},
                {token: "keyword", foreground: "ff7b72"},
                {token: "string", foreground: "a5d6ff"},
                {token: "number", foreground: "79c0ff"},
              ],
              colors: {
                "editor.background": "#0d1117",
                "editor.lineHighlightBackground": "#161b22",
              },
            });
            monaco.editor.defineTheme("snippify-emerald-night", {
              base: "vs-dark",
              inherit: true,
              rules: [
                {token: "comment", foreground: "5f9f8f", fontStyle: "italic"},
                {token: "keyword", foreground: "7ad3b0"},
                {token: "string", foreground: "b8f2d6"},
                {token: "number", foreground: "f5d17a"},
              ],
              colors: {
                "editor.background": "#08211d",
                "editor.lineHighlightBackground": "#0e2d27",
              },
            });
            monaco.editor.defineTheme("snippify-porcelain", {
              base: "vs",
              inherit: true,
              rules: [
                {token: "comment", foreground: "6b7280", fontStyle: "italic"},
                {token: "keyword", foreground: "7c3aed"},
                {token: "string", foreground: "065f46"},
                {token: "number", foreground: "b45309"},
              ],
              colors: {
                "editor.background": "#f8fafc",
                "editor.foreground": "#0f172a",
                "editor.lineHighlightBackground": "#eef2f7",
              },
            });
            monaco.languages.typescript.javascriptDefaults.setModeConfiguration(
              {
                completionItems: false,
                signatureHelp: false,
              },
            );
            monaco.languages.typescript.typescriptDefaults.setModeConfiguration(
              {
                completionItems: false,
                signatureHelp: false,
              },
            );
          }}
          onMount={(editor, monaco) => {
            editorRef.current = editor;
            editor.addCommand(
              monaco.KeyMod.CtrlCmd | monaco.KeyCode.Space,
              () => {
                // Intentionally disable manual suggestion trigger.
              },
            );
            contentSizeDisposableRef.current?.dispose();
            contentSizeDisposableRef.current =
              editor.onDidContentSizeChange(updateEditorHeight);
            updateEditorHeight();
          }}
          value={code}
          language={editorLanguage}
          theme={codeThemePreset}
          onChange={(value) => setCode(value ?? "")}
          height={`${editorHeight}px`}
          options={{
            minimap: {enabled: false},
            fontFamily:
              '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
            fontSize: effectiveFontSize,
            lineHeight: Math.round(effectiveFontSize * 1.6),
            lineNumbers: showLineNumbers ? "on" : "off",
            scrollBeyondLastLine: false,
            wordWrap: "on",
            automaticLayout: true,
            roundedSelection: true,
            renderLineHighlight: "all",
            cursorStyle: "line",
            cursorBlinking: "smooth",
            cursorSmoothCaretAnimation: "on",
            smoothScrolling: true,
            overviewRulerBorder: false,
            overviewRulerLanes: 0,
            renderValidationDecorations: "off",
            hideCursorInOverviewRuler: true,
            quickSuggestions: false,
            suggestOnTriggerCharacters: false,
            wordBasedSuggestions: "off",
            inlineSuggest: {enabled: false},
            parameterHints: {enabled: false},
            snippetSuggestions: "none",
            suggest: {showSnippets: false},
            acceptSuggestionOnEnter: "off",
            tabCompletion: "off",
            padding: {
              top: defaultEditorVerticalPadding,
              bottom: defaultEditorVerticalPadding,
            },
          }}
        />
      </div>
    </div>
  );
}
