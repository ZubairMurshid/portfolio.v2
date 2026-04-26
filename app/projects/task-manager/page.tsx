'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Terminal, Database, Layout, Code2, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import CascadeText from "@/components/CascadeText";

const MotionDiv = motion.div as any;

export default function TaskManagerPage() {
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
              Python
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-white/5 text-text-secondary border border-white/10">
              Tkinter
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            <CascadeText>Personal Task Manager</CascadeText>
          </h1>
          
          <p className="text-xl text-md md:text-lg text-text-secondary max-w-3xl leading-relaxed">
            <CascadeText delay={0.3}>
              A comprehensive four-stage Python coursework project demonstrating a progression from fundamental programming concepts to advanced graphical user interface (GUI) development.
            </CascadeText>
          </p>
        </header>

        {/* Feature Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="https://github.com/ZubairMurshid/Personal-Task-Manager"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-bold tracking-wide border border-white/10 hover:bg-white/10 transition-colors"
          >
            <Github size={20} /> GitHub Repository
          </a>
          <a
            href="https://docs.google.com/document/d/1AEnu4m2Cj-cteGmjTJtIxzlEwSo107woDhMrb280Dyw/edit?usp=sharing&usp=embed_facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-bold tracking-wide border border-white/10 hover:bg-white/10 transition-colors"
          >
            <ExternalLink size={20} /> Executive Summary
          </a>
        </div>
      </div>

      {/* Visual Area */}
      <div className="w-full bg-black/40 border-y border-white/5 py-12 mb-20 overflow-hidden relative min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(249,115,22,0.1)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <Terminal size={64} className="mx-auto text-orange-400 mb-6 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            <CascadeText>Software Development I</CascadeText>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            <CascadeText delay={0.3}>
              Demonstrating core programming principles, data persistence, and OOP through a scalable task management solution.
            </CascadeText>
          </p>
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
                  The "Personal Task Manager" is a comprehensive four-stage Python coursework project developed for the "Software Development I (4COSC001W)" module. It demonstrates a progression from fundamental programming concepts to advanced graphical user interface (GUI) development.
                </p>
                <p>
                  The application enables users to manage tasks effectively by allowing them to add, view, update, and delete tasks, while showcasing different architectural approaches at each stage.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
                <span className="text-accent-blue font-mono text-sm tracking-widest">02</span>
                Progression Breakdown
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="glass-panel p-6 rounded-2xl">
                  <Code2 className="text-orange-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">Stage 1 & 2</h3>
                  <p className="text-sm text-text-muted">Core CRUD operations using in-memory Python lists and persistent plain text file storage.</p>
                </div>
                
                <div className="glass-panel p-6 rounded-2xl">
                  <Database className="text-orange-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">Stage 3</h3>
                  <p className="text-sm text-text-muted">Refined data structures using dictionary-based models with robust JSON serialization.</p>
                </div>
                
                <div className="glass-panel p-6 rounded-2xl">
                  <Layout className="text-orange-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">Stage 4 (GUI)</h3>
                  <p className="text-sm text-text-muted">Full-featured Tkinter GUI with Treeview, sorting, searching, and advanced filtering.</p>
                </div>
                
                <div className="glass-panel p-6 rounded-2xl">
                  <GraduationCap className="text-orange-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">OOP Principles</h3>
                  <p className="text-sm text-text-muted">Strict adherence to classes and encapsulation (Task, TaskManager, TaskManagerGUI).</p>
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
                  <div className="text-white font-medium">Python (100%)</div>
                  <p className="text-xs text-text-secondary mt-1">Utilizing standard libraries including Tkinter.</p>
                </div>
                
                <div className="w-full h-px bg-white/5" />
                
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">Data Handling</div>
                  <div className="text-white font-medium">Plain Text & JSON</div>
                </div>
                
                <div className="w-full h-px bg-white/5" />
                
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">Architecture</div>
                  <div className="text-white font-medium">Procedural to OOP</div>
                </div>

                <div className="w-full h-px bg-white/5" />
                
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">Academic Context</div>
                  <div className="text-white font-medium">2024/25 Academic Year</div>
                  <p className="text-xs text-text-secondary mt-1">Module: Software Development I (4COSC001W)</p>
                </div>

                <div className="w-full h-px bg-white/5" />
                
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">Author</div>
                  <div className="text-white font-medium">Zubair Murshid</div>
                  <p className="text-xs text-text-secondary mt-1">Solo Developer</p>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
