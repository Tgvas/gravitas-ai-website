import Link from 'next/link'
import { Linkedin, Github } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  Services: [
    { label: 'AI Agent Setup', href: '/services/ai-agents' },
    { label: 'AI Consulting', href: '/services/ai-consulting' },
    { label: 'Automated Pipelines', href: '/services/ai-automation' },
    { label: 'OpenClaw Setup', href: '/services/openclaw-setup' },
  ],
  Platform: [
    { label: 'Platform Overview', href: '/platform' },
    { label: 'Pricing', href: '/pricing' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer style={{ background: '#081018', color: '#F0EDE6', padding: '80px 32px 40px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Top section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '48px',
          marginBottom: '64px',
        }}>
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  background: '#C49A2A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#0D1B2A',
                  fontFamily: 'var(--font-playfair)',
                }}>G</div>
                <span style={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#F0EDE6',
                }}>Gravitas AI</span>
              </div>
              <p style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '14px',
                lineHeight: 1.65,
                color: 'rgba(240,237,230,0.6)',
                maxWidth: '220px',
              }}>
                Professional AI operations teams for enterprise businesses.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
              <a
                href="https://linkedin.com/company/gravitas-ai"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(240,237,230,0.5)', transition: 'color 150ms' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C49A2A')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,237,230,0.5)')}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Christopher-Graves"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(240,237,230,0.5)', transition: 'color 150ms' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C49A2A')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,237,230,0.5)')}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#C49A2A',
                marginBottom: '20px',
              }}>
                {heading}
              </h3>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '14px',
                        color: 'rgba(240,237,230,0.65)',
                        textDecoration: 'none',
                        transition: 'color 150ms',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#F0EDE6')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,237,230,0.65)')}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(240,237,230,0.1)',
          paddingTop: '32px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}>
          <p style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '13px',
            color: 'rgba(240,237,230,0.4)',
          }}>
            © 2026 Gravitas AI LLC. All rights reserved.
          </p>
          <a
            href="mailto:hello@gravitasai.xyz"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '13px',
              color: 'rgba(240,237,230,0.4)',
              textDecoration: 'none',
              transition: 'color 150ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#F0EDE6')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,237,230,0.4)')}
          >
            hello@gravitasai.xyz
          </a>
        </div>
      </div>
    </footer>
  )
}
