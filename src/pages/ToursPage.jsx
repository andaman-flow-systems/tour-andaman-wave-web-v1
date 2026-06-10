import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import TourCard from '../components/common/TourCard'
import TourFilters from '../components/tours/TourFilters'
import CTABanner from '../components/common/CTABanner'
import { tours, priceRanges } from '../services/toursData'
import useDocumentTitle from '../hooks/useDocumentTitle'
import './ToursPage.css'

export default function ToursPage() {
  useDocumentTitle(
    'All Phuket Tours & Activities',
    'Browse our full range of Phuket tours: island hopping, adventure, cultural, family and water sports. Search by name, destination, duration and price.'
  )

  const [searchParams, setSearchParams] = useSearchParams()
  const categoryFromUrl = searchParams.get('category') || 'All Tours'

  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState(categoryFromUrl)
  const [destination, setDestination] = useState('All Destinations')
  const [durationType, setDurationType] = useState('All Durations')
  const [priceRangeIndex, setPriceRangeIndex] = useState(0)
  const [sortBy, setSortBy] = useState('popular')

  useEffect(() => {
    setActiveCategory(categoryFromUrl)
  }, [categoryFromUrl])

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    if (cat === 'All Tours') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams, { replace: true })
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

  return (
    <>
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
    </>
  )
}
