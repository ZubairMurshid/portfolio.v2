'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Cloud } from 'lucide-react';

const MotionDiv = motion.div as any;

const services = [
  { id: 'fullstack', title: 'Full-Stack Engineering', icon: <Code size={38} className="text-white/80" strokeWidth={1.5} /> },
  { id: 'ai', title: 'AI & Data Pipelines', icon: <Brain size={38} className="text-white/80" strokeWidth={1.5} />},
  { id: 'cloud', title: 'Cloud & Infrastructure', icon: <Cloud size={38} className="text-white/80" strokeWidth={1.5} /> }
];

export default function VisualMap() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {services.map((service, i) => (
          <MotionDiv
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center group cursor-default"
          >
            {/* Minimalist Icon without background */}
            <div className="mb-6 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              {service.icon}
            </div>
            
            <h3 className="text-lg md:text-xl font-display font-medium text-white mb-4 tracking-wide">
              {service.title}
            </h3>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}