import Link from 'next/link'
import { siteInfo } from '@/lib/siteData'
import './ContactTeaser.css'

interface ContactTeaserProps {
  id?: string
}

export default function ContactTeaser({ id }: ContactTeaserProps) {
  return (
    <section id={id} className="section contact-teaser">
      <div className="container contact-teaser__inner">
        <div>
          <span className="eyebrow">Get In Touch</span>
          <h2>We&apos;re Here to Help Plan Your Trip</h2>
          <p>
            Have a question about a tour, group booking, or special request? Reach out — we
            typically reply within a few hours.
          </p>
        </div>
        <div className="contact-teaser__cards">
          <a className="contact-teaser__card" href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}>
            <span className="contact-teaser__icon">📞</span>
            <div>
              <strong>Call Us</strong>
              <span>{siteInfo.phone}</span>
            </div>
          </a>
          <a className="contact-teaser__card" href={`https://wa.me/${siteInfo.whatsapp}`} target="_blank" rel="noreferrer">
            <span className="contact-teaser__icon">💬</span>
            <div>
              <strong>WhatsApp</strong>
              <span>Chat with us instantly</span>
            </div>
          </a>
          <a className="contact-teaser__card" href={`mailto:${siteInfo.email}`}>
            <span className="contact-teaser__icon">✉️</span>
            <div>
              <strong>Email</strong>
              <span>{siteInfo.email}</span>
            </div>
          </a>
        </div>
        <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
      </div>
    </section>
  )
}
