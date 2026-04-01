import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = createPageMetadata(
  'AI Consulting',
  'Strategic AI guidance from engineers who have built AI systems at enterprise scale. We help you identify where AI delivers ROI and how to measure it.',
  '/services/ai-consulting'
);

const outcomes = [
  {
    title: 'Where AI Fits Your Business',
    description:
      'We analyze your operations to identify the highest-value automation opportunities: the ones that reduce costs, increase throughput, or improve quality without adding headcount.',
  },
  {
    title: 'What to Automate First',
    description:
      'Not everything is worth automating. We prioritize based on task volume, error rates, cost per decision, and technical feasibility, giving you a clear roadmap with an expected return on each initiative.',
  },
  {
    title: 'How to Measure ROI',
    description:
      'We define KPIs before anything is built. You get a measurement framework that shows what the AI is doing, how it compares to the baseline, and when it has paid for itself.',
  },
  {
    title: 'Build vs. Buy Analysis',
    description:
      'The AI tooling market is crowded. We evaluate which platforms, models, and services are right for your use case, and when building custom is worth the investment.',
  },
  {
    title: 'Risk & Compliance Review',
    description:
      'AI in regulated industries needs careful handling. We assess your data flows, identify compliance risks, and ensure your AI strategy aligns with your legal and security obligations.',
  },
  {
    title: 'Team Readiness Assessment',
    description:
      "Your team needs to work alongside AI agents: reviewing outputs, handling escalations, and maintaining oversight. We assess readiness and create a change management plan that sticks.",
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Consulting',
  provider: {
    '@type': 'Organization',
    name: 'Gravitas AI LLC',
    url: 'https://gravitasai.xyz',
  },
  description:
    'Strategic AI consulting services to identify automation opportunities, define ROI metrics, and build an actionable AI roadmap for your business.',
  areaServed: 'US',
  serviceType: 'AI Strategy Consulting',
  url: 'https://gravitasai.xyz/services/ai-consulting',
};

export default function AIConsultingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#0D1B2A] pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/ai-agents' },
              { label: 'AI Consulting', href: '/services/ai-consulting' },
            ]}
          />
          <AnimatedSection className="max-w-3xl mt-6">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                Service
              </span>
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-[#F0EDE6] leading-tight mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Strategic AI Guidance from Engineers Who&apos;ve Done It.
            </h1>
            <p className="text-xl text-[#8A8070] leading-relaxed mb-10">
              Before you invest in AI infrastructure, you need a clear strategy. We bring the engineering depth and business judgment to tell you exactly what to build, buy, or skip.
            </p>
            <a
              href="mailto:hello@gravitasai.xyz?subject=AI Consulting Inquiry"
              className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-8 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
            >
              Book a Strategy Call
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="bg-[#F5F0E8] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#C49A2A]" />
                <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                  The Problem
                </span>
              </div>
              <h2
                className="text-3xl font-bold text-[#1A2535] mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Most AI projects fail before they start.
              </h2>
              <p className="text-[#8A8070] leading-relaxed text-lg">
                Companies invest in AI tools without a clear strategy for where they fit or how to measure success. They end up with expensive subscriptions to platforms that don&apos;t integrate, agents that can&apos;t be trusted with real decisions, and teams that don&apos;t know how to work alongside AI effectively.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#C49A2A]" />
                <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                  Our Approach
                </span>
              </div>
              <h2
                className="text-3xl font-bold text-[#1A2535] mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Strategy before spend.
              </h2>
              <p className="text-[#8A8070] leading-relaxed text-lg">
                Our consulting engagement starts with a deep audit of your operations, data, and team. We come back with a prioritized roadmap: not a generic framework, but a specific plan for your business with expected timelines, costs, and returns. You leave with clarity on exactly what to do next.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-[#0D1B2A] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                What You Get
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-[#F0EDE6] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              A complete AI strategy, not just recommendations.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((item, i) => (
              <StaggerItem key={item.title}>
                <div className="border border-[#F0EDE6]/10 p-6 h-full">
                  <div className="text-[#C49A2A] text-xs font-medium uppercase tracking-widest mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3
                    className="text-lg font-bold text-[#F0EDE6] mb-3"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#8A8070] text-sm leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#F5F0E8] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                Engagement Model
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-[#1A2535] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              How a consulting engagement works.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Operations Audit', desc: 'We review your workflows, data, team structure, and existing tools, looking for automation opportunities and risk areas.' },
              { step: '02', title: 'Opportunity Mapping', desc: "We score each automation opportunity by impact, feasibility, and speed-to-value, and give you a prioritized list with the reasoning behind it." },
              { step: '03', title: 'Strategy Delivery', desc: "You receive a written AI strategy document: what to build, what to buy, what to skip, and why. With a 90-day action plan." },
              { step: '04', title: 'Advisory Retainer', desc: "Ongoing monthly sessions to review progress, adjust the roadmap, and provide technical guidance as you execute." },
            ].map((item) => (
              <AnimatedSection key={item.step}>
                <div className="border border-[#1A2535]/15 p-6 h-full">
                  <div className="text-[#C49A2A] text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold text-[#1A2535] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#8A8070] leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
              Get clarity on your AI strategy.
            </h2>
            <p className="text-[#8A8070] mb-8 max-w-xl mx-auto leading-relaxed">
              Start with a 45-minute strategy call. We&apos;ll identify three automation opportunities in your business before we hang up.
            </p>
            <a
              href="mailto:hello@gravitasai.xyz?subject=AI Consulting Inquiry"
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
