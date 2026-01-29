
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, MessageSquare, Repeat2, ThumbsUp, Share2, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const MotionDiv = motion.div as any;

const posts = [
  {
    id: '1',
    timestamp: '2d ago',
    content: "Thrilled to share that EventLK is reaching its next milestone! 🚀 We've successfully integrated the predictive analytics engine to help university societies optimize their engagement. Building high-integrity systems for campus ecosystems has been an incredible journey.",
    likes: 42,
    comments: 8,
    reposts: 3,
    category: 'Project Update'
  },
  {
    id: '2',
    timestamp: '1w ago',
    content: "Honored to be part of the Industry Outreach team for iX 25. Bridging the gap between academic theory and industry reality is crucial for the next generation of engineers. Great conversations today about the future of AI and Security.",
    likes: 89,
    comments: 12,
    reposts: 5,
    category: 'Volunteer'
  },
  {
    id: '3',
    timestamp: '2w ago',
    content: "Deep diving into Cybersecurity hardening. Just finished a technical log on 'Hardening the Perimeter' for my portfolio. Security isn't an afterthought—it's the foundation of every line of code.",
    likes: 56,
    comments: 4,
    reposts: 2,
    category: 'Learning'
  }
];

export default function LinkedInFeed() {
  return (
    <section className="py-32 border-t border-white/5 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-accent-blue/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#64748B]">Digital Footprint</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-sans font-extrabold tracking-tighter text-[#F8F9FA]">
            Professional <span className="text-white/40">Feed</span>
          </h2>
        </div>
        
        <a 
          href="https://linkedin.com/in/itszubairmurshid" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all"
        >
          <Linkedin size={18} className="text-[#0A66C2]" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted group-hover:text-white">View Profile</span>
          <ExternalLink size={14} className="text-text-muted" />
        </a>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <MotionDiv
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-bg-secondary/30 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between hover:border-white/30 transition-all duration-500"
          >
            {/* Spotlight Accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#64748B] to-[#020204] border border-white/10 flex items-center justify-center font-bold text-xs">
                    ZM
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#F8F9FA]">Zubair Murshid</h4>
                    <p className="text-[10px] text-text-muted font-mono uppercase tracking-wider">{post.timestamp}</p>
                  </div>
                </div>
                <div className="px-2 py-1 rounded bg-white/5 border border-white/5 text-[8px] font-mono text-text-muted uppercase tracking-widest">
                  {post.category}
                </div>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-8 line-clamp-4 group-hover:text-white/90 transition-colors">
                {post.content}
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <Interaction icon={<ThumbsUp size={14} />} count={post.likes} />
                <Interaction icon={<MessageSquare size={14} />} count={post.comments} />
                <Interaction icon={<Repeat2 size={14} />} count={post.reposts} />
              </div>
              <button className="p-2 rounded-full hover:bg-white/5 text-text-muted hover:text-white transition-colors">
                <Share2 size={14} />
              </button>
            </div>
          </MotionDiv>
        ))}
      </div>
      
      <div className="mt-20 flex justify-center">
         <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}

function Interaction({ icon, count }: { icon: React.ReactNode; count: number }) {
  return (
    <div className="flex items-center gap-1.5 text-text-muted hover:text-white transition-colors cursor-default">
      {icon}
      <span className="text-[10px] font-mono">{count}</span>
    </div>
  );
}
