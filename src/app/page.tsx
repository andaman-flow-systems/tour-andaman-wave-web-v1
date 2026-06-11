import Hero from '@/components/home/Hero'
import Intro from '@/components/home/Intro'
import FeaturedTours from '@/components/home/FeaturedTours'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Testimonials from '@/components/home/Testimonials'
import ContactTeaser from '@/components/home/ContactTeaser'
import CTABanner from '@/components/common/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedTours id="tours" />
      <WhyChooseUs id="about" />
      <Testimonials id="reviews" />
      <ContactTeaser id="contact" />
      <CTABanner />
    </>
  )
}
