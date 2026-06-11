import './IncludedExcluded.css'

interface IncludedExcludedProps {
  included: string[]
  excluded: string[]
}

export default function IncludedExcluded({ included, excluded }: IncludedExcludedProps) {
  return (
    <div className="included-excluded">
      <div className="included-excluded__col">
        <h4>What&apos;s Included</h4>
        <ul className="included-excluded__list included-excluded__list--yes">
          {included.map((item) => (
            <li key={item}><span aria-hidden="true">✔</span> {item}</li>
          ))}
        </ul>
      </div>
      <div className="included-excluded__col">
        <h4>What&apos;s Not Included</h4>
        <ul className="included-excluded__list included-excluded__list--no">
          {excluded.map((item) => (
            <li key={item}><span aria-hidden="true">✕</span> {item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
