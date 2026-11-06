import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = createPageMetadata(
  'Book a Call',
  'Book a call with Gravitas AI. Get help to build, scale, or secure your app, or ask about advisory and fractional CTO work. We respond within 1 business day.',
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
              Book a Call
            </h1>
            <p className="text-xl text-[#8A8070] leading-relaxed mt-6">
              Tell us about your app or your idea. We reply within 1 business day with a clear next step.
            </p>
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
                Tell us about your project
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
                      Email <span className="text-[#C49A2A]">*</span>
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
                    This is about
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-[#1A2535]/20 bg-white/60 px-4 py-3 text-[#1A2535] focus:outline-none focus:border-[#1A2535]/50 text-sm appearance-none"
                  >
                    <option value="">Select a topic...</option>
                    <option value="book-a-call">Book a Call / New Project</option>
                    <option value="review-security">App Review or Security Audit</option>
                    <option value="scaling">Scaling Help</option>
                    <option value="advisory">Advisory / Fractional CTO</option>
                    <option value="general">General</option>
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
                    placeholder="What did you build, with which tools, and where does it hurt? Or what do you want to build?"
                    className="w-full border border-[#1A2535]/20 bg-white/60 px-4 py-3 text-[#1A2535] placeholder:text-[#8A8070] focus:outline-none focus:border-[#1A2535]/50 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C49A2A] text-[#0D1B2A] font-semibold px-8 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
                >
                  Book a Call
                </button>
              </form>
            </AnimatedSection>

            {/* Contact info */}
            <AnimatedSection delay={0.15}>
              <div className="space-y-8">
                {/* Bring your app */}
                <div className="border border-[#1A2535]/15 p-8">
                  <div className="w-6 h-px bg-[#C49A2A] mb-4" />
                  <h3
                    className="text-xl font-bold text-[#1A2535] mb-3"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Bring Your App
                  </h3>
                  <p className="text-[#8A8070] leading-relaxed text-sm mb-6">
                    Tell us what you built, which tools or stack you used, and where it hurts. An engineer reads it and replies with a clear next step.
                  </p>
                  <a
                    href="mailto:hello@gravitasai.xyz?subject=Bring Your App"
                    className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-6 py-3 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
                  >
                    Email Us Your App
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
                    We respond to every email within 1 business day. For urgent issues, mention it in the subject line.
                  </p>
                </div>

                {/* Response time note */}
                <div className="bg-[#0D1B2A]/5 border border-[#1A2535]/10 p-6">
                  <p className="text-[#1A2535] text-sm leading-relaxed">
                    <strong className="font-semibold">Response time:</strong> We respond within 1 business day. Security concerns get looked at first.
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
