'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const MotionDiv = motion.div as any;

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // We use raw motion values for X and Y to ensure 1:1 mapping with the hardware cursor.
  // Using useSpring here, even with high stiffness, adds a physical "follow" delay.
  // Passing raw motion values to the 'style' prop updates the transform directly without React re-renders.
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Batch visibility check
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, cursorX, cursorY]);

  if (typeof window === 'undefined') return null;

  return (
    <MotionDiv
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <MotionDiv
        animate={{
          scale: isHovering ? 1.25 : 1,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 1000, 
          damping: 40,
          mass: 0.2
        }}
        className="relative -top-[1px] -left-[1px]"
      >
        {/* Adjusted Pointer Shape: Vertical, sharp, and plain white as requested */}
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        >
          <path 
            d="M4 2 L4 21 L9.5 15.5 L17 15.5 L4 2 Z" 
            fill="white" 
            stroke="white" 
            strokeWidth="1" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </MotionDiv>
    </MotionDiv>
  );
}