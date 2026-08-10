import React from 'react';

// Inline SVG flag components
const FlagCA = () => (
  <svg viewBox="0 0 30 20" className="w-9 h-6 rounded-sm shadow border border-white/20">
    <rect width="7.5" height="20" fill="#D52B1E"/>
    <rect x="7.5" width="15" height="20" fill="white"/>
    <rect x="22.5" width="7.5" height="20" fill="#D52B1E"/>
    <path d="M15 5 L16 9 L20 9 L17 11 L18 15 L15 13 L12 15 L13 11 L10 9 L14 9 Z" fill="#D52B1E" transform="scale(0.55) translate(12,3)"/>
  </svg>
);
const FlagAU = () => (
  <svg viewBox="0 0 30 20" className="w-9 h-6 rounded-sm shadow border border-white/20">
    <rect width="30" height="20" fill="#00247D"/>
    <line x1="0" y1="0" x2="15" y2="10" stroke="white" strokeWidth="3.5"/>
    <line x1="15" y1="0" x2="0" y2="10" stroke="white" strokeWidth="3.5"/>
    <line x1="7.5" y1="0" x2="7.5" y2="10" stroke="white" strokeWidth="4"/>
    <line x1="0" y1="5" x2="15" y2="5" stroke="white" strokeWidth="4"/>
    <line x1="0" y1="0" x2="15" y2="10" stroke="#CF142B" strokeWidth="2"/>
    <line x1="15" y1="0" x2="0" y2="10" stroke="#CF142B" strokeWidth="2"/>
    <line x1="7.5" y1="0" x2="7.5" y2="10" stroke="#CF142B" strokeWidth="2.5"/>
    <line x1="0" y1="5" x2="15" y2="5" stroke="#CF142B" strokeWidth="2.5"/>
    <circle cx="22" cy="5" r="1.4" fill="white"/>
    <circle cx="25" cy="13" r="1.4" fill="white"/>
    <circle cx="19" cy="14" r="0.9" fill="white"/>
    <circle cx="27" cy="8" r="0.9" fill="white"/>
    <circle cx="20" cy="9" r="0.9" fill="white"/>
  </svg>
);
const FlagUS = () => (
  <svg viewBox="0 0 30 20" className="w-9 h-6 rounded-sm shadow border border-white/20">
    {[...Array(13)].map((_,i) => (
      <rect key={i} y={i*1.538} width="30" height="1.538" fill={i%2===0?'#B22234':'white'}/>
    ))}
    <rect width="12" height="10" fill="#3C3B6E"/>
    {[...Array(9)].map((_,i) => (
      <circle key={i} cx={1.5+(i%3)*3} cy={1.5+Math.floor(i/3)*2.5} r="0.55" fill="white"/>
    ))}
  </svg>
);
const FlagUK = () => (
  <svg viewBox="0 0 30 20" className="w-9 h-6 rounded-sm shadow border border-white/20">
    <rect width="30" height="20" fill="#012169"/>
    <line x1="0" y1="0" x2="30" y2="20" stroke="white" strokeWidth="4"/>
    <line x1="30" y1="0" x2="0" y2="20" stroke="white" strokeWidth="4"/>
    <line x1="15" y1="0" x2="15" y2="20" stroke="white" strokeWidth="6"/>
    <line x1="0" y1="10" x2="30" y2="10" stroke="white" strokeWidth="6"/>
    <line x1="0" y1="0" x2="30" y2="20" stroke="#C8102E" strokeWidth="2.5"/>
    <line x1="30" y1="0" x2="0" y2="20" stroke="#C8102E" strokeWidth="2.5"/>
    <line x1="15" y1="0" x2="15" y2="20" stroke="#C8102E" strokeWidth="3.5"/>
    <line x1="0" y1="10" x2="30" y2="10" stroke="#C8102E" strokeWidth="3.5"/>
  </svg>
);
const FlagEU = () => (
  <svg viewBox="0 0 30 20" className="w-9 h-6 rounded-sm shadow border border-white/20">
    <rect width="30" height="20" fill="#003399"/>
    {[...Array(12)].map((_,i) => {
      const a = (i*30-90)*(Math.PI/180);
      return <circle key={i} cx={15+5.5*Math.cos(a)} cy={10+5.5*Math.sin(a)} r="1.1" fill="#FFCC00"/>;
    })}
  </svg>
);

