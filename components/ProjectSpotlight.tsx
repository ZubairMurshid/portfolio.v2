'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ProjectSpotlight() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative rounded-3xl overflow-hidden border border-accent-blue/30 bg-bg-secondary/50 backdrop-blur-md p-8 md:p-12 my-20 group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 text-accent-blue mb-4">
            <Sparkles size={18} />
            <span className="text-sm font-bold uppercase tracking-wider">Featured Project</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">EventLK</h2>
          <p className="text-text-secondary text-lg mb-6 leading-relaxed">
            A comprehensive intelligent event management system specifically for university clubs. 
            Features AI-driven recommendations for venues and budgets.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {['AI/ML', 'Python', 'Java', 'MySQL', 'QR Integration'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-sm border border-accent-blue/20">
                {tag}
              </span>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-bg-primary/50 border border-accent-blue/10 mb-8 inline-block">
            <div className="text-2xl font-bold text-accent-blue">40%</div>
            <div className="text-sm text-text-muted">Reduction in planning time</div>
          </div>

          <Link href="/projects/eventlk" className="inline-flex items-center gap-2 text-accent-blue font-bold hover:gap-4 transition-all">
            View Case Study <ArrowRight size={20} />
          </Link>
        </div>
        
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl shadow-accent-blue/10 bg-bg-tertiary">
             {/* Placeholder for project screenshot */}
             <div className="absolute inset-0 flex items-center justify-center text-text-muted">
                Project Preview
             </div>
        </div>
      </div>
    </motion.div>
  );
}
