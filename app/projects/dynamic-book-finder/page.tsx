'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Layers, Zap, Smartphone, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import BookFinderDemo from '@/components/BookFinderDemo';

const MotionDiv = motion.div as any;

export default function DynamicBookFinderPage() {
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
              React / Vite
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-white/5 text-text-secondary border border-white/10">
              Google APIs
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-display font-extrabold mb-6 tracking-tighter">
            Dynamic Book Finder
          </h1>
          
          <p className="text-md md:text-lg text-text-secondary max-w-3xl leading-relaxed">
            A modern, responsive web application exploring the vast library of the Google Books API with a seamless search experience and persistent personalized favorites.
          </p>
        </header>

        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="https://github.com/ZubairMurshid/ReactProject-DynamicBookFinder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-bold tracking-wide border border-white/10 hover:bg-white/10 transition-colors"
          >
            <Github size={20} /> GitHub Repository
          </a>
          <a
            href="https://docs.google.com/document/d/1dk_c7dhMYL9IYqM6Xy_PLHU9qFm8E1mW1iK_fmrieZs/edit?usp=sharing&usp=embed_facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-bold tracking-wide border border-white/10 hover:bg-white/10 transition-colors"
          >
            <ExternalLink size={20} /> Executive Summary
          </a>
        </div>
      </div>

      {/* Interactive Showcase Demo */}
      <div className="w-full bg-black/40 border-y border-white/5 py-20 mb-20 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(229,9,20,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-10">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent-red mb-3 block">Live Showcase</span>
            <h2 className="text-3xl font-display font-bold">Try the Demo</h2>
            <p className="text-text-muted mt-2 max-w-md mx-auto">This embedded demo connects directly to Google Books API and utilizes your browser's localStorage for state persistence.</p>
          </div>
          
          <BookFinderDemo />
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
                  A modern, responsive web application that allows users to explore the vast library of the Google Books API. The application provides a seamless search experience, allows users to view book details (author, publication date, and cover art), and features a persistent "Favorites" system.
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
                  <Zap className="text-accent-blue mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">Live Search</h3>
                  <p className="text-sm text-text-muted">Integration with the Google Books API for real-time querying of titles, authors, or keywords.</p>
                </div>
                
                <div className="glass-panel p-6 rounded-2xl">
                  <Layers className="text-accent-blue mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">Curated Discovery</h3>
                  <p className="text-sm text-text-muted">Automatically fetches and displays popular fiction titles upon initial page load to engage users immediately.</p>
                </div>
                
                <div className="glass-panel p-6 rounded-2xl">
                  <Database className="text-accent-blue mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">Persistent Favorites</h3>
                  <p className="text-sm text-text-muted">A custom-built favoriting system using React Context API and LocalStorage, ensuring user selections are saved even after closing the browser.</p>
                </div>
                
                <div className="glass-panel p-6 rounded-2xl">
                  <Smartphone className="text-accent-blue mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">Responsive UI</h3>
                  <p className="text-sm text-text-muted">A mobile-first design using a CSS Grid layout that adapts perfectly to desktop, tablet, and smartphone screens.</p>
                </div>
              </div>
            </section>
          </div>
          
          <div className="md:col-span-1">
            <div className="sticky top-24 glass-panel p-8 rounded-2xl">
              <h3 className="text-lg font-bold font-display mb-6 uppercase tracking-wider">Technical Stack</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">Frontend</div>
                  <div className="text-white font-medium">React (v19) & Vite</div>
                  <p className="text-xs text-text-secondary mt-1">For a lightning-fast development and build process.</p>
                </div>
                
                <div className="w-full h-px bg-white/5" />
                
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">State Management</div>
                  <div className="text-white font-medium">React Context API</div>
                  <p className="text-xs text-text-secondary mt-1">Centralized handling of book data and favorites.</p>
                </div>
                
                <div className="w-full h-px bg-white/5" />
                
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">Routing</div>
                  <div className="text-white font-medium">React Router (v7)</div>
                  <p className="text-xs text-text-secondary mt-1">Smooth client-side navigation seamlessly between pages.</p>
                </div>
                
                <div className="w-full h-px bg-white/5" />
                
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">Styling</div>
                  <div className="text-white font-medium">Modular Vanilla CSS</div>
                  <p className="text-xs text-text-secondary mt-1">Focus on CSS Grid and Flexbox for modern, robust layouts.</p>
                </div>

                <div className="w-full h-px bg-white/5" />
                
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">External API</div>
                  <div className="text-white font-medium">Google Books API</div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
