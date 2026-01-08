import {
  Home,
  PaintBucket,
  Hammer,
  Wrench,
  LayoutDashboard,
  BrickWall,
  Ruler,
  Construction,
  Building2
} from 'lucide-react';
import { Service, Review, FAQItem, NavLink } from './types';

export const BUSINESS_INFO = {
  name: "M Alam General Construction",
  address: "146 20 107th Ave, Jamaica, NY 11435",
  phone: "(347) 986 4284",
  phoneClean: "3479864284",
  hours: "Open until 5 PM",
  email: "info@malamconstruction.com",
  description: "Reliable construction and renovation company based in Jamaica Queens. Quality workmanship for residential and commercial projects.",
  attributes: ["Asian owned", "LGBTQ+ friendly"],
  ctaPrimary: "Call for a Free Estimate",
  ctaSecondary: "Request a Quote Online",

  // Cal.com Integration (get event type ID from Cal.com dashboard)
  calEventTypeId: "1234567", // TODO: Replace with your actual Cal.com event type ID

  // Social Proof Links
  googleReviews: "https://g.page/r/YOUR_GOOGLE_ID/review", // TODO: Add your Google Business review link
  facebook: "https://facebook.com/malamconstruction",
  instagram: "https://instagram.com/malamconstruction",
  yelp: "https://yelp.com/biz/m-alam-general-construction",

  // Review Stats
  reviewCount: 50,
  averageRating: 4.9
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export interface ExtendedService extends Service {
  category: string;
  ctaText: string;
}

export const SERVICES: ExtendedService[] = [
  {
    id: 'renovations',
    title: 'Home Renovations',
    category: 'Interior',
    description: 'Complete home makeovers tailored to your vision and budget.',
    icon: Home,
    ctaText: 'Plan My Renovation'
  },
  {
    id: 'interior',
    title: 'Interior Remodeling',
    category: 'Interior',
    description: 'Transform your living spaces with modern designs and expert craftsmanship.',
    icon: LayoutDashboard,
    ctaText: 'Start My Remodel'
  },
  {
    id: 'exterior',
    title: 'Exterior Construction',
    category: 'Exterior',
    description: 'Siding, roofing, and structural improvements to boost curb appeal.',
    icon: Building2,
    ctaText: 'Boost My Curb Appeal'
  },
  {
    id: 'kitchen-bath',
    title: 'Kitchen & Bathroom',
    category: 'Interior',
    description: 'Luxurious upgrades for the most important rooms in your house.',
    icon: Wrench,
    ctaText: 'Upgrade My Space'
  },
  {
    id: 'drywall-paint',
    title: 'Drywall & Painting',
    category: 'Finishing',
    description: 'Flawless walls and professional painting for a fresh look.',
    icon: PaintBucket,
    ctaText: 'Refresh My Walls'
  },
  {
    id: 'flooring',
    title: 'Flooring Installation',
    category: 'Finishing',
    description: 'Hardwood, tile, laminate, and vinyl flooring installation services.',
    icon: Ruler,
    ctaText: 'Explore Flooring Options'
  },
  {
    id: 'masonry',
    title: 'Masonry & Concrete',
    category: 'Exterior',
    description: 'Durable driveways, walkways, patios, and foundation work.',
    icon: BrickWall,
    ctaText: 'Book a Specialist'
  },
  {
    id: 'repairs',
    title: 'General Repairs',
    category: 'Repairs',
    description: 'Reliable maintenance and quick fixes for property upkeep.',
    icon: Hammer,
    ctaText: 'Fix My Issue'
  },
  {
    id: 'custom',
    title: 'Custom Projects',
    category: 'Custom Work',
    description: 'Unique construction solutions tailored to your specific needs.',
    icon: Construction,
    ctaText: 'Build My Custom Idea'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Sarkar Ads',
    text: 'Their service is outstanding — timely, reliable, and always professional. Highly recommended!',
    rating: 5
  },
  {
    id: '2',
    author: 'Ripon Sarkar',
    text: 'They are highly professional and deliver excellent work. I highly recommend them.',
    rating: 5
  },
  {
    id: '3',
    author: 'Mj',
    text: 'They did a very good job and were reasonable. I recommend them always.',
    rating: 5
  },
  {
    id: '4',
    author: 'Md Sagar',
    text: 'Thank you very much, your service is very good for us. I hope everyone will come.',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: 'Do you offer free estimates?',
    answer: 'Yes, we provide completely free, no-obligation estimates for all projects. Our team will visit your property, assess the work needed, and provide a detailed written quote within 24-48 hours.'
  },
  {
    id: 'f2',
    question: 'What areas do you serve?',
    answer: 'We serve all five NYC boroughs (Manhattan, Brooklyn, Queens, Bronx, Staten Island) plus nearby areas in New Jersey. Our projects range from small repairs in Jamaica to large commercial build-outs across the city.'
  },
  {
    id: 'f3',
    question: 'Do you handle both residential and commercial work?',
    answer: 'Absolutely. We specialize in both—from kitchen remodels and bathroom renovations for homeowners to retail build-outs, office renovations, and restaurant construction for businesses.'
  },
  {
    id: 'f4',
    question: 'Are you licensed and insured?',
    answer: 'Yes, we\'re fully licensed, bonded, and insured with comprehensive general liability and workers\' compensation coverage. We maintain all NYC Department of Buildings requirements and stay current with building codes.'
  },
  {
    id: 'f5',
    question: 'Do you take small jobs?',
    answer: 'Yes! We welcome projects of all sizes. Whether you need drywall repair, a leaky faucet fixed, or a complete home renovation, we bring the same professional craftsmanship to every job.'
  },
  {
    id: 'f6',
    question: 'How long do projects typically take?',
    answer: 'It varies by scope: bathroom remodels average 2-3 weeks, kitchens 4-6 weeks, and full renovations 2-4 months. We provide a detailed timeline during the estimate phase with clear milestones from start to finish.'
  },
  {
    id: 'f7',
    question: 'Do you handle permits?',
    answer: 'Yes, permit applications and inspections are included in our service. Most major renovations (structural changes, electrical, plumbing, HVAC) require NYC permits, and we handle the entire process on your behalf.'
  },
  {
    id: 'f8',
    question: 'What warranties do you offer?',
    answer: 'We provide a one-year workmanship warranty on all labor and installation, plus we pass through manufacturer warranties on materials and fixtures (typically 5-25 years depending on the product).'
  },
  {
    id: 'f9',
    question: 'What services do you offer?',
    answer: 'Our services include kitchen and bathroom remodeling, basement finishing, home additions, flooring, drywall, painting, commercial build-outs, office renovations, and complete home or building renovations.'
  },
  {
    id: 'f10',
    question: 'How much do projects cost?',
    answer: 'Costs vary based on scope and materials. Typical ranges: bathroom remodels $8,000-$25,000, kitchens $15,000-$50,000+, full renovations $50,000-$200,000+. Contact us at (347) 986-4284 for a detailed estimate specific to your project.'
  }
];