import { Link } from 'react-router-dom'
import SectionHeading from '../common/SectionHeading'
import TestimonialCard from '../common/TestimonialCard'
import { testimonials } from '../../services/testimonialsData'
import './Testimonials.css'

export default function Testimonials() {
  const featured = testimonials.slice(0, 3)

  return (
    <section className="section section-alt testimonials">
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
          <Link to="/reviews" className="btn btn-ghost">Read All Reviews</Link>
        </div>
      </div>
    </section>
  )
}
