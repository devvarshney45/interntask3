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
      style={{ background: '#1b2a58', minHeight: '420px' }}
    >
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg width="100%" height="100%" viewBox="0 0 1200 420" preserveAspectRatio="xMidYMid slice">
          {[...Array(8)].map((_,row) =>
            [...Array(14)].map((_,col) => (
              <rect
                key={`${row}-${col}`}
                x={col*90-20}
                y={row*58-10}
                width="78"
                height="46"
                rx="2"
                fill="none"
                stroke="white"
                strokeWidth="0.6"
              />
            ))
          )}
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-8 py-10 lg:py-0" style={{ minHeight: '420px', display: 'flex', alignItems: 'center' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:items-end w-full">

          {/* Left: down.png — positioned rising from bottom, matching mockup */}
          <div className="hidden lg:flex relative justify-center items-end h-[420px]">
            <img
              src="/assets/down.png"
              alt="Students"
              style={{
                maxHeight: '400px',
                width: 'auto',
                objectFit: 'contain',
                objectPosition: 'bottom',
                display: 'block',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                filter: 'drop-shadow(0 0 30px rgba(0,0,0,0.3))',
              }}
            />
          </div>

          {/* Right: Text + Flags — vertically centered */}
          <div className="py-6 lg:py-8">
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '11px',
                fontWeight: '600',
                color: '#aab8d4',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '14px',
              }}
            >
              Overseas Education
            </p>
            <h2
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                fontWeight: '700',
                color: '#ffffff',
                lineHeight: '1.3',
                marginBottom: '18px',
              }}
            >
              Looking for Quality<br />Abroad Education?
            </h2>
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '13.5px',
                color: '#8a9ec4',
                lineHeight: '1.75',
                marginBottom: '24px',
                maxWidth: '420px',
              }}
            >
              Fringilla risus luctus mauris auctor purus euismod pretium purus at pretium ligula rutrum viverra tortor sapien sodales quaerat sodales sapien blandit dolores and aliquam.
            </p>
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '700',
                fontSize: '14px',
                color: '#ffffff',
                marginBottom: '18px',
              }}
            >
              350+ Universities in 17 Countries:
            </p>

            {/* Country flags row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
              {countries.map(({ name, flag }) => (
                <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                  {flag}
                  <span
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '9px',
                      fontWeight: '600',
                      color: '#8a9ec4',
                      letterSpacing: '0.12em',
                    }}
                  >
                    {name}
                  </span>
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
