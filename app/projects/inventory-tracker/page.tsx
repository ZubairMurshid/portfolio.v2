"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  BellRing,
  ClipboardList,
  Database,
  ExternalLink,
  Github,
  Package,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import CascadeText from "@/components/CascadeText";

export default function InventoryTrackerPage() {
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
              Java Backend
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-4xl font-display font-extrabold mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 leading-tight">
            <CascadeText>Modern Inventory Tracking Platform</CascadeText>
          </h1>

          <p className="text-md md:text-lg text-text-secondary max-w-3xl leading-relaxed">
            <CascadeText delay={0.3}>
              A real-time supply chain and stock management system built to
              replace manual tracking with a responsive dashboard, immutable
              transaction history, supplier management, and low-stock alerting.
            </CascadeText>
          </p>
        </header>

        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="https://docs.google.com/document/d/11RmNCaBQUVhnwi-33mLN_CbELoRY6OIt74ioLCRheyU/edit?usp=sharing&usp=embed_facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-bold tracking-wide border border-white/10 hover:bg-white/10 transition-colors"
          >
            <ExternalLink size={20} /> Executive Summary
          </a>
          <a
            href="https://github.com/ZubairMurshid/InventoryTrackingApplication"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white font-bold tracking-wide border border-white/10 hover:bg-white/10 transition-colors"
          >
            <Github size={20} /> GitHub Repository
          </a>
          <a
            href="https://stitch.withgoogle.com/projects/12262308517687355631"
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
          <Package
            size={64}
            className="mx-auto text-cyan-400 mb-6 opacity-80"
          />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            <CascadeText>Inventory Control Without Manual Drift</CascadeText>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            <CascadeText delay={0.3}>
              The platform keeps stock data current through fast-entry workflows,
              transaction-ledger updates, supplier relationships, and proactive
              alerting when inventory drops below defined thresholds.
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
                  The Modern Inventory Tracking Platform is a full-stack
                  application for businesses that need accurate, real-time
                  visibility into products, suppliers, and stock movements. It
                  was designed to replace brittle spreadsheets and manual
                  reconciliation with a more reliable operating model.
                </p>
                <p>
                  Every update is tracked as a transaction so the platform
                  preserves history while still presenting a clean current-state
                  dashboard to the user. That makes the system practical for
                  day-to-day operations and useful for audits.
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
                  <ClipboardList className="text-cyan-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">
                    Central Dashboard
                  </h3>
                  <p className="text-sm text-text-muted">
                    A unified AllProductsStatus view for stock levels,
                    suppliers, and product categories in one place.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-2xl">
                  <BarChart3 className="text-cyan-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">
                    Fast Entry Transactions
                  </h3>
                  <p className="text-sm text-text-muted">
                    Quick inbound and outbound logging that updates the stock
                    ledger without forcing a page reload.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-2xl">
                  <BellRing className="text-cyan-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">
                    Low-Stock Alerting
                  </h3>
                  <p className="text-sm text-text-muted">
                    Threshold monitoring that notifies administrators when stock
                    levels drop below safe minimums.
                  </p>
                </div>

                <div className="glass-panel p-6 rounded-2xl">
                  <ShieldCheck className="text-cyan-400 mb-4" size={24} />
                  <h3 className="text-lg font-bold text-white mb-2">
                    Supplier Management
                  </h3>
                  <p className="text-sm text-text-muted">
                    Products are linked to suppliers so procurement and
                    replenishment stay connected across the workflow.
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
                    Strict TypeScript and Tailwind CSS deliver the polished
                    operational UI.
                  </p>
                </div>

                <div className="w-full h-px bg-white/5" />

                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">
                    Backend
                  </div>
                  <div className="text-white font-medium">Java + Maven</div>
                  <p className="text-xs text-text-secondary mt-1">
                    MVC architecture with a clear service and DAO split for
                    maintainability.
                  </p>
                </div>

                <div className="w-full h-px bg-white/5" />

                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">
                    Data Layer
                  </div>
                  <div className="text-white font-medium">
                    SQL Relational Database
                  </div>
                  <p className="text-xs text-text-secondary mt-1">
                    Normalized schema, ledger entries, and referential integrity
                    for products and suppliers.
                  </p>
                </div>

                <div className="w-full h-px bg-white/5" />

                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">
                    Quality
                  </div>
                  <div className="text-white font-medium">JUnit + Surefire</div>
                  <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                    Tests isolate inventory service logic and validate the
                    business rules behind stock updates and alerts.
                  </p>
                </div>

                <div className="w-full h-px bg-white/5" />

                <div>
                  <div className="text-xs text-text-muted uppercase tracking-widest font-mono mb-2">
                    Key Pattern
                  </div>
                  <div className="text-white font-medium">
                    Observer + Immutable Ledger
                  </div>
                  <p className="text-xs text-text-secondary mt-1">
                    The update flow preserves audit history while keeping
                    downstream notifications decoupled.
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
