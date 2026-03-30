import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = createPageMetadata(
  'AI Agent Setup',
  'Deploy AI agent teams configured for your business. Gravitas AI handles setup, testing, integration, and 30 days of support — so your agents are operational from day one.',
  '/services/ai-agents'
);

const included = [
  'Agent configuration & deployment',
  'OpenClaw platform setup',
  'Integration with your existing tools (CRM, Slack, email, ticketing)',
  'End-to-end testing & QA before launch',
  'Documentation for your team',
  '30-day post-launch support',
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'We map your current workflows, identify where agent automation delivers the highest value, and define clear success metrics for your deployment.',
  },
  {
    step: '02',
    title: 'Architecture',
    description:
      'We design the agent topology — which tasks each agent handles, how they hand off work, and where human review is required.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'We configure your agents on OpenClaw, connect your integrations, and build the supporting pipelines that route data and decisions.',
  },
  {
    step: '04',
    title: 'Deploy',
    description:
      'We launch in a controlled environment first, validate outputs, then move to production with a clear rollout plan.',
  },
  {
    step: '05',
    title: 'Support',
    description:
      'For 30 days post-launch, we monitor performance, tune agent behavior, and train your team on oversight and review.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Agent Setup',
  provider: {
    '@type': 'Organization',
    name: 'Gravitas AI LLC',
    url: 'https://gravitasai.xyz',
  },
  description:
    'Professional deployment of AI agent teams for business operations. Includes configuration, integration, testing, and 30-day support.',
  areaServed: 'US',
  serviceType: 'AI Agent Deployment',
  url: 'https://gravitasai.xyz/services/ai-agents',
};

export default function AIAgentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero — navy */}
      <section className="bg-[#0D1B2A] pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services/ai-agents' },
              { label: 'AI Agent Setup', href: '/services/ai-agents' },
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
              Deploy AI Agent Teams. Operate at Scale.
            </h1>
            <p className="text-xl text-[#8A8070] leading-relaxed mb-10">
              AI agents that are actually configured for your operations — not demos, not prototypes. We handle every step from architecture to launch.
            </p>
            <a
              href="mailto:hello@gravitasai.xyz?subject=AI Agent Setup Inquiry"
              className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-8 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
            >
              Book a Strategy Call
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem / Solution — beige */}
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
                Hiring more people isn&apos;t always the answer.
              </h2>
              <p className="text-[#8A8070] leading-relaxed text-lg">
                AI agents can handle repetitive, high-volume tasks — data entry, customer triage, content processing, report generation — but only if they&apos;re properly configured and integrated. Most AI agent tools require significant technical expertise to deploy correctly. Getting it wrong means agents that hallucinate, break workflows, or simply don&apos;t deliver business value.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#C49A2A]" />
                <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                  Our Solution
                </span>
              </div>
              <h2
                className="text-3xl font-bold text-[#1A2535] mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Enterprise-grade agent deployment, done right.
              </h2>
              <p className="text-[#8A8070] leading-relaxed text-lg">
                We deploy and configure AI agent teams using OpenClaw, the enterprise-grade agent orchestration platform. Your agents are configured for your specific use cases, tested against your real data, integrated with your existing tools, and ready to operate before they touch production — with a human review process in place from day one.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What's included — navy */}
      <section className="bg-[#0D1B2A] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#C49A2A]" />
                <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                  What&apos;s Included
                </span>
              </div>
              <h2
                className="text-4xl font-bold text-[#F0EDE6] mb-8 leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Everything you need to go live.
              </h2>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-5 h-5 border border-[#C49A2A]/50 flex-shrink-0 mt-0.5 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-[#C49A2A]" />
                    </div>
                    <span className="text-[#F0EDE6] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="hidden lg:block">
              <div className="border border-[#F0EDE6]/10 p-8 relative">
                <div className="text-[#F0EDE6]/5 text-8xl font-bold absolute top-4 right-6" style={{ fontFamily: 'var(--font-serif)' }}>
                  AI
                </div>
                <div className="relative space-y-4">
                  {['Configure', 'Test', 'Integrate', 'Deploy', 'Monitor'].map((label, i) => (
                    <div key={label} className="flex items-center gap-4">
                      <div
                        className="w-8 h-8 flex-shrink-0 flex items-center justify-center text-xs font-medium"
                        style={{
                          background: i === 3 ? '#C49A2A20' : '#F0EDE608',
                          border: i === 3 ? '1px solid #C49A2A40' : '1px solid #F0EDE610',
                          color: i === 3 ? '#C49A2A' : '#F0EDE6',
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div className="flex-1 h-px" style={{ background: i === 3 ? '#C49A2A40' : '#F0EDE610' }} />
                      <span className="text-sm" style={{ color: i === 3 ? '#C49A2A' : '#8A8070' }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process — beige */}
      <section className="bg-[#F5F0E8] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                Our Process
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-[#1A2535] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              From discovery to deployed, in weeks.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((step) => (
              <StaggerItem key={step.step}>
                <div className="border border-[#1A2535]/15 p-6 h-full">
                  <div className="text-[#C49A2A] text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-[#1A2535] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#8A8070] leading-relaxed">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA — navy */}
      <section className="bg-[#0D1B2A] py-24 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#F0EDE6] mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Ready to deploy your AI agent team?
            </h2>
            <p className="text-[#8A8070] mb-8 max-w-xl mx-auto leading-relaxed">
              Start with a strategy call. We&apos;ll map out exactly what agents would do in your business and what deployment looks like.
            </p>
            <a
              href="mailto:hello@gravitasai.xyz?subject=AI Agent Setup Inquiry"
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
