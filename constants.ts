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
  ctaSecondary: "Request a Quote Online"
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
    question: 'Do you offer free construction estimates in Jamaica, Queens?',
    answer: 'Yes, M Alam General Construction provides completely free, no-obligation estimates for all construction and renovation projects throughout Jamaica, Queens and the greater NYC metro area. Our licensed estimators will visit your property, assess your project requirements, and provide a detailed written quote within 24-48 hours. Whether you\'re planning a kitchen remodel, bathroom renovation, complete home makeover, or commercial build-out, we offer transparent pricing with no hidden fees. As a locally-owned contractor serving Queens for over 15 years, we pride ourselves on honest estimates and competitive rates. Contact us today at (347) 986-4284 to schedule your free consultation and discover why homeowners and businesses throughout Jamaica trust us for quality construction services.'
  },
  {
    id: 'f2',
    question: 'What areas does your construction company serve in NYC?',
    answer: 'M Alam General Construction proudly serves Jamaica, Queens as our home base, along with Forest Hills, Flushing, Ozone Park, Queens Village, Richmond Hill, and all surrounding NYC neighborhoods. As a licensed and insured general contractor based in Queens, we have deep knowledge of local building codes, permit requirements, and architectural styles unique to our area. Our service area extends throughout the five boroughs including Brooklyn, Manhattan, and the Bronx for larger commercial construction projects. With over 500 completed projects across Queens and NYC, we understand the unique challenges of urban construction and renovation work. Call us to confirm we service your specific location and learn why we\'re the trusted choice for residential and commercial construction throughout the New York City metro area.'
  },
  {
    id: 'f3',
    question: 'Do you handle both residential and commercial construction projects?',
    answer: 'Absolutely! M Alam General Construction specializes in both residential and commercial construction services across Queens and NYC. For homeowners, we provide complete renovation services including kitchen and bathroom remodeling, home additions, basement finishing, flooring installation, and full-house makeovers. Our commercial construction expertise includes retail build-outs, office renovations, restaurant construction, and small business improvements. As a fully licensed and insured contractor in New York, we have the credentials and experience to manage projects of all sizes—from small repair jobs to major commercial renovations. Our team understands the different requirements, timelines, and regulations for residential versus commercial work, ensuring your project meets all NYC building codes and is completed on schedule and within budget.'
  },
  {
    id: 'f4',
    question: 'Is M Alam Construction licensed and insured in New York?',
    answer: 'Yes, M Alam General Construction is fully licensed, bonded, and insured to perform all types of construction work in New York City and throughout Queens. We maintain comprehensive general liability insurance and workers\' compensation coverage to protect both our clients and our team members on every job site. Our contractors are licensed professionals who stay current with all NYC Department of Buildings requirements, building codes, and safety regulations. We also handle all necessary permits and inspections for your project, ensuring full compliance with local regulations. As an established construction company serving Jamaica, Queens for over 15 years, we take pride in operating with complete transparency and accountability. You can request copies of our insurance certificates and licensing documentation at any time for your peace of mind and project records.'
  },
  {
    id: 'f5',
    question: 'Do you take on small construction jobs and repairs in Queens?',
    answer: 'Yes! Unlike many larger contractors, M Alam General Construction welcomes both small repair jobs and major renovation projects throughout Queens and NYC. We understand that not every job is a complete remodel—sometimes you just need a skilled contractor for drywall repair, fixing a leaky faucet, replacing flooring in one room, or patching concrete. Our experienced team handles everything from minor home repairs and maintenance to full-scale renovations and new construction. No job is too small for our attention and professional craftsmanship. We believe in building long-term relationships with our clients, and many of our small repair customers later trust us with their major renovation projects. Whether it\'s a quick fix or a multi-month construction project, you\'ll receive the same quality workmanship, fair pricing, and reliable service that has earned us hundreds of five-star reviews across Jamaica, Queens.'
  },
  {
    id: 'f6',
    question: 'How long does a typical construction or renovation project take?',
    answer: 'Project timelines vary significantly based on scope, size, and complexity. A standard bathroom remodel typically takes 2-3 weeks, while kitchen renovations average 4-6 weeks from start to finish. Complete home renovations can range from 2-4 months depending on square footage and the extent of work required. Commercial build-outs and larger projects may take 3-6 months or longer. At M Alam General Construction, we provide detailed project schedules during the estimate phase, outlining each milestone from demolition through final inspection. Factors affecting timeline include permit approval (typically 2-4 weeks in NYC), material availability, weather conditions for exterior work, and any unexpected issues discovered during construction. We pride ourselves on meeting deadlines and maintaining open communication throughout your project. Our 15+ years serving Queens means we understand NYC\'s unique permitting processes and can accurately forecast realistic completion dates for your construction project.'
  },
  {
    id: 'f7',
    question: 'What permits are needed for construction work in Queens, NYC?',
    answer: 'Construction permit requirements in Queens and NYC depend on your project scope. Most major renovations require permits from the NYC Department of Buildings, including structural changes, electrical work, plumbing modifications, and HVAC installations. Kitchen and bathroom remodels typically need plumbing and electrical permits, while simple cosmetic updates like painting or flooring replacement may not require permits. As your licensed general contractor in Queens, M Alam General Construction handles all permit applications, submissions, and inspections on your behalf—this is included in our comprehensive service. We ensure all work complies with current NYC building codes, fire safety regulations, and zoning requirements. Our team stays current with frequently changing NYC construction regulations, saving you time and preventing costly violations. We also coordinate required inspections at key project milestones, ensuring your renovation is fully legal and won\'t cause issues when selling your property in the future.'
  },
  {
    id: 'f8',
    question: 'Do you provide warranties on your construction work?',
    answer: 'Yes, M Alam General Construction stands behind our work with comprehensive warranties on all construction and renovation projects. We provide a standard one-year workmanship warranty covering all labor and installation, plus we pass through manufacturer warranties on materials, fixtures, and appliances (typically 5-25 years depending on the product). Our warranty covers any defects in construction, installation errors, or material failures that occur under normal use. For specialized systems like roofing, HVAC, or major appliances, extended manufacturer warranties apply. As a licensed and insured contractor serving Jamaica, Queens for over 15 years, our reputation depends on quality work and customer satisfaction. We\'re still here years after project completion to address any concerns. All warranty terms are clearly outlined in your construction contract, and we maintain detailed records of all work performed. Contact us if you have any post-project issues—our commitment to excellence doesn\'t end when we hand you the keys.'
  },
  {
    id: 'f9',
    question: 'What types of construction services do you offer in Queens?',
    answer: 'M Alam General Construction offers comprehensive residential and commercial construction services throughout Queens and NYC. Our residential services include complete home renovations, kitchen remodeling, bathroom renovations, basement finishing, home additions, flooring installation (hardwood, tile, laminate, vinyl), drywall and painting, interior remodeling, and exterior construction including siding, roofing, and masonry work. For commercial clients, we provide retail build-outs, office renovations, restaurant construction, and small business improvements. We also specialize in concrete and masonry work, including driveways, walkways, patios, and foundation repairs. From design consultation through final inspection, we handle every aspect of your project including permits, material sourcing, demolition, construction, and cleanup. As a full-service general contractor in Jamaica, Queens, we\'re your single point of contact for all construction needs, eliminating the hassle of coordinating multiple subcontractors and ensuring consistent quality throughout your entire project.'
  },
  {
    id: 'f10',
    question: 'How much does a construction or renovation project cost in Queens?',
    answer: 'Construction costs in Queens and NYC vary widely based on project scope, materials, and finishes selected. As a general guideline, bathroom remodels typically range from $8,000-$25,000, kitchen renovations from $15,000-$50,000+, and complete home renovations from $50,000-$200,000+ depending on square footage. Small repairs and handyman services may cost $200-$2,000, while commercial build-outs can range from $25,000 to several hundred thousand dollars. M Alam General Construction provides transparent, itemized estimates breaking down labor, materials, permits, and other costs so you understand exactly where your investment goes. We work with clients at various budget levels and can suggest value engineering options to maximize quality within your budget. Factors affecting cost include material selection (economy vs. premium finishes), structural changes required, permit fees, and current NYC labor rates. Contact us for a free, detailed estimate specific to your project—we\'ll visit your property and provide accurate pricing with no hidden fees or surprises.'
  }
];