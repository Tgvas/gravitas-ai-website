import type { Metadata } from 'next';

const baseUrl = 'https://gravitasai.xyz';

export const siteConfig = {
  name: 'Gravitas AI',
  url: baseUrl,
  description:
    'Gravitas AI is a software studio that designs, builds, and ships SaaS products and native apps. Our first app, Rubber Duck, turns speech into clean, polished text on your Mac.',
  email: 'hello@gravitasai.xyz',
  linkedin: 'https://linkedin.com/company/gravitas-ai',
  github: 'https://github.com/gravitasai',
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Gravitas AI — Software Studio Building SaaS & Native Apps',
    template: '%s | Gravitas AI',
  },
  description: siteConfig.description,
  keywords: [
    'software studio',
    'app development company',
    'SaaS products',
    'macOS apps',
    'native apps',
    'Rubber Duck',
    'dictation app',
    'AI-powered apps',
  ],
  authors: [{ name: 'Gravitas AI LLC' }],
  creator: 'Gravitas AI LLC',
  publisher: 'Gravitas AI LLC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Gravitas AI',
    title: 'Gravitas AI — Software Studio Building SaaS & Native Apps',
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gravitas AI — Software Studio Building SaaS & Native Apps',
    description: siteConfig.description,
    creator: '@gravitasai',
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
};

export function createPageMetadata(
  title: string,
  description: string,
  path: string = ''
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | Gravitas AI`,
      description,
      url: `${baseUrl}${path}`,
    },
    twitter: {
      title: `${title} | Gravitas AI`,
      description,
    },
  };
}

// Alias for backward compat
export const buildMetadata = ({
  title,
  description,
  path = '/',
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata => createPageMetadata(title, description, path);
