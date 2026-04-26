"use client";

import React from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import AboutSnapshot from "@/components/AboutSnapshot";
import VisualMap from "@/components/VisualMap";
import ProjectSpotlight from "@/components/ProjectSpotlight";
import GithubPulse from "@/components/GithubPulse";
import BlogPreview from "@/components/BlogPreview";
import TechStackGrid from "@/components/TechStackGrid";
import CascadeText from "@/components/CascadeText";

// Fix: Using 'as any' to suppress motion property type errors
const MotionDiv = motion.div as any;


export default function Home() {

  return (
    <div className="overflow-hidden">
      <Hero />

      <div className="container mx-auto px-6">
        <AboutSnapshot />

        <section className="py-20 flex flex-col items-center">
          <div className="text-text-muted text-[11px] font-mono tracking-[0.2em] uppercase mb-4">
            Full-Stack Engineering & AI Integration
          </div>
          <h2 className="text-center font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <CascadeText>What I Do</CascadeText>
          </h2>
          
          <div className="w-full">
            <VisualMap />
          </div>
        </section>

        <ProjectSpotlight />

        <section className="py-20 flex flex-col items-center text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-12">
            <CascadeText>Tech Stack</CascadeText>
          </h2>
          <TechStackGrid />
        </section>

        <GithubPulse />

        <BlogPreview />

        {/* LinkedIn Recommendation Note */}
        <div className="py-20 text-center border-t border-white/5">
          <p className="text-sm text-text-muted italic opacity-70 hover:opacity-100 transition-opacity">
            If you liked this website, consider giving me a recommendation on{" "}
            <a
              href="https://linkedin.com/in/itszubairmurshid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue hover:underline hover:text-blue-400 font-medium transition-colors"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}


