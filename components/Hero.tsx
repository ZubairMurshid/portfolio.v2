
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Globe, Sparkles } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import GlitchText from './GlitchText';

const MotionDiv = motion.div as any;
const MotionH1 = motion.h1 as any;
const MotionP = motion.p as any;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />
      <ParticleCanvas />
      
      <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
        <div className="lg:col-span-10 lg:col-start-2 text-center pt-20">
          
          <MotionDiv 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-5 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-accent-chrome text-[10px] font-mono tracking-[0.2em] uppercase"
          >
            Engineering Precise Solutions
          </MotionDiv>

          <MotionH1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="font-sans text-5xl md:text-8xl lg:text-9xl font-extrabold leading-tight mb-8 tracking-tighter"
          >
            Zubair <GlitchText text="Murshid" />
          </MotionH1>

          <MotionP 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-text-secondary text-base md:text-lg max-w-xl mx-auto mb-12 font-medium tracking-tight"
          >
            Software Engineer & Cybersecurity Enthusiast. <br className="hidden md:block"/>
            Crafting high-integrity digital architectures.
          </MotionP>

          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col gap-5 justify-center items-center"
          >
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link 
                href="/projects" 
                className="px-10 py-3.5 min-w-[180px] text-xs uppercase tracking-widest bg-white text-black rounded-full font-bold hover:bg-accent-chrome transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                Explore Work
              </Link>
              <Link 
                href="/contact" 
                className="px-10 py-3.5 min-w-[180px] text-xs uppercase tracking-widest border border-white/20 text-white rounded-full font-bold hover:bg-white/5 transition-all hover:scale-105 active:scale-95"
              >
                Contact
              </Link>
            </div>
            
            <Link 
              href="/roadmap" 
              className="group relative px-8 py-3 rounded-full overflow-hidden flex items-center gap-3 transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 group-hover:bg-white/10 transition-colors" />
              <Sparkles size={16} className="text-yellow-500 relative z-10" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-text-muted group-hover:text-white relative z-10">
                Look at how i'm levelling up for my internship
              </span>
            </Link>
          </MotionDiv>
        </div>

        {/* Social Bar - Silver Style */}
        <MotionDiv 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          className="hidden lg:flex flex-col gap-6 absolute right-12 top-1/2 -translate-y-1/2"
        >
          <div className="flex flex-col gap-8 items-center py-8 px-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
            <SocialLink href="https://github.com/ZubairMurshid" icon={<Github size={18} />} />
            <SocialLink href="https://linkedin.com/in/itszubairmurshid" icon={<Linkedin size={18} />} />
            <SocialLink href="mailto:zubairmurshid@icloud.com" icon={<Mail size={18} />} />
          </div>
        </MotionDiv>
      </div>

      <MotionDiv 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-text-muted text-[10px] tracking-[0.3em] uppercase"
      >
        <span>Discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </MotionDiv>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-text-muted hover:text-white transition-all transform hover:scale-110"
    >
      {icon}
    </a>
  );
}
