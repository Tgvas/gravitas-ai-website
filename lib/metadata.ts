import type { Metadata } from 'next';

const baseUrl = 'https://gravitasai.xyz';

export const siteConfig = {
  name: 'Gravitas AI',
  url: baseUrl,
  description:
    'Gravitas AI deploys and manages AI agent teams for your business — handling the setup, configuration, and ongoing operations so you can focus on outcomes, not infrastructure.',
  email: 'hello@gravitasai.xyz',
  linkedin: 'https://linkedin.com/company/gravitas-ai',
  github: 'https://github.com/gravitasai',
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Gravitas AI — Your AI Operations Team, Professionally Deployed',
    template: '%s | Gravitas AI',
  },
  description: siteConfig.description,
  keywords: [
    'AI agents',
    'AI operations',
    'AI consulting',
    'AI automation',
    'OpenClaw',
    'enterprise AI',
    'AI deployment',
    'workflow automation',
  ],
  authors: [{ name: 'Gravitas AI LLC' }],
  creator: 'Gravitas AI LLC',
  publisher: 'Gravitas AI LLC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Gravitas AI',
    title: 'Gravitas AI — Your AI Operations Team, Professionally Deployed',
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gravitas AI — Your AI Operations Team, Professionally Deployed',
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
