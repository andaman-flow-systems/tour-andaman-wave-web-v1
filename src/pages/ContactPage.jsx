import { Link } from 'react-router-dom'
import ContactForm from '../components/contact/ContactForm'
import { siteInfo } from '../services/siteData'
import useDocumentTitle from '../hooks/useDocumentTitle'
import './ContactPage.css'

export default function ContactPage() {
  useDocumentTitle(
    'Contact Us',
    `Get in touch with ${siteInfo.name}. Call, WhatsApp, email or visit us in Phuket — we're happy to help plan your trip.`
  )

  return (
    <>
      <section className="contact-hero">
        <div className="container contact-hero__inner">
          <span className="badge">Get In Touch</span>
          <h1>We're Here to Help Plan Your Trip</h1>
          <p>Have a question about a tour, group booking, or special request? Reach out — we typically reply within a few hours.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-cards">
            <a className="contact-card" href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}>
              <span className="contact-card__icon">📞</span>
              <div>
                <h3>Call Us</h3>
                <p>{siteInfo.phone}</p>
              </div>
            </a>
            <a className="contact-card" href={`https://wa.me/${siteInfo.whatsapp}`} target="_blank" rel="noreferrer">
              <span className="contact-card__icon">💬</span>
              <div>
                <h3>WhatsApp</h3>
                <p>Chat with us instantly</p>
              </div>
            </a>
            <a className="contact-card" href={`mailto:${siteInfo.email}`}>
              <span className="contact-card__icon">✉️</span>
              <div>
                <h3>Email</h3>
                <p>{siteInfo.email}</p>
              </div>
            </a>
            <a className="contact-card" href={siteInfo.facebook} target="_blank" rel="noreferrer">
              <span className="contact-card__icon">📘</span>
              <div>
                <h3>Facebook</h3>
                <p>Follow &amp; message us</p>
              </div>
            </a>
            <div className="contact-card contact-card--static">
              <span className="contact-card__icon">📍</span>
              <div>
                <h3>Visit Us</h3>
                <p>{siteInfo.address}</p>
              </div>
            </div>
            <Link to="/booking" className="contact-card contact-card--cta">
              <span className="contact-card__icon">🌴</span>
              <div>
                <h3>Ready to Book?</h3>
                <p>Go straight to our booking form</p>
              </div>
            </Link>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: 24 }}>Find Us</h2>
          <div className="contact-map">
            <iframe
              title="Office location map"
              src={siteInfo.mapEmbedSrc}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
