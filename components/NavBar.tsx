
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Orbit, Menu, X, Github, Linkedin, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const MotionDiv = motion.div as any;

const navLinks = [
  { name: 'Work', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Roadmap', path: '/roadmap' },
  { name: 'Blog', path: '/blog' },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [copyState, setCopyState] = useState<'idle' | 'hover' | 'copied'>('idle');
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const email = "zubairmurshid@icloud.com";

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopyState('copied');
    setTimeout(() => setCopyState('idle'), 2000);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Desktop NavBar - Pill Design */}
      <div className="fixed top-8 left-0 right-0 hidden md:flex justify-center z-[100] px-4">
        <MotionDiv
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-2 p-1 bg-black border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          {/* Logo Circle */}
          <Link href="/">
            <MotionDiv 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-black"
            >
              <Orbit size={20} />
            </MotionDiv>
          </Link>

          {/* Nav Items */}
          <nav className="flex items-center px-4 gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className="relative px-5 py-2 group"
                >
                  <span className={cn(
                    "text-[13px] font-medium transition-colors duration-300 relative z-10",
                    isActive ? "text-white" : "text-white/60 group-hover:text-white"
                  )}>
                    {link.name}
                  </span>
                  {isActive && (
                    <MotionDiv
                      layoutId="navPill"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Email Button */}
          <div className="pl-2 pr-1">
            <button
              onClick={handleCopy}
              onMouseEnter={() => copyState !== 'copied' && setCopyState('hover')}
              onMouseLeave={() => copyState !== 'copied' && setCopyState('idle')}
              className={cn(
                "h-11 min-w-[180px] px-6 rounded-full font-medium text-[13px] transition-all duration-300 flex items-center justify-center gap-2",
                copyState === 'copied' ? "bg-green-500 text-white" : "bg-white text-black hover:bg-white/90"
              )}
            >
              <AnimatePresence mode="wait">
                {copyState === 'idle' && (
                  <motion.span 
                    key="email"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    {email}
                  </motion.span>
                )}
                {copyState === 'hover' && (
                  <motion.span 
                    key="copy"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="flex items-center gap-2"
                  >
                    <Copy size={14} /> Copy this email
                  </motion.span>
                )}
                {copyState === 'copied' && (
                  <motion.span 
                    key="copied"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-2"
                  >
                    <Check size={14} /> Copied
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </MotionDiv>
      </div>

      {/* Mobile NavBar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[100]">
        <div className="flex justify-between items-center h-16 px-6 bg-black/90 backdrop-blur-xl border-b border-white/10">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black">
              <Orbit size={18} />
            </div>
            <span className="font-bold text-white tracking-tighter">ZM</span>
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center text-white bg-white/10 rounded-full"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <MotionDiv
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium p-4 rounded-2xl transition-all",
                    pathname === link.path ? "bg-white text-black" : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <button
                onClick={handleCopy}
                className="w-full p-4 rounded-2xl bg-white text-black font-bold flex items-center justify-center gap-2"
              >
                {copyState === 'copied' ? <Check size={18} /> : <Copy size={18} />}
                {copyState === 'copied' ? 'Copied' : email}
              </button>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
