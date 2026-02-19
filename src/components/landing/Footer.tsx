"use client";

export default function LandingFooter() {
  return (
    <footer className="bg-white/10 dark:bg-[#111010]/80 border-t border-white/20 dark:border-white/10 backdrop-blur-2xl">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-center justify-center">
          <div className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              Snippify
            </span>{" "}
            © 2026 • All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
