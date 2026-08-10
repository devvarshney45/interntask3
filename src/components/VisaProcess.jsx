import React, { useState } from 'react';

const tabs = [
  {
    id: 'government',
    label: 'Goverment Approved',
    image: '/assets/advisors_table.png',
    tag: 'GETTING A VISA',
    title: 'We make the visa process faster',
    body: 'Semper lacus cursus porta, feugiat primis ligula risus auctor and rhoncus in ultrce ligula purus ipsum primis in cubilia augue vitae lacreet augue in cubilia augue egestas an ipsum turpis.',
    subheading: 'Cubilia augue vitae laoreet',
    bullets: [
      'Fringilla risus nec, luctus mauris orci auctor purus euismod at pretium purus pretium ligula rutrum viverra tortor sapien sodales congue magna undo pretium purus pretium an magnis nulla.',
      'Quaerat sodales sapien undo euismod risus auctor egestas augue mauri undo viverra tortor sapien sodales sapien and vitae donec dolor sapien augue erat iaculis euismod.',
    ],
  },
  {
    id: 'hidden',
    label: 'No Hidden Costs',
    image: '/assets/couple_travel.png',
    tag: 'WE LOVE OUR CLIENTS',
    title: 'Thousands of people choose our services',
    p1: 'Semper lacus cursus porta, feugiat primis ligula risus auctor and rhoncus in ultrce ligula purus ipsum primis in cubilia augue vitae lacreet augue in cubilia augue egestas an ipsum turpis magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien etiam',
    p2: 'An enim nullam tempor sapien gravida donec enim blandit ipsum at porta justo integer velna vitae auctor integer congue magna pretium purus pretium. An magnis nulla dolor sapien augue erat iaculis',
    buttonText: 'DISCOVER MORE',
  },
  {
    id: 'easy',
    label: 'Fast, Easy & Secure',
    image: '/assets/advisors_table.png',
    badgeText: '20+ Years Of Experience',
    tag: 'PROFESSIONAL ADVISORS',
    title: 'Get guarantee success with our advisors',
    bullets: [
      'Semper lacus cursus porta, feugiat primis ligula risus auctor and rhoncus in ultrce ligula purus ipsum primis in cubilia augue vitae lacreet augue in cubilia augue egestas an ipsum turpis',
      'Fringilla risus nec, luctus mauris orci auctor purus euismod at pretium purus pretium ligula rutrum viverra tortor sapien sodales congue magna undo pretium purus pretium an magnis nulla',
      'Quaerat sodales sapien undo euismod risus auctor egestas augue mauri undo viverra tortor sapien sodales sapien and vitae donec dolor sapien augue erat iaculis euismod',
    ],
  },
];

const VisaProcess = () => {
  const [activeTab, setActiveTab] = useState('easy');
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
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
                <text x="50" y="44" textAnchor="middle" fontSize="7" fill="#25345d" fontWeight="bold" letterSpacing="1">IMMIGRATION</text>
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
          <div key={current.id} className="animate-in fade-in duration-300">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              {current.tag}
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#25345d] leading-tight mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {current.title}
            </h2>

            {/* Tab specific content */}
            {current.body && (
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {current.body}
              </p>
            )}

            {current.subheading && (
              <p className="font-semibold text-[#25345d] text-sm mb-4">
                {current.subheading}
              </p>
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
