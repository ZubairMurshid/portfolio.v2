
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Save, LogOut, CheckCircle2, Circle, Clock, LayoutDashboard } from 'lucide-react';
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

  useEffect(() => {
    // Auth check
    const isAuthed = sessionStorage.getItem('roadmap_admin_authed');
    if (!isAuthed) {
      router.push('/roadmap');
      return;
    }

    // Load existing data
    const completed = JSON.parse(localStorage.getItem('completedRoadmapNodes') || '[]');
    const ongoing = JSON.parse(localStorage.getItem('ongoingRoadmapNodes') || '[]');
    
    const initialStatuses: Record<string, Status> = {};
    nodes.forEach(node => {
      if (completed.includes(node.id)) initialStatuses[node.id] = 'completed';
      else if (ongoing.includes(node.id)) initialStatuses[node.id] = 'ongoing';
      else initialStatuses[node.id] = 'not-started';
    });
    setStatuses(initialStatuses);
  }, [router]);

  const handleSave = () => {
    setIsSaving(true);
    const completed = nodes.filter(n => statuses[n.id] === 'completed').map(n => n.id);
    const ongoing = nodes.filter(n => statuses[n.id] === 'ongoing').map(n => n.id);
    
    localStorage.setItem('completedRoadmapNodes', JSON.stringify(completed));
    localStorage.setItem('ongoingRoadmapNodes', JSON.stringify(ongoing));

    setTimeout(() => {
      setIsSaving(false);
      alert('Progress synchronized successfully!');
    }, 800);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('roadmap_admin_authed');
    router.push('/roadmap');
  };

  return (
    <div className="min-h-screen bg-[#020204] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-accent-blue mb-2">
              <LayoutDashboard size={18} />
              <span className="font-mono text-[10px] uppercase tracking-widest">Master Control Panel</span>
            </div>
            <h1 className="text-4xl font-sans font-black tracking-tighter">Execution <span className="text-white/40">Status</span></h1>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all disabled:opacity-50"
            >
              {isSaving ? 'Syncing...' : <><Save size={16} /> Save Changes</>}
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-2.5 border border-red-500/20 text-red-500 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-red-500/10 transition-all"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </header>

        <div className="space-y-4">
          {['Frontend Foundations', 'Backend Development', 'DevOps & Cloud'].map(cat => (
            <div key={cat} className="space-y-4">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 pt-8 pb-2 border-b border-white/5">{cat}</h3>
              <div className="grid gap-2">
                {nodes.filter(n => n.category === cat).map(node => (
                  <div key={node.id} className="glass-panel p-4 flex justify-between items-center group hover:border-white/20 transition-all">
                    <span className="font-bold text-sm tracking-tight">{node.label}</span>
                    <div className="flex bg-bg-primary p-1 rounded-lg border border-white/5">
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
                        activeClass="bg-green-500/20 text-green-500 border-green-500/30"
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
        "flex items-center gap-2 px-3 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-widest transition-all border border-transparent",
        active 
          ? (activeClass || "bg-white/10 text-white border-white/10") 
          : "text-text-muted hover:text-white"
      )}
    >
      {icon} {label}
    </button>
  );
}
