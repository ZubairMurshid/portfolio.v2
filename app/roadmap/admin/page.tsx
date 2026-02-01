'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// Added AnimatePresence to framer-motion imports
import { motion, AnimatePresence } from 'framer-motion';
import { Save, LogOut, CheckCircle2, Circle, Clock, LayoutDashboard, Loader2, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

const MotionDiv = motion.div as any;

const nodes = [
  { id: 'html', label: 'HTML', category: 'Frontend Foundations' },
  { id: 'css', label: 'CSS', category: 'Frontend Foundations' },
  { id: 'js', label: 'JavaScript', category: 'Frontend Foundations' },
  { id: 'npm', label: 'npm', category: 'Frontend Foundations' },
  { id: 'git', label: 'Git', category: 'Frontend Foundations' },
  { id: 'github', label: 'GitHub', category: 'Frontend Foundations' },
  { id: 'react', label: 'React', category: 'Frontend Foundations' },
  { id: 'tailwind', label: 'Tailwind CSS', category: 'Frontend Foundations' },
  { id: 'nodejs', label: 'Node.js', category: 'Backend Development' },
  { id: 'postgres', label: 'PostgreSQL', category: 'Backend Development' },
  { id: 'redis', label: 'Redis', category: 'Backend Development' },
  { id: 'jwt', label: 'JWT Auth', category: 'Backend Development' },
  { id: 'rest', label: 'RESTful APIs', category: 'Backend Development' },
  { id: 'linux', label: 'Linux Basics', category: 'DevOps & Cloud' },
  { id: 'aws', label: 'AWS (S3, EC2, VPC)', category: 'DevOps & Cloud' },
  { id: 'terraform', label: 'Terraform', category: 'DevOps & Cloud' },
  { id: 'ansible', label: 'Ansible', category: 'DevOps & Cloud' },
  { id: 'gha', label: 'GitHub Actions', category: 'DevOps & Cloud' },
];

type Status = 'completed' | 'ongoing' | 'not-started';

export default function RoadmapAdmin() {
  const router = useRouter();
  const [statuses, setStatuses] = useState<Record<string, Status>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    const isAuthed = sessionStorage.getItem('roadmap_admin_authed');
    if (!isAuthed) {
      router.push('/roadmap');
      return;
    }

    const loadData = async () => {
      try {
        const response = await fetch('/api/roadmap');
        if (response.ok) {
          const data = await response.json();
          const initialStatuses: Record<string, Status> = {};
          nodes.forEach(node => {
            if (data.completed?.includes(node.id)) initialStatuses[node.id] = 'completed';
            else if (data.ongoing?.includes(node.id)) initialStatuses[node.id] = 'ongoing';
            else initialStatuses[node.id] = 'not-started';
          });
          setStatuses(initialStatuses);
        }
      } catch (err) {
        console.error('Failed to load roadmap state');
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [router]);

  const handleSave = async () => {
    setIsSaving(true);
    setSaveError(null);
    setSaveSuccess(false);
    
    const completed = nodes.filter(n => statuses[n.id] === 'completed').map(n => n.id);
    const ongoing = nodes.filter(n => statuses[n.id] === 'ongoing').map(n => n.id);
    
    try {
      const res = await fetch('/api/roadmap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed, ongoing })
      });

      const data = await res.json();

      if (res.ok) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      } else {
        setSaveError(data.error || 'Failed to sync with global storage.');
      }
    } catch (err) {
      setSaveError('Network failure. Could not reach server.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('roadmap_admin_authed');
    router.push('/roadmap');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#020204] flex items-center justify-center">
        <Loader2 className="animate-spin text-accent-blue" size={32} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020204] pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-accent-blue mb-2">
              <LayoutDashboard size={18} />
              <span className="font-mono text-[10px] uppercase tracking-widest">Master Control Panel</span>
            </div>
            <h1 className="text-4xl font-black tracking-tighter">Execution <span className="text-white/40">Status</span></h1>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-xl font-mono text-xs uppercase tracking-widest hover:scale-105 transition-all disabled:opacity-50"
              >
                {isSaving ? <Loader2 className="animate-spin" size={16} /> : <><Save size={16} /> Sync Global</>}
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-6 py-2.5 border border-white/10 text-white/60 rounded-xl font-mono text-xs uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                <LogOut size={16} />
              </button>
            </div>
          </div>
        </header>

        {/* Status Feedback */}
        <AnimatePresence>
          {saveError && (
            <MotionDiv 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-4 text-red-500 text-sm"
            >
              <AlertTriangle size={20} />
              <p>{saveError}</p>
            </MotionDiv>
          )}
          {saveSuccess && (
            <MotionDiv 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center gap-4 text-green-500 text-sm"
            >
              <CheckCircle2 size={20} />
              <p>Global progress synchronized successfully.</p>
            </MotionDiv>
          )}
        </AnimatePresence>

        <div className="space-y-4">
          {['Frontend Foundations', 'Backend Development', 'DevOps & Cloud'].map(cat => (
            <div key={cat} className="space-y-4">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 pt-8 pb-2 border-b border-white/5">{cat}</h3>
              <div className="grid gap-2">
                {nodes.filter(n => n.category === cat).map(node => (
                  <div key={node.id} className="glass-panel p-4 flex justify-between items-center group hover:border-white/20 transition-all rounded-2xl">
                    <span className="font-bold text-sm tracking-tight">{node.label}</span>
                    <div className="flex bg-bg-primary/50 p-1 rounded-xl border border-white/5">
                      <StatusButton 
                        active={statuses[node.id] === 'not-started'} 
                        onClick={() => setStatuses({...statuses, [node.id]: 'not-started'})}
                        icon={<Circle size={14} />}
                        label="To Do"
                      />
                      <StatusButton 
                        active={statuses[node.id] === 'ongoing'} 
                        onClick={() => setStatuses({...statuses, [node.id]: 'ongoing'})}
                        icon={<Clock size={14} />}
                        label="Ongoing"
                      />
                      <StatusButton 
                        active={statuses[node.id] === 'completed'} 
                        onClick={() => setStatuses({...statuses, [node.id]: 'completed'})}
                        icon={<CheckCircle2 size={14} />}
                        label="Done"
                        activeClass="bg-white text-black border-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatusButton({ active, onClick, icon, label, activeClass }: { 
  active: boolean; 
  onClick: () => void; 
  icon: React.ReactNode; 
  label: string;
  activeClass?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-widest transition-all border border-transparent",
        active 
          ? (activeClass || "bg-white/10 text-white border-white/10 shadow-lg") 
          : "text-text-muted hover:text-white"
      )}
    >
      {icon} {label}
    </button>
  );
}
