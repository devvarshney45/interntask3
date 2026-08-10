import React from 'react';
import OverseasEducation from '../components/OverseasEducation';

const partnerLogosList = [
  { id: 1, name: 'AllTV' },
  { id: 2, name: 'Sicmork' },
  { id: 3, name: 'Green Grass' },
  { id: 4, name: 'GSI' },
  { id: 5, name: 'cbc' },
  { id: 6, name: '100% Organic' },
  { id: 7, name: 'Health Brand' },
  { id: 8, name: 'Sicmork' },
  { id: 9, name: 'AllTV' },
  { id: 10, name: 'Sicmork' },
  { id: 11, name: 'Green Grass' },
  { id: 12, name: 'GSI' },
  { id: 13, name: 'cbc' },
  { id: 14, name: '100% Organic' },
  { id: 15, name: 'Health Brand' },
  { id: 16, name: 'Sicmork' },
  { id: 17, name: 'AllTV' },
  { id: 18, name: 'Sicmork' },
  { id: 19, name: 'Green Grass' },
  { id: 20, name: 'GSI' },
];

const PartnersColleges = () => {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#25345d] text-white py-4 px-4 text-xs font-semibold">
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 opacity-80">
          <a href="#" className="hover:text-[#ff4d15] transition-colors">[ Home ]</a>
          <span>▸</span>
          <span className="text-gray-300">Our Partners &amp; Colleges</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2
            className="text-3xl font-bold text-[#25345d] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Partner Institutes &amp; Universities
          </h2>
          <p className="text-gray-500 text-xs max-w-xl mx-auto leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis
            lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa
          </p>
        </div>

        {/* Filter List */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400 font-semibold mb-10 border-b border-gray-100 pb-4">
          <span className="text-[#ff4d15] cursor-pointer">All Countries</span>
          <span>/</span>
          <span className="hover:text-[#ff4d15] cursor-pointer transition-colors">Canada</span>
          <span>/</span>
          <span className="hover:text-[#ff4d15] cursor-pointer transition-colors">Australia</span>
          <span>/</span>
          <span className="hover:text-[#ff4d15] cursor-pointer transition-colors">USA</span>
          <span>/</span>
          <span className="hover:text-[#ff4d15] cursor-pointer transition-colors">United Kingdom</span>
          <span>/</span>
          <span className="hover:text-[#ff4d15] cursor-pointer transition-colors">New Zealand</span>
          <span>/</span>
          <span className="hover:text-[#ff4d15] cursor-pointer transition-colors">China</span>
          <span>/</span>
          <span className="hover:text-[#ff4d15] cursor-pointer transition-colors">South Korea</span>
        </div>

        {/* Grid of 20 Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {partnerLogosList.map((logo, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 p-6 rounded-md shadow-xs hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center group"
            >
              {/* Logo Mock */}
              <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-orange-50 transition-colors">
                <span className="font-bold text-gray-400 text-xs group-hover:text-[#ff4d15]">{logo.name}</span>
              </div>
              <span className="text-gray-700 font-bold text-xs">Enter University</span>
              <span className="text-gray-400 text-[10px]">Name Here</span>
            </div>
          ))}
        </div>
      </div>

      <OverseasEducation />
    </div>
  );
};

export default PartnersColleges;
