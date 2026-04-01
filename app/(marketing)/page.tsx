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

const services = [
  {
    id: 'ai-agents',
    title: 'AI Agent Setup',
    outcome: 'Deploy a fully operational AI agent team in days, not months.',
    description:
      'We configure, test, and deploy AI agent teams using enterprise-grade orchestration. Your agents are integrated with your existing tools before they touch a single workflow.',
    href: '/services/ai-agents',
    flip: false,
    icon: (
      <div className="w-full aspect-[4/3] max-w-[400px]">
        <AgentNetworkIllustration />
      </div>
    ),
  },
  {
    id: 'ai-consulting',
    title: 'AI Consulting',
    outcome: 'Understand exactly where AI will move the needle for your business.',
    description:
      'Before you invest in infrastructure, you need a clear picture of what to automate, what to augment, and what to leave alone. We map your operations to the right AI strategy.',
    href: '/services/ai-consulting',
    flip: true,
    icon: (
      <div className="w-full aspect-[4/3] max-w-[400px]">
        <RadarAnalysisIllustration />
      </div>
    ),
  },
  {
    id: 'ai-automation',
    title: 'Automated Pipelines',
    outcome: 'Eliminate the manual work that slows your team down.',
    description:
      'We design and build custom AI pipelines that connect your data sources, tools, and workflows. Operations that once required hours of human attention run in minutes.',
    href: '/services/ai-automation',
    flip: false,
    icon: (
      <div className="w-full aspect-[4/3] max-w-[400px]">
        <PipelineFlowIllustration />
      </div>
    ),
  },
  {
    id: 'openclaw-setup',
    title: 'AI Operations Platform',
    outcome: 'One place to manage, monitor, and scale your entire AI team.',
    description:
      'Built on OpenClaw, our AI operations platform gives you Kanban-style task management for agents, real-time progress tracking, and human-in-the-loop review — all in one dashboard.',
    href: '/services/openclaw-setup',
    flip: true,
    icon: (
      <div className="w-full aspect-[4/3] max-w-[400px]">
        <DashboardWireframeIllustration />
      </div>
    ),
  },
];

