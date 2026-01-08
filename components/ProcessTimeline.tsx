import React, { useRef, useEffect, useState } from 'react';
import { Handshake, ClipboardList, FileCheck2, HardHat, CheckCircle2, ArrowRight, Calendar } from 'lucide-react';

interface ProcessStage {
    id: number;
    title: string;
    timeframe: string;
    description: string;
    icon: React.ElementType;
    progress: number;
}

const PROCESS_STAGES: ProcessStage[] = [
    {
        id: 1,
        title: 'Initial Consultation',
        timeframe: 'Day 1-3',
        description: 'Free on-site assessment and project discussion. We evaluate scope, measure spaces, and understand your vision. Get preliminary timeline and budget estimates.',
        icon: Handshake,
        progress: 20
    },
    {
        id: 2,
        title: 'Planning & Design',
        timeframe: 'Week 1-2',
        description: 'Detailed project plans, material selection, and 3D renderings. We finalize specifications, create work schedules, and provide itemized quotes.',
        icon: ClipboardList,
        progress: 40
    },
    {
        id: 3,
        title: 'Permits & Approval',
        timeframe: 'Week 2-4',
        description: 'We handle all NYC DOB permits, filing requirements, and inspections. Full compliance with building codes and zoning regulations.',
        icon: FileCheck2,
        progress: 60
    },
    {
        id: 4,
        title: 'Construction',
        timeframe: 'Timeline Varies',
        description: 'Expert craftsmanship with daily progress updates. Dedicated project manager ensures quality control and keeps you informed every step.',
        icon: HardHat,
        progress: 80
    },
    {
        id: 5,
        title: 'Final Inspection & Handover',
        timeframe: 'Final Week',
        description: 'Final walkthrough, DOB sign-offs, warranty documentation, and project closeout. Your satisfaction guaranteed.',
        icon: CheckCircle2,
        progress: 100
    }
];

const ProcessTimeline: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeStage, setActiveStage] = useState(0);
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
            id="process"
            className="relative py-24 bg-onyx-800 overflow-hidden scroll-mt-premium"
        >
            {/* Premium Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-onyx-900 via-onyx-800 to-onyx-900"></div>
                <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-copper-500/3 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/3 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-grid-premium opacity-30"></div>
            </div>

            {/* Top Border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-600/30 to-transparent"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span
                        className={`inline-flex items-center gap-2 text-copper-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                        <Calendar className="w-4 h-4" />
                        How We Work
                    </span>
                    <h2
                        className={`font-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6 leading-tight transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                        Your Project Journey: <span className="gradient-text">From Vision to Reality</span>
                    </h2>
                    <p
                        className={`text-warm-gray text-lg leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                        A transparent, structured approach to every construction project. Know exactly what to expect at each phase.
                    </p>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden lg:block">
                    {/* Progress Line */}
                    <div className={`relative mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-onyx-700 -translate-y-1/2 rounded-full"></div>
                        <div
                            className="absolute top-1/2 left-0 h-1 bg-copper-gradient -translate-y-1/2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${PROCESS_STAGES[activeStage].progress}%` }}
                        ></div>

                        {/* Stage Markers */}
                        <div className="relative flex justify-between">
                            {PROCESS_STAGES.map((stage, index) => (
                                <button
                                    key={stage.id}
                                    onClick={() => setActiveStage(index)}
                                    className={`group relative flex flex-col items-center transition-all duration-300 ${index <= activeStage ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                                        }`}
                                >
                                    <div
                                        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${index <= activeStage
                                                ? 'bg-copper-500 text-onyx-900 shadow-[0_0_20px_rgba(198,122,57,0.4)]'
                                                : 'bg-onyx-700 text-warm-gray group-hover:bg-onyx-600'
                                            }`}
                                    >
                                        <stage.icon className="w-6 h-6" />
                                    </div>
                                    <span
                                        className={`mt-3 text-sm font-semibold transition-colors ${index <= activeStage ? 'text-copper-500' : 'text-warm-gray'
                                            }`}
                                    >
                                        Stage {stage.id}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Active Stage Details */}
                    <div
                        className={`bg-onyx-700/40 backdrop-blur-sm rounded-3xl p-10 border border-onyx-600/50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        <div className="flex items-start gap-8">
                            <div className="w-20 h-20 rounded-2xl bg-copper-500/20 border border-copper-500/30 flex items-center justify-center flex-shrink-0">
                                {React.createElement(PROCESS_STAGES[activeStage].icon, { className: 'w-10 h-10 text-copper-500' })}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-3">
                                    <h3 className="font-display text-3xl text-ivory">
                                        {PROCESS_STAGES[activeStage].title}
                                    </h3>
                                    <span className="glass px-4 py-1.5 rounded-full text-copper-400 text-sm font-medium">
                                        {PROCESS_STAGES[activeStage].timeframe}
                                    </span>
                                </div>
                                <p className="text-warm-gray text-lg leading-relaxed mb-6">
                                    {PROCESS_STAGES[activeStage].description}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="flex-1 bg-onyx-800 rounded-full h-3 overflow-hidden">
                                        <div
                                            className="h-full bg-copper-gradient rounded-full transition-all duration-700"
                                            style={{ width: `${PROCESS_STAGES[activeStage].progress}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-copper-500 font-bold text-lg">{PROCESS_STAGES[activeStage].progress}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Timeline - Stacked Cards */}
                <div className="lg:hidden space-y-6">
                    {PROCESS_STAGES.map((stage, index) => (
                        <div
                            key={stage.id}
                            className={`relative bg-onyx-700/40 backdrop-blur-sm rounded-2xl p-6 border border-onyx-600/50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${300 + index * 100}ms` }}
                        >
                            {/* Connector Line */}
                            {index < PROCESS_STAGES.length - 1 && (
                                <div className="absolute left-9 top-full w-0.5 h-6 bg-copper-500/30"></div>
                            )}

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-copper-500/20 border border-copper-500/30 flex items-center justify-center flex-shrink-0">
                                    <stage.icon className="w-6 h-6 text-copper-500" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-display text-xl text-ivory">{stage.title}</h3>
                                        <span className="text-copper-400 text-xs font-medium">{stage.timeframe}</span>
                                    </div>
                                    <p className="text-warm-gray text-sm leading-relaxed mb-4">{stage.description}</p>
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1 bg-onyx-800 rounded-full h-2 overflow-hidden">
                                            <div
                                                className="h-full bg-copper-gradient rounded-full"
                                                style={{ width: `${stage.progress}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-copper-500 text-sm font-semibold">{stage.progress}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className={`text-center mt-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
                    <a
                        href="#estimate-form"
                        className="inline-flex items-center gap-3 bg-copper-gradient text-onyx-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-[0_0_40px_rgba(198,122,57,0.3)] btn-glow"
                    >
                        <span>Schedule Your Free Consultation</span>
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-600/30 to-transparent"></div>
        </section>
    );
};

export default ProcessTimeline;
