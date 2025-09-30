import { SpeedInsights } from '@vercel/speed-insights/next';
import { Layout } from '@/components/layout';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Providers } from './providers';
import './globals.css';

const satoshi = localFont({
  src: [
    {
      path: '../assets/fonts/Satoshi-Variable.ttf',
    },
    {
      path: '../assets/fonts/Satoshi-Variable.woff',
    },
    {
      path: '../assets/fonts/Satoshi-Variable.woff2',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
  preload: true,
});

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s - Sergiu Frunza',
    default: 'Sergiu Frunza - Software engineer',
  },
  description: "I\'m Sergiu, a software engineer based in Boston, MA.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${satoshi.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="h-full flex">
        <Providers>
          <div className="flex w-full flex-col min-h-screen">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
      <SpeedInsights />
    </html>
  );
}
