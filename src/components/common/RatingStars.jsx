import './RatingStars.css'

export default function RatingStars({ rating = 5, reviewsCount, size = 'md' }) {
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
