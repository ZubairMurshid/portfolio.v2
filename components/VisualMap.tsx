'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Globe } from 'lucide-react';

const MotionDiv = motion.div as any;

const nodes = [
  {
    id: 'dev',
    title: 'Software Dev',
    icon: <Code size={32} />,
    desc: 'Java, Python, OOP',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'sec',
    title: 'Cybersecurity',
    icon: <Shield size={32} />,
    desc: 'Network Security, Ethical Hacking',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'web',
    title: 'Web Engineering',
    icon: <Globe size={32} />,
    desc: 'Next.js, React, Tailwind',
    color: 'from-violet-500 to-purple-500',
  },
];

export default function VisualMap() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="py-12 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {nodes.map((node) => (
          <MotionDiv
            key={node.id}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer overflow-hidden group`}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${node.color} transition-opacity duration-300`} />
            
            <div className="flex flex-col items-center text-center relative z-10">
              <div className={`p-4 rounded-full bg-gradient-to-br ${node.color} text-white mb-4 shadow-lg`}>
                {node.icon}
              </div>
              <h3 className="text-xl font-bold font-display mb-2">{node.title}</h3>
              <p className="text-text-secondary">{node.desc}</p>
            </div>

            {/* Connecting lines effect (visual only) */}
            <div className="absolute top-1/2 -right-4 w-8 h-px bg-accent-blue/20 hidden md:block last:hidden" />
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}