import Link from 'next/link'
import { siteInfo } from '@/lib/siteData'
import './Intro.css'

export default function Intro() {
  return (
    <section className="section intro">
      <div className="container intro__inner">
        <div className="intro__media">
          <img src="https://picsum.photos/seed/phuket-longtail/700/560" alt="Longtail boats on a Phuket beach" loading="lazy" />
          <div className="intro__media-badge">
            <strong>{siteInfo.founded}</strong>
            <span>Years of local experience</span>
          </div>
        </div>
        <div className="intro__content">
          <span className="eyebrow">Welcome to {siteInfo.name}</span>
          <h2>Phuket, Curated by Locals Who Love It</h2>
          <p>
            Since {siteInfo.founded}, we&apos;ve been helping travelers from around the world experience the
            real Phuket — from hidden lagoons and floating villages to thrilling jungle adventures and
            unforgettable sunsets. Our small, passionate team of local guides handles every detail so you
            can simply relax and enjoy.
          </p>
          <ul className="intro__points">
            <li>✅ Friendly, English-speaking local guides</li>
            <li>✅ Small groups and comfortable, modern vehicles</li>
            <li>✅ Carefully vetted boats and safety equipment</li>
            <li>✅ Transparent pricing — no hidden fees</li>
          </ul>
          <div className="intro__actions">
            <Link href="/about" className="btn btn-secondary">Our Story</Link>
            <Link href="/tours" className="btn btn-ghost">Browse Tours</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
