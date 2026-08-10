import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const WorldMapVector = ({ activeCountry, setActiveCountry }) => {
  return (
    <div className="relative w-full max-w-lg">
      <svg viewBox="0 0 1000 500" className="w-full h-auto drop-shadow-sm">
        {/* World Landmass Silhouettes - Light gray base */}
        <path
          d="M150 100 L300 80 L350 150 L280 250 L180 280 L120 200 Z"
          fill="#d1d5db"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M220 290 L320 290 L360 380 L280 470 L220 400 Z"
          fill="#d1d5db"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M450 80 L620 80 L650 220 L580 320 L440 250 L420 150 Z"
          fill="#d1d5db"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M620 90 L920 80 L950 250 L850 350 L680 280 Z"
          fill="#d1d5db"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M720 350 L880 350 L890 440 L740 450 Z"
          fill="#d1d5db"
          stroke="white"
          strokeWidth="1.5"
        />

        {/* Highlighted Destination Countries in Blue (#0070ba / #0284c7) */}
        {/* USA / Canada (North America) */}
        <path
          d="M150 90 L330 75 L340 180 L220 250 L140 180 Z"
          fill={activeCountry === 'usa' || activeCountry === 'canada' ? '#ff4d15' : '#0070ba'}
          stroke="white"
          strokeWidth="2"
          className="cursor-pointer transition-colors duration-300"
          onMouseEnter={() => setActiveCountry('canada')}
          onMouseLeave={() => setActiveCountry(null)}
        />

        {/* Brazil / South America Portion */}
        <path
          d="M260 320 L340 320 L350 410 L270 440 Z"
          fill={activeCountry === 'brazil' ? '#ff4d15' : '#0070ba'}
          stroke="white"
          strokeWidth="2"
          className="cursor-pointer transition-colors duration-300"
        />

        {/* UK & Western Europe */}
        <path
          d="M460 100 L560 90 L580 180 L480 200 Z"
          fill={activeCountry === 'uk' ? '#ff4d15' : '#0070ba'}
          stroke="white"
          strokeWidth="2"
          className="cursor-pointer transition-colors duration-300"
          onMouseEnter={() => setActiveCountry('uk')}
          onMouseLeave={() => setActiveCountry(null)}
        />

        {/* India & South Asia */}
        <path
          d="M680 180 L760 170 L770 270 L690 270 Z"
          fill={activeCountry === 'india' ? '#ff4d15' : '#0070ba'}
          stroke="white"
          strokeWidth="2"
          className="cursor-pointer transition-colors duration-300"
        />

        {/* China / East Asia */}
        <path
          d="M720 120 L860 110 L880 220 L740 210 Z"
          fill={activeCountry === 'china' || activeCountry === 'korea' ? '#ff4d15' : '#0070ba'}
          stroke="white"
          strokeWidth="2"
          className="cursor-pointer transition-colors duration-300"
          onMouseEnter={() => setActiveCountry('china')}
          onMouseLeave={() => setActiveCountry(null)}
        />

        {/* Australia & NZ */}
        <path
          d="M740 360 L870 360 L880 430 L750 435 Z"
          fill={activeCountry === 'australia' || activeCountry === 'nz' ? '#ff4d15' : '#0070ba'}
          stroke="white"
          strokeWidth="2"
          className="cursor-pointer transition-colors duration-300"
          onMouseEnter={() => setActiveCountry('australia')}
          onMouseLeave={() => setActiveCountry(null)}
        />

        {/* NZ Islands */}
        <path
          d="M895 410 L920 410 L925 450 L895 450 Z"
          fill={activeCountry === 'nz' ? '#ff4d15' : '#0070ba'}
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

const WorldMapFinder = () => {
  const [activeCountry, setActiveCountry] = useState(null);

  const countries = ['Canada', 'Australia', 'United Kingdom', 'USA', 'New Zealand', 'South Korea'];
  const practiceAreas = [
    'Student Visa',
    'Skilled Work Visa',
    'Business visa',
    'Spouse/Family Visa',
    'Tourist & Visitor Visa',
    'Immigration Consult',
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2
            className="text-3xl font-bold text-[#25345d] mb-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Find a consultant by:
          </h2>
          <p className="text-gray-500 text-sm max-w-lg leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis lacinia
            risus interdum auctor id viverra dolor iaculis luctus placerat and massa.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Country Column */}
          <div>
            <h3
              className="font-bold text-[#25345d] text-base mb-5 pb-2 border-b border-gray-100"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Country:
            </h3>
            <ul className="space-y-3">
              {countries.map((c) => (
                <li key={c}>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-[#ff4d15] transition-colors duration-200 hover:pl-1 block"
                  >
                    {c}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#" className="flex items-center gap-1 mt-5 text-sm font-semibold text-[#25345d] hover:text-[#ff4d15] transition-colors">
              View All <ChevronRight size={14} className="text-[#ff4d15]" />
            </a>
          </div>

          {/* Practice Area Column */}
          <div>
            <h3
              className="font-bold text-[#25345d] text-base mb-5 pb-2 border-b border-gray-100"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Pratice Area:
            </h3>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-[#ff4d15] transition-colors duration-200 hover:pl-1 block"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#" className="flex items-center gap-1 mt-5 text-sm font-semibold text-[#25345d] hover:text-[#ff4d15] transition-colors">
              View All <ChevronRight size={14} className="text-[#ff4d15]" />
            </a>
          </div>

          {/* World Map Vector Graphic */}
          <div className="flex justify-center items-center pt-2">
            <WorldMapVector activeCountry={activeCountry} setActiveCountry={setActiveCountry} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMapFinder;
