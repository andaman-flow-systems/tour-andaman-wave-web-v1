import { businessInfo } from '@/lib/siteData'
import './TrustBadges.css'

const badges = [
  { icon: '🏛️', label: 'Licensed Tour Operator', sub: businessInfo.tatLicense },
  { icon: '🔒', label: 'Secure Booking', sub: '256-bit SSL encrypted' },
  { icon: '🛡️', label: 'Fully Insured', sub: 'Guest & liability cover' },
  { icon: '💳', label: 'No Hidden Fees', sub: 'Pay later available' },
]

interface TrustBadgesProps {
  compact?: boolean
}

export default function TrustBadges({ compact = false }: TrustBadgesProps) {
  return (
    <ul className={`trust-badges ${compact ? 'trust-badges--compact' : ''}`}>
      {badges.map((badge) => (
        <li key={badge.label} className="trust-badges__item">
          <span className="trust-badges__icon" aria-hidden="true">{badge.icon}</span>
          <div>
            <strong>{badge.label}</strong>
            {!compact && <span>{badge.sub}</span>}
          </div>
        </li>
      ))}
    </ul>
  )
}
