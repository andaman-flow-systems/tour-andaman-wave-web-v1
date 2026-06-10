// Central place for company/contact information used across the site.

export const siteInfo = {
  name: 'Andaman Wave Tours',
  tagline: 'Your trusted local guide to Phuket adventures',
  phone: '+66 81 234 5678',
  whatsapp: '66812345678', // numeric, no symbols, used for wa.me links
  email: 'hello@andamanwavetours.com',
  address: '99/1 Patak Road, Karon, Muang, Phuket 83100, Thailand',
  facebook: 'https://facebook.com/andamanwavetours',
  instagram: 'https://instagram.com/andamanwavetours',
  line: '@andamanwave',
  mapEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124758.5!2d98.3!3d7.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502984831be861%3A0xf12cdc1cb2a0260c!2sPhuket!5e0!3m2!1sen!2sth!4v1700000000000',
  founded: 2012,
  toursCompleted: '15,000+',
  happyGuests: '48,000+',
  rating: 4.9,
}

// Real-world business registration / licensing details, displayed in the
// footer and on trust badges to reassure travelers they are booking with a
// legitimate, regulated operator.
export const businessInfo = {
  legalName: 'Andaman Wave Tours Co., Ltd.',
  registrationNumber: 'Company Registration No. 0835563XXXXX (Phuket, Thailand)',
  tatLicense: 'TAT License No. 34/0XXXX',
  taxId: 'Tax ID: 3-9999-00XXX-XX-X',
}

export const googleReviews = {
  rating: 4.8,
  reviewCount: 2134,
  url: 'https://www.google.com/maps',
  highlights: [
    {
      name: 'Hannah Wright',
      avatar: 'https://i.pravatar.cc/150?img=44',
      rating: 5,
      date: '2 weeks ago',
      text: 'Booked the Phi Phi tour through their website, super smooth process and the day itself was incredible. Highly recommend!',
    },
    {
      name: 'Carlos Mendes',
      avatar: 'https://i.pravatar.cc/150?img=51',
      rating: 5,
      date: '1 month ago',
      text: 'Professional crew, clean boat, and they were very accommodating with our pickup time. Will book again next trip.',
    },
    {
      name: 'Freya Lindqvist',
      avatar: 'https://i.pravatar.cc/150?img=29',
      rating: 4,
      date: '1 month ago',
      text: 'Great value tour and friendly guides. Only reason for 4 stars is it was a long drive, but totally worth it.',
    },
  ],
}

export const tripAdvisorInfo = {
  rating: 4.5,
  reviewCount: 1876,
  rank: '#3 of 412 things to do in Phuket',
  badge: "Travelers' Choice 2025",
  url: 'https://www.tripadvisor.com',
}

export const whyChooseUs = [
  {
    icon: '🛡️',
    title: 'Licensed & Insured',
    description: 'Fully licensed by the Tourism Authority of Thailand with comprehensive guest insurance on every tour.',
  },
  {
    icon: '⭐',
    title: '4.9/5 Average Rating',
    description: 'Rated excellent by thousands of travelers across TripAdvisor, Google and Facebook.',
  },
  {
    icon: '🚐',
    title: 'Free Hotel Pickup',
    description: 'Hassle-free door-to-door transfers from your hotel in most areas of Phuket.',
  },
  {
    icon: '👨‍✈️',
    title: 'Expert Local Guides',
    description: 'Friendly, English-speaking guides who know Phuket inside and out.',
  },
  {
    icon: '💳',
    title: 'Best Price Guarantee',
    description: 'Transparent pricing with no hidden fees, plus free cancellation up to 24 hours before.',
  },
  {
    icon: '📞',
    title: '24/7 Support',
    description: 'Our team is always available before, during and after your tour via phone or WhatsApp.',
  },
]

export const teamMembers = [
  {
    name: 'Somchai Srisuwan',
    role: 'Founder & Operations Director',
    image: 'https://i.pravatar.cc/300?img=12',
    bio: 'Born and raised in Phuket, Somchai founded Andaman Wave Tours in 2012 to share his love of the islands with the world.',
  },
  {
    name: 'Anya Phetcharat',
    role: 'Head of Customer Experience',
    image: 'https://i.pravatar.cc/300?img=47',
    bio: 'Anya ensures every guest receives a warm welcome and a smooth, personalized booking experience from start to finish.',
  },
  {
    name: 'Krit Boonmee',
    role: 'Lead Tour Guide',
    image: 'https://i.pravatar.cc/300?img=33',
    bio: 'With over 15 years on the water, Krit leads our island-hopping and snorkeling tours with safety and fun in mind.',
  },
  {
    name: 'Mali Saetang',
    role: 'Adventure Activities Manager',
    image: 'https://i.pravatar.cc/300?img=45',
    bio: 'A certified adventure guide overseeing our jungle, ATV and zipline experiences with a focus on safety standards.',
  },
]

// Sample feed for the "recent booking activity" social-proof popup.
export const recentBookings = [
  { name: 'Sarah', country: 'United Kingdom', tour: 'Phi Phi Islands Speedboat Tour', minutesAgo: 6 },
  { name: 'Marco', country: 'Italy', tour: 'James Bond Island & Phang Nga Bay by Canoe', minutesAgo: 14 },
  { name: 'Yuki', country: 'Japan', tour: 'Khao Sok National Park & Cheow Lan Lake Adventure', minutesAgo: 21 },
  { name: 'Emma', country: 'Australia', tour: 'Romantic Sunset Dinner Cruise', minutesAgo: 9 },
  { name: 'Lukas', country: 'Germany', tour: 'Jungle ATV & Zipline Adventure', minutesAgo: 27 },
  { name: 'Priya', country: 'India', tour: 'Coral Island (Koh Hae) Snorkeling Day Trip', minutesAgo: 18 },
  { name: 'Olivia', country: 'Canada', tour: 'Phuket City & Big Buddha Cultural Tour', minutesAgo: 33 },
  { name: 'Daniel', country: 'Vietnam', tour: 'Similan Islands Snorkeling Tour by Speedboat', minutesAgo: 11 },
]

export const certifications = [
  { name: 'Tourism Authority of Thailand (TAT) Licensed', icon: '🏅' },
  { name: 'Thai Travel Agents Association Member', icon: '📜' },
  { name: 'Department of Marine and Coastal Resources Certified', icon: '🌊' },
  { name: 'Full Guest & Liability Insurance', icon: '🛡️' },
]
