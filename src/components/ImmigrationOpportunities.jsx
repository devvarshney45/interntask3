import React from 'react';

// Country flag cards data with gradient flags & high-res SVG motifs
const countriesData = [
  {
    name: 'CANADA',
    bg: 'linear-gradient(135deg, #e52d27 0%, #b31217 100%)',
    motif: (
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
        <path d="M50 15 L56 35 L75 35 L60 48 L66 68 L50 55 L34 68 L40 48 L25 35 L44 35 Z" fill="white" />
      </svg>
    ),
  },
  {
    name: 'AUSTRALIA',
    bg: 'linear-gradient(135deg, #00247d 0%, #001240 100%)',
    motif: (
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
        <circle cx="75" cy="30" r="6" fill="white" />
        <circle cx="75" cy="70" r="6" fill="white" />
        <circle cx="45" cy="75" r="4" fill="white" />
        <circle cx="85" cy="50" r="5" fill="white" />
      </svg>
    ),
  },
  {
    name: 'SINGAPORE',
    bg: 'linear-gradient(135deg, #ee2524 0%, #a01010 100%)',
    motif: (
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
        <path d="M40 25 A 25 25 0 0 0 40 75 A 30 30 0 0 1 40 25 Z" fill="white" />
        <circle cx="60" cy="35" r="3" fill="white" />
        <circle cx="70" cy="45" r="3" fill="white" />
        <circle cx="65" cy="60" r="3" fill="white" />
      </svg>
    ),
  },
  {
    name: 'UNITED KINGDOM',
    bg: 'linear-gradient(135deg, #012169 0%, #c8102e 100%)',
    motif: (
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
        <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="12" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="white" strokeWidth="12" />
        <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="18" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="18" />
      </svg>
    ),
  },
  {
    name: 'USA',
    bg: 'linear-gradient(135deg, #3c3b6e 0%, #b22234 100%)',
    motif: (
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
        {[...Array(9)].map((_, i) => (
          <circle key={i} cx={25 + (i % 3) * 25} cy={25 + Math.floor(i / 3) * 25} r="6" fill="white" />
        ))}
      </svg>
    ),
  },
  {
    name: 'NEW ZEALAND',
    bg: 'linear-gradient(135deg, #00247d 0%, #cc142b 100%)',
    motif: (
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
        <circle cx="70" cy="30" r="5" fill="#cc142b" stroke="white" strokeWidth="2" />
        <circle cx="70" cy="70" r="5" fill="#cc142b" stroke="white" strokeWidth="2" />
        <circle cx="45" cy="50" r="5" fill="#cc142b" stroke="white" strokeWidth="2" />
        <circle cx="85" cy="50" r="4" fill="#cc142b" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'CHINA',
    bg: 'linear-gradient(135deg, #de2910 0%, #ffde00 100%)',
    motif: (
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
        <polygon points="30,20 34,34 48,34 37,42 41,56 30,47 19,56 23,42 12,34 26,34" fill="#ffde00" />
      </svg>
    ),
  },
];

const ImmigrationOpportunities = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#25345d] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Immigration Opportunities
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis
            lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa
          </p>
        </div>

        {/* 7 Cards Grid (4 in top row, 3 in bottom row centered) */}
        <div className="space-y-6">
          {/* Top row - 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {countriesData.slice(0, 4).map((country) => (
              <div
                key={country.name}
                className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ height: '220px', background: country.bg }}
              >
                {/* Waving flag motif overlay */}
                <div className="absolute inset-0 p-4">{country.motif}</div>

                {/* Dark gradient overlay for typography readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Country Name at bottom */}
                <div className="absolute bottom-4 left-0 right-0 text-center z-10">
                  <span
                    className="text-white font-bold text-sm tracking-wider uppercase drop-shadow-md group-hover:text-[#ff9c7e] transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {country.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row - 3 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {countriesData.slice(4, 7).map((country) => (
              <div
                key={country.name}
                className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ height: '220px', background: country.bg }}
              >
                {/* Waving flag motif overlay */}
                <div className="absolute inset-0 p-4">{country.motif}</div>

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Country Name */}
                <div className="absolute bottom-4 left-0 right-0 text-center z-10">
                  <span
                    className="text-white font-bold text-sm tracking-wider uppercase drop-shadow-md group-hover:text-[#ff9c7e] transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {country.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmigrationOpportunities;
