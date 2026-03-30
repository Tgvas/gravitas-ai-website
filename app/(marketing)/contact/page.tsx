import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = createPageMetadata(
  'Contact',
  "Get in touch with Gravitas AI. Book a strategy call, ask about services, or reach us at hello@gravitasai.xyz. We respond within 1 business day.",
  '/contact'
);

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gravitasai.xyz' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://gravitasai.xyz/contact' },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#0D1B2A] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />
          <AnimatedSection className="max-w-2xl mt-6">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                Contact
              </span>
            </div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-[#F0EDE6] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Let&apos;s Talk About Your AI Operations
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-[#F5F0E8] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <AnimatedSection>
              <h2
                className="text-2xl font-bold text-[#1A2535] mb-8"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Send us a message
              </h2>

              {/* Note: Form is a placeholder — submit links to mailto */}
              <form
                action="mailto:hello@gravitasai.xyz"
                method="get"
                encType="text/plain"
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#1A2535] mb-2"
                    >
                      Full Name <span className="text-[#C49A2A]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Jane Smith"
                      className="w-full border border-[#1A2535]/20 bg-white/60 px-4 py-3 text-[#1A2535] placeholder:text-[#8A8070] focus:outline-none focus:border-[#1A2535]/50 text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#1A2535] mb-2"
                    >
                      Work Email <span className="text-[#C49A2A]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full border border-[#1A2535]/20 bg-white/60 px-4 py-3 text-[#1A2535] placeholder:text-[#8A8070] focus:outline-none focus:border-[#1A2535]/50 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-[#1A2535] mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Acme Corp"
                    className="w-full border border-[#1A2535]/20 bg-white/60 px-4 py-3 text-[#1A2535] placeholder:text-[#8A8070] focus:outline-none focus:border-[#1A2535]/50 text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-[#1A2535] mb-2"
                  >
                    I&apos;m interested in
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-[#1A2535]/20 bg-white/60 px-4 py-3 text-[#1A2535] focus:outline-none focus:border-[#1A2535]/50 text-sm appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="strategy-call">Book a Strategy Call</option>
                    <option value="ai-agents">AI Agent Setup</option>
                    <option value="consulting">AI Consulting</option>
                    <option value="pipelines">Automated Pipelines</option>
                    <option value="openclaw">OpenClaw Configuration</option>
                    <option value="platform">Platform Early Access</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#1A2535] mb-2"
                  >
                    Message <span className="text-[#C49A2A]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="body"
                    required
                    rows={5}
                    placeholder="Tell us about your business and what you're trying to accomplish with AI..."
                    className="w-full border border-[#1A2535]/20 bg-white/60 px-4 py-3 text-[#1A2535] placeholder:text-[#8A8070] focus:outline-none focus:border-[#1A2535]/50 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C49A2A] text-[#0D1B2A] font-semibold px-8 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
                >
                  Send Message
                </button>
              </form>
            </AnimatedSection>

            {/* Contact info */}
            <AnimatedSection delay={0.15}>
              <div className="space-y-8">
                {/* Strategy call */}
                <div className="border border-[#1A2535]/15 p-8">
                  <div className="w-6 h-px bg-[#C49A2A] mb-4" />
                  <h3
                    className="text-xl font-bold text-[#1A2535] mb-3"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Book a Strategy Call
                  </h3>
                  <p className="text-[#8A8070] leading-relaxed text-sm mb-6">
                    The fastest way to get started. A 45–60 minute call where we map your operations, identify automation opportunities, and give you an honest assessment — no pitch deck required.
                  </p>
                  <a
                    href="mailto:hello@gravitasai.xyz?subject=Strategy Call Request"
                    className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-6 py-3 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
                  >
                    Request a Call
                  </a>
                </div>

                {/* Email */}
                <div className="border border-[#1A2535]/15 p-8">
                  <div className="w-6 h-px bg-[#C49A2A] mb-4" />
                  <h3
                    className="text-xl font-bold text-[#1A2535] mb-3"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Email Us Directly
                  </h3>
                  <a
                    href="mailto:hello@gravitasai.xyz"
                    className="text-[#1A2535] font-medium hover:text-[#C49A2A] transition-colors text-lg"
                  >
                    hello@gravitasai.xyz
                  </a>
                  <p className="text-[#8A8070] text-sm mt-3 leading-relaxed">
                    We respond to every email within 1 business day. For urgent enterprise inquiries, mention it in the subject line.
                  </p>
                </div>

                {/* Response time note */}
                <div className="bg-[#0D1B2A]/5 border border-[#1A2535]/10 p-6">
                  <p className="text-[#1A2535] text-sm leading-relaxed">
                    <strong className="font-semibold">Response time:</strong> We respond within 1 business day. Strategy calls are typically scheduled within 3–5 business days.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
