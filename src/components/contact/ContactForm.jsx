import { useState } from 'react'
import { submitContactForm } from '../../services/bookingService'
import './ContactForm.css'

const initialState = { name: '', email: '', subject: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      await submitContactForm(form)
      setStatus('success')
      setForm(initialState)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form__success">
        <div className="contact-form__success-icon">✅</div>
        <h3>Message Sent!</h3>
        <p>Thanks for reaching out. Our team will get back to you within 24 hours.</p>
        <button type="button" className="btn btn-secondary" onClick={() => setStatus('idle')}>
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Full Name *
        <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" />
      </label>
      <label>
        Email Address *
        <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="How can we help?" />
      </label>
      <label>
        Message *
        <textarea name="message" rows="5" required value={form.message} onChange={handleChange} placeholder="Tell us about your trip plans..." />
      </label>
      {status === 'error' && (
        <p className="contact-form__error">Something went wrong. Please try again or message us on WhatsApp.</p>
      )}
      <button type="submit" className="btn btn-primary btn-block" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
