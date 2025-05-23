import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';

import './globals.css';
import type { Metadata } from 'next';
import '@fontsource/bebas-neue';
import '@fontsource/raleway/800.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/playfair-display/700.css';
import { Geist, Geist_Mono, Sora } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Meu portfólio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="font-[sora]">
      <body className={`${geistSans.variable} ${geistMono.variable} ${sora} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
