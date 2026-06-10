import Hero from '../components/home/Hero'
import Intro from '../components/home/Intro'
import FeaturedTours from '../components/home/FeaturedTours'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Testimonials from '../components/home/Testimonials'
import CTABanner from '../components/common/CTABanner'
import SectionHeading from '../components/common/SectionHeading'
import SocialProof from '../components/common/SocialProof'
import TrustBadges from '../components/common/TrustBadges'
import useDocumentTitle from '../hooks/useDocumentTitle'

export default function HomePage() {
  useDocumentTitle(
    'Phuket Tours, Island Hopping & Activities',
    'Book unforgettable Phuket tours: Phi Phi Islands, James Bond Island, Khao Sok, sunset cruises and more. Free hotel pickup, local guides, best price guarantee.'
  )

  return (
    <>
      <Hero />
      <Intro />
      <FeaturedTours />
      <WhyChooseUs />
      <Testimonials />
      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Trusted Worldwide"
            title="What Travelers Say On Google &amp; Tripadvisor"
            description="Real reviews from real guests across the platforms travelers trust most."
          />
          <SocialProof />
          <div style={{ marginTop: 32 }}>
            <TrustBadges />
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  )
}
