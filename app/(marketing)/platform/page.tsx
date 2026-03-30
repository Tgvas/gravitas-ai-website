import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = createPageMetadata(
  'AI Operations Platform',
  'The platform built for managing AI agent teams. Kanban boards for AI tasks, agent scheduling, human-in-the-loop review, and audit trails — all in one place.',
  '/platform'
);

const features = [
  {
    title: 'Kanban Boards for AI Tasks',
    description:
      'Visualize exactly what every agent is working on. Tasks move through your workflow stages just like your team — except the doers are AI.',
  },
  {
    title: 'Agent Assignment & Scheduling',
    description:
      'Assign specific task types to specific agents. Schedule work, set priorities, and define capacity limits so your AI team operates predictably.',
  },
  {
    title: 'Progress Tracking & Reporting',
    description:
      "See throughput, completion rates, error rates, and time-to-complete for every agent. Know what's working and what needs tuning.",
  },
  {
    title: 'Human-in-the-Loop Review',
    description:
      'Define confidence thresholds and risk levels. Low-confidence outputs land in a human review queue automatically — nothing sensitive ships without approval.',
  },
  {
    title: 'Audit Trails & Compliance',
    description:
      'Every agent action is logged with timestamps, inputs, outputs, and decision reasoning. Full audit trail for compliance and forensic review.',
  },
  {
    title: 'API & Webhook Integrations',
    description:
      'Connect the platform to your existing stack. Push task results to your CRM, trigger agents from external events, or pull data from your APIs.',
  },
];

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1B2A] pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-6 h-px bg-[#C49A2A]" />
                <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                  Platform
                </span>
              </div>
              <h1
                className="text-5xl lg:text-6xl font-bold text-[#F0EDE6] leading-tight mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                The AI Operations Platform
              </h1>
              <p className="text-xl text-[#8A8070] leading-relaxed mb-4">
                Not just a chatbot. A whole org chart that ships.
              </p>
              <p className="text-[#8A8070] leading-relaxed mb-10">
                Think Jira, but your team members are AI agents. Gravitas AI&apos;s operations platform gives you the visibility, control, and oversight to manage AI agents like you manage people — with accountability, structure, and results.
              </p>
              <a
                href="mailto:hello@gravitasai.xyz?subject=Platform Early Access"
                className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-8 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
              >
                Request Early Access
              </a>
            </AnimatedSection>

            {/* Platform mockup */}
            <AnimatedSection delay={0.2} className="hidden lg:block">
              <div className="border border-[#F0EDE6]/10 bg-[#1A2535]">
                {/* Title bar */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-[#F0EDE6]/10">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F0EDE6]/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F0EDE6]/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F0EDE6]/20" />
                  </div>
                  <div className="h-3 w-40 bg-[#F0EDE6]/10 rounded-none" />
                  <div className="ml-auto h-3 w-20 bg-[#C49A2A]/20" />
                </div>

                {/* Sidebar + content */}
                <div className="flex">
                  <div className="w-40 border-r border-[#F0EDE6]/10 p-3 space-y-1">
                    {['Dashboard', 'Agents', 'Tasks', 'Pipelines', 'Reports'].map((item, i) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 px-2 py-1.5"
                        style={{
                          background: i === 2 ? 'rgba(196,154,42,0.1)' : 'transparent',
                          borderLeft: i === 2 ? '2px solid #C49A2A' : '2px solid transparent',
                        }}
                      >
                        <div
                          className="w-3 h-3 flex-shrink-0"
                          style={{
                            background: i === 2 ? '#C49A2A20' : '#F0EDE610',
                            border: i === 2 ? '1px solid #C49A2A40' : '1px solid #F0EDE610',
                          }}
                        />
                        <span className="text-xs" style={{ color: i === 2 ? '#C49A2A' : '#8A8070' }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex-1 p-4">
                    <div className="flex gap-2 mb-4">
                      {['Backlog', 'In Progress', 'Review', 'Done'].map((col, ci) => (
                        <div key={col} className="flex-1 min-w-0">
                          <div className="flex items-center gap-1 mb-2">
                            <div
                              className="w-1.5 h-1.5"
                              style={{ background: ci === 1 ? '#C49A2A' : '#F0EDE630' }}
                            />
                            <span className="text-[8px] text-[#8A8070] truncate">{col}</span>
                          </div>
                          <div className="space-y-1.5">
                            {Array.from({ length: ci === 0 ? 3 : ci === 1 ? 2 : ci === 2 ? 1 : 2 }).map((_, i) => (
                              <div
                                key={i}
                                className="p-2"
                                style={{
                                  border: ci === 1 && i === 0 ? '1px solid rgba(196,154,42,0.25)' : '1px solid rgba(240,237,230,0.07)',
                                  background: ci === 1 && i === 0 ? 'rgba(196,154,42,0.04)' : 'rgba(240,237,230,0.03)',
                                }}
                              >
                                <div className="h-1.5 bg-[#F0EDE6]/15 mb-1 w-3/4" />
                                <div className="h-1 bg-[#F0EDE6]/8 w-1/2" />
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#F5F0E8] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                Features
              </span>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#1A2535] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Built for operations, not experiments.
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="border border-[#1A2535]/15 p-8 h-full">
                  <div className="w-6 h-px bg-[#C49A2A] mb-5" />
                  <h3
                    className="text-xl font-bold text-[#1A2535] mb-3"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-[#8A8070] leading-relaxed">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Positioning */}
      <section className="bg-[#0D1B2A] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 mb-6 justify-center">
                <div className="w-6 h-px bg-[#C49A2A]" />
                <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                  The Vision
                </span>
                <div className="w-6 h-px bg-[#C49A2A]" />
              </div>
              <blockquote
                className="text-3xl lg:text-4xl font-bold text-[#F0EDE6] leading-tight mb-8"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                &ldquo;Think Jira, but your team members are AI agents.&rdquo;
              </blockquote>
              <p className="text-[#8A8070] leading-relaxed text-lg mb-10">
                Operations teams already know how to manage work in queues, boards, and pipelines. The Gravitas AI platform applies that same mental model to AI — so your team can adopt it without learning a new way to work.
              </p>
              <a
                href="mailto:hello@gravitasai.xyz?subject=Platform Early Access"
                className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-10 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
              >
                Request Early Access
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing link */}
      <section className="bg-[#F5F0E8] py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-[#8A8070] mb-4">Platform access included with Growth and Enterprise plans.</p>
            <a
              href="/pricing"
              className="inline-flex items-center text-sm font-medium text-[#1A2535] hover:text-[#C49A2A] transition-colors"
            >
              View pricing details →
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
