'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CascadeText from "@/components/CascadeText";

const MotionDiv = motion.div as any;

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <header className="mb-20 max-w-3xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[1px] bg-white/20" />
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#64748B]">Schematic v2.5</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-sans font-extrabold mb-8 tracking-tighter text-[#F8F9FA]">
          <CascadeText>Technical</CascadeText>
          <CascadeText>Blueprint</CascadeText>
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed font-medium">
          <CascadeText delay={0.4}>
            Structural breakdown of my technical architecture. 
            Built on a foundation of clean code and precise engineering.
          </CascadeText>
        </p>
      </header>

      <div className="mb-32">
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#64748B]">01 // Core Technologies</span>
          <div className="h-[1px] flex-grow bg-white/5" />
        </div>
        
        <div className="grid md:grid-cols-2 border-t border-white/10">
          <SkillCategory 
            title="Core Stack" 
            items={['Java', 'JavaScript', 'Python', 'React', 'HTML', 'CSS', 'Tailwind CSS', 'MySQL', 'Git', 'Postman', 'GitHub', 'VS Code', 'IntelliJ IDEA']} 
            index="01A"
          />
          <SkillCategory 
            title="Currently Learning" 
            items={['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']} 
            index="01B"
            className="md:border-l md:border-white/10"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 border-t border-white/10">
        <SkillCategory 
          title="Tools & Software" 
          items={['Figma', 'XAMPP', 'Notion', 'ClickUp', 'WordPress']} 
          index="02"
        />
        <SkillCategory 
          title="Soft Skills" 
          items={['Team Leadership', 'Collaboration', 'Technical Communication', 'Time Management', 'Detail-Oriented', 'Creative Thinking']} 
          index="03"
          className="md:border-l md:border-white/10"
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
