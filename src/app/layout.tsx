import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'TRENCHES.WTF - BUY, SELL, SHITPOST',
  description: `Solana's underground shitcoin forum.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="TRENCHES.WTF - BUY, SELL, SHITPOST" />

        <meta
          property="og:title"
          content="TRENCHES.WTF - BUY, SELL, SHITPOST"
        />
        <meta
          property="og:description"
          content="Solana's underground shitcoin forum."
        />
        <meta
          property="og:image"
          content="https://trenches-wtf.s3.amazonaws.com/trenches-logo.png"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@trenchesdotwtf" />
        <meta name="twitter:title" content="trenches" />
        <meta
          name="twitter:description"
          content="Solana's underground shitcoin forum."
        />
        <meta
          name="twitter:image"
          content="https://trenches-wtf.s3.amazonaws.com/trenches-logo.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
