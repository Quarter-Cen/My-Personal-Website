import type { Metadata } from "next";
import './globals.css';
import { Trirong } from 'next/font/google';
import { ReactNode } from 'react';


const trirong = Trirong({ 
  subsets: ['latin'],
  weight: ['200', '400', '700'],
 });

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Kanok Saengjan",
  description: "My Portfolio",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={trirong.className}>{children}</body>
    </html>
  );
}
