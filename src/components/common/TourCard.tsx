import Link from 'next/link'
import RatingStars from './RatingStars'
import type { Tour } from '@/lib/types'
import './TourCard.css'

interface TourCardProps {
  tour: Tour
}

export default function TourCard({ tour }: TourCardProps) {
  const { slug, title, image, price, oldPrice, duration, category, rating, reviewsCount, highlights, tags, seatsLeft } = tour

  return (
    <article className="tour-card">
      <Link href={`/tours/${slug}`} className="tour-card__media">
        <img src={image} alt={title} loading="lazy" />
        <span className="tour-card__category">{category}</span>
        {tags?.[0] && <span className="tour-card__tag">{tags[0]}</span>}
      </Link>
      <div className="tour-card__body">
        <RatingStars rating={rating} reviewsCount={reviewsCount} />
        <h3 className="tour-card__title">
          <Link href={`/tours/${slug}`}>{title}</Link>
        </h3>
        <ul className="tour-card__highlights">
          {highlights.slice(0, 3).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="tour-card__meta">
          <span className="tour-card__duration">⏱ {duration}</span>
          {seatsLeft != null && seatsLeft <= 5 && (
            <span className="tour-card__seats">🔥 Only {seatsLeft} spots left</span>
          )}
        </div>
        <div className="tour-card__footer">
          <div className="tour-card__price">
            {oldPrice && <span className="tour-card__old-price">${oldPrice}</span>}
            <span className="tour-card__price-value">${price}</span>
            <span className="tour-card__price-unit">/ person</span>
          </div>
          <Link href={`/tours/${slug}`} className="btn btn-secondary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}
