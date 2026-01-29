
import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    slug: 'ai-in-events',
    title: 'The Intelligent Venue: Scaling Campus Engagement with AI',
    excerpt: 'Deep dive into the architecture of EventLK. How we use predictive analytics to forecast student engagement and automate logistics for university societies.',
    date: 'Oct 14, 2024',
    readTime: '7 min read',
    category: 'Technology'
  },
  {
    slug: 'security-best-practices',
    title: 'Hardening the Perimeter: Security-First Principles',
    excerpt: 'In an era of increasing vulnerabilities, building secure software is no longer optional. A guide to SQL injection prevention and modern sanitization techniques.',
    date: 'Oct 07, 2024',
    readTime: '9 min read',
    category: 'Security'
  },
  {
    slug: 'my-journey',
    title: 'Theory vs. Production: My Evolution as an Engineer',
    excerpt: 'Reflecting on the leap from textbook Java to building production-ready systems. Lessons learned from the iX 25 outreach and real-world project constraints.',
    date: 'Sep 30, 2024',
    readTime: '6 min read',
    category: 'Career'
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-white/20" />
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#64748B]">Registry v1.0</span>
          <div className="w-8 h-[1px] bg-white/20" />
        </div>
        <h1 className="text-5xl md:text-7xl font-sans font-extrabold mb-6 tracking-tighter text-[#F8F9FA]">
          Technical Logs
        </h1>
        <p className="text-xl text-text-secondary font-medium">
          Documenting the intersection of architecture, security, and growth.
        </p>
      </div>

      <div className="grid gap-px bg-white/5 border border-white/10 max-w-4xl mx-auto">
        {blogPosts.map((post) => (
          <Link 
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block p-8 md:p-12 bg-bg-primary hover:bg-white/[0.02] transition-all relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-6 text-[10px] font-mono uppercase tracking-[0.2em] mb-6">
                <span className="text-white bg-white/10 px-3 py-1 border border-white/5">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-text-muted">
                  <Calendar size={12} /> {post.date}
                </div>
                <div className="flex items-center gap-2 text-text-muted">
                  <Clock size={12} /> {post.readTime}
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-sans font-bold mb-6 group-hover:text-white transition-colors tracking-tight text-[#F8F9FA]">
                {post.title}
              </h2>
              
              <p className="text-text-secondary text-lg mb-8 leading-relaxed max-w-2xl font-medium">
                {post.excerpt}
              </p>

              <div className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-white/40 group-hover:text-white group-hover:gap-5 transition-all">
                Read Abstract <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
