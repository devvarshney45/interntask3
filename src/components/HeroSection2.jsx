import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    subtitle: 'Welcome to ImmiEx Agency',
    title: 'WE MAKE THE VISA PROCESS FASTER',
    desc: 'Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat eugiat mauris ipsum in viverra tortor and gravida purus lorem in tortor',
    buttonText: 'DISCOVER MORE',
    bg: '/assets/sydney_hero_bg.png',
  },
  {
    id: 2,
    subtitle: 'High-Class Professionals',
    title: "WE'RE MOST TRUSTED IMMIGRATION AGENCY",
    desc: 'Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat eugiat mauris ipsum in viverra tortor and gravida purus lorem in tortor',
    buttonText: 'WHAT WE DO',
    bg: '/assets/advisor_laptop.png',
  },
  {
    id: 3,
    subtitle: 'We have 20+ years experience in',
    title: 'IMMIGRATION & VISA CONSULTATION',
    desc: 'Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat eugiat mauris ipsum in viverra tortor and gravida purus lorem in tortor',
    buttonText: 'BOOK CONSULTATION NOW',
    bg: '/assets/advisors_table.png',
  },
];

const UniversityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#6c757d" strokeWidth="1.5" className="w-8 h-8">
    <path d="M3 21h18M6 21V10M18 21V10M12 3L2 10h20L12 3z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 21V14h6v7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WalletIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#6c757d" strokeWidth="1.5" className="w-8 h-8">
    <rect x="2" y="5" width="20" height="14" rx="2"/>
    <path d="M16 12h4v.01" strokeLinecap="round"/>
    <path d="M2 9h20"/>
  </svg>
);

const WrenchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#6c757d" strokeWidth="1.5" className="w-8 h-8">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);

const FamilyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#6c757d" strokeWidth="1.5" className="w-8 h-8">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round"/>
  </svg>
);

const LuggageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#6c757d" strokeWidth="1.5" className="w-8 h-8">
    <rect x="6" y="8" width="12" height="13" rx="2"/>
    <path d="M9 8V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3"/>
    <line x1="10" y1="12" x2="10" y2="17" strokeLinecap="round"/>
    <line x1="14" y1="12" x2="14" y2="17" strokeLinecap="round"/>
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#6c757d" strokeWidth="1.5" className="w-8 h-8">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const HeroSection2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  const featureCards = [
    { icon: <UniversityIcon />, title: 'Education Visa', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
    { icon: <WalletIcon />, title: 'Business Immigration', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
    { icon: <WrenchIcon />, title: 'Skilled Immigration', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
    { icon: <FamilyIcon />, title: 'Spouse/Family Visa', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
    { icon: <LuggageIcon />, title: 'Tourist & Visitor Visa', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
    { icon: <GlobeIcon />, title: 'Language Courses', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Banner */}
      <div
        className="relative w-full flex items-center justify-center transition-all duration-700 ease-in-out"
        style={{
          minHeight: '460px',
          backgroundImage: `url('${slide.bg}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Blue Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(15,25,50,0.88) 0%, rgba(20,32,65,0.78) 50%, rgba(15,25,50,0.88) 100%)',
          }}
        />

        {/* Slide Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center text-white flex flex-col items-center">
          <p
            className="text-gray-300 text-sm md:text-base font-medium mb-3 tracking-wide"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {slide.subtitle}
          </p>

          <h1
            className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-5 max-w-3xl tracking-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {slide.title}
          </h1>

          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl leading-relaxed mb-8">
            {slide.desc}
          </p>

          <a
            href="#contact"
            className="inline-block bg-[#ff4d15] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-sm hover:bg-[#e03e08] transition-all duration-200 shadow-lg hover:shadow-orange-900/50 mb-6"
          >
            {slide.buttonText}
          </a>

          {/* Arrows */}
          <div className="flex items-center justify-center gap-4">
            <button onClick={prevSlide} className="text-white/70 hover:text-white p-1">
              <ChevronLeft size={22} />
            </button>
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'bg-[#ff4d15] w-6' : 'bg-white/40 w-2'
                  }`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="text-white/70 hover:text-white p-1">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating 6 Feature Cards Grid (Homepage 2 Specific) */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 -mt-16 mb-16">
        <div className="bg-white shadow-xl rounded-sm grid grid-cols-1 md:grid-cols-3 border border-gray-100 divide-y md:divide-y-0 divide-gray-100">
          {featureCards.map((card, idx) => (
            <div
              key={idx}
              className={`p-6 flex items-start gap-4 hover:bg-gray-50 transition-colors duration-200 ${
                idx % 3 !== 2 ? 'md:border-r border-gray-100' : ''
              } ${idx < 3 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="shrink-0 pt-0.5">{card.icon}</div>
              <div>
                <h3
                  className="font-bold text-[#25345d] text-sm leading-snug mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {card.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
