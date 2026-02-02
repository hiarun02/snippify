import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Analytics} from "@vercel/analytics/next";
import {SpeedInsights} from "@vercel/speed-insights/next";

import "@/styles/globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Snipture - Generate Beautiful Code Snippet Images Online Free",
  description:
    "Create stunning, shareable code snippet images with 22+ professional themes and gradients. Perfect for screenshots, blogs, and social media. No watermarks.",
  keywords:
    "code snippet, code image generator, screenshot generator, code beautifier, syntax highlighter, code sharing tool",
  authors: [{name: "Arun Kumar", url: "https://x.com/hiarun02"}],
  creator: "Arun Kumar",
  icons: {
    icon: "/icon.svg",
  },
  metadataBase: new URL("https://snipture.hiarun.me"),
  alternates: {
    canonical: "https://snipture.hiarun.me",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://snipture.hiarun.me",
    title: "Snipture - Generate Beautiful Code Snippet Images",
    description:
      "Transform your code into beautiful, shareable images with 22+ themes and gradients. Free, fast, and no sign-up required.",
    siteName: "Snipture",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Snipture - Code Snippet Image Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snipture - Code Snippet Image Generator",
    description:
      "Create stunning code snippet images with professional themes.",
    creator: "@hiarun02",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen overflow-x-hidden overflow-y-auto bg-background text-foreground`}
      >
        <ThemeProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
