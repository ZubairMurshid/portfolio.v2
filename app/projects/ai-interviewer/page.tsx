"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BrainCircuit,
  ExternalLink,
  FileText,
  Mic,
  MessageSquareText,
  Upload,
  Database,
  Server,
  Cloud,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import CascadeText from "@/components/CascadeText";

const MotionDiv = motion.div as any;

export default function AiInterviewerPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-5xl mb-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-text-muted hover:text-white transition-colors text-sm font-mono uppercase tracking-widest mb-12"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20">
              In Progress
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-white/5 text-text-secondary border border-white/10">
              React + Vite
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-white/5 text-text-secondary border border-white/10">
              TypeScript
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-white/5 text-text-secondary border border-white/10">
              AI / Voice
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-4xl font-display font-extrabold mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 leading-tight">
            <CascadeText>AI-Powered Interview Agent Platform</CascadeText>
          </h1>

          <p className="text-md md:text-lg text-text-secondary max-w-3xl leading-relaxed">
            <CascadeText delay={0.3}>
              A real-time interview simulator that ingests a CV, builds a
              personalized interview strategy with generative AI, and conducts
              adaptive voice conversations with context-aware follow-up questions.
            </CascadeText>
          </p>
        </header>

        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="https://docs.google.com/document/d/1__U_CETnQ5JgqBSiyGqTDJfsG_ScaER6CifEqEAc5Ew/edit?tab=t.0&usp=embed_facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-bold tracking-wide border border-white/10 hover:bg-white/10 transition-colors"
          >
            <ExternalLink size={20} /> Executive Summary
          </a>
        </div>
      </div>

      <div className="w-full bg-black/40 border-y border-white/5 py-12 mb-20 overflow-hidden relative min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <BrainCircuit
            size={64}
            className="mx-auto text-cyan-400 mb-6 opacity-80"
          />
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">
            <CascadeText>Interviews That Adapt in Real Time</CascadeText>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            <CascadeText delay={0.3}>
              The platform turns static CV review into a dynamic conversation by
              extracting context, generating tailored prompts, and responding to
              spoken answers with intelligent follow-up questions.
            </CascadeText>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section id="overview">
              <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
                <span className="text-accent-blue font-mono text-sm tracking-widest">
                  01
                </span>
                Project Overview
              </h2>
              <div className="prose prose-invert prose-lg text-text-secondary">
                <p>
                  The AI Interview Platform is designed to simulate a
                  production-grade interview experience rather than a fixed
                  question set. It securely processes a user CV, extracts the
                  relevant experience and skills, and builds an interview flow
                  that reflects the candidate’s actual background.
                </p>
                <p>
                  Instead of relying on scripted prompts, the system adapts in
                  context. The agent can pivot based on the candidate’s answers,
                  keep the conversation grounded in their CV, and maintain a
                  realistic technical or behavioral interview cadence.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
                <span className="text-accent-blue font-mono text-sm tracking-widest">
                  02
                </span>
                Key Features
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="glass-panel p-6 rounded-2xl">
                  <Upload className="text-cyan-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">
                    CV Upload Flow
                  </h3>
                  <p className="text-sm text-text-muted">
                    A responsive drag-and-drop experience for PDF uploads, built
                    to feel low-friction from the first interaction.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-2xl">
                  <FileText className="text-cyan-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">
                    Context Extraction
                  </h3>
                  <p className="text-sm text-text-muted">
                    Parses the document to identify career milestones, projects,
                    skills, and other interview-relevant signals.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-2xl">
                  <Mic className="text-cyan-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">
                    Live Voice Interview
                  </h3>
                  <p className="text-sm text-text-muted">
                    Supports real-time conversational interaction so the AI can
                    behave like a responsive human interviewer.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-2xl">
                  <MessageSquareText className="text-cyan-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">
                    Adaptive Follow-Ups
                  </h3>
                  <p className="text-sm text-text-muted">
                    Generates intelligent follow-up questions dynamically
                    instead of falling back to generic interview scripts.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="md:col-span-1">
            <div
              className="sticky top-24 glass-panel p-8 rounded-2xl"
              id="architecture"
            >
              <h3 className="text-lg font-bold font-display mb-6 uppercase tracking-wider">
                Technical Specifications
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">
                    Frontend
                  </div>
                  <div className="text-white font-medium">React 18 + Vite</div>
                  <p className="text-xs text-text-secondary mt-1">
                    Strict TypeScript with Tailwind CSS for a responsive, modern
                    interface.
                  </p>
                </div>

                <div className="w-full h-px bg-white/5" />

                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">
                    Backend
                  </div>
                  <div className="text-white font-medium">
                    Node.js + Express
                  </div>
                  <p className="text-xs text-text-secondary mt-1">
                    Modular routing, AI orchestration, and file-processing logic
                    separated into clear layers.
                  </p>
                </div>

                <div className="w-full h-px bg-white/5" />

                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">
                    Data Layer
                  </div>
                  <div className="text-white font-medium">
                    Firebase / Firestore
                  </div>
                  <p className="text-xs text-text-secondary mt-1">
                    Stores interview sessions, parsed CV data, and user records
                    for persistence and scale.
                  </p>
                </div>

                <div className="w-full h-px bg-white/5" />

                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">
                    Core Modules
                  </div>
                  <div className="text-white font-medium">
                    AI Parsing, Voice, Storage
                  </div>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                    The platform is structured around secure document handling,
                    context-aware prompt generation, and low-latency interview
                    state management.
                  </p>
                </div>

                <div className="w-full h-px bg-white/5" />

                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">
                    Project Status
                  </div>
                  <div className="text-white font-medium">
                    Active Development
                  </div>
                  <p className="text-xs text-text-secondary mt-1">
                    Positioned as a production-focused showcase of real-time AI
                    interaction and full-stack system design.
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
