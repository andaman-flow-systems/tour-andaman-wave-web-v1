import { categories, destinations, durationTypes, priceRanges } from '@/lib/toursData'
import './TourFilters.css'

export type SortOption = 'popular' | 'price-asc' | 'price-desc' | 'rating'

interface TourFiltersProps {
  search: string
  onSearchChange: (value: string) => void
  activeCategory: string
  onCategoryChange: (value: string) => void
  destination: string
  onDestinationChange: (value: string) => void
  durationType: string
  onDurationChange: (value: string) => void
  priceRangeIndex: number
  onPriceRangeChange: (value: number) => void
  sortBy: SortOption
  onSortChange: (value: SortOption) => void
  resultCount: number
  onReset: () => void
}

export default function TourFilters({
  search,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  destination,
  onDestinationChange,
  durationType,
  onDurationChange,
  priceRangeIndex,
  onPriceRangeChange,
  sortBy,
  onSortChange,
  resultCount,
  onReset,
}: TourFiltersProps) {
  const hasActiveFilters =
    search !== '' ||
    activeCategory !== 'All Tours' ||
    destination !== 'All Destinations' ||
    durationType !== 'All Durations' ||
    priceRangeIndex !== 0

  return (
    <div className="tour-filters">
      <div className="tour-filters__search-row">
        <div className="tour-filters__search">
          <span aria-hidden="true">🔍</span>
          <input
            type="search"
            placeholder="Search tours by name, e.g. 'Phi Phi'..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search tours by name"
          />
        </div>

        <label className="tour-filters__select">
          <span>Destination</span>
          <select value={destination} onChange={(e) => onDestinationChange(e.target.value)}>
            {destinations.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </label>

        <label className="tour-filters__select">
          <span>Duration</span>
          <select value={durationType} onChange={(e) => onDurationChange(e.target.value)}>
            {durationTypes.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </label>

        <label className="tour-filters__select">
          <span>Price Range</span>
          <select
            value={priceRangeIndex}
            onChange={(e) => onPriceRangeChange(Number(e.target.value))}
          >
            {priceRanges.map((range, index) => (
              <option key={range.label} value={index}>{range.label}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="tour-filters__categories">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`tour-filters__chip ${activeCategory === cat ? 'tour-filters__chip--active' : ''}`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="tour-filters__meta">
        <span className="tour-filters__count">
          {resultCount} tour{resultCount !== 1 ? 's' : ''} found
          {hasActiveFilters && (
            <button type="button" className="tour-filters__reset" onClick={onReset}>
              Clear all filters
            </button>
          )}
        </span>
        <label className="tour-filters__sort">
          Sort by
          <select value={sortBy} onChange={(e) => onSortChange(e.target.value as SortOption)}>
            <option value="popular">Most Popular</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </label>
      </div>
    </div>
  )
}
