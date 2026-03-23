'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const MotionDiv = motion.div as any;

const projects = [
  {
    slug: 'eventlk',
    title: 'EventLK - AI Event Platform',
    category: ['ai', 'web', 'react', 'python', 'fullstack'],
    desc: 'An intelligent event management system harnessing predictive analytics to automate venue recommendations and budget planning. Built with a modern full-stack architecture.',
    status: 'Live',
    liveUrl: 'https://www.eventlk.com'
  },
  {
    slug: 'dynamic-book-finder',
    title: 'Dynamic Book Finder',
    category: ['react', 'web', 'api', 'fullstack'],
    desc: 'React SPA powered by Google Books API, featuring global state management (Context API) and persistent local storage.',
    status: 'Completed'
  },
  {
    slug: 'task-manager',
    title: 'Personal Task Manager',
    category: ['python', 'oop'],
    desc: 'A robust Python application demonstrating progression from data structure manipulation to a full Object-Oriented GUI.',
    status: 'Completed'
  },
  {
    slug: 'save-our-seas',
    title: 'Save Our Seas - SDG Web Project',
    category: ['web', 'html', 'css', 'js'],
    desc: 'Marine ecosystem conservation initiative with volunteer portal and responsive UI design.',
    status: 'Completed'
  }
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

  return (
    <div className="container mx-auto px-6 pt-32 min-h-screen">
      <h1 className="text-5xl font-display font-bold mb-8">Projects</h1>
      
      <div className="flex flex-wrap gap-4 mb-12">
        {['all', 'fullstack', 'react', 'python', 'ai', 'api', 'web', 'oop'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-2 rounded-full border transition-all uppercase text-sm font-semibold tracking-wide ${
              filter === f 
                ? 'bg-accent-blue text-white border-accent-blue' 
                : 'border-accent-blue/30 text-text-secondary hover:border-accent-blue'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
        {filteredProjects.map((project, i) => (
          <MotionDiv
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 flex flex-col ${
              i === 0 && filter === 'all' ? 'md:col-span-2 lg:col-span-3 border-accent-blue/30 bg-accent-blue/5' : ''
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-4xl">
                {project.category.includes('ai') ? '🤖' : project.category.includes('react') ? '⚛️' : project.category.includes('python') ? '🐍' : '🌐'}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase border ${
                project.status === 'Live' 
                  ? 'bg-green-500/10 text-green-500 border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.2)]'
                  : project.status === 'Completed' 
                    ? 'bg-accent-blue/10 text-accent-blue border-accent-blue/20' 
                    : 'bg-white/10 text-white border-white/20'
              }`}>
                {project.status}
              </span>
            </div>
            <h3 className={`${i === 0 && filter === 'all' ? 'text-4xl' : 'text-2xl'} font-bold font-display mb-4`}>
              {project.title}
            </h3>
            <p className={`text-text-secondary mb-8 flex-grow ${i === 0 && filter === 'all' ? 'text-lg max-w-3xl' : ''}`}>
              {project.desc}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-auto">
              <Link 
                href={`/projects/${project.slug}`}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
              >
                View Case Study
              </Link>
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
              )}
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}