import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import NavBar from '@/components/NavBar';
import ContactDock from '@/components/ContactDock';
import Footer from '@/components/Footer';

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NavBar />
          <main className="min-h-screen">
            {children}
          </main>
          <ContactDock />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
