// Mock booking submission service.
// In production this would POST to a backend API or third-party booking system.

export const submitBooking = (formData) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.info('Booking submitted:', formData)
      resolve({ success: true, reference: `AWT-${Date.now().toString().slice(-6)}` })
    }, 900)
  })

export const submitContactForm = (formData) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.info('Contact message submitted:', formData)
      resolve({ success: true })
    }, 700)
  })

export const nationalities = [
  'United Kingdom', 'United States', 'Australia', 'Canada', 'Germany', 'France',
  'Italy', 'Spain', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Russia',
  'China', 'Japan', 'South Korea', 'India', 'Singapore', 'Malaysia',
  'Vietnam', 'Thailand', 'United Arab Emirates', 'Other',
]
