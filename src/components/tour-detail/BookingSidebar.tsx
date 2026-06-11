'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { siteInfo } from '@/lib/siteData'
import TrustBadges from '@/components/common/TrustBadges'
import type { Tour } from '@/lib/types'
import './BookingSidebar.css'

interface BookingSidebarProps {
  tour: Tour
}

export default function BookingSidebar({ tour }: BookingSidebarProps) {
  const router = useRouter()
  const [date, setDate] = useState('')
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)

  const total = tour.price * adults + tour.price * 0.5 * children

  const handleBook = (e: FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams({
      tour: tour.slug,
      date,
      adults: String(adults),
      children: String(children),
    })
    router.push(`/booking?${params.toString()}`)
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
