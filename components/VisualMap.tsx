'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Globe } from 'lucide-react';

const MotionDiv = motion.div as any;

const services = [
  {
    id: 'dev',
    title: 'Software Dev',
    icon: <Code size={38} className="text-white/80" strokeWidth={1.5} />,
    desc: 'Building robust, scalable applications with clean object-oriented design in Java and Python.',
  },
  {
    id: 'sec',
    title: 'Cybersecurity',
    icon: <Shield size={38} className="text-white/80" strokeWidth={1.5} />,
    desc: 'Implementing defensive architectures and ethical hacking strategies to secure modern infrastructure.',
  },
  {
    id: 'web',
    title: 'Web Engineering',
    icon: <Globe size={38} className="text-white/80" strokeWidth={1.5} />,
    desc: 'Crafting high-performance, responsive full-stack platforms using Next.js, React, and Tailwind.',
  },
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
            
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs mx-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              {service.desc}
            </p>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}