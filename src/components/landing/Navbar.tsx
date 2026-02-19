"use client";

import Image from "next/image";
import Link from "next/link";
import {FaArrowAltCircleRight} from "react-icons/fa";
import {FiMoon, FiSun} from "react-icons/fi";
import {useEffect, useState} from "react";
import {useTheme} from "next-themes";

import {Button} from "@/components/ui/button";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const {theme, systemTheme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-4 z-50 border-b border-white/70 dark:border-transparent">
      <div className="mx-auto max-w-6xl px-4 ">
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/20 dark:border-gray-700 bg-transparent dark:bg-[#111010] px-4 py-3 shadow-sm shadow-black/5 backdrop-blur-2xl dark:shadow-black/50">
          <div className="flex items-center ">
            <span className="flex h-10 w-10 items-center justify-center rounded-full text-base font-semibold text-white">
              <Image
                className="rounded-full"
                src="/icon.svg"
                alt="Snippify logo"
                width={24}
                height={24}
                priority
              />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Snippify
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="h-10 w-10 rounded-full border-gray-300 bg-white p-0 hover:bg-gray-50 dark:border-gray-700 dark:bg-[#111010] dark:hover:bg-[#111010]/90"
              aria-label="Toggle theme"
              onClick={() => {
                const currentTheme = theme === "system" ? systemTheme : theme;
                setTheme(currentTheme === "dark" ? "light" : "dark");
              }}
            >
              {mounted &&
              ((theme === "system" ? systemTheme : theme) ?? "light") ===
                "dark" ? (
                <FiSun className="text-yellow-400" />
              ) : (
                <FiMoon className="text-gray-700" />
              )}
            </Button>
            <Button variant="default" className="rounded-3xl" asChild>
              <Link href="/editor">
                Editor <FaArrowAltCircleRight />{" "}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
