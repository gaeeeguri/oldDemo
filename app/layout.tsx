import type { Metadata } from 'next';
import '@/styles/globals.css';
import { ReactNode } from 'react';

import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';
import { NavBar } from '@/components/navBar';
import { Header } from '@/components/header';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
export const metadata: Metadata = {
  title: 'Demo',
  description: 'Demo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} grid min-h-full grid-rows-[auto_1fr_auto] bg-white font-sans antialiased transition-colors dark:bg-gray-900`}
      >
        <>
          <Providers>
            <Header />
            <main className="container mx-auto px-4 max-w-md">{children}</main>
            <NavBar />
          </Providers>
        </>
      </body>
    </html>
  );
}
