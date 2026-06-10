import SectionHeading from '../common/SectionHeading'
import { whyChooseUs } from '../../services/siteData'
import './WhyChooseUs.css'

export default function WhyChooseUs() {
  return (
    <section className="section why-choose">
      <div className="container">
        <SectionHeading
          eyebrow="Why Travelers Choose Us"
          title="Booking With Us Is Easy &amp; Risk-Free"
          description="We make planning your Phuket adventure simple, transparent and worry-free from start to finish."
        />
        <div className="grid grid-3">
          {whyChooseUs.map((item) => (
            <div className="why-card" key={item.title}>
              <div className="why-card__icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
