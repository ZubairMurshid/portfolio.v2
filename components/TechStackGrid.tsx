'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const devicon = (name: string, variant = 'original') => 
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

const simpleicon = (name: string, color: string) => 
  `https://cdn.simpleicons.org/${name}/${color}`;

const skills = [
  { name: 'React', src: devicon('react') },
  { name: 'Postman', src: devicon('postman') },
  { name: 'Next.js', src: simpleicon('nextdotjs', 'FFFFFF') },
  { name: 'Lightroom', src: '/lightroom.png' },
  { name: 'VS Code', src: devicon('vscode') },
  { name: 'Photoshop', src: '/photoshop.png' },
  { name: 'Python', src: devicon('python') },
  { name: 'TailwindCSS', src: devicon('tailwindcss') },
  { name: 'C++', src: devicon('cplusplus') },
  { name: 'Git', src: devicon('git') },
  { name: 'JavaScript', src: devicon('javascript') },
  { name: 'MySQL', src: devicon('mysql') },
  { name: 'Figma', src: devicon('figma') },
  { name: 'HTML5', src: devicon('html5') },
  { name: 'Cloudflare', src: simpleicon('cloudflare', 'F38020') },
  { name: 'XAMPP', src: simpleicon('xampp', 'FB7A24') },
  { name: 'Java', src: devicon('java') },
  { name: 'Adobe', src: '/adobe.png' },
  { name: 'WordPress', src: devicon('wordpress', 'plain') },
  { name: 'GitHub', src: simpleicon('github', 'FFFFFF') },
  { name: 'CSS', src: devicon('css3') },
];

export default function TechStackGrid() {
  const [hovered, setHovered] = useState<string | null>(null);

  // Fix: use "as any" for framer-motion components to avoid TS element implicitly any errors
  const MotionDiv = motion.div as any;

  return (
    <div className="w-full relative mt-8 mb-16">
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <div 
            key={skill.name}
            className="relative flex items-center justify-center cursor-pointer group"
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
                className="w-full h-full object-contain filter drop-shadow-md group-hover:drop-shadow-xl"
                onError={(e) => {
                  // Fallback for missing devicons
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
  );
}
