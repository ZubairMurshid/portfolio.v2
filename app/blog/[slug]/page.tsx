
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, ArrowRight } from 'lucide-react';
import { useParams } from 'next/navigation';

const MotionDiv = motion.div as any;

const blogContent: Record<string, any> = {
  'ai-in-events': {
    title: 'The Intelligent Venue: Scaling Campus Engagement with AI',
    date: 'October 14, 2024',
    category: 'Technology',
    readTime: '7 min read',
    author: 'Zubair Murshid',
    content: [
      {
        type: 'intro',
        text: 'The university event landscape is traditionally fragmented. Manual logistics, low data visibility, and guesswork in planning often lead to under-attended workshops and over-catered meetups. EventLK was born out of a simple question: Can we apply predictive models to campus engagement?'
      },
      {
        type: 'header',
        text: 'The Predictive Architecture'
      },
      {
        type: 'text',
        text: 'At its core, the system utilizes an ensemble of machine learning algorithms to process historical attendance data. By analyzing factors such as timing (proximity to exams), thematic interest (e.g., "Web3" vs "AI"), and society cross-pollination, we generate engagement forecasts with surprising accuracy.'
      },
      {
        type: 'list',
        items: [
          'Dynamic Resource Allocation: Automated budgeting based on predicted attendance.',
          'Intelligent Theming: Recommending event topics trending within the student demographic.',
          'Automated Logistics: Real-time room booking and scheduling via society API integrations.'
        ]
      },
      {
        type: 'header',
        text: 'Bridging the Implementation Gap'
      },
      {
        type: 'text',
        text: 'Implementing AI in a university setting isn\'t just about the model—it\'s about the interface. We focused on a "Simplified Orchestration" approach, where society leads can interact with complex data insights through an intuitive, role-based dashboard built on Next.js.'
      }
    ]
  },
  'security-best-practices': {
    title: 'Hardening the Perimeter: Security-First Principles for Modern Apps',
    date: 'October 07, 2024',
    category: 'Security',
    readTime: '9 min read',
    author: 'Zubair Murshid',
    content: [
      {
        type: 'intro',
        text: 'Security is often treated as an afterthought—a layer added just before deployment. However, high-integrity systems require security to be woven into the very fabric of the architecture. From the first line of a MySQL query to the final frontend build, every decision has defensive implications.'
      },
      {
        type: 'header',
        text: 'The Sanitization Mandate'
      },
      {
        type: 'text',
        text: 'The most common vulnerabilities (SQLi, XSS) stem from a single source: trust. A secure system never trusts user input. In my projects, I implement strict parameterization using Prepared Statements for all database interactions and utilize context-aware escaping for DOM rendering.'
      },
      {
        type: 'header',
        text: 'A Practical Security Checklist'
      },
      {
        type: 'list',
        items: [
          'Implement Least Privilege for all database users.',
          'Enforce Argon2 or BCrypt for password hashing (never MD5).',
          'Use Content Security Policy (CSP) headers to mitigate XSS risks.',
          'Audit third-party dependencies regularly via npm audit or Snyk.'
        ]
      },
      {
        type: 'text',
        text: 'Building secure software isn\'t about creating an unhackable system; it\'s about creating a system with multiple defensive layers that fail gracefully and securely.'
      }
    ]
  },
  'my-journey': {
    title: 'Theory vs. Production: My Evolution as an Engineer',
    date: 'September 30, 2024',
    category: 'Career',
    readTime: '6 min read',
    author: 'Zubair Murshid',
    content: [
      {
        type: 'intro',
        text: 'University education provides the foundation—the syntax, the logic, and the algorithms. But production is a different beast entirely. It introduces constraints that are often absent in the classroom: latency, technical debt, and real-world user behavior.'
      },
      {
        type: 'header',
        text: 'The Leap to Production'
      },
      {
        type: 'text',
        text: 'Moving from building academic Java applications to developing production-ready full-stack platforms like EventLK taught me the value of "defensive programming." In a classroom, your input is predictable. In production, users will find every edge case you didn\'t consider.'
      },
      {
        type: 'header',
        text: 'Industry Outreach: iX 25 and ModelX'
      },
      {
        type: 'text',
        text: 'Volunteering for industry outreach programs shifted my perspective. Engaging with professionals at iX 25 highlighted that soft skills—communication, documentation, and stakeholder management—are just as critical as your tech stack.'
      },
      {
        type: 'text',
        text: 'My journey so far has been about more than just mastering a language; it’s been about learning to think like a problem solver who balances technical excellence with real-world practicality.'
      }
    ]
  }
};

export default function BlogPostDetail() {
  const { slug } = useParams();
  const post = blogContent[slug as string];

  if (!post) {
    return (
      <div className="container mx-auto px-6 pt-32 text-center">
        <h1 className="text-3xl font-bold mb-8">Log Not Found</h1>
        <Link href="/blog" className="text-white hover:underline">Return to Registry</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-3 text-text-muted hover:text-white transition-all mb-12 group font-mono text-[10px] uppercase tracking-widest">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Registry
        </Link>

        <header className="mb-16">
          <div className="flex items-center gap-6 text-[10px] font-mono uppercase tracking-[0.2em] text-[#64748B] mb-8">
            <span className="text-white border border-white/10 px-3 py-1 bg-white/5">{post.category}</span>
            <div className="flex items-center gap-2"><Calendar size={12} /> {post.date}</div>
            <div className="flex items-center gap-2"><Clock size={12} /> {post.readTime}</div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-extrabold tracking-tighter text-[#F8F9FA] leading-[0.9]">
            {post.title}
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10 pt-12">
          <div className="lg:col-span-3">
             <div className="sticky top-32 space-y-12">
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#64748B] mb-4">Author</h4>
                  <div className="text-white font-bold">{post.author}</div>
                  <div className="text-[10px] text-text-muted uppercase tracking-widest mt-1">CS Undergrad</div>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#64748B] mb-4">Sharing</h4>
                  <button className="flex items-center gap-3 text-xs text-text-muted hover:text-white transition-colors">
                    <Share2 size={16} /> Link Copy
                  </button>
                </div>
             </div>
          </div>

          <div className="lg:col-span-9">
            <div className="prose prose-invert max-w-none space-y-10">
              {post.content.map((block: any, i: number) => {
                if (block.type === 'intro') {
                  return <p key={i} className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium">{block.text}</p>;
                }
                if (block.type === 'header') {
                  return (
                    <div key={i} className="pt-6">
                      <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#F8F9FA] tracking-tight mb-6">{block.text}</h2>
                      <div className="w-12 h-px bg-white/20" />
                    </div>
                  );
                }
                if (block.type === 'text') {
                  return <p key={i} className="text-lg text-text-secondary leading-relaxed">{block.text}</p>;
                }
                if (block.type === 'list') {
                  return (
                    <ul key={i} className="space-y-6">
                      {block.items.map((item: string, j: number) => (
                        <li key={j} className="flex gap-4 group">
                          <span className="text-white/20 font-mono text-xs pt-1">0{j+1}</span>
                          <span className="text-text-secondary text-lg leading-relaxed group-hover:text-white transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>

            <footer className="mt-20 pt-10 border-t border-white/10">
               <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">End of Transmission</span>
                  </div>
                  <Link href="/contact" className="px-10 py-3.5 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">
                    Discuss this Log
                  </Link>
               </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
