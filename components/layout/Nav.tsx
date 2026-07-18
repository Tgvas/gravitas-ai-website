'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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
              {(['Apps', 'About', 'Contact'] as const).map((item) => (
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

              <a
                href="https://getrubberduck.com"
                target="_blank"
                rel="noopener noreferrer"
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
                Get Ducktate
              </a>
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
            <div>
              {[
                { label: 'Apps', href: '/apps' },
                { label: 'About', href: '/about' },
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
              <a
                href="https://getrubberduck.com"
                target="_blank"
                rel="noopener noreferrer"
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
                Get Ducktate
              </a>
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
