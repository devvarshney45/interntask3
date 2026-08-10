import React from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Briefcase, Award, Compass } from 'lucide-react';

const HeroSection4 = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Banner with USA Flag & Statue of Liberty motif */}
      <div
        className="relative w-full flex items-center justify-center py-28 px-4"
        style={{
          minHeight: '480px',
          backgroundImage: `url('/assets/sydney_hero_bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Blue & Red Flag Tint Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(15,23,42,0.92) 0%, rgba(20,32,65,0.85) 50%, rgba(15,23,42,0.92) 100%)',
          }}
        />

        {/* USA Flag Stripes Watermark */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
            <line x1="0" y1="10" x2="100" y2="10" stroke="#CC0000" strokeWidth="6" />
            <line x1="0" y1="25" x2="100" y2="25" stroke="white" strokeWidth="6" />
            <line x1="0" y1="40" x2="100" y2="40" stroke="#CC0000" strokeWidth="6" />
            <line x1="0" y1="55" x2="100" y2="55" stroke="white" strokeWidth="6" />
            <line x1="0" y1="70" x2="100" y2="70" stroke="#CC0000" strokeWidth="6" />
            <line x1="0" y1="85" x2="100" y2="85" stroke="white" strokeWidth="6" />
            <rect x="0" y="0" width="40" height="50" fill="#00247D" />
          </svg>
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-2 z-20"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-2 z-20"
          aria-label="Next Slide"
        >
          <ChevronRight size={32} />
        </button>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white flex flex-col items-center">
          <h1
            className="font-black text-4xl sm:text-6xl md:text-7xl uppercase leading-tight mb-5 tracking-wide"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            IMMIGRATION
          </h1>

          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl leading-relaxed mb-8">
            Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat eugiat mauris ipsum in viverra tortor and gravida purus lorem in tortor
          </p>

          <a
            href="#contact"
            className="inline-block bg-[#ff4d15] text-white font-bold text-xs uppercase tracking-widest px-9 py-3.5 rounded-sm hover:bg-[#e03e08] transition-all duration-200 shadow-xl hover:shadow-orange-900/50"
          >
            APPLY NOW
          </a>
        </div>
      </div>

      {/* 4 Feature Cards Grid Below Hero */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 -mt-12 mb-12">
        <div className="bg-white shadow-xl rounded-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-gray-100 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {[
            {
              icon: <GraduationCap size={28} className="text-[#25345d]" />,
              title: 'Student Visa',
              desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
            },
            {
              icon: <Briefcase size={28} className="text-[#25345d]" />,
              title: 'Skilled Work Visa',
              desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
            },
            {
              icon: <Award size={28} className="text-[#25345d]" />,
              title: 'PR Visa',
              desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
            },
            {
              icon: <Compass size={28} className="text-[#25345d]" />,
              title: 'Tourist & Visitor Visa',
              desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="p-6 flex flex-col items-start gap-3 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="pt-0.5">{card.icon}</div>
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

export default HeroSection4;
