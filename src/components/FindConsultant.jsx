import React, { useState } from 'react';

// Simplified Australia SVG map
const AustraliaMap = () => {
  const [hover, setHover] = useState(null);

  const states = [
    { id: 'wa', name: 'WA', path: 'M 40 40 L 140 40 L 140 220 L 40 220 Z', base: '#5b93c5' },
    { id: 'nt', name: 'NT', path: 'M 140 40 L 220 40 L 220 150 L 140 150 Z', base: '#6ba8d9' },
    { id: 'sa', name: 'SA', path: 'M 140 150 L 230 150 L 235 220 L 140 220 Z', base: '#5b93c5' },
    { id: 'qld', name: 'QLD', path: 'M 220 40 L 310 40 L 310 175 L 220 150 Z', base: '#6ba8d9' },
    { id: 'nsw', name: 'NSW', path: 'M 235 175 L 310 175 L 315 225 L 235 220 Z', base: '#8bbde0' },
    { id: 'vic', name: 'VIC', path: 'M 235 220 L 315 225 L 310 250 L 235 248 Z', base: '#8bbde0' },
    { id: 'tas', name: 'TAS', path: 'M 265 270 L 305 270 L 308 300 L 263 300 Z', base: '#b8d8ed' },
  ];

  return (
    <div className="relative" style={{ width: '320px', height: '320px' }}>
      {/* Labels */}
      <div className="absolute text-[8px] text-gray-400 font-medium" style={{ top: '15%', left: '4px' }}>
        <div>INDIAN</div><div>OCEAN</div>
      </div>
      <div className="absolute text-[8px] text-gray-400 font-medium text-right" style={{ top: '8%', right: '4px' }}>
        <div>SOUTH</div><div>PACIFIC</div><div>OCEAN</div>
      </div>
      <div className="absolute text-[8px] text-gray-400" style={{ bottom: '12%', right: '8px' }}>Tasman Sea</div>

      <svg viewBox="20 20 310 300" className="w-full h-full" style={{ filter: 'drop-shadow(0 2px 8px rgba(91,147,197,0.2))' }}>
        {states.map(s => (
          <path
            key={s.id}
            d={s.path}
            fill={hover === s.id ? '#ff4d15' : s.base}
            stroke="white"
            strokeWidth="1.5"
            className="cursor-pointer transition-all duration-200"
            onMouseEnter={() => setHover(s.id)}
            onMouseLeave={() => setHover(null)}
            opacity={hover && hover !== s.id ? 0.65 : 1}
          />
        ))}
        {/* ACT dot */}
        <circle cx="278" cy="218" r="4" fill={hover === 'act' ? '#ff4d15' : '#1e3a5f'} stroke="white" strokeWidth="1" className="cursor-pointer" onMouseEnter={() => setHover('act')} onMouseLeave={() => setHover(null)} />
        {hover && (
          <text x="175" y="315" textAnchor="middle" fontSize="9" fill="#25345d" fontWeight="bold">
            {states.find(s => s.id === hover)?.name || 'ACT'}
          </text>
        )}
      </svg>
    </div>
  );
};

const FindConsultant = () => {
  const cities = ['Canberra', 'Sydney', 'Adelaide', 'Melbourne', 'Brisbane', 'Darwin'];
  const practiceAreas = [
    'University Selection',
    'Visa Assistance',
    'Overseas Internship',
    'Health Insurance',
    'Tourist & Visitor Visa',
    'Travel Assistance',
  ];

  return (
    <section className="py-16 px-4 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <h2
            className="text-2xl font-bold text-[#25345d] mb-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Find a consultant by:
          </h2>
          <p className="text-gray-400 text-xs max-w-lg leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis lacinia
            risus interdum auctor id viverra dolor iaculis luctus placerat and massa.
          </p>
        </div>

        {/* 3 columns: city, practice area, map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* City */}
          <div>
            <h3
              className="font-bold text-[#25345d] text-sm mb-4 pb-2 border-b border-gray-200"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              City:
            </h3>
            <ul className="space-y-2.5">
              {cities.map((city) => (
                <li key={city}>
                  <a
                    href="#"
                    className="text-gray-500 text-sm hover:text-[#ff4d15] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#ff4d15] transition-colors shrink-0" />
                    {city}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#" className="inline-flex items-center gap-1 mt-4 text-xs font-bold text-[#25345d] hover:text-[#ff4d15] transition-colors uppercase tracking-wide">
              View All <span className="text-[#ff4d15]">›</span>
            </a>
          </div>

          {/* Practice Area */}
          <div>
            <h3
              className="font-bold text-[#25345d] text-sm mb-4 pb-2 border-b border-gray-200"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Practice Area:
            </h3>
            <ul className="space-y-2.5">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <a
                    href="#"
                    className="text-gray-500 text-sm hover:text-[#ff4d15] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-[#ff4d15] transition-colors shrink-0" />
                    {area}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#" className="inline-flex items-center gap-1 mt-4 text-xs font-bold text-[#25345d] hover:text-[#ff4d15] transition-colors uppercase tracking-wide">
              View All <span className="text-[#ff4d15]">›</span>
            </a>
          </div>

          {/* World Map Image */}
          <div className="flex justify-center items-center">
            <img
              src="/assets/worldmap1.png"
              alt="World Map Consultant Finder"
              className="w-full max-w-[360px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindConsultant;
