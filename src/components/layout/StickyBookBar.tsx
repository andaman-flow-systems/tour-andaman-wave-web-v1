import Link from 'next/link'
import { siteInfo } from '@/lib/siteData'
import { Phone } from 'lucide-react'
import './StickyBookBar.css'

// Mobile-only sticky bar to keep booking conversion one tap away.
export default function StickyBookBar() {
  return (
    <div className="sticky-book-bar">
      <a href={`tel:${siteInfo.phone.replace(/\s/g, '')}`} className="sticky-book-bar__call">
        <span aria-hidden="true"><Phone size={16} /></span> Call Us
      </a>
      <Link href="/booking" className="btn btn-primary btn-block sticky-book-bar__cta">
        Book Now
      </Link>
    </div>
  )
}
