'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {ArrowLeft, Terminal, CheckCircle2, CopyCheck, GitMerge, Rocket, BrainCircuit, Database, FileSpreadsheet, AppWindow, Layout, Server, Cloud } from 'lucide-react';

const MotionDiv = motion.div as any;
const MotionH1 = motion.h1 as any;
const MotionP = motion.p as any;

export default function EventLKCaseStudyV2() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-violet-500/30 font-sans lg:flex relative overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[80vw] h-[80vh] bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.08),transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vh] bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.05),transparent_50%)]" />
      </div>

      {/* 
        ============== LEFT PANE: STICKY CONTEXT ==============
      */}
      <div className="relative z-10 w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-white/5 p-6 md:p-12 lg:p-16 flex flex-col justify-start lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto custom-scrollbar">
        
        <MotionDiv 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 lg:mb-24 mt-8 lg:mt-0"
        >
          <Link 
            href="/projects" 
            className="group inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-xs font-mono uppercase tracking-[0.2em]"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Projects
          </Link>
        </MotionDiv>

        <div className="flex-grow">
          <MotionH1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400"
          >
            EventLK
          </MotionH1>
          
          <MotionP 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-zinc-300 font-medium mb-8"
          >
            AI-Powered Event Management Platform
          </MotionP>

          <MotionDiv 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-10 text-sm font-mono tracking-tight text-zinc-400 space-y-2 border-l-2 border-indigo-500/30 pl-4 py-1"
          >
            <div><span className="text-violet-400 font-bold">Role:</span> Lead AI/ML Developer</div>
            <div><span className="text-zinc-500 font-bold">Context:</span> 6-Person Agile Team</div>
          </MotionDiv>

          <MotionDiv 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {['Python', 'Pandas', 'Scikit-Learn', 'Streamlit', 'Git', 'Next.js', 'Node.js', 'PostgreSQL'].map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 hover:border-violet-500/50 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </MotionDiv>

          <MotionP 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-zinc-400 leading-relaxed font-medium"
          >
            EventLK is a full-stack SaaS platform built by a 6-person Agile team. I spearheaded the machine learning microservice, bridging predictive AI with a modern JavaScript ecosystem to automate event planning and real-time budget distribution.
          </MotionP>
        </div>
      </div>

      {/* 
        ============== RIGHT PANE: SCROLLING DEEP-DIVE ==============
      */}
      <div className="relative z-10 w-full lg:w-2/3 p-6 md:p-12 lg:p-24 pb-32 lg:pb-48">
        
        {/* Timeline Connecting Line */}
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-zinc-800 to-transparent hidden md:block" />

        <div className="max-w-4xl relative">
          
          {/* ========== SECTION A ========== */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-16 md:pl-16 relative"
          >
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-violet-400 mb-2 flex items-center gap-4">
              <span className="hidden md:flex absolute left-[3.5px] w-3 h-3 rounded-full bg-violet-500/20 border border-violet-500/50 items-center justify-center -translate-x-[22px] z-10">
                <span className="w-1 h-1 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
              </span>
              Section A
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-white mb-2">My Primary Contributions</h3>
          </MotionDiv>

          <div className="space-y-10 relative flex flex-col mb-24">
            
            <PrimaryContributionCard 
              icon={<BrainCircuit className="text-violet-400" size={20} />}
              title="End-to-End AI Engineering"
              desc="Architected and deployed the platform's predictive AI microservice from the ground up."
              delay={0.1}
            />

            <PrimaryContributionCard 
              icon={<Database className="text-indigo-400" size={20} />}
              title="Data Pipeline & Preprocessing"
              desc="Developed robust data pipelines using Pandas. Cleaned raw historical data, parsed complex `budgetallocation` strings, and engineered custom analytical features such as `budget_per_head`."
              delay={0.2}
            />

            <PrimaryContributionCard 
              icon={<FileSpreadsheet className="text-emerald-400" size={20} />}
              title="Predictive Modeling"
              desc="Trained an ensemble RandomForestClassifier for intelligent venue recommendation and a multi-output RandomForestRegressor for granular, percentage-based budget allocations."
              delay={0.3}
            />

            <PrimaryContributionCard 
              icon={<AppWindow className="text-blue-400" size={20} />}
              title="Interactive Dashboard"
              desc="Wrapped the predictive models into a fully interactive Streamlit application that dynamically calculates event costs and visualizes budget distributions in real-time."
              delay={0.4}
            />

          </div>

          {/* ========== SECTION B ========== */}
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-10 md:pl-16 relative"
          >
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-2 flex items-center gap-4">
              <span className="hidden md:flex absolute left-[3.5px] w-3 h-3 rounded-full bg-zinc-800 border border-zinc-700 items-center justify-center -translate-x-[22px] z-10">
                <span className="w-1 h-1 rounded-full bg-zinc-500" />
              </span>
              Section B
            </h2>
            <h3 className="text-2xl font-bold tracking-tight text-zinc-300 mb-2">Overall Project Capabilities</h3>
            <p className="text-xs text-zinc-500 italic mt-3 max-w-lg">
              Working in a cross-functional Agile team, the platform also featured the following full-stack integrations:
            </p>
          </MotionDiv>

          <div className="space-y-6 relative flex flex-col mb-32">
            
            <MutedFeatureCard 
              icon={<Layout className="text-zinc-500" size={18} />}
              title="Full-Stack Ecosystem"
              desc="A modern, highly responsive frontend built with Next.js (TypeScript) connected to a robust Node.js/Express RESTful API."
              delay={0.1}
            />

            <MutedFeatureCard 
              icon={<Server className="text-zinc-500" size={18} />}
              title="Database Architecture"
              desc="Complex, ACID-compliant database schemas managed in PostgreSQL to handle users, event parameters, and secure transactions."
              delay={0.2}
            />

            <MutedFeatureCard 
              icon={<Cloud className="text-zinc-500" size={18} />}
              title="Cloud Infrastructure"
              desc="Utilization of AWS S3 for decoupled document management and asset storage."
              delay={0.3}
            />

          </div>


          {/* ========== SECTION C ========== */}
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 md:pl-16 relative"
          >
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-emerald-400 mb-2 flex items-center gap-4">
              <span className="hidden md:flex absolute left-[3.5px] w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50 items-center justify-center -translate-x-[22px] z-10">
                <span className="w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              </span>
              Section C
            </h2>
            <h3 className="text-3xl font-bold tracking-tight text-white mb-2">SDLC & Engineering Practices</h3>
          </MotionDiv>

          {/* Terminal / Pipeline UI */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.98, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:pl-16"
          >
            <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-[#0d0d0e] shadow-2xl relative">
              {/* Terminal Header */}
              <div className="flex items-center px-4 py-3 border-b border-zinc-800 bg-[#161618]">
                <div className="flex gap-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="text-xs font-mono text-zinc-500 flex items-center gap-2">
                  <Terminal size={14} /> ci-cd-pipeline.log
                </div>
              </div>
              
              {/* Terminal Body */}
              <div className="p-6 md:p-8 font-mono space-y-8 text-sm md:text-base">
                
                <TerminalEntry 
                  status="[SUCCESS]" 
                  statusColor="text-emerald-400"
                  icon={<CopyCheck size={16} className="text-emerald-400" />}
                  title="Version Control"
                  desc="Maintained a strict, branch-based Git workflow for parallel feature development alongside backend and frontend engineers."
                  delay={0}
                />
                
                <TerminalEntry 
                  status="[PASSING]" 
                  statusColor="text-blue-400"
                  icon={<CheckCircle2 size={16} className="text-blue-400" />}
                  title="Testing & Data Integrity"
                  desc="Authored unit tests for data preprocessing pipelines to ensure mathematical accuracy before passing payloads to the API."
                  delay={0.2}
                />
                
                <TerminalEntry 
                  status="[MERGED]" 
                  statusColor="text-violet-400"
                  icon={<GitMerge size={16} className="text-violet-400" />}
                  title="Agile Collaboration"
                  desc="Actively participated in SDLC ceremonies, requirements gathering, and cross-team code walkthroughs to integrate the Python AI service with the JavaScript backend."
                  delay={0.4}
                />
                
                <TerminalEntry 
                  status="[DEPLOYED]" 
                  statusColor="text-indigo-400"
                  icon={<Rocket size={16} className="text-indigo-400" />}
                  title="Technical Documentation"
                  desc="Authored comprehensive technical specifications detailing algorithmic methodologies and API payload structures."
                  delay={0.6}
                />

                <MotionDiv 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="flex items-center gap-2 text-zinc-500 pt-4 border-t border-zinc-800/50 mt-4"
                >
                  <span className="text-emerald-400">root@sdlc:~$</span>
                  <span className="animate-pulse w-2 h-4 bg-zinc-400" />
                </MotionDiv>
              </div>
            </div>
          </MotionDiv>

        </div>
      </div>
    </div>
  );
}


/* --- Highlighted Primary Contribution Card --- */
function PrimaryContributionCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <MotionDiv 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="md:pl-16 relative group"
    >
      <div className="hidden md:flex absolute left-[-4px] top-8 w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-violet-400 transition-colors z-10 outline outline-4 outline-zinc-950 shadow-[0_0_10px_rgba(139,92,246,0.5)] opacity-0 group-hover:opacity-100" />
      <div className="hidden md:block absolute left-0 top-8 h-[1px] bg-gradient-to-r from-violet-500/0 via-violet-500/20 to-transparent right-full -z-10 group-hover:via-violet-500/50 transition-colors" />

      <div className="glass-panel p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 bg-gradient-to-br from-zinc-900/80 to-zinc-900/20 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all duration-300 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500/50 to-indigo-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
          <div className="mt-1 p-3 rounded-xl bg-white/5 border border-white/5 shadow-inner">
            {icon}
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-bold tracking-tight text-white mb-2 group-hover:text-violet-100 transition-colors">
              {title}
            </h4>
            <p className="text-zinc-400 leading-relaxed font-medium text-sm md:text-base">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

/* --- Muted Feature Card --- */
function MutedFeatureCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <MotionDiv 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="md:pl-16 relative group"
    >
      <div className="hidden md:flex absolute left-[-4px] top-6 w-2 h-2 rounded-full bg-zinc-800 z-10 outline outline-4 outline-zinc-950" />

      <div className="p-5 md:p-6 rounded-[1.5rem] border border-zinc-800/50 bg-zinc-900/10 hover:bg-zinc-900/30 transition-colors duration-300">
        <div className="flex items-start gap-4">
          <div className="mt-1 opacity-50">
            {icon}
          </div>
          <div>
            <h4 className="text-base font-bold tracking-tight text-zinc-300 mb-1">
              {title}
            </h4>
            <p className="text-zinc-500 leading-relaxed text-sm">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}


function TerminalEntry({ status, statusColor, title, icon, desc, delay }: { status: string, statusColor: string, icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <MotionDiv 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-start group/entry"
    >
      <div className={`flex-shrink-0 w-28 font-bold ${statusColor} tracking-wider`}>
        {status}
      </div>
      <div className="space-y-2">
        <div className="text-zinc-200 font-bold flex items-center gap-2">
          {icon} <span className="underline decoration-zinc-700 underline-offset-4">{title}:</span>
        </div>
        <div className="text-zinc-500 leading-relaxed border-l-2 border-zinc-800/50 pl-4 py-1">
          {desc}
        </div>
      </div>
    </MotionDiv>
  );
}
