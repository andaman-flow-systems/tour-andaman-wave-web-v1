'use client'

import { useRef } from 'react'
import Link from 'next/link'
import SectionHeading from '../common/SectionHeading'
import TestimonialCard from '../common/TestimonialCard'
import SocialProof from '../common/SocialProof'
import TrustBadges from '../common/TrustBadges'
import { testimonials } from '@/lib/testimonialsData'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Testimonials.css'

gsap.registerPlugin(ScrollTrigger)

interface TestimonialsProps {
  id?: string
}

export default function Testimonials({ id }: TestimonialsProps) {
  const featured = testimonials.slice(0, 3)
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const el = sectionRef.current
    if (!el) return

    gsap.from('.testimonials .section-head', {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
    })

    gsap.from('.testimonial-card-wrapper', {
      scrollTrigger: { trigger: el, start: 'top 75%' },
      y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out'
    })
  }, { scope: sectionRef })

  return (
    <section id={id} className="section section-alt testimonials" ref={sectionRef}>
      <div className="container">
        <SectionHeading
          eyebrow="Guest Experiences"
          title="Tales of Wonder"
          description="Read accounts from guests who embarked on our luxury journeys."
        />
        <div className="grid grid-3">
          {featured.map((t) => (
            <div className="testimonial-card-wrapper" key={t.id}>
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
        <div className="testimonials__more">
          <Link href="/reviews" className="btn btn-ghost">Read All Testimonials</Link>
        </div>

        <div className="testimonials__social-proof">
          <SectionHeading
            eyebrow="Global Recognition"
            title="Highly Acclaimed Worldwide"
            description="Our dedication to excellence is reflected in reviews across all major platforms."
          />
          <SocialProof />
          <div style={{ marginTop: 32 }}>
            <TrustBadges />
          </div>
        </div>
      </div>
    </section>
  )
}
