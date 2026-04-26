"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

const MotionDiv = motion.div as any;

import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(filter));

  return (
    <div className="container mx-auto px-6 pt-32 min-h-screen max-w-4xl">
      <h1 className="text-5xl font-display font-bold mb-12">Projects</h1>

      <div className="flex flex-wrap gap-2 mb-16">
        {[
          "all",
          "fullstack",
          "react",
          "python",
          "ai",
          "api",
          "web",
          "oop",
          "java",
          "backend",
          "cli",
          "algorithm",
        ].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded transition-colors uppercase text-xs tracking-wider ${
              filter === f
                ? "bg-white/10 text-white font-bold"
                : "text-text-muted hover:text-text-secondary hover:bg-white/5"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex flex-col border-t border-white/10 pb-32">
        {filteredProjects.map((project, i) => (
          <MotionDiv
            key={project.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group flex flex-col sm:flex-row sm:items-start justify-between gap-4 py-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex gap-4 sm:gap-6 items-start max-w-3xl">
              <span className="text-text-muted/50 font-mono text-sm mt-1 flex-shrink-0 w-6 text-right">
                {String(i + 1).padStart(2, "0")}
              </span>
              
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <Link 
                    href={`/projects/${project.slug}`} 
                    className="text-lg md:text-xl font-bold group-hover:text-accent-blue transition-colors"
                  >
                    {project.title}
                  </Link>
                  <span className="text-[10px] text-text-muted font-mono uppercase tracking-widest">
                    {project.status}
                  </span>
                </div>
                
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 ml-10 sm:ml-0 sm:opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0">
              {project.liveUrl && project.slug !== "eventlk" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-text-muted hover:text-white hover:bg-white/10 rounded transition-colors"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={18} />
                </a>
              )}
              <Link
                href={`/projects/${project.slug}`}
                className="p-2 text-text-muted hover:text-white hover:bg-white/10 rounded transition-colors"
                aria-label="View Project"
              >
                <ArrowRight size={18} />
              </Link>
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
