import React, { useEffect, useState } from 'react';
import { ArrowRight, ShieldCheck, Award, Sparkles, Play, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-onyx-900 text-ivory overflow-hidden flex items-center">
      {/* Premium Background Composition */}
      <div className="absolute inset-0 z-0">
        {/* Main Hero Image - NYC Skyline Construction */}
        <img
          src="/assets/hero-nyc-skyline.jpg"
          alt="NYC Construction Skyline - M. Alam General Construction"
          className="w-full h-full object-cover scale-105 transform opacity-60"
        />

        {/* Layered Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-onyx-900 via-onyx-900/80 to-onyx-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-onyx-900 via-transparent to-onyx-900/60"></div>

        {/* Copper Accent Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-copper-600/10 via-transparent to-transparent mix-blend-overlay"></div>

        {/* Premium Grid Pattern */}
        <div className="absolute inset-0 bg-grid-premium"></div>

        {/* Noise Texture for Premium Feel */}
        <div className="absolute inset-0 noise-overlay"></div>

        {/* Vignette Effect */}
        <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(10,15,20,0.8)]"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-copper-500/5 rounded-full blur-3xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '-2s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="max-w-4xl">

          {/* Trust Badge - Premium Pill */}
          <div
            className={`inline-flex items-center gap-3 glass px-5 py-2.5 rounded-full mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-copper-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-copper-500"></span>
            </span>
            <span className="text-copper-400 text-xs font-semibold uppercase tracking-[0.2em]">
              Trusted Since 2009 • Queens, NY
            </span>
          </div>

          {/* Main Headline - Architectural Statement */}
          <h1
            className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory leading-[0.95] mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="block">Precision Craftsmanship.</span>
            <span className="block text-copper-500">Lasting Excellence.</span>
          </h1>

          {/* Sub-headline - Value Prop */}
          <p
            className={`text-lg md:text-xl text-warm-gray max-w-2xl leading-relaxed mb-10 font-light transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            We don't just build structures—we craft legacies. From concept to completion,
            experience construction that combines <span className="text-ivory font-medium">architectural vision</span> with
            <span className="text-ivory font-medium"> uncompromising quality</span>.
          </p>

          {/* CTA Buttons - Premium Styling */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-14 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Primary CTA */}
            <a
              href="#estimate-form"
              className="group relative inline-flex items-center justify-center gap-3 bg-copper-gradient text-onyx-900 px-8 py-4 rounded-lg font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(198,122,57,0.4)] btn-glow"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Your Free Estimate
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>

            {/* Secondary CTA - Glassmorphic */}
            <a
              href="#gallery"
              className="group inline-flex items-center justify-center gap-3 glass hover:bg-onyx-600/50 text-ivory px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:border-copper-500/30"
            >
              <Play className="w-4 h-4 text-copper-500" />
              <span>View Our Portfolio</span>
            </a>
          </div>

          {/* Trust Indicators - Horizontal Strip */}
          <div
            className={`flex flex-wrap items-center gap-6 md:gap-10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center gap-2 text-warm-gray">
              <ShieldCheck className="w-5 h-5 text-copper-500" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-onyx-600"></div>
            <div className="flex items-center gap-2 text-warm-gray">
              <Award className="w-5 h-5 text-copper-500" />
              <span className="text-sm font-medium">15+ Years Excellence</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-onyx-600"></div>
            <div className="flex items-center gap-2 text-warm-gray">
              <Sparkles className="w-5 h-5 text-copper-500" />
              <span className="text-sm font-medium">500+ Projects Delivered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-600/50 to-transparent"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
        <span className="text-xs uppercase tracking-widest text-warm-gray">Explore</span>
        <ChevronDown className="w-5 h-5 text-copper-500" />
      </div>
    </section>
  );
};

export default Hero;