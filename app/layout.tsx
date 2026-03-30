import type { Metadata } from 'next'
import { playfair, dmSans, ibmPlexMono } from '@/lib/fonts'
import { siteConfig } from '@/lib/metadata'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Gravitas AI — Your AI Operations Team, Professionally Deployed',
    template: '%s — Gravitas AI',
  },
  description: siteConfig.description,
  openGraph: {
    siteName: 'Gravitas AI',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
