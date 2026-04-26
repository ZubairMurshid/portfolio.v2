"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Cloud, Cpu, ExternalLink, Gauge, Github, Radio, Server, ShieldCheck, Sparkles } from "lucide-react";
import CascadeText from "@/components/CascadeText";

export default function SmartCampusPage() {
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
              JAX-RS
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-white/5 text-text-secondary border border-white/10">
              IoT API
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-4xl font-display font-extrabold mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 leading-tight">
            <CascadeText>Smart Campus IoT Management API</CascadeText>
          </h1>

          <p className="text-xl text-md md:text-lg text-text-secondary max-w-3xl leading-relaxed">
            <CascadeText delay={0.3}>
              A lightweight RESTful backend for campus infrastructure that manages
              rooms, sensors, and environmental telemetry through in-memory state,
              observability filters, and strict resource safeguards.
            </CascadeText>
          </p>
        </header>

        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="https://docs.google.com/document/d/1PmcKxO_oto5T3S4mnqUdss-LFtgw6mDI74_8fkKihe0/edit?usp=sharing&usp=embed_facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-bold tracking-wide border border-white/10 hover:bg-white/10 transition-colors"
          >
            <ExternalLink size={20} /> Executive Summary
          </a>
          <a
            href="https://github.com/ZubairMurshid/smart-campus-api"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-bold tracking-wide border border-white/10 hover:bg-white/10 transition-colors"
          >
            <Github size={20} /> GitHub Repository
          </a>
        </div>
      </div>

      <div className="w-full bg-black/40 border-y border-white/5 py-12 mb-20 overflow-hidden relative min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <Cloud size={64} className="mx-auto text-cyan-400 mb-6 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            <CascadeText>Centralized Telemetry for Smart Buildings</CascadeText>
          </h2>
          <p className="text-text-muted text-md max-w-2xl mx-auto">
            <CascadeText delay={0.3}>
              The API exposes a secure, hierarchical interface for rooms, sensors,
              and readings so campus operators can monitor environmental state
              without heavy framework overhead.
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
                  The Smart Campus API is a high-performance backend service
                  built to manage university infrastructure data in real time.
                  It focuses on rooms, hardware sensors, and environmental
                  readings such as temperature, CO2, and occupancy.
                </p>
                <p>
                  The system was intentionally designed for speed and clarity,
                  using in-memory structures, nested resource routing, and
                  dedicated exception handling to keep the API predictable and
                  easy to operate.
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
                  <Radio className="text-cyan-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">
                    HATEOAS Discovery
                  </h3>
                  <p className="text-sm text-text-muted">
                    The root endpoint exposes navigable links so clients can
                    discover API state without hardcoded routes.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-2xl">
                  <ShieldCheck className="text-cyan-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">
                    Deletion Safeguards
                  </h3>
                  <p className="text-sm text-text-muted">
                    Protects rooms from deletion if active sensors are still
                    attached, preserving referential integrity.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-2xl">
                  <Gauge className="text-cyan-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">
                    Hardware State Validation
                  </h3>
                  <p className="text-sm text-text-muted">
                    Sensors in maintenance mode reject new telemetry so
                    corrupted readings do not pollute the history.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-2xl">
                  <Cpu className="text-cyan-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">
                    Filtered Retrieval
                  </h3>
                  <p className="text-sm text-text-muted">
                    Query parameters let clients isolate specific hardware types
                    and reduce response payload size.
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
                  <div className="text-white font-medium">Java 8</div>
                  <p className="text-xs text-text-secondary mt-1">
                    Core language features used for a lean, predictable runtime
                    footprint.
                  </p>
                </div>

                <div className="w-full h-px bg-white/5" />

                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">
                    Framework
                  </div>
                  <div className="text-white font-medium">JAX-RS / Jersey</div>
                  <p className="text-xs text-text-secondary mt-1">
                    Resource classes, sub-resource locators, and filters
                    organize the API surface.
                  </p>
                </div>

                <div className="w-full h-px bg-white/5" />

                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">
                    Deployment
                  </div>
                  <div className="text-white font-medium">Apache Tomcat</div>
                  <p className="text-xs text-text-secondary mt-1">
                    Packaged as a WAR and deployed in a servlet container for
                    broad compatibility.
                  </p>
                </div>

                <div className="w-full h-px bg-white/5" />

                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">
                    Observability
                  </div>
                  <div className="text-white font-medium">
                    Request / Response Filters
                  </div>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                    Centralized logging and sanitized error handling give the
                    API predictable behavior under load.
                  </p>
                </div>

                <div className="w-full h-px bg-white/5" />

                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">
                    Data Model
                  </div>
                  <div className="text-white font-medium">
                    In-Memory Concurrent Maps
                  </div>
                  <p className="text-xs text-text-secondary mt-1">
                    Thread-safe state management keeps request handling fast and
                    lightweight.
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
