import type { Metadata } from 'next';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { baseMetadata } from '@/lib/metadata';
import { AgentNetworkIllustration } from '@/components/illustrations/AgentNetworkIllustration';
import { RadarAnalysisIllustration } from '@/components/illustrations/RadarAnalysisIllustration';
import { PipelineFlowIllustration } from '@/components/illustrations/PipelineFlowIllustration';
import { DashboardWireframeIllustration } from '@/components/illustrations/DashboardWireframeIllustration';
import { HeroConstellationIllustration } from '@/components/illustrations/HeroConstellationIllustration';

export const metadata: Metadata = {
  ...baseMetadata,
};

const capabilities = [
  {
    id: 'native-apps',
    title: 'Native Mac & iOS Apps',
    outcome: 'Apps that feel at home on Apple platforms.',
    description:
      'We build with native frameworks, not wrappers. Fast launch, low memory, and interfaces that follow platform conventions instead of fighting them. Ducktate, our dictation app for Mac, is built this way.',
    flip: false,
    icon: (
      <div className="w-full aspect-[4/3] max-w-[400px]">
        <DashboardWireframeIllustration />
      </div>
    ),
  },
  {
    id: 'saas-products',
    title: 'SaaS Products',
    outcome: 'Full-stack software, from first schema to subscriptions.',
    description:
      'We design and build complete SaaS products: the data model, the API, the billing, and the interface. Every layer is engineered to scale with the people who use it.',
    flip: true,
    icon: (
      <div className="w-full aspect-[4/3] max-w-[400px]">
        <PipelineFlowIllustration />
      </div>
    ),
  },
  {
    id: 'ai-features',
    title: 'AI-Powered Features',
    outcome: 'Practical AI, woven into the product.',
    description:
      'Transcription, cleanup, summarization, automation. We use AI where it makes the product genuinely better and leave it out where it would just be a demo. The intelligence serves the app, not the other way around.',
    flip: false,
    icon: (
      <div className="w-full aspect-[4/3] max-w-[400px]">
        <AgentNetworkIllustration />
      </div>
    ),
  },
  {
    id: 'privacy-engineering',
    title: 'Privacy-First Engineering',
    outcome: 'On-device wherever possible. Clear boundaries everywhere else.',
    description:
      'We treat trust as a feature. We process data on-device wherever possible and draw clear boundaries everywhere else. Every product we ship is designed with the same discipline about where data lives and why.',
    flip: true,
    icon: (
      <div className="w-full aspect-[4/3] max-w-[400px]">
        <RadarAnalysisIllustration />
      </div>
    ),
  },
];

const steps = [
  {
    number: '01',
    title: 'Design',
    description: 'Every app starts as a real problem we have felt ourselves. We design the smallest product that solves it completely.',
  },
  {
    number: '02',
    title: 'Build',
    description: 'Native frameworks, test-first engineering, and production standards from the first commit. We build things that last.',
  },
  {
    number: '03',
    title: 'Polish',
    description: 'We refine every interaction until the app feels effortless. The details are not extra work. They are the work.',
  },
  {
    number: '04',
    title: 'Ship & Iterate',
    description: 'Real releases on real schedules. We ship, listen to users, and keep improving. An app is never finished, only better.',
  },
];

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Gravitas AI',
  legalName: 'Gravitas AI LLC',
  url: 'https://gravitasai.xyz',
  email: 'hello@gravitasai.xyz',
  description:
    'Gravitas AI is a software studio that designs, builds, and ships SaaS products and native apps, including Ducktate, a dictation app for macOS.',
  areaServed: 'US',
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* HERO — navy */}
      <section className="bg-[#0D1B2A] pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-6 h-px bg-[#C49A2A]" />
                <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                  Software Studio
                </span>
              </div>
              <h1
                className="text-[56px] lg:text-[72px] leading-[1.08] font-bold text-[#F0EDE6] mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                We Design, Build, and Ship Apps.
              </h1>
              <p className="text-lg text-[#8A8070] leading-relaxed mb-10 max-w-xl">
                Gravitas AI is an independent software studio. We build SaaS products and native apps in-house, from first sketch to the App Store.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/apps"
                  className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-8 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
                >
                  See Our Apps
                </a>
                <a
                  href="#how-we-build"
                  className="inline-flex items-center justify-center text-[#F0EDE6] font-medium px-8 py-4 border border-[#F0EDE6]/20 hover:border-[#F0EDE6]/40 transition-colors duration-200 text-sm"
                >
                  See How We Build →
                </a>
              </div>
            </AnimatedSection>

            {/* Hero constellation */}
            <AnimatedSection delay={0.2} className="hidden lg:flex items-center justify-center">
              <div className="relative w-[440px] h-[440px] opacity-70">
                <HeroConstellationIllustration />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD — beige */}
      <section className="bg-[#F5F0E8] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                What We Build
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#1A2535] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              From Idea to the App Store.
            </h2>
          </AnimatedSection>

          <div className="space-y-20 lg:space-y-28">
            {capabilities.map((capability) => (
              <AnimatedSection key={capability.id}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    capability.flip ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  <div className={capability.flip ? 'lg:col-start-2' : ''}>
                    {capability.icon}
                  </div>
                  <div className={capability.flip ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <p className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium mb-3">
                      Capability
                    </p>
                    <h3
                      className="text-3xl font-bold text-[#1A2535] mb-3 leading-tight"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {capability.title}
                    </h3>
                    <p className="text-lg font-medium text-[#1A2535] mb-4 leading-snug">
                      {capability.outcome}
                    </p>
                    <p className="text-[#8A8070] leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPS — navy */}
      <section className="bg-[#0D1B2A] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                Our Apps
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#F0EDE6] leading-tight mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Products We Build and Maintain
            </h2>
            <p className="text-[#8A8070] leading-relaxed text-lg max-w-2xl">
              Everything we ship is designed, engineered, and supported in-house. Here is what is live today, with more in development.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StaggerItem>
              <div className="border border-[#F0EDE6]/10 p-8 h-full">
                <div className="w-6 h-px bg-[#C49A2A] mb-5" />
                <h3
                  className="text-xl font-bold text-[#F0EDE6] mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Ducktate
                </h3>
                <p className="text-[#8A8070] leading-relaxed mb-6">
                  Push-to-talk dictation for Mac. On-device transcription, AI cleanup, and text typed straight into any app.
                </p>
                <a
                  href="https://getrubberduck.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-[#F0EDE6] hover:text-[#C49A2A] transition-colors duration-200 group"
                >
                  Get Ducktate
                  <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border border-[#F0EDE6]/10 p-8 h-full">
                <div className="w-6 h-px bg-[#F0EDE6]/20 mb-5" />
                <h3
                  className="text-xl font-bold text-[#8A8070] mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  In Development
                </h3>
                <p className="text-[#8A8070] leading-relaxed">
                  More apps are in the works. We announce products when they are ready to use, not before.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CREDIBILITY — beige */}
      <section className="bg-[#F5F0E8] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                About Us
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#1A2535] leading-tight mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              An Independent Software Studio.
            </h2>
            <p className="text-[#8A8070] leading-relaxed text-lg max-w-2xl">
              Gravitas AI LLC builds its own products with enterprise engineering discipline. Small by design, opinionated about quality, and accountable for everything we ship.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Built In-House', desc: 'Design, engineering, and support under one roof. No detail is someone else’s problem.' },
                { label: 'Privacy-First', desc: 'On-device processing wherever possible. Your data is yours.' },
                { label: 'Direct Support', desc: 'Questions go straight to the people who built the app. No ticket queues.' },
              ].map((badge) => (
                <div key={badge.label} className="border border-[#1A2535]/15 p-6">
                  <div className="w-6 h-px bg-[#C49A2A] mb-4" />
                  <h4 className="text-sm font-semibold text-[#1A2535] mb-2">{badge.label}</h4>
                  <p className="text-xs text-[#8A8070] leading-relaxed">{badge.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA STRIP — navy */}
      <section className="bg-[#0D1B2A] py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#F0EDE6] mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Questions about our apps? We read every message.
            </h2>
            <a
              href="mailto:hello@gravitasai.xyz"
              className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-10 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
            >
              Get in Touch
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* HOW WE BUILD — beige */}
      <section id="how-we-build" className="bg-[#F5F0E8] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                Process
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#1A2535] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              How Gravitas AI Builds
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="relative">
                  <div className="text-[#C49A2A] text-5xl font-bold mb-4 leading-none" style={{ fontFamily: 'var(--font-serif)' }}>
                    {step.number}
                  </div>
                  <h3
                    className="text-xl font-bold text-[#1A2535] mb-3"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#8A8070] leading-relaxed text-sm">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

    </>
  );
}
