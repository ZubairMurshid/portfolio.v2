'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MotionDiv = motion.div as any;

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // High-performance motion values bypass React's render loop for every pixel movement
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // "Ultra Snappy" spring settings: High stiffness, low damping for instant but smooth following
  const springConfig = { stiffness: 1000, damping: 50, mass: 0.1 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window === 'undefined') return null;

  return (
    <MotionDiv
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      style={{
        x: springX,
        y: springY,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <MotionDiv
        animate={{
          scale: isHovering ? 1.4 : 1,
          rotate: isHovering ? -5 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="relative -top-1 -left-1"
      >
        {/* Custom White Pointer Shape from Reference */}
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
        >
          <path 
            d="M3 3L21 11L13 13L11 21L3 3Z" 
            fill="white" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </MotionDiv>
    </MotionDiv>
  );
}