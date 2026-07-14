import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = createPageMetadata(
  'Terms of Service',
  'Gravitas AI LLC Terms of Service: the terms governing your use of our website and services.',
  '/terms'
);

export default function TermsPage() {
  const lastUpdated = 'January 1, 2026';

  return (
    <>
      {/* Header */}
      <section className="bg-[#0D1B2A] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Terms of Service', href: '/terms' }]} />
          <div className="max-w-2xl mt-6">
            <h1
              className="text-4xl lg:text-5xl font-bold text-[#F0EDE6] leading-tight mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Terms of Service
            </h1>
            <p className="text-[#8A8070] text-sm">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F5F0E8] py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="space-y-10 text-[#1A2535]">

              <div>
                <p className="text-[#8A8070] leading-relaxed text-lg mb-4">
                  These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the website gravitasai.xyz and the services provided by Gravitas AI LLC (&ldquo;Gravitas AI,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
                </p>
                <p className="text-[#8A8070] leading-relaxed">
                  By accessing our website or using our services, you agree to be bound by these Terms. If you do not agree, you may not use our services.
                </p>
              </div>

              {[
                {
                  title: '1. Services',
                  content: (
                    <div className="space-y-4 text-[#8A8070] leading-relaxed">
                      <p>Gravitas AI builds and distributes software products, including SaaS applications and native apps such as Rubber Duck for macOS. Individual products may have their own license terms or end-user license agreements, which apply in addition to these Terms.</p>
                      <p>We reserve the right to modify, suspend, or discontinue any product or service at any time with reasonable notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation.</p>
                    </div>
                  ),
                },
                {
                  title: '2. Accounts and Access',
                  content: (
                    <div className="space-y-4 text-[#8A8070] leading-relaxed">
                      <p>Access to certain products or features may require an account. You are responsible for maintaining the confidentiality of your access credentials and for all activities that occur under your account.</p>
                      <p>You agree to provide accurate, current, and complete information when engaging our services and to update such information as needed. You must notify us immediately of any unauthorized use of your account.</p>
                    </div>
                  ),
                },
                {
                  title: '3. Payment and Billing',
                  content: (
                    <div className="space-y-4 text-[#8A8070] leading-relaxed">
                      <p><strong className="text-[#1A2535] font-semibold">Purchases and subscriptions:</strong> Some of our products are paid, as one-time purchases or recurring subscriptions. Pricing and billing terms are presented at the point of purchase. Subscription fees are billed in advance and you authorize the applicable payment processor to charge your payment method.</p>
                      <p><strong className="text-[#1A2535] font-semibold">App Store purchases:</strong> Products purchased through the Apple App Store are billed by Apple and subject to Apple&apos;s payment and refund policies.</p>
                      <p><strong className="text-[#1A2535] font-semibold">Taxes:</strong> All fees are exclusive of applicable taxes. You are responsible for all applicable taxes, excluding taxes on our net income.</p>
                    </div>
                  ),
                },
                {
                  title: '4. Cancellation',
                  content: (
                    <div className="space-y-4 text-[#8A8070] leading-relaxed">
                      <p>Subscriptions may be cancelled at any time through the store or platform where you purchased them, or by writing to <a href="mailto:hello@gravitasai.xyz" className="text-[#1A2535] font-medium hover:text-[#C49A2A] transition-colors">hello@gravitasai.xyz</a>. Access continues through the end of the paid period.</p>
                      <p>We may terminate or suspend your access immediately if you violate these Terms, fail to pay fees when due, or engage in fraudulent or illegal activity.</p>
                    </div>
                  ),
                },
                {
                  title: '5. Intellectual Property',
                  content: (
                    <div className="space-y-4 text-[#8A8070] leading-relaxed">
                      <p><strong className="text-[#1A2535] font-semibold">Our IP:</strong> Gravitas AI owns all intellectual property rights in our apps, software, and documentation. Purchasing or using a product grants you a license to use it, not ownership of it. Nothing in these Terms transfers any of our IP rights to you.</p>
                      <p><strong className="text-[#1A2535] font-semibold">Your content:</strong> You retain ownership of any content you create with our apps, including dictated text, notes, and documents. We claim no rights to it.</p>
                      <p><strong className="text-[#1A2535] font-semibold">Third-party components:</strong> Our products may include open-source and third-party components, which are subject to their own license terms.</p>
                    </div>
                  ),
                },
                {
                  title: '6. Confidentiality',
                  content: (
                    <div className="space-y-4 text-[#8A8070] leading-relaxed">
                      <p>Each party agrees to maintain the confidentiality of the other party&apos;s confidential information, including business data, strategies, technical information, and pricing, and not to disclose it to third parties without prior written consent.</p>
                      <p>Confidentiality obligations do not apply to information that: (a) becomes publicly available through no breach by the receiving party; (b) was independently developed; (c) was rightfully obtained from a third party; or (d) is required to be disclosed by law.</p>
                    </div>
                  ),
                },
                {
                  title: '7. Acceptable Use',
                  content: (
                    <div className="space-y-4 text-[#8A8070] leading-relaxed">
                      <p>You agree not to use our services to:</p>
                      <ul className="space-y-2 pl-4">
                        {[
                          'Violate any applicable law or regulation',
                          'Infringe on the rights of any third party',
                          'Transmit harmful, illegal, or offensive content',
                          'Attempt to gain unauthorized access to our systems',
                          'Use our services to develop competing products without permission',
                          'Misrepresent your identity or affiliation',
                          'Interfere with the proper functioning of our services',
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-[#C49A2A] rounded-full mt-2.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ),
                },
                {
                  title: '8. Disclaimers',
                  content: (
                    <div className="space-y-4 text-[#8A8070] leading-relaxed">
                      <p>OUR SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
                      <p>We do not warrant that our services will be uninterrupted, error-free, or free of viruses. We do not warrant that the results obtained through our services will meet your specific requirements or expectations.</p>
                      <p>AI outputs are probabilistic and may contain errors or inaccuracies. You are responsible for reviewing AI outputs and maintaining appropriate human oversight.</p>
                    </div>
                  ),
                },
                {
                  title: '9. Limitation of Liability',
                  content: (
                    <div className="space-y-4 text-[#8A8070] leading-relaxed">
                      <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, GRAVITAS AI&apos;S TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU IN THE 12 MONTHS PRECEDING THE CLAIM.</p>
                      <p>IN NO EVENT SHALL GRAVITAS AI BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
                      <p>Some jurisdictions do not allow limitation of certain damages. In such jurisdictions, our liability is limited to the maximum extent permitted by applicable law.</p>
                    </div>
                  ),
                },
                {
                  title: '10. Indemnification',
                  content: (
                    <p className="text-[#8A8070] leading-relaxed">
                      You agree to indemnify, defend, and hold harmless Gravitas AI and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys&apos; fees) arising from your use of our services, your violation of these Terms, or your violation of any third-party rights.
                    </p>
                  ),
                },
                {
                  title: '11. Governing Law and Disputes',
                  content: (
                    <div className="space-y-4 text-[#8A8070] leading-relaxed">
                      <p>These Terms are governed by the laws of the United States, without regard to conflict of law principles.</p>
                      <p>Any disputes arising from these Terms or our services shall be resolved through binding arbitration administered under the rules of the American Arbitration Association, except that either party may seek injunctive relief in court for IP infringement or confidentiality breaches.</p>
                    </div>
                  ),
                },
                {
                  title: '12. Changes to Terms',
                  content: (
                    <p className="text-[#8A8070] leading-relaxed">
                      We may update these Terms from time to time. We will notify you of material changes by posting the updated Terms on our website with a new effective date and, for significant changes, by email notification to active clients. Continued use of our services after the effective date constitutes acceptance of the updated Terms.
                    </p>
                  ),
                },
                {
                  title: '13. Contact',
                  content: (
                    <div className="space-y-3 text-[#8A8070] leading-relaxed">
                      <p>Questions about these Terms? Contact us:</p>
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
