import React, { useState, useRef, useEffect } from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Extract unique categories
  const categories = ['All', ...new Set(SERVICES.map(s => s.category))];

  // Filter services
  const filteredServices = activeFilter === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeFilter);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 bg-onyx-800 overflow-hidden scroll-mt-premium"
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-onyx-900 via-onyx-800 to-onyx-900"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-copper-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-teal-500/3 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-premium opacity-40"></div>
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-600/30 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span
            className={`inline-flex items-center gap-2 text-copper-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Sparkles className="w-4 h-4" />
            What We Excel At
          </span>
          <h2
            className={`font-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6 leading-tight transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Comprehensive <span className="gradient-text">Construction Services</span>
          </h2>
          <p
            className={`text-warm-gray text-lg leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            From residential renovations to commercial build-outs, we deliver precision
            craftsmanship across every project category.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category
                  ? 'bg-copper-500 text-onyx-900'
                  : 'glass text-warm-gray hover:text-ivory hover:border-copper-500/30'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-onyx-700/40 backdrop-blur-sm rounded-2xl p-7 border border-onyx-600/50 hover:border-copper-500/30 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(198,122,57,0.15)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${400 + index * 50}ms` }}
            >
              {/* Top Reveal Line */}
              <div className="service-reveal-line absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-copper-500 to-copper-400"></div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-copper-500/0 via-copper-500/0 to-copper-600/0 group-hover:from-copper-500/5 group-hover:via-transparent group-hover:to-copper-600/5 transition-all duration-500"></div>

              {/* Header */}
              <div className="relative flex justify-between items-start mb-6">
                <div className="flex flex-col gap-4">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-copper-500/70">
                    {service.category}
                  </span>
                  <div className="w-14 h-14 rounded-xl bg-onyx-800/80 border border-onyx-600/50 flex items-center justify-center group-hover:bg-copper-500/10 group-hover:border-copper-500/30 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-copper-500" />
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-onyx-600 group-hover:text-copper-500 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="font-display text-2xl text-ivory mb-3 group-hover:text-copper-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* CTA Button */}
              <a
                href="#estimate-form"
                className="relative inline-flex items-center gap-2 text-copper-500 hover:text-copper-400 text-sm font-medium group/link transition-colors"
              >
                <span className="hover-underline">{service.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>

              {/* Corner Glow */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-copper-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
          <a
            href="#estimate-form"
            className="inline-flex items-center gap-3 bg-copper-gradient text-onyx-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(198,122,57,0.3)] btn-glow"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-600/30 to-transparent"></div>
    </section>
  );
};

export default Services;