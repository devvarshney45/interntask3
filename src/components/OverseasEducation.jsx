import React from 'react';

// Country flag SVG components
const FlagCanada = () => (
  <svg viewBox="0 0 30 20" className="w-8 h-6 rounded-sm shadow-sm border border-white/20">
    <rect width="7.5" height="20" fill="#D52B1E"/>
    <rect x="7.5" width="15" height="20" fill="white"/>
    <rect x="22.5" width="7.5" height="20" fill="#D52B1E"/>
    {/* Maple leaf simplified */}
    <path d="M15 4 L16.5 8 L20 8 L17.5 10 L18.5 14 L15 12 L11.5 14 L12.5 10 L10 8 L13.5 8 Z" fill="#D52B1E" transform="scale(0.6) translate(9.5, 1)"/>
  </svg>
);

const FlagAustralia = () => (
  <svg viewBox="0 0 30 20" className="w-8 h-6 rounded-sm shadow-sm border border-white/20">
    <rect width="30" height="20" fill="#00008B"/>
    <rect width="15" height="10" fill="#00008B"/>
    {/* Union Jack simplified */}
    <line x1="0" y1="0" x2="15" y2="10" stroke="white" strokeWidth="3"/>
    <line x1="15" y1="0" x2="0" y2="10" stroke="white" strokeWidth="3"/>
    <line x1="7.5" y1="0" x2="7.5" y2="10" stroke="white" strokeWidth="3.5"/>
    <line x1="0" y1="5" x2="15" y2="5" stroke="white" strokeWidth="3.5"/>
    <line x1="0" y1="0" x2="15" y2="10" stroke="#CC0000" strokeWidth="1.5"/>
    <line x1="15" y1="0" x2="0" y2="10" stroke="#CC0000" strokeWidth="1.5"/>
    {/* Stars simplified as dots */}
    <circle cx="22" cy="5" r="1.5" fill="white"/>
    <circle cx="25" cy="13" r="1.5" fill="white"/>
    <circle cx="19" cy="14" r="1" fill="white"/>
    <circle cx="27" cy="8" r="1" fill="white"/>
    <circle cx="20" cy="9" r="1" fill="white"/>
  </svg>
);

const FlagUSA = () => (
  <svg viewBox="0 0 30 20" className="w-8 h-6 rounded-sm shadow-sm border border-white/20">
    {[...Array(13)].map((_, i) => (
      <rect key={i} y={i * 1.538} width="30" height="1.538" fill={i % 2 === 0 ? '#B22234' : 'white'}/>
    ))}
    <rect width="12" height="10" fill="#3C3B6E"/>
    {/* Stars simplified */}
    {[...Array(9)].map((_, i) => (
      <circle key={i} cx={1.5 + (i % 3) * 3} cy={1.5 + Math.floor(i / 3) * 2.5} r="0.6" fill="white"/>
    ))}
  </svg>
);

const FlagUK = () => (
  <svg viewBox="0 0 30 20" className="w-8 h-6 rounded-sm shadow-sm border border-white/20">
    <rect width="30" height="20" fill="#012169"/>
    <line x1="0" y1="0" x2="30" y2="20" stroke="white" strokeWidth="4"/>
    <line x1="30" y1="0" x2="0" y2="20" stroke="white" strokeWidth="4"/>
    <line x1="15" y1="0" x2="15" y2="20" stroke="white" strokeWidth="6"/>
    <line x1="0" y1="10" x2="30" y2="10" stroke="white" strokeWidth="6"/>
    <line x1="0" y1="0" x2="30" y2="20" stroke="#C8102E" strokeWidth="2"/>
    <line x1="30" y1="0" x2="0" y2="20" stroke="#C8102E" strokeWidth="2"/>
    <line x1="15" y1="0" x2="15" y2="20" stroke="#C8102E" strokeWidth="3.5"/>
    <line x1="0" y1="10" x2="30" y2="10" stroke="#C8102E" strokeWidth="3.5"/>
  </svg>
);

const FlagEurope = () => (
  <svg viewBox="0 0 30 20" className="w-8 h-6 rounded-sm shadow-sm border border-white/20">
    <rect width="30" height="20" fill="#003399"/>
    {/* 12 stars in circle */}
    {[...Array(12)].map((_, i) => {
      const angle = (i * 30 - 90) * (Math.PI / 180);
      const x = 15 + 6 * Math.cos(angle);
      const y = 10 + 6 * Math.sin(angle);
      return <circle key={i} cx={x} cy={y} r="1.2" fill="#FFCC00"/>;
    })}
  </svg>
);

