
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Globe, Shield, Lock, Terminal, Code2 } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import GlitchText from './GlitchText';

const MotionDiv = motion.div as any;
const MotionH1 = motion.h1 as any;
const MotionP = motion.p as any;

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, filter: 'blur(10px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const titleVariants = {
  hidden: { y: 100, opacity: 0, rotateX: -90 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 20,
      duration: 1,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 perspective-1000">
      <ParticleCanvas />
      
      {/* Floating 3D Background Icons (Decorative) */}
      <FloatingIcon icon={<Shield size={40} />} className="top-[15%] left-[10%] text-accent-blue/20" delay={0} />
      <FloatingIcon icon={<Lock size={30} />} className="bottom-[20%] left-[5%] text-accent-navy/20" delay={2} />
      <FloatingIcon icon={<Terminal size={50} />} className="top-[20%] right-[10%] text-accent-blue/10" delay={1} />
      <FloatingIcon icon={<Code2 size={35} />} className="bottom-[15%] right-[15%] text-accent-dark-blue/20" delay={3} />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full"
      >
        {/* Main Content - Centered (Spans 10 cols) */}
        <div className="lg:col-span-10 lg:col-start-2 text-center pt-20">
          
          <MotionDiv variants={itemVariants} className="flex justify-center mb-6">
            <div className="px-6 py-2 rounded-full border border-accent-blue/30 bg-bg-secondary/50 backdrop-blur-sm text-accent-blue text-sm font-medium tracking-wider uppercase shadow-neon">
              Computer Science Undergraduate
            </div>
          </MotionDiv>

          {/* 3D Perspective Title */}
          <div className="perspective-text-container mb-6 perspective-[1000px]">
            <MotionH1 
              variants={titleVariants}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight transform-style-3d"
            >
              <span className="inline-block hover:text-accent-blue transition-colors duration-500">ZUBAIR</span>
              <span className="inline-block mx-2 md:mx-4 text-accent-blue">
                 <GlitchText text="MURSHID" />
              </span>
            </MotionH1>
          </div>

          <MotionP 
            variants={itemVariants}
            className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building <span className="text-accent-blue font-bold">Secure</span> Digital Solutions. 
            Merging the precision of Cybersecurity with the creativity of Full-Stack Development.
          </MotionP>

          <MotionDiv 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              href="/contact" 
              className="group relative px-8 py-3 min-w-[160px] text-sm bg-accent-blue text-white rounded-full font-bold shadow-lg shadow-accent-blue/25 overflow-hidden transition-all hover:scale-105 hover:shadow-neon"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get In Touch
              </span>
            </Link>
            <Link 
              href="/projects" 
              className="px-8 py-3 min-w-[160px] text-sm bg-transparent border border-accent-blue/30 text-accent-blue rounded-full font-bold hover:bg-accent-blue/10 hover:border-accent-blue transition-all hover:scale-105"
            >
              View Projects
            </Link>
          </MotionDiv>
        </div>

        {/* Vertical Socials (Desktop) - Animated Entry */}
        <MotionDiv 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, type: "spring" }}
          className="hidden lg:grid grid-rows-1 place-items-center h-full absolute right-6 top-0 bottom-0"
        >
          <div className="flex flex-col justify-center gap-6 p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-xl">
            <SocialLink href="https://github.com/ZubairMurshid" icon={<Github size={20} />} delay={1.3} />
            <SocialLink href="https://linkedin.com/in/itszubairmurshid" icon={<Linkedin size={20} />} delay={1.4} />
            <SocialLink href="mailto:zubairmurshid@icloud.com" icon={<Mail size={20} />} delay={1.5} />
            <SocialLink href="#" icon={<Globe size={20} />} delay={1.6} />
          </div>
        </MotionDiv>
      </motion.div>

      <MotionDiv 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-xs"
      >
        <span className="animate-pulse">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent-blue/50 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-accent-blue animate-[drop_1.5s_infinite]" />
        </div>
      </MotionDiv>
    </section>
  );
}

function SocialLink({ href, icon, delay }: { href: string; icon: React.ReactNode, delay: number }) {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay, type: "spring" }}
      className="p-3 rounded-full text-text-muted hover:bg-accent-blue hover:text-white hover:shadow-neon transition-all duration-300"
    >
      {icon}
    </motion.a>
  );
}

function FloatingIcon({ icon, className, delay }: { icon: React.ReactNode, className: string, delay: number }) {
  return (
    <motion.div
      className={`absolute z-0 ${className}`}
      animate={{ 
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{ 
        duration: 5, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay 
      }}
    >
      {icon}
    </motion.div>
  );
}
