'use client';

import { motion } from 'framer-motion';
import { GitCommit } from 'lucide-react';

const MotionDiv = motion.div as any;

export default function GithubPulse() {
  return (
    <section className="py-20 flex flex-col items-center max-w-4xl mx-auto">
      <div className="flex items-center justify-center gap-3 mb-10">
        <GitCommit className="text-[#A1A1AA]" size={24} />
        <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight">Open Source Activity</h2>
      </div>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl mx-auto flex justify-center items-center"
      >
        <img 
          src="https://github-readme-streak-stats.herokuapp.com/?user=ZubairMurshid&theme=dark&background=00000000&ring=0EA5E9&fire=0EA5E9&currStreakLabel=0EA5E9&border=1E3A8A&hide_border=true" 
          alt="GitHub Streak"
          className="w-full h-auto drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
        />
      </MotionDiv>
    </section>
  );
}