import './RatingStars.css'

interface RatingStarsProps {
  rating?: number
  reviewsCount?: number
  size?: 'sm' | 'md' | 'lg'
}

export default function RatingStars({ rating = 5, reviewsCount, size = 'md' }: RatingStarsProps) {
  const fullStars = Math.round(rating)

  return (
    <span className={`rating-stars rating-stars--${size}`} aria-label={`Rated ${rating} out of 5`}>
      <span className="rating-stars__icons" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < fullStars ? 'star star--full' : 'star'}>
            ★
          </span>
        ))}
      </span>
      <span className="rating-stars__value">{rating}</span>
      {reviewsCount != null && (
        <span className="rating-stars__count">({reviewsCount} reviews)</span>
      )}
    </span>
  )
}
