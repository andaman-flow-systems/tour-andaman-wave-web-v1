'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { useSearchParams } from 'next/navigation'
import { tours } from '@/lib/toursData'
import { submitBooking, nationalities } from '@/lib/bookingService'
import type { BookingFormData } from '@/lib/types'
import './BookingForm.css'

const initialState = (searchParams: URLSearchParams): BookingFormData => ({
  fullName: '',
  email: '',
  phone: '',
  nationality: '',
  pickupLocation: '',
  tourSlug: searchParams.get('tour') || '',
  travelDate: searchParams.get('date') || '',
  adults: searchParams.get('adults') || '2',
  children: searchParams.get('children') || '0',
  specialRequests: '',
})

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function BookingForm() {
  const searchParams = useSearchParams()
  const [form, setForm] = useState<BookingFormData>(() => initialState(searchParams))
  const [status, setStatus] = useState<Status>('idle')
  const [reference, setReference] = useState<string | undefined>(undefined)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const result = await submitBooking(form)
      setReference(result.reference)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="booking-form__success">
        <div className="booking-form__success-icon">✅</div>
        <h2>Booking Request Received!</h2>
        <p>
          Thank you, {form.fullName.split(' ')[0] || 'traveler'}! Your booking reference is{' '}
          <strong>{reference}</strong>. Our team will contact you within a few hours via email or
          WhatsApp to confirm availability and payment details.
        </p>
        <p className="booking-form__success-note">
          Didn&apos;t get a response within 24 hours? Message us directly on WhatsApp for a faster reply.
        </p>
      </div>
    )
  }

  const selectedTour = tours.find((t) => t.slug === form.tourSlug)
  const adults = Number(form.adults) || 0
  const children = Number(form.children) || 0
  const total = selectedTour ? selectedTour.price * adults + selectedTour.price * 0.5 * children : null

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="booking-form__section">
        <h3>Your Details</h3>
        <div className="booking-form__grid">
          <label>
            Full Name *
            <input type="text" name="fullName" required value={form.fullName} onChange={handleChange} placeholder="John Smith" />
          </label>
          <label>
            Email Address *
            <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="john@example.com" />
          </label>
          <label>
            Phone Number *
            <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="+1 555 123 4567" />
          </label>
          <label>
            Nationality *
            <select name="nationality" required value={form.nationality} onChange={handleChange}>
              <option value="" disabled>Select your nationality</option>
              {nationalities.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="booking-form__section">
        <h3>Tour Details</h3>
        <div className="booking-form__grid">
          <label className="booking-form__full">
            Tour Package *
            <select name="tourSlug" required value={form.tourSlug} onChange={handleChange}>
              <option value="" disabled>Select a tour</option>
              {tours.map((t) => (
                <option key={t.slug} value={t.slug}>{t.title} (${t.price}/person)</option>
              ))}
            </select>
          </label>
          <label>
            Travel Date *
            <input type="date" name="travelDate" required value={form.travelDate} onChange={handleChange} />
          </label>
          <label>
            Hotel Pickup Location *
            <input type="text" name="pickupLocation" required value={form.pickupLocation} onChange={handleChange} placeholder="Hotel name & area, e.g. Patong Beach" />
          </label>
          <label>
            Number of Adults *
            <input type="number" name="adults" min="1" max="20" required value={form.adults} onChange={handleChange} />
          </label>
          <label>
            Number of Children
            <input type="number" name="children" min="0" max="20" value={form.children} onChange={handleChange} />
          </label>
        </div>
      </div>

      <div className="booking-form__section">
        <h3>Special Requests</h3>
        <label>
          Anything we should know? (dietary needs, celebrations, accessibility, etc.)
          <textarea name="specialRequests" rows={4} value={form.specialRequests} onChange={handleChange} placeholder="Optional" />
        </label>
      </div>

      {selectedTour && (
        <div className="booking-form__summary">
          <div>
            <strong>{selectedTour.title}</strong>
            <span>{adults} adult{adults !== 1 ? 's' : ''}{children > 0 ? `, ${children} child${children !== 1 ? 'ren' : ''}` : ''}</span>
          </div>
          <div className="booking-form__summary-total">
            Estimated Total: <strong>${total?.toFixed(0)}</strong>
          </div>
        </div>
      )}

      {status === 'error' && (
        <p className="booking-form__error">Something went wrong. Please try again or contact us via WhatsApp.</p>
      )}

      <button type="submit" className="btn btn-primary btn-block" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending your request...' : 'Confirm Booking Request'}
      </button>
      <p className="booking-form__disclaimer">
        No payment is required now. We&apos;ll confirm availability and send a secure payment link via email.
      </p>
    </form>
  )
}
