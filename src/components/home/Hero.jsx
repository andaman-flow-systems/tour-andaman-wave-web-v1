import { Link } from 'react-router-dom'
import { siteInfo } from '../../services/siteData'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <span className="badge hero__badge">★ {siteInfo.rating}/5 from {siteInfo.happyGuests} travelers</span>
        <h1>Discover the Best of Phuket &amp; the Andaman Sea</h1>
        <p className="hero__subtitle">
          Island hopping, snorkeling, jungle adventures and cultural tours — all with free hotel pickup,
          local expert guides, and a best price guarantee.
        </p>

        <form className="hero__search" onSubmit={(e) => e.preventDefault()}>
          <div className="hero__search-field">
            <label htmlFor="hero-category">What do you want to do?</label>
            <select id="hero-category">
              <option>Island Hopping</option>
              <option>Adventure</option>
              <option>Cultural</option>
              <option>Family</option>
              <option>Water Sports</option>
              <option>Romantic</option>
            </select>
          </div>
          <div className="hero__search-field">
            <label htmlFor="hero-date">Travel date</label>
            <input id="hero-date" type="date" />
          </div>
          <Link to="/tours" className="btn btn-primary hero__search-btn">
            Search Tours
          </Link>
        </form>

        <div className="hero__cta-row">
          <Link to="/booking" className="btn btn-primary">
            Book Now &amp; Save
          </Link>
          <Link to="/tours" className="btn btn-outline">
            Explore All Tours
          </Link>
        </div>

        <ul className="hero__stats">
          <li><strong>{siteInfo.toursCompleted}</strong><span>Tours Completed</span></li>
          <li><strong>{siteInfo.happyGuests}</strong><span>Happy Guests</span></li>
          <li><strong>{siteInfo.rating}/5</strong><span>Average Rating</span></li>
          <li><strong>Since {siteInfo.founded}</strong><span>Local Experts</span></li>
        </ul>
      </div>
    </section>
  )
}
