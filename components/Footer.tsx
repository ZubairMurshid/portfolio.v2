import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-accent-blue/10 bg-bg-secondary pt-16 pb-24 mt-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-display font-bold mb-1">ZUBAIR MURSHID</h3>
          <p className="text-text-muted">Computer Science Undergraduate</p>
        </div>

        <div className="flex items-center gap-4">
            <SocialIcon href="https://github.com/ZubairMurshid" icon={<Github size={20} />} />
            <SocialIcon href="https://linkedin.com/in/itszubairmurshid" icon={<Linkedin size={20} />} />
            <SocialIcon href="mailto:zubairmurshid@icloud.com" icon={<Mail size={20} />} />
            <SocialIcon href="https://x.com/zubairmurshid_" icon={<Twitter size={20} />} />
        </div>

        <Link 
          href="/cv.pdf" 
          target="_blank"
          className="px-6 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue hover:bg-accent-blue hover:text-white transition-all text-sm font-semibold"
        >
          Download CV
        </Link>
      </div>

      <div className="container mx-auto px-6 mt-12 text-center text-text-muted text-sm">
        &copy; {new Date().getFullYear()} Zubair Murshid. Built with Next.js & Tailwind.
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
      className="p-2 text-text-muted hover:text-accent-blue transition-colors hover:scale-110 transform"
    >
      {icon}
    </a>
  );
}