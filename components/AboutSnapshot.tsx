'use client';

import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const cards = [
  { title: "Current Role", content: "CS Undergraduate @ IIT" },
  { title: "Building", content: "EventLK Platform" },
  { title: "Focus", content: "Full Stack & Security" },
  { title: "Status", content: "Open to Work" }
];

export default function AboutSnapshot() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
      {cards.map((card, i) => (
        <MotionDiv
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="glass-panel p-6 rounded-xl text-center hover:border-accent-blue/50 transition-colors"
        >
          <div className="text-text-muted text-xs uppercase tracking-wider mb-2">{card.title}</div>
          <div className="font-bold text-accent-blue font-display">{card.content}</div>
        </MotionDiv>
      ))}
    </div>
  );
}