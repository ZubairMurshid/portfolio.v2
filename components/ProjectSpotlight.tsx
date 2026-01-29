
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
      className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-bg-secondary/30 backdrop-blur-2xl p-10 md:p-16 my-32 group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
      
      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 text-text-muted mb-6">
            <div className="w-8 h-[1px] bg-white/20" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Signature Project</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-sans font-extrabold mb-6 tracking-tighter">EventLK</h2>
          <p className="text-text-secondary text-lg mb-10 leading-relaxed font-medium">
            An intelligent event management system for university ecosystems. 
            Harnessing predictive analytics to streamline campus engagement.
          </p>
          
          <div className="flex flex-wrap gap-2.5 mb-10">
            {['Artificial Intelligence', 'Full-Stack', 'Security'].map(tag => (
              <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 text-text-muted text-[10px] font-bold uppercase tracking-widest border border-white/5 group-hover:border-white/20 transition-colors">
                {tag}
              </span>
            ))}
          </div>

          <Link href="/projects/eventlk" className="inline-flex items-center gap-3 text-white font-bold text-xs uppercase tracking-widest hover:gap-6 transition-all group/link">
            Case Study 
            <div className="p-2 rounded-full border border-white/20 group-hover/link:bg-white group-hover/link:text-black transition-all">
              <ArrowRight size={16} />
            </div>
          </Link>
        </div>
        
        <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 bg-bg-tertiary shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
             <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.5em] text-text-muted font-mono">
                System Interface Preview
             </div>
        </div>
      </div>
    </MotionDiv>
  );
}
