
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, User, Key, ArrowRight, Loader2, Mail, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

const MotionDiv = motion.div as any;

type View = 'login' | 'forgot' | 'verify' | 'reset' | 'success';

export default function RoadmapAuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const router = useRouter();
  const [view, setView] = useState<View>('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Forgot Password States
  const [verificationCode, setVerificationCode] = useState('');
  const [enteredCode, setEnteredCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const targetEmail = 'zubairmurshid69@gmail.com';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'zubairmur' && password === 'roadmapedit') {
      sessionStorage.setItem('roadmap_admin_authed', 'true');
      router.push('/roadmap/admin');
      onClose();
    } else {
      setError('Invalid credentials. Check your input.');
    }
  };

  const handleSendCode = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/roadmap/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'send-code', email: targetEmail })
      });
      if (res.ok) setView('verify');
    } catch (err) {
      setError('Failed to send code.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/roadmap/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'verify-code', email: targetEmail, code: enteredCode })
      });
      if (res.ok) setView('reset');
      else setError('Invalid code entered.');
    } catch (err) {
      setError('Verification failed.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch('/api/roadmap/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'reset-password', email: targetEmail, newPassword })
      });
      if (res.ok) setView('success');
    } catch (err) {
      setError('Failed to reset password.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-sm bg-bg-secondary border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden relative z-10"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Lock size={16} className="text-accent-blue" />
                  </div>
                  <h3 className="font-bold tracking-tight">Access Control</h3>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                  <X size={18} />
                </button>
              </div>

              {view === 'login' && (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="relative">
                    <User className="absolute top-3.5 left-4 text-text-muted" size={16} />
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 bg-bg-tertiary/50 border border-white/5 rounded-xl outline-none focus:border-accent-blue/50 transition-all text-sm"
                    />
                  </div>
                  <div className="relative">
                    <Key className="absolute top-3.5 left-4 text-text-muted" size={16} />
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 bg-bg-tertiary/50 border border-white/5 rounded-xl outline-none focus:border-accent-blue/50 transition-all text-sm"
                    />
                  </div>
                  
                  {error && <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider text-center">{error}</p>}

                  <button className="w-full py-3.5 bg-white text-black font-bold rounded-xl text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-accent-chrome transition-all">
                    Initialize Admin <ArrowRight size={14} />
                  </button>

                  <button 
                    type="button"
                    onClick={() => { setView('forgot'); setError(''); }}
                    className="w-full text-[10px] font-mono uppercase tracking-widest text-text-muted hover:text-white transition-colors py-2"
                  >
                    Forgot Password?
                  </button>
                </form>
              )}

              {view === 'forgot' && (
                <div className="space-y-6 text-center">
                  <div className="p-4 bg-white/5 border border-white/5 rounded-2xl text-xs text-text-secondary leading-relaxed">
                    A verification code will be sent to <span className="text-white font-bold">{targetEmail}</span> to confirm your identity.
                  </div>
                  <button
                    onClick={handleSendCode}
                    disabled={isLoading}
                    className="w-full py-3.5 bg-accent-blue text-white font-bold rounded-xl text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2"
                  >
                    {isLoading ? <Loader2 className="animate-spin" size={14} /> : 'Send Code'}
                  </button>
                  <button onClick={() => setView('login')} className="text-[10px] uppercase font-mono tracking-widest text-text-muted">Back to Login</button>
                </div>
              )}

              {view === 'verify' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-xs text-text-muted mb-4 uppercase tracking-widest">Enter 6-Digit Code</p>
                    <input
                      type="text"
                      maxLength={6}
                      value={enteredCode}
                      onChange={(e) => setEnteredCode(e.target.value)}
                      className="w-full bg-transparent border-b-2 border-white/10 text-center text-3xl font-mono tracking-[0.5em] focus:border-accent-blue outline-none py-2"
                      placeholder="000000"
                    />
                  </div>
                  {error && <p className="text-[10px] text-red-500 font-bold text-center">{error}</p>}
                  <button
                    onClick={handleVerifyCode}
                    disabled={isLoading || enteredCode.length !== 6}
                    className="w-full py-3.5 bg-white text-black font-bold rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                  >
                    {isLoading ? <Loader2 className="animate-spin" size={14} /> : 'Verify Code'}
                  </button>
                </div>
              )}

              {view === 'reset' && (
                <form onSubmit={handleResetPassword} className="space-y-4">
                  <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-3.5 bg-bg-tertiary/50 border border-white/5 rounded-xl outline-none focus:border-accent-blue/50 text-sm"
                  />
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3.5 bg-bg-tertiary/50 border border-white/5 rounded-xl outline-none focus:border-accent-blue/50 text-sm"
                  />
                  {error && <p className="text-[10px] text-red-500 font-bold text-center">{error}</p>}
                  <button className="w-full py-3.5 bg-accent-blue text-white font-bold rounded-xl text-xs uppercase tracking-widest">
                    Update Password
                  </button>
                </form>
              )}

              {view === 'success' && (
                <div className="text-center py-4 space-y-6">
                  <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="font-bold text-lg">Password Changed</h4>
                  <p className="text-xs text-text-secondary">Your credentials have been updated and a confirmation email has been sent.</p>
                  <button 
                    onClick={() => { setView('login'); setError(''); }}
                    className="w-full py-3.5 bg-white text-black font-bold rounded-xl text-xs uppercase tracking-widest"
                  >
                    Return to Login
                  </button>
                </div>
              )}
            </div>
          </MotionDiv>
        </div>
      )}
    </AnimatePresence>
  );
}
