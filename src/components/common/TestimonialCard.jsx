import RatingStars from './RatingStars'
import './TestimonialCard.css'

export default function TestimonialCard({ testimonial }) {
  const { name, country, avatar, rating, tour, date, text } = testimonial

  return (
    <article className="testimonial-card">
      <RatingStars rating={rating} />
      <p className="testimonial-card__text">&ldquo;{text}&rdquo;</p>
      <div className="testimonial-card__footer">
        <img src={avatar} alt={name} loading="lazy" />
        <div>
          <strong>{name}</strong>
          <span>{country} · {date}</span>
          <span className="testimonial-card__tour">{tour}</span>
        </div>
      </div>
    </article>
  )
}
