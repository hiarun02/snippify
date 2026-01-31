"use client";

import Link from "next/link";
import {FaArrowRight, FaStar} from "react-icons/fa";

import {Button} from "@/components/ui/button";
import FeturesSection from "./FeturesSection";

export default function Hero() {
  return (
    <section id="hero" className="bg-white pb-16 pt-20 dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 text-center">
        <div className="space-y-4 sm:max-w-3xl">
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-5xl">
            Beautiful Code Shots for Any Stack
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
            Paste your snippet, choose a style, and export polished visuals
            ready for docs, decks, and social posts.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <Button
            size="lg"
            className="w-full max-w-xs justify-center px-6 sm:w-auto sm:max-w-none"
            asChild
          >
            <Link href="/editor">
              Try now its free <FaArrowRight />{" "}
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full max-w-xs justify-center sm:hidden"
            asChild
          >
            <Link
              href="https://github.com/hiarun02/Snippify"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              Star on GitHub <FaStar className="text-yellow-500" />
            </Link>
          </Button>
        </div>
        <FeturesSection />
      </div>
    </section>
  );
}
