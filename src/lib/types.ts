export interface ItineraryStep {
  time: string
  title: string
  description: string
}

export interface FAQItem {
  q: string
  a: string
}

export interface Tour {
  id: number
  slug: string
  title: string
  category: string
  destination: string
  durationType: string
  seatsLeft: number
  bookedToday: number
  tags: string[]
  image: string
  gallery: string[]
  price: number
  oldPrice: number | null
  duration: string
  groupSize: string
  departure: string
  rating: number
  reviewsCount: number
  highlights: string[]
  description: string
  itinerary: ItineraryStep[]
  included: string[]
  excluded: string[]
  faq: FAQItem[]
}

export interface PriceRange {
  label: string
  min: number
  max: number
}

export interface SiteInfo {
  name: string
  tagline: string
  phone: string
  whatsapp: string
  email: string
  address: string
  facebook: string
  instagram: string
  line: string
  mapEmbedSrc: string
  founded: number
  toursCompleted: string
  happyGuests: string
  rating: number
}

export interface BusinessInfo {
  legalName: string
  registrationNumber: string
  tatLicense: string
  taxId: string
}

export interface GoogleReviewHighlight {
  name: string
  avatar: string
  rating: number
  date: string
  text: string
}

export interface GoogleReviews {
  rating: number
  reviewCount: number
  url: string
  highlights: GoogleReviewHighlight[]
}

export interface TripAdvisorInfo {
  rating: number
  reviewCount: number
  rank: string
  badge: string
  url: string
}

export interface WhyChooseUsItem {
  icon: string
  title: string
  description: string
}

export interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
}

export interface RecentBooking {
  name: string
  country: string
  tour: string
  minutesAgo: number
}

export interface Certification {
  name: string
  icon: string
}

export interface Testimonial {
  id: number
  name: string
  country: string
  avatar: string
  rating: number
  tour: string
  date: string
  text: string
}

export interface BookingFormData {
  fullName: string
  email: string
  phone: string
  nationality: string
  pickupLocation: string
  tourSlug: string
  travelDate: string
  adults: string
  children: string
  specialRequests: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface SubmitResult {
  success: boolean
  reference?: string
}
