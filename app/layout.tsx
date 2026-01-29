
import React from 'react';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import CommandPalette from '@/components/CommandPalette';
import { ReviewFloatingButton } from '@/components/ReviewSystem';
import { cn } from '@/lib/utils';

// Premium high-end sans-serif alternative to Google Sans
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Zubair Murshid | Cinematic Portfolio',
  description: 'High-end Computer Science Undergraduate Portfolio with a cinematic spotlight aesthetic.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(jakarta.variable, jakarta.variable, jetbrainsMono.variable)}>
      <body className="bg-bg-primary text-text-primary antialiased font-sans transition-colors duration-500 min-h-screen flex flex-col selection:bg-white/10 selection:text-white">
        <ThemeProvider>
          <ScrollProgress />
          <CustomCursor />
          <CommandPalette />
          <NavBar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ReviewFloatingButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
