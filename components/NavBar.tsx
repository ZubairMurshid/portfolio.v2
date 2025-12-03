
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Home, User, Book, Code, Briefcase, Mail, FileText, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';

const MotionDiv = motion.div as any;

const navLinks = [
  { name: 'Home', path: '/', icon: <Home size={18} /> },
  { name: 'About', path: '/about', icon: <User size={18} /> },
  { name: 'Skills', path: '/skills', icon: <Book size={18} /> },
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
      {/* DESKTOP: iOS Dynamic Island Navbar */}
      <div className="hidden md:flex fixed top-6 left-0 right-0 justify-center z-50 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            width: isScrolled ? 'auto' : 'auto',
            scale: isScrolled ? 0.98 : 1
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className={cn(
            "pointer-events-auto flex items-center gap-2 p-2 rounded-full border transition-all duration-300",
            "bg-white/10 dark:bg-black/20 backdrop-blur-2xl shadow-2xl border-white/20 ring-1 ring-black/5"
          )}
        >
          {/* Logo Segment */}
          <Link 
            href="/" 
            className="pl-4 pr-2 flex items-center gap-1 font-display font-bold text-lg tracking-tighter hover:scale-105 transition-transform"
          >
            Z<span className="text-accent-blue">M</span>
          </Link>

          {/* Divider */}
          <div className="w-px h-6 bg-white/10 mx-1" />

          {/* Navigation Links - Segmented Control Style */}
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className={cn(
                      "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center gap-2",
                      isActive ? "text-text-primary" : "text-text-muted hover:text-text-primary"
                    )}
                  >
                    {isActive && (
                      <MotionDiv
                        layoutId="activePill"
                        className="absolute inset-0 bg-white/20 dark:bg-white/10 shadow-sm rounded-full backdrop-blur-sm"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Divider */}
          <div className="w-px h-6 bg-white/10 mx-1" />

          {/* Theme Toggle Segment */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full hover:bg-white/10 transition-colors relative group"
            aria-label="Toggle theme"
          >
            {mounted ? (
              <motion.div
                key={theme}
                initial={{ rotate: -90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            ) : (
              <div className="w-[18px] h-[18px]" />
            )}
          </button>
        </motion.nav>
      </div>

      {/* MOBILE: Top Minimal Bar (Logo + Theme) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 p-4 flex justify-between items-center bg-gradient-to-b from-bg-primary/80 to-transparent backdrop-blur-[2px]">
        <Link 
          href="/" 
          className="text-2xl font-display font-bold tracking-tighter bg-white/10 backdrop-blur-xl p-2 rounded-xl border border-white/10 shadow-sm"
        >
          Z<span className="text-accent-blue">M</span>
        </Link>
        <button
          onClick={toggleTheme}
          className="p-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-sm"
        >
          {mounted ? (
             theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />
          ) : (
             <div className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* MOBILE: Bottom Right Floating Dock (iOS Style) */}
      <div className="md:hidden fixed bottom-6 right-6 z-50 flex flex-row-reverse items-center gap-3">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-bg-secondary/60 backdrop-blur-2xl border border-white/20 shadow-2xl flex items-center justify-center text-accent-blue transition-all active:scale-95 z-50 overflow-hidden relative"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* Expanding Menu Items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0, x: 20, scale: 0.9 }}
              animate={{ width: 'auto', opacity: 1, x: 0, scale: 1 }}
              exit={{ width: 0, opacity: 0, x: 20, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="h-auto py-2 bg-bg-secondary/60 backdrop-blur-3xl border border-white/20 rounded-2xl shadow-2xl flex items-center px-2 overflow-hidden max-w-[calc(100vw-6rem)] origin-right"
            >
              <div className="flex items-center gap-2 min-w-max px-2 overflow-x-auto no-scrollbar">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all whitespace-nowrap min-w-[60px]',
                      pathname === link.path 
                        ? 'bg-white/10 text-accent-blue shadow-inner' 
                        : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                    )}
                  >
                    {link.icon}
                    <span className="text-[10px] font-medium">{link.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
