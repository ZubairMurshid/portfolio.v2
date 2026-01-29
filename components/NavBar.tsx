
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Home, User, Book, Code, Briefcase, Mail, FileText, Menu, X, Map } from 'lucide-react';
import { useTheme } from './ThemeProvider';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="hidden md:flex fixed top-8 left-0 right-0 justify-center z-50 pointer-events-none">
        {/* Fix: Replaced motion.nav with MotionNav */}
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

          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full hover:bg-white/5 transition-colors relative mr-1"
            aria-label="Toggle theme"
          >
            {mounted ? (
              /* Fix: Replaced motion.div with MotionDiv */
              <MotionDiv
                key={theme}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </MotionDiv>
            ) : (
              <div className="w-[16px] h-[16px]" />
            )}
          </button>
        </MotionNav>
      </div>

      {/* Mobile NavBar Update */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 p-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-xl font-sans font-black tracking-tighter bg-bg-secondary/80 backdrop-blur-xl p-3 rounded-2xl border border-white/10 shadow-chrome"
        >
          Z<span className="text-white">M</span>
        </Link>
        <button
          onClick={toggleTheme}
          className="p-3.5 rounded-2xl bg-bg-secondary/80 backdrop-blur-xl border border-white/10 shadow-chrome"
        >
          {mounted ? (
             theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />
          ) : (
             <div className="w-5 h-5" />
          )}
        </button>
      </div>

      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-2xl bg-white text-black shadow-2xl flex items-center justify-center transition-all active:scale-90"
        >
          <AnimatePresence mode="wait">
             {isOpen ? <X size={24} key="x"/> : <Menu size={24} key="m"/>}
          </AnimatePresence>
        </button>
        
        <AnimatePresence>
          {isOpen && (
            /* Fix: Replaced motion.div with MotionDiv */
            <MotionDiv
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-20 right-0 w-64 bg-bg-secondary/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-4 space-y-2 overflow-hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'flex items-center gap-4 px-4 py-3 rounded-2xl transition-all',
                    pathname === link.path ? 'bg-white/10 text-white' : 'text-text-muted'
                  )}
                >
                  {link.icon}
                  <span className="text-xs font-bold uppercase tracking-widest">{link.name}</span>
                </Link>
              ))}
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
