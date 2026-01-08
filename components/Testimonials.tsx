import React, { useState, useRef, useEffect } from 'react';
import { REVIEWS } from '../constants';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink, MapPin, Calendar } from 'lucide-react';

// Extended testimonial data with more premium details
const ENHANCED_REVIEWS = [
  {
    ...REVIEWS[0],
    location: 'Jamaica, Queens',
    projectType: 'Kitchen Renovation',
    date: 'December 2024',
    image: '/assets/testimonial-1.jpg'
  },
  {
    ...REVIEWS[1],
    location: 'Forest Hills, NY',
    projectType: 'Bathroom Remodel',
    date: 'November 2024',
    image: '/assets/testimonial-2.jpg'
  },
  {
    ...REVIEWS[2],
    location: 'Flushing, NY',
    projectType: 'Full Home Renovation',
    date: 'October 2024',
    image: '/assets/testimonial-3.jpg'
  },
  {
    ...REVIEWS[3],
    location: 'Ozone Park, NY',
    projectType: 'Exterior Construction',
    date: 'September 2024',
    image: '/assets/testimonial-4.jpg'
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.children[0]?.clientWidth || 380;
    const gap = 24;
    const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="relative py-24 bg-onyx-900 overflow-hidden scroll-mt-premium"
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-onyx-900 via-onyx-800/50 to-onyx-900"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-copper-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/3 rounded-full blur-3xl"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-premium"></div>
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-600/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center gap-2 text-copper-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              <span className="w-12 h-px bg-copper-500"></span>
              Client Stories
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-tight">
              Words From Those <br />
              <span className="gradient-text">We've Built For</span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className={`flex items-center gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button
              onClick={() => scrollTo('left')}
              className="w-12 h-12 rounded-full border border-onyx-600 hover:border-copper-500 hover:bg-copper-500/10 flex items-center justify-center transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 text-warm-gray group-hover:text-copper-500" />
            </button>
            <button
              onClick={() => scrollTo('right')}
              className="w-12 h-12 rounded-full border border-onyx-600 hover:border-copper-500 hover:bg-copper-500/10 flex items-center justify-center transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 text-warm-gray group-hover:text-copper-500" />
            </button>
          </div>
        </div>

        {/* Google Rating Banner */}
        <div className={`mb-10 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-4 glass px-6 py-3 rounded-full">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-copper-400 text-copper-400" />
              ))}
            </div>
            <span className="text-ivory font-semibold text-sm">5.0 Rating</span>
            <span className="w-px h-4 bg-onyx-600"></span>
            <span className="text-warm-gray text-sm">Based on Google Reviews</span>
            <ExternalLink className="w-4 h-4 text-copper-500" />
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {ENHANCED_REVIEWS.map((review, index) => (
            <div
              key={review.id}
              className={`testimonial-card flex-none w-[340px] md:w-[400px] bg-onyx-800/60 backdrop-blur-sm rounded-2xl p-8 border border-onyx-700/50 snap-start transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-10 h-10 text-copper-500/20" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-copper-400 text-copper-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-ivory text-lg leading-relaxed mb-8 font-light">
                "{review.text}"
              </blockquote>

              {/* Project Badge */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-copper-500/10 text-copper-400 px-3 py-1.5 rounded-full text-xs font-medium">
                  {review.projectType}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-onyx-700/50">
                <img
                  src={review.image}
                  alt={review.author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-copper-500/20"
                />
                <div className="flex-1">
                  <h4 className="text-ivory font-semibold text-base mb-1">{review.author}</h4>
                  <div className="flex items-center gap-3 text-warm-gray text-xs">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {review.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div
            className={`flex-none w-[340px] md:w-[400px] bg-gradient-to-br from-copper-600/20 to-copper-500/10 backdrop-blur-sm rounded-2xl p-8 border border-copper-500/20 snap-start flex flex-col justify-center items-center text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '700ms' }}
          >
            <div className="w-16 h-16 rounded-full bg-copper-500/20 flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-copper-500 fill-copper-500" />
            </div>
            <h3 className="font-display text-2xl text-ivory mb-4">Join 500+ Happy Clients</h3>
            <p className="text-warm-gray text-sm mb-6 max-w-xs">
              Experience the M. Alam difference. Start your project with a team that delivers excellence.
            </p>
            <a
              href="#estimate-form"
              className="inline-flex items-center gap-2 bg-copper-500 hover:bg-copper-600 text-onyx-900 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300"
            >
              Start Your Project
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-600/20 to-transparent"></div>
    </section>
  );
};

export default Testimonials;