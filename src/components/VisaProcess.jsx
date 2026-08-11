import React, { useState } from 'react';

const tabs = [
  {
    id: 'process',
    label: 'Working Process',
    image: '/assets/advisors_table.png',
    tag: 'HOW WE WORK',
    title: 'Our 5-Step Working Process',
    steps: [
      { num: '01', title: 'Consultation & Needs Assessment', desc: 'Understanding the needs and objectives of students or institutions. We assess academic background, career goals, and study preferences.' },
      { num: '02', title: 'Strategic Planning', desc: 'Preparing effective plans and customized solutions. We identify suitable universities, programs, and countries based on your profile.' },
      { num: '03', title: 'Implementation', desc: 'Executing the planned strategies and services. This includes application filing, documentation, SOP writing, and visa processing.' },
      { num: '04', title: 'Monitoring & Evaluation', desc: 'Tracking progress and measuring outcomes. We follow up on applications, visa status, and keep you informed at every step.' },
      { num: '05', title: 'Continuous Support', desc: 'Providing ongoing guidance and improvement support. From pre-departure briefing to post-arrival assistance, we are always with you.' },
    ],
  },
  {
    id: 'services',
    label: 'Our Services',
    image: '/assets/couple_travel.png',
    tag: 'WHAT WE OFFER',
    title: 'Comprehensive Educational Services',
    p1: 'EduVista International provides professional and innovative educational consultancy services designed to support students, educators, and educational institutions in achieving academic excellence and sustainable growth.',
    p2: 'Our goal is to deliver quality guidance, strategic planning, and modern solutions that create lasting impact in the education sector.',
    buttonText: 'DISCOVER MORE',
  },
  {
    id: 'global',
    label: 'Global Reach',
    image: '/assets/sydney_hero_bg.png',
    badgeText: '15+ Countries',
    tag: 'GLOBAL EDUCATION OPPORTUNITIES',
    title: 'Study in Your Dream Destination',
    bullets: [
      'USA, Canada, United Kingdom, Australia & New Zealand – English-speaking premium destinations with world-class universities.',
      'Germany, Sweden, Denmark, Netherlands, Ireland, Finland & France – European higher education with affordable tuition options.',
      'Malaysia, Hungary & Italy – Emerging study destinations with quality education and diverse culture.',
    ],
  },
];

const VisaProcess = () => {
  const [activeTab, setActiveTab] = useState('process');
  const current = tabs.find((t) => t.id === activeTab);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Tabs navigation header */}
        <div className="flex justify-center border-b border-gray-100 mb-16 gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                pb-4 text-sm font-semibold transition-all duration-200 relative
                ${activeTab === tab.id
                  ? 'text-[#ff4d15]'
                  : 'text-gray-400 hover:text-[#25345d]'
                }
              `}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff4d15]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab content area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          {/* Left: Image container with stamp graphic and badge */}
          <div className="relative flex justify-center">
            {/* Dotted grid background pattern */}
            <div
              className="absolute"
              style={{
                left: '-15px',
                bottom: '-20px',
                width: '180px',
                height: '180px',
                backgroundImage: 'radial-gradient(circle, #d0d9e8 1.5px, transparent 1.5px)',
                backgroundSize: '12px 12px',
                opacity: 0.8,
                zIndex: 0,
              }}
            />

            {/* Stamp circle graphic top right */}
            <div className="absolute -top-6 -right-6 opacity-15" style={{ zIndex: 1 }}>
              <svg viewBox="0 0 100 100" width="110" height="110">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#25345d" strokeWidth="2.5" strokeDasharray="6 4" />
                <circle cx="50" cy="50" r="38" fill="none" stroke="#25345d" strokeWidth="1.5" />
                <text x="50" y="44" textAnchor="middle" fontSize="7" fill="#25345d" fontWeight="bold" letterSpacing="1">EDUCATION</text>
                <text x="50" y="54" textAnchor="middle" fontSize="7" fill="#25345d" fontWeight="bold" letterSpacing="1">CONSULTING</text>
              </svg>
            </div>

            {/* Main photo */}
            <div
              className="relative rounded-lg overflow-hidden shadow-xl z-10"
              style={{ width: '340px', height: '320px' }}
            >
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
              />

              {/* Badge overlay if present */}
              {current.badgeText && (
                <div
                  className="absolute bottom-4 right-4 bg-[#25345d] text-white px-5 py-3 rounded-sm shadow-xl z-20"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <div className="font-extrabold text-lg leading-tight tracking-wide">
                    {current.badgeText}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Text content */}
          <div key={current.id}>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              {current.tag}
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#25345d] leading-tight mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {current.title}
            </h2>

            {/* Steps content */}
            {current.steps && (
              <div className="space-y-4">
                {current.steps.map((step) => (
                  <div key={step.num} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#ff4d15] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#25345d] text-sm mb-0.5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {step.title}
                      </h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {current.p1 && (
              <>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{current.p1}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{current.p2}</p>
                <a
                  href="#contact"
                  className="inline-block border-2 border-[#25345d] text-[#25345d] font-bold text-xs tracking-widest uppercase px-7 py-3 hover:bg-[#25345d] hover:text-white transition-all duration-200"
                >
                  {current.buttonText}
                </a>
              </>
            )}

            {current.bullets && (
              <ul className="space-y-4">
                {current.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#25345d] mt-2 shrink-0" />
                    <p className="text-gray-500 text-sm leading-relaxed">{bullet}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-dashed border-gray-200 mt-20" />
      </div>
    </section>
  );
};

export default VisaProcess;