const steps = [
  {
    number: '01',
    title: 'Strategy Call',
    description: 'We learn your business, your team, and where AI can deliver real results — not just demos.',
  },
  {
    number: '02',
    title: 'Architecture & Setup',
    description: 'We design the right agent architecture and configure everything before any automation goes live.',
  },
  {
    number: '03',
    title: 'Launch & Train',
    description: "We deploy your AI team, train your staff on oversight and review, and monitor the first 30 days closely.",
  },
  {
    number: '04',
    title: 'Scale & Optimize',
    description: 'Once the system is proven, we expand it — more agents, more pipelines, more leverage for your business.',
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
    'Gravitas AI deploys and manages AI agent teams for businesses — handling setup, configuration, and ongoing operations.',
  founder: {
    '@type': 'Person',
    name: 'Chris Graves',
    jobTitle: 'Principal Software Engineer',
  },
  areaServed: 'US',
  serviceType: ['AI Agent Deployment', 'AI Consulting', 'Workflow Automation', 'AI Operations'],
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
                  AI Operations
                </span>
              </div>
              <h1
                className="text-[56px] lg:text-[72px] leading-[1.08] font-bold text-[#F0EDE6] mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Your AI Operations Team, Professionally Deployed.
              </h1>
              <p className="text-lg text-[#8A8070] leading-relaxed mb-10 max-w-xl">
                Gravitas AI deploys and manages AI agent teams for your business — handling the setup, configuration, and ongoing operations so you can focus on outcomes, not infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:hello@gravitasai.xyz"
                  className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-8 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
                >
                  Book a Strategy Call
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center text-[#F0EDE6] font-medium px-8 py-4 border border-[#F0EDE6]/20 hover:border-[#F0EDE6]/40 transition-colors duration-200 text-sm"
                >
                  See How It Works →
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

      {/* SERVICES OVERVIEW — beige */}
      <section className="bg-[#F5F0E8] py-24 lg:py-32">
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
              What We Do
            </h2>
          </AnimatedSection>

          <div className="space-y-20 lg:space-y-28">
            {services.map((service) => (
              <AnimatedSection key={service.id}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    service.flip ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  <div className={service.flip ? 'lg:col-start-2' : ''}>
                    {service.icon}
                  </div>
                  <div className={service.flip ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <p className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium mb-3">
                      Service
                    </p>
                    <h3
                      className="text-3xl font-bold text-[#1A2535] mb-3 leading-tight"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-lg font-medium text-[#1A2535] mb-4 leading-snug">
                      {service.outcome}
                    </p>
                    <p className="text-[#8A8070] leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <a
                      href={service.href}
                      className="inline-flex items-center text-sm font-medium text-[#1A2535] hover:text-[#C49A2A] transition-colors duration-200 group"
                    >
                      Learn More
                      <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM TEASER — navy */}
      <section className="bg-[#0D1B2A] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-[#C49A2A]" />
                <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                  Platform
                </span>
              </div>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#F0EDE6] leading-tight mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Manage Your AI Team Like a Pro
              </h2>
              <p className="text-[#8A8070] leading-relaxed mb-8 text-lg">
                A project management platform built for AI operations. Assign tasks to agents, track progress, review outputs, and keep humans in the loop — all in one place.
              </p>
              <a
                href="mailto:hello@gravitasai.xyz?subject=Platform Early Access"
                className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-8 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
              >
                Request Early Access
              </a>
            </AnimatedSection>

            {/* Platform UI mockup */}
            <AnimatedSection delay={0.2} className="hidden lg:block">
              <div className="border border-[#F0EDE6]/10 bg-[#1A2535] p-6">
                {/* Mock header bar */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#F0EDE6]/10">
                  <div className="w-2 h-2 rounded-full bg-[#C49A2A]" />
                  <div className="h-4 w-24 bg-[#F0EDE6]/10" />
                  <div className="ml-auto h-4 w-16 bg-[#F0EDE6]/5" />
                </div>
                {/* Mock kanban */}
                <div className="grid grid-cols-3 gap-3">
                  {['To Do', 'In Progress', 'Review'].map((col, ci) => (
                    <div key={col} className="space-y-2">
                      <div className="flex items-center gap-1 mb-2">
                        <div
                          className="w-1.5 h-1.5"
                          style={{
                            background: ci === 1 ? '#C49A2A' : '#F0EDE640',
                          }}
                        />
                        <span className="text-[#8A8070] text-xs">{col}</span>
                      </div>
                      {Array.from({ length: ci === 1 ? 3 : 2 }).map((_, i) => (
                        <div
                          key={i}
                          className="p-2 border"
                          style={{
                            borderColor:
                              ci === 1 && i === 0
                                ? 'rgba(196,154,42,0.3)'
                                : 'rgba(240,237,230,0.08)',
                            background:
                              ci === 1 && i === 0
                                ? 'rgba(196,154,42,0.05)'
                                : 'rgba(240,237,230,0.03)',
                          }}
                        >
                          <div className="h-2 w-3/4 bg-[#F0EDE6]/20 mb-1.5" />
                          <div className="h-2 w-1/2 bg-[#F0EDE6]/10" />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
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
              className="text-4xl lg:text-5xl font-bold text-[#1A2535] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Built by Engineers. Run for Business.
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="border border-[#1A2535]/15 p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#0D1B2A] flex-shrink-0 flex items-center justify-center">
                    <span className="text-[#C49A2A] font-bold text-xl" style={{ fontFamily: 'var(--font-serif)' }}>
                      CG
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A2535] mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                      Chris Graves
                    </h3>
                    <p className="text-[#8A8070] text-sm mb-4">Founder & Principal Software Engineer</p>
                    <p className="text-[#1A2535] leading-relaxed">
                      Chris has spent years building AI agent systems for enterprise organizations, working across the full stack from architecture to deployment. He founded Gravitas AI to bring that same engineering rigor to businesses of every size.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'US-Based Team', desc: 'All work done by our team, in the US.' },
                  { label: 'Dedicated Support', desc: 'Direct access to our engineering team — no ticket queues.' },
                  { label: 'Security-First Architecture', desc: 'Isolated environments, encrypted data, and full audit trails by default.' },
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
              Ready to operationalize AI in your business?
            </h2>
            <a
              href="mailto:hello@gravitasai.xyz"
              className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-10 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
            >
              Book a Strategy Call
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* HOW IT WORKS — beige */}
      <section id="how-it-works" className="bg-[#F5F0E8] py-24 lg:py-32">
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
