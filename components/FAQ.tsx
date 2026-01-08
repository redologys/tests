import React, { useState, useRef, useEffect } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('f1');
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

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-24 bg-onyx-800 overflow-hidden scroll-mt-premium"
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-onyx-900 via-onyx-800 to-onyx-900"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-copper-500/3 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-premium opacity-30"></div>
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-600/30 to-transparent"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span
            className={`inline-flex items-center gap-2 text-copper-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </span>
          <h2
            className={`font-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6 leading-tight transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p
            className={`text-warm-gray text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Everything you need to know about working with us. Can't find your answer?
            We're just a call away.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={faq.id}
              className={`bg-onyx-700/40 backdrop-blur-sm rounded-2xl border border-onyx-600/50 overflow-hidden transition-all duration-500 hover:border-copper-500/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${300 + index * 75}ms` }}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="font-display text-xl text-ivory group-hover:text-copper-400 transition-colors pr-4">
                  {faq.question}
                </span>
                <div
                  className={`w-10 h-10 rounded-xl bg-onyx-800/80 border border-onyx-600/50 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openId === faq.id ? 'bg-copper-500/20 border-copper-500/30 rotate-180' : ''
                    }`}
                >
                  <ChevronDown className={`w-5 h-5 ${openId === faq.id ? 'text-copper-500' : 'text-warm-gray'}`} />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-onyx-600/50 mb-5"></div>
                  <p className="text-warm-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-14 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="glass px-8 py-8 rounded-2xl inline-flex flex-col sm:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-xl bg-copper-500/20 flex items-center justify-center">
              <MessageCircle className="w-7 h-7 text-copper-500" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-display text-2xl text-ivory mb-1">Still Have Questions?</h3>
              <p className="text-warm-gray text-sm">Our team is ready to help you get started.</p>
            </div>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-copper-500 hover:bg-copper-600 text-onyx-900 px-6 py-3 rounded-xl font-semibold text-sm transition-all btn-glow"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-600/30 to-transparent"></div>
    </section>
  );
};

export default FAQ;