"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Code2,
  ExternalLink,
  GitBranch,
  Github,
  Search,
  Sparkles,
  TimerReset,
  Workflow,
} from "lucide-react";

export default function AlgoProjectPage() {
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
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-green-500/10 text-green-500 border border-green-500/20">
              Completed
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-white/5 text-text-secondary border border-white/10">
              Java
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-white/5 text-text-secondary border border-white/10">
              CLI
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-white/5 text-text-secondary border border-white/10">
              Algorithms
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-4xl font-display font-extrabold mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 leading-tight">
            Directed Graph Acyclicity Checker
          </h1>

          <p className="text-md md:text-lg text-text-secondary max-w-3xl leading-relaxed">
            A Java-based command-line tool that analyzes directed graphs,
            detects cyclic dependencies with DFS, reconstructs the exact cycle
            path, and benchmarks traversal performance.
          </p>
        </header>

        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="https://github.com/ZubairMurshid/Directed-Graph-Acyclicity-Checker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-bold tracking-wide border border-white/10 hover:bg-white/10 transition-colors"
          >
            <Github size={20} /> GitHub Repository
          </a>
          <a
            href="https://docs.google.com/document/d/1FmuUKjtFmz8tNsaqztfl9GinCzkgjLO87_sWSpsOAWk/edit?usp=sharing&usp=embed_facebook"
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
          <GitBranch
            size={64}
            className="mx-auto text-cyan-400 mb-6 opacity-80"
          />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Cycle Detection With Exact Path Recovery
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            The checker does more than return true or false. It pinpoints the
            cycle, extracts the node sequence, and measures the algorithm so the
            output is useful for debugging and analysis.
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
                  This project was built to detect cyclic dependencies in
                  directed graphs with an optimized depth-first search approach.
                  It is useful for understanding dependency chains,
                  deadlock-style loops, and other network structures where
                  cycles are a problem.
                </p>
                <p>
                  Instead of stopping at a boolean result, the application
                  reconstructs the exact cycle path when one is found, which
                  makes the output actionable for diagnosis and teaching.
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
                  <Search className="text-cyan-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">
                    DFS Cycle Detection
                  </h3>
                  <p className="text-sm text-text-muted">
                    Traverses nodes and edges with O(V + E) complexity while
                    tracking recursion state for cycle discovery.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-2xl">
                  <Code2 className="text-cyan-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">
                    Cycle Path Extraction
                  </h3>
                  <p className="text-sm text-text-muted">
                    Reconstructs the exact loop sequence instead of only
                    reporting that a cycle exists.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-2xl">
                  <Workflow className="text-cyan-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">
                    Graph Parsing
                  </h3>
                  <p className="text-sm text-text-muted">
                    Loads structured text input into a fully initialized graph
                    model ready for analysis.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-2xl">
                  <TimerReset className="text-cyan-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">
                    Performance Benchmarking
                  </h3>
                  <p className="text-sm text-text-muted">
                    Includes timing instrumentation to measure the algorithm's
                    execution latency in milliseconds.
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
                    Language
                  </div>
                  <div className="text-white font-medium">Java</div>
                  <p className="text-xs text-text-secondary mt-1">
                    Built with core language features and object-oriented design
                    principles.
                  </p>
                </div>

                <div className="w-full h-px bg-white/5" />

                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">
                    Interface
                  </div>
                  <div className="text-white font-medium">
                    Command-Line Tool
                  </div>
                  <p className="text-xs text-text-secondary mt-1">
                    Simple CLI workflow for graph ingestion and cycle analysis.
                  </p>
                </div>

                <div className="w-full h-px bg-white/5" />

                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">
                    Data Structure
                  </div>
                  <div className="text-white font-medium">Adjacency List</div>
                  <p className="text-xs text-text-secondary mt-1">
                    Memory-efficient graph representation for sparse directed
                    networks.
                  </p>
                </div>

                <div className="w-full h-px bg-white/5" />

                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">
                    Core Classes
                  </div>
                  <div className="text-white font-medium">
                    Parser, Generator, Checker
                  </div>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                    The system is divided into tightly scoped components for
                    parsing, generation, traversal, and reporting.
                  </p>
                </div>

                <div className="w-full h-px bg-white/5" />

                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">
                    Strategic Value
                  </div>
                  <div className="text-white font-medium">
                    Algorithms Showcase
                  </div>
                  <p className="text-xs text-text-secondary mt-1">
                    Demonstrates graph theory fundamentals, recursion, and clean
                    OOP design in one focused utility.
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
