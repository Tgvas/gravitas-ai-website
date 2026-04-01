'use client';

import { useState } from 'react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

const tiers = [
  {
    name: 'Starter',
    price: { monthly: 99, annual: 83 },
    description: 'For teams exploring AI automation for the first time.',
    features: [
      '1 AI agent',
      'Basic pipelines (up to 3)',
      'Email support (48hr response)',
      'Community access',
      'Platform dashboard',
      'Standard integrations',
    ],
    excluded: [
      'Priority support',
      'Custom integrations',
      'Monthly strategy call',
      'SLA guarantee',
      'On-premise option',
    ],
    cta: 'Get Started',
    ctaHref: 'mailto:hello@gravitasai.xyz?subject=Starter Plan Inquiry',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: { monthly: 299, annual: 249 },
    description: 'For businesses ready to operationalize AI across their workflows.',
    features: [
      '5 AI agents',
      'Advanced pipelines (up to 10)',
      'Priority support (8hr response)',
      'Full platform access',
      'Monthly strategy call (1hr)',
      'Custom integrations (up to 5)',
      'Dedicated Slack channel',
      'Quarterly roadmap review',
    ],
    excluded: [
      'SLA guarantee',
      'On-premise option',
      'Custom contracts',
    ],
    cta: 'Start Growing',
    ctaHref: 'mailto:hello@gravitasai.xyz?subject=Growth Plan Inquiry',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: null, annual: null },
    description: 'For organizations requiring dedicated operations and SLA guarantees.',
    features: [
      'Unlimited agents',
      'Custom pipelines',
      'Dedicated support engineer',
      'SLA guarantee (99.9% uptime)',
      'On-premise option',
      'Custom contracts',
      'Custom integrations (unlimited)',
      'Executive business reviews',
      'Compliance & security review',
    ],
    excluded: [],
    cta: 'Contact Us',
    ctaHref: 'mailto:hello@gravitasai.xyz?subject=Enterprise Plan Inquiry',
    highlighted: false,
  },
];

const setupServices = [
  {
    name: 'AI Agent Setup',
    price: 'From $1,500',
    description: 'Configuration and deployment of an AI agent team for a specific business function.',
    includes: ['Discovery & architecture', 'Agent configuration', 'Integration setup', 'Testing & QA', 'Documentation', '30-day support'],
  },
  {
    name: 'OpenClaw Configuration',
    price: 'From $2,500',
    description: 'Full OpenClaw platform deployment and configuration for your organization.',
    includes: ['Platform deployment', 'Agent orchestration setup', 'Integration layer', 'Human-in-the-loop configuration', 'Monitoring setup', 'Admin training'],
  },
  {
    name: 'Custom Pipeline',
    price: 'From $5,000',
    description: 'Design and build of a custom AI pipeline connecting your tools and automating specific workflows.',
    includes: ['Workflow mapping', 'Pipeline design', 'Build & integration', 'Testing & validation', 'Deployment & monitoring', 'Documentation'],
  },
];

