import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/metadata';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = createPageMetadata(
  'Our Apps',
  'The apps we build at Gravitas AI, including Ducktate: push-to-talk dictation for Mac with on-device transcription and AI cleanup.',
  '/apps'
);

const features = [
  {
    title: 'Push-to-Talk Dictation',
    description:
      'Hold a key, speak, release. No windows to open, no modes to manage. Dictation is always one keypress away, in any app.',
  },
  {
    title: 'On-Device Transcription',
    description:
      'Speech recognition runs entirely on your Mac. Your audio is never uploaded, never stored on a server, and never used to train anything.',
  },
  {
    title: 'AI Cleanup',
    description:
      'Raw speech is messy. Ducktate cleans up grammar, punctuation, and rambling before the text lands, so what you get reads like you wrote it.',
  },
  {
    title: 'Types Into Any App',
    description:
      'The cleaned-up text is typed straight into whatever app you are using. Email, docs, chat, code. If you can type there, you can talk there.',
  },
  {
    title: 'Meeting Capture',
    description:
      'Record meetings and calls, and get a structured, searchable note instead of an hour of audio you will never listen to again.',
  },
  {
    title: 'Bring Your Own AI',
    description:
      'The cleanup step runs on the AI provider you choose and configure. You stay in control of where your words go.',
  },
];

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ducktate',
  operatingSystem: 'macOS',
  applicationCategory: 'UtilitiesApplication',
  url: 'https://getrubberduck.com',
  author: {
    '@type': 'Organization',
    name: 'Gravitas AI LLC',
    url: 'https://gravitasai.xyz',
  },
  description:
    'Push-to-talk dictation for Mac. On-device transcription, AI cleanup, and text typed straight into any app.',
};

export default function AppsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#0D1B2A] pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-6 h-px bg-[#C49A2A]" />
                <span className="text-[#C49A2A] text-xs uppercase tracking-widest font-medium">
                  Our Apps
                </span>
              </div>
              <h1
                className="text-5xl lg:text-6xl font-bold text-[#F0EDE6] leading-tight mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Ducktate
              </h1>
              <p className="text-xl text-[#8A8070] leading-relaxed mb-4">
                Talk. It types. Push-to-talk dictation for Mac.
              </p>
              <p className="text-[#8A8070] leading-relaxed mb-10">
                Hold a key, speak, release. Ducktate transcribes your speech entirely on-device, cleans it up with AI, and types the result into whatever app you are using. It is the fastest way to get thoughts out of your head and into text.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://getrubberduck.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-8 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
                >
                  Get Ducktate
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center text-[#F0EDE6] font-medium px-8 py-4 border border-[#F0EDE6]/20 hover:border-[#F0EDE6]/40 transition-colors duration-200 text-sm"
                >
                  Get Support →
                </a>
              </div>
            </AnimatedSection>

            {/* App mockup */}
            <AnimatedSection delay={0.2} className="hidden lg:block">
              <div className="border border-[#F0EDE6]/10 bg-[#1A2535]">
                {/* Title bar */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-[#F0EDE6]/10">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F0EDE6]/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F0EDE6]/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F0EDE6]/20" />
                  </div>
                  <div className="h-3 w-32 bg-[#F0EDE6]/10" />
                  <div className="ml-auto flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#C49A2A]" />
                    <span className="text-[10px] text-[#8A8070] uppercase tracking-wider">Listening</span>
                  </div>
                </div>

                <div className="p-8">
                  {/* Waveform */}
                  <div className="flex items-end justify-center gap-1.5 h-24 mb-8">
                    {[10, 24, 40, 58, 44, 70, 52, 78, 60, 74, 48, 62, 40, 52, 30, 42, 18, 28, 12].map((h, i) => (
                      <div
                        key={i}
                        className="w-1.5"
                        style={{
                          height: `${h}%`,
                          background: i % 4 === 1 ? 'rgba(196,154,42,0.7)' : 'rgba(240,237,230,0.25)',
                        }}
                      />
                    ))}
                  </div>

                  {/* Pipeline stages */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Transcribe', active: false, note: 'On-device' },
                      { label: 'Clean Up', active: true, note: 'AI polish' },
                      { label: 'Paste', active: false, note: 'Any app' },
                    ].map((stage) => (
                      <div
                        key={stage.label}
                        className="p-3 border"
                        style={{
                          borderColor: stage.active ? 'rgba(196,154,42,0.3)' : 'rgba(240,237,230,0.08)',
                          background: stage.active ? 'rgba(196,154,42,0.05)' : 'rgba(240,237,230,0.03)',
                        }}
                      >
                        <span className="block text-xs mb-1" style={{ color: stage.active ? '#C49A2A' : '#8A8070' }}>
                          {stage.label}
                        </span>
                        <span className="block text-[10px] text-[#8A8070]">{stage.note}</span>
                      </div>
                    ))}
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
              Fast, private, and everywhere you type.
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
                  Why We Built It
                </span>
                <div className="w-6 h-px bg-[#C49A2A]" />
              </div>
              <blockquote
                className="text-3xl lg:text-4xl font-bold text-[#F0EDE6] leading-tight mb-8"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                &ldquo;You think faster than you type. Your Mac should keep up.&rdquo;
              </blockquote>
              <p className="text-[#8A8070] leading-relaxed text-lg mb-10">
                Ducktate started as a tool we built for ourselves and used every day. It became a product because it earned it. Every Gravitas AI app has to clear the same bar.
              </p>
              <a
                href="https://getrubberduck.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#C49A2A] text-[#0D1B2A] font-semibold px-10 py-4 hover:bg-[#A07820] transition-colors duration-200 tracking-wide text-sm"
              >
                Get Ducktate
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* More apps note */}
      <section className="bg-[#F5F0E8] py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-[#8A8070] mb-4">More apps are in the works. We announce products when they are ready to use.</p>
            <a
              href="/contact"
              className="inline-flex items-center text-sm font-medium text-[#1A2535] hover:text-[#C49A2A] transition-colors"
            >
              Get in touch →
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
