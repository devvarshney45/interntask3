import React from 'react';

// Recreated SVG partner logo emblems exactly matching standard mockup designs (AllTV, Sicmork, Green Grass, GSI, CBC, 100% Organic, Health Brand, etc.)
const LogoAllTV = () => (
  <svg viewBox="0 0 100 40" className="w-24 h-10 opacity-40 hover:opacity-100 transition-opacity">
    <rect width="100" height="40" fill="none" />
    <text x="50" y="26" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="20" fontWeight="800" fill="#25345d" letterSpacing="1">alltv</text>
  </svg>
);
const LogoSicmork = () => (
  <svg viewBox="0 0 100 40" className="w-24 h-10 opacity-40 hover:opacity-100 transition-opacity">
    <text x="50" y="26" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fontWeight="bold" fontStyle="italic" fill="#25345d">Sicmork</text>
  </svg>
);
const LogoGreenGrass = () => (
  <svg viewBox="0 0 100 40" className="w-24 h-10 opacity-40 hover:opacity-100 transition-opacity">
    <text x="50" y="26" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="15" fontWeight="700" fill="#25345d" letterSpacing="2">GREEN GRASS</text>
  </svg>
);
const LogoGSI = () => (
  <svg viewBox="0 0 100 40" className="w-24 h-10 opacity-40 hover:opacity-100 transition-opacity">
    <text x="50" y="26" textAnchor="middle" fontFamily="Impact, Arial Black" fontSize="24" fontWeight="bold" fill="#25345d" letterSpacing="1">GSI</text>
  </svg>
);
const LogoCBC = () => (
  <svg viewBox="0 0 100 40" className="w-24 h-10 opacity-40 hover:opacity-100 transition-opacity">
    <text x="50" y="26" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="900" fill="#25345d" letterSpacing="-1">cbc</text>
  </svg>
);
const LogoOrganic = () => (
  <svg viewBox="0 0 100 40" className="w-24 h-10 opacity-40 hover:opacity-100 transition-opacity">
    <text x="50" y="26" textAnchor="middle" fontFamily="Courier, monospace" fontSize="18" fontWeight="bold" fill="#25345d">organic</text>
  </svg>
);
const LogoHealth = () => (
  <svg viewBox="0 0 100 40" className="w-24 h-10 opacity-40 hover:opacity-100 transition-opacity">
    <circle cx="20" cy="20" r="8" fill="none" stroke="#25345d" strokeWidth="2.5" />
    <text x="60" y="26" textAnchor="middle" fontFamily="Poppins, sans-serif" fontSize="18" fontWeight="700" fill="#25345d">health</text>
  </svg>
);

const partnersList = [
  <LogoAllTV />,
  <LogoSicmork />,
  <LogoGreenGrass />,
  <LogoGSI />,
  <LogoCBC />,
  <LogoOrganic />,
  <LogoHealth />,
  <LogoSicmork />,
];

const PartnerUniversitiesFilter = () => {
  return (
    <section className="py-16 px-4 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-[#ff4d15] text-[11px] font-bold uppercase tracking-[0.2em] block mb-2">
            PARTNERS
          </span>
          <h2
            className="text-3xl font-extrabold text-[#25345d]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Partner Institutions
          </h2>
          <p className="text-gray-400 text-xs max-w-lg mx-auto mt-3 leading-relaxed">
            We partner with leading universities and institutions globally to offer student admissions counseling, visa guidance, and career planning.
          </p>
        </div>

        {/* 2 Rows of Partner Logos exactly matching the mockup */}
        <div className="flex flex-col gap-10 max-w-4xl mx-auto">
          {/* Row 1: 4 logos */}
          <div className="flex flex-wrap items-center justify-around gap-6">
            {partnersList.slice(0, 4).map((logo, i) => (
              <div key={i} className="flex items-center justify-center min-w-[120px]">
                {logo}
              </div>
            ))}
          </div>

          {/* Row 2: 4 logos */}
          <div className="flex flex-wrap items-center justify-around gap-6">
            {partnersList.slice(4, 8).map((logo, i) => (
              <div key={i} className="flex items-center justify-center min-w-[120px]">
                {logo}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnerUniversitiesFilter;
