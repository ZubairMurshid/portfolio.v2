'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionDiv = motion.div as any;

const skills = [
  { name: 'Java', level: 85, category: 'Backend' },
  { name: 'Python', level: 80, category: 'Backend' },
  { name: 'React/Next.js', level: 85, category: 'Frontend' },
  { name: 'TypeScript', level: 75, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
  { name: 'MySQL', level: 80, category: 'Database' },
  { name: 'Git/GitHub', level: 85, category: 'Tools' },
  { name: 'Docker', level: 60, category: 'DevOps' },
  { name: 'Linux', level: 70, category: 'OS' },
  { name: 'Cybersecurity', level: 75, category: 'Security' },
  { name: 'Figma', level: 80, category: 'Design' },
  { name: 'Node.js', level: 70, category: 'Backend' },
];

export default function SkillsHeatmap() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
      {skills.map((skill, i) => (
        <MotionDiv
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ scale: 1.1, zIndex: 10 }}
          onMouseEnter={() => setHoveredSkill(skill.name)}
          onMouseLeave={() => setHoveredSkill(null)}
          className={`
            relative aspect-square rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300
            ${hoveredSkill === skill.name ? 'bg-accent-blue text-white shadow-neon' : 'bg-bg-tertiary border border-white/5 hover:border-accent-blue/50'}
          `}
        >
          <div className="text-sm font-bold">{skill.name}</div>
          <div 
            className={`text-xs mt-1 px-2 py-0.5 rounded-full ${
              hoveredSkill === skill.name ? 'bg-white/20' : 'bg-bg-primary text-text-muted'
            }`}
          >
            {skill.level}%
          </div>
          
          {/* Heatmap intensity indicator */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-1 bg-accent-blue/30 rounded-b-xl overflow-hidden"
          >
            <div 
              className="h-full bg-accent-blue" 
              style={{ width: `${skill.level}%` }} 
            />
          </div>
        </MotionDiv>
      ))}
    </div>
  );
}