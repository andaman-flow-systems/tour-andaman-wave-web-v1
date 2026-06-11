import Link from 'next/link'
import SectionHeading from '../common/SectionHeading'
import TestimonialCard from '../common/TestimonialCard'
import SocialProof from '../common/SocialProof'
import TrustBadges from '../common/TrustBadges'
import { testimonials } from '@/lib/testimonialsData'
import './Testimonials.css'

interface TestimonialsProps {
  id?: string
}

export default function Testimonials({ id }: TestimonialsProps) {
  const featured = testimonials.slice(0, 3)

  return (
    <section id={id} className="section section-alt testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="Guest Reviews"
          title="What Our Travelers Say"
          description="Real reviews from real guests who explored Phuket with us."
        />
        <div className="grid grid-3">
          {featured.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
        <div className="testimonials__more">
          <Link href="/reviews" className="btn btn-ghost">Read All Reviews</Link>
        </div>

        <div className="testimonials__social-proof">
          <SectionHeading
            eyebrow="Trusted Worldwide"
            title="What Travelers Say On Google &amp; Tripadvisor"
            description="Real reviews from real guests across the platforms travelers trust most."
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
