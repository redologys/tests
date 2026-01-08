import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Mail, Phone, MapPin, ChevronDown, Loader2, Clock, AlertTriangle, Calculator, HelpCircle, Globe, Camera, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

type Language = 'en' | 'es';
type ChatPath = 'initial' | 'estimate' | 'emergency' | 'question' | 'estimate-details' | 'estimate-contact' | 'emergency-contact' | 'question-topic' | 'complete';

interface ChatMessage {
    id: string;
    type: 'bot' | 'user' | 'options';
    text: string;
    timestamp: Date;
    options?: { label: string; value: string; icon?: React.ElementType; urgent?: boolean }[];
}

const PROJECT_TYPES = [
    { label: 'Kitchen Renovation', value: 'kitchen', sqftRange: [80, 200], pricePerSqft: [150, 350] },
    { label: 'Bathroom Remodel', value: 'bathroom', sqftRange: [40, 100], pricePerSqft: [200, 450] },
    { label: 'Full Home Renovation', value: 'full-home', sqftRange: [800, 3000], pricePerSqft: [100, 250] },
    { label: 'Flooring Installation', value: 'flooring', sqftRange: [200, 2000], pricePerSqft: [8, 25] },
    { label: 'Sidewalk/Concrete', value: 'sidewalk', sqftRange: [50, 500], pricePerSqft: [15, 40] },
    { label: 'Exterior Work', value: 'exterior', sqftRange: [200, 1000], pricePerSqft: [50, 150] },
];

const QUESTION_TOPICS = [
    { label: 'Licensing & Insurance', value: 'licensing' },
    { label: 'Warranty Information', value: 'warranty' },
    { label: 'Project Timeline', value: 'timeline' },
    { label: 'Safety Certifications', value: 'safety' },
];

