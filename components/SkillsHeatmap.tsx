
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-t border-white/10">
      {skills.map((skill, i) => (
        <MotionDiv
          key={skill.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: i * 0.05 }}
          onMouseEnter={() => setHoveredSkill(skill.name)}
          onMouseLeave={() => setHoveredSkill(null)}
          className={`
            relative p-6 h-32 flex flex-col justify-between cursor-crosshair group transition-all duration-300
            border-r border-b border-white/10 
            ${hoveredSkill === skill.name ? 'bg-white/[0.02]' : 'bg-transparent'}
          `}
        >
          {/* Spotlight Effect Borders */}
          <div className={`absolute inset-0 border border-white/0 group-hover:border-white/40 transition-all duration-500 pointer-events-none`} />
          
          <div className="flex justify-between items-start">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#64748B]">
              {skill.category}
            </span>
            <span className="font-mono text-[9px] text-text-muted opacity-50">
              Ref.{i.toString().padStart(3, '0')}
            </span>
          </div>

          <div className="space-y-1">
            <div className="text-sm font-bold text-[#F8F9FA] tracking-tight font-sans">
              {skill.name}
            </div>
            <div className="flex items-center gap-2">
              <div className="h-[1px] flex-grow bg-white/5 relative">
                <div 
                  className="absolute left-0 top-0 h-full bg-white/30 transition-all duration-1000" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="font-mono text-[10px] text-white/40">
                {skill.level}%
              </span>
            </div>
          </div>

          {/* Shimmer Effect on lines - internal to cell */}
          <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </MotionDiv>
      ))}
    </div>
  );
}
