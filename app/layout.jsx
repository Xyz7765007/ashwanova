import './globals.css';

export const metadata = {
  title: 'Ashwanova™ — Root-Only Ashwagandha | Regulation-Ready Ingredient for Nutraceutical Brands',
  description:
    "The only ashwagandha extract standardized to USP, root-only, and aligned with India's Ministry of AYUSH advisory. Sustained 24-hour release. Clinical proof at 150mg. Built for brand owners who can't afford regulatory risk.",
  metadataBase: new URL('https://ashwanova.nutriventia.com'),
  openGraph: {
    title: 'Ashwanova™ — Root-Only Ashwagandha for Nutraceutical Brands',
    description:
      "The only ashwagandha extract standardized to USP, root-only, and aligned with India's Ministry of AYUSH advisory. Sustained 24-hour release. Clinical proof at 150mg. Built for brand owners who can't afford regulatory risk.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashwanova™ — Root-Only Ashwagandha for Nutraceutical Brands',
    description:
      "The only ashwagandha extract standardized to USP, root-only, and aligned with India's Ministry of AYUSH advisory. Sustained 24-hour release. Clinical proof at 150mg. Built for brand owners who can't afford regulatory risk.",
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
