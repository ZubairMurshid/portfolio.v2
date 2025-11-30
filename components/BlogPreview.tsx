'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const MotionDiv = motion.div as any;

const posts = [
  {
    slug: 'ai-in-events',
    title: 'Exploring AI in Event Management',
    excerpt: 'Deep dive into how artificial intelligence is transforming event planning and management systems through predictive analytics.',
    date: 'Upcoming',
    readTime: '5 min read',
    category: 'AI & Tech'
  },
  {
    slug: 'security-best-practices',
    title: 'Cybersecurity Best Practices for Devs',
    excerpt: 'Essential security principles every developer should implement in their applications to prevent common vulnerabilities.',
    date: 'Upcoming',
    readTime: '8 min read',
    category: 'Security'
  },
  {
    slug: 'student-developer-journey',
    title: 'From Student to Developer',
    excerpt: 'Lessons learned, challenges overcome, and insights gained during my computer science journey at IIT.',
    date: 'Upcoming',
    readTime: '6 min read',
    category: 'Career'
  }
];

export default function BlogPreview() {
  return (
    <section className="py-20 border-t border-white/5">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-accent-blue font-bold tracking-wider uppercase text-sm">Insights</span>
          <h2 className="text-4xl font-display font-bold mt-2">Latest Writings</h2>
        </div>
        <Link href="/blog" className="hidden md:flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors">
          View All Posts <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <MotionDiv
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="aspect-[16/9] mb-6 rounded-2xl bg-gradient-to-br from-bg-tertiary to-bg-secondary border border-white/5 overflow-hidden relative">
              <div className="absolute inset-0 bg-accent-blue/5 group-hover:bg-accent-blue/10 transition-colors" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-bg-primary/80 backdrop-blur rounded-full text-xs font-bold border border-white/10">
                {post.category}
              </div>
            </div>
            
            <h3 className="text-xl font-bold font-display mb-3 group-hover:text-accent-blue transition-colors">
              {post.title}
            </h3>
            <p className="text-text-secondary text-sm mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-4 text-xs text-text-muted">
              <div className="flex items-center gap-1">
                <Calendar size={14} /> {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} /> {post.readTime}
              </div>
            </div>
          </MotionDiv>
        ))}
      </div>
      
      <div className="mt-8 text-center md:hidden">
        <Link href="/blog" className="inline-flex items-center gap-2 text-accent-blue font-bold">
          View All Posts <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}