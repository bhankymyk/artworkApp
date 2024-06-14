import './globals.css';
import NavBar from '@/navBar';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artwork App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
        </body>
    </html>
  );
}
