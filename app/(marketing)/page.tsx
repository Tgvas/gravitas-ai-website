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
    id: 'build',
    title: 'Build',
    outcome: 'From idea or prototype to a production-grade app.',
    description:
      'Start with a sketch, a working prototype, or a rough AI-generated draft. We help you turn it into software that is tested, maintainable, and ready for real users.',
    flip: false,
    icon: (
      <div className="w-full aspect-[4/3] max-w-[400px]">
        <DashboardWireframeIllustration />
      </div>
    ),
  },
  {
    id: 'grow-scale',
    title: 'Grow & Scale',
    outcome: 'Software that holds up as your user base grows.',
    description:
      'We tune performance, clean up architecture, and set up infrastructure that can take more traffic. Your app gets ready for growth without a rewrite.',
    flip: true,
    icon: (
      <div className="w-full aspect-[4/3] max-w-[400px]">
        <PipelineFlowIllustration />
      </div>
    ),
  },
  {
    id: 'secure',
    title: 'Secure',
    outcome: 'Find the holes before someone else does.',
    description:
      'We review security, auth, data handling, secrets, and dependency risk. AI-generated code often ships with the same common holes, and we know where to look.',
    flip: false,
    icon: (
      <div className="w-full aspect-[4/3] max-w-[400px]">
        <RadarAnalysisIllustration />
      </div>
    ),
  },
  {
    id: 'advisory',
    title: 'Advisory',
    outcome: 'An experienced technical partner on your side.',
    description:
      'Code reviews, architecture guidance, and fractional CTO support. Get clear answers on what to build, what to fix, and what to leave alone.',
    flip: true,
    icon: (
      <div className="w-full aspect-[4/3] max-w-[400px]">
        <AgentNetworkIllustration />
      </div>
    ),
  },
];

const vibeCoderPoints = [
  'A code and architecture review that shows what will break first.',
  'A security pass for auth, secrets, and user data.',
  'Fixes for slow pages, fragile code, and weak spots in your database.',
  'A plan to scale on your current stack, so you do not start over.',
];

const businessPoints = [
  'Plan the product with an experienced engineer before you spend on code.',
  'Build with AI tools and human review on every important decision.',
  'Avoid costly mistakes in architecture, vendors, and security.',
  'Hand off software your team can run and extend.',
];

const steps = [
  {
    number: '01',
    title: 'Assess',
    description: 'We read your code, talk to you about your goals, and find the risks. You get a clear picture of where you stand.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We turn findings into a short, ranked plan. You see what to do first, what it costs, and what can wait.',
  },
  {
    number: '03',
    title: 'Build / Fix',
    description: 'We build the missing pieces and fix the weak ones, or guide your team while they do it. Changes are tested and documented.',
  },
  {
    number: '04',
    title: 'Grow',
    description: 'We help you prepare for more users and more features. Your app stays secure and stable as it grows.',
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
    'Gravitas AI is a consulting and advisory firm that helps vibe coders and businesses build, scale, and secure their apps. It is also an independent software studio.',
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
                  Consulting &amp; Advisory
                </span>
              </div>
              <h1
                className="text-[56px] lg:text-[72px] leading-[1.08] font-bold text-[#F0EDE6] mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Build It. Scale It. Secure It.
              </h1>
              <p className="text-lg text-[#8A8070] leading-relaxed mb-10 max-w-xl">
                Gravitas AI helps vibe coders turn AI-built apps into products that hold up under real users. We also help businesses build software with AI, the right way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-8 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
                >
                  Book a Call
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center text-[#F0EDE6] font-medium px-8 py-4 border border-[#F0EDE6]/20 hover:border-[#F0EDE6]/40 transition-colors duration-200 text-sm"
                >
                  See Our Services →
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

      {/* SERVICES — beige */}
      <section id="services" className="bg-[#F5F0E8] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16 lg:mb-20">
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
              Four Ways We Help.
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
                      Service
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

      {/* WHO WE HELP — navy */}
      <section className="bg-[#0D1B2A] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                Who We Help
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#F0EDE6] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Built With AI. Ready for the Real World.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: 'For Vibe Coders',
                intro:
                  'You shipped something with Cursor, Claude Code, Lovable, Bolt, or Replit. Now it needs real users, real traffic, and real data. We review it, harden it, and help it scale without a rewrite.',
                points: vibeCoderPoints,
              },
              {
                label: 'For Businesses',
                intro:
                  'You want to build software with AI. We plan and build it with you, alongside an experienced engineer, so you move fast and avoid costly mistakes.',
                points: businessPoints,
              },
            ].map((audience) => (
              <StaggerItem key={audience.label}>
                <div className="border border-[#F0EDE6]/10 p-8 h-full">
                  <div className="w-6 h-px bg-[#C49A2A] mb-5" />
                  <h3
                    className="text-2xl font-bold text-[#F0EDE6] mb-3"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {audience.label}
                  </h3>
                  <p className="text-[#8A8070] leading-relaxed mb-6">{audience.intro}</p>
                  <ul className="space-y-3">
                    {audience.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-[#F0EDE6]/80 leading-relaxed">
                        <span className="text-[#C49A2A]">→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
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
              Also an Independent Software Studio.
            </h2>
            <p className="text-[#8A8070] leading-relaxed text-lg max-w-2xl">
              We also design and ship our own products. Our advice comes from shipping real software, not from theory.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Shipped, Not Theory', desc: 'We run our own products in production, so we know what breaks and what lasts.' },
                { label: 'Security-Minded', desc: 'We treat trust as a feature. Data and access get careful thought from day one.' },
                { label: 'Direct Access', desc: 'You talk to the engineers doing the work. No ticket queues.' },
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
              Want to talk through your app or project? We read every message.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-10 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
              >
                Book a Call
              </a>
              <a
                href="mailto:hello@gravitasai.xyz"
                className="inline-flex items-center justify-center text-[#F0EDE6] font-medium px-10 py-4 border border-[#F0EDE6]/20 hover:border-[#F0EDE6]/40 transition-colors duration-200 text-sm"
              >
                Email Us
              </a>
            </div>
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
              How Gravitas AI Works
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
