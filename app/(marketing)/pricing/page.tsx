import { AnimatedSection } from '@/components/ui/AnimatedSection';

const faqs = [
  {
    q: 'How does pricing work?',
    a: "We design custom solutions based on your specific needs, scale, and goals. After a strategy call, we'll put together a proposal that reflects exactly what you need. No more, no less.",
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Ongoing engagements can be cancelled with 30 days notice. We believe in earning your business every month, not locking you in.',
  },
  {
    q: 'Do you offer a free trial?',
    a: "We don't offer a free trial, but every engagement starts with a strategy call where we map out what your AI operations would look like. If we're not a fit, we'll tell you before you spend anything.",
  },
  {
    q: 'What kind of support do I get?',
    a: 'Every client gets direct access to our engineering team. No ticket queues, no outsourced support. We respond within hours, not days, because we built the system and know it inside out.',
  },
  {
    q: 'Do I need technical knowledge to get started?',
    a: "No. Our clients range from technical founders to operations leaders with no engineering background. We handle all the technical complexity. You just need to understand your business and your workflows.",
  },
  {
    q: 'What happens during the strategy call?',
    a: "We spend 45 to 60 minutes learning about your business, your operations, and where you're currently wasting time or money. By the end, we'll identify specific automation opportunities and give you an honest assessment of what they'd cost and return. No pitch deck, no fluff.",
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
              Tailored Pricing for Your Business
            </h1>
            <p className="text-xl text-[#8A8070] max-w-2xl mx-auto leading-relaxed">
              Every business is different. We design custom solutions and price them based on your specific needs, scale, and goals.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#F5F0E8] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 mb-6 justify-center">
                <div className="w-6 h-px bg-[#C49A2A]" />
                <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                  How It Works
                </span>
                <div className="w-6 h-px bg-[#C49A2A]" />
              </div>
              <h2
                className="text-4xl font-bold text-[#1A2535] leading-tight mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Start with a strategy call.
              </h2>
              <p className="text-[#8A8070] leading-relaxed mb-10 text-lg">
                We learn about your business, map your automation opportunities, and put together a proposal built around your actual needs. No generic tiers, no upsells you don&apos;t need.
              </p>
              <a
                href="mailto:hello@gravitasai.xyz"
                className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-10 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
              >
                Book a Strategy Call
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0D1B2A] py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-6 h-px bg-[#C49A2A]" />
              <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                FAQ
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-[#F0EDE6] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Common questions.
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="border border-[#F0EDE6]/10 p-8 h-full">
                  <h3
                    className="text-lg font-bold text-[#F0EDE6] mb-3"
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
      <section className="bg-[#F5F0E8] py-24 lg:py-28">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#1A2535] mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Ready to talk through what you need?
            </h2>
            <p className="text-[#8A8070] mb-8 max-w-xl mx-auto leading-relaxed">
              Start with a strategy call. We&apos;ll tell you exactly what you need, and what you don&apos;t.
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
