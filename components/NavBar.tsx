
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Home, User, Book, Code, Briefcase, Mail, FileText, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';
import { ReviewFloatingButton } from './ReviewSystem';

const MotionDiv = motion.div as any;

const navLinks = [
  { name: 'Home', path: '/', icon: <Home size={20} /> },
  { name: 'About', path: '/about', icon: <User size={20} /> },
  { name: 'Skills', path: '/skills', icon: <Book size={20} /> },
  { name: 'Projects', path: '/projects', icon: <Code size={20} /> },
  { name: 'Exp', path: '/experience', icon: <Briefcase size={20} /> },
  { name: 'Blog', path: '/blog', icon: <FileText size={20} /> },
  { name: 'Contact', path: '/contact', icon: <Mail size={20} /> },
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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar (Desktop & Mobile Branding) */}
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-bg-primary/90 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold tracking-tighter">
            Z<span className="text-accent-blue">M</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-accent-blue relative',
                  pathname === link.path ? 'text-accent-blue' : 'text-text-primary'
                )}
              >
                {link.name}
                {pathname === link.path && (
                  <MotionDiv
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-0.5 bg-accent-blue"
                  />
                )}
              </Link>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-accent-blue/30 hover:bg-accent-blue/10 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted ? (
                theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />
              ) : (
                <div className="w-[18px] h-[18px]" /> // Placeholder
              )}
            </button>
          </div>

          {/* Mobile Theme Toggle & Review Button (Top Right) */}
          <div className="md:hidden flex items-center gap-3">
            {/* Show review button only on mobile in navbar (isNav=true) */}
            <ReviewFloatingButton isNav={true} />
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-accent-blue/30"
            >
              {mounted ? (
                 theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />
              ) : (
                 <div className="w-[18px] h-[18px]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Floating Dock Navigation (Bottom Right) */}
      <div className="md:hidden fixed bottom-6 right-6 z-50 flex flex-row-reverse items-center gap-3">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-bg-secondary/80 backdrop-blur-xl border border-white/10 shadow-lg flex items-center justify-center text-accent-blue transition-all active:scale-95 z-50 overflow-hidden relative"
          style={{ boxShadow: '0 0 20px rgba(14, 165, 233, 0.2)' }}
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
              initial={{ width: 0, opacity: 0, x: 20 }}
              animate={{ width: 'auto', opacity: 1, x: 0 }}
              exit={{ width: 0, opacity: 0, x: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="h-20 bg-bg-secondary/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl flex items-center px-2 overflow-hidden max-w-[calc(100vw-6rem)]"
            >
              <div className="flex items-center gap-1 min-w-max px-2 overflow-x-auto no-scrollbar">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all whitespace-nowrap min-w-[60px]',
                      pathname === link.path 
                        ? 'bg-accent-blue/10 text-accent-blue' 
                        : 'text-text-secondary hover:text-text-primary'
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
