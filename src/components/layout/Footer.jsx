import { useState } from 'react'
import { Link } from 'react-router-dom'
import { siteInfo, businessInfo } from '../../services/siteData'
import { categories } from '../../services/toursData'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
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
          <p className="footer__newsletter-success">🎉 Thanks for subscribing! Check your inbox to confirm.</p>
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
          <Link to="/" className="footer__logo">
            <span className="navbar__logo-mark">🌴</span>
            {siteInfo.name}
          </Link>
          <p>
            Locally owned and operated since {siteInfo.founded}, we craft unforgettable Phuket tours and
            experiences for travelers from around the world.
          </p>
          <div className="footer__socials">
            <a href={siteInfo.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              📘
            </a>
            <a href={siteInfo.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              📸
            </a>
            <a href={`https://wa.me/${siteInfo.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              💬
            </a>
            <a href={`mailto:${siteInfo.email}`} aria-label="Email">
              ✉️
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tours">All Tours</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/booking">Book Now</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Tour Categories</h4>
          <ul>
            {categories.filter((c) => c !== 'All Tours').map((cat) => (
              <li key={cat}>
                <Link to={`/tours?category=${encodeURIComponent(cat)}`}>{cat}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact Us</h4>
          <ul className="footer__contact">
            <li>📍 {siteInfo.address}</li>
            <li>
              <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}>📞 {siteInfo.phone}</a>
            </li>
            <li>
              <a href={`mailto:${siteInfo.email}`}>✉️ {siteInfo.email}</a>
            </li>
            <li>
              <a href={`https://wa.me/${siteInfo.whatsapp}`} target="_blank" rel="noreferrer">
                💬 WhatsApp Us
              </a>
            </li>
            <li>💚 LINE: {siteInfo.line}</li>
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
          <p>Licensed Phuket Tour Operator 🇹🇭 | TAT Approved</p>
        </div>
      </div>
    </footer>
  )
}
