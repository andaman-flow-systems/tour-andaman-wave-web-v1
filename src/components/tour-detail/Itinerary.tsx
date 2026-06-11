import type { ItineraryStep } from '@/lib/types'
import './Itinerary.css'

interface ItineraryProps {
  items: ItineraryStep[]
}

export default function Itinerary({ items }: ItineraryProps) {
  return (
    <ol className="itinerary">
      {items.map((step, i) => (
        <li key={i} className="itinerary__step">
          <div className="itinerary__marker">
            <span>{i + 1}</span>
          </div>
          <div className="itinerary__content">
            <span className="itinerary__time">{step.time}</span>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
