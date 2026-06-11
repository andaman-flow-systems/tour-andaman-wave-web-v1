import type { Metadata } from 'next'
import ReviewsContent from '@/components/reviews/ReviewsContent'
import { siteInfo } from '@/lib/siteData'
import { getAverageRating } from '@/lib/testimonialsData'
import './page.css'

export const metadata: Metadata = {
  title: 'Customer Reviews & Ratings',
  description: `Read genuine reviews from travelers who booked Phuket tours with ${siteInfo.name}. Average rating ${getAverageRating()}/5.`,
}

export default function ReviewsPage() {
  return <ReviewsContent />
}
