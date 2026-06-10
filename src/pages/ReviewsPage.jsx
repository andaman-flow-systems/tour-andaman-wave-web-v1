import { useMemo, useState } from 'react'
import TestimonialCard from '../components/common/TestimonialCard'
import RatingStars from '../components/common/RatingStars'
import CTABanner from '../components/common/CTABanner'
import SocialProof from '../components/common/SocialProof'
import { testimonials, getAverageRating } from '../services/testimonialsData'
import { siteInfo } from '../services/siteData'
import useDocumentTitle from '../hooks/useDocumentTitle'
import './ReviewsPage.css'

export default function ReviewsPage() {
  useDocumentTitle(
    'Customer Reviews & Ratings',
    `Read genuine reviews from travelers who booked Phuket tours with ${siteInfo.name}. Average rating ${getAverageRating()}/5.`
  )

  const [filter, setFilter] = useState(0) // 0 = all

  const breakdown = useMemo(() => {
    const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
    testimonials.forEach((t) => { counts[t.rating] = (counts[t.rating] || 0) + 1 })
    return counts
  }, [])

  const filtered = filter === 0 ? testimonials : testimonials.filter((t) => t.rating === filter)

  return (
    <>
      <section className="reviews-hero">
        <div className="container reviews-hero__inner">
          <span className="badge">Guest Reviews</span>
          <h1>What Travelers Say About Us</h1>

          <div className="reviews-summary">
            <div className="reviews-summary__score">
              <strong>{getAverageRating()}</strong>
              <RatingStars rating={Number(getAverageRating())} size="lg" />
              <span>{testimonials.length}+ verified reviews</span>
            </div>
            <div className="reviews-summary__bars">
              {[5, 4, 3, 2, 1].map((star) => {
                const count = breakdown[star] || 0
                const pct = (count / testimonials.length) * 100
                return (
                  <button
                    key={star}
                    className={`reviews-summary__bar-row ${filter === star ? 'reviews-summary__bar-row--active' : ''}`}
                    onClick={() => setFilter(filter === star ? 0 : star)}
                    type="button"
                  >
                    <span>{star} ★</span>
                    <span className="reviews-summary__bar">
                      <span className="reviews-summary__bar-fill" style={{ width: `${pct}%` }} />
                    </span>
                    <span>{count}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SocialProof />
        </div>
      </section>

      <section className="section">
        <div className="container">
          {filter !== 0 && (
            <p className="reviews-filter-note">
              Showing {filtered.length} review{filtered.length !== 1 ? 's' : ''} with {filter} stars.{' '}
              <button type="button" onClick={() => setFilter(0)}>Clear filter</button>
            </p>
          )}
          <div className="grid grid-3">
            {filtered.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Loved Your Tour? Share Your Experience!"
        description="Your feedback helps other travelers and our team. Message us your review on WhatsApp or Facebook."
        primaryLabel="Book Your Next Tour"
        primaryTo="/tours"
      />
    </>
  )
}
