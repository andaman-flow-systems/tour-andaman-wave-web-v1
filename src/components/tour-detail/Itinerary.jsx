import './Itinerary.css'

export default function Itinerary({ items }) {
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
