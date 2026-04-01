"use client";

import Link from "next/link";
import Image from "next/image";
import {FaArrowRight, FaStar} from "react-icons/fa";
import {useEffect, useState} from "react";

import {Button} from "@/components/ui/button";

export default function Hero() {
  const [stars, setStars] = useState<number | null>(null);
  const [displayStars, setDisplayStars] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const toolSlides = [
    {
      title: "Tool 1: Code Snippet",
      description:
        "Paste code, adjust font and background gradient, and export developer-friendly images.",
      image: "/toolOne.png",
      alt: "Code Snippet editor preview",
    },
    {
      title: "Tool 2: Screenshot Snippet",
      description:
        "Upload product screenshots, tune padding/corner/shadow, and export clean presentation-ready frames.",
      image: "/toolSecond.png",
      alt: "Screenshot Snippet editor preview",
    },
  ];

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/hiarun02/snippify",
        );
        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status}`);
        }
        const data = await res.json();
        if (typeof data?.stargazers_count === "number") {
          setStars(data.stargazers_count);
        }
      } catch (error) {
        console.error("Failed to fetch stars", error);
      }
    };

    fetchStars();
  }, []);

  useEffect(() => {
    if (stars === null) return;
    let current = 0;
    const target = stars;
    const step = Math.max(1, Math.floor(target / 40));
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      setDisplayStars(current);
      if (current >= target) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, [stars]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % toolSlides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [toolSlides.length]);

  return (
    <section id="hero" className="bg-white pb-16 pt-20 dark:bg-[#111010]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 text-center">
        <div className="space-y-4 sm:max-w-3xl">
          {/* badge */}
          <div>
            <span className="mb-5 inline-block rounded-full bg-gray-100/60 px-3 py-1 text-sm font-medium dark:bg-amber-200/20 dark:text-amber-300">
              Version 2.0.0
            </span>
          </div>
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-5xl">
            Snippify: Code & Screenshot to Stunning Visuals
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
            Transform your code and screenshots into stunning visuals with
            Snippify.
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <Button
            size="lg"
            className="w-full justify-center px-6 sm:w-auto"
            asChild
          >
            <Link href="/editor">
              Open Editor <FaArrowRight />{" "}
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full justify-center sm:w-auto"
            asChild
          >
            <Link
              href="https://github.com/hiarun02/snippify"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              Star on GitHub <FaStar className="text-yellow-500" />
              {stars === null ? (
                <span
                  className="inline-block ml-1 h-3 w-3 rounded-full border-2 border-gray-400 border-t-transparent animate-spin dark:border-gray-400"
                  aria-hidden="true"
                />
              ) : (
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {displayStars.toLocaleString()}
                </span>
              )}
            </Link>
          </Button>
        </div>

        <div className="w-full max-w-5xl rounded-2xl border border-black/10 bg-white/80 p-3 shadow-xl backdrop-blur dark:border-white/10 dark:bg-[#111010]/80 sm:p-4">
          <div className="overflow-hidden rounded-xl border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{transform: `translateX(-${activeSlide * 100}%)`}}
            >
              {toolSlides.map((slide) => (
                <div key={slide.title} className="w-full shrink-0 p-2 sm:p-3">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-black/10 bg-white dark:border-white/10 dark:bg-[#171717]">
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 900px"
                      priority
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 rounded-lg border border-black/10 bg-white/70 px-4 py-3 text-left dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-semibold text-gray-900 dark:text-white sm:text-base">
              {toolSlides[activeSlide].title}
            </p>
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-300 sm:text-sm">
              {toolSlides[activeSlide].description}
            </p>
          </div>

          <div className="mt-3 flex items-center justify-between gap-3 px-1">
            <div className="flex gap-2">
              {toolSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeSlide === index
                      ? "w-8 bg-emerald-500"
                      : "w-2.5 bg-gray-300 dark:bg-gray-700"
                  }`}
                  aria-label={`Show ${slide.title}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              {toolSlides.map((slide, index) => (
                <button
                  key={`tab-${slide.title}`}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors sm:text-sm ${
                    activeSlide === index
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-300/20 dark:text-emerald-300"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-white/10 dark:text-gray-300 dark:hover:bg-white/15"
                  }`}
                >
                  {index === 0 ? "Code Tool" : "Screenshot Tool"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
