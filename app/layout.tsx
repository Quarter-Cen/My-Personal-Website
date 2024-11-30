import type { Metadata } from "next";
import './globals.css';
import { Trirong } from 'next/font/google';
import { ReactNode } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const trirong = Trirong({ 
  subsets: ['latin'],
  weight: ['200', '400', '700'],
 });

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Kanok Portfolio & Personal Website",
  description: "Discover my journey, achievements, and passion for technology.",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className={trirong.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
