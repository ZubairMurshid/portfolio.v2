
import type { Metadata } from 'next';
import { Space_Grotesk, Exo_2 } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import CommandPalette from '@/components/CommandPalette';
import { cn } from '@/lib/utils';

// Configure fonts via Next.js optimization system
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

const exo2 = Exo_2({ 
  subsets: ['latin'],
  variable: '--font-exo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zubair Murshid | Portfolio',
  description: 'Computer Science Undergraduate Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(spaceGrotesk.variable, exo2.variable)}>
      <body className="bg-bg-primary text-text-primary antialiased font-sans transition-colors duration-300 min-h-screen flex flex-col selection:bg-accent-blue/30 selection:text-accent-blue">
        <ThemeProvider>
          <ScrollProgress />
          <CustomCursor />
          <CommandPalette />
          <NavBar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
