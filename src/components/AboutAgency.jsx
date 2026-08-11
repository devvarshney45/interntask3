import React from 'react';

const AboutAgency = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: 4-Image Grid */}
          <div className="grid grid-cols-2 gap-3">
            {/* Top-left: wide rectangular image */}
            <div className="rounded overflow-hidden shadow-sm" style={{ height: '200px' }}>
              <img
                src="/assets/advisor_laptop.png"
                alt="Student with laptop"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Top-right: image offset slightly */}
            <div className="rounded overflow-hidden shadow-sm mt-6" style={{ height: '185px' }}>
              <img
                src="/assets/couple_travel.png"
                alt="Students"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bottom-left: taller image */}
            <div className="rounded overflow-hidden shadow-sm -mt-4" style={{ height: '195px' }}>
              <img
                src="/assets/advisors_table.png"
                alt="Meeting"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Bottom-right: image */}
            <div className="rounded overflow-hidden shadow-sm mt-2" style={{ height: '180px' }}>
              <img
                src="/assets/sydney_hero_bg.png"
                alt="Sydney"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div>
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-3">
              About EduVista International
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#25345d] leading-tight mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Your Gateway to Global Education
            </h2>

            <ul className="space-y-5">
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-[#ff4d15] mt-2 shrink-0" />
                <p className="text-gray-500 text-sm leading-relaxed">
                  Eduvista International is a professional Education Institution Consultancy dedicated to providing innovative and strategic solutions for students, educators, and educational institutions. We focus on enhancing educational quality, institutional development, career growth, and skill advancement.
                </p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-[#ff4d15] mt-2 shrink-0" />
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our commitment is to create opportunities, improve learning experiences, and support sustainable educational success worldwide. We provide comprehensive guidance and support for students seeking admission to universities, colleges, and educational institutions globally.
                </p>
              </li>
            </ul>

            <a
              href="#"
              className="inline-block mt-8 border-2 border-[#25345d] text-[#25345d] text-[11px] font-bold uppercase tracking-[0.15em] px-7 py-3 hover:bg-[#25345d] hover:text-white transition-all duration-200"
            >
              DISCOVER MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAgency;