const countries = [
  { name: 'CANADA', flag: <FlagCanada /> },
  { name: 'AUSTRALIA', flag: <FlagAustralia /> },
  { name: 'USA', flag: <FlagUSA /> },
  { name: 'UK', flag: <FlagUK /> },
  { name: 'EUROPE', flag: <FlagEurope /> },
];

const OverseasEducation = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: '#25345d', minHeight: '420px' }}>
      {/* Background cityscape / Sydney Harbour */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/assets/sydney_hero_bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(37,52,93,0.7) 0%, rgba(37,52,93,0.85) 50%, rgba(37,52,93,0.6) 100%)' }}
      />

      {/* Abstract square grid in background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 800 420" preserveAspectRatio="xMidYMid slice">
          {[...Array(8)].map((_, row) =>
            [...Array(12)].map((_, col) => (
              <rect
                key={`${row}-${col}`}
                x={col * 70}
                y={row * 55}
                width="60"
                height="45"
                rx="3"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                opacity="0.4"
              />
            ))
          )}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Student Photo (SVG illustration) */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative" style={{ height: '360px', width: '340px' }}>
              {/* Main students SVG */}
              <svg viewBox="0 0 340 360" className="absolute inset-0 w-full h-full">
                {/* Student 1 - boy on left with notebooks */}
                <circle cx="130" cy="95" r="40" fill="#d4a27a"/>
                {/* Hair */}
                <path d="M95 85 Q100 55 130 55 Q160 55 165 85" fill="#2d1810" stroke="#2d1810"/>
                {/* Shirt - blue/teal */}
                <rect x="95" y="130" width="70" height="90" rx="10" fill="#2d6a9f"/>
                {/* Books in hand */}
                <rect x="158" y="140" width="18" height="60" rx="2" fill="#ff9c7e" opacity="0.9"/>
                <rect x="163" y="137" width="18" height="60" rx="2" fill="#ffd54f" opacity="0.9"/>
                {/* Left arm */}
                <path d="M97 160 Q80 185 75 200" stroke="#d4a27a" strokeWidth="16" strokeLinecap="round" fill="none"/>
                {/* Smile */}
                <path d="M120 100 Q130 108 140 100" stroke="#2d1810" strokeWidth="2" fill="none" strokeLinecap="round"/>

                {/* Student 2 - girl on right with folder */}
                <circle cx="230" cy="90" r="38" fill="#c68642"/>
                {/* Hair dark */}
                <path d="M195 80 Q200 50 230 48 Q260 50 265 80" fill="#1a0a05"/>
                <path d="M195 80 Q190 110 200 125" fill="#1a0a05"/>
                <path d="M265 80 Q270 105 260 125" fill="#1a0a05"/>
                {/* Shirt */}
                <rect x="197" y="125" width="66" height="90" rx="10" fill="#2d6a9f" opacity="0.9"/>
                {/* Folder */}
                <rect x="255" y="140" width="50" height="65" rx="3" fill="#ffa726" opacity="0.9"/>
                <rect x="258" y="143" width="44" height="59" rx="2" fill="#ffcc02" opacity="0.7"/>
                {/* Smile */}
                <path d="M218 96 Q230 106 242 96" stroke="#2d1810" strokeWidth="2" fill="none" strokeLinecap="round"/>

                {/* Ground / bottom fill to blend */}
                <rect x="70" y="290" width="230" height="70" fill="rgba(37,52,93,0.5)"/>
              </svg>
            </div>
          </div>

          {/* Right: Text Content */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Overseas Education
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Looking for Quality<br />Abroad Education?
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Fringilla risus luctus mauris auctor purus euismod pretium purus at pretium ligula rutrum viverra tortor sapien sodales quaerat sodales sapien blandit dolores and aliquam.
            </p>

            <p className="text-white font-semibold text-base mb-5">
              350+ Universities in 17 Countries:
            </p>

            {/* Country Flags */}
            <div className="flex items-center gap-6 flex-wrap">
              {countries.map(({ name, flag }) => (
                <div key={name} className="flex flex-col items-center gap-2">
                  {flag}
                  <span className="text-[10px] font-semibold text-gray-300 tracking-wider">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverseasEducation;
