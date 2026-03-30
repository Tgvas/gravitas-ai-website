import { Nav } from './Nav'
import { Footer } from './Footer'
import { Breadcrumbs, type BreadcrumbItem } from './Breadcrumbs'
import type { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
  breadcrumbs?: BreadcrumbItem[]
  heroBackground?: 'navy' | 'beige'
}

export function PageLayout({ children, breadcrumbs, heroBackground = 'navy' }: PageLayoutProps) {
  return (
    <>
      <Nav />
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div style={{
          background: heroBackground === 'navy' ? '#0D1B2A' : '#F5F0E8',
          padding: '88px 32px 0',
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <Breadcrumbs items={breadcrumbs} />
          </div>
        </div>
      )}
      <main>{children}</main>
      <Footer />
    </>
  )
}
