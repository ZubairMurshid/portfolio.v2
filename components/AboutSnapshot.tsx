
'use client';

import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const cards = [
  { title: "Current Target", content: "Software Eng Intern" },
  { title: "Building", content: "EventLK (AI Platform)" },
  { title: "Specialization", content: "Full-Stack & Cloud" },
  { title: "Core Stack", content: "Java & React/Node" }
];

export default function AboutSnapshot() {
  return (
    <div className="grid grid-cols-2 gap-4 my-20 max-w-2xl lg:max-w-3xl mx-auto px-2">
      {cards.map((card, i) => (
        <MotionDiv
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="glass-panel p-6 md:p-8 rounded-2xl md:rounded-3xl text-center group flex flex-col justify-center hover:border-white/30 transition-all duration-500 min-h-[120px] md:min-h-[140px]"
        >
          <div className="text-[#A1A1AA] text-[10px] md:text-xs uppercase tracking-[0.25em] font-mono mb-2 md:mb-3 opacity-70 group-hover:opacity-100 transition-opacity">
            {card.title}
          </div>
          <div className="font-bold text-white font-sans text-base md:text-xl lg:text-2xl tracking-tight">
            {card.content}
          </div>
        </MotionDiv>
      ))}
    </div>
  );
}
