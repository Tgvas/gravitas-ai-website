import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import type { ReactNode } from 'react'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
