import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div id="main" className="min-h-screen flex flex-col" dir="rtl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-black px-3 py-2 rounded"
      >
        Skip to main content
      </a>
      <Header />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
}

