import React, { useState } from 'react';

const filterTabs = [
  'All Countries',
  'Canada',
  'Australia',
  'USA',
  'United Kingdom',
  'New Zealand',
  'China',
  'South Korea',
];

const partnerLogos = [
  { id: 1, name: 'AllTV' },
  { id: 2, name: 'Sicmork' },
  { id: 3, name: 'Green Grass' },
  { id: 4, name: 'GSI Construction' },
  { id: 5, name: 'cbc' },
  { id: 6, name: '100% Organic' },
  { id: 7, name: 'Health Brand' },
  { id: 8, name: 'Sicmork' },
  { id: 9, name: 'AllTV' },
  { id: 10, name: 'Sicmork' },
  { id: 11, name: 'Green Grass' },
  { id: 12, name: 'GSI Construction' },
  { id: 13, name: 'cbc' },
  { id: 14, name: '100% Organic' },
  { id: 15, name: 'Health Brand' },
];

const PartnerUniversitiesFilter = () => {
  const [activeTab, setActiveTab] = useState('All Countries');

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#25345d] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Partner Institutes &amp; Universities
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis
            lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa
          </p>
        </div>

        {/* Country Filter Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-14 text-xs font-semibold text-gray-500">
          {filterTabs.map((tab, idx) => (
            <React.Fragment key={tab}>
              {idx > 0 && <span className="text-gray-300">/</span>}
              <button
                onClick={() => setActiveTab(tab)}
                className={`transition-colors py-1 ${
                  activeTab === tab ? 'text-[#ff4d15] font-bold' : 'hover:text-[#25345d]'
                }`}
              >
                {tab}
              </button>
            </React.Fragment>
          ))}
        </div>

        {/* 15 Partner Cards Grid (3 rows x 5 columns) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {partnerLogos.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-sm p-6 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-orange-200 transition-all duration-300 group cursor-pointer"
              style={{ minHeight: '130px' }}
            >
              {/* Logo text / icon */}
              <div className="font-bold text-gray-400 text-lg group-hover:text-[#25345d] transition-colors mb-3">
                {item.name}
              </div>

              {/* Text label underneath */}
              <div className="text-[11px] text-gray-400 font-normal">
                Enter University Name Here
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerUniversitiesFilter;
