'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, BookOpen, Loader2 } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  authors: string[];
  thumbnail: string;
  publishedDate: string;
}

export default function BookFinderDemo() {
  const [activeTab, setActiveTab] = useState<'home' | 'favorites'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [favorites, setFavorites] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  // Load favorites from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('bookFinderFavoritesObjects');
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {}
    }
    // Initial fetch (popular fiction)
    fetchBooks('best sellers fiction');
  }, []);

  // Save favorites to local storage when changed
  useEffect(() => {
    localStorage.setItem('bookFinderFavoritesObjects', JSON.stringify(favorites));
  }, [favorites]);

  const fetchBooks = async (query: string) => {
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=12`);
      const data = await res.json();
      if (data.items) {
        const parsedBooks = data.items.map((item: any) => ({
          id: item.id,
          title: item.volumeInfo.title || 'Unknown Title',
          authors: item.volumeInfo.authors || ['Unknown Author'],
          thumbnail: item.volumeInfo.imageLinks?.thumbnail?.replace('http:', 'https:')?.replace('&zoom=1', '&zoom=2') || 'https://via.placeholder.com/300x400.png?text=No+Cover',
          publishedDate: item.volumeInfo.publishedDate?.substring(0, 4) || 'N/A',
        }));
        setBooks(parsedBooks);
      } else {
        setBooks([]);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchBooks(searchQuery);
    setActiveTab('home');
  };

  const toggleFavorite = (book: Book, e: React.MouseEvent) => {
    e.stopPropagation();
    const isFav = favorites.find(b => b.id === book.id);
    if (isFav) {
      setFavorites(favorites.filter(b => b.id !== book.id));
    } else {
      setFavorites([...favorites, book]);
    }
  };

  const displayedBooks = activeTab === 'home' ? books : favorites;

  const MotionDiv = motion.div as any;

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col font-sans" style={{ backgroundColor: '#242424', minHeight: '600px' }}>
      
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between p-4 md:p-6 border-b border-[#333] bg-[#1a1a1a]">
        <div className="flex items-center gap-3 text-white font-bold text-xl tracking-tight">
          <BookOpen className="text-[#e50914]" />
          <span>BookFinder</span>
        </div>
        
        <div className="flex gap-4 md:gap-8 text-sm font-medium">
          <button 
            onClick={() => setActiveTab('home')}
            className={`transition-colors ${activeTab === 'home' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Home
          </button>
          <button 
            onClick={() => setActiveTab('favorites')}
            className={`transition-colors flex items-center gap-1.5 ${activeTab === 'favorites' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Favorites <span className="bg-[#333] text-xs px-1.5 py-0.5 rounded-full">{favorites.length}</span>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow p-4 md:p-8 overflow-y-auto">
        
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-10">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, author, or keyword..." 
                className="w-full bg-[#333] text-white border-transparent focus:border-[#e50914] focus:ring-1 focus:ring-[#e50914] rounded-lg py-3 pl-12 pr-4 outline-none transition-all placeholder:text-gray-500"
              />
            </div>
            <button 
              type="submit"
              className="bg-[#e50914] hover:bg-[#b80710] text-white font-bold px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
            >
              Search
            </button>
          </form>
        </div>

        {/* Status Messages */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <Loader2 className="animate-spin mb-4" size={32} />
            <p>Fetching books from Google APIs...</p>
          </div>
        )}

        {!loading && activeTab === 'favorites' && favorites.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400 text-center">
            <Heart size={48} className="mb-4 opacity-20" />
            <p className="text-xl font-bold mb-2 text-white">No favorites yet</p>
            <p>Click the heart icon on any book to add it to your collection.</p>
          </div>
        )}

        {/* Book Grid */}
        {!loading && displayedBooks.length > 0 && (
          <div 
            className="grid gap-6" 
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
          >
            {displayedBooks.map((book, i) => {
              const isFav = favorites.some(b => b.id === book.id);
              return (
                <MotionDiv
                  key={`${book.id}-${activeTab}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg border border-[#333] hover:-translate-y-2 transition-transform duration-300 group flex flex-col relative"
                >
                  {/* Favorite Toggle Overlay */}
                  <button 
                    onClick={(e) => toggleFavorite(book, e)}
                    className="absolute top-3 right-3 z-10 p-2 bg-black/40 backdrop-blur-sm rounded-full hover:bg-black/60 transition-colors"
                  >
                    <Heart 
                      size={20} 
                      className={`transition-colors ${isFav ? 'text-[#ff4757] fill-[#ff4757]' : 'text-white'}`} 
                    />
                  </button>

                  {/* Cover Art */}
                  <div className="aspect-[2/3] w-full overflow-hidden bg-[#111]">
                    <img 
                      src={book.thumbnail} 
                      alt={book.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Details */}
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-bold text-white leading-tight mb-1 line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2 line-clamp-1">
                      {book.authors.join(', ')}
                    </p>
                    <div className="mt-auto pt-4 flex items-center justify-between text-xs text-gray-500 font-medium uppercase tracking-wider">
                      <span>{book.publishedDate}</span>
                      <span className="text-[#e50914] opacity-0 group-hover:opacity-100 transition-opacity">
                        View Details →
                      </span>
                    </div>
                  </div>
                </MotionDiv>
              )
            })}
          </div>
        )}
      </div>
    </div>
  );
}
