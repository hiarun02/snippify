"use client";

import {useEffect, useMemo, useState} from "react";
import Image from "next/image";
import {FaXTwitter} from "react-icons/fa6";

import {tweets as tweetData, type TweetDTO} from "@/utils/tweets";

export default function Feedback() {
  const [tweets] = useState<TweetDTO[]>(tweetData);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  const VISIBLE_COUNT = 9;
  const INTERVAL_MS = 2500;

  useEffect(() => {
    if (tweets.length <= VISIBLE_COUNT) return;
    const id = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % tweets.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [tweets.length]);

  const visibleTweets = useMemo(() => {
    if (tweets.length <= VISIBLE_COUNT) return tweets;
    return Array.from({length: VISIBLE_COUNT}, (_, i) => {
      return tweets[(startIndex + i) % tweets.length];
    });
  }, [tweets, startIndex]);

  if (loading) {
    return (
      <div className="text-center py-16">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto" />
        <div className="text-lg text-white/70 mt-4">
          Loading testimonials...
        </div>
      </div>
    );
  }

  if (error || tweets.length === 0) {
    return <></>;
  }

  return (
    <div
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16"
      id="testimonials"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          What our actual users say
        </h2>
        <p className="mt-2 text-gray-600 dark:text-white/70">
          Real feedback from X users
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleTweets.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

function TweetCard({tweet}: {tweet: TweetDTO}) {
  return (
    <div
      className="rounded-2xl p-6 bg-white border border-gray-200 hover:bg-gray-50
                 shadow-sm transition-all duration-200 cursor-pointer dark:bg-[#16181c]
                 dark:border-[#2f3336] dark:hover:bg-[#1c1f23]"
      onClick={() => {
        if (tweet.url) {
          window.open(tweet.url, "_blank");
        }
      }}
    >
      <div className="flex items-start gap-3 mb-4">
        {tweet.author.profile_image_url && (
          <Image
            src={tweet.author.profile_image_url}
            alt={tweet.author.name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full"
          />
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-bold text-gray-900 dark:text-white text-[15px] truncate">
              {tweet.author.name}
            </h3>
            {tweet.author.verified && (
              <svg
                viewBox="0 0 22 22"
                className="w-5 h-5"
                aria-label="Verified"
              >
                <path
                  d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                  fill="#1d9bf0"
                />
              </svg>
            )}
          </div>
          <p className="text-[15px] text-gray-500 dark:text-[#71767b]">
            @{tweet.author.username}
          </p>
        </div>
        <FaXTwitter className="text-gray-500 dark:text-white/60 text-lg" />
      </div>

      <div className="text-gray-800 dark:text-white leading-relaxed mb-4 text-[15px]">
        {tweet.text}
      </div>

      <div className="flex items-center justify-between text-[13px] text-gray-500 dark:text-[#71767b]">
        <span>{tweet.created_at}</span>
        <span className="text-gray-700 hover:underline dark:text-white/70">
          View on X →
        </span>
      </div>
    </div>
  );
}
