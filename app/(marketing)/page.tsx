import type { Metadata } from 'next';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { baseMetadata } from '@/lib/metadata';

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
      <div className="w-full aspect-square max-w-[320px] relative flex items-center justify-center">
        <div className="absolute inset-0 border border-[#C49A2A]/30" />
        <div className="absolute top-6 left-6 w-16 h-16 bg-[#C49A2A]/10 border border-[#C49A2A]/40" />
        <div className="absolute bottom-6 right-6 w-24 h-24 bg-[#0D1B2A]/5 border border-[#1A2535]/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#0D1B2A]">
          <div className="absolute inset-2 border border-[#C49A2A]/50" />
          <div className="absolute inset-4 bg-[#C49A2A]/20" />
        </div>
        <div className="absolute top-6 right-12 w-2 h-2 bg-[#C49A2A]" />
        <div className="absolute bottom-12 left-8 w-2 h-2 bg-[#C49A2A]" />
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
      <div className="w-full aspect-square max-w-[320px] relative flex items-center justify-center">
        <div className="absolute top-0 left-0 right-0 h-px bg-[#1A2535]/20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1A2535]/20" />
        <div className="absolute top-0 bottom-0 left-0 w-px bg-[#1A2535]/20" />
        <div className="absolute top-0 bottom-0 right-0 w-px bg-[#1A2535]/20" />
        <div className="grid grid-cols-3 gap-3 p-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square"
              style={{
                background: i % 3 === 0 ? '#C49A2A20' : i % 2 === 0 ? '#0D1B2A0D' : '#0D1B2A05',
                border: i === 4 ? '1px solid #C49A2A60' : '1px solid #1A253520',
              }}
            />
          ))}
        </div>
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
      <div className="w-full aspect-square max-w-[320px] relative overflow-hidden">
        <div className="absolute inset-6 border border-[#1A2535]/20" />
        <div className="absolute top-1/2 left-8 right-8 h-px bg-[#C49A2A]/40" />
        {[0.2, 0.4, 0.6, 0.8].map((pos) => (
          <div
            key={pos}
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0D1B2A] border border-[#C49A2A]/60"
            style={{ left: `${pos * 100}%` }}
          />
        ))}
        <div className="absolute bottom-8 left-8 right-8 h-12 border border-[#1A2535]/20 bg-[#0D1B2A]/5" />
        <div className="absolute top-8 left-8 w-12 h-12 border border-[#1A2535]/20 bg-[#C49A2A]/10" />
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
      <div className="w-full aspect-square max-w-[320px] relative bg-[#0D1B2A]/3 border border-[#1A2535]/20 p-6">
        <div className="grid grid-cols-3 gap-2 h-full">
          <div className="space-y-2">
            <div className="h-6 bg-[#C49A2A]/20 border border-[#C49A2A]/30" />
            <div className="h-10 bg-[#0D1B2A]/8 border border-[#1A2535]/20" />
            <div className="h-10 bg-[#0D1B2A]/8 border border-[#1A2535]/20" />
            <div className="h-8 bg-[#0D1B2A]/5 border border-[#1A2535]/10" />
          </div>
          <div className="space-y-2">
            <div className="h-6 bg-[#C49A2A]/20 border border-[#C49A2A]/30" />
            <div className="h-14 bg-[#0D1B2A]/8 border border-[#1A2535]/20" />
            <div className="h-8 bg-[#0D1B2A]/5 border border-[#1A2535]/10" />
          </div>
          <div className="space-y-2">
            <div className="h-6 bg-[#C49A2A]/20 border border-[#C49A2A]/30" />
            <div className="h-10 bg-[#0D1B2A]/8 border border-[#1A2535]/20" />
          </div>
        </div>
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

