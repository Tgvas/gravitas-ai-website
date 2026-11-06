import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = createPageMetadata(
  'About',
  'Gravitas AI is a consulting and advisory firm. We help vibe coders and businesses build, scale, and secure software made with AI. We also build our own products.',
  '/about'
);

const values = [
  {
    title: 'Advice From Shipping',
    description:
      'We build and ship our own products. We give you the advice we use ourselves, not theory from the sidelines.',
  },
  {
    title: 'Engineering Rigor',
    description:
      'Production standards for every engagement: tests first, staging before release, and monitoring after. We help you build things that last.',
  },
  {
    title: 'Security by Default',
    description:
      'Auth, secrets, data access, and dependencies get checked early. Trust is a feature, and it is designed in from the start.',
  },
  {
    title: 'Plain Talk',
    description:
      'Clear findings, clear priorities, clear next steps. We tell you what is broken, what matters most, and what to fix first.',
  },
];

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Gravitas AI',
  legalName: 'Gravitas AI LLC',
  url: 'https://gravitasai.xyz',
  email: 'hello@gravitasai.xyz',
  foundingDate: '2026',
  description:
    'Gravitas AI is a consulting and advisory firm that helps vibe coders and businesses build, scale, and secure software made with AI. Gravitas AI is also an independent software studio that builds its own products.',
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
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
              Software Worth Keeping Starts With Sound Engineering.
            </h1>
            <p className="text-xl text-[#8A8070] leading-relaxed">
              Gravitas AI is a consulting and advisory firm. We help vibe coders and businesses build, scale, and secure software made with AI, with the engineering rigor of an enterprise team. We are also an independent studio that builds its own products.
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
                Enterprise experience, pointed at your app.
              </h2>
              <div className="space-y-4 text-[#8A8070] leading-relaxed">
                <p>
                  Gravitas AI grew out of hands-on experience building software and AI systems in enterprise environments, where things have to hold up at scale under real business constraints.
                </p>
                <p>
                  Now we use that experience to help others. Vibe coders who built an app with tools like Cursor, Claude Code, Lovable, Bolt, or Replit come to us when it needs to scale, hold up under real users, and be secure. Businesses come to us to build software with AI the right way.
                </p>
                <p>
                  We also run an independent studio and build our own products. That keeps our advice grounded in what it takes to ship and run software every day.
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
                Close the gap between demo and dependable.
              </h2>
              <div className="space-y-4 text-[#8A8070] leading-relaxed">
                <p>
                  AI tools make software easy to start and hard to finish. The gap between a working demo and an app people trust with their daily work is wide, and most products fall into it.
                </p>
                <p>
                  Our mission is to close that gap, one app at a time. We offer four services: Build, Grow &amp; Scale, Secure, and Advisory. Pick one or combine them.
                </p>
              </div>

              <div className="mt-8 border border-[#1A2535]/15 p-6">
                <div className="w-6 h-px bg-[#C49A2A] mb-4" />
                <p className="text-[#1A2535] font-medium leading-relaxed italic" style={{ fontFamily: 'var(--font-serif)' }}>
                  &ldquo;We give advice we would follow ourselves. If we would not ship it, we do not recommend it.&rdquo;
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Studio */}
      <section className="bg-[#0D1B2A] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                The Studio
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-[#F0EDE6] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Small by design, serious about craft.
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl">
            <AnimatedSection delay={0.15}>
              <div className="space-y-5 text-[#8A8070] leading-relaxed">
                <p className="text-lg text-[#F0EDE6]">
                  Gravitas AI is a US-based, engineer-run firm. No layers, no handoffs, no outsourcing.
                </p>
                <p>
                  Our background spans the full engineering stack: from AI model selection and prompt engineering to distributed systems, API design, and production operations. That enterprise discipline goes into every engagement, from a code review to a fractional CTO role.
                </p>
                <p>
                  You work directly with the engineer doing the work. We believe the best software respects its users: fast, secure, and honest about what it does with their data.
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
              The principles behind every engagement.
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
              Ready to make your app dependable?
            </h2>
            <p className="text-[#8A8070] mb-8 max-w-xl mx-auto leading-relaxed">
              Tell us what you built and where it hurts. We reply with a clear next step.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-10 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
            >
              Book a Call
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
