import React, { useRef, useEffect, useState } from 'react';
import { Shield, CheckCircle2, Award, FileCheck, Users, HardHat, Download, BadgeCheck } from 'lucide-react';

interface Certification {
    id: string;
    title: string;
    subtitle: string;
    icon: React.ElementType;
    verified: boolean;
    color: string;
}

const CERTIFICATIONS: Certification[] = [
    {
        id: 'osha30',
        title: 'OSHA 30-Hour Certification',
        subtitle: 'All foremen OSHA 30 certified',
        icon: Award,
        verified: true,
        color: 'bg-blue-600'
    },
    {
        id: 'osha10',
        title: 'OSHA 10-Hour for All Workers',
        subtitle: '100% trained workforce',
        icon: Users,
        verified: true,
        color: 'bg-blue-500'
    },
    {
        id: 'nycdob',
        title: 'NYC DOB Licensed & Insured',
        subtitle: 'License #MAL-GC-2024',
        icon: FileCheck,
        verified: true,
        color: 'bg-teal-600'
    },
    {
        id: 'liability',
        title: 'General Liability Insurance',
        subtitle: '$2M+ coverage',
        icon: Shield,
        verified: true,
        color: 'bg-copper-500'
    },
    {
        id: 'workers-comp',
        title: 'Workers Compensation Insurance',
        subtitle: 'All workers fully covered',
        icon: HardHat,
        verified: true,
        color: 'bg-green-600'
    },
    {
        id: 'ssp',
        title: 'Site Safety Plan Certified',
        subtitle: 'SSP compliance for all projects',
        icon: BadgeCheck,
        verified: true,
        color: 'bg-purple-600'
    }
];

const SafetyCertifications: React.FC = () => {
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
            id="safety"
            className="relative py-24 bg-onyx-900 overflow-hidden scroll-mt-premium"
        >
            {/* Premium Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-onyx-900 via-onyx-800/50 to-onyx-900"></div>
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-teal-500/3 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-copper-500/3 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-grid-premium opacity-25"></div>
            </div>

            {/* Top Border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-600/30 to-transparent"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span
                        className={`inline-flex items-center gap-2 text-teal-400 text-xs font-semibold uppercase tracking-[0.25em] mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                        <Shield className="w-4 h-4" />
                        Safety First, Quality Always
                    </span>
                    <h2
                        className={`font-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6 leading-tight transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                        OSHA-Compliant. <span className="text-teal-400">Fully Insured.</span> NYC-Certified.
                    </h2>
                    <p
                        className={`text-warm-gray text-lg leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                        Your safety and peace of mind are non-negotiable. Every M. Alam project site maintains strict OSHA safety protocols, daily safety briefings, and comprehensive insurance coverage.
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {CERTIFICATIONS.map((cert, index) => (
                        <div
                            key={cert.id}
                            className={`group relative bg-onyx-800/50 backdrop-blur-sm rounded-2xl p-6 border border-onyx-700/50 hover:border-teal-500/30 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(94,234,212,0.1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${300 + index * 75}ms` }}
                        >
                            {/* Verified Badge */}
                            {cert.verified && (
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center shadow-lg">
                                    <CheckCircle2 className="w-5 h-5 text-white" />
                                </div>
                            )}

                            <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl ${cert.color} flex items-center justify-center flex-shrink-0`}>
                                    <cert.icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="font-semibold text-ivory text-lg mb-1 group-hover:text-teal-400 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-warm-gray text-sm">{cert.subtitle}</p>
                                </div>
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* Additional Info Bar */}
                <div className={`bg-gradient-to-r from-teal-600/10 via-teal-500/5 to-teal-600/10 backdrop-blur-sm rounded-2xl p-8 border border-teal-500/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '700ms' }}>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4 text-center lg:text-left">
                            <Shield className="w-12 h-12 text-teal-400 hidden sm:block" />
                            <div>
                                <h4 className="font-display text-xl text-ivory mb-1">Comprehensive Protection Guaranteed</h4>
                                <p className="text-warm-gray text-sm">
                                    We handle all safety filings, inspections, and compliance requirements. Last inspection: January 2025
                                </p>
                            </div>
                        </div>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 glass hover:bg-teal-500/10 text-ivory px-6 py-3 rounded-xl font-semibold transition-all group whitespace-nowrap"
                        >
                            <Download className="w-5 h-5 text-teal-400" />
                            <span>Request Insurance Certificate</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-600/30 to-transparent"></div>
        </section>
    );
};

export default SafetyCertifications;
