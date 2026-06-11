import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import StickyBookBar from '@/components/layout/StickyBookBar'
import RecentBookingPopup from '@/components/layout/RecentBookingPopup'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Andaman Wave Tours | Phuket Tours & Activities',
    template: '%s | Andaman Wave Tours',
  },
  description:
    'Book unforgettable Phuket tours: Phi Phi Islands, James Bond Island, Khao Sok, sunset cruises and more. Free hotel pickup, local guides, best price guarantee.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyBookBar />
        <RecentBookingPopup />
      </body>
    </html>
  )
}
