import { Link, Navigate, useParams } from 'react-router-dom'
import RatingStars from '../components/common/RatingStars'
import TestimonialCard from '../components/common/TestimonialCard'
import TourCard from '../components/common/TourCard'
import CTABanner from '../components/common/CTABanner'
import Gallery from '../components/tour-detail/Gallery'
import Itinerary from '../components/tour-detail/Itinerary'
import IncludedExcluded from '../components/tour-detail/IncludedExcluded'
import FAQAccordion from '../components/tour-detail/FAQAccordion'
import BookingSidebar from '../components/tour-detail/BookingSidebar'
import { getTourBySlug, getRelatedTours } from '../services/toursData'
import { testimonials } from '../services/testimonialsData'
import useDocumentTitle from '../hooks/useDocumentTitle'
import './TourDetailPage.css'

export default function TourDetailPage() {
  const { slug } = useParams()
  const tour = getTourBySlug(slug)

  useDocumentTitle(
    tour ? tour.title : 'Tour Not Found',
    tour ? `${tour.description.slice(0, 150)}...` : undefined
  )

  if (!tour) {
    return <Navigate to="/tours" replace />
  }

  const relatedReviews = testimonials.filter((t) => t.tour === tour.title).slice(0, 3)
  const reviewsToShow = relatedReviews.length > 0 ? relatedReviews : testimonials.slice(0, 3)
  const relatedTours = getRelatedTours(tour.slug, 3)

  return (
    <>
      <section className="tour-detail-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / <Link to="/tours">Tours</Link> / <span>{tour.title}</span>
          </nav>
          <span className="badge">{tour.category}</span>
          <h1>{tour.title}</h1>
          <div className="tour-detail-hero__meta">
            <RatingStars rating={tour.rating} reviewsCount={tour.reviewsCount} />
            <span>⏱ {tour.duration}</span>
            <span>👥 {tour.groupSize}</span>
            <span>📍 {tour.departure}</span>
          </div>
        </div>
      </section>

      <section className="section tour-detail">
        <div className="container tour-detail__layout">
          <div className="tour-detail__main">
            <img className="tour-detail__hero-image" src={tour.image} alt={tour.title} />

            <div className="tour-detail__block">
              <h2>Overview</h2>
              <p>{tour.description}</p>
              <h3>Highlights</h3>
              <ul className="tour-detail__highlights">
                {tour.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="tour-detail__block">
              <h2>Itinerary</h2>
              <Itinerary items={tour.itinerary} />
            </div>

            <div className="tour-detail__block">
              <h2>Photo Gallery</h2>
              <Gallery images={tour.gallery} title={tour.title} />
            </div>

            <div className="tour-detail__block">
              <h2>What's Included</h2>
              <IncludedExcluded included={tour.included} excluded={tour.excluded} />
            </div>

            <div className="tour-detail__block">
              <h2>Frequently Asked Questions</h2>
              <FAQAccordion items={tour.faq} />
            </div>

            <div className="tour-detail__block">
              <h2>Guest Reviews</h2>
              <div className="grid grid-3">
                {reviewsToShow.map((t) => (
                  <TestimonialCard key={t.id} testimonial={t} />
                ))}
              </div>
              <Link to="/reviews" className="tour-detail__all-reviews">See all reviews →</Link>
            </div>

            <div className="tour-detail__mobile-cta">
              <Link to={`/booking?tour=${tour.slug}`} className="btn btn-primary btn-block">
                Book This Tour — ${tour.price}
              </Link>
            </div>
          </div>

          <BookingSidebar tour={tour} />
        </div>
      </section>

      {relatedTours.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <h2 className="text-center" style={{ marginBottom: 32 }}>You Might Also Like</h2>
            <div className="grid grid-3">
              {relatedTours.map((t) => (
                <TourCard key={t.id} tour={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title={`Ready for "${tour.title}"?`}
        description="Spaces are limited and fill up fast — secure your booking today with free cancellation."
        primaryLabel="Book Now"
        primaryTo={`/booking?tour=${tour.slug}`}
      />
    </>
  )
}
