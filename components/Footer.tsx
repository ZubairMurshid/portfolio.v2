
import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-accent-blue/10 bg-bg-secondary py-8 mt-12">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-50" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand - Left */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-display font-bold">ZUBAIR MURSHID</h3>
            <p className="text-xs text-text-muted">Built with Next.js & Tailwind</p>
          </div>

          {/* Socials - Center */}
          <div className="flex items-center gap-6">
              <SocialIcon href="https://github.com/ZubairMurshid" icon={<Github size={18} />} />
              <SocialIcon href="https://linkedin.com/in/itszubairmurshid" icon={<Linkedin size={18} />} />
              <SocialIcon href="mailto:zubairmurshid@icloud.com" icon={<Mail size={18} />} />
              <SocialIcon href="https://x.com/zubairmurshid_" icon={<Twitter size={18} />} />
          </div>

          {/* CV Button - Right */}
          <Link 
            href="/cv.pdf" 
            target="_blank"
            className="px-5 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue hover:bg-accent-blue hover:text-white transition-all text-xs font-semibold uppercase tracking-wider"
          >
            Download CV
          </Link>
        </div>
        
        <div className="text-center text-text-muted text-[10px] mt-6 opacity-60">
          &copy; {new Date().getFullYear()} Zubair Murshid. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-text-muted hover:text-accent-blue transition-colors hover:scale-110 transform"
    >
      {icon}
    </a>
  );
}
