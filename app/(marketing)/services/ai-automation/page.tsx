import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = createPageMetadata(
  'Automated Pipelines',
  'Eliminate manual work with custom AI pipelines that connect your tools, automate data flows, and handle high-volume operations reliably.',
  '/services/ai-automation'
);

const useCases = [
  {
    title: 'Lead Processing & Enrichment',
    description:
      'Inbound leads automatically enriched, scored, and routed to the right rep — without anyone touching a spreadsheet.',
  },
  {
    title: 'Document Review & Classification',
    description:
      'Contracts, invoices, support tickets, and reports classified and summarized at scale with human review queues for edge cases.',
  },
  {
    title: 'Reporting & Analytics',
    description:
      'Weekly business reports, performance summaries, and anomaly alerts generated and distributed automatically.',
  },
  {
    title: 'Customer Communication',
    description:
      'First-response drafts, follow-up sequences, and escalation routing — handled by AI with your brand voice and review gates.',
  },
  {
    title: 'Data Synchronization',
    description:
      'Keep your CRM, database, and third-party tools in sync without manual exports and imports.',
  },
  {
    title: 'Content Operations',
    description:
      'Research, drafting, formatting, and publishing pipelines for teams producing content at scale.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Automated Pipelines',
  provider: {
    '@type': 'Organization',
    name: 'Gravitas AI LLC',
    url: 'https://gravitasai.xyz',
  },
  description:
    'Custom AI pipeline development connecting your tools and automating high-volume business operations reliably.',
  areaServed: 'US',
  serviceType: 'Workflow Automation',
  url: 'https://gravitasai.xyz/services/ai-automation',
};

export default function AIAutomationPage() {
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
              { label: 'Automated Pipelines', href: '/services/ai-automation' },
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
              Eliminate Manual Work. Automate Your Operations.
            </h1>
            <p className="text-xl text-[#8A8070] leading-relaxed mb-10">
              We build custom AI pipelines that connect your existing tools and handle the high-volume, repetitive operations that slow your team down every day.
            </p>
            <a
              href="mailto:hello@gravitasai.xyz?subject=Automation Pipeline Inquiry"
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
                Your team is doing work that shouldn&apos;t need humans.
              </h2>
              <p className="text-[#8A8070] leading-relaxed text-lg">
                Every team has tasks that are rule-based, repetitive, and high-volume — the kind that require attention but not judgment. These tasks eat hours, cause bottlenecks, and introduce errors. Most teams tolerate them because automating feels complicated. It doesn&apos;t have to be.
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
                Pipelines that run in minutes, not hours.
              </h2>
              <p className="text-[#8A8070] leading-relaxed text-lg">
                We design and build custom AI pipelines that sit between your existing tools — no rip-and-replace, no massive migrations. Operations that took your team hours to manage run in minutes. With exception handling, audit trails, and human escalation paths built in from the start.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-[#0D1B2A] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                Common Pipelines
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-[#F0EDE6] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              What we automate for businesses like yours.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((item, i) => (
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
                How We Build
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-[#1A2535] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Built right the first time.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Workflow Mapping', desc: 'We document the current process — inputs, outputs, decision points, and pain points — before writing a single line of automation.' },
              { step: '02', title: 'Pipeline Design', desc: 'We design the automation architecture including error handling, retry logic, escalation paths, and audit logging.' },
              { step: '03', title: 'Build & Test', desc: 'We build the pipeline in a staging environment, test with real data, and validate edge cases before touching production.' },
              { step: '04', title: 'Monitor & Maintain', desc: 'Pipelines are monitored continuously. We alert on failures, track performance metrics, and tune the automation over time.' },
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
              Ready to automate your manual operations?
            </h2>
            <p className="text-[#8A8070] mb-8 max-w-xl mx-auto leading-relaxed">
              Tell us what your team does manually every week. We&apos;ll show you how to get those hours back.
            </p>
            <a
              href="mailto:hello@gravitasai.xyz?subject=Automation Pipeline Inquiry"
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
