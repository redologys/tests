import React, { useState, useEffect } from 'react';
import { NAV_LINKS, BUSINESS_INFO } from '../constants';
import { Phone, Menu, X, ChevronRight, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenCallModal?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenCallModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'bg-onyx-900/95 backdrop-blur-xl shadow-2xl shadow-onyx-950/50 py-3'
            : 'bg-transparent py-5'
          }`}
      >
        {/* Top Info Bar - Hidden on scroll */}
        <div
          className={`hidden lg:block border-b border-onyx-700/30 transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100 pb-3 mb-3'
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between text-xs text-warm-gray">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-copper-500" />
                  {BUSINESS_INFO.address}
                </span>
                <span className="text-onyx-600">|</span>
                <span>{BUSINESS_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>Licensed & Insured in NYC</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-copper-gradient flex items-center justify-center shadow-lg group-hover:shadow-copper-500/30 transition-shadow">
                <span className="font-display text-2xl text-onyx-900 leading-none">M</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-xl text-ivory leading-none block">M. ALAM</span>
                <span className="text-[10px] text-copper-500 uppercase tracking-widest">General Construction</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-warm-gray hover:text-ivory transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-copper-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={onOpenCallModal}
                className="flex items-center gap-2 text-copper-500 hover:text-copper-400 transition-colors group"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold text-sm">{BUSINESS_INFO.phone}</span>
              </button>
              <a
                href="#estimate-form"
                className="flex items-center gap-2 bg-copper-500 hover:bg-copper-600 text-onyx-900 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all btn-glow"
              >
                Free Estimate
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-onyx-700 hover:border-copper-500/50 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-ivory" />
              ) : (
                <Menu className="w-5 h-5 text-ivory" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-onyx-900/98 backdrop-blur-xl lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-6">
          {/* Mobile Navigation */}
          <nav className="flex-1 flex flex-col gap-2">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between py-4 border-b border-onyx-700/50 text-2xl font-display text-ivory hover:text-copper-500 transition-all duration-300 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                {link.label}
                <ChevronRight className="w-5 h-5 text-copper-500" />
              </a>
            ))}
          </nav>

          {/* Mobile CTAs */}
          <div className="space-y-4 mt-8">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCallModal?.();
              }}
              className="w-full flex items-center justify-center gap-3 glass text-ivory font-semibold py-4 rounded-xl"
            >
              <Phone className="w-5 h-5 text-copper-500" />
              Call {BUSINESS_INFO.phone}
            </button>
            <a
              href="#estimate-form"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-3 bg-copper-gradient text-onyx-900 font-semibold py-4 rounded-xl btn-glow"
            >
              Get Free Estimate
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Footer Info */}
          <div className="mt-8 pt-6 border-t border-onyx-700/50">
            <p className="text-warm-gray text-sm text-center">
              Licensed & Insured • Queens, NY
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;