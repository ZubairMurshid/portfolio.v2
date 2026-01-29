
'use client';

import React from 'react';
import RadarChart from '@/components/RadarChart';
import SkillsHeatmap from '@/components/SkillsHeatmap';
import { motion } from 'framer-motion';

// Fix: Using 'as any' to suppress motion property type errors
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
      <h1 className="text-5xl font-display font-bold mb-8">Skills & Expertise</h1>
      <p className="text-xl text-text-secondary max-w-2xl mb-16">
        My technical journey combines academic rigor with practical application. 
        Here is a breakdown of my current capabilities and tools.
      </p>

      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <MotionDiv 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel p-8 rounded-3xl flex items-center justify-center bg-bg-secondary/50"
        >
          <div className="w-full max-w-[500px]">
             <h3 className="text-center font-bold mb-4 text-text-muted uppercase tracking-widest text-sm">Core Competency Radar</h3>
             <RadarChart skills={radarSkills} />
          </div>
        </MotionDiv>

        <div>
          <h2 className="text-3xl font-display font-bold mb-8">Technical Proficiency</h2>
          <div className="space-y-8">
            <SkillBar name="Java & Python" level={85} />
            <SkillBar name="Web Technologies (HTML/CSS/JS/React)" level={80} />
            <SkillBar name="Database Management (MySQL)" level={80} />
            <SkillBar name="Cybersecurity Fundamentals" level={75} />
            <SkillBar name="Software Architecture (OOP/Client-Server)" level={75} />
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-display font-bold mb-8">Full Tech Stack Heatmap</h2>
        <SkillsHeatmap />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <SkillCategory 
          title="Tools & Software" 
          items={['IntelliJ', 'VS Code', 'GitHub', 'Figma', 'XAMPP', 'Notion', 'ClickUp', 'WordPress']} 
        />
        <SkillCategory 
          title="Soft Skills" 
          items={['Team Leadership', 'Collaboration', 'Technical Communication', 'Time Management', 'Detail-Oriented', 'Creative Thinking']} 
        />
      </div>
    </div>
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-bold">{name}</span>
        <span className="text-accent-blue font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden">
        {/* Fix: Replaced motion.div with MotionDiv */}
        <MotionDiv 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-accent-blue to-accent-navy"
        />
      </div>
    </div>
  );
}

function SkillCategory({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="glass-panel p-8 rounded-2xl">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <span className="w-2 h-6 bg-accent-blue rounded-full" />
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {items.map(item => (
          <span key={item} className="px-4 py-2 bg-bg-primary border border-white/10 rounded-full text-sm font-medium hover:border-accent-blue/50 transition-colors cursor-default">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
