import React from 'react';
import { CheckCircle2, GraduationCap, BookOpen } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Banner */}
      <div
        className="relative w-full flex items-center"
        style={{
          minHeight: '500px',
          background: 'linear-gradient(90deg, #182045 0%, #1e2d5e 40%, #1b3a6b 65%, #16284e 100%)',
        }}
      >
        {/* Subtle diagonal grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Hero image on right side - graduating students */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 opacity-50"
          style={{
            backgroundImage: `url('/assets/sydney_hero_bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        />
        {/* Gradient fade from left over image */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2"
          style={{
            background: 'linear-gradient(to right, #182045 0%, rgba(24,32,69,0.6) 60%, transparent 100%)',
          }}
        />

        {/* Hero Content - Left Aligned */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full py-20">
          <div className="max-w-xl">
            <p
              className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Top Ranked
            </p>
            <h1
              className="font-black text-5xl sm:text-6xl md:text-7xl uppercase leading-tight mb-5 text-white"
              style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.01em' }}
            >
              UNIVERSITIES
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
              Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis lacinia risus interdum.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#ff4d15] text-white font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-3.5 hover:bg-[#e03e08] transition-all duration-200 shadow-lg"
              style={{ letterSpacing: '0.12em' }}
            >
              APPLY NOW
            </a>
          </div>
        </div>
      </div>

      {/* 3 Feature Cards Below Hero */}
      <div className="bg-white shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {[
            {
              icon: <CheckCircle2 size={30} className="text-[#ff4d15]" />,
              title: 'Overseas Education and Study Visa Consultants',
              desc: 'Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor tempus feugiat dolor and lacinia.',
            },
            {
              icon: <GraduationCap size={30} className="text-[#ff4d15]" />,
              title: 'Guaranteed Admission in Top Ranked Universities',
              desc: 'Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor tempus feugiat dolor and lacinia.',
            },
            {
              icon: <BookOpen size={30} className="text-[#ff4d15]" />,
              title: 'No IELTS Required for Australian Study Visa',
              desc: 'Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor tempus feugiat dolor and lacinia.',
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="px-8 py-8 flex items-start gap-5 hover:bg-gray-50 transition-colors duration-200 cursor-default"
            >
              <div className="shrink-0 mt-1">{card.icon}</div>
              <div>
                <h3
                  className="font-bold text-[#25345d] text-sm leading-snug mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {card.title}
                </h3>
                <p className="text-gray-400 text-[12px] leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
