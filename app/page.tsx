'use client';

import React, { useState, useEffect, useRef } from 'react';

const LOADING_MESSAGES = [
  "Assembling pixels…",
  "Convincing CSS to behave…",
  "Bribing the layout engine…",
  "Importing unnecessary dependencies…",
  "Optimizing the part no one sees…",
  "De-hardcoding hardcoded values…",
  "Rebasing reality onto main…",
  "Teaching JavaScript some manners…",
  "Aligning divs (again)…",
  "Running 'just one more' build…"
];

const DURATION = 8000; // 8 seconds

export default function LoaderPage() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const requestRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const animate = (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      const timeElapsed = time - startTimeRef.current;
      const nextProgress = Math.min((timeElapsed / DURATION) * 100, 100);

      setProgress(nextProgress);

      // Calculate which message to show based on progress percentage
      // We have 10 messages, so we switch every 10% roughly
      const msgIdx = Math.min(
        Math.floor((nextProgress / 100) * LOADING_MESSAGES.length),
        LOADING_MESSAGES.length - 1
      );
      setMessageIndex(msgIdx);

      if (timeElapsed < DURATION) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        setIsLoaded(true);
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] flex items-center justify-center font-jetbrains-mono selection:bg-[#264f78] selection:text-white">
      {/* 
        We use a max-width container to hold the loader elements.
        The font 'font-jetbrains-mono' is applied via the layout configuration or style injection below.
      */}
      <div className="w-full max-w-md px-6 flex flex-col gap-2">
        
        {/* Dynamic Loading Text */}
        <div className="h-6 text-sm md:text-base font-medium whitespace-nowrap overflow-hidden text-ellipsis text-[#9cdcfe]">
          {isLoaded ? "System Ready." : LOADING_MESSAGES[messageIndex]}
        </div>

        {/* Progress Bar Container */}
        <div className="flex items-center gap-4">
          
          {/* Bar Background */}
          <div className="flex-grow h-2 bg-[#333333] rounded-full overflow-hidden">
            {/* Animated Fill */}
            <div 
              className="h-full bg-[#4caf50] transition-all duration-75 ease-linear rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Numeric Percentage */}
          <div className="w-12 text-right font-bold text-[#ce9178]">
            {Math.floor(progress)}%
          </div>
        </div>

      </div>
      
      {/* Inline style to ensure JetBrains Mono is available if not globally configured */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap');
        .font-jetbrains-mono {
          font-family: 'JetBrains Mono', monospace;
        }
      `}</style>
    </div>
  );
}