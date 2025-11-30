
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import AboutSnapshot from '@/components/AboutSnapshot';
import VisualMap from '@/components/VisualMap';
import ProjectSpotlight from '@/components/ProjectSpotlight';
import RadarChart from '@/components/RadarChart';
import GithubPulse from '@/components/GithubPulse';
import BlogPreview from '@/components/BlogPreview';

const mainSkills = [
  { name: 'Java', value: 85 },
  { name: 'Python', value: 80 },
  { name: 'Web Dev', value: 85 },
  { name: 'Database', value: 80 },
  { name: 'Security', value: 75 },
  { name: 'Teamwork', value: 90 }
];

const loaderMessages = [
  "Assembling pixels…",
  "Convincing CSS to behave…",
  "Bribing the layout engine…",
  "Importing unnecessary dependencies…",
  "Optimizing the part no one sees…",
  "De-hardcoding hardcoded values…",
  "Rebasing reality onto main…",
  "Teaching JavaScript some manners…",
  "Aligning divs (again)…",
  "Running 'just one more' build…"
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Check if user has already seen the splash screen in this session
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    
    if (hasSeenSplash) {
      setIsLoading(false);
      return;
    }

    // Faster loading time (2.5 seconds)
    const duration = 2500; 
    const interval = 50; // Update faster for smoother animation
    const steps = duration / interval;
    const increment = 100 / steps;
    
    let currentProgress = 0;
    
    const timer = setInterval(() => {
      currentProgress += increment;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        
        // Mark as seen in session storage
        sessionStorage.setItem('hasSeenSplash', 'true');
        
        setTimeout(() => setIsLoading(false), 500); // Small delay at 100%
      }
      
      setProgress(currentProgress);
      
      // Calculate which message to show based on progress
      // Cycle through messages faster given the shorter duration
      const msgIdx = Math.min(
        Math.floor((currentProgress / 100) * loaderMessages.length),
        loaderMessages.length - 1
      );
      setMessageIndex(msgIdx);

    }, interval);

    return () => clearInterval(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-bg-primary flex flex-col items-center justify-center font-mono text-text-primary">
        <div className="w-full max-w-md px-6">
          <motion.div 
            key={messageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="h-8 mb-2 text-sm md:text-base text-accent-blue font-bold"
          >
            {loaderMessages[messageIndex]}
          </motion.div>
          
          <div className="flex items-center gap-4">
            <div className="flex-grow h-1 bg-bg-tertiary rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-accent-blue"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
            <div className="w-12 text-right font-bold text-sm">
              {Math.round(progress)}%
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <Hero />
      
      <div className="container mx-auto px-6">
        <AboutSnapshot />
        
        <section className="py-20">
          <h2 className="text-center font-display text-4xl font-bold mb-12">What I Do</h2>
          <VisualMap />
        </section>

        <ProjectSpotlight />

        <section className="py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold mb-6">Technical Arsenal</h2>
            <p className="text-text-secondary mb-8 text-lg">
              A balanced mix of software engineering fundamentals and emerging security practices.
              Constantly expanding my stack with modern tools.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Stat label="Technical Skills" value={15} suffix="+" />
              <Stat label="Major Projects" value={5} suffix="+" />
              <Stat label="Avg. Grade" value={82} suffix="%" />
              <Stat label="Commitment" value={100} suffix="%" />
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-6">
            <RadarChart skills={mainSkills} />
          </div>
        </section>

        <GithubPulse />
        
        <BlogPreview />
      </div>
    </div>
  );
}

function Stat({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  return (
    <div className="p-4 rounded-xl bg-bg-secondary border border-accent-blue/10">
      <div className="text-3xl font-bold text-accent-blue font-display mb-1">
        {value}{suffix}
      </div>
      <div className="text-sm text-text-muted">{label}</div>
    </div>
  );
}
