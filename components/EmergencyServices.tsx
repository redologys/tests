import React, { useRef, useEffect, useState } from 'react';
import { Phone, AlertTriangle, Zap, Droplets, Flame, Wind, Building, HardHat, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const EMERGENCY_SERVICES = [
    { icon: Building, text: 'Structural damage and collapse prevention' },
    { icon: Droplets, text: 'Water damage and emergency leak repair' },
    { icon: Flame, text: 'Fire damage restoration and securing' },
    { icon: Wind, text: 'Storm damage and emergency boarding' },
    { icon: HardHat, text: 'DOB violation corrections and emergency compliance' },
    { icon: Building, text: 'Sidewalk/façade emergencies' },
    { icon: Zap, text: 'Electrical and plumbing hazards' },
];

const EmergencyServices: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

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

    return (
        <section
            ref={sectionRef}
            id="emergency"
            className="relative py-20 bg-gradient-to-br from-red-950/40 via-onyx-900 to-orange-950/30 overflow-hidden scroll-mt-premium"
        >
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-0 bg-grid-premium opacity-20"></div>
            </div>

            {/* Warning Stripes Top */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(239,68,68,0.3)_10px,rgba(239,68,68,0.3)_20px)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        {/* 24/7 Badge */}
                        <div className="inline-flex items-center gap-3 mb-6">
                            <div className="relative">
                                <div className="w-16 h-16 rounded-2xl bg-red-500/20 border border-red-500/40 flex items-center justify-center">
                                    <AlertTriangle className="w-8 h-8 text-red-400" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center animate-pulse">
                                    <span className="text-[10px] font-bold text-white">24/7</span>
                                </div>
                            </div>
                            <div>
                                <span className="text-red-400 text-xs font-semibold uppercase tracking-widest block">Available Round the Clock</span>
                                <h2 className="font-display text-3xl md:text-4xl text-ivory">Emergency Services</h2>
                            </div>
                        </div>

                        <h3 className="font-display text-2xl md:text-3xl text-ivory mb-4">
                            24/7 Emergency <span className="text-red-400">Construction Services</span>
                        </h3>

                        <p className="text-warm-gray text-lg leading-relaxed mb-8">
                            Construction emergencies don't wait for business hours. Our rapid response team is available around the clock for:
                        </p>

                        {/* Emergency Services List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                            {EMERGENCY_SERVICES.map((service, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 bg-onyx-800/50 backdrop-blur-sm p-3 rounded-xl border border-onyx-700/50"
                                >
                                    <service.icon className="w-5 h-5 text-red-400 flex-shrink-0" />
                                    <span className="text-warm-gray text-sm">{service.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Response Time Badge */}
                        <div className="inline-flex items-center gap-3 glass px-5 py-3 rounded-xl mb-8">
                            <Clock className="w-5 h-5 text-copper-500" />
                            <span className="text-ivory font-medium">Average 2-Hour Response Time in Queens</span>
                        </div>
                    </div>

                    {/* Right - Emergency CTA Card */}
                    <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div className="relative bg-gradient-to-br from-red-600/20 to-orange-600/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-red-500/30 overflow-hidden">
                            {/* Pulsing Border Effect */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-red-500/50 animate-pulse"></div>

                            {/* Emergency Icon */}
                            <div className="relative flex justify-center mb-8">
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-full bg-red-500/20 flex items-center justify-center">
                                        <Phone className="w-12 h-12 text-red-400" />
                                    </div>
                                    <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping"></div>
                                </div>
                            </div>

                            <h3 className="relative font-display text-3xl text-ivory text-center mb-4">
                                Need Emergency Help?
                            </h3>
                            <p className="relative text-warm-gray text-center mb-8">
                                Don't wait. Call us immediately for urgent construction emergencies.
                            </p>

                            {/* Emergency Call Button */}
                            <a
                                href={`tel:${BUSINESS_INFO.phoneClean}`}
                                className="relative block w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold text-xl py-5 rounded-xl text-center transition-all duration-300 shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:shadow-[0_0_50px_rgba(239,68,68,0.6)] mb-4"
                            >
                                <span className="flex items-center justify-center gap-3">
                                    <Phone className="w-6 h-6 animate-pulse" />
                                    Emergency? Call Now: {BUSINESS_INFO.phone}
                                </span>
                            </a>

                            {/* Secondary CTA */}
                            <a
                                href={`sms:${BUSINESS_INFO.phoneClean}`}
                                className="relative block w-full glass hover:bg-onyx-600/50 text-ivory font-semibold py-4 rounded-xl text-center transition-all"
                            >
                                Text Emergency: {BUSINESS_INFO.phone}
                            </a>

                            {/* Corner Pulse */}
                            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                            <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Warning Stripes Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(239,68,68,0.3)_10px,rgba(239,68,68,0.3)_20px)]"></div>
        </section>
    );
};

export default EmergencyServices;
