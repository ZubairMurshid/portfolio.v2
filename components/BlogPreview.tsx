
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const MotionDiv = motion.div as any;

const posts = [
  {
    slug: 'ai-in-events',
    title: 'The Intelligent Venue: AI in Event Systems',
    excerpt: 'How predictive analytics is transforming engagement in university society ecosystems.',
    date: 'Oct 14, 2025',
    readTime: '7 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
  },
  {
    slug: 'security-best-practices',
    title: 'Hardening the Perimeter: Dev Security',
    excerpt: 'Building modern software with a security-first mindset from the database layer up.',
    date: 'Oct 07, 2025',
    readTime: '9 min read',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800'
  },
  {
    slug: 'my-journey',
    title: 'Theory vs. Production: My Evolution',
    excerpt: 'The critical transition from academic theory to building real-world high-integrity systems.',
    date: 'Sep 30, 2025',
    readTime: '6 min read',
    category: 'Career',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
  }
];

export default function BlogPreview() {
  return (
    <section className="py-20 border-t border-white/5">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#64748B]">Section 04 // Insights</span>
          <h2 className="text-4xl font-sans font-extrabold mt-2 tracking-tighter">Latest Logs</h2>
        </div>
        <Link href="/blog" className="hidden md:flex items-center gap-3 text-text-secondary hover:text-white transition-all group font-bold text-xs uppercase tracking-widest">
          View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/10">
        {posts.map((post, i) => (
          <MotionDiv
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-bg-primary p-8 hover:bg-white/[0.02] transition-colors"
          >
            <div className="aspect-[16/10] mb-8 overflow-hidden border border-white/5 relative grayscale group-hover:grayscale-0 transition-all duration-700">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-bg-primary/20" />
            </div>
            
            <div className="flex items-center gap-4 text-[9px] font-mono uppercase tracking-widest text-[#64748B] mb-4">
              <span className="text-white border-b border-white/20 pb-0.5">{post.category}</span>
              <span>{post.date}</span>
            </div>

            <h3 className="text-xl font-bold font-sans mb-4 tracking-tight group-hover:text-white transition-colors">
              {post.title}
            </h3>
            <p className="text-text-secondary text-sm mb-6 line-clamp-2 leading-relaxed font-medium">
              {post.excerpt}
            </p>
            
            <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
              READ LOG <ArrowRight size={12} />
            </Link>
          </MotionDiv>
        ))}
      </div>
      
      <div className="mt-8 text-center md:hidden">
        <Link href="/blog" className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest">
          View All <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
