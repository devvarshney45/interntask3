import React from 'react';
import { GraduationCap, Briefcase, Compass } from 'lucide-react';

const HeroSection8 = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Banner */}
      <div
        className="relative w-full flex items-center justify-center py-28 px-4"
        style={{
          minHeight: '480px',
          backgroundImage: `url('/assets/couple_travel.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-[#162039]/85" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white flex flex-col items-center">
          <p className="text-[#ff4d15] text-xs font-bold tracking-widest uppercase mb-3">
            FAST, EASY &amp; SECURE
          </p>
          <h1
            className="font-black text-3xl sm:text-5xl md:text-6xl uppercase leading-tight mb-5 tracking-wide text-white"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            IMMIGRATION SERVICES &amp; VISA CONSULTATIONS
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl leading-relaxed mb-8">
            Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat eugiat mauris ipsum.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#ff4d15] text-white font-bold text-xs uppercase tracking-widest px-9 py-3.5 rounded-sm hover:bg-[#e03e08] transition-all duration-200 shadow-xl"
          >
            APPLY NOW
          </a>
        </div>
      </div>

      {/* 3 Floating Feature Cards Overlapping Bottom */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 -mt-10 mb-10">
        <div className="bg-white shadow-xl rounded-sm grid grid-cols-1 md:grid-cols-3 border border-gray-100 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {[
            {
              icon: <GraduationCap size={28} className="text-[#ff4d15]" />,
              title: 'Student Visa',
              desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
            },
            {
              icon: <Briefcase size={28} className="text-[#ff4d15]" />,
              title: 'Skilled Work Visa',
              desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
            },
            {
              icon: <Compass size={28} className="text-[#ff4d15]" />,
              title: 'Tourist & Visitor Visa',
              desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="p-6 flex flex-col items-start gap-3 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="p-2 bg-orange-50 rounded-sm">{card.icon}</div>
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

export default HeroSection8;
