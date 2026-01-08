import React from 'react';
import { X, Phone, MessageCircle, Clock, Shield, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CallModal: React.FC<CallModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-onyx-950/95 backdrop-blur-xl"></div>

      {/* Modal Content */}
      <div
        className="relative bg-onyx-800 rounded-3xl p-8 max-w-md w-full border border-onyx-700/50 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full border border-onyx-600 hover:border-copper-500 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-warm-gray" />
        </button>

        {/* Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-copper-600 via-copper-400 to-copper-600 rounded-t-3xl"></div>

        {/* Icon */}
        <div className="w-20 h-20 rounded-2xl bg-copper-500/20 flex items-center justify-center mx-auto mb-6">
          <Phone className="w-10 h-10 text-copper-500" />
        </div>

        {/* Content */}
        <div className="text-center mb-8">
          <h3 className="font-display text-3xl text-ivory mb-3">Let's Talk</h3>
          <p className="text-warm-gray text-sm mb-6">
            Speak directly with our team about your project. We're here to help.
          </p>

          {/* Phone Number */}
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="inline-flex items-center justify-center w-full gap-3 bg-copper-gradient text-onyx-900 font-display text-2xl py-5 rounded-xl transition-all hover:shadow-[0_0_40px_rgba(198,122,57,0.4)] btn-glow mb-4"
          >
            <Phone className="w-6 h-6" />
            {BUSINESS_INFO.phone}
          </a>

          {/* Hours */}
          <div className="flex items-center justify-center gap-2 text-warm-gray text-sm">
            <Clock className="w-4 h-4 text-copper-500" />
            <span>{BUSINESS_INFO.hours}</span>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-onyx-700/50 pt-6 space-y-3">
          <div className="flex items-center gap-3 text-warm-gray text-sm">
            <CheckCircle className="w-5 h-5 text-copper-500" />
            <span>Free estimates with no obligation</span>
          </div>
          <div className="flex items-center gap-3 text-warm-gray text-sm">
            <Shield className="w-5 h-5 text-copper-500" />
            <span>Licensed & insured in NYC</span>
          </div>
          <div className="flex items-center gap-3 text-warm-gray text-sm">
            <MessageCircle className="w-5 h-5 text-copper-500" />
            <span>Quick response within 24 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallModal;