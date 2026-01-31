import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bbbbnj Bnnn :: Sonic Glyphs',
  description: 'Explore the generative glyphs of the enigmatic mantra “Bbbbnj Bnnn”.'
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-background text-foreground font-body antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
