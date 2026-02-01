
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Book, Code, Briefcase, Mail, FileText, Menu, X, Map, Github, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

// Fix: Using 'as any' to suppress motion property type errors
const MotionDiv = motion.div as any;
const MotionNav = motion.nav as any;

const navLinks = [
  { name: 'Home', path: '/', icon: <Home size={18} /> },
  { name: 'About', path: '/about', icon: <User size={18} /> },
  { name: 'Skills', path: '/skills', icon: <Book size={18} /> },
  { name: 'Roadmap', path: '/roadmap', icon: <Map size={18} /> },
  { name: 'Projects', path: '/projects', icon: <Code size={18} /> },
  { name: 'Exp', path: '/experience', icon: <Briefcase size={18} /> },
  { name: 'Blog', path: '/blog', icon: <FileText size={18} /> },
  { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Desktop NavBar */}
      <div className="hidden md:flex fixed top-8 left-0 right-0 justify-center z-50 pointer-events-none">
        <MotionNav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={cn(
            "pointer-events-auto flex items-center gap-2 p-1.5 rounded-full border transition-all duration-500",
            "bg-bg-secondary/40 backdrop-blur-2xl shadow-chrome border-white/10"
          )}
        >
          <Link 
            href="/" 
            className="pl-5 pr-3 flex items-center gap-1 font-sans font-black text-lg tracking-tighter hover:opacity-80 transition-opacity"
          >
            Z<span className="text-white">M</span>
          </Link>

          <div className="w-[1px] h-5 bg-white/10 mx-2" />

          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className={cn(
                      "relative px-5 py-2 rounded-full text-[11px] uppercase tracking-widest font-bold transition-all",
                      isActive ? "text-white" : "text-text-muted hover:text-white"
                    )}
                  >
                    {isActive && (
                      <MotionDiv
                        layoutId="activePill"
                        className="absolute inset-0 bg-white/10 shadow-chrome rounded-full"
                        transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="w-[1px] h-5 bg-white/10 mx-2" />
          
          <div className="pr-4">
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-[0.2em] font-bold opacity-40">
              V1.2
            </span>
          </div>
        </MotionNav>
      </div>

      {/* Mobile NavBar - Premium Tech Style */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center h-14 px-6 bg-bg-primary/80 backdrop-blur-xl border-b border-white/5 shadow-lg">
          {/* Logo Left */}
          <Link 
            href="/" 
            className="text-lg font-sans font-black tracking-tighter"
            onClick={() => setIsOpen(false)}
          >
            Z<span className="text-white">M</span>
          </Link>

          {/* Icons Right */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/ZubairMurshid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-muted hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/itszubairmurshid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-muted hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white transition-all active:scale-90"
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                 {isOpen ? <X size={20} key="x"/> : <Menu size={20} key="m"/>}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <MotionDiv
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-bg-secondary/95 backdrop-blur-3xl border-b border-white/10 overflow-hidden shadow-2xl"
            >
              <nav className="p-6 grid grid-cols-2 gap-3">
                {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'flex flex-col items-center justify-center gap-2 p-5 rounded-2xl transition-all border',
                        isActive 
                          ? 'bg-white/10 border-white/20 text-white shadow-chrome' 
                          : 'bg-white/5 border-transparent text-text-muted hover:bg-white/10'
                      )}
                    >
                      <div className={isActive ? "text-white" : "text-text-muted"}>
                        {link.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{link.name}</span>
                    </Link>
                  );
                })}
              </nav>
              <div className="p-6 pt-0 text-center opacity-30">
                 <span className="text-[9px] font-mono uppercase tracking-[0.5em] text-text-muted">Engineering Precision // V1.2</span>
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
