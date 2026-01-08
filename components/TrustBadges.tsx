import React from 'react';
import { ExternalLink, Star, Shield, Award } from 'lucide-react';

// Business profile URLs for citations
const BUSINESS_PROFILES = {
    google: 'https://www.google.com/maps/place/M+Alam+General+Construction/@40.6929768,-73.8050603,17z',
    bbb: 'https://www.bbb.org/us/ny/jamaica/profile/home-improvement/m-alam-general-construction-0121-87181903',
    linkedin: 'https://www.linkedin.com/in/muhammad-alam-9142b1bb',
    homeadvisor: 'https://www.homeadvisor.com/rated.MAlamGeneral.134326187.html'
};

const TrustBadges: React.FC = () => {
    return (
        <section className="relative py-8 bg-onyx-800 border-y border-onyx-700/50">
            {/* Background */}
            <div className="absolute inset-0 bg-grid-premium opacity-20"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

                    {/* Label */}
                    <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-copper-500" />
                        <span className="text-ivory font-semibold text-sm uppercase tracking-wider">Verified & Trusted On</span>
                    </div>

                    {/* Trust Badges Row */}
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">

                        {/* Google Business Badge */}
                        <a
                            href={BUSINESS_PROFILES.google}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-onyx-900/50 hover:bg-onyx-700/50 px-4 py-3 rounded-xl border border-onyx-700/50 hover:border-copper-500/30 transition-all group"
                        >
                            <svg className="w-8 h-8" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <div className="hidden sm:block">
                                <span className="text-ivory font-semibold text-sm block leading-tight">Google</span>
                                <div className="flex items-center gap-1">
                                    <span className="text-copper-400 font-bold text-xs">5.0</span>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-2.5 h-2.5 fill-copper-400 text-copper-400" />
                                    ))}
                                </div>
                            </div>
                        </a>

                        {/* BBB Badge */}
                        <a
                            href={BUSINESS_PROFILES.bbb}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-onyx-900/50 hover:bg-onyx-700/50 px-4 py-3 rounded-xl border border-onyx-700/50 hover:border-copper-500/30 transition-all group"
                        >
                            <div className="w-8 h-8 bg-[#005A8C] rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">BBB</span>
                            </div>
                            <div className="hidden sm:block">
                                <span className="text-ivory font-semibold text-sm block leading-tight">BBB Accredited</span>
                                <span className="text-copper-400 font-bold text-xs">A+ Rating</span>
                            </div>
                        </a>

                        {/* HomeAdvisor Badge */}
                        <a
                            href={BUSINESS_PROFILES.homeadvisor}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-onyx-900/50 hover:bg-onyx-700/50 px-4 py-3 rounded-xl border border-onyx-700/50 hover:border-copper-500/30 transition-all group"
                        >
                            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                                <Award className="w-5 h-5 text-white" />
                            </div>
                            <div className="hidden sm:block">
                                <span className="text-ivory font-semibold text-sm block leading-tight">HomeAdvisor</span>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-2.5 h-2.5 fill-copper-400 text-copper-400" />
                                    ))}
                                    <span className="text-warm-gray text-xs ml-1">Verified</span>
                                </div>
                            </div>
                        </a>

                        {/* LinkedIn Badge */}
                        <a
                            href={BUSINESS_PROFILES.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-onyx-900/50 hover:bg-onyx-700/50 px-4 py-3 rounded-xl border border-onyx-700/50 hover:border-copper-500/30 transition-all group"
                        >
                            <svg className="w-8 h-8 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            <div className="hidden sm:block">
                                <span className="text-ivory font-semibold text-sm block leading-tight">LinkedIn</span>
                                <span className="text-warm-gray text-xs">Professional Profile</span>
                            </div>
                        </a>
                    </div>

                    {/* Credentials Tag */}
                    <div className="hidden xl:flex items-center gap-2 text-warm-gray text-xs">
                        <Shield className="w-4 h-4 text-copper-500" />
                        <span>Licensed & Insured in NYC</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
