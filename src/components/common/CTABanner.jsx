import { Link } from 'react-router-dom'
import { siteInfo } from '../../services/siteData'
import './CTABanner.css'

export default function CTABanner({
  title = 'Ready to Explore Phuket?',
  description = 'Secure your spot today — free cancellation up to 24 hours before your tour, best price guaranteed.',
  primaryLabel = 'Book Your Tour Now',
  primaryTo = '/booking',
}) {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-banner__actions">
          <Link to={primaryTo} className="btn btn-primary">{primaryLabel}</Link>
          <a
            href={`https://wa.me/${siteInfo.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
