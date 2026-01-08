import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface StickyBottomBarProps {
  onOpenCallModal?: () => void;
}

const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenCallModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      {/* Gradient fade above the bar */}
      <div className="h-6 bg-gradient-to-t from-onyx-900 to-transparent"></div>

      {/* Main bar */}
      <div className="bg-onyx-900/98 backdrop-blur-xl border-t border-onyx-700/50 px-4 py-3 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-3">
          {/* Call Button */}
          <button
            onClick={onOpenCallModal}
            className="flex-1 flex items-center justify-center gap-2 glass text-ivory font-semibold py-3.5 rounded-xl transition-all"
          >
            <Phone className="w-5 h-5 text-copper-500" />
            <span className="text-sm">Call Now</span>
          </button>

          {/* Primary CTA */}
          <a
            href="#estimate-form"
            className="flex-[1.5] flex items-center justify-center gap-2 bg-copper-gradient text-onyx-900 font-semibold py-3.5 rounded-xl transition-all btn-glow"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-sm">Free Estimate</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyBottomBar;