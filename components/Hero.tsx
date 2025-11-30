'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';

const MotionDiv = motion.div as any;
const MotionH1 = motion.h1 as any;
const MotionP = motion.p as any;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <ParticleCanvas />
      
      <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-10 lg:col-start-2 text-center">
          
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 mb-6 rounded-full border border-accent-blue/30 bg-bg-secondary/50 backdrop-blur-sm text-accent-blue text-sm font-medium tracking-wider uppercase"
          >
            Computer Science Undergraduate
          </MotionDiv>

          <MotionH1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          >
            ZUBAIR <span className="gradient-text">MURSHID</span>
          </MotionH1>

          <MotionP 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Building Secure Digital Solutions | Cybersecurity Enthusiast | Full-Stack Developer
          </MotionP>

          <MotionDiv 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-dark-blue text-white rounded-full font-semibold shadow-lg shadow-accent-blue/25 hover:shadow-neon hover:-translate-y-1 transition-all"
            >
              Get In Touch
            </Link>
            <Link 
              href="/projects" 
              className="px-8 py-3 bg-transparent border-2 border-accent-blue text-accent-blue rounded-full font-semibold hover:bg-accent-blue hover:text-white transition-all hover:-translate-y-1"
            >
              View Projects
            </Link>
          </MotionDiv>
        </div>

        {/* Vertical Socials (Desktop) */}
        <MotionDiv 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="hidden lg:flex flex-col gap-6 absolute right-0 top-1/2 -translate-y-1/2"
        >
          <SocialLink href="https://github.com/ZubairMurshid" icon={<Github />} />
          <SocialLink href="https://linkedin.com/in/itszubairmurshid" icon={<Linkedin />} />
          <SocialLink href="mailto:zubairmurshid@icloud.com" icon={<Mail />} />
          <SocialLink href="#" icon={<Globe />} />
          <div className="h-24 w-px bg-accent-blue/30 mx-auto mt-4" />
        </MotionDiv>
      </div>

      <MotionDiv 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-sm animate-bounce"
      >
        <div className="w-px h-10 bg-gradient-to-b from-accent-blue to-transparent" />
        <span>Scroll</span>
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
      className="p-3 rounded-full bg-bg-secondary/50 border border-accent-blue/20 hover:border-accent-blue hover:text-accent-blue hover:shadow-neon transition-all"
    >
      {icon}
    </a>
  );
}