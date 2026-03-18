'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionDiv = motion.div as any;

const projects = [
  {
    slug: 'save-our-seas',
    title: 'Save Our Seas - SDG Web Project',
    category: ['web', 'html', 'css', 'js'],
    desc: 'Marine ecosystem conservation initiative with volunteer portal and educational content.',
    status: 'Completed'
  },
  {
    slug: 'dynamic-book-finder',
    title: 'Dynamic Book Finder',
    category: ['react', 'web', 'api'],
    desc: 'React app powered by Google Books API with Context API for local persistence.',
    status: 'Completed'
  },
  {
    slug: 'eventlk',
    title: 'EventLK',
    category: ['ai', 'web'],
    desc: 'AI-Powered University Event Management Platform',
    status: 'In Development'
  },
  {
    slug: 'task-manager',
    title: 'Personal Task Manager',
    category: ['python', 'oop'],
    desc: 'A four-stage Python application demonstrating progression from simple list manipulation to a full-featured Object-Oriented GUI.',
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
        {['all', 'ai', 'web', 'python', 'oop', 'react', 'api', 'html', 'css', 'js'].map(f => (
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, i) => (
          <MotionDiv
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-4xl">
                {project.category.includes('ai') ? '🤖' : project.category.includes('web') ? '🌐' : '📋'}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase border ${
                project.status === 'Completed' 
                  ? 'bg-green-500/10 text-green-500 border-green-500/20' 
                  : 'bg-accent-blue/10 text-accent-blue border-accent-blue/20'
              }`}>
                {project.status}
              </span>
            </div>
            <h3 className="text-2xl font-bold font-display mb-2">{project.title}</h3>
            <p className="text-text-secondary mb-6">{project.desc}</p>
            <Link 
              href={`/projects/${project.slug}`}
              className="text-accent-blue font-semibold hover:underline"
            >
              View Details →
            </Link>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}