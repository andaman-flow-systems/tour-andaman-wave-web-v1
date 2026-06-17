'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { siteInfo, businessInfo } from '@/lib/siteData'
import { categories } from '@/lib/toursData'
import Logo from '@/components/common/Logo'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="footer">
      <div className="container footer__newsletter">
        <div>
          <h3>Get Exclusive Tour Deals &amp; Travel Tips</h3>
          <p>Subscribe to our newsletter and be the first to hear about discounts, new tours and Phuket travel tips.</p>
        </div>
        {subscribed ? (
          <p className="footer__newsletter-success">Thanks for subscribing! Check your inbox to confirm.</p>
        ) : (
          <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        )}
      </div>

      <div className="container footer__top">
        <div className="footer__col footer__about">
          <Link href="/" className="footer__logo">
            <Logo size={32} />
            {siteInfo.name}
          </Link>
          <p>
            Locally owned and operated since {siteInfo.founded}, we craft unforgettable Phuket tours and
            experiences for travelers from around the world.
          </p>
          <div className="footer__socials">
            <a href={siteInfo.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href={siteInfo.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href={`https://wa.me/${siteInfo.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle size={20} />
            </a>
            <a href={`mailto:${siteInfo.email}`} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/tours">All Tours</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/booking">Book Now</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Tour Categories</h4>
          <ul>
            {categories.filter((c) => c !== 'All Tours').map((cat) => (
              <li key={cat}>
                <Link href={`/tours?category=${encodeURIComponent(cat)}`}>{cat}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact Us</h4>
          <ul className="footer__contact">
            <li><MapPin size={16} style={{flexShrink:0}}/> <span>{siteInfo.address}</span></li>
            <li>
              <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}><Phone size={16} style={{flexShrink:0}}/> <span>{siteInfo.phone}</span></a>
            </li>
            <li>
              <a href={`mailto:${siteInfo.email}`}><Mail size={16} style={{flexShrink:0}}/> <span>{siteInfo.email}</span></a>
            </li>
            <li>
              <a href={`https://wa.me/${siteInfo.whatsapp}`} target="_blank" rel="noreferrer">
                <MessageCircle size={16} style={{flexShrink:0}}/> <span>WhatsApp Us</span>
              </a>
            </li>
            <li>LINE: {siteInfo.line}</li>
          </ul>
        </div>
      </div>

      <div className="container footer__legal">
        <h4>Company Information</h4>
        <ul>
          <li>{businessInfo.legalName}</li>
          <li>{businessInfo.registrationNumber}</li>
          <li>{businessInfo.tatLicense}</li>
          <li>{businessInfo.taxId}</li>
        </ul>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} {siteInfo.name}. All rights reserved.</p>
          <p>Licensed Phuket Tour Operator | TAT Approved</p>
        </div>
      </div>
    </footer>
  )
}
