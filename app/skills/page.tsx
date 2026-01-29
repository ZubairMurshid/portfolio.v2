
'use client';

import React from 'react';
import RadarChart from '@/components/RadarChart';
import SkillsHeatmap from '@/components/SkillsHeatmap';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const radarSkills = [
  { name: 'Programming', value: 85 },
  { name: 'Web Dev', value: 80 },
  { name: 'Database', value: 80 },
  { name: 'Security', value: 75 },
  { name: 'Problem Solving', value: 85 },
  { name: 'Team Work', value: 90 }
];

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <header className="mb-20 max-w-3xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[1px] bg-white/20" />
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#64748B]">Schematic v2.5</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-sans font-extrabold mb-8 tracking-tighter text-[#F8F9FA]">
          Technical <br/>Blueprint
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed font-medium">
          Structural breakdown of my technical architecture. 
          Built on a foundation of clean code and precise engineering.
        </p>
      </header>

      <div className="grid lg:grid-cols-12 gap-12 mb-32 items-start">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#64748B]">01 // Proficiency Matrix</span>
            <div className="h-[1px] flex-grow bg-white/5" />
          </div>
          
          <div className="space-y-12">
            <SkillBar name="Java & Python" level={85} category="Languages" />
            <SkillBar name="Web Tech (React/TS)" level={80} category="Frontend" />
            <SkillBar name="Database (MySQL)" level={80} category="Infra" />
            <SkillBar name="Cybersecurity" level={75} category="Security" />
            <SkillBar name="Software Arch" level={75} category="Design" />
          </div>
        </div>

        <MotionDiv 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:col-span-5 p-8 border border-white/10 relative group"
        >
          {/* Blueprint Corner Marks */}
          <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-l border-t border-white/40" />
          <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-r border-b border-white/40" />
          
          <div className="w-full">
             <h3 className="text-center font-mono font-bold mb-8 text-[#64748B] uppercase tracking-[0.3em] text-[10px]">Vector Analysis</h3>
             <RadarChart skills={radarSkills} />
          </div>
        </MotionDiv>
      </div>

      <div className="mb-32">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#64748B]">02 // Detailed Inventory</span>
          <div className="h-[1px] flex-grow bg-white/5" />
        </div>
        <SkillsHeatmap />
      </div>

      <div className="grid md:grid-cols-2 border-t border-white/10">
        <SkillCategory 
          title="Tools & Software" 
          items={['IntelliJ', 'VS Code', 'GitHub', 'Figma', 'XAMPP', 'Notion', 'ClickUp', 'WordPress']} 
          index="03"
        />
        <SkillCategory 
          title="Soft Skills" 
          items={['Team Leadership', 'Collaboration', 'Technical Communication', 'Time Management', 'Detail-Oriented', 'Creative Thinking']} 
          index="04"
          className="md:border-l md:border-white/10"
        />
      </div>
    </div>
  );
}

function SkillBar({ name, level, category }: { name: string; level: number; category: string }) {
  return (
    <div className="group">
      <div className="flex justify-between items-end mb-3">
        <div>
          <span className="block font-mono text-[9px] uppercase tracking-tighter text-[#64748B] mb-1">{category}</span>
          <span className="font-bold text-lg text-[#F8F9FA] tracking-tight">{name}</span>
        </div>
        <span className="font-mono text-xs text-text-muted">{level}%</span>
      </div>
      <div className="h-[2px] bg-white/5 w-full relative overflow-hidden">
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
        
        <MotionDiv 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-white/40"
        />
      </div>
    </div>
  );
}

function SkillCategory({ title, items, index, className = "" }: { title: string; items: string[]; index: string; className?: string }) {
  return (
    <div className={`p-10 ${className}`}>
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-[10px] text-[#64748B]">{index}</span>
        <h3 className="text-xl font-bold tracking-tight text-[#F8F9FA]">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <span key={item} className="px-3 py-1.5 border border-white/5 font-mono text-[11px] text-text-secondary hover:border-white/20 hover:text-white transition-all cursor-default">
            {item.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}
