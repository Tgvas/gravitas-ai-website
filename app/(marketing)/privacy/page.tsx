import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = createPageMetadata(
  'Privacy Policy',
  'Gravitas AI LLC Privacy Policy: how we collect, use, and protect your personal information.',
  '/privacy'
);

export default function PrivacyPage() {
  const lastUpdated = 'January 1, 2026';

  return (
    <>
      {/* Header */}
      <section className="bg-[#0D1B2A] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy' }]} />
          <div className="max-w-2xl mt-6">
            <h1
              className="text-4xl lg:text-5xl font-bold text-[#F0EDE6] leading-tight mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Privacy Policy
            </h1>
            <p className="text-[#8A8070] text-sm">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F5F0E8] py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl prose-custom">
            <div className="space-y-10 text-[#1A2535]">

              <div>
                <p className="text-[#8A8070] leading-relaxed text-lg mb-6">
                  Gravitas AI LLC (&ldquo;Gravitas AI,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates gravitasai.xyz and provides AI operations services. This Privacy Policy explains how we collect, use, share, and protect information about you when you use our website or services.
                </p>
                <p className="text-[#8A8070] leading-relaxed">
                  By using our website or engaging our services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>

              {[
                {
                  title: '1. Information We Collect',
                  content: (
                    <div className="space-y-4 text-[#8A8070] leading-relaxed">
                      <p><strong className="text-[#1A2535] font-semibold">Information you provide directly:</strong> When you contact us, submit a form, or engage our services, we may collect your name, email address, company name, job title, and any information you include in your messages or service requests.</p>
                      <p><strong className="text-[#1A2535] font-semibold">Business and operational data:</strong> During service engagements, we may process business data, workflow information, and operational data necessary to provide our AI operations services. The scope of this data is defined in our service agreements.</p>
                      <p><strong className="text-[#1A2535] font-semibold">Usage data:</strong> We automatically collect certain information when you visit our website, including IP address, browser type, pages visited, time spent on pages, and referring URLs. This data is collected through standard server logs and analytics tools.</p>
                      <p><strong className="text-[#1A2535] font-semibold">Cookies and tracking technologies:</strong> Our website may use cookies and similar technologies to improve functionality and analyze usage. You can control cookie settings through your browser settings.</p>
                    </div>
                  ),
                },
                {
                  title: '2. How We Use Your Information',
                  content: (
                    <div className="space-y-3 text-[#8A8070] leading-relaxed">
                      <p>We use the information we collect to:</p>
                      <ul className="space-y-2 pl-4">
                        {[
                          'Respond to inquiries and communicate about our services',
                          'Provide, operate, and improve our AI operations services',
                          'Process and fulfill service agreements',
                          'Send service-related communications and updates',
                          'Analyze website usage to improve user experience',
                          'Comply with legal obligations',
                          'Protect against fraud and security threats',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-[#C49A2A] rounded-full mt-2.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p>We do not sell your personal information to third parties.</p>
                    </div>
                  ),
                },
                {
                  title: '3. Information Sharing',
                  content: (
                    <div className="space-y-4 text-[#8A8070] leading-relaxed">
                      <p>We may share your information in the following circumstances:</p>
                      <p><strong className="text-[#1A2535] font-semibold">Service providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and delivering services (e.g., hosting providers, analytics services). These providers are contractually bound to protect your information.</p>
                      <p><strong className="text-[#1A2535] font-semibold">Legal requirements:</strong> We may disclose information if required by law, court order, or governmental authority, or if we believe disclosure is necessary to protect our rights or the safety of others.</p>
                      <p><strong className="text-[#1A2535] font-semibold">Business transfers:</strong> In the event of a merger, acquisition, or sale of all or part of our business, your information may be transferred as part of that transaction. We will notify you of any such change.</p>
                      <p><strong className="text-[#1A2535] font-semibold">With your consent:</strong> We may share information for other purposes with your explicit consent.</p>
                    </div>
                  ),
                },
                {
                  title: '4. Data Retention',
                  content: (
                    <p className="text-[#8A8070] leading-relaxed">
                      We retain personal information for as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it. Business and operational data processed during service engagements is handled according to the terms of your service agreement.
                    </p>
                  ),
                },
                {
                  title: '5. Data Security',
                  content: (
                    <div className="space-y-3 text-[#8A8070] leading-relaxed">
                      <p>We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                      <ul className="space-y-2 pl-4">
                        {[
                          'Encryption of data in transit and at rest',
                          'Access controls limiting who can access personal information',
                          'Regular security reviews and assessments',
                          'Vendor security requirements for third-party service providers',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-[#C49A2A] rounded-full mt-2.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p>No method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>
                    </div>
                  ),
                },
                {
                  title: '6. Your Rights',
                  content: (
                    <div className="space-y-4 text-[#8A8070] leading-relaxed">
                      <p>Depending on your location, you may have rights regarding your personal information, including:</p>
                      <ul className="space-y-2 pl-4">
                        {[
                          'The right to access the personal information we hold about you',
                          'The right to correct inaccurate or incomplete information',
                          'The right to request deletion of your personal information',
                          'The right to restrict or object to certain processing',
                          'The right to data portability',
                          'The right to withdraw consent where processing is based on consent',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-[#C49A2A] rounded-full mt-2.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p>To exercise these rights, contact us at <a href="mailto:hello@gravitasai.xyz" className="text-[#1A2535] font-medium hover:text-[#C49A2A] transition-colors">hello@gravitasai.xyz</a>. We will respond within 30 days.</p>
                    </div>
                  ),
                },
                {
                  title: '7. Cookies',
                  content: (
                    <div className="space-y-3 text-[#8A8070] leading-relaxed">
                      <p>Our website may use cookies to enhance your experience. Types of cookies we may use include:</p>
                      <ul className="space-y-2 pl-4">
                        {[
                          'Essential cookies: Required for the website to function properly',
                          'Analytics cookies: Help us understand how visitors use our site',
                          'Preference cookies: Remember your settings and preferences',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-[#C49A2A] rounded-full mt-2.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p>You can disable cookies in your browser settings, though this may affect website functionality.</p>
                    </div>
                  ),
                },
                {
                  title: "8. Children's Privacy",
                  content: (
                    <p className="text-[#8A8070] leading-relaxed">
                      Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete it promptly.
                    </p>
                  ),
                },
                {
                  title: '9. Changes to This Policy',
                  content: (
                    <p className="text-[#8A8070] leading-relaxed">
                      We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date. For material changes, we will provide additional notice (such as email notification if you are a client). We encourage you to review this policy periodically.
                    </p>
                  ),
                },
                {
                  title: '10. Contact Us',
                  content: (
                    <div className="space-y-3 text-[#8A8070] leading-relaxed">
                      <p>If you have questions or concerns about this Privacy Policy or our data practices, contact us:</p>
                      <div className="border border-[#1A2535]/15 p-6">
                        <p className="font-semibold text-[#1A2535]">Gravitas AI LLC</p>
                        <p>Email: <a href="mailto:hello@gravitasai.xyz" className="text-[#1A2535] hover:text-[#C49A2A] transition-colors">hello@gravitasai.xyz</a></p>
                        <p>United States</p>
                      </div>
                    </div>
                  ),
                },
              ].map((section) => (
                <div key={section.title} className="border-t border-[#1A2535]/10 pt-8">
                  <h2
                    className="text-2xl font-bold text-[#1A2535] mb-5"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {section.title}
                  </h2>
                  {section.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
