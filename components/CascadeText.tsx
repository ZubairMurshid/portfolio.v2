"use client";

import { motion } from "framer-motion";

interface CascadeTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function CascadeText({
  children,
  className,
  delay = 0,
}: CascadeTextProps) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + i * 0.05,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className={className}>
      {children.split(" ").map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={variants}
          initial="hidden"
          animate="visible"
          style={{ display: "inline-block", paddingRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
