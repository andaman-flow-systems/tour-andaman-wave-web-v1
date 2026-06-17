'use client'

import { useRef } from 'react'
import SectionHeading from '@/components/common/SectionHeading'
import CTABanner from '@/components/common/CTABanner'
import { siteInfo, teamMembers, certifications } from '@/lib/siteData'
import { Award, FileCheck, Waves, ShieldCheck } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './page.css'

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = pageRef.current
    if (!el) return

    // Hero animations
    gsap.from('.about-hero__inner > *', {
      y: 30, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.2
    })

    // Story animations
    gsap.from('.about-story__media', {
      scrollTrigger: { trigger: '.about-story', start: 'top 80%' },
      x: -40, opacity: 0, duration: 1, ease: 'power3.out'
    })
    gsap.from('.about-story__content > *', {
      scrollTrigger: { trigger: '.about-story', start: 'top 80%' },
      x: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out'
    })

    // Mission/Vision
    gsap.from('.about-mission__card', {
      scrollTrigger: { trigger: '.about-mission', start: 'top 80%' },
      y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out'
    })

    // Team
    gsap.from('.team-card', {
      scrollTrigger: { trigger: '.team-card', start: 'top 85%' },
      y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out'
    })

    // Certifications
    gsap.from('.certification-card', {
      scrollTrigger: { trigger: '.certifications', start: 'top 85%' },
      scale: 0.9, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.4)'
    })
  }, { scope: pageRef })

  return (
    <div ref={pageRef}>
      <section className="about-hero">
        <div className="container about-hero__inner">
          <span className="badge">About {siteInfo.name}</span>
          <h1>Sharing the Real Phuket, One Tour at a Time</h1>
          <p>
            We&apos;re a locally owned and operated tour company based in Phuket, Thailand, dedicated to
            showing travelers the natural beauty, culture and warmth of the Andaman region.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-story">
          <div className="about-story__media">
            <img src="https://picsum.photos/seed/phuket-team/700/560" alt="Our team preparing a boat tour" loading="lazy" />
          </div>
          <div className="about-story__content">
            <span className="eyebrow">Our Story</span>
            <h2>From One Boat to Phuket&apos;s Trusted Tour Partner</h2>
            <p>
              {siteInfo.name} was founded in {siteInfo.founded} by a small group of friends who grew up on the
              beaches of Phuket and wanted to share their home with visitors in a genuine, sustainable way.
              What started with a single longtail boat and a handful of snorkeling trips has grown into a
              full-service tour operator offering island-hopping, adventure, cultural and family experiences
              across the Andaman coast.
            </p>
            <p>
              Today, we&apos;ve welcomed over {siteInfo.happyGuests} guests from more than 60 countries, while staying
              true to our roots: small groups, knowledgeable local guides, fair wages for our crew, and a deep
              respect for the marine environments we explore every day.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="grid grid-2 about-mission">
            <div className="about-mission__card">
              <div className="about-mission__icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To create safe, authentic and unforgettable travel experiences in Phuket while supporting
                local communities and protecting the natural environments we depend on.
              </p>
            </div>
            <div className="about-mission__card">
              <div className="about-mission__icon">🌅</div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and loved tour operator in Phuket — known for genuine hospitality,
                responsible tourism, and experiences travelers remember for a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Meet The Team"
            title="The People Behind Your Adventure"
            description="Our friendly, experienced team is here to make your trip smooth and memorable from booking to drop-off."
          />
          <div className="grid grid-4">
            {teamMembers.map((member) => (
              <div className="team-card" key={member.name}>
                <img src={member.image} alt={member.name} loading="lazy" />
                <h3>{member.name}</h3>
                <span className="team-card__role">{member.role}</span>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Trust & Safety"
            title="Licensed, Insured &amp; Certified"
            description="Your safety is our top priority. We meet all local regulations and maintain comprehensive insurance for every guest."
          />
          <div className="grid grid-4 certifications">
            {certifications.map((cert, index) => {
              const icons = [<Award key={0} size={32} strokeWidth={1.5} color="var(--primary)" />, <FileCheck key={1} size={32} strokeWidth={1.5} color="var(--primary)" />, <Waves key={2} size={32} strokeWidth={1.5} color="var(--primary)" />, <ShieldCheck key={3} size={32} strokeWidth={1.5} color="var(--primary)" />]
              return (
                <div className="certification-card" key={cert.name}>
                  <span className="certification-card__icon">{icons[index]}</span>
                  <p>{cert.name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Come Explore Phuket With Us"
        description="Browse our tours and find the perfect Andaman adventure for your trip."
        primaryLabel="View Our Tours"
        primaryTo="/tours"
      />
    </div>
  )
}
