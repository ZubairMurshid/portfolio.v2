"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import ParticleCanvas from "./ParticleCanvas";

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
        <div className="lg:col-span-10 lg:col-start-2 text-center pb-12 lg:pb-32">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border border-white/20 shadow-2xl">
              <img
                src="/profilepic.JPG"
                alt="Zubair Murshid"
                className="w-full h-full object-cover"
              />
            </div>
          </MotionDiv>

          <MotionH1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="font-sans text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-tight mb-10 tracking-tighter flex items-center justify-center gap-2 md:gap-4"
          >
            <span>
              Zubair <span className="gradient-text">Murshid</span>
            </span>
          </MotionH1>

          <MotionP
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-text-secondary text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-16 font-medium tracking-tight"
          >
            Software Engineer & Cybersecurity Enthusiast.
          </MotionP>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col gap-6 justify-center items-center"
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/projects"
                className="px-12 py-4 min-w-[200px] text-sm uppercase tracking-widest bg-white text-black rounded-full font-bold hover:bg-accent-chrome transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                View Projects
              </Link>
              <a
                href="https://drive.google.com/file/d/1HyVApWaZHT9tpFgMpw7ez2xYnBFpRJGf/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-4 min-w-[200px] text-sm uppercase tracking-widest border border-white/20 text-white rounded-full font-bold hover:bg-white/5 transition-all hover:scale-105 active:scale-95 text-center"
              >
                View CV
              </a>
            </div>
          </MotionDiv>
        </div>

        {/* Social Bar */}
        <MotionDiv
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          className="hidden lg:flex flex-col gap-7 absolute right-12 top-[38%] -translate-y-1/2"
        >
          <SocialLink
            href="https://github.com/ZubairMurshid"
            icon={<Github size={18} />}
          />
          <SocialLink
            href="https://linkedin.com/in/itszubairmurshid"
            icon={<Linkedin size={18} />}
          />
          <SocialLink
            href="mailto:zubairmurshid@icloud.com"
            icon={<Mail size={18} />}
          />
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
      className="flex items-center justify-center text-white transition-transform duration-300 hover:scale-110 hover:opacity-80"
    >
      {icon}
    </a>
  );
}
