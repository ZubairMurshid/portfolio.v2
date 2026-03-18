
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const MotionDiv = motion.div as any;

export default function ProjectSpotlight() {
  return (
    <MotionDiv 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-bg-secondary/30 backdrop-blur-2xl p-8 md:p-12 my-32 group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
      
      <div className="relative z-10 flex flex-col gap-10 lg:gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-text-muted mb-4 md:mb-6">
              <div className="w-8 h-[1px] bg-white/20" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Signature Project</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-sans font-extrabold mb-4 md:mb-6 tracking-tighter">EventLK</h2>
            <p className="text-text-secondary md:text-lg leading-relaxed font-medium mb-6">
              An intelligent event management system for university ecosystems. 
              Harnessing predictive analytics to streamline campus engagement.
            </p>
            
            <div className="flex flex-wrap gap-2.5">
              {['Artificial Intelligence', 'Full-Stack', 'Security'].map(tag => (
                <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 text-text-muted text-[10px] font-bold uppercase tracking-widest border border-white/5 group-hover:border-white/20 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link href="/projects/eventlk" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-accent-chrome transition-all hover:scale-105 active:scale-95 whitespace-nowrap shadow-xl">
            Case Study <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/5 bg-bg-tertiary shadow-2xl group-hover:scale-[1.01] transition-transform duration-700">
          <img 
            src="/eventlk-preview.png" 
            alt="EventLK Platform Preview" 
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
    </MotionDiv>
  );
}
