import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { siteInfo } from '../../services/siteData'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/tours', label: 'Tours' },
  { to: '/about', label: 'About' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <span className="navbar__logo-mark">🌴</span>
          <span className="navbar__logo-text">{siteInfo.name}</span>
        </Link>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/booking" className="btn btn-primary navbar__cta navbar__cta--mobile" onClick={() => setOpen(false)}>
            Book Now
          </Link>
        </nav>

        <div className="navbar__actions">
          <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`} className="navbar__phone">
            📞 {siteInfo.phone}
          </a>
          <Link to="/booking" className="btn btn-primary navbar__cta">
            Book Now
          </Link>
          <button
            className={`navbar__toggle ${open ? 'navbar__toggle--open' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
