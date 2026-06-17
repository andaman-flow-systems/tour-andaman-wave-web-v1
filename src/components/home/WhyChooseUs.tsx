'use client'

import { useRef } from 'react'
import Link from 'next/link'
import SectionHeading from '../common/SectionHeading'
import { whyChooseUs } from '@/lib/siteData'
import { ShieldCheck, Star, Bus, Compass, CreditCard, Headset } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './WhyChooseUs.css'

gsap.registerPlugin(ScrollTrigger)

interface WhyChooseUsProps {
  id?: string
}

export default function WhyChooseUs({ id }: WhyChooseUsProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const el = sectionRef.current
    if (!el) return

    gsap.from('.why-choose .section-head', {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
    })

    gsap.from('.why-card', {
      scrollTrigger: { trigger: el, start: 'top 75%' },
      y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out'
    })
  }, { scope: sectionRef })

  return (
    <section id={id} className="section why-choose" ref={sectionRef}>
      <div className="container">
        <SectionHeading
          eyebrow="The Sapphire Standard"
          title="Uncompromising Excellence"
          description="We elevate every aspect of your journey, ensuring a flawless and unforgettable experience."
        />
        <div className="grid grid-3">
          {whyChooseUs.map((item, index) => {
            const icons = [<ShieldCheck key={0} size={32} strokeWidth={1.5}/>, <Star key={1} size={32} strokeWidth={1.5}/>, <Bus key={2} size={32} strokeWidth={1.5}/>, <Compass key={3} size={32} strokeWidth={1.5}/>, <CreditCard key={4} size={32} strokeWidth={1.5}/>, <Headset key={5} size={32} strokeWidth={1.5}/>]
            return (
              <div className="why-card glassmorphism" key={item.title}>
                <div className="why-card__icon">{icons[index]}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            )
          })}
        </div>
        <div className="why-choose__more">
          <Link href="/about" className="btn btn-ghost">Learn More About Our Heritage</Link>
        </div>
      </div>
    </section>
  )
}
