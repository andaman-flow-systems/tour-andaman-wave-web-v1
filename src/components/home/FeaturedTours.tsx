'use client'

import { useRef } from 'react'
import Link from 'next/link'
import SectionHeading from '../common/SectionHeading'
import TourCard from '../common/TourCard'
import { getFeaturedTours } from '@/lib/toursData'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './FeaturedTours.css'

gsap.registerPlugin(ScrollTrigger)

interface FeaturedToursProps {
  id?: string
}

export default function FeaturedTours({ id }: FeaturedToursProps) {
  const tours = getFeaturedTours(4)
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const el = sectionRef.current
    if (!el) return

    gsap.from('.featured-tours .section-head', {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
    })

    gsap.from('.tour-card-wrapper', {
      scrollTrigger: { trigger: el, start: 'top 75%' },
      y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out'
    })
  }, { scope: sectionRef })

  return (
    <section id={id} className="section section-alt featured-tours" ref={sectionRef}>
      <div className="container">
        <SectionHeading
          eyebrow="Exclusive Experiences"
          title="Signature Escapes"
          description="Hand-picked luxurious experiences crafted for the discerning traveler. Reserve early for our most sought-after journeys."
        />
        <div className="grid grid-4">
          {tours.map((tour) => (
            <div className="tour-card-wrapper" key={tour.id}>
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
        <div className="featured-tours__more">
          <Link href="/tours" className="btn btn-secondary">Discover All Escapes</Link>
        </div>
      </div>
    </section>
  )
}
