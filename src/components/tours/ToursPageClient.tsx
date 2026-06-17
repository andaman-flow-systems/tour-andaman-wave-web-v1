'use client'

import { useMemo, useState, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import TourCard from '@/components/common/TourCard'
import CTABanner from '@/components/common/CTABanner'
import TourFilters, { type SortOption } from './TourFilters'
import { tours, priceRanges } from '@/lib/toursData'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ToursPageClient.css'

gsap.registerPlugin(ScrollTrigger)

export default function ToursPageClient() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryFromUrl = searchParams.get('category') || 'All Tours'

  const [search, setSearch] = useState('')
  const [destination, setDestination] = useState('All Destinations')
  const [durationType, setDurationType] = useState('All Durations')
  const [priceRangeIndex, setPriceRangeIndex] = useState(0)
  const [sortBy, setSortBy] = useState<SortOption>('popular')

  const activeCategory = categoryFromUrl

  const handleCategoryChange = (cat: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (cat === 'All Tours') {
      params.delete('category')
    } else {
      params.set('category', cat)
    }
    const query = params.toString()
    router.replace(query ? `/tours?${query}` : '/tours')
  }

  const handleReset = () => {
    setSearch('')
    setDestination('All Destinations')
    setDurationType('All Durations')
    setPriceRangeIndex(0)
    handleCategoryChange('All Tours')
  }

  const filteredTours = useMemo(() => {
    const range = priceRanges[priceRangeIndex]

    let result = tours.filter((tour) => {
      if (activeCategory !== 'All Tours' && tour.category !== activeCategory) return false
      if (destination !== 'All Destinations' && tour.destination !== destination) return false
      if (durationType !== 'All Durations' && tour.durationType !== durationType) return false
      if (tour.price < range.min || tour.price > range.max) return false
      if (search.trim() && !tour.title.toLowerCase().includes(search.trim().toLowerCase())) return false
      return true
    })

    switch (sortBy) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return result
  }, [activeCategory, destination, durationType, priceRangeIndex, search, sortBy])

  const pageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = pageRef.current
    if (!el) return

    // Hero animations
    gsap.from('.tours-hero__inner > *', {
      y: 30, opacity: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.2
    })

    // Filter and Tour cards
    gsap.from('.tour-card', {
      scrollTrigger: { trigger: '.tour-card', start: 'top 85%' },
      y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out'
    })
  }, { scope: pageRef, dependencies: [filteredTours] })

  return (
    <div ref={pageRef}>
      <section className="tours-hero">
        <div className="container tours-hero__inner">
          <span className="badge">All Tours</span>
          <h1>Phuket Tours &amp; Activities</h1>
          <p>
            From island-hopping speedboat trips to jungle adventures and sunset cruises — find the
            perfect experience for your trip and book in minutes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <TourFilters
            search={search}
            onSearchChange={setSearch}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            destination={destination}
            onDestinationChange={setDestination}
            durationType={durationType}
            onDurationChange={setDurationType}
            priceRangeIndex={priceRangeIndex}
            onPriceRangeChange={setPriceRangeIndex}
            sortBy={sortBy}
            onSortChange={setSortBy}
            resultCount={filteredTours.length}
            onReset={handleReset}
          />

          {filteredTours.length > 0 ? (
            <div className="grid grid-3">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="tours-empty">
              <p>No tours match your filters yet. Try adjusting your search or browse other categories.</p>
            </div>
          )}
        </div>
      </section>

      <CTABanner
        title="Can't Decide? Talk to a Local Expert"
        description="Message us on WhatsApp and we'll help you choose the perfect tour for your dates, group size and interests."
        primaryLabel="Plan My Trip"
        primaryTo="/contact"
      />
    </div>
  )
}
