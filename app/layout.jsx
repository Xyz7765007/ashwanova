import './globals.css';

export const metadata = {
  title: 'Ashwanova™ — All-day calm. One small dose. | Nutriventia',
  description:
    'Ashwanova™ is a clinically-backed, root-only ashwagandha extract delivering 24-hour calm in one small dose. Powered by Nutriventia E.D.G.E.',
  metadataBase: new URL('https://ashwanova.nutriventia.com'),
  openGraph: {
    title: 'Ashwanova™ — All-day calm. One small dose.',
    description:
      'A clinically-backed, root-only ashwagandha extract. Sustained release. Clean label. 24 hours of calm in a single small dose.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashwanova™ — All-day calm. One small dose.',
    description:
      'A clinically-backed, root-only ashwagandha extract. Sustained release. Clean label. 24 hours of calm in a single small dose.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF6EE',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/assets/hero-loop.mp4" as="video" type="video/mp4" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&f[]=jetbrains-mono@400,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
