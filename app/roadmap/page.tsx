
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Circle, ChevronDown, Rocket, ShieldCheck, Cpu, Lock, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import RoadmapAuthModal from '@/components/RoadmapAuthModal';

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
  { id: 'redis', label: 'Redis', category: 'Backend Development' },
  { id: 'jwt', label: 'JWT Auth', category: 'Backend Development' },
  { id: 'rest', label: 'RESTful APIs', checkpoint: 'Checkpoint - Complete App', category: 'Backend Development' },
  { id: 'linux', label: 'Linux Basics', category: 'DevOps & Cloud' },
  { id: 'aws', label: 'AWS (S3, EC2, VPC)', checkpoint: 'Checkpoint - Deployment', category: 'DevOps & Cloud' },
  { id: 'terraform', label: 'Terraform', checkpoint: 'Checkpoint - Infrastructure', category: 'DevOps & Cloud' },
  { id: 'ansible', label: 'Ansible', checkpoint: 'Checkpoint - Automation', category: 'DevOps & Cloud' },
  { id: 'gha', label: 'GitHub Actions', checkpoint: 'Checkpoint - CI / CD', category: 'DevOps & Cloud' },
];

export default function RoadmapPage() {
  const [completedNodes, setCompletedNodes] = useState<Set<string>>(new Set());
  const [ongoingNodes, setOngoingNodes] = useState<Set<string>>(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAuthOpen, setIsAuthOpen] = useState(false);
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
    const savedCompleted = localStorage.getItem('completedRoadmapNodes');
    if (savedCompleted) setCompletedNodes(new Set(JSON.parse(savedCompleted)));

    const savedOngoing = localStorage.getItem('ongoingRoadmapNodes');
    if (savedOngoing) setOngoingNodes(new Set(JSON.parse(savedOngoing)));

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // SVG Path parameters
  const heightPerNode = 220;
  const totalHeight = roadmapNodes.length * heightPerNode + 200;
  const curveWidth = 140;
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
      {/* Admin Login Button */}
      <button 
        onClick={() => setIsAuthOpen(true)}
        className="fixed top-8 right-8 z-[60] p-3 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all backdrop-blur-md"
      >
        <Lock size={18} />
      </button>

      {/* Auth Modal */}
      <RoadmapAuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />

      {/* Spotlight Effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.04), transparent 80%)`
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
            A visual breakdown of my technical evolution. Every node represents a milestone achieved or an objective targeted.
          </p>
          
          <div className="mt-12 flex justify-center gap-12">
            <Stat label="Completed" value={completedNodes.size} total={roadmapNodes.length} />
            <Stat label="Status" value={`${Math.round((completedNodes.size / roadmapNodes.length) * 100)}%`} subtitle="Mastery" />
          </div>
        </div>

        {/* Roadmap Path Container */}
        <div className="relative mx-auto max-w-4xl">
          <svg
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-visible"
            viewBox={`0 0 100 ${totalHeight}`}
            preserveAspectRatio="none"
          >
            <path
              d={generatePath()}
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="2"
              strokeDasharray="4 8"
            />
            <MotionPath
              d={generatePath()}
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="3"
              style={{ pathLength }}
              strokeLinecap="round"
            />
          </svg>

          {/* Nodes */}
          <div className="relative z-10">
            {roadmapNodes.map((node, i) => {
              const isCompleted = completedNodes.has(node.id);
              const isOngoing = ongoingNodes.has(node.id);
              const isRight = i % 2 === 0;

              return (
                <div key={node.id} className="relative h-[220px] flex items-center justify-center">
                  {(i === 0 || roadmapNodes[i - 1]?.category !== node.category) && (
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
                      <div className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/60 whitespace-nowrap bg-white/5 px-6 py-1.5 border border-white/10 rounded-full mb-3 backdrop-blur-md">
                        {node.category}
                      </div>
                      <CategoryIcon category={node.category} />
                    </div>
                  )}

                  <div className="flex items-center gap-12 w-full max-w-2xl">
                    {!isRight && (
                      <div className="flex-1 text-right pr-4">
                        <NodeLabel node={node} index={i} isCompleted={isCompleted} isOngoing={isOngoing} alignment="right" />
                      </div>
                    )}

                    <div className="relative shrink-0 flex justify-center w-12 h-12">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-700 relative z-20 group cursor-default",
                          isCompleted 
                            ? "bg-white border-white shadow-[0_0_40px_rgba(255,255,255,0.5)] text-black" 
                            : isOngoing
                              ? "bg-accent-blue border-accent-blue shadow-[0_0_40px_rgba(14,165,233,0.3)] text-white"
                              : "bg-bg-secondary/60 border-white/20 text-white/40"
                        )}
                      >
                        {isCompleted ? <CheckCircle2 size={24} /> : isOngoing ? <Clock size={20} className="animate-pulse" /> : <Circle size={20} />}
                        
                        <AnimatePresence>
                          {(isCompleted || isOngoing) && (
                            <MotionDiv
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1.6, opacity: 1 }}
                              exit={{ scale: 0.8, opacity: 0 }}
                              className={cn(
                                "absolute inset-0 rounded-full -z-10 blur-2xl",
                                isCompleted ? "bg-white/10" : "bg-accent-blue/20"
                              )}
                            />
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {isRight && (
                      <div className="flex-1 text-left pl-4">
                        <NodeLabel node={node} index={i} isCompleted={isCompleted} isOngoing={isOngoing} alignment="left" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="mt-40 text-center">
          <ChevronDown className="mx-auto text-white/10 animate-bounce mb-8" size={32} />
          <div className="inline-block px-12 py-6 bg-white/5 border border-white/10 text-white font-bold rounded-2xl shadow-chrome uppercase tracking-widest text-xs backdrop-blur-xl">
            Continuously Synchronizing with Modern Tech
          </div>
        </div>
      </div>
    </div>
  );
}

function NodeLabel({ node, index, isCompleted, isOngoing, alignment }: { node: RoadmapNode, index: number, isCompleted: boolean, isOngoing: boolean, alignment: 'left' | 'right' }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: alignment === 'left' ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={cn(
        "space-y-1.5 transition-all duration-500",
        (isCompleted || isOngoing) ? "opacity-100" : "opacity-40"
      )}
    >
      <div className={cn(
        "font-mono text-[10px] uppercase tracking-widest font-bold",
        isCompleted ? "text-white/60" : isOngoing ? "text-accent-blue" : "text-white/20"
      )}>
        Ref.{index.toString().padStart(2, '0')} {isOngoing && "// IN PROGRESS"}
      </div>
      <h4 className={cn(
        "text-xl md:text-2xl font-sans font-black tracking-tight",
        isCompleted ? "text-white" : isOngoing ? "text-accent-blue" : "text-white/40"
      )}>
        {node.label}
      </h4>
      {node.checkpoint && (
        <div className={cn(
          "text-[11px] font-medium bg-white/5 inline-block px-3 py-1 rounded border",
          isOngoing ? "border-accent-blue/30 text-accent-blue/80" : "border-white/5 text-text-muted"
        )}>
          {node.checkpoint}
        </div>
      )}
    </motion.div>
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
  if (category === 'Frontend Foundations') return <Cpu size={20} className="text-accent-blue/60 mb-2" />;
  if (category === 'Backend Development') return <Rocket size={20} className="text-violet-400/60 mb-2" />;
  return <ShieldCheck size={20} className="text-emerald-400/60 mb-2" />;
}
