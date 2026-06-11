import Link from 'next/link'
import SectionHeading from '../common/SectionHeading'
import { whyChooseUs } from '@/lib/siteData'
import './WhyChooseUs.css'

interface WhyChooseUsProps {
  id?: string
}

export default function WhyChooseUs({ id }: WhyChooseUsProps) {
  return (
    <section id={id} className="section why-choose">
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
        <div className="why-choose__more">
          <Link href="/about" className="btn btn-ghost">Learn More About Us</Link>
        </div>
      </div>
    </section>
  )
}
