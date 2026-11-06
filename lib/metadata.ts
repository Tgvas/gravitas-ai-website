import type { Metadata } from 'next';

const baseUrl = 'https://gravitasai.xyz';

export const siteConfig = {
  name: 'Gravitas AI',
  url: baseUrl,
  description:
    'Gravitas AI is a consulting and advisory firm for vibe coders and businesses. We help you build, scale, and secure your app, from prototype to production.',
  email: 'hello@gravitasai.xyz',
  linkedin: 'https://linkedin.com/company/gravitas-ai',
  github: 'https://github.com/gravitasai',
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Gravitas AI: Consulting & Advisory to Build, Scale, and Secure Your App',
    template: '%s | Gravitas AI',
  },
  description: siteConfig.description,
  keywords: [
    'vibe coding consulting',
    'app security review',
    'scale app',
    'fractional CTO',
    'AI app development consulting',
    'technical advisory',
    'production-ready AI apps',
    'code review',
    'software studio',
  ],
  authors: [{ name: 'Gravitas AI LLC' }],
  creator: 'Gravitas AI LLC',
  publisher: 'Gravitas AI LLC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Gravitas AI',
    title: 'Gravitas AI: Consulting & Advisory to Build, Scale, and Secure Your App',
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gravitas AI: Consulting & Advisory to Build, Scale, and Secure Your App',
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
