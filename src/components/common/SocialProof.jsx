import RatingStars from './RatingStars'
import { googleReviews, tripAdvisorInfo } from '../../services/siteData'
import './SocialProof.css'

export default function SocialProof() {
  return (
    <div className="social-proof grid grid-2">
      <div className="social-proof__card">
        <div className="social-proof__header">
          <span className="social-proof__logo social-proof__logo--google">
            <span style={{ color: '#4285F4' }}>G</span>
            <span style={{ color: '#EA4335' }}>o</span>
            <span style={{ color: '#FBBC05' }}>o</span>
            <span style={{ color: '#4285F4' }}>g</span>
            <span style={{ color: '#34A853' }}>l</span>
            <span style={{ color: '#EA4335' }}>e</span>
          </span>
          <div>
            <strong>{googleReviews.rating} / 5</strong>
            <RatingStars rating={googleReviews.rating} reviewsCount={googleReviews.reviewCount} />
          </div>
          <a href={googleReviews.url} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
            See Reviews
          </a>
        </div>
        <div className="social-proof__list">
          {googleReviews.highlights.map((review) => (
            <div className="social-proof__review" key={review.name}>
              <img src={review.avatar} alt={review.name} loading="lazy" />
              <div>
                <div className="social-proof__review-head">
                  <strong>{review.name}</strong>
                  <span>{review.date}</span>
                </div>
                <RatingStars rating={review.rating} />
                <p>{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="social-proof__card social-proof__card--tripadvisor">
        <div className="social-proof__header">
          <span className="social-proof__logo social-proof__logo--ta">🦉 Tripadvisor</span>
          <div>
            <strong>{tripAdvisorInfo.rating} / 5</strong>
            <RatingStars rating={tripAdvisorInfo.rating} reviewsCount={tripAdvisorInfo.reviewCount} />
          </div>
          <a href={tripAdvisorInfo.url} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
            View Profile
          </a>
        </div>
        <div className="social-proof__ta-body">
          <span className="social-proof__ta-badge">🏆 {tripAdvisorInfo.badge}</span>
          <p className="social-proof__ta-rank">{tripAdvisorInfo.rank}</p>
          <p>
            Recognized year after year for outstanding hospitality, safety standards and guest
            satisfaction by the Tripadvisor community.
          </p>
          <ul className="social-proof__ta-points">
            <li>✅ Verified business with Tripadvisor</li>
            <li>✅ Consistently rated "Excellent" by guests</li>
            <li>✅ Fast responses to reviews &amp; questions</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
