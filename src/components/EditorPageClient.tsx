"use client";

import {useEffect, useState} from "react";
import CodeSnippet from "@/components/CodeSnippet";
import ScreenshotSnippet from "@/components/ScreenshotSnippet";
import CodeEditorFooter from "@/components/editor-footer/CodeEditorFooter";
import ScreenshotEditorFooter from "@/components/editor-footer/ScreenshotEditorFooter";
import {Button} from "@/components/ui/button";
import {useEditorStore} from "@/store/useEditorStore";

export default function EditorPageClient() {
  const [editorMode, setEditorMode] = useState<"code" | "screenshot">("code");
  const hydrateFromStorage = useEditorStore(
    (state) => state.hydrateFromStorage,
  );
  const screenshotSettings = useEditorStore(
    (state) => state.screenshotSettings,
  );
  const setScreenshotSettings = useEditorStore(
    (state) => state.setScreenshotSettings,
  );

  useEffect(() => {
    hydrateFromStorage();
  }, [hydrateFromStorage]);

  return (
    <div className="h-screen bg-gradient-to-b from-white via-white to-gray-50 dark:from-[#111010] dark:via-[#111010] dark:to-[#111010] flex flex-col overflow-hidden">
      <div className="fixed left-1/2 top-4 z-20 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl bg-white/30 p-2 backdrop-blur-2xl dark:bg-[#111010]/60 sm:top-6">
        <div className="flex w-full items-center justify-center">
          <Button
            type="button"
            variant={editorMode === "code" ? "outline" : "ghost"}
            className="h-9 flex-1 rounded-xl"
            onClick={() => setEditorMode("code")}
          >
            Code
          </Button>
          <Button
            type="button"
            variant={editorMode === "screenshot" ? "outline" : "ghost"}
            className="h-9 flex-1 rounded-xl"
            onClick={() => setEditorMode("screenshot")}
          >
            Screenshot
          </Button>
        </div>
      </div>

      <main className="flex-1 flex items-center justify-center w-full overflow-hidden">
        <div className="h-full w-full max-w-5xl rounded-3xl bg-white/20 backdrop-blur-2xl dark:bg-[#111010]/70 flex items-center justify-center overflow-hidden">
          {editorMode === "code" ? (
            <CodeSnippet />
          ) : (
            <ScreenshotSnippet settings={screenshotSettings} />
          )}
        </div>
      </main>

      {editorMode === "code" ? (
        <CodeEditorFooter />
      ) : (
        <ScreenshotEditorFooter
          settings={screenshotSettings}
          onSettingsChange={setScreenshotSettings}
        />
      )}
    </div>
  );
}
