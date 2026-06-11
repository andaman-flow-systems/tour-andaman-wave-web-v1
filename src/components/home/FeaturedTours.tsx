import Link from 'next/link'
import SectionHeading from '../common/SectionHeading'
import TourCard from '../common/TourCard'
import { getFeaturedTours } from '@/lib/toursData'
import './FeaturedTours.css'

interface FeaturedToursProps {
  id?: string
}

export default function FeaturedTours({ id }: FeaturedToursProps) {
  const tours = getFeaturedTours(4)

  return (
    <section id={id} className="section section-alt featured-tours">
      <div className="container">
        <SectionHeading
          eyebrow="Popular Experiences"
          title="Featured Tours &amp; Activities"
          description="Hand-picked experiences loved by thousands of travelers — book early, our most popular tours sell out fast."
        />
        <div className="grid grid-4">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
        <div className="featured-tours__more">
          <Link href="/tours" className="btn btn-secondary">View All Tours</Link>
        </div>
      </div>
    </section>
  )
}
