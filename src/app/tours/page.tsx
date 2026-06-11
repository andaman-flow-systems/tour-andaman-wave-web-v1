import { Suspense } from 'react'
import type { Metadata } from 'next'
import ToursPageClient from '@/components/tours/ToursPageClient'

export const metadata: Metadata = {
  title: 'All Phuket Tours & Activities',
  description:
    'Browse our full range of Phuket tours: island hopping, adventure, cultural, family and water sports. Search by name, destination, duration and price.',
}

export default function ToursPage() {
  return (
    <Suspense>
      <ToursPageClient />
    </Suspense>
  )
}