const TRANSLATIONS = {
    en: {
        greeting: "Hi! 👋 I'm the M. Alam Virtual Assistant. Are you looking for a Fast Estimate on a project, or do you have a Construction Emergency that needs immediate attention?",
        estimateBtn: "I need a Project Estimate",
        emergencyBtn: "🚨 EMERGENCY / DOB Violation",
        questionBtn: "Just have a question",
        langToggle: "Hablamos Español",
        estimateQ1: "Great! To give you a ballpark range, what are we working on?",
        estimateQ2: "Roughly how many square feet is the area?",
        estimateResult: "Got it! Based on recent NYC projects, that typically ranges from",
        estimateFollow: "Want me to email you a detailed breakdown and schedule a visit to lock in a final price?",
        emergencyAlert: "I'm alerting our on-call supervisor right now. 🚨",
        emergencyInfo: "Please provide your Phone Number and Address below so we can dispatch help or call you back within minutes.",
        emergencyWarning: "If this is a structural collapse or gas leak, please call",
        emergencyWarning2: "immediately while I process this alert.",
        questionPrompt: "I can help with that! What would you like to know about?",
        licensingAnswer: "M. Alam General Construction is fully licensed and insured in NYC. We hold all required DOB licenses and carry $2M+ in liability coverage. Our license number is MAL-GC-2024.",
        warrantyAnswer: "We provide a comprehensive 1-year workmanship warranty on all projects. Material warranties from manufacturers typically range from 5-25 years depending on the product.",
        timelineAnswer: "Project timelines vary: Bathroom remodels take 2-3 weeks, kitchen renovations 4-6 weeks, and full home renovations 2-4 months. We'll provide a detailed schedule during your free consultation.",
        safetyAnswer: "We are 100% OSHA-compliant. All our foremen hold OSHA 30-hour certifications, and every worker has OSHA 10-hour training. Safety is non-negotiable on our job sites.",
        thankYou: "Thank you! Our team will contact you shortly. For immediate assistance, call",
        online: "Online - We reply in ~3 mins",
        offline: "Leave a message",
        startChat: "Start Conversation",
        businessHours: "Business Hours: Mon-Fri, 8AM - 5PM EST",
    },
    es: {
        greeting: "¡Hola! 👋 Soy el Asistente Virtual de M. Alam. ¿Busca un Presupuesto Rápido para un proyecto o tiene una Emergencia de Construcción que necesita atención inmediata?",
        estimateBtn: "Necesito un Presupuesto",
        emergencyBtn: "🚨 EMERGENCIA / Violación DOB",
        questionBtn: "Solo tengo una pregunta",
        langToggle: "English",
        estimateQ1: "¡Excelente! Para darle un rango aproximado, ¿en qué estamos trabajando?",
        estimateQ2: "¿Aproximadamente cuántos pies cuadrados tiene el área?",
        estimateResult: "¡Entendido! Basado en proyectos recientes en NYC, eso típicamente varía de",
        estimateFollow: "¿Quiere que le envíe un desglose detallado por correo y programemos una visita para fijar un precio final?",
        emergencyAlert: "Estoy alertando a nuestro supervisor de guardia ahora mismo. 🚨",
        emergencyInfo: "Por favor proporcione su Número de Teléfono y Dirección abajo para que podamos enviar ayuda o llamarle en minutos.",
        emergencyWarning: "Si esto es un colapso estructural o fuga de gas, por favor llame al",
        emergencyWarning2: "inmediatamente mientras proceso esta alerta.",
        questionPrompt: "¡Puedo ayudar con eso! ¿Qué le gustaría saber?",
        licensingAnswer: "M. Alam General Construction está completamente licenciado y asegurado en NYC. Tenemos todas las licencias DOB requeridas y $2M+ en cobertura de responsabilidad.",
        warrantyAnswer: "Proporcionamos una garantía integral de 1 año en mano de obra. Las garantías de materiales de fabricantes típicamente van de 5-25 años.",
        timelineAnswer: "Los tiempos varían: Remodelaciones de baño toman 2-3 semanas, cocinas 4-6 semanas, y renovaciones completas 2-4 meses.",
        safetyAnswer: "Cumplimos 100% con OSHA. Todos nuestros capataces tienen certificación OSHA de 30 horas. La seguridad no es negociable.",
        thankYou: "¡Gracias! Nuestro equipo le contactará pronto. Para asistencia inmediata, llame al",
        online: "En línea - Respondemos en ~3 mins",
        offline: "Deje un mensaje",
        startChat: "Iniciar Conversación",
        businessHours: "Horario: Lun-Vie, 8AM - 5PM EST",
    }
};

const LiveChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showGreeting, setShowGreeting] = useState(false);
    const [language, setLanguage] = useState<Language>('en');
    const [currentPath, setCurrentPath] = useState<ChatPath>('initial');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isOnline, setIsOnline] = useState(true);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [progress, setProgress] = useState(0);
    const [uploadedImages, setUploadedImages] = useState<string[]>([]);
    const [liveCostLow, setLiveCostLow] = useState(0);
    const [liveCostHigh, setLiveCostHigh] = useState(0);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const t = TRANSLATIONS[language];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        projectType: '',
        sqft: '',
        message: ''
    });

    const [estimateData, setEstimateData] = useState({
        projectType: '',
        sqft: 0,
        lowEstimate: 0,
        highEstimate: 0
    });

    const [messages, setMessages] = useState<ChatMessage[]>([]);

    // 3. SESSION RECOVERY - Save state to localStorage
    useEffect(() => {
        const chatState = {
            messages,
            formData,
            currentPath,
            estimateData,
            progress,
            hasInteracted
        };
        localStorage.setItem('chatState', JSON.stringify(chatState));
    }, [messages, formData, currentPath, estimateData, progress, hasInteracted]);

    // Recover state on mount
    useEffect(() => {
        const saved = localStorage.getItem('chatState');
        if (saved) {
            try {
                const { messages: savedMessages, formData: savedForm, currentPath: savedPath, estimateData: savedEstimate, progress: savedProgress } = JSON.parse(saved);
                if (savedMessages && savedMessages.length > 1) {
                    // Show recovery option
                    setTimeout(() => {
                        const shouldRecover = confirm("Welcome back! Want to continue where you left off?");
                        if (shouldRecover) {
                            setMessages(savedMessages);
                            setFormData(savedForm);
                            setCurrentPath(savedPath);
                            setEstimateData(savedEstimate);
                            setProgress(savedProgress || 0);
                            setIsOpen(true);
                            setHasInteracted(true);
                        } else {
                            localStorage.removeItem('chatState');
                        }
                    }, 500);
                }
            } catch (e) {
                console.error('Failed to recover chat state:', e);
            }
        }
    }, []);

    // Check business hours (8AM-5PM Mon-Fri EST)
    useEffect(() => {
        const checkBusinessHours = () => {
            const now = new Date();
            const hour = now.getHours();
            const day = now.getDay();
            const isWeekday = day >= 1 && day <= 5;
            const isDuringHours = hour >= 8 && hour < 17;
            setIsOnline(isWeekday && isDuringHours);
        };

        checkBusinessHours();
        const interval = setInterval(checkBusinessHours, 60000);
        return () => clearInterval(interval);
    }, []);

    // 6. EXIT-INTENT TRIGGER - Capture leads about to leave
    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasInteracted && !isOpen) {
                setShowGreeting(true);
                setTimeout(() => {
                    addBotMessageWithTyping("⚡ Wait! Get a free 60-second estimate on your project. No email required! 🎯");
                }, 300);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [hasInteracted, isOpen]);

    // Show greeting after 15 seconds or 50% scroll
    useEffect(() => {
        if (hasInteracted) return;

        const timer = setTimeout(() => {
            setShowGreeting(true);
        }, 15000);

        const handleScroll = () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercent > 50) {
                setShowGreeting(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasInteracted]);

    // Auto-scroll messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    // 1. PROGRESS INDICATOR - Update based on path
    useEffect(() => {
        const progressMap: Record<ChatPath, number> = {
            'initial': 0,
            'estimate': 25,
            'emergency': 33,
            'question': 25,
            'estimate-details': 50,
            'estimate-contact': 75,
            'emergency-contact': 66,
            'question-topic': 50,
            'complete': 100
        };
        setProgress(progressMap[currentPath] || 0);
    }, [currentPath]);

    // 4. TYPING INDICATORS - Add realistic typing delay
    const addBotMessageWithTyping = async (text: string, options?: ChatMessage['options']) => {
        setIsTyping(true);
        await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 800));
        setIsTyping(false);
        addBotMessage(text, options);
    };

    const addBotMessage = (text: string, options?: ChatMessage['options']) => {
        const msg: ChatMessage = {
            id: Date.now().toString(),
            type: options ? 'options' : 'bot',
            text,
            timestamp: new Date(),
            options
        };
        setMessages(prev => [...prev, msg]);
    };

    const addUserMessage = (text: string) => {
        const msg: ChatMessage = {
            id: Date.now().toString(),
            type: 'user',
            text,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, msg]);
    };

    // 2. SMART FALLBACK RESPONSES
    const handleFreeTextInput = (input: string) => {
        const emergencyKeywords = ['urgent', 'emergency', 'leak', 'collapse', 'broken', 'violation', 'dob'];
        const estimateKeywords = ['cost', 'price', 'quote', 'estimate', 'how much'];

        if (emergencyKeywords.some(word => input.toLowerCase().includes(word))) {
            handleOptionSelect('emergency');
        } else if (estimateKeywords.some(word => input.toLowerCase().includes(word))) {
            handleOptionSelect('estimate');
        } else {
            addBotMessageWithTyping("I'm not sure I understand. Let me connect you with a human. In the meantime, which of these can I help with?", [
                { label: t.estimateBtn, value: 'estimate', icon: Calculator },
                { label: t.emergencyBtn, value: 'emergency', icon: AlertTriangle, urgent: true },
                { label: "Talk to a human now", value: 'human', icon: PhoneCall },
            ]);
        }
    };

    const handleOpen = () => {
        setIsOpen(true);
        setShowGreeting(false);
        setHasInteracted(true);

        if (messages.length === 0) {
            setTimeout(() => {
                addBotMessageWithTyping(t.greeting, [
                    { label: t.estimateBtn, value: 'estimate', icon: Calculator },
                    { label: t.emergencyBtn, value: 'emergency', icon: AlertTriangle, urgent: true },
                    { label: t.questionBtn, value: 'question', icon: HelpCircle },
                ]);
            }, 500);
        }
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleLanguageToggle = () => {
        const newLang = language === 'en' ? 'es' : 'en';
        setLanguage(newLang);
        setMessages([]);
        setCurrentPath('initial');

        setTimeout(() => {
            const newT = TRANSLATIONS[newLang];
            addBotMessageWithTyping(newT.greeting, [
                { label: newT.estimateBtn, value: 'estimate', icon: Calculator },
                { label: newT.emergencyBtn, value: 'emergency', icon: AlertTriangle, urgent: true },
                { label: newT.questionBtn, value: 'question', icon: HelpCircle },
            ]);
        }, 300);
    };

    // 8. SKIP TO HUMAN
    const skipToHuman = () => {
        addBotMessageWithTyping(`Connecting you now! Call ${BUSINESS_INFO.phone} or I can have someone call you back in under 5 minutes.`);
        setCurrentPath('emergency-contact');
    };

    const handleOptionSelect = (value: string) => {
        if (value === 'human') {
            skipToHuman();
            return;
        }

        if (currentPath === 'initial') {
            if (value === 'estimate') {
                addUserMessage(t.estimateBtn);
                setCurrentPath('estimate');
                setTimeout(() => {
                    addBotMessageWithTyping(t.estimateQ1, PROJECT_TYPES.map(p => ({ label: p.label, value: p.value })));
                }, 500);
            } else if (value === 'emergency') {
                addUserMessage(t.emergencyBtn);
                setCurrentPath('emergency');
                setTimeout(() => {
                    addBotMessageWithTyping(t.emergencyAlert);
                    setTimeout(() => {
                        addBotMessageWithTyping(t.emergencyInfo);
                        setTimeout(() => {
                            addBotMessageWithTyping(`${t.emergencyWarning} ${BUSINESS_INFO.phone} ${t.emergencyWarning2}`);
                            setCurrentPath('emergency-contact');
                        }, 1000);
                    }, 1000);
                }, 500);
            } else if (value === 'question') {
                addUserMessage(t.questionBtn);
                setCurrentPath('question');
                setTimeout(() => {
                    addBotMessageWithTyping(t.questionPrompt, QUESTION_TOPICS.map(q => ({ label: q.label, value: q.value })));
                }, 500);
            }
        } else if (currentPath === 'estimate') {
            const project = PROJECT_TYPES.find(p => p.value === value);
            if (project) {
                addUserMessage(project.label);
                setFormData(prev => ({ ...prev, projectType: project.label }));
                setEstimateData(prev => ({ ...prev, projectType: value }));
                setCurrentPath('estimate-details');

                // Set initial range values
                const midSqft = Math.floor((project.sqftRange[0] + project.sqftRange[1]) / 2);
                setFormData(prev => ({ ...prev, sqft: midSqft.toString() }));
                setLiveCostLow(midSqft * project.pricePerSqft[0]);
                setLiveCostHigh(midSqft * project.pricePerSqft[1]);

                setTimeout(() => {
                    addBotMessageWithTyping(t.estimateQ2);
                }, 500);
            }
        } else if (currentPath === 'question') {
            const topic = QUESTION_TOPICS.find(q => q.value === value);
            if (topic) {
                addUserMessage(topic.label);
                setTimeout(() => {
                    let answer = '';
                    switch (value) {
                        case 'licensing': answer = t.licensingAnswer; break;
                        case 'warranty': answer = t.warrantyAnswer; break;
                        case 'timeline': answer = t.timelineAnswer; break;
                        case 'safety': answer = t.safetyAnswer; break;
                    }
                    addBotMessageWithTyping(answer);
                    setTimeout(() => {
                        addBotMessageWithTyping("Is there anything else I can help you with?", [
                            { label: t.estimateBtn, value: 'estimate', icon: Calculator },
                            { label: "No, thank you!", value: 'done' },
                        ]);
                        setCurrentPath('initial');
                    }, 1500);
                }, 500);
            }
        }
    };

    const handleSqftSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const sqft = parseInt(formData.sqft);
        if (!sqft) return;

        addUserMessage(`${sqft} sq ft`);

        const project = PROJECT_TYPES.find(p => p.value === estimateData.projectType);
        if (project) {
            const low = sqft * project.pricePerSqft[0];
            const high = sqft * project.pricePerSqft[1];
            setEstimateData(prev => ({ ...prev, sqft, lowEstimate: low, highEstimate: high }));

            setTimeout(() => {
                addBotMessageWithTyping(`${t.estimateResult} $${low.toLocaleString()} to $${high.toLocaleString()}. ${t.estimateFollow}`);
                setCurrentPath('estimate-contact');
            }, 800);
        }
    };

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            addBotMessageWithTyping(`${t.thankYou} ${BUSINESS_INFO.phone}`);
            setCurrentPath('complete');
            // Clear localStorage after successful submission
            localStorage.removeItem('chatState');
        }, 1500);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // 7. REAL-TIME COST CALCULATOR
    const handleSqftChange = (value: string) => {
        const sqft = parseInt(value) || 0;
        setFormData(prev => ({ ...prev, sqft: value }));

        const project = PROJECT_TYPES.find(p => p.value === estimateData.projectType);
        if (project && sqft > 0) {
            setLiveCostLow(sqft * project.pricePerSqft[0]);
            setLiveCostHigh(sqft * project.pricePerSqft[1]);
        }
    };

    // 5. IMAGE UPLOAD HANDLER
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImages(prev => [...prev, reader.result as string]);
            };
            reader.readAsDataURL(file);
        });
    };

    return (
        <>
            {/* Greeting Bubble */}
            {showGreeting && !isOpen && (
                <div
                    className="fixed bottom-[140px] right-5 z-50 animate-fade-in-up cursor-pointer"
                    onClick={handleOpen}
                >
                    <div className="relative bg-onyx-800 border border-onyx-700 rounded-2xl rounded-br-none p-4 max-w-[300px] shadow-2xl hover:border-copper-500/30 transition-colors">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowGreeting(false);
                                setHasInteracted(true);
                            }}
                            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-onyx-700 hover:bg-onyx-600 flex items-center justify-center transition-colors"
                        >
                            <X className="w-4 h-4 text-warm-gray" />
                        </button>
                        <p className="text-ivory text-sm">
                            Hi! 👋 Need a construction estimate or have questions? We typically respond in under 3 minutes.
                        </p>
                    </div>
                </div>
            )}

            {/* Chat Widget Button */}
            <button
                onClick={isOpen ? handleClose : handleOpen}
                className={`fixed bottom-[60px] right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isOpen
                    ? 'bg-onyx-700 hover:bg-onyx-600'
                    : 'bg-copper-500 hover:bg-copper-600 hover:scale-110'
                    }`}
                style={{ boxShadow: isOpen ? 'none' : '0 0 30px rgba(198,122,57,0.4)' }}
            >
                {isOpen ? (
                    <X className="w-6 h-6 text-ivory" />
                ) : (
                    <>
                        <MessageCircle className="w-6 h-6 text-onyx-900" />
                        <span className={`absolute top-0 right-0 w-4 h-4 rounded-full border-2 border-onyx-900 ${isOnline ? 'bg-green-500' : 'bg-warm-gray'}`}></span>
                    </>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-[130px] right-5 z-50 w-[380px] max-w-[calc(100vw-40px)] bg-onyx-900 rounded-2xl shadow-2xl border border-onyx-700 overflow-hidden animate-fade-in-up">
                    {/* Header */}
                    <div className="bg-copper-gradient px-5 py-4">
                        {/* 1. PROGRESS BAR */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-onyx-800">
                            <div
                                className="h-full bg-onyx-900 transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-onyx-900/30 flex items-center justify-center">
                                    <span className="font-display text-xl text-onyx-900">M</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-onyx-900">M. Alam Virtual Assistant</h4>
                                    <div className="flex items-center gap-1.5">
                                        <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-600' : 'bg-onyx-600'}`}></span>
                                        <span className="text-xs text-onyx-800">{isOnline ? t.online : t.offline}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Language Toggle & Skip to Human */}
                            <div className="flex flex-col gap-1">
                                <button
                                    onClick={handleLanguageToggle}
                                    className="flex items-center gap-1.5 bg-onyx-900/20 hover:bg-onyx-900/30 px-2 py-1 rounded-full transition-colors"
                                >
                                    <Globe className="w-3 h-3 text-onyx-900" />
                                    <span className="text-xs font-medium text-onyx-900">{t.langToggle}</span>
                                </button>
                                {/* 8. SKIP TO HUMAN BUTTON */}
                                <button
                                    onClick={skipToHuman}
                                    className="text-xs text-onyx-800 hover:text-onyx-900 underline whitespace-nowrap"
                                >
                                    Talk to a human →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="h-[400px] overflow-y-auto p-4 space-y-4">
                        {messages.map(msg => (
                            <div key={msg.id}>
                                {msg.type === 'user' ? (
                                    <div className="flex justify-end">
                                        <div className="max-w-[80%] bg-copper-500 text-onyx-900 rounded-2xl rounded-br-none px-4 py-3">
                                            <p className="text-sm">{msg.text}</p>
                                        </div>
                                    </div>
                                ) : msg.type === 'options' ? (
                                    <div className="space-y-3">
                                        <div className="flex justify-start">
                                            <div className="max-w-[90%] bg-onyx-800 text-ivory rounded-2xl rounded-bl-none px-4 py-3">
                                                <p className="text-sm">{msg.text}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2 pl-2">
                                            {msg.options?.map((opt, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => handleOptionSelect(opt.value)}
                                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${opt.urgent
                                                        ? 'bg-red-600/20 border border-red-500/50 text-red-400 hover:bg-red-600/30'
                                                        : 'bg-onyx-700/50 border border-onyx-600 text-ivory hover:border-copper-500/50 hover:bg-onyx-700'
                                                        }`}
                                                >
                                                    {opt.icon && <opt.icon className={`w-4 h-4 ${opt.urgent ? 'text-red-400' : 'text-copper-500'}`} />}
                                                    {opt.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex justify-start">
                                        <div className="max-w-[85%] bg-onyx-800 text-ivory rounded-2xl rounded-bl-none px-4 py-3">
                                            <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* 4. TYPING INDICATOR */}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-onyx-800 rounded-2xl rounded-bl-none px-4 py-3">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 bg-copper-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                        <span className="w-2 h-2 bg-copper-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                        <span className="w-2 h-2 bg-copper-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Input Forms Based on Path */}
                        {currentPath === 'estimate-details' && (
                            <div className="space-y-4 pl-2">
                                {/* 7. REAL-TIME COST CALCULATOR */}
                                <div className="bg-onyx-800/50 rounded-xl p-4 border border-onyx-700">
                                    <div className="text-center mb-4">
                                        <div className="text-3xl font-bold text-copper-500">
                                            ${liveCostLow.toLocaleString()} - ${liveCostHigh.toLocaleString()}
                                        </div>
                                        <div className="text-sm text-warm-gray mt-1">{formData.sqft || 0} sq ft</div>
                                    </div>
                                    <input
                                        type="range"
                                        min={PROJECT_TYPES.find(p => p.value === estimateData.projectType)?.sqftRange[0] || 50}
                                        max={PROJECT_TYPES.find(p => p.value === estimateData.projectType)?.sqftRange[1] || 1000}
                                        value={formData.sqft || 0}
                                        onChange={(e) => handleSqftChange(e.target.value)}
                                        className="w-full h-2 bg-onyx-700 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                </div>
                                <form onSubmit={handleSqftSubmit} className="flex gap-2">
                                    <input
                                        type="number"
                                        name="sqft"
                                        value={formData.sqft}
                                        onChange={(e) => handleSqftChange(e.target.value)}
                                        placeholder="Enter exact square feet..."
                                        className="flex-1 bg-onyx-800 border border-onyx-700 rounded-xl px-4 py-3 text-ivory text-sm placeholder-onyx-500 focus:border-copper-500 outline-none"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="w-12 h-12 bg-copper-500 hover:bg-copper-600 rounded-xl flex items-center justify-center transition-colors"
                                    >
                                        <Send className="w-5 h-5 text-onyx-900" />
                                    </button>
                                </form>
                            </div>
                        )}

                        {(currentPath === 'estimate-contact' || currentPath === 'emergency-contact') && (
                            <form onSubmit={handleContactSubmit} className="space-y-3 pl-2">
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-onyx-500" />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your Name"
                                        className="w-full bg-onyx-800 border border-onyx-700 rounded-xl pl-10 pr-4 py-3 text-ivory text-sm placeholder-onyx-500 focus:border-copper-500 outline-none"
                                        required
                                    />
                                </div>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-onyx-500" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Phone Number"
                                        className="w-full bg-onyx-800 border border-onyx-700 rounded-xl pl-10 pr-4 py-3 text-ivory text-sm placeholder-onyx-500 focus:border-copper-500 outline-none"
                                        required
                                    />
                                </div>
                                {currentPath === 'emergency-contact' && (
                                    <>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-onyx-500" />
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                placeholder="Address"
                                                className="w-full bg-onyx-800 border border-onyx-700 rounded-xl pl-10 pr-4 py-3 text-ivory text-sm placeholder-onyx-500 focus:border-copper-500 outline-none"
                                                required
                                            />
                                        </div>
                                        {/* 5. IMAGE UPLOAD FOR EMERGENCIES */}
                                        <div className="relative">
                                            <label className="flex items-center gap-2 bg-onyx-800 border border-onyx-700 rounded-xl px-4 py-3 cursor-pointer hover:border-copper-500 transition-colors">
                                                <Camera className="w-4 h-4 text-copper-500" />
                                                <span className="text-sm text-ivory">Upload photos (optional)</span>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    multiple
                                                    className="hidden"
                                                    onChange={handleImageUpload}
                                                />
                                            </label>
                                            {uploadedImages.length > 0 && (
                                                <div className="text-xs text-copper-500 mt-1 pl-1">
                                                    {uploadedImages.length} image(s) uploaded ✓
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                                {currentPath === 'estimate-contact' && (
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-onyx-500" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Email Address"
                                            className="w-full bg-onyx-800 border border-onyx-700 rounded-xl pl-10 pr-4 py-3 text-ivory text-sm placeholder-onyx-500 focus:border-copper-500 outline-none"
                                            required
                                        />
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${currentPath === 'emergency-contact'
                                        ? 'bg-red-600 hover:bg-red-500 text-white'
                                        : 'bg-copper-500 hover:bg-copper-600 text-onyx-900'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            {currentPath === 'emergency-contact' ? 'Alerting Team...' : 'Submitting...'}
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            {currentPath === 'emergency-contact' ? 'Send Emergency Alert' : 'Get My Estimate'}
                                        </>
                                    )}
                                </button>
                            </form>
                        )}

                        <div ref={messagesEndRef} />
                    </div>
                </div>
            )}

            {/* CSS for animations */}
            <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out;
        }
        
        /* Range slider styling */
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #C67A39;
          cursor: pointer;
          border-radius: 50%;
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #C67A39;
          cursor: pointer;
          border-radius: 50%;
          border: none;
        }
      `}</style>
        </>
    );
};

export default LiveChat;
