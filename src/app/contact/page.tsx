'use client'

import { useRef } from 'react'
import Link from 'next/link'
import ContactForm from '@/components/contact/ContactForm'
import { siteInfo } from '@/lib/siteData'
import { Phone, MessageCircle, Mail, MapPin, Palmtree } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './page.css'

gsap.registerPlugin(ScrollTrigger)

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = pageRef.current
    if (!el) return

    // Hero animations
    gsap.from('.contact-hero__inner > *', {
      y: 30, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.2
    })

    // Contact Cards
    gsap.from('.contact-card', {
      scrollTrigger: { trigger: '.contact-cards', start: 'top 85%' },
      x: -30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out'
    })

    // Contact Form
    gsap.from('.contact-grid > :last-child', {
      scrollTrigger: { trigger: '.contact-grid', start: 'top 80%' },
      x: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
    })

    // Map
    gsap.from('.contact-map', {
      scrollTrigger: { trigger: '.contact-map', start: 'top 85%' },
      y: 40, opacity: 0, duration: 0.8, ease: 'power3.out'
    })
  }, { scope: pageRef })

  return (
    <div ref={pageRef}>
      <section className="contact-hero">
        <div className="container contact-hero__inner">
          <span className="badge">Get In Touch</span>
          <h1>We&apos;re Here to Help Plan Your Trip</h1>
          <p>Have a question about a tour, group booking, or special request? Reach out — we typically reply within a few hours.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-cards">
            <a className="contact-card" href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}>
              <span className="contact-card__icon"><Phone size={24} color="var(--primary)" /></span>
              <div>
                <h3>Call Us</h3>
                <p>{siteInfo.phone}</p>
              </div>
            </a>
            <a className="contact-card" href={`https://wa.me/${siteInfo.whatsapp}`} target="_blank" rel="noreferrer">
              <span className="contact-card__icon"><MessageCircle size={24} color="var(--primary)" /></span>
              <div>
                <h3>WhatsApp</h3>
                <p>Chat with us instantly</p>
              </div>
            </a>
            <a className="contact-card" href={`mailto:${siteInfo.email}`}>
              <span className="contact-card__icon"><Mail size={24} color="var(--primary)" /></span>
              <div>
                <h3>Email</h3>
                <p>{siteInfo.email}</p>
              </div>
            </a>
            <a className="contact-card" href={siteInfo.facebook} target="_blank" rel="noreferrer">
              <span className="contact-card__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></span>
              <div>
                <h3>Facebook</h3>
                <p>Follow &amp; message us</p>
              </div>
            </a>
            <div className="contact-card contact-card--static">
              <span className="contact-card__icon"><MapPin size={24} color="var(--primary)" /></span>
              <div>
                <h3>Visit Us</h3>
                <p>{siteInfo.address}</p>
              </div>
            </div>
            <Link href="/booking" className="contact-card contact-card--cta">
              <span className="contact-card__icon"><Palmtree size={24} color="#fff" /></span>
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
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
