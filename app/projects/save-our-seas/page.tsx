'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Droplets, BookOpen, Users, Layout } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

export default function SaveOurSeasPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      
      {/* Top Navigation */}
      <div className="container mx-auto px-6 max-w-5xl mb-12">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors text-sm font-mono uppercase tracking-widest mb-12"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>
        
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-green-500/10 text-green-500 border border-green-500/20">
              Completed
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-white/5 text-text-secondary border border-white/10">
              HTML/CSS
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-white/5 text-text-secondary border border-white/10">
              JavaScript
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 leading-tight">
            Save Our Seas - SDG Web Project
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl leading-relaxed">
            A web initiative dedicated to protecting marine ecosystems, featuring an interactive splash screen, educational content on ocean conservation, and a volunteer signup portal for local beach cleanups.
          </p>
        </header>

        {/* Feature Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="https://github.com/ZubairMurshid/Save-Our-Seas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-bold tracking-wide border border-white/10 hover:bg-white/10 transition-colors"
          >
            <Github size={20} /> GitHub Repository
          </a>
          <a
            href="https://docs.google.com/document/d/1H46oIE6dOQqmAg3CpN6kHQqcySosrVBLDH5D20dLa5A/edit?usp=sharing&usp=embed_facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-bold tracking-wide border border-white/10 hover:bg-white/10 transition-colors"
          >
            <ExternalLink size={20} /> Executive Summary
          </a>
          <a
            href="https://save-our-seas.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-bold tracking-wide border border-white/10 hover:bg-white/10 transition-colors"
          >
            <ExternalLink size={20} /> Live Demo
          </a>
        </div>
      </div>

      {/* Hero Visual Area */}
      <div className="w-full bg-black/40 border-y border-white/5 py-12 mb-20 overflow-hidden relative min-h-[400px] flex items-center justify-center">
        {/* Ocean Vibe Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.1)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <Droplets size={64} className="mx-auto text-cyan-400 mb-6 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Protecting Marine Life</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">An actionable platform to raise awareness about ocean conservation and promote sustainable practices for a healthier ocean.</p>
        </div>
      </div>

      {/* Project Brief Content */}
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-12">
          
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
                <span className="text-accent-blue font-mono text-sm tracking-widest">01</span>
                Project Overview
              </h2>
              <div className="prose prose-invert prose-lg text-text-secondary">
                <p>
                  "Save Our Seas" is a web initiative developed as Web Design Coursework, dedicated to protecting marine ecosystems and promoting sustainable practices for a healthier ocean. It acts as an educational and actionable platform to raise awareness about ocean conservation.
                </p>
                <p>
                  The platform goes beyond static information by deeply integrating interactive elements and community-driven actions like volunteer signups for beach cleanups.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
                <span className="text-accent-blue font-mono text-sm tracking-widest">02</span>
                Key Features
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="glass-panel p-6 rounded-2xl">
                  <Layout className="text-cyan-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">Interactive Splash</h3>
                  <p className="text-sm text-text-muted">An engaging entry point configured via Vercel to dynamically load `splash.html`, setting the conservation theme perfectly.</p>
                </div>
                
                <div className="glass-panel p-6 rounded-2xl">
                  <BookOpen className="text-cyan-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">Educational Content</h3>
                  <p className="text-sm text-text-muted">Featuring completely bespoke informative articles and tailored resources regarding marine life and ongoing crisis intervention.</p>
                </div>
                
                <div className="glass-panel p-6 rounded-2xl">
                  <Droplets className="text-cyan-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">Volunteer Portal</h3>
                  <p className="text-sm text-text-muted">A fully functional section where users can sign up to actively participate in local beach cleanups and environmental events.</p>
                </div>
                
                <div className="glass-panel p-6 rounded-2xl">
                  <Users className="text-cyan-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">Team & Sub-Profiles</h3>
                  <p className="text-sm text-text-muted">Dedicated pages to meet the developers, track impact, and manage individual user insights.</p>
                </div>
              </div>
            </section>
          </div>
          
          <div className="md:col-span-1">
            <div className="sticky top-24 glass-panel p-8 rounded-2xl">
              <h3 className="text-lg font-bold font-display mb-6 uppercase tracking-wider">Technical Specifications</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">Tech Stack</div>
                  <div className="text-white font-medium">HTML5, CSS3, JavaScript</div>
                  <p className="text-xs text-text-secondary mt-1">Native web standards crafted with zero dependencies.</p>
                </div>
                
                <div className="w-full h-px bg-white/5" />
                
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">Architecture</div>
                  <div className="text-white font-medium">Custom Entry Point</div>
                  <p className="text-xs text-text-secondary mt-1">Specifically configured to load `splash.html` via a custom `vercel.json` routing layer.</p>
                </div>
                
                <div className="w-full h-px bg-white/5" />
                
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">Deployment</div>
                  <div className="text-white font-medium">Vercel</div>
                  <a href="https://save-our-seas.vercel.app" target="_blank" rel="noopener noreferrer" className="text-xs text-accent-blue mt-1 hover:underline block truncate">
                    save-our-seas.vercel.app
                  </a>
                </div>
                
                <div className="w-full h-px bg-white/5" />
                
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">Development Team</div>
                  <div className="text-white font-medium">Team of 4</div>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                    Collaboratively built by Taahir Moulana, Zubair Murshid, Mohamed Sharan, and Yogarajah Rahulshanth.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
