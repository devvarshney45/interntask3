import React from 'react';

const HeroSection6 = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Banner with Students & Flags */}
      <div
        className="relative w-full flex items-center justify-center py-28 px-4"
        style={{
          minHeight: '480px',
          backgroundImage: `url('/assets/sydney_hero_bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'hue-rotate(15deg) contrast(105%)',
        }}
      >
        {/* Dark Blue Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(15,23,42,0.85) 0%, rgba(20,32,65,0.75) 50%, rgba(15,23,42,0.85) 100%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white flex flex-col items-center">
          <p className="text-xs font-bold text-[#ff4d15] tracking-widest uppercase mb-3">
            START YOUR FUTURE TODAY
          </p>
          <h1
            className="font-black text-4xl sm:text-6xl uppercase leading-tight mb-5 tracking-wide text-white"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            STUDY ABROAD
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl leading-relaxed mb-8">
            Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat eugiat mauris ipsum in viverra tortor and gravida purus lorem in tortor.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#ff4d15] text-white font-bold text-xs uppercase tracking-widest px-9 py-3.5 rounded-sm hover:bg-[#e03e08] transition-all duration-200 shadow-xl"
          >
            DISCOVER MORE
          </a>
        </div>
      </div>

      {/* Dark Blue Stat Strip */}
      <div className="bg-[#25345d] py-4 text-center text-white text-xs font-semibold tracking-wider uppercase border-t border-b border-blue-900/50">
        Over 10,000+ Students Chosen Us For Their Visa &amp; Immigration
      </div>
    </section>
  );
};

export default HeroSection6;
