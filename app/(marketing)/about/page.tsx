import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = createPageMetadata(
  'About',
  'Gravitas AI is a software studio founded by Chris Graves, a Principal Software Engineer. We design, build, and ship SaaS products and native apps in-house.',
  '/about'
);

const values = [
  {
    title: 'Build What We Use',
    description:
      'Every app starts as a tool we wanted for ourselves. If we would not use it every day, we do not ship it. Rubber Duck earned its place as our first product that way.',
  },
  {
    title: 'Engineering Rigor',
    description:
      'Every product follows production engineering standards: tests first, staging before release, and monitoring after. We build things that last.',
  },
  {
    title: 'Privacy by Default',
    description:
      'We process data on-device wherever possible and draw clear boundaries everywhere else. Trust is a feature, and it is designed in from the first commit.',
  },
  {
    title: 'Ship and Iterate',
    description:
      'Real releases on real schedules. We ship, listen to the people using the app, and keep improving. An app is never finished, only better.',
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
    'Founder of Gravitas AI and maker of Rubber Duck, a dictation app for macOS. Background in building production software and AI systems for enterprise organizations.',
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Gravitas AI',
  legalName: 'Gravitas AI LLC',
  url: 'https://gravitasai.xyz',
  email: 'hello@gravitasai.xyz',
  foundingDate: '2026',
  founder: {
    '@type': 'Person',
    name: 'Chris Graves',
  },
  description:
    'Gravitas AI is a software studio that designs, builds, and ships SaaS products and native apps, including Rubber Duck, a dictation app for macOS.',
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
              We Build Software Worth Keeping.
            </h1>
            <p className="text-xl text-[#8A8070] leading-relaxed">
              Gravitas AI is an independent software studio. We design, build, and ship SaaS products and native apps in-house, with the engineering rigor of an enterprise team and the care of people who use what they make.
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
                Built from enterprise experience, pointed at products.
              </h2>
              <div className="space-y-4 text-[#8A8070] leading-relaxed">
                <p>
                  Gravitas AI grew out of hands-on experience building software and AI systems in enterprise environments. Chris Graves works as a Principal Software Engineer, building systems that hold up at scale under real business constraints.
                </p>
                <p>
                  The studio exists to turn that experience into products of our own. Instead of consulting on other people&apos;s software, we design, build, and ship our own apps, and we hold them to the same standards an enterprise deployment would demand.
                </p>
                <p>
                  The first of those apps is Rubber Duck, a push-to-talk dictation app for Mac. It started as a tool we built for ourselves and used every day. More apps are on the way.
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
                Ship apps people rely on every day.
              </h2>
              <div className="space-y-4 text-[#8A8070] leading-relaxed">
                <p>
                  Software is easy to start and hard to finish. The gap between a working demo and an app people trust with their daily work is wide, and most products fall into it.
                </p>
                <p>
                  Our mission is to close that gap, one app at a time. Products that launch fast, respect your privacy, and get better with every release. Nothing shipped that we would not use ourselves.
                </p>
              </div>

              <div className="mt-8 border border-[#1A2535]/15 p-6">
                <div className="w-6 h-px bg-[#C49A2A] mb-4" />
                <p className="text-[#1A2535] font-medium leading-relaxed italic" style={{ fontFamily: 'var(--font-serif)' }}>
                  &ldquo;Every app we ship starts as a tool we wanted for ourselves. If we would not use it every day, we do not ship it.&rdquo;
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
              The person behind the products.
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
                    'Native macOS Development',
                    'Maker of Rubber Duck',
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
                  Chris Graves is a Principal Software Engineer who builds software and AI systems for a living, and apps because he cannot help it.
                </p>
                <p>
                  His background spans the full engineering stack: from AI model selection and prompt engineering to distributed systems, API design, and production operations. He brings enterprise engineering discipline to every product the studio ships.
                </p>
                <p>
                  Chris founded Gravitas AI to build products of his own. The first is Rubber Duck, a push-to-talk dictation app for Mac that transcribes on-device and cleans up your words with AI. It began as a tool he built for himself and used daily, which is exactly the bar every future Gravitas AI app has to clear.
                </p>
                <p>
                  He believes the best software respects its users: fast, private, and honest about what it does with your data. Gravitas AI exists to ship more of it.
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
              The principles behind every app we ship.
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
              Try the first thing we shipped.
            </h2>
            <p className="text-[#8A8070] mb-8 max-w-xl mx-auto leading-relaxed">
              Rubber Duck is the fastest way to see what we mean by software worth keeping.
            </p>
            <a
              href="https://getrubberduck.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-10 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
            >
              Get Rubber Duck
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
