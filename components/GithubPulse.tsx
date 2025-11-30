'use client';

import { motion } from 'framer-motion';
import { GitCommit, Zap, Flame } from 'lucide-react';

const MotionDiv = motion.div as any;

export default function GithubPulse() {
  return (
    <section className="py-20">
      <div className="flex items-center gap-3 mb-8">
        <GitCommit className="text-accent-blue" size={28} />
        <h2 className="text-3xl font-display font-bold">Open Source Activity</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass-panel p-6 rounded-2xl flex flex-col justify-center items-center"
        >
          {/* Using the streak stats image from the original portfolio */}
          <img 
            src="https://github-readme-streak-stats.herokuapp.com/?user=ZubairMurshid&theme=dark&background=00000000&ring=0EA5E9&fire=0EA5E9&currStreakLabel=0EA5E9&border=1E3A8A&hide_border=true" 
            alt="GitHub Streak"
            className="max-w-full h-auto"
          />
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-8 rounded-2xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 text-accent-blue mb-2">
              <Zap size={20} />
              <span className="font-bold uppercase tracking-wider text-sm">Recent Activity</span>
            </div>
            <p className="text-text-secondary mb-6">
              Active contributor to open-source projects. Constantly pushing code and exploring new technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-bg-tertiary border border-white/5">
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-xs text-text-muted">Commits (2025)</div>
            </div>
            <div className="p-4 rounded-xl bg-bg-tertiary border border-white/5">
              <div className="text-2xl font-bold text-accent-blue mb-1 flex items-center gap-1">
                12 <Flame size={16} />
              </div>
              <div className="text-xs text-text-muted">Current Streak</div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}