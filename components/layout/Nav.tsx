'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const services = [
  { name: 'AI Agent Setup', href: '/services/ai-agents' },
  { name: 'AI Consulting', href: '/services/ai-consulting' },
  { name: 'Automated Pipelines', href: '/services/ai-automation' },
  { name: 'AI Operations Platform', href: '/services/openclaw-setup' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background-color 300ms, border-color 300ms',
          backgroundColor: scrolled ? '#0D1B2A' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(196,154,42,0.15)' : '1px solid transparent',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              <img src="/logo.svg" alt="Gravitas AI mark" width={32} height={32} style={{ display: 'block' }} />
              <span style={{
                fontFamily: 'var(--font-playfair)',
                fontWeight: 700,
                fontSize: '18px',
                color: '#F0EDE6',
                letterSpacing: '-0.3px',
              }}>
                Gravitas AI
              </span>
            </Link>

            {/* Desktop nav */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="desktop-nav">
              {/* Services dropdown */}
              <div
                style={{ position: 'relative' }}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '8px 12px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#F0EDE6',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  opacity: 0.85,
                  transition: 'opacity 150ms',
                }}>
                  Services
                  <ChevronDown size={14} style={{ transition: 'transform 150ms', transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>
                {servicesOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    background: '#0D1B2A',
                    border: '1px solid rgba(196,154,42,0.2)',
                    minWidth: '220px',
                    padding: '8px 0',
                  }}>
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        style={{
                          display: 'block',
                          padding: '10px 20px',
                          color: '#F0EDE6',
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '14px',
                          opacity: 0.8,
                          transition: 'opacity 150ms',
                          textDecoration: 'none',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                        onMouseLeave={e => (e.currentTarget.style.opacity = '0.8')}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {(['Platform', 'About', 'Pricing'] as const).map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  style={{
                    padding: '8px 12px',
                    color: '#F0EDE6',
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '14px',
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                    opacity: 0.85,
                    transition: 'opacity 150ms',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '0.85')}
                >
                  {item}
                </Link>
              ))}

              <Link
                href="/contact"
                style={{
                  marginLeft: '8px',
                  padding: '10px 20px',
                  background: '#C49A2A',
                  color: '#0D1B2A',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  transition: 'background 150ms, transform 150ms',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#A07820'
                  e.currentTarget.style.transform = 'scale(1.02)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#C49A2A'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                Book a Strategy Call
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#F0EDE6',
                padding: '8px',
              }}
              className="mobile-menu-btn"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 100,
          background: '#0D1B2A',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 32px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '48px' }}>
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
              }}
            >
              <img src="/logo.svg" alt="Gravitas AI mark" width={32} height={32} style={{ display: 'block' }} />
              <span style={{
                fontFamily: 'var(--font-playfair)',
                fontWeight: 700,
                fontSize: '20px',
                color: '#F0EDE6',
              }}>Gravitas AI</span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#F0EDE6', padding: '8px' }}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
            <div style={{
              fontSize: '11px',
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#C49A2A',
              marginBottom: '8px',
            }}>
              Services
            </div>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: '12px 0',
                  color: '#F0EDE6',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '18px',
                  fontWeight: 400,
                  borderBottom: '1px solid rgba(240,237,230,0.1)',
                  textDecoration: 'none',
                  minHeight: '44px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {s.name}
              </Link>
            ))}

            <div style={{ marginTop: '16px' }}>
              {[
                { label: 'Platform', href: '/platform' },
                { label: 'About', href: '/about' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 0',
                    color: '#F0EDE6',
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '18px',
                    fontWeight: 400,
                    borderBottom: '1px solid rgba(240,237,230,0.1)',
                    textDecoration: 'none',
                    minHeight: '44px',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '32px' }}>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '16px 24px',
                  background: '#C49A2A',
                  color: '#0D1B2A',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '16px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  minHeight: '44px',
                }}
              >
                Book a Strategy Call
              </Link>
            </div>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
