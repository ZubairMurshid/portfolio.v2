'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  }

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <h1 className="text-5xl font-display font-bold mb-12">Get In Touch</h1>

      <div className="grid lg:grid-cols-2 gap-16">
        <MotionDiv 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-text-secondary mb-12 leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
          </p>

          <div className="space-y-6">
            <ContactItem 
              icon={<Mail />} 
              label="Email" 
              value="zubairmurshid@icloud.com" 
              href="mailto:zubairmurshid@icloud.com"
            />
            <ContactItem 
              icon={<Phone />} 
              label="Phone" 
              value="+94 76 413 0494" 
              href="tel:+94764130494"
            />
            <ContactItem 
              icon={<MapPin />} 
              label="Location" 
              value="Colombo, Sri Lanka" 
              href="#"
            />
          </div>
        </MotionDiv>

        <MotionDiv 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-panel p-8 rounded-2xl relative overflow-hidden"
        >
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2 text-text-secondary">Name</label>
              <input 
                id="name"
                name="name" 
                type="text" 
                required 
                className="w-full p-4 bg-bg-primary/50 rounded-xl border border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2 text-text-secondary">Email</label>
              <input 
                id="email"
                name="email" 
                type="email" 
                required 
                className="w-full p-4 bg-bg-primary/50 rounded-xl border border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-2 text-text-secondary">Message</label>
              <textarea 
                id="message"
                name="message" 
                rows={5} 
                required 
                className="w-full p-4 bg-bg-primary/50 rounded-xl border border-white/10 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue outline-none transition-all resize-none"
                placeholder="Hello, I'd like to discuss..."
              />
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'loading' || status === 'success'}
              className={`
                w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all
                ${status === 'success' 
                  ? 'bg-green-500/20 text-green-500 border border-green-500/50 cursor-default' 
                  : 'bg-accent-blue text-white hover:bg-accent-dark-blue hover:shadow-neon hover:-translate-y-1'
                }
                disabled:opacity-70 disabled:hover:translate-y-0
              `}
            >
              {status === 'loading' ? (
                <><Loader2 className="animate-spin" size={20} /> Sending...</>
              ) : status === 'success' ? (
                "Message Sent!"
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>

            {status === 'error' && (
              <p className="text-red-500 text-sm text-center bg-red-500/10 py-2 rounded-lg border border-red-500/20">
                Something went wrong. Please try again or email directly.
              </p>
            )}
          </form>
        </MotionDiv>
      </div>
    </div>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) {
  return (
    <a 
      href={href}
      className="flex items-center gap-4 p-4 rounded-xl bg-bg-secondary border border-white/5 hover:border-accent-blue/30 hover:bg-bg-tertiary transition-all group"
    >
      <div className="p-3 bg-accent-blue/10 text-accent-blue rounded-full group-hover:scale-110 transition-transform shadow-sm">
        {icon}
      </div>
      <div>
        <div className="text-xs text-text-muted uppercase tracking-wider mb-0.5">{label}</div>
        <div className="font-semibold text-lg">{value}</div>
      </div>
    </a>
  );
}