'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Circle, ChevronDown, Rocket, ShieldCheck, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

const MotionDiv = motion.div as any;
const MotionPath = motion.path as any;

interface RoadmapNode {
  id: string;
  label: string;
  checkpoint?: string;
  category: 'Frontend Foundations' | 'Backend Development' | 'DevOps & Cloud';
}

const roadmapNodes: RoadmapNode[] = [
  { id: 'html', label: 'HTML', checkpoint: 'Checkpoint - Static Webpages', category: 'Frontend Foundations' },
  { id: 'css', label: 'CSS', checkpoint: 'Checkpoint - Static Webpages', category: 'Frontend Foundations' },
  { id: 'js', label: 'JavaScript', checkpoint: 'Checkpoint - Interactivity', category: 'Frontend Foundations' },
  { id: 'npm', label: 'npm', checkpoint: 'Checkpoint - External Packages', category: 'Frontend Foundations' },
  { id: 'git', label: 'Git', checkpoint: 'Checkpoint - Collaborative Work', category: 'Frontend Foundations' },
  { id: 'github', label: 'GitHub', checkpoint: 'Checkpoint - Collaborative Work', category: 'Frontend Foundations' },
  { id: 'react', label: 'React', checkpoint: 'Checkpoint - Frontend Apps', category: 'Frontend Foundations' },
  { id: 'tailwind', label: 'Tailwind CSS', checkpoint: 'Checkpoint - Frontend Apps', category: 'Frontend Foundations' },
  { id: 'nodejs', label: 'Node.js', checkpoint: 'Checkpoint - CLI Apps', category: 'Backend Development' },
  { id: 'postgres', label: 'PostgreSQL', checkpoint: 'Checkpoint - Simple CRUD Apps', category: 'Backend Development' },
  { id: 'redis', label: 'Redis', checkpoint: 'In-memory data structure store, used as a database, cache, and message broker.', category: 'Backend Development' },
  { id: 'jwt', label: 'JWT Auth', checkpoint: 'Securely transmitting information between parties as a JSON object.', category: 'Backend Development' },
  { id: 'rest', label: 'RESTful APIs', checkpoint: 'Checkpoint - Complete App', category: 'Backend Development' },
  { id: 'linux', label: 'Linux Basics', checkpoint: 'Command line proficiency, file permissions, and process management.', category: 'DevOps & Cloud' },
  { id: 'aws', label: 'AWS (S3, EC2, VPC)', checkpoint: 'Checkpoint - Deployment', category: 'DevOps & Cloud' },
  { id: 'terraform', label: 'Terraform', checkpoint: 'Checkpoint - Infrastructure', category: 'DevOps & Cloud' },
  { id: 'ansible', label: 'Ansible', checkpoint: 'Checkpoint - Automation', category: 'DevOps & Cloud' },
  { id: 'gha', label: 'GitHub Actions', checkpoint: 'Checkpoint - CI / CD', category: 'DevOps & Cloud' },
];

export default function RoadmapPage() {
  const [completedNodes, setCompletedNodes] = useState<Set<string>>(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const saved = localStorage.getItem('completedRoadmapNodes');
    if (saved) {
      setCompletedNodes(new Set(JSON.parse(saved)));
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleNode = (id: string) => {
    const newSet = new Set(completedNodes);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setCompletedNodes(newSet);
    localStorage.setItem('completedRoadmapNodes', JSON.stringify(Array.from(newSet)));
  };

  // SVG Path parameters
  const heightPerNode = 180;
  const totalHeight = roadmapNodes.length * heightPerNode + 200;
  const curveWidth = 120;
  const startY = 100;

  const generatePath = () => {
    let path = `M 50 ${startY}`;
    for (let i = 0; i < roadmapNodes.length; i++) {
      const y = startY + (i + 1) * heightPerNode;
      const prevY = startY + i * heightPerNode;
      const isRight = i % 2 === 0;
      const cpX = isRight ? 50 + curveWidth : 50 - curveWidth;
      path += ` C ${cpX} ${prevY + heightPerNode / 3}, ${cpX} ${y - heightPerNode / 3}, 50 ${y}`;
    }
    return path;
  };

  return (
    <div className="bg-[#020204] min-h-screen text-[#F8F9FA] relative" ref={containerRef}>
      {/* Spotlight Effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.03), transparent 80%)`
        }}
      />

      <div className="container mx-auto px-6 pt-32 pb-40 relative z-20">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-white/20" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#64748B]">Execution Path v1.2</span>
            <div className="w-12 h-[1px] bg-white/20" />
          </div>
          <h1 className="text-5xl md:text-8xl font-sans font-extrabold mb-8 tracking-tighter">
            Internship <span className="text-white/40">Roadmap</span>
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            A linear progression strategy towards Full-Stack mastery. Tracking my evolution from syntax to infrastructure.
          </p>
          
          <div className="mt-12 flex justify-center gap-12">
            <Stat label="Completed" value={completedNodes.size} total={roadmapNodes.length} />
            <Stat label="Status" value={`${Math.round((completedNodes.size / roadmapNodes.length) * 100)}%`} subtitle="Mastery" />
          </div>
        </div>

        {/* Roadmap Path Container */}
        <div className="relative mx-auto max-w-lg">
          <svg
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-full pointer-events-none overflow-visible"
            viewBox={`0 0 100 ${totalHeight}`}
            preserveAspectRatio="none"
          >
            {/* Background Path (Dotted) */}
            <path
              d={generatePath()}
              fill="none"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="1.5"
              strokeDasharray="4 8"
            />
            {/* Progress Path */}
            <MotionPath
              d={generatePath()}
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="2"
              style={{ pathLength }}
              strokeLinecap="round"
            />
          </svg>

          {/* Nodes */}
          <div className="relative z-10">
            {roadmapNodes.map((node, i) => {
              const isCompleted = completedNodes.has(node.id);
              const isRight = i % 2 === 0;

              return (
                <div key={node.id} className="relative h-[180px] flex items-center justify-center">
                  {/* Category Indicator */}
                  {(i === 0 || roadmapNodes[i - 1]?.category !== node.category) && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
                      <div className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#64748B] whitespace-nowrap bg-[#020204] px-4 py-1 border border-white/5 rounded-full mb-2">
                        {node.category}
                      </div>
                      <CategoryIcon category={node.category} />
                    </div>
                  )}

                  {/* Node pulse button and labels */}
                  <div className="group relative flex items-center justify-center w-full max-w-[400px]">
                    
                    {/* Main Node Pulse Button */}
                    <button
                      onClick={() => toggleNode(node.id)}
                      className={cn(
                        "w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-700 relative z-20 shrink-0",
                        isCompleted 
                          ? "bg-white border-white shadow-[0_0_30px_rgba(255,255,255,0.4)] text-black" 
                          : "bg-bg-secondary/40 border-white/10 text-white/40 hover:border-white/40"
                      )}
                    >
                      {isCompleted ? <CheckCircle2 size={24} /> : <Circle size={20} className="opacity-40" />}
                      
                      {/* Aura/Halo */}
                      <AnimatePresence>
                        {isCompleted && (
                          <MotionDiv
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.5, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="absolute inset-0 bg-white/20 rounded-full -z-10 blur-xl"
                          />
                        )}
                      </AnimatePresence>
                    </button>

                    {/* Skill Label - Always Visible */}
                    <div className={cn(
                      "absolute top-1/2 -translate-y-1/2 w-48 transition-all duration-500",
                      isRight ? "left-16 text-left" : "right-16 text-right"
                    )}>
                      <div className="space-y-1">
                        <div className="font-mono text-[9px] uppercase tracking-widest text-[#64748B] opacity-60">
                          {node.id.toUpperCase()} // 0{i + 1}
                        </div>
                        <h4 className={cn(
                          "text-xl font-bold tracking-tight transition-colors duration-500",
                          isCompleted ? "text-white" : "text-text-muted group-hover:text-white/80"
                        )}>
                          {node.label}
                        </h4>
                        
                        {/* More info (Checkpoint) revealed on group hover */}
                        {node.checkpoint && (
                          <MotionDiv 
                            initial={{ opacity: 0, y: 5 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            className="opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                          >
                            <div className="text-[11px] text-text-muted font-medium leading-relaxed bg-white/5 backdrop-blur-sm p-2 rounded border border-white/5 inline-block mt-2 shadow-2xl">
                               {node.checkpoint}
                            </div>
                          </MotionDiv>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Footer Message */}
        <div className="mt-40 text-center">
          <ChevronDown className="mx-auto text-white/10 animate-bounce mb-8" size={32} />
          <div className="inline-block px-10 py-5 bg-white text-black font-bold rounded-2xl shadow-chrome uppercase tracking-widest text-xs">
            Path Continues to Future Specializations
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, total, subtitle }: { label: string; value: string | number; total?: number; subtitle?: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-sans font-black tracking-tighter">
        {value}{total && <span className="text-white/20 text-2xl font-medium ml-1">/{total}</span>}
      </div>
      <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#64748B] mt-2">
        {label} {subtitle && <span className="opacity-40">{subtitle}</span>}
      </div>
    </div>
  );
}

function CategoryIcon({ category }: { category: string }) {
  if (category === 'Frontend Foundations') return <Cpu size={16} className="text-accent-blue/40" />;
  if (category === 'Backend Development') return <Rocket size={16} className="text-violet-500/40" />;
  return <ShieldCheck size={16} className="text-emerald-500/40" />;
}
