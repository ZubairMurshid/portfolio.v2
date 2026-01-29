
'use client';
import { motion, useScroll, useSpring } from 'framer-motion';

// Fix: Using 'as any' to suppress motion property type errors
const MotionDiv = motion.div as any;

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    /* Fix: Replaced motion.div with MotionDiv */
    <MotionDiv
      className="fixed top-0 left-0 right-0 h-1 bg-accent-blue origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}
