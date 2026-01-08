import React, { useRef, useEffect, useState } from 'react';
import { MapPin, CheckCircle2, ArrowRight, Shield, Award, Users, Hammer } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const credentials = [
    { icon: Shield, title: 'NYC Licensed', description: 'Fully compliant with all NYC building codes' },
    { icon: Award, title: 'Bonded & Insured', description: 'Complete protection for every project' },
    { icon: Users, title: 'Local Experts', description: 'Deep roots in Queens communities' },
    { icon: Hammer, title: 'Quality First', description: 'Premium materials & craftsmanship' },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 bg-onyx-900 overflow-hidden scroll-mt-premium"
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-onyx-900 via-onyx-800/30 to-onyx-900"></div>
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-copper-500/3 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-premium opacity-30"></div>
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-600/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">

          {/* Image Composition */}
          <div className={`relative mb-16 lg:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-copper-500/30 rounded-tl-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-copper-500/30 rounded-br-3xl"></div>

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-onyx-950/50">
                <img
                  src="/assets/about-new-1.png"
                  alt="Premium Bathroom Renovation by M Alam Construction"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx-900/40 to-transparent"></div>
              </div>

              {/* Secondary Floating Image */}
              <div className="absolute -bottom-8 -left-8 w-2/3 rounded-xl overflow-hidden shadow-2xl border-4 border-onyx-900 hidden md:block transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/assets/about-new-2.png"
                  alt="Exterior Construction Work"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 right-8 glass px-6 py-4 rounded-xl shadow-xl animate-float hidden lg:block">
                <div className="text-center">
                  <span className="font-display text-4xl text-copper-500">15+</span>
                  <p className="text-ivory text-xs font-medium mt-1">Years in Business</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-copper-500"></div>
              <span className="text-copper-500 font-semibold uppercase tracking-[0.2em] text-xs">About Us</span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6 leading-[1.1]">
              Queens' Most Trusted
              <span className="block gradient-text">Construction Partner</span>
            </h2>

            {/* Description - Improved Copy */}
            <p className="text-warm-gray text-lg leading-relaxed mb-8">
              For over 15 years, <span className="text-ivory font-medium">M Alam General Construction</span> has
              been transforming homes and businesses across Queens and the NYC metro area. We combine
              <span className="text-ivory font-medium"> old-world craftsmanship </span> with
              <span className="text-ivory font-medium"> modern building techniques</span> to deliver
              results that stand the test of time.
            </p>

            <p className="text-warm-gray text-base leading-relaxed mb-10">
              From kitchen and bathroom renovations to complete commercial build-outs, our team approaches
              every project with the same commitment: transparent communication, fair pricing, and
              exceptional quality that exceeds expectations.
            </p>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {credentials.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 bg-onyx-800/40 backdrop-blur-sm p-4 rounded-xl border border-onyx-700/50 hover:border-copper-500/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-copper-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-copper-500/20 transition-colors">
                    <item.icon className="w-5 h-5 text-copper-500" />
                  </div>
                  <div>
                    <h4 className="text-ivory font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-warm-gray text-xs">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Location & CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center gap-2 text-warm-gray">
                <MapPin className="w-5 h-5 text-copper-500" />
                <span className="text-sm font-medium">Serving Jamaica, Queens & All NYC Metro</span>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-copper-500 hover:text-copper-400 font-semibold text-sm group transition-colors"
              >
                <span className="hover-underline">Learn Our Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-600/20 to-transparent"></div>
    </section>
  );
};

export default About;