
'use client';

import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const cards = [
  { title: "Current Role", content: "CS Undergrad" },
  { title: "Building", content: "EventLK Platform" },
  { title: "Specialization", content: "Software & Security" },
  { title: "Availability", content: "Open to Work" }
];

export default function AboutSnapshot() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-20">
      {cards.map((card, i) => (
        <MotionDiv
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="glass-panel p-8 rounded-3xl text-center group hover:border-white/30 transition-all duration-500"
        >
          <div className="text-text-muted text-[9px] uppercase tracking-[0.2em] font-mono mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
            {card.title}
          </div>
          <div className="font-bold text-white font-sans text-sm tracking-tight">
            {card.content}
          </div>
        </MotionDiv>
      ))}
    </div>
  );
}