const pricingTiers = [
  {
    name: 'Starter',
    price: { monthly: 99, annual: 83 },
    description: 'For teams exploring AI automation for the first time.',
    features: [
      '1 AI agent',
      'Basic pipelines',
      'Email support',
      'Community access',
      'Platform dashboard',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: { monthly: 299, annual: 249 },
    description: 'For businesses ready to operationalize AI across their workflows.',
    features: [
      '5 AI agents',
      'Advanced pipelines',
      'Priority support',
      'Full platform access',
      'Monthly strategy call',
      'Custom integrations',
    ],
    cta: 'Start Growing',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: null, annual: null },
    description: 'For organizations requiring dedicated operations and SLA guarantees.',
    features: [
      'Unlimited agents',
      'Custom pipelines',
      'Dedicated support',
      'SLA guarantee',
      'On-premise option',
      'Custom contracts',
    ],
    cta: 'Contact Us',
    highlighted: false,
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

            {/* Geometric composition */}
            <AnimatedSection delay={0.2} className="hidden lg:flex items-center justify-center">
              <div className="relative w-[440px] h-[440px]">
                {/* Outer frame */}
                <div className="absolute inset-0 border border-[#F0EDE6]/10" />
                {/* Large navy square */}
                <div className="absolute top-8 left-8 right-16 bottom-16 bg-[#1A2535]" />
                {/* Gold accent rectangle */}
                <div className="absolute top-16 right-0 w-20 h-32 bg-[#C49A2A]/20 border border-[#C49A2A]/40" />
                {/* Small inner square */}
                <div className="absolute bottom-4 left-4 w-28 h-28 bg-[#0D1B2A] border border-[#F0EDE6]/10">
                  <div className="absolute inset-3 border border-[#C49A2A]/30" />
                </div>
                {/* Grid lines */}
                <div className="absolute top-8 left-8 right-16 h-px bg-[#F0EDE6]/5" style={{ top: '33%' }} />
                <div className="absolute top-8 left-8 right-16 h-px bg-[#F0EDE6]/5" style={{ top: '66%' }} />
                {/* Gold dot accents */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-[#C49A2A]" />
                <div className="absolute bottom-20 right-8 w-2 h-2 bg-[#C49A2A]" />
                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-16 h-px bg-[#C49A2A]/40" />
                <div className="absolute bottom-0 right-0 w-px h-16 bg-[#C49A2A]/40" />
                {/* Floating label */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="text-[#F0EDE6]/20 text-xs uppercase tracking-[0.3em] font-medium">
                    Gravitas AI
                  </span>
                </div>
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
                  { label: 'Enterprise SLA Available', desc: 'Uptime and response guarantees for enterprise clients.' },
                  { label: 'SOC 2 Ready', desc: 'Security posture built for enterprise compliance requirements.' },
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

      {/* PRICING PREVIEW — beige, continued */}
      <section className="bg-[#F5F0E8] border-t border-[#1A2535]/10 py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-6">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                Pricing
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#1A2535] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Simple, Transparent Pricing
            </h2>
          </AnimatedSection>

          <AnimatedSection className="mb-10">
            <p className="text-[#8A8070]">Setup services from $1,500 &middot; Annual plans save 2 months</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <StaggerItem key={tier.name}>
                <div
                  className={`p-8 h-full flex flex-col ${
                    tier.highlighted
                      ? 'bg-[#0D1B2A] border border-[#C49A2A]/40'
                      : 'border border-[#1A2535]/15 bg-white/40'
                  }`}
                >
                  <div className="mb-6">
                    <h3
                      className={`text-xl font-bold mb-2 ${tier.highlighted ? 'text-[#F0EDE6]' : 'text-[#1A2535]'}`}
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {tier.name}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-4 ${tier.highlighted ? 'text-[#8A8070]' : 'text-[#8A8070]'}`}>
                      {tier.description}
                    </p>
                    <div className={`text-4xl font-bold ${tier.highlighted ? 'text-[#F0EDE6]' : 'text-[#1A2535]'}`} style={{ fontFamily: 'var(--font-serif)' }}>
                      {tier.price.monthly ? (
                        <>
                          ${tier.price.monthly}
                          <span className="text-base font-normal text-[#8A8070]">/mo</span>
                        </>
                      ) : (
                        'Custom'
                      )}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <div
                          className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                          style={{ background: tier.highlighted ? '#C49A2A' : '#1A2535' }}
                        />
                        <span className={`text-sm ${tier.highlighted ? 'text-[#F0EDE6]' : 'text-[#1A2535]'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={tier.name === 'Enterprise' ? 'mailto:hello@gravitasai.xyz' : '/pricing'}
                    className={`block text-center py-3 text-sm font-semibold transition-colors duration-200 tracking-wide ${
                      tier.highlighted
                        ? 'bg-[#C49A2A] text-[#0D1B2A] hover:bg-[#A07820]'
                        : 'border border-[#1A2535] text-[#1A2535] hover:bg-[#1A2535] hover:text-[#F0EDE6]'
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="mt-10 text-center">
            <a
              href="/pricing"
              className="inline-flex items-center text-sm font-medium text-[#1A2535] hover:text-[#C49A2A] transition-colors"
            >
              View full pricing details →
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
