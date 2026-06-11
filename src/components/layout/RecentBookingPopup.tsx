'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { recentBookings } from '@/lib/siteData'
import { getTourBySlug, tours } from '@/lib/toursData'
import './RecentBookingPopup.css'

const SHOW_DURATION = 6000
const HIDE_DURATION = 7000

const slugFor = (title: string) => tours.find((t) => t.title === title)?.slug

export default function RecentBookingPopup() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return undefined

    let timeout: ReturnType<typeof setTimeout>
    if (visible) {
      timeout = setTimeout(() => setVisible(false), SHOW_DURATION)
    } else {
      timeout = setTimeout(() => {
        setIndex((i) => (i + 1) % recentBookings.length)
        setVisible(true)
      }, index === 0 ? 4000 : HIDE_DURATION)
    }
    return () => clearTimeout(timeout)
  }, [visible, index, dismissed])

  if (dismissed) return null

  const booking = recentBookings[index]
  const slug = slugFor(booking.tour)
  const tour = slug ? getTourBySlug(slug) : null

  return (
    <div className={`recent-booking ${visible ? 'recent-booking--visible' : ''}`} role="status" aria-live="polite">
      <button className="recent-booking__close" aria-label="Dismiss notifications" onClick={() => setDismissed(true)}>
        ✕
      </button>
      <div className="recent-booking__icon">✅</div>
      <div className="recent-booking__body">
        <p>
          <strong>{booking.name}</strong> from {booking.country} just booked
        </p>
        {tour ? (
          <Link href={`/tours/${tour.slug}`} className="recent-booking__tour">{booking.tour}</Link>
        ) : (
          <span className="recent-booking__tour">{booking.tour}</span>
        )}
        <span className="recent-booking__time">{booking.minutesAgo} minutes ago</span>
      </div>
    </div>
  )
}
