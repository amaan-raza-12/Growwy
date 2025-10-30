import React, { useState, useEffect, useRef, useCallback } from 'react';

// --- ICONS --- //
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const CreateIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
);
const PromoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);
const ConvertIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const DeliverIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);
const WhatsAppIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
);
const PhoneCallIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const ArrowUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
);

// --- Industry Process Icons --- //
const VenueTourIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>;
const SocialAdsIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const BookingIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>;
const HappyGuestIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 12 18 2"></polygon></svg>;
const TestimonialIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
const DigitalCampaignIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>;
const ApplicationIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>;
const GraduationCapIcon = () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 12 3 12 0v-5"></path></svg>;


// --- HOOKS --- //
const useInView = (options?: IntersectionObserverInit) => {
    const ref = useRef<HTMLElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return [ref, isInView] as const;
};


// --- UTILITY COMPONENTS --- //

const GlowEffect = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div 
            className="pointer-events-none fixed inset-0 z-30 transition duration-300" 
            style={{
                background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(45, 128, 255, 0.15), transparent 80%)`
            }}
        />
    );
};

const Section: React.FC<{ id: string; className?: string; children: React.ReactNode }> = ({ id, className = '', children }) => {
    const [ref, isInView] = useInView({ threshold: 0.1 });
    return (
        <section
            id={id}
            ref={ref}
            className={`w-full max-w-6xl mx-auto px-6 py-20 md:py-32 transition-all duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
        >
            {children}
        </section>
    );
};

// --- PAGE COMPONENTS --- //

