'use client'

import Link from 'next/link'
import { type ReactNode } from 'react'

type Variant = 'gold' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: Variant
  size?: Size
  className?: string
  external?: boolean
  type?: 'button' | 'submit'
  disabled?: boolean
}

const styles: Record<Variant, { base: React.CSSProperties; hover: Partial<React.CSSProperties> }> = {
  gold: {
    base: {
      background: '#C49A2A',
      color: '#0D1B2A',
      border: '1px solid #C49A2A',
    },
    hover: {
      background: '#A07820',
      borderColor: '#A07820',
      transform: 'scale(1.02)',
    },
  },
  outline: {
    base: {
      background: 'transparent',
      color: '#F0EDE6',
      border: '1px solid rgba(240,237,230,0.3)',
    },
    hover: {
      borderColor: '#C49A2A',
      color: '#C49A2A',
    },
  },
  ghost: {
    base: {
      background: 'transparent',
      color: '#1A2535',
      border: '1px solid transparent',
    },
    hover: {
      color: '#C49A2A',
    },
  },
}

const sizes: Record<Size, React.CSSProperties> = {
  sm: { padding: '8px 16px', fontSize: '13px' },
  md: { padding: '12px 24px', fontSize: '14px' },
  lg: { padding: '16px 32px', fontSize: '16px' },
}

export function Button({
  children,
  href,
  onClick,
  variant = 'gold',
  size = 'md',
  external = false,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-dm-sans)',
    fontWeight: 600,
    letterSpacing: '0.02em',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'all 150ms ease',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...styles[variant].base,
    ...sizes[size],
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return
    Object.assign(e.currentTarget.style, styles[variant].hover)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return
    Object.assign(e.currentTarget.style, styles[variant].base, sizes[size])
    e.currentTarget.style.transform = ''
  }

  if (href) {
    return (
      <Link
        href={href}
        style={baseStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={baseStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  )
}
