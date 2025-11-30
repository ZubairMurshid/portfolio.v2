import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    slug: 'ai-in-events',
    title: 'Exploring AI in Event Management',
    excerpt: 'Deep dive into how artificial intelligence is transforming event planning and management systems through predictive analytics and automated workflows.',
    date: 'Coming Soon',
    readTime: '5 min read',
    category: 'Technology'
  },
  {
    slug: 'security-best-practices',
    title: 'Cybersecurity Best Practices for Developers',
    excerpt: 'Essential security principles every developer should implement in their applications. From SQL injection prevention to XSS mitigation.',
    date: 'Coming Soon',
    readTime: '8 min read',
    category: 'Security'
  },
  {
    slug: 'my-journey',
    title: 'From Student to Developer: My Journey',
    excerpt: 'A personal reflection on my time at IIT, working on projects like EventLK, and what I have learned about software engineering along the way.',
    date: 'Coming Soon',
    readTime: '6 min read',
    category: 'Career'
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-display font-bold mb-6">Thoughts & Insights</h1>
        <p className="text-xl text-text-secondary">
          Writing about code, security, and my journey in tech.
        </p>
      </div>

      <div className="grid gap-8 max-w-4xl mx-auto">
        {blogPosts.map((post) => (
          <article 
            key={post.slug}
            className="group glass-panel p-8 rounded-3xl hover:border-accent-blue/30 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 font-display font-bold text-8xl text-text-muted group-hover:scale-110 transition-transform select-none">
              {post.category.charAt(0)}
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span className="px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue font-bold uppercase text-xs">
                  {post.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar size={14} /> {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} /> {post.readTime}
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold mb-4 group-hover:text-accent-blue transition-colors">
                {post.title}
              </h2>
              
              <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="inline-flex items-center gap-2 font-bold text-accent-blue group-hover:gap-4 transition-all">
                Read Article <ArrowRight size={20} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}