const faqs = [
  {
    q: "What's the difference between monthly plans and setup services?",
    a: "Monthly plans cover ongoing AI agent operations — the platform, support, and operational management. Setup services are one-time engagements to configure, deploy, and launch your AI system. Most clients start with a setup service to get operational, then maintain on a monthly plan.",
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Monthly plans can be cancelled with 30 days notice. Annual plans are paid annually and are not refundable after the first 30 days. We believe in earning your business every month, not locking you in.',
  },
  {
    q: 'Do you offer a free trial?',
    a: "We don't offer a free trial, but every engagement starts with a strategy call where we map out what your AI operations would look like. If we're not a fit, we'll tell you — before you spend anything.",
  },
  {
    q: 'What kind of support do I get?',
    a: 'Every client gets direct access to our engineering team. No ticket queues, no outsourced support. We respond within hours, not days, because we built the system and know it inside out.',
  },
  {
    q: 'Do I need technical knowledge to get started?',
    a: "No. Our clients range from technical founders to operations leaders with no engineering background. We handle all the technical complexity. You need to understand your business and your workflows — we handle the rest.",
  },
  {
    q: 'What happens during the strategy call?',
    a: "We spend 45–60 minutes learning about your business, your operations, and where you're currently wasting time or money. By the end, we'll identify at least 3 specific automation opportunities and give you an honest assessment of what they'd cost and return. No pitch deck, no fluff.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gravitasai.xyz' },
    { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://gravitasai.xyz/pricing' },
  ],
};

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, breadcrumbSchema]) }}
      />

      {/* Hero */}
      <section className="bg-[#0D1B2A] pt-32 pb-24 lg:pt-40 lg:pb-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 mb-6 justify-center">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                Pricing
              </span>
              <div className="w-6 h-px bg-[#C49A2A]" />
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-[#F0EDE6] leading-tight mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Pricing That Scales With Your AI Operations
            </h1>
            <p className="text-xl text-[#8A8070] max-w-2xl mx-auto leading-relaxed">
              Simple, transparent plans for every stage. No hidden fees, no lock-in. Start with a strategy call.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="bg-[#F5F0E8] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Toggle */}
          <AnimatedSection className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-sm font-medium ${!annual ? 'text-[#1A2535]' : 'text-[#8A8070]'}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-12 h-6 bg-[#1A2535] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C49A2A]"
              aria-label="Toggle annual billing"
            >
              <div
                className={`absolute top-1 w-4 h-4 bg-[#C49A2A] transition-transform duration-200 ${
                  annual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-[#1A2535]' : 'text-[#8A8070]'}`}>
              Annual
              <span className="ml-2 text-[#C49A2A] text-xs font-semibold">2 months free</span>
            </span>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <StaggerItem key={tier.name}>
                <div
                  className={`p-8 flex flex-col h-full ${
                    tier.highlighted
                      ? 'bg-[#0D1B2A] border border-[#C49A2A]/40'
                      : 'border border-[#1A2535]/15 bg-white/40'
                  }`}
                >
                  {tier.highlighted && (
                    <div className="inline-flex items-center gap-1 mb-4">
                      <div className="w-4 h-px bg-[#C49A2A]" />
                      <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">Most Popular</span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h2
                      className={`text-2xl font-bold mb-1 ${tier.highlighted ? 'text-[#F0EDE6]' : 'text-[#1A2535]'}`}
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {tier.name}
                    </h2>
                    <p className="text-sm text-[#8A8070] mb-5 leading-relaxed">{tier.description}</p>

                    {tier.price.monthly ? (
                      <div>
                        <span
                          className={`text-5xl font-bold ${tier.highlighted ? 'text-[#F0EDE6]' : 'text-[#1A2535]'}`}
                          style={{ fontFamily: 'var(--font-serif)' }}
                        >
                          ${annual ? tier.price.annual : tier.price.monthly}
                        </span>
                        <span className="text-[#8A8070] text-base">/mo</span>
                        {annual && (
                          <p className="text-xs text-[#8A8070] mt-1">Billed annually · Save ${(tier.price.monthly! - tier.price.annual!) * 12}/yr</p>
                        )}
                      </div>
                    ) : (
                      <div className="text-5xl font-bold text-[#F0EDE6]" style={{ fontFamily: 'var(--font-serif)' }}>
                        Custom
                      </div>
                    )}
                  </div>

                  <div className="flex-1 mb-8">
                    <p className={`text-xs uppercase tracking-widest font-medium mb-3 ${tier.highlighted ? 'text-[#C49A2A]' : 'text-[#8A8070]'}`}>
                      Included
                    </p>
                    <ul className="space-y-2.5 mb-6">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div
                            className="w-4 h-4 border flex-shrink-0 mt-0.5 flex items-center justify-center"
                            style={{
                              borderColor: tier.highlighted ? 'rgba(196,154,42,0.5)' : 'rgba(26,37,53,0.3)',
                            }}
                          >
                            <div
                              className="w-1.5 h-1.5"
                              style={{ background: tier.highlighted ? '#C49A2A' : '#1A2535' }}
                            />
                          </div>
                          <span
                            className={`text-sm ${tier.highlighted ? 'text-[#F0EDE6]' : 'text-[#1A2535]'}`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={tier.ctaHref}
                    className={`block text-center py-3.5 text-sm font-semibold transition-colors duration-200 tracking-wide ${
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
        </div>
      </section>

      {/* Setup services */}
      <section className="bg-[#0D1B2A] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                Setup Services
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-[#F0EDE6] leading-tight mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              One-time setup engagements.
            </h2>
            <p className="text-[#8A8070] max-w-xl leading-relaxed">
              Before ongoing operations, most clients need a setup engagement to configure, integrate, and launch. These are one-time fees separate from monthly plans.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {setupServices.map((service) => (
              <StaggerItem key={service.name}>
                <div className="border border-[#F0EDE6]/10 p-8 h-full flex flex-col">
                  <div className="mb-4">
                    <div className="w-6 h-px bg-[#C49A2A] mb-4" />
                    <h3
                      className="text-xl font-bold text-[#F0EDE6] mb-2"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {service.name}
                    </h3>
                    <div className="text-2xl font-bold text-[#C49A2A] mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                      {service.price}
                    </div>
                    <p className="text-[#8A8070] text-sm leading-relaxed mb-6">{service.description}</p>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#C49A2A] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-[#F0EDE6]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F0E8] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                FAQ
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-[#1A2535] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Questions about pricing.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="border border-[#1A2535]/15 p-8 h-full">
                  <h3
                    className="text-lg font-bold text-[#1A2535] mb-3"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {faq.q}
                  </h3>
                  <p className="text-[#8A8070] leading-relaxed text-sm">{faq.a}</p>
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
              Not sure which plan is right for you?
            </h2>
            <p className="text-[#8A8070] mb-8 max-w-xl mx-auto leading-relaxed">
              Start with a strategy call. We&apos;ll tell you exactly what you need — and what you don&apos;t.
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
