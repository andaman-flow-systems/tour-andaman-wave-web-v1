import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { siteInfo } from '../../services/siteData'
import TrustBadges from '../common/TrustBadges'
import './BookingSidebar.css'

export default function BookingSidebar({ tour }) {
  const navigate = useNavigate()
  const [date, setDate] = useState('')
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)

  const total = tour.price * adults + tour.price * 0.5 * children

  const handleBook = (e) => {
    e.preventDefault()
    const params = new URLSearchParams({
      tour: tour.slug,
      date,
      adults: String(adults),
      children: String(children),
    })
    navigate(`/booking?${params.toString()}`)
  }

  return (
    <aside className="booking-sidebar">
      <div className="booking-sidebar__price">
        {tour.oldPrice && <span className="booking-sidebar__old-price">${tour.oldPrice}</span>}
        <span className="booking-sidebar__value">${tour.price}</span>
        <span className="booking-sidebar__unit">/ adult</span>
      </div>
      {tour.oldPrice && (
        <span className="badge booking-sidebar__save">
          Save ${tour.oldPrice - tour.price} today
        </span>
      )}

      {tour.seatsLeft != null && tour.seatsLeft <= 5 && (
        <p className="booking-sidebar__urgency">
          🔥 Only <strong>{tour.seatsLeft} spots left</strong> at this price
        </p>
      )}
      {tour.bookedToday != null && (
        <p className="booking-sidebar__activity">
          👥 {tour.bookedToday} people booked this tour today
        </p>
      )}

      <form className="booking-sidebar__form" onSubmit={handleBook}>
        <label>
          Travel Date
          <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <div className="booking-sidebar__row">
          <label>
            Adults
            <input type="number" min="1" max="20" value={adults} onChange={(e) => setAdults(Number(e.target.value))} />
          </label>
          <label>
            Children
            <input type="number" min="0" max="20" value={children} onChange={(e) => setChildren(Number(e.target.value))} />
          </label>
        </div>

        <div className="booking-sidebar__total">
          <span>Estimated Total</span>
          <strong>${total.toFixed(0)}</strong>
        </div>

        <button type="submit" className="btn btn-primary btn-block">Book Now</button>
        <a
          href={`https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent(`Hi! I have a question about the "${tour.title}" tour.`)}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost btn-block"
        >
          💬 Ask a Question
        </a>
      </form>

      <ul className="booking-sidebar__perks">
        <li>✅ Free cancellation up to 24h before</li>
        <li>✅ Reserve now, pay later available</li>
        <li>✅ Instant confirmation</li>
      </ul>

      <TrustBadges compact />
    </aside>
  )
}
