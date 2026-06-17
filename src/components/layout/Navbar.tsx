'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteInfo } from '@/lib/siteData'
import Logo from '@/components/common/Logo'
import './Navbar.css'

const links = [
  { href: '/', label: 'Home' },
  { href: '/#tours', label: 'Tours', match: '/tours' },
  { href: '/#about', label: 'About', match: '/about' },
  { href: '/#reviews', label: 'Reviews', match: '/reviews' },
  { href: '/#contact', label: 'Contact', match: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Link href="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <Logo size={38} />
          <span className="navbar__logo-text">{siteInfo.name}</span>
        </Link>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {links.map((link) => {
            const isActive = link.href === '/'
              ? pathname === '/'
              : link.match
                ? pathname.startsWith(link.match)
                : false
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
          <Link href="/booking" className="btn btn-primary navbar__cta navbar__cta--mobile" onClick={() => setOpen(false)}>
            Book Now
          </Link>
        </nav>

        <div className="navbar__actions">
          <Link href="/booking" className="btn btn-primary navbar__cta">
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
