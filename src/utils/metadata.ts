import {Metadata} from "next";

export function generateEditorMetadata(): Metadata {
  return {
    title:
      "Code Snippet Editor v2 - Advanced Code Editor & Screenshot Generator | Snippify",
    description:
      "Free online code editor with 50+ language support, syntax highlighting, 22+ themes, and professional screenshot generator. Create beautiful code snippet images instantly.",
    keywords: [
      "code editor",
      "syntax highlighter",
      "code snippet editor",
      "screenshot generator",
      "code beautifier",
      "code visualization",
      "developer tools",
      "code sharing",
    ],
    openGraph: {
      type: "website",
      title: "Advanced Code Editor & Screenshot Generator - Snippify v2",
      description:
        "Powerful code editor with 50+ languages and professional screenshot tool. Create stunning code snippet images.",
      url: "https://snippify.dev/editor",
      images: [
        {
          url: "/preview.png",
          width: 1200,
          height: 630,
          alt: "Snippify Code Editor - Advanced Code Snippet Generator",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Code Editor & Screenshot Generator - Snippify",
      description:
        "Advanced code editor with 50+ languages and professional screenshot tool for creating beautiful code snippet images.",
      images: ["/preview.png"],
    },
  };
}
