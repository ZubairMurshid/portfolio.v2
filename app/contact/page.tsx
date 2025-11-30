'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => setStatus('success'), 1500);
  }

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <h1 className="text-5xl font-display font-bold mb-12">Get In Touch</h1>

      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-xl text-text-secondary mb-12">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
          </p>

          <div className="space-y-6">
            <ContactItem icon={<Mail />} label="Email" value="zubairmurshid@icloud.com" />
            <ContactItem icon={<Phone />} label="Phone" value="+94 76 413 0494" />
            <ContactItem icon={<MapPin />} label="Location" value="Colombo, Sri Lanka" />
          </div>
        </div>

        <div className="glass-panel p-8 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">Name</label>
              <input type="text" required className="w-full p-3 bg-bg-primary rounded-lg border border-white/10 focus:border-accent-blue outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Email</label>
              <input type="email" required className="w-full p-3 bg-bg-primary rounded-lg border border-white/10 focus:border-accent-blue outline-none transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Message</label>
              <textarea rows={5} required className="w-full p-3 bg-bg-primary rounded-lg border border-white/10 focus:border-accent-blue outline-none transition-colors" />
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full py-4 bg-accent-blue text-white font-bold rounded-lg hover:bg-accent-dark-blue transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="p-4 bg-green-500/20 text-green-500 rounded-lg text-center">
                Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-bg-secondary border border-white/5">
      <div className="p-3 bg-accent-blue/10 text-accent-blue rounded-full">
        {icon}
      </div>
      <div>
        <div className="text-xs text-text-muted uppercase tracking-wider">{label}</div>
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
}
