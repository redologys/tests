import React from 'react';
import { NAV_LINKS, BUSINESS_INFO } from '../constants';
import { Phone, Mail, MapPin, ArrowUpRight, ChevronUp, ExternalLink, Star, Shield, Award, CheckCircle } from 'lucide-react';

// Business profile URLs for citations
const BUSINESS_PROFILES = {
  google: 'https://www.google.com/maps/place/M+Alam+General+Construction/@40.6929768,-73.8050603,17z',
  bbb: 'https://www.bbb.org/us/ny/jamaica/profile/home-improvement/m-alam-general-construction-0121-87181903',
  linkedin: 'https://www.linkedin.com/in/muhammad-alam-9142b1bb',
  homeadvisor: 'https://www.homeadvisor.com/rated.MAlamGeneral.134326187.html'
};

// NAP Consistency - Must match Google Business Profile exactly
const NAP = {
  name: 'M Alam General Construction',
  address: '146-20 107th Ave',
  city: 'Jamaica',
  state: 'NY',
  zip: '11435',
  phone: '(347) 986-4284',
  phoneClean: '3479864284'
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-onyx-950 pt-20 pb-8 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-copper-500/3 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-grid-premium opacity-20"></div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-600/30 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">

          {/* Column 1 - Brand & Contact (NAP Consistency) */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-copper-gradient flex items-center justify-center shadow-lg group-hover:shadow-copper-500/30 transition-shadow">
                <span className="font-display text-3xl text-onyx-900 leading-none">M</span>
              </div>
              <div>
                <span className="font-display text-2xl text-ivory leading-none block">{NAP.name.split(' ')[0]} {NAP.name.split(' ')[1]}</span>
                <span className="text-[10px] text-copper-500 uppercase tracking-widest">General Construction</span>
              </div>
            </a>

            {/* NAP - Name, Address, Phone for Local SEO */}
            <address className="not-italic space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-copper-500 flex-shrink-0 mt-0.5" />
                <div className="text-warm-gray text-sm">
                  <span className="block font-medium text-ivory">{NAP.name}</span>
                  <span className="block">{NAP.address}</span>
                  <span className="block">{NAP.city}, {NAP.state} {NAP.zip}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-copper-500 flex-shrink-0" />
                <a
                  href={`tel:${NAP.phoneClean}`}
                  className="text-ivory hover:text-copper-500 text-lg font-semibold transition-colors"
                >
                  {NAP.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-copper-500 flex-shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-warm-gray hover:text-copper-500 text-sm transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </address>

            {/* Business Hours Badge */}
            <div className="glass px-4 py-3 rounded-xl inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-ivory text-xs font-medium">{BUSINESS_INFO.hours}</span>
            </div>
          </div>

          {/* Column 2 - Navigation Links */}
          <div>
            <h4 className="font-display text-lg text-ivory mb-6">Quick Navigation</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-warm-gray hover:text-copper-500 text-sm transition-colors group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-copper-500/50 group-hover:text-copper-500 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="font-display text-lg text-ivory mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Kitchen Renovation', 'Bathroom Remodeling', 'Flooring Installation', 'Exterior Construction', 'Commercial Build-Outs'].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="flex items-center gap-2 text-warm-gray hover:text-copper-500 text-sm transition-colors group"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-copper-500/50 group-hover:text-copper-500 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="divider-premium mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-warm-gray">
            <span>© {currentYear} {NAP.name}. All rights reserved.</span>
            <span className="hidden md:inline text-onyx-600">|</span>
            <span>Licensed & Insured in New York</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-copper-500 hover:text-copper-400 text-sm font-medium transition-colors group"
          >
            <span>Back to Top</span>
            <div className="w-8 h-8 rounded-lg border border-copper-500/50 group-hover:border-copper-500 flex items-center justify-center group-hover:-translate-y-1 transition-all">
              <ChevronUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;