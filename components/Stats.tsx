import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Building2, Users, Clock, TrendingUp, Star } from 'lucide-react';

interface StatItem {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

const AnimatedCounter: React.FC<{ target: number; suffix: string; isVisible: boolean }> = ({ target, suffix, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return <span>{count}{suffix}</span>;
};

const Stats: React.FC = () => {
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

  const stats: StatItem[] = [
    {
      value: "15",
      numericValue: 15,
      suffix: "+",
      label: "Years",
      sublabel: "of Excellence",
      icon: Trophy
    },
    {
      value: "500",
      numericValue: 500,
      suffix: "+",
      label: "Projects",
      sublabel: "Completed",
      icon: Building2
    },
    {
      value: "100",
      numericValue: 100,
      suffix: "%",
      label: "Client",
      sublabel: "Satisfaction",
      icon: Users
    },
    {
      value: "24",
      numericValue: 24,
      suffix: "/7",
      label: "Support",
      sublabel: "Available",
      icon: Clock
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-onyx-800 overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-onyx-900 via-onyx-800 to-onyx-900"></div>

        {/* Decorative copper glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-copper-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-copper-600/5 rounded-full blur-3xl"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-premium opacity-50"></div>
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-600/30 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-copper-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            <Star className="w-4 h-4 fill-copper-500" />
            Proven Track Record
            <Star className="w-4 h-4 fill-copper-500" />
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ivory">
            Numbers That Speak <span className="gradient-text">Excellence</span>
          </h2>
        </div>

        {/* Stats Grid - Modern Card Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-card relative group bg-onyx-700/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-onyx-600/50 hover:border-copper-500/30 overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-copper-500/0 to-copper-600/0 group-hover:from-copper-500/5 group-hover:to-copper-600/10 transition-all duration-500"></div>

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-copper-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="relative mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-onyx-800/80 border border-onyx-600/50 group-hover:border-copper-500/30 group-hover:bg-copper-500/10 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-copper-500" />
                </div>
              </div>

              {/* Value */}
              <div className="relative">
                <span className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory leading-none">
                  <AnimatedCounter
                    target={stat.numericValue}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                  />
                </span>
              </div>

              {/* Label */}
              <div className="relative mt-2">
                <span className="block text-ivory font-semibold text-sm md:text-base">
                  {stat.label}
                </span>
                <span className="block text-warm-gray text-xs md:text-sm">
                  {stat.sublabel}
                </span>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-copper-500/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-copper-400 hover:text-copper-300 text-sm font-medium transition-colors group"
          >
            <span>Learn More About Our Journey</span>
            <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-600/30 to-transparent"></div>
    </section>
  );
};

export default Stats;