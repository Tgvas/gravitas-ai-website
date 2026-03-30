import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = createPageMetadata(
  'About',
  'Gravitas AI was founded by Chris Graves, a Principal Software Engineer with deep experience building AI agent systems at enterprise scale.',
  '/about'
);

const values = [
  {
    title: 'Outcomes Over Outputs',
    description:
      "We don't measure success by agents deployed or pipelines built. We measure it by the business results you get — cost reduction, throughput increase, hours reclaimed.",
  },
  {
    title: 'Engineering Rigor',
    description:
      'Every deployment follows production engineering standards: testing, staging environments, rollout plans, and monitoring. We build things that last.',
  },
  {
    title: 'Business Clarity',
    description:
      "AI is complex. Business strategy shouldn't be. We translate technical capabilities into plain-language roadmaps that any stakeholder can understand and approve.",
  },
  {
    title: 'Long-Term Partnership',
    description:
      "We're not a one-and-done vendor. Our best client relationships are ongoing — we grow with you as your AI operations mature and your ambitions expand.",
  },
];

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Chris Graves',
  jobTitle: 'Principal Software Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Gravitas AI LLC',
  },
  description:
    'Founder of Gravitas AI and developer of the OpenClaw enterprise AI orchestration platform. Background in building production AI agent systems for enterprise organizations.',
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Gravitas AI',
  legalName: 'Gravitas AI LLC',
  url: 'https://gravitasai.xyz',
  email: 'hello@gravitasai.xyz',
  foundingDate: '2024',
  founder: {
    '@type': 'Person',
    name: 'Chris Graves',
  },
  description:
    'Gravitas AI deploys and manages AI agent teams for businesses — handling setup, configuration, and ongoing operations.',
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, orgSchema]) }}
      />

      {/* Hero */}
      <section className="bg-[#0D1B2A] pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                About
              </span>
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-[#F0EDE6] leading-tight mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              We Build AI Teams That Work Like Yours.
            </h1>
            <p className="text-xl text-[#8A8070] leading-relaxed">
              Gravitas AI was founded on a simple belief: businesses shouldn&apos;t have to hire an AI team to get the benefits of AI. We bring the engineering, the platform, and the operational expertise — so you get the outcomes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#F5F0E8] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#C49A2A]" />
                <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                  Our Story
                </span>
              </div>
              <h2
                className="text-3xl font-bold text-[#1A2535] mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Built from enterprise experience, designed for every business.
              </h2>
              <div className="space-y-4 text-[#8A8070] leading-relaxed">
                <p>
                  Gravitas AI grew out of years of building AI agent systems for large organizations. Chris Graves spent his career as a Principal Software Engineer at the intersection of AI and enterprise operations — building systems that had to work at scale, under real business constraints, with real consequences for failure.
                </p>
                <p>
                  That experience produced OpenClaw, an enterprise-grade AI orchestration platform, and eventually Gravitas AI — a company built to bring that same level of engineering rigor and operational expertise to businesses that couldn&apos;t justify a full AI team.
                </p>
                <p>
                  Most businesses know they need AI but don&apos;t know where to start. We do the heavy lifting — architecture, deployment, operations — so you get the outcomes without the overhead.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#C49A2A]" />
                <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                  Our Mission
                </span>
              </div>
              <h2
                className="text-3xl font-bold text-[#1A2535] mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Operationalize AI for every serious business.
              </h2>
              <div className="space-y-4 text-[#8A8070] leading-relaxed">
                <p>
                  AI is the most significant operational leverage available to businesses today. But the gap between &ldquo;AI demo&rdquo; and &ldquo;AI operations&rdquo; is wide — and most companies fall into it.
                </p>
                <p>
                  Our mission is to close that gap. We handle the complexity so our clients can focus on the outcomes: lower costs, higher throughput, better decisions, and teams that spend their time on work that actually requires human judgment.
                </p>
              </div>

              <div className="mt-8 border border-[#1A2535]/15 p-6">
                <div className="w-6 h-px bg-[#C49A2A] mb-4" />
                <p className="text-[#1A2535] font-medium leading-relaxed italic" style={{ fontFamily: 'var(--font-serif)' }}>
                  &ldquo;Most businesses know they need AI but don&apos;t know where to start. We do the heavy lifting — architecture, deployment, operations — so you get the outcomes without the overhead.&rdquo;
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-[#0D1B2A] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                Founder
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-[#F0EDE6] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              The person behind the platform.
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-12">
            <AnimatedSection className="lg:col-span-1">
              <div className="border border-[#F0EDE6]/10 p-8">
                <div className="w-20 h-20 bg-[#1A2535] border border-[#C49A2A]/30 flex items-center justify-center mb-6">
                  <span className="text-[#C49A2A] text-2xl font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
                    CG
                  </span>
                </div>
                <h3
                  className="text-2xl font-bold text-[#F0EDE6] mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Chris Graves
                </h3>
                <p className="text-[#C49A2A] text-sm font-medium mb-6">Founder & Principal Software Engineer</p>
                <div className="space-y-2">
                  {[
                    'Principal Software Engineer',
                    'Enterprise AI Systems',
                    'OpenClaw Developer',
                    'AI Agent Architecture',
                    'US-Based',
                  ].map((tag) => (
                    <div key={tag} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-[#C49A2A]" />
                      <span className="text-sm text-[#8A8070]">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="lg:col-span-2">
              <div className="space-y-5 text-[#8A8070] leading-relaxed">
                <p className="text-lg text-[#F0EDE6]">
                  Chris Graves is a Principal Software Engineer with extensive experience building AI agent systems for enterprise organizations.
                </p>
                <p>
                  His background spans the full engineering stack — from AI model selection and prompt engineering to distributed systems, API design, and production operations. He has built agent systems that operate at scale in regulated industries, handling sensitive data and high-stakes decisions with appropriate oversight and auditability.
                </p>
                <p>
                  Chris is the developer behind OpenClaw, the enterprise AI orchestration platform that powers Gravitas AI&apos;s deployments. He founded Gravitas AI to bring enterprise-grade AI operations to businesses that couldn&apos;t build it themselves — providing the architecture, implementation, and ongoing management that makes AI actually work in production.
                </p>
                <p>
                  He believes the future of business operations involves AI agents handling the high-volume, rule-based work — freeing human teams to focus on judgment, relationships, and creativity. Gravitas AI exists to make that transition as smooth and practical as possible.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F5F0E8] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                How We Work
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-[#1A2535] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              The principles that guide every engagement.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="border border-[#1A2535]/15 p-8 h-full">
                  <div className="w-6 h-px bg-[#C49A2A] mb-5" />
                  <h3
                    className="text-xl font-bold text-[#1A2535] mb-3"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-[#8A8070] leading-relaxed">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D1B2A] py-24 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#F0EDE6] mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Work with a team that&apos;s done this at scale.
            </h2>
            <p className="text-[#8A8070] mb-8 max-w-xl mx-auto leading-relaxed">
              Book a strategy call and talk directly with the engineers who will be building your system.
            </p>
            <a
              href="mailto:hello@gravitasai.xyz"
              className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-10 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
            >
              Book a Strategy Call
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
