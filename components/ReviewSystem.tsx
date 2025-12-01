
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X, MessageSquarePlus, User, Briefcase, Send, ThumbsUp } from 'lucide-react';
import { Review } from '@/lib/types';

const MotionDiv = motion.div as any;

const TAG_OPTIONS = ['Design', 'Content', 'Performance', 'Creativity', 'Usability', 'Code Quality'];

// Helper to convert to sentence case
const toSentenceCase = (str: string) => {
  if (!str) return str;
  // If string is all lowercase, capitalize first letter
  if (str === str.toLowerCase()) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str;
};

export function ReviewFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MotionDiv
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 rounded-full bg-bg-secondary/80 backdrop-blur-md border border-yellow-500/20 text-yellow-500 shadow-lg hover:border-yellow-500 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all group"
          aria-label="Rate my website"
        >
          <Star className="w-6 h-6 fill-current group-hover:rotate-12 transition-transform" />
        </button>
      </MotionDiv>

      <ReviewModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export function ReviewModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formattedComment = toSentenceCase(comment);

    try {
      await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          profession,
          rating,
          comment: formattedComment,
          tags: selectedTags
        }),
      });
      
      // Reset and close
      setTimeout(() => {
        setIsSubmitting(false);
        onClose();
        // Trigger a refresh of the feed if possible, or reload page
        window.location.reload(); 
      }, 1000);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  // Reset form when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setRating(0);
        setComment('');
        setName('');
        setProfession('');
        setSelectedTags([]);
      }, 300);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-md bg-bg-secondary border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative z-10"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-display font-bold">Rate Experience</h3>
                <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Star Rating Section */}
                <div className="flex flex-col items-center mb-6">
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setRating(star)}
                        className="p-1 transition-transform hover:scale-110 focus:outline-none"
                      >
                        <Star 
                          size={32} 
                          className={`transition-colors ${
                            star <= (hoverRating || rating) 
                              ? 'fill-yellow-500 text-yellow-500' 
                              : 'text-text-muted/30'
                          }`} 
                        />
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-text-muted mt-2 font-medium opacity-70">
                    Takes less than a minute.. Doesn't require sign-in :)
                  </p>
                </div>

                {rating > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-4"
                  >
                    {/* User Info - Moved to Top */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <User className="absolute top-3 left-3 text-text-muted" size={18} />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Name"
                          required
                          className="w-full pl-10 pr-4 py-3 bg-bg-tertiary rounded-xl border border-white/10 focus:border-yellow-500/50 outline-none transition-all"
                        />
                      </div>
                      <div className="relative">
                        <Briefcase className="absolute top-3 left-3 text-text-muted" size={18} />
                        <input
                          type="text"
                          value={profession}
                          onChange={(e) => setProfession(e.target.value)}
                          placeholder="Profession"
                          className="w-full pl-10 pr-4 py-3 bg-bg-tertiary rounded-xl border border-white/10 focus:border-yellow-500/50 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* What did you like tags */}
                    <div>
                      <label className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2 block">
                        What did you like the most?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {TAG_OPTIONS.map(tag => (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => toggleTag(tag)}
                            className={`px-3 py-1 text-xs rounded-full border transition-all ${
                              selectedTags.includes(tag)
                                ? 'bg-yellow-500/20 border-yellow-500 text-yellow-500'
                                : 'bg-bg-tertiary border-white/5 text-text-secondary hover:border-yellow-500/30'
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Comment Box */}
                    <div className="relative">
                      <MessageSquarePlus className="absolute top-3 left-3 text-text-muted" size={18} />
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Share your thoughts... (Optional)"
                        rows={comment.length > 50 ? 4 : 2}
                        className="w-full pl-10 pr-4 py-3 bg-bg-tertiary rounded-xl border border-white/10 focus:border-yellow-500/50 outline-none resize-none transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || !name}
                      className="w-full py-3 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Publishing...' : <><Send size={18} /> Publish Review</>}
                    </button>
                  </motion.div>
                )}
              </form>
            </div>
          </MotionDiv>
        </div>
      )}
    </AnimatePresence>
  );
}

export function ReviewFeed() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(data => {
        setReviews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return null;

  const totalReviews = reviews.length;
  const averageRating = totalReviews > 0 
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1)
    : "0.0";
  
  // Filter reviews to only show those with comments for the display feed
  const commentedReviews = reviews.filter(r => r.comment && r.comment.trim().length > 0);

  return (
    <section className="py-20 border-t border-white/5">
      <div className="flex flex-col items-center gap-4 mb-12 justify-center text-center">
        <div className="flex items-center gap-2">
           <ThumbsUp className="text-yellow-500" size={28} />
           <h2 className="text-3xl font-display font-bold">Feedback</h2>
        </div>
        
        {totalReviews > 0 && (
          <div className="glass-panel px-6 py-2 rounded-full border-yellow-500/20 flex items-center gap-3">
             <span className="text-2xl font-bold text-yellow-500">{averageRating}</span>
             <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      className={i < Math.round(Number(averageRating)) ? "fill-yellow-500 text-yellow-500" : "text-bg-tertiary"} 
                    />
                  ))}
             </div>
             <span className="text-text-muted text-sm border-l border-white/10 pl-3">
               {totalReviews} review{totalReviews !== 1 ? 's' : ''}
             </span>
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {commentedReviews.slice(0, 3).map((review, i) => (
          <MotionDiv
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel p-6 rounded-2xl border-l-4 border-l-yellow-500 relative"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-lg">{review.name}</h4>
                <p className="text-xs text-text-muted">{review.profession}</p>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={i < review.rating ? "fill-yellow-500 text-yellow-500" : "text-bg-tertiary"} 
                  />
                ))}
              </div>
            </div>

            <p className="text-text-secondary mb-4 italic">"{review.comment}"</p>

            <div className="flex flex-wrap gap-2">
              {review.tags.map(tag => (
                <span key={tag} className="text-[10px] px-2 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full border border-yellow-500/20">
                  {tag}
                </span>
              ))}
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}
