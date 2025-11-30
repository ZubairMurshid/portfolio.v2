'use client';

import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

export default function ContactDock() {
  return (
    <MotionDiv 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 flex gap-4 shadow-xl"
    >
      <DockItem href="https://github.com/ZubairMurshid" icon={<Github size={20} />} label="GitHub" />
      <DockItem href="https://linkedin.com/in/itszubairmurshid" icon={<Linkedin size={20} />} label="LinkedIn" />
      <DockItem href="mailto:zubairmurshid@icloud.com" icon={<Mail size={20} />} label="Email" />
      <DockItem href="https://x.com/zubairmurshid_" icon={<Twitter size={20} />} label="Twitter" />
    </MotionDiv>
  );
}

function DockItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group p-2 rounded-full hover:bg-white/20 transition-colors text-text-primary"
      aria-label={label}
    >
      <MotionDiv whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        {icon}
      </MotionDiv>
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {label}
      </span>
    </a>
  );
}