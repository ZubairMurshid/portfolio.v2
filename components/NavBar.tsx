'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';

const MotionDiv = motion.div as any;

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-bg-primary/90 backdrop-blur-md shadow-md py-3'
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
              <div className="w-[18px] h-[18px]" /> // Placeholder to prevent layout shift
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
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
          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MotionDiv
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-bg-primary z-50 flex flex-col p-6 md:hidden"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="text-2xl font-bold font-display">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'text-2xl font-medium',
                    pathname === link.path ? 'text-accent-blue' : 'text-text-primary'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </nav>
  );
}