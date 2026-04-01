import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = createPageMetadata(
  'OpenClaw Configuration',
  'Professional setup and configuration of the OpenClaw enterprise AI orchestration platform for your business operations.',
  '/services/openclaw-setup'
);

const features = [
  {
    title: 'Platform Installation & Configuration',
    description:
      'Full OpenClaw deployment on your infrastructure or cloud environment, configured for your scale, security requirements, and existing toolchain.',
  },
  {
    title: 'Agent Orchestration Setup',
    description:
      'Configure multi-agent workflows, define task routing rules, set up agent personas, and establish the coordination logic that makes your agents work as a team.',
  },
  {
    title: 'Integration Layer',
    description:
      'Connect OpenClaw to your existing stack via native connectors and custom webhooks: CRMs, project management tools, communication platforms, databases, and APIs.',
  },
  {
    title: 'Human-in-the-Loop Configuration',
    description:
      'Define exactly when and how human reviewers are engaged. Confidence thresholds, escalation paths, approval workflows, and audit trails, all configured to your risk tolerance.',
  },
  {
    title: 'Monitoring & Alerting',
    description:
      'Set up dashboards, performance metrics, SLA monitoring, and alert routing so your team always knows how your AI agents are performing.',
  },
  {
    title: 'Admin Training',
    description:
      "Your team will be fully trained on platform administration: adding agents, adjusting configurations, reviewing logs, and managing the system independently.",
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'OpenClaw Configuration',
  provider: {
    '@type': 'Organization',
    name: 'Gravitas AI LLC',
    url: 'https://gravitasai.xyz',
  },
  description:
    'Professional setup and configuration of the OpenClaw enterprise AI orchestration platform, including agent setup, integrations, and team training.',
  areaServed: 'US',
  serviceType: 'AI Platform Configuration',
  url: 'https://gravitasai.xyz/services/openclaw-setup',
};

export default function OpenClawSetupPage() {
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
              { label: 'OpenClaw Configuration', href: '/services/openclaw-setup' },
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
              Enterprise AI Orchestration, Configured for You.
            </h1>
            <p className="text-xl text-[#8A8070] leading-relaxed mb-10">
              OpenClaw is the platform that powers serious AI operations. We handle the full setup: platform deployment, agent configuration, integrations, and team training. You get results from day one.
            </p>
            <a
              href="mailto:hello@gravitasai.xyz?subject=OpenClaw Setup Inquiry"
              className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-8 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
            >
              Book a Strategy Call
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* What is OpenClaw */}
      <section className="bg-[#F5F0E8] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#C49A2A]" />
                <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                  The Platform
                </span>
              </div>
              <h2
                className="text-3xl font-bold text-[#1A2535] mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                What is OpenClaw?
              </h2>
              <p className="text-[#8A8070] leading-relaxed text-lg mb-6">
                OpenClaw is an enterprise-grade AI agent orchestration platform built for production operations. It provides the infrastructure for running multiple AI agents in coordinated workflows, with robust error handling, audit logging, human oversight mechanisms, and the reliability that enterprise deployments require.
              </p>
              <p className="text-[#8A8070] leading-relaxed text-lg">
                We&apos;ve deployed OpenClaw extensively and know the platform inside and out. When we configure it for your business, you&apos;re getting deep operational expertise.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#C49A2A]" />
                <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                  Why Configuration Matters
                </span>
              </div>
              <h2
                className="text-3xl font-bold text-[#1A2535] mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                The difference between a demo and production.
              </h2>
              <p className="text-[#8A8070] leading-relaxed text-lg">
                OpenClaw is powerful, and that power requires proper configuration. Incorrect setup leads to agents that exceed their authority, pipelines that fail silently, and integrations that corrupt data. Our setup engagements follow a proven methodology to ensure your deployment is production-grade from day one, not an experiment that you have to fix later.
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
                Scope of Work
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-[#F0EDE6] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              A complete OpenClaw deployment.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item) => (
              <StaggerItem key={item.title}>
                <div className="border border-[#F0EDE6]/10 p-6 h-full">
                  <div className="w-6 h-px bg-[#C49A2A] mb-4" />
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
                Engagement Process
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-[#1A2535] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              From scoping to fully operational.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Technical Discovery', desc: 'We review your infrastructure, security requirements, and existing integrations to design the right OpenClaw deployment architecture.' },
              { step: '02', title: 'Platform Deployment', desc: 'We deploy and configure OpenClaw in your environment, cloud or on-premise, with security, networking, and access controls in place.' },
              { step: '03', title: 'Agent & Workflow Setup', desc: "We configure your initial agent team and workflows, connect your integrations, and validate everything in a staging environment." },
              { step: '04', title: 'Launch & Handover', desc: "We go live, monitor the first two weeks closely, and deliver full admin training and documentation for your team." },
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
              Ready to deploy OpenClaw in your organization?
            </h2>
            <p className="text-[#8A8070] mb-8 max-w-xl mx-auto leading-relaxed">
              Configuration engagements typically take 2 to 4 weeks from kickoff to launch. Contact us for a custom quote.
            </p>
            <a
              href="mailto:hello@gravitasai.xyz?subject=OpenClaw Setup Inquiry"
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
