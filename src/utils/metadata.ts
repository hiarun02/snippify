import {Metadata} from "next";

export function generateEditorMetadata(): Metadata {
  return {
    title: "Code Snippet Editor - Snippify",
    description:
      "Free online code snippet editor with syntax highlighting, themes, and gradients. Generate beautiful code images instantly.",
    keywords:
      "code editor, syntax highlighter, snippet generator, code screenshot, code beautifier",
    openGraph: {
      title: "Code Snippet Editor - Snippify",
      description:
        "Create beautiful code snippet images with professional themes",
      url: "https://www.snippify.live/editor",
    },
  };
}

export function generateHomeMetadata(): Metadata {
  return {
    title: "Dashboard - Snippify",
    description:
      "Explore Snippify features and start creating beautiful code snippets",
    openGraph: {
      title: "Dashboard - Snippify",
      url: "https://www.snippify.live/home",
    },
  };
}
