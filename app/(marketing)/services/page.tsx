import type { Metadata } from 'next';
import Link from 'next/link';
import { createPageMetadata } from '@/lib/metadata';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = createPageMetadata(
  'Services',
  'Consulting and advisory for vibe coders and businesses. Gravitas AI helps you build, scale, and secure your app: production builds, performance, security reviews, and technical advisory.',
  '/services'
);

const services = [
  {
    name: 'Build',
    tagline: 'From idea or prototype to a production-grade app.',
    bullets: [
      'Turn a prototype made with Cursor, Claude Code, Lovable, Bolt, or Replit into a real product',
      'Clean architecture, tests, and a repeatable deploy pipeline',
      'Auth, payments, email, and the other parts every app needs',
      'Hand-off with docs, so you can keep building after we leave',
    ],
  },
  {
    name: 'Grow & Scale',
    tagline: 'Make the app hold up when real users show up.',
    bullets: [
      'Find slow queries, heavy pages, and bottlenecks, then fix them',
      'Database design and architecture that can grow with you',
      'Hosting, infrastructure, and cost review',
      'Monitoring, logging, and alerts, so you see problems before users do',
      'A growth readiness check before a launch or a traffic spike',
    ],
  },
  {
    name: 'Secure',
    tagline: 'Find and close the holes common in AI-generated code.',
    bullets: [
      'Security review and audit of your code and setup',
      'Auth and access control checks',
      'Data handling: what you store, where it lives, who can read it',
      'Secrets management: exposed keys, env files, and repo history',
      'Dependency risk: outdated, abandoned, or unsafe packages',
    ],
  },
  {
    name: 'Advisory',
    tagline: 'Senior technical judgment, when you need it.',
    bullets: [
      'Code reviews with clear, ranked findings',
      'Architecture guidance before you commit to a direction',
      'Fractional CTO and technical advisor for your team',
      'Help choosing tools, vendors, and AI workflows',
    ],
  },
];

const audiences = [
  {
    title: 'Vibe Coders',
    description:
      'You built an app with AI tools and it works. Now you need it to scale, hold up under real users, and be secure. We close that gap.',
  },
  {
    title: 'Founders',
    description:
      'You have a product and a small team. You need senior engineering help without a full-time hire. We act as your technical partner.',
  },
  {
    title: 'Businesses',
    description:
      'You want to build software with AI and do it right. We help you plan, build, and ship with sound engineering practice.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Gravitas AI',
  url: 'https://gravitasai.xyz/services',
  description:
    'Consulting and advisory for vibe coders and businesses: build, grow and scale, secure, and advisory services for AI-built software.',
  provider: {
    '@type': 'Organization',
    name: 'Gravitas AI LLC',
    url: 'https://gravitasai.xyz',
  },
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Gravitas AI Services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.name,
        description: s.tagline,
      },
    })),
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#0D1B2A] pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                Services
              </span>
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-[#F0EDE6] leading-tight mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Build it. Scale it. Secure it.
            </h1>
            <p className="text-xl text-[#8A8070] leading-relaxed mb-4">
              Consulting and advisory for vibe coders and businesses.
            </p>
            <p className="text-[#8A8070] leading-relaxed mb-10">
              AI tools get you a working app fast. They do not get you an app that survives real users, real traffic, and real attackers. We close that gap, with hands-on engineering and plain advice.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-8 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
            >
              Book a Call
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#F5F0E8] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                What We Do
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#1A2535] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Four ways we help.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.name}>
                <div className="border border-[#1A2535]/15 p-8 h-full">
                  <div className="w-6 h-px bg-[#C49A2A] mb-5" />
                  <h3
                    className="text-2xl font-bold text-[#1A2535] mb-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {service.name}
                  </h3>
                  <p className="text-[#1A2535] font-medium mb-5">{service.tagline}</p>
                  <ul className="space-y-3">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-[#8A8070] leading-relaxed">
                        <span className="mt-[11px] w-3 h-px bg-[#C49A2A] shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-[#0D1B2A] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                Who We Work With
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#F0EDE6] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Built for people who ship with AI.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((a) => (
              <StaggerItem key={a.title}>
                <div className="border border-[#F0EDE6]/10 bg-[#1A2535] p-8 h-full">
                  <div className="w-6 h-px bg-[#C49A2A] mb-5" />
                  <h3
                    className="text-xl font-bold text-[#F0EDE6] mb-3"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {a.title}
                  </h3>
                  <p className="text-[#8A8070] leading-relaxed">{a.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Studio note */}
      <section className="bg-[#F5F0E8] py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-2xl font-bold text-[#1A2535] mb-3"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Also an independent software studio
            </h2>
            <p className="text-[#8A8070] max-w-2xl mx-auto leading-relaxed">
              We build and run our own products too. That keeps our advice grounded in what works in production.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D1B2A] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2
                className="text-3xl lg:text-4xl font-bold text-[#F0EDE6] leading-tight mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Ready to make your app production-ready?
              </h2>
              <p className="text-[#8A8070] leading-relaxed text-lg mb-10">
                Tell us what you have built. We will tell you what it needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-10 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
              >
                Book a Call
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
