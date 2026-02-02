import {Metadata} from "next";

export function generateEditorMetadata(): Metadata {
  return {
    title: "Code Snippet Editor - Snipture",
    description:
      "Free online code snippet editor with syntax highlighting, themes, and gradients. Generate beautiful code images instantly.",
    keywords:
      "code editor, syntax highlighter, snippet generator, code screenshot, code beautifier",
    openGraph: {
      title: "Code Snippet Editor - Snipture",
      description:
        "Create beautiful code snippet images with professional themes",
      url: "https://snipture.dev/editor",
    },
  };
}

export function generateHomeMetadata(): Metadata {
  return {
    title: "Dashboard - Snipture",
    description:
      "Explore Snipture features and start creating beautiful code snippets",
    openGraph: {
      title: "Dashboard - Snipture",
      url: "https://snipture.dev/home",
    },
  };
}
