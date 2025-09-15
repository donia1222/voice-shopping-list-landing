import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BuyVoice - Voice Shopping Lists App | Create Lists by Voice',
  description: 'BuyVoice: The smart voice-powered shopping list app. Create shopping lists by voice, get price estimates, and never forget items again. Download BuyVoice for iOS now!',
  keywords: 'BuyVoice, voice shopping lists, voice shopping app, shopping list app, voice recognition, grocery list, shopping assistant, iOS app',
  generator: 'lweb.ch',
  authors: [{ name: 'BuyVoice Team' }],
  creator: 'BuyVoice',
  publisher: 'BuyVoice',
  metadataBase: new URL('https://buyvoice.app'),
  alternates: {
    canonical: 'https://buyvoice.app',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://buyvoice.app',
    title: 'BuyVoice - Voice Shopping Lists App',
    description: 'Create shopping lists by voice with BuyVoice. Smart AI-powered shopping assistant with price estimates and voice recognition.',
    siteName: 'BuyVoice',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BuyVoice - Voice Shopping Lists App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuyVoice - Voice Shopping Lists App',
    description: 'Create shopping lists by voice with BuyVoice. Smart AI-powered shopping assistant.',
    images: ['/images/og-image.jpg'],
    creator: '@buyvoice',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BuyVoice",
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "iOS",
    "description": "BuyVoice is a smart voice-powered shopping list app that lets you create shopping lists by voice, get price estimates, and never forget items again.",
    "url": "https://buyvoice.app",
    "downloadUrl": "https://apps.apple.com/app/voice-shopping-list/id6505125372",
    "author": {
      "@type": "Organization",
      "name": "BuyVoice Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BuyVoice"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    },
    "screenshot": [
      "https://buyvoice.app/0x0ss.png",
      "https://buyvoice.app/IMG_3175.PNG"
    ]
  }

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="BuyVoice" />
        <meta name="application-name" content="BuyVoice" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
