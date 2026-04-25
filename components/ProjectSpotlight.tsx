'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const MotionDiv = motion.div as any;

export default function ProjectSpotlight() {
  return (
    <MotionDiv 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative rounded-[2.5rem] overflow-hidden border border-accent-blue/20 bg-gradient-to-br from-bg-secondary/80 to-bg-tertiary/50 backdrop-blur-2xl p-6 md:p-10 lg:p-12 my-20 md:my-24 group shadow-[0_0_40px_rgba(59,130,246,0.1)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col gap-8 lg:gap-10">
        <div className="flex flex-col gap-8">
          <div className="w-full">
            <div className="flex items-center gap-3 text-accent-blue mb-4 md:mb-6">
              <div className="w-8 h-[2px] bg-accent-blue/50" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Signature Project</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-sans font-extrabold mb-4 md:mb-6 tracking-tighter text-white">EventLK</h2>
            
            
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">

              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <a href="https://www.eventlk.com" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-3 px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all hover:scale-105 active:scale-95 whitespace-nowrap shadow-xl">
                  Live Demo <ExternalLink size={16} />
                </a>
                <Link href="/projects/eventlk" className="inline-flex justify-center items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-accent-chrome transition-all hover:scale-105 active:scale-95 whitespace-nowrap shadow-xl">
                  Case Study <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative w-full aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 bg-black/50 shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
          <img 
            src="/eventlk-preview.png" 
            alt="EventLK Platform Preview" 
            className="absolute inset-0 w-full h-full object-contain p-2 md:p-4 opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
             <span className="text-white font-mono text-sm tracking-widest bg-black/50 px-6 py-2 rounded-full backdrop-blur-md border border-white/10">www.eventlk.com</span>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
