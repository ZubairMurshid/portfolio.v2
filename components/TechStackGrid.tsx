'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const devicon = (name: string, variant = 'original') => 
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

const simpleicon = (name: string, color: string) => 
  `https://cdn.simpleicons.org/${name}/${color}`;

const coreStack = [
  { name: 'Java', src: devicon('java') },
  { name: 'JavaScript', src: devicon('javascript') },
  { name: 'Python', src: devicon('python') },
  { name: 'React', src: devicon('react') },
  { name: 'HTML5', src: devicon('html5') },
  { name: 'CSS3', src: devicon('css3') },
  { name: 'TailwindCSS', src: devicon('tailwindcss') },
  { name: 'MySQL', src: devicon('mysql') },
  { name: 'Git', src: devicon('git') },
  { name: 'Postman', src: devicon('postman') },
  { name: 'GitHub', src: simpleicon('github', 'FFFFFF') },
  { name: 'VS Code', src: devicon('vscode') },
  { name: 'IntelliJ', src: devicon('intellij') },
];

const currentlyLearning = [
  { name: 'Next.js', src: simpleicon('nextdotjs', 'FFFFFF') },
  { name: 'Node.js', src: devicon('nodejs') },
  { name: 'PostgreSQL', src: devicon('postgresql') },
  { name: 'AWS', src: '/aws-logo.png' },
  { name: 'Docker', src: devicon('docker') },
];

export default function TechStackGrid() {
  const [hovered, setHovered] = useState<string | null>(null);

  // Fix: use "as any" for framer-motion components to avoid TS element implicitly any errors
  const MotionDiv = motion.div as any;

  const groups = [
    { title: 'Core Stack', items: coreStack },
    { title: 'Currently Learning', items: currentlyLearning }
  ];

  return (
    <div className="w-full relative mt-8 mb-16 space-y-16">
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="text-center font-mono text-[11px] uppercase tracking-[0.3em] text-text-muted mb-8">
            {group.title}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
            {group.items.map((skill, i) => (
              <div 
                key={skill.name}
                className="relative flex items-center justify-center cursor-pointer group/icon"
                onMouseEnter={() => setHovered(skill.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <MotionDiv
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.02, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 md:w-12 md:h-12 relative flex items-center justify-center transition-transform hover:scale-125 duration-300"
                >
                  <img 
                    src={skill.src} 
                    alt={skill.name}
                    className="w-full h-full object-contain filter drop-shadow-md group-hover/icon:drop-shadow-xl"
                    onError={(e) => {
                      e.currentTarget.src = simpleicon(skill.name.toLowerCase().replace(/[^a-z0-9]/g, ''), 'FFFFFF');
                    }}
                  />
                </MotionDiv>

                <AnimatePresence>
                  {hovered === skill.name && (
                    <MotionDiv
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.8 }}
                      className="absolute -top-10 left-1/2 -translate-x-1/2 bg-bg-secondary border border-white/10 text-white text-[10px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap z-50 shadow-xl backdrop-blur-md"
                    >
                      {skill.name}
                    </MotionDiv>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
