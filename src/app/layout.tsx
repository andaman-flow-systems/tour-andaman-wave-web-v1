import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import StickyBookBar from '@/components/layout/StickyBookBar'
import RecentBookingPopup from '@/components/layout/RecentBookingPopup'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Sapphire Horizons | Luxury Phuket Island Escapes',
    template: '%s | Sapphire Horizons',
  },
  description:
    'Experience the pinnacle of tropical luxury. Private yacht charters, exclusive island retreats, sunset cruises and bespoke cultural tours in Phuket and the Andaman Sea.',
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
