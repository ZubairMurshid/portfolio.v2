
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight, Home, User, Book, Briefcase, Code, Mail, FileText } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// Fix: Using 'as any' to suppress motion property type errors
const MotionDiv = motion.div as any;

const pages = [
  { name: 'Home', path: '/', icon: <Home size={16} /> },
  { name: 'About', path: '/about', icon: <User size={16} /> },
  { name: 'Projects', path: '/projects', icon: <Code size={16} /> },
  { name: 'Experience', path: '/experience', icon: <Briefcase size={16} /> },
  { name: 'Skills', path: '/skills', icon: <Book size={16} /> },
  { name: 'Blog', path: '/blog', icon: <FileText size={16} /> },
  { name: 'Contact', path: '/contact', icon: <Mail size={16} /> },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSelect = (path: string) => {
    setOpen(false);
    router.push(path);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-[20vh] px-4">
          {/* Fix: Replaced motion.div with MotionDiv */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-lg bg-bg-secondary border border-white/10 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="p-4 border-b border-white/10 flex items-center gap-3">
              <Search className="text-text-muted" size={20} />
              <input 
                className="flex-1 bg-transparent outline-none text-lg placeholder:text-text-muted text-text-primary"
                placeholder="Search pages..."
                autoFocus
              />
              <div className="text-xs px-2 py-1 bg-white/10 rounded text-text-muted border border-white/5">ESC</div>
            </div>
            <div className="p-2">
              <div className="text-xs font-bold text-text-muted px-3 py-2 uppercase tracking-wider">Navigation</div>
              {pages.map((page) => (
                <button
                  key={page.path}
                  onClick={() => handleSelect(page.path)}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-accent-blue/10 hover:text-accent-blue transition-colors group text-left text-text-secondary"
                >
                  <div className="flex items-center gap-3">
                    {page.icon}
                    <span>{page.name}</span>
                  </div>
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </MotionDiv>
          <div className="absolute inset-0 -z-10" onClick={() => setOpen(false)} />
        </div>
      )}
    </AnimatePresence>
  );
}
