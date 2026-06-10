import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WhatsAppButton from '../components/layout/WhatsAppButton'
import StickyBookBar from '../components/layout/StickyBookBar'
import RecentBookingPopup from '../components/layout/RecentBookingPopup'
import useScrollToTop from '../hooks/useScrollToTop'

export default function MainLayout() {
  useScrollToTop()

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyBookBar />
      <RecentBookingPopup />
    </>
  )
}
