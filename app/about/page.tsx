"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Code2,
  BrainCircuit,
  Users,
  Terminal,
} from "lucide-react";
import CascadeText from "@/components/CascadeText";

const MotionDiv = motion.div as any;

export default function AboutPage() {
  const [showTldr, setShowTldr] = useState(false);

  return (
    <div className="container mx-auto px-6 pt-32 pb-20 min-h-screen max-w-5xl">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20">
          <div className="lg:w-1/3">
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold mb-6 tracking-tighter text-white">
              <CascadeText>About Me.</CascadeText>
            </h1>
            <div className="h-1 w-20 bg-accent-blue rounded-full mb-8" />
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-text-muted font-mono text-sm uppercase tracking-widest">
                <Terminal size={16} className="text-accent-blue" />
                <span>Software Engineer</span>
              </div>
              <div className="flex items-center gap-3 text-text-muted font-mono text-sm uppercase tracking-widest">
                <BrainCircuit size={16} className="text-accent-blue" />
                <span>AI Specialist</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowTldr((current) => !current)}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono uppercase tracking-[0.25em] text-white transition-colors hover:bg-white/10 hover:border-accent-blue/40"
            >
              tl;dr{" "}
              {showTldr ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>

          <div className="lg:w-2/3 flex flex-col gap-6 text-lg text-text-secondary leading-relaxed">
            {showTldr ? (
              <>
                <p>
                  <span className="font-bold text-white">Who I am:</span> <br />
                  CS undergraduate building production-ready software at the
                  intersection of full-stack development and AI.
                </p>
                <p>
                  <span className="font-bold text-white">What I do:</span>{" "}
                  <br />
                  Design scalable web architectures, integrate predictive &
                  generative AI models, and deliver seamless user experiences.
                </p>
                <p>
                  <span className="font-bold text-white">Core interests:</span>{" "}
                  <br />
                  Generative AI, large language models, agent-based systems, and
                  real-time intelligent workflows.
                </p>
                <p>
                  <span className="font-bold text-white">Values:</span> <br />{" "}
                  Clean system design, security-minded thinking, collaborative
                  development, agile delivery.
                </p>
                <p>
                  <span className="font-bold text-white">
                    Experience highlights:
                  </span>{" "}
                  <br />
                  AI-powered interview agents, event management platforms,
                  inventory tracking systems, IoT APIs, full-stack dashboards.
                </p>
                <p>
                  <span className="font-bold text-white">Goal:</span> <br />
                  Contribute as a Software / AI-ML Engineer while growing
                  expertise in advanced AI and building impactful,
                  production-ready systems.
                </p>
                <p className="text-accent-blue/90 font-medium">
                  <span className="font-bold text-white">Core skills:</span>{" "}
                  <br />
                  Full-Stack Engineering | AI & Data Pipelines | Collaborative
                  System Design | Security & Production Readiness
                </p>
              </>
            ) : (
              <>
                <p className="text-xl text-white font-medium leading-relaxed">
                  I’m a Computer Science undergraduate with a strong foundation
                  in software engineering and a growing focus on AI-driven
                  systems. My work sits at the intersection of full-stack
                  development and machine learning, where I enjoy building
                  intelligent, end-to-end applications that solve real-world
                  problems.
                </p>
                <p>
                  I’ve developed projects that combine predictive AI with
                  scalable web architectures—designing data pipelines,
                  integrating machine learning models into backend systems, and
                  delivering seamless user experiences through modern frontend
                  technologies. I’m particularly interested in the evolving
                  space of Generative AI, large language models, and agent-based
                  systems, and I’m actively working toward building expertise in
                  these areas.
                </p>
                <p>
                  Beyond technical skills, I value clean system design,
                  collaborative development, and clear communication. I’ve
                  worked in team environments using agile practices,
                  contributing to both development and deployment workflows, and
                  I’m always looking for opportunities to learn, iterate, and
                  improve.
                </p>
                <p className="text-accent-blue/90 font-medium">
                  I’m currently seeking opportunities where I can contribute as
                  a software or AI/ML engineer, while continuing to grow in
                  building impactful, production-ready systems.
                </p>
              </>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
          <HighlightBox
            icon={<Code2 size={24} className="text-accent-blue" />}
            title="Full-Stack Engineering"
            desc="Building robust, scalable applications with modern web architectures and APIs."
            delay={0.1}
          />
          <HighlightBox
            icon={<BrainCircuit size={24} className="text-accent-blue" />}
            title="AI & Data Pipelines"
            desc="Integrating predictive models and generative AI into production environments."
            delay={0.2}
          />
          <HighlightBox
            icon={<Users size={24} className="text-accent-blue" />}
            title="Collaborative Design"
            desc="Valuing clean system architecture, agile workflows, and clear communication."
            delay={0.3}
          />
        </div>
      </MotionDiv>
    </div>
  );
}

function HighlightBox({
  icon,
  title,
  desc,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
    >
      <div className="mb-6 p-4 rounded-full bg-white/5 inline-flex border border-white/10">
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-3 text-white tracking-tight">
        {title}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
    </MotionDiv>
  );
}
