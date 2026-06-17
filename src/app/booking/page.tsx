'use client'

import { Suspense, useRef } from 'react'
import { siteInfo } from '@/lib/siteData'
import BookingForm from '@/components/booking/BookingForm'
import TrustBadges from '@/components/common/TrustBadges'
import { Check, MessageCircle, Phone } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './Booking.css'

export default function BookingPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = pageRef.current
    if (!el) return

    gsap.from('.booking-hero__inner > *', {
      y: 30, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.2
    })
    gsap.from('.booking-page__layout > *', {
      y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out'
    })
  }, { scope: pageRef })

  return (
    <div ref={pageRef}>
      <section className="booking-hero">
        <div className="container booking-hero__inner">
          <span className="badge">Final Step</span>
          <h1>Book Your Phuket Adventure</h1>
          <p>Fill out the form below and our team will confirm your booking within a few hours.</p>
        </div>
      </section>

      <section className="section booking-page">
        <div className="container">
          <div className="booking-page__layout">
            <Suspense>
              <BookingForm />
            </Suspense>

            <aside className="booking-page__sidebar">
              <div className="booking-page__trust">
                <h3>Why Book With Us?</h3>
                <ul className="booking-benefits">
                  <li><Check size={18} color="var(--primary)" /> Free cancellation up to 24 hours before</li>
                  <li><Check size={18} color="var(--primary)" /> No upfront payment required</li>
                  <li><Check size={18} color="var(--primary)" /> Instant email confirmation</li>
                  <li><Check size={18} color="var(--primary)" /> Best price guarantee</li>
                  <li><Check size={18} color="var(--primary)" /> 24/7 WhatsApp support</li>
                </ul>
              </div>
              <div className="booking-page__help">
                <h3>Need Help?</h3>
                <p>Our local team is happy to help you choose the right tour or answer any questions.</p>
                <a href={`https://wa.me/${siteInfo.whatsapp}`} target="_blank" rel="noreferrer" className="btn btn-secondary btn-block">
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
                <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`} className="btn btn-ghost btn-block">
                  <Phone size={18} /> Call {siteInfo.phone}
                </a>
              </div>
              <TrustBadges compact />
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
