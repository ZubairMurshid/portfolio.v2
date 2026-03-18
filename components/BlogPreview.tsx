
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';

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
    <section className="py-20 mt-12 w-full max-w-4xl mx-auto">
      {/* Top Pill Button */}
      <div className="flex justify-start mb-12">
        <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-text-muted text-[10px] font-mono tracking-widest uppercase shadow-sm">
          Featured Blogs
        </div>
      </div>

      {/* Blogs List */}
      <div className="flex flex-col border-t border-white/10">
        {posts.map((post, i) => (
          <MotionDiv
            key={post.slug}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Link 
              href={`/blog/${post.slug}`} 
              className="group flex flex-col md:flex-row items-start md:items-center justify-between py-6 md:py-8 border-b border-white/10 hover:bg-white/[0.02] transition-colors relative"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 flex-grow">
                {/* Date */}
                <span className="text-[#A1A1AA] md:w-28 text-sm md:text-base font-mono tracking-tight group-hover:text-white transition-colors">
                  {post.date}
                </span>
                
                {/* Title */}
                <h3 className="text-white font-bold text-lg md:text-xl tracking-tight group-hover:text-accent-blue transition-colors">
                  {post.title}
                </h3>
              </div>
              
              {/* Read Time */}
              <div className="flex items-center gap-2 text-[#A1A1AA] text-sm mt-4 md:mt-0 font-mono group-hover:text-white transition-colors whitespace-nowrap">
                <Clock size={16} strokeWidth={1.5} />
                <span>{post.readTime}</span>
              </div>
            </Link>
          </MotionDiv>
        ))}
      </div>
      
      {/* Bottom Button */}
      <div className="flex justify-center mt-12">
        <Link 
          href="/blog" 
          className="px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-text-muted hover:text-white hover:bg-white/10 transition-all text-sm font-medium flex items-center gap-2"
        >
          View all blogs <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