const countries = [
  { name: 'CANADA', flag: <FlagCA /> },
  { name: 'AUSTRALIA', flag: <FlagAU /> },
  { name: 'USA', flag: <FlagUS /> },
  { name: 'UK', flag: <FlagUK /> },
  { name: 'EUROPE', flag: <FlagEU /> },
];

const OverseasEducation = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#1b2a58', minHeight: '400px' }}
    >
      {/* Subtle abstract rectangles/grid pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg width="100%" height="100%" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
          {[...Array(8)].map((_,row) =>
            [...Array(14)].map((_,col) => (
              <rect
                key={`${row}-${col}`}
                x={col*90-20}
                y={row*55-10}
                width="78"
                height="44"
                rx="2"
                fill="none"
                stroke="white"
                strokeWidth="0.6"
              />
            ))
          )}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Students SVG illustration */}
          <div className="flex justify-center lg:justify-start">
            <div style={{ width: '340px', height: '340px', position: 'relative' }}>
              <svg viewBox="0 0 340 360" className="w-full h-full">
                {/* Background circle */}
                <circle cx="170" cy="200" r="150" fill="white" opacity="0.04"/>

                {/* Student 1 - left, male with books */}
                <circle cx="125" cy="100" r="42" fill="#d4976a"/>
                <path d="M88 88 Q94 57 125 55 Q156 57 162 88" fill="#2a1a0e"/>
                <rect x="93" y="138" width="64" height="90" rx="10" fill="#2665a0"/>
                {/* Books arm */}
                <rect x="154" y="148" width="16" height="58" rx="2" fill="#e87a5a"/>
                <rect x="158" y="145" width="16" height="58" rx="2" fill="#f5d060"/>
                <path d="M95 165 Q78 188 73 205" stroke="#d4976a" strokeWidth="15" strokeLinecap="round" fill="none"/>
                <path d="M116 105 Q125 113 135 105" stroke="#2a1a0e" strokeWidth="2" fill="none" strokeLinecap="round"/>

                {/* Student 2 - right, female */}
                <circle cx="230" cy="95" r="40" fill="#c68642"/>
                <path d="M193 82 Q198 52 230 50 Q262 52 267 82" fill="#180a05"/>
                <path d="M193 82 Q188 112 197 128" fill="#180a05"/>
                <path d="M267 82 Q272 108 263 128" fill="#180a05"/>
                <rect x="195" y="130" width="68" height="88" rx="10" fill="#2665a0" opacity="0.95"/>
                <rect x="258" y="145" width="48" height="62" rx="3" fill="#f5a020"/>
                <rect x="261" y="148" width="42" height="56" rx="2" fill="#ffd04a" opacity="0.8"/>
                <path d="M218 102 Q230 112 242 102" stroke="#2a1a0e" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Right: Text + Flags */}
          <div>
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-3">
              Overseas Education
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Looking for Quality<br />Abroad Education?
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Fringilla risus luctus mauris auctor purus euismod pretium purus at pretium ligula rutrum viverra tortor sapien sodales quaerat sodales sapien blandit dolores and aliquam.
            </p>
            <p className="text-white font-bold text-sm mb-5">
              350+ Universities in 17 Countries:
            </p>

            {/* Country flags row */}
            <div className="flex items-center gap-6 flex-wrap">
              {countries.map(({ name, flag }) => (
                <div key={name} className="flex flex-col items-center gap-1.5">
                  {flag}
                  <span className="text-[9px] font-semibold text-gray-400 tracking-wider">{name}</span>
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
