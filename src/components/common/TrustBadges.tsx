import { businessInfo } from '@/lib/siteData'
import { Building, Lock, ShieldCheck, CreditCard } from 'lucide-react'
import './TrustBadges.css'

const badges = [
  { icon: <Building size={24} strokeWidth={1.5} />, label: 'Licensed Tour Operator', sub: businessInfo.tatLicense },
  { icon: <Lock size={24} strokeWidth={1.5} />, label: 'Secure Booking', sub: '256-bit SSL encrypted' },
  { icon: <ShieldCheck size={24} strokeWidth={1.5} />, label: 'Fully Insured', sub: 'Guest & liability cover' },
  { icon: <CreditCard size={24} strokeWidth={1.5} />, label: 'No Hidden Fees', sub: 'Pay later available' },
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
