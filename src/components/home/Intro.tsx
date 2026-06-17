'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { siteInfo } from '@/lib/siteData'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Intro.css'

gsap.registerPlugin(ScrollTrigger)

export default function Intro() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const el = sectionRef.current
    if (!el) return

    gsap.from('.intro__media', {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

    gsap.from('.intro__content > *', {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    })
  }, { scope: sectionRef })

  return (
    <section className="section intro" ref={sectionRef}>
      <div className="container intro__inner">
        <div className="intro__media glassmorphism" style={{ borderRadius: 'var(--radius)', overflow: 'hidden' }}>
          <img src="https://picsum.photos/seed/phuket-luxury-yacht/700/560" alt="Luxury yacht on pristine waters" loading="lazy" />
          <div className="intro__media-badge">
            <strong>{siteInfo.founded}</strong>
            <span>Years of local luxury</span>
          </div>
        </div>
        <div className="intro__content">
          <span className="eyebrow">Welcome to {siteInfo.name}</span>
          <h2>Exquisite Escapes, Curated by Masters of Travel</h2>
          <p>
            Since {siteInfo.founded}, we&apos;ve been defining luxury island experiences. From secluded lagoons 
            and private yacht charters to exclusive culinary adventures on pristine shores. Our dedicated 
            concierge team handles every detail, ensuring your journey is nothing short of perfect.
          </p>
          <ul className="intro__points">
            <li>✅ World-class, multilingual personal guides</li>
            <li>✅ Exclusive access to secluded locations</li>
            <li>✅ Premium yachts and luxury transport</li>
            <li>✅ Unparalleled personalized service</li>
          </ul>
          <div className="intro__actions">
            <Link href="/about" className="btn btn-secondary">Discover Our Legacy</Link>
            <Link href="/tours" className="btn btn-ghost">View Experiences</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
