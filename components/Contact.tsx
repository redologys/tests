import React, { useState, useRef, useEffect } from 'react';
import { BUSINESS_INFO } from '../constants';
import { MapPin, Phone, Mail, ArrowRight, Loader2, CheckCircle, Calendar, Clock, Shield, ChevronRight, ChevronLeft, User, FileText, Sparkles } from 'lucide-react';

interface ContactProps {
  onOpenCallModal?: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenCallModal }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    timeline: '',
    budget: '',
    details: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (service: string) => {
    setFormData(prev => ({ ...prev, service }));
  };

  const handleTimelineSelect = (timeline: string) => {
    setFormData(prev => ({ ...prev, timeline }));
  };

  const getCalLink = () => {
    const baseUrl = "https://cal.com/malamconstruction/30min";
    const params = new URLSearchParams();
    if (formData.name) params.append('name', formData.name);
    if (formData.email) params.append('email', formData.email);
    const notes = `Service: ${formData.service}\nTimeline: ${formData.timeline}\nBudget: ${formData.budget}\nPhone: ${formData.phone}\nDetails: ${formData.details}`;
    params.append('notes', notes);
    if (formData.phone) params.append('phone', formData.phone);
    return `${baseUrl}?${params.toString()}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    setTimeout(() => {
      setFormState('success');
      setTimeout(() => {
        window.location.href = getCalLink();
      }, 2000);
    }, 1500);
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const services = [
    'Kitchen Renovation',
    'Bathroom Remodel',
    'Full Home Renovation',
    'Flooring Installation',
    'Exterior Construction',
    'Commercial Build-Out',
    'Custom Project'
  ];

  const timelines = [
    'ASAP - Emergency',
    'Within 2 Weeks',
    'Within 1 Month',
    '1-3 Months',
    'Planning Phase'
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 bg-onyx-900 overflow-hidden scroll-mt-premium"
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-onyx-900 via-onyx-800/50 to-onyx-900"></div>
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-copper-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-premium"></div>
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-600/30 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top CTA Banner */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between glass px-8 py-6 rounded-2xl gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-copper-500/20 flex items-center justify-center">
                <Phone className="w-7 h-7 text-copper-500" />
              </div>
              <div>
                <span className="text-copper-500 font-semibold uppercase tracking-wider text-xs block mb-1">
                  Ready to Start Your Project?
                </span>
                <h3 className="font-display text-2xl text-ivory">Speak with a Contractor Today</h3>
              </div>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button
                onClick={onOpenCallModal}
                className="flex-1 md:flex-none text-center glass hover:bg-onyx-600/50 text-ivory font-semibold px-6 py-3 rounded-xl transition-all"
              >
                Call Now
              </button>
              <a
                href="#estimate-form"
                className="flex-1 md:flex-none text-center bg-copper-500 hover:bg-copper-600 text-onyx-900 font-semibold px-6 py-3 rounded-xl transition-all btn-glow"
              >
                Get Estimate
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Info Side */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-copper-500"></div>
              <span className="text-copper-500 font-semibold uppercase tracking-[0.2em] text-xs">Contact Us</span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl text-ivory mb-6 leading-[1.1]">
              Let's Build
              <span className="block gradient-text">Something Great</span>
            </h2>

            <p className="text-warm-gray text-lg leading-relaxed mb-10 max-w-md">
              Ready to transform your space? Get a free consultation and detailed estimate with
              no obligation. Our team responds within 24 hours.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-10">
              <div className="group flex items-start gap-5 bg-onyx-800/40 backdrop-blur-sm p-5 rounded-xl border border-onyx-700/50 hover:border-copper-500/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-copper-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-copper-500/20 transition-colors">
                  <MapPin className="w-6 h-6 text-copper-500" />
                </div>
                <div>
                  <h4 className="text-ivory font-semibold mb-1">Visit Us</h4>
                  <p className="text-warm-gray text-sm">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="group flex items-start gap-5 bg-onyx-800/40 backdrop-blur-sm p-5 rounded-xl border border-onyx-700/50 hover:border-copper-500/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-copper-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-copper-500/20 transition-colors">
                  <Phone className="w-6 h-6 text-copper-500" />
                </div>
                <div>
                  <h4 className="text-ivory font-semibold mb-1">Call Us</h4>
                  <button
                    onClick={onOpenCallModal}
                    className="text-2xl font-display text-ivory hover:text-copper-500 transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </button>
                  <p className="text-warm-gray text-xs mt-1">{BUSINESS_INFO.hours}</p>
                </div>
              </div>

              <div className="group flex items-start gap-5 bg-onyx-800/40 backdrop-blur-sm p-5 rounded-xl border border-onyx-700/50 hover:border-copper-500/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-copper-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-copper-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-copper-500" />
                </div>
                <div>
                  <h4 className="text-ivory font-semibold mb-1">Email</h4>
                  <p className="text-warm-gray text-sm">{BUSINESS_INFO.email}</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-onyx-700/50 shadow-2xl h-56 grayscale-[80%] hover:grayscale-0 transition-all duration-500">
              <iframe
                title="M Alam General Construction Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.642938837267!2d-73.80467408459463!3d40.69324597933391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c261e8c7c251d1%3A0x8caa308cdf9d1af7!2s146-20%20107th%20Ave%2C%20Jamaica%2C%20NY%2011435!5e0!3m2!1sen!2sus!4v1647895024164!5m2!1sen!2sus"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Multi-Step Form Side */}
          <div
            id="estimate-form"
            className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <div className="bg-onyx-800/60 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-onyx-700/50 shadow-2xl relative overflow-hidden">
              {/* Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-copper-600 via-copper-400 to-copper-600"></div>

              {/* Form Header */}
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-5 h-5 text-copper-500" />
                <h3 className="font-display text-2xl text-ivory">Quick Estimate Form</h3>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8 relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-onyx-700 -translate-y-1/2"></div>
                <div
                  className="absolute top-1/2 left-0 h-0.5 bg-copper-500 -translate-y-1/2 transition-all duration-500"
                  style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                ></div>

                {[
                  { step: 1, label: 'Project', icon: FileText },
                  { step: 2, label: 'Details', icon: User },
                  { step: 3, label: 'Schedule', icon: Calendar },
                ].map((item) => (
                  <div key={item.step} className="relative flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300 ${currentStep >= item.step
                          ? 'bg-copper-500 text-onyx-900'
                          : 'bg-onyx-700 text-warm-gray'
                        }`}
                    >
                      {currentStep > item.step ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <item.icon className="w-5 h-5" />
                      )}
                    </div>
                    <span className={`text-xs mt-2 font-medium ${currentStep >= item.step ? 'text-copper-500' : 'text-warm-gray'}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {formState === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-copper-500/20 flex items-center justify-center mx-auto mb-6 relative">
                    <div className="absolute inset-0 rounded-full animate-ping bg-copper-500/20"></div>
                    <CheckCircle className="w-10 h-10 text-copper-500" />
                  </div>
                  <h4 className="font-display text-3xl text-ivory mb-3">Request Received!</h4>
                  <p className="text-warm-gray text-sm mb-6">Redirecting you to schedule your consultation...</p>
                  <Loader2 className="w-6 h-6 text-copper-500 animate-spin mx-auto" />
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Service Selection */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-ivory font-medium mb-4">What type of project?</label>
                        <div className="grid grid-cols-2 gap-3">
                          {services.map((service) => (
                            <button
                              key={service}
                              type="button"
                              onClick={() => handleServiceSelect(service)}
                              className={`p-4 rounded-xl border text-left text-sm font-medium transition-all ${formData.service === service
                                  ? 'border-copper-500 bg-copper-500/10 text-copper-400'
                                  : 'border-onyx-600 text-warm-gray hover:border-copper-500/30'
                                }`}
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-ivory font-medium mb-4">Project Timeline?</label>
                        <div className="flex flex-wrap gap-2">
                          {timelines.map((timeline) => (
                            <button
                              key={timeline}
                              type="button"
                              onClick={() => handleTimelineSelect(timeline)}
                              className={`px-4 py-2 rounded-full border text-xs font-medium transition-all ${formData.timeline === timeline
                                  ? 'border-copper-500 bg-copper-500/10 text-copper-400'
                                  : 'border-onyx-600 text-warm-gray hover:border-copper-500/30'
                                }`}
                            >
                              {timeline}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Contact Info */}
                  {currentStep === 2 && (
                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-warm-gray mb-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-onyx-900/60 border border-onyx-600 rounded-xl px-5 py-4 text-ivory placeholder-onyx-500 focus:border-copper-500 focus:ring-1 focus:ring-copper-500 outline-none transition-all"
                          placeholder="John Smith"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-warm-gray mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-onyx-900/60 border border-onyx-600 rounded-xl px-5 py-4 text-ivory placeholder-onyx-500 focus:border-copper-500 focus:ring-1 focus:ring-copper-500 outline-none transition-all"
                          placeholder="you@email.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-warm-gray mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-onyx-900/60 border border-onyx-600 rounded-xl px-5 py-4 text-ivory placeholder-onyx-500 focus:border-copper-500 focus:ring-1 focus:ring-copper-500 outline-none transition-all"
                          placeholder="(555) 000-0000"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 3: Project Details */}
                  {currentStep === 3 && (
                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-warm-gray mb-2">Estimated Budget (Optional)</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full bg-onyx-900/60 border border-onyx-600 rounded-xl px-5 py-4 text-ivory focus:border-copper-500 focus:ring-1 focus:ring-copper-500 outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select range...</option>
                          <option value="Under $5,000">Under $5,000</option>
                          <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                          <option value="$15,000 - $30,000">$15,000 - $30,000</option>
                          <option value="$30,000 - $50,000">$30,000 - $50,000</option>
                          <option value="$50,000+">$50,000+</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-warm-gray mb-2">Project Details</label>
                        <textarea
                          name="details"
                          value={formData.details}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full bg-onyx-900/60 border border-onyx-600 rounded-xl px-5 py-4 text-ivory placeholder-onyx-500 focus:border-copper-500 focus:ring-1 focus:ring-copper-500 outline-none transition-all resize-none"
                          placeholder="Tell us about your vision..."
                        ></textarea>
                      </div>
                      <div className="flex items-start gap-3 text-warm-gray text-xs">
                        <Shield className="w-4 h-4 text-copper-500 flex-shrink-0 mt-0.5" />
                        <p>Your information is secure and will never be shared. We'll respond within 24 hours.</p>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex gap-4 mt-8">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex-1 flex items-center justify-center gap-2 glass text-ivory font-semibold py-4 rounded-xl transition-all"
                      >
                        <ChevronLeft className="w-5 h-5" />
                        Back
                      </button>
                    )}

                    {currentStep < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={currentStep === 1 && !formData.service}
                        className="flex-1 flex items-center justify-center gap-2 bg-copper-500 hover:bg-copper-600 disabled:opacity-50 disabled:cursor-not-allowed text-onyx-900 font-semibold py-4 rounded-xl transition-all btn-glow"
                      >
                        Continue
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={formState === 'submitting'}
                        className="flex-1 flex items-center justify-center gap-3 bg-copper-gradient text-onyx-900 font-semibold py-4 rounded-xl transition-all hover:shadow-[0_0_40px_rgba(198,122,57,0.4)] btn-glow"
                      >
                        {formState === 'submitting' ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            Submit & Schedule
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-600/30 to-transparent"></div>
    </section>
  );
};

export default Contact;