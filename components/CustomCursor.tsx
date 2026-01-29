
'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Fix: Using 'as any' to suppress motion property type errors
const MotionDiv = motion.div as any;

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Fix: Replaced motion.div with MotionDiv */}
      <MotionDiv
        className="fixed top-0 left-0 w-4 h-4 bg-accent-blue rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
        animate={{ 
          x: mousePosition.x - 8, 
          y: mousePosition.y - 8, 
          scale: isHovering ? 2.5 : 1 
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      {/* Fix: Replaced motion.div with MotionDiv */}
      <MotionDiv
        className="fixed top-0 left-0 w-8 h-8 border border-accent-blue rounded-full pointer-events-none z-[100] hidden md:block"
        animate={{ 
          x: mousePosition.x - 16, 
          y: mousePosition.y - 16, 
          scale: isHovering ? 1.5 : 1 
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
    </>
  );
}