const Header: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'what-we-do', label: 'What We Do' },
        { id: 'clients', label: 'Clients' },
        { id: 'about', label: 'About' },
        { id: 'contact', label: 'Contact' },
    ];

    const handleNavClick = (id: string) => {
        onNavigate(id);
        setIsOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/30 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    <h1 className="text-3xl font-bold cursor-pointer" onClick={() => onNavigate('hero')}>
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Growwy</span>
                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">.in</span>
                    </h1>
                    <nav className="hidden md:flex items-center space-x-6">
                        {navItems.map(item => (
                            <button key={item.id} onClick={() => handleNavClick(item.id)} className="text-gray-300 hover:text-white transition-colors duration-300">{item.label}</button>
                        ))}
                    </nav>
                     <button onClick={() => onNavigate('contact')} className="hidden md:block bg-[#0056CB] text-white px-5 py-2 rounded-lg font-semibold hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 glow-effect">
                        Book Free Consultation
                    </button>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                            <MenuIcon />
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-black/50 backdrop-blur-md pb-4">
                    <nav className="flex flex-col items-center space-y-4">
                        {navItems.map(item => (
                            <button key={item.id} onClick={() => handleNavClick(item.id)} className="text-gray-300 hover:text-white transition-colors duration-300">{item.label}</button>
                        ))}
                        <button onClick={() => handleNavClick('contact')} className="bg-[#0056CB] text-white px-5 py-2 rounded-lg font-semibold hover:bg-opacity-80 transition-all duration-300">
                            Book Free Consultation
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

const HeroSection: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particlesArray: Particle[];
        
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            x: number;
            y: number;
            directionX: number;
            directionY: number;
            size: number;
            color: string;

            constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            draw() {
                if(!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }
                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        const init = () => {
            setCanvasSize();
            particlesArray = [];
            const numberOfParticles = (canvas.height * canvas.width) / 9000;
            const colors = ['rgba(0, 163, 255, 0.6)', 'rgba(158, 0, 255, 0.6)', 'rgba(255, 255, 255, 0.6)'];
            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 2 + 1;
                const x = Math.random() * (window.innerWidth - size * 2) + size;
                const y = Math.random() * (window.innerHeight - size * 2) + size;
                const directionX = (Math.random() * 0.4) - 0.2;
                const directionY = (Math.random() * 0.4) - 0.2;
                const color = colors[Math.floor(Math.random() * colors.length)];
                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        };

        const animate = () => {
            if(!ctx) return;
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        const handleResize = () => {
          cancelAnimationFrame(animationFrameId);
          init();
          animate();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-5"></canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030014] z-10"></div>
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>
            <div className="relative z-20 text-center px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                    We Help Local Businesses Get Booked
                    <br />
                    <span className="text-gradient">From Social Media to Sales.</span>
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
                    Growwy manages everything: videos, ads, leads, and bookings — so you can focus on running your business.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button onClick={() => onNavigate('what-we-do')} className="bg-white text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                        See How We Work
                    </button>
                    <button onClick={() => onNavigate('contact')} className="bg-[#0056CB] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 glow-effect w-full sm:w-auto">
                        Book Free Consultation
                    </button>
                </div>
            </div>
            <style>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob { animation: blob 7s infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }
            `}</style>
        </section>
    );
};

const WhatWeDoSection: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
    const services = [
        { icon: <CreateIcon />, title: "Create", description: "We shoot & edit high-quality videos and social media content." },
        { icon: <PromoteIcon />, title: "Promote", description: "We run targeted ads across Instagram, Facebook, and Google." },
        { icon: <ConvertIcon />, title: "Convert", description: "We handle calls, follow-ups, and turn leads into confirmed bookings." },
        { icon: <DeliverIcon />, title: "Deliver", description: "You get real, closed clients — not just cold leads." },
    ];
    
    const [timelineRef, timelineInView] = useInView({ threshold: 0.1 });

    return (
        <Section id="what-we-do">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">End-to-End <span className="text-gradient">Growth Solution.</span></h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-24">We handle the entire pipeline, from the first impression to the final handshake.</p>
            
            <div ref={timelineRef as React.RefObject<HTMLDivElement>} className="relative w-full max-w-2xl mx-auto">
                {/* Central Timeline */}
                <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-800 transform -translate-x-1/2">
                    <div 
                        className="absolute top-0 h-full w-full bg-gradient-to-b from-cyan-500 to-purple-500 transition-transform duration-1000 ease-out origin-top"
                        style={{ transform: timelineInView ? 'scaleY(1)' : 'scaleY(0)' }}
                    />
                </div>
                
                {services.map((service, index) => {
                    const [itemRef, itemInView] = useInView({ threshold: 0.5 });
                    const isEven = index % 2 === 0;

                    return (
                        <div key={service.title} ref={itemRef as React.RefObject<HTMLDivElement>} className="relative mb-16 last:mb-0">
                            <div className={`flex items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                {/* Connector and Icon */}
                                <div className={`hidden md:flex w-1/2 ${isEven ? 'justify-start' : 'justify-end'}`}>
                                    <div className="w-1/2 relative flex justify-center">
                                       <div 
                                           className={`h-1 w-full bg-gray-700 transition-transform duration-700 ease-out ${isEven ? 'origin-right' : 'origin-left'}`}
                                           style={{ transform: itemInView ? 'scaleX(1)' : 'scaleX(0)', transitionDelay: '300ms' }}
                                       />
                                       <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? '-right-8' : '-left-8'}`}>
                                          <div className={`w-16 h-16 bg-[#0056CB] rounded-full flex items-center justify-center text-white glow-effect transition-all duration-500 ease-out transform ${itemInView ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
                                               {service.icon}
                                           </div>
                                       </div>
                                    </div>
                                </div>
                                
                                {/* Mobile Icon */}
                                <div className="md:hidden absolute left-1/2 -translate-x-1/2 -top-8">
                                    <div className={`w-16 h-16 bg-[#0056CB] rounded-full flex items-center justify-center text-white glow-effect`}>
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`w-full md:w-1/2 transition-all duration-700 ease-out ${itemInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '100ms' }}>
                                    <div className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 ${isEven ? 'md:text-left' : 'md:text-right'} mt-12 md:mt-0`}>
                                        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                        <p className="text-gray-400">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-24 text-center">
                <button onClick={() => onNavigate('contact')} className="bg-[#0056CB] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 glow-effect">
                    Ready to Grow? Book a Call
                </button>
            </div>
        </Section>
    );
};

const IndustriesSection: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
    const industryProcesses = [
        {
            title: "Marriage Halls & Hotels",
            steps: [
                { icon: <VenueTourIcon />, title: "Showcase Your Venue", points: ["Stunning video tours & photo galleries", "Capture the unique magic of your space", "Attract high-quality inquiries"] },
                { icon: <SocialAdsIcon />, title: "Reach Engaged Couples", points: ["Targeted ads on Instagram & Facebook", "Reach couples actively looking for venues", "Maximize your advertising budget"] },
                { icon: <BookingIcon />, title: "Secure Bookings", points: ["Professional handling of all inquiries", "Seamless booking & confirmation process", "Fill your calendar with qualified events"] },
                { icon: <HappyGuestIcon />, title: "Deliver Dream Events", points: ["Focus on delivering exceptional experiences", "Operate with a consistently full schedule", "Build a stellar reputation"] },
            ]
        },
        {
            title: "Schools & Coaching",
            steps: [
                { icon: <TestimonialIcon />, title: "Highlight Success Stories", points: ["Compelling video testimonials", "Showcase unique educational programs", "Build trust with prospective families"] },
                { icon: <DigitalCampaignIcon />, title: "Connect With Parents", points: ["Strategic digital campaigns that resonate", "Connect with parents in your local area", "Become the top choice for education"] },
                { icon: <ApplicationIcon />, title: "Drive Enrollments", points: ["Full management of the admission pipeline", "Nurture leads from contact to application", "Increase your student enrollment rates"] },
                { icon: <GraduationCapIcon />, title: "Foster Future Leaders", points: ["Concentrate on providing top-tier education", "Serve a consistently growing student body", "Shape the leaders of tomorrow"] },
            ]
        }
    ];

    return (
        <Section id="clients">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Industries <span className="text-gradient">We’re Growing.</span></h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {industryProcesses.map((process, index) => {
                     const [cardRef, cardInView] = useInView({ threshold: 0.2 });
                     return (
                        <div 
                            key={process.title} 
                            ref={cardRef as React.RefObject<HTMLDivElement>}
                            className={`p-1 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 transition-all duration-700 ease-out transform ${cardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                           <div className="bg-[#08031e] rounded-xl p-8 h-full">
                                <h3 className="text-3xl font-bold text-center mb-8 text-white">{process.title}</h3>
                                <div className="space-y-6">
                                    {process.steps.map((step) => (
                                        <div key={step.title} className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-12 h-12 bg-[#0056CB] rounded-full flex items-center justify-center text-white glow-effect">
                                                    {step.icon}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-white">{step.title}</h4>
                                                <ul className="list-disc list-inside text-gray-400 text-sm mt-1 space-y-1">
                                                    {step.points.map(point => <li key={point}>{point}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                           </div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-20 text-center">
                <p className="text-gray-400 mb-6">While these are our key partners, our system is proven to work for any local business.</p>
                <button onClick={() => onNavigate('contact')} className="bg-[#0056CB] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 glow-effect">
                    Find Out How We Can Help You
                </button>
            </div>
        </Section>
    );
};


const AboutSection: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
    const stats = [
        { value: "95%", label: "Client Retention" },
        { value: "3x", label: "Average ROI" },
        { value: "100+", label: "Businesses Scaled" },
    ];

    return (
        <Section id="about">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-gradient">Growwy.in</span></h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        We’re a next-gen marketing agency using AI, automation, and storytelling to help businesses scale faster. Our mission is to eliminate the guesswork from growth and deliver measurable results.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed mt-4">
                        Our goal: help 1000+ local businesses grow profitably and build lasting success stories.
                    </p>
                </div>
                <div>
                   <img 
                       src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                       alt="Data analytics dashboard showing graphs and charts" 
                       className="rounded-2xl object-cover w-full h-full shadow-2xl shadow-blue-500/10"
                   />
                </div>
            </div>
            
            <div className="mt-20 md:mt-28">
                 <h3 className="text-3xl font-bold text-center mb-10">Our Track Record</h3>
                 <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0">
                    {stats.map((stat, index) => {
                         const [statRef, statInView] = useInView({ threshold: 0.5 });
                         return (
                            <div 
                                key={stat.label} 
                                ref={statRef as React.RefObject<HTMLDivElement>} 
                                className={`text-center transition-all duration-500 ease-out transform ${statInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} 
                                style={{transitionDelay: `${index * 150}ms`}}
                            >
                                <p className="text-5xl md:text-6xl font-bold text-gradient">{stat.value}</p>
                                <p className="text-gray-400 mt-2 text-lg">{stat.label}</p>
                            </div>
                         );
                    })}
                </div>
                
                {(() => {
                    const [testimonialRef, testimonialInView] = useInView({ threshold: 0.5 });
                    return (
                        <div 
                            ref={testimonialRef as React.RefObject<HTMLDivElement>}
                            className={`mt-16 text-center italic text-gray-400 max-w-2xl mx-auto transition-all duration-700 ease-out ${testimonialInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                        >
                            <p className="text-xl">"Growwy doubled our bookings in 3 months. A true game-changer!"</p>
                            <p className="font-bold text-gray-300 mt-2">- Manager, The Grand Ballroom</p>
                        </div>
                    );
                })()}

            </div>

            <div className="mt-20 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h3>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8">Join over 100 businesses that have scaled with Growwy. Let's discuss your growth plan.</p>
                <button onClick={() => onNavigate('contact')} className="bg-[#0056CB] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 glow-effect">
                    Get Your Free Growth Strategy
                </button>
            </div>
        </Section>
    );
};

const ContactSection: React.FC<{ isPopupMode?: boolean }> = ({ isPopupMode = false }) => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        const form = e.currentTarget;
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzar2nE9S-CZcDnW2vowZsGBO4hYk_uCTgGZrbFs6CvcvrWLnu3q601o6bV6OO0izqp/exec';

        try {
            await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                body: new FormData(form),
            });
            setStatus('success');
            form.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    const wrapperClass = isPopupMode ? "" : "bg-gray-900/50 border border-gray-800 rounded-3xl p-8 md:p-16";

    return (
        <Section id="contact" className={isPopupMode ? "p-0" : ""}>
            <div className={wrapperClass}>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Let’s Grow Your <span className="text-gradient">Bookings.</span></h2>
                <p className={`text-center text-gray-400 max-w-xl mx-auto ${isPopupMode ? 'mb-6' : 'mb-12'}`}>Fill out the form for a free, no-obligation consultation call.</p>
                
                {status === 'success' ? (
                    <div className="text-center py-10 bg-gray-800/50 rounded-lg">
                        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                        <p className="text-gray-300">We've received your request and will contact you shortly.</p>
                    </div>
                ) : (
                    <>
                        {status === 'error' && (
                           <div className="text-center mb-6 py-4 bg-red-900/50 border border-red-700 rounded-lg">
                             <p className="font-semibold text-red-300">Error submitting form. Please try again.</p>
                           </div>
                        )}
                        <form 
                            ref={formRef}
                            id="contact-form"
                            onSubmit={handleSubmit}
                            className={`max-w-xl mx-auto ${isPopupMode ? 'space-y-3' : 'space-y-6'}`}
                        >
                            <input type="text" name="your_name" placeholder="Your Name" required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#0056CB] transition-all"/>
                            <input type="text" name="business_name" placeholder="Your Business Name" required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#0056CB] transition-all"/>
                            <input 
                                type="tel" 
                                name="phone" 
                                placeholder="Phone Number (10 digits)" 
                                required 
                                pattern="[0-9]{10}"
                                maxLength={10}
                                title="Please enter a 10-digit phone number"
                                onInput={(e) => {
                                    const target = e.target as HTMLInputElement;
                                    target.value = target.value.replace(/[^0-9]/g, '');
                                }}
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#0056CB] transition-all"
                            />
                            <select name="service_type" required defaultValue="" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#0056CB] transition-all appearance-none invalid:text-gray-400" style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}>
                                <option value="" disabled>Select Service Type</option>
                                <option value="marriage-hall">Marriage Hall</option>
                                <option value="event-hotel">Event Hotel</option>
                                <option value="school">School / Coaching</option>
                                <option value="other">Other</option>
                            </select>
                            <button type="submit" disabled={status === 'submitting'} className="w-full bg-[#0056CB] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 glow-effect disabled:opacity-50 disabled:cursor-not-allowed">
                                {status === 'submitting' ? 'Submitting...' : 'Request Consultation'}
                            </button>
                        </form>
                    </>
                )}

                {!isPopupMode && (
                    <div className="text-center mt-12">
                        <p className="text-gray-500 mb-4">Or contact us directly</p>
                        <div className="flex justify-center items-center space-x-8">
                            <a href="https://wa.me/917250407696" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-all transform hover:scale-110" aria-label="Chat on WhatsApp">
                                <WhatsAppIcon/>
                            </a>
                            <a href="tel:+917250407696" className="text-blue-400 hover:text-blue-300 transition-all transform hover:scale-110" aria-label="Call us">
                                <PhoneCallIcon/>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </Section>
    );
};

const PopupForm: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }
    
    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 animate-fade-in">
            <div ref={popupRef} className="relative bg-gray-900/80 border border-gray-800 rounded-3xl p-6 w-full max-w-2xl transform transition-transform duration-300 animate-slide-up">
                 <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
                     <CloseIcon />
                 </button>
                 <ContactSection isPopupMode={true} />
            </div>
             <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slide-up {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-fade-in { animation: fade-in 0.3s ease-out; }
                .animate-slide-up { animation: slide-up 0.4s ease-out; }
            `}</style>
        </div>
    );
}

const Footer = () => {
    return (
        <footer className="text-center py-8 border-t border-gray-900">
            <p className="text-gray-500">&copy; {new Date().getFullYear()} Growwy.in. All rights reserved.</p>
        </footer>
    );
}

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = useCallback(() => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [toggleVisibility]);

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 bg-[#0056CB] text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300 transform focus:outline-none glow-effect ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            aria-label="Scroll to top"
            style={{ zIndex: 40 }}
        >
            <ArrowUpIcon />
        </button>
    );
};

const App = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    
    const handleNavigate = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    useEffect(() => {
        const showPopup = () => {
            if (!sessionStorage.getItem('popupShown')) {
                setPopupVisible(true);
                sessionStorage.setItem('popupShown', 'true');
            }
        };

        const timer = setTimeout(showPopup, 5000);

        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 || e.relatedTarget == null || (e.relatedTarget as HTMLElement).nodeName === 'HTML') {
                showPopup();
            }
        };
        
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            clearTimeout(timer);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="bg-[#030014] overflow-x-hidden">
            <GlowEffect />
            <Header onNavigate={handleNavigate} />
            <main>
                <HeroSection onNavigate={handleNavigate}/>
                <WhatWeDoSection onNavigate={handleNavigate} />
                <IndustriesSection onNavigate={handleNavigate} />
                <AboutSection onNavigate={handleNavigate} />
                <ContactSection />
            </main>
            <Footer />
            <PopupForm isOpen={isPopupVisible} onClose={() => setPopupVisible(false)} />
            <ScrollToTopButton />
        </div>
    );
};

export default App;