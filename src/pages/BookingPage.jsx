import { siteInfo } from '../services/siteData'
import BookingForm from '../components/booking/BookingForm'
import TrustBadges from '../components/common/TrustBadges'
import useDocumentTitle from '../hooks/useDocumentTitle'
import './BookingPage.css'

export default function BookingPage() {
  useDocumentTitle(
    'Book Your Phuket Tour',
    'Complete your booking for a Phuket tour. Free cancellation up to 24 hours before, instant confirmation, no payment required upfront.'
  )

  return (
    <section className="section booking-page">
      <div className="container">
        <div className="section-head" style={{ marginBottom: 32 }}>
          <span className="eyebrow">Final Step</span>
          <h1>Book Your Phuket Adventure</h1>
          <p>Fill out the form below and our team will confirm your booking within a few hours.</p>
        </div>

        <div className="booking-page__layout">
          <BookingForm />

          <aside className="booking-page__sidebar">
            <div className="booking-page__trust">
              <h3>Why Book With Us?</h3>
              <ul>
                <li>✅ Free cancellation up to 24 hours before</li>
                <li>✅ No upfront payment required</li>
                <li>✅ Instant email confirmation</li>
                <li>✅ Best price guarantee</li>
                <li>✅ 24/7 WhatsApp support</li>
              </ul>
            </div>
            <div className="booking-page__help">
              <h3>Need Help?</h3>
              <p>Our local team is happy to help you choose the right tour or answer any questions.</p>
              <a href={`https://wa.me/${siteInfo.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-secondary btn-block">
                💬 Chat on WhatsApp
              </a>
              <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`} className="btn btn-ghost btn-block">
                📞 Call {siteInfo.phone}
              </a>
            </div>
            <TrustBadges compact />
          </aside>
        </div>
      </div>
    </section>
  )
}
