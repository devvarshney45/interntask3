import React, { useState } from 'react';
import OverseasEducation from '../components/OverseasEducation';

const partnerLogosList = [
  { id: 1,  name: 'Harvard University',       abbr: 'HU',  country: 'USA' },
  { id: 2,  name: 'University of Toronto',    abbr: 'UT',  country: 'Canada' },
  { id: 3,  name: 'Oxford University',        abbr: 'OU',  country: 'United Kingdom' },
  { id: 4,  name: 'University of Melbourne',  abbr: 'UM',  country: 'Australia' },
  { id: 5,  name: 'MIT',                      abbr: 'MIT', country: 'USA' },
  { id: 6,  name: 'McGill University',        abbr: 'MG',  country: 'Canada' },
  { id: 7,  name: 'Cambridge University',     abbr: 'CU',  country: 'United Kingdom' },
  { id: 8,  name: 'Auckland University',      abbr: 'AU',  country: 'New Zealand' },
  { id: 9,  name: 'Stanford University',      abbr: 'SU',  country: 'USA' },
  { id: 10, name: 'Western University',       abbr: 'WU',  country: 'Canada' },
  { id: 11, name: 'Imperial College London',  abbr: 'ICL', country: 'United Kingdom' },
  { id: 12, name: 'Victoria University',      abbr: 'VU',  country: 'New Zealand' },
  { id: 13, name: 'Columbia University',      abbr: 'CU',  country: 'USA' },
  { id: 14, name: 'UBC Vancouver',            abbr: 'UBC', country: 'Canada' },
  { id: 15, name: 'University of Manchester', abbr: 'UOM', country: 'United Kingdom' },
  { id: 16, name: 'Monash University',        abbr: 'MU',  country: 'Australia' },
  { id: 17, name: 'Yale University',          abbr: 'YU',  country: 'USA' },
  { id: 18, name: 'University of Sydney',     abbr: 'US',  country: 'Australia' },
  { id: 19, name: 'TU Munich',                abbr: 'TUM', country: 'Germany' },
  { id: 20, name: 'Uppsala University',       abbr: 'UU',  country: 'Sweden' },
];

const filters = ['All Countries', 'USA', 'Canada', 'United Kingdom', 'Australia', 'New Zealand', 'Germany', 'Sweden'];

// Unique blue gradient per abbr first letter for variety
const getGradient = (abbr) => {
  const gradients = [
    'from-[#1a73e8] to-[#0d47a1]',
    'from-[#0055b3] to-[#003380]',
    'from-[#1565c0] to-[#003c8f]',
    'from-[#283593] to-[#1a237e]',
    'from-[#1976d2] to-[#0d47a1]',
  ];
  return gradients[abbr.charCodeAt(0) % gradients.length];
};

const PartnersColleges = () => {
  const [activeFilter, setActiveFilter] = useState('All Countries');

  const filtered = activeFilter === 'All Countries'
    ? partnerLogosList
    : partnerLogosList.filter(p => p.country === activeFilter);

  return (
    <div className="bg-[#f0f4fb] min-h-screen">
      {/* Hero Header */}
      <div
        className="relative py-16 px-4 text-white text-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0d1f4c 0%, #1a3a6e 60%, #1a73e8 100%)',
        }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 50%, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-[#93c5fd] text-[10px] font-bold uppercase tracking-[0.3em] block mb-3">
            GLOBAL EDUCATION NETWORK
          </span>
          <h1
            className="text-3xl md:text-4xl font-extrabold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Partner Institutes &amp; Universities
          </h1>
          <p className="text-blue-200 text-sm max-w-xl mx-auto leading-relaxed">
            EduVista is partnered with 100+ leading universities and institutes worldwide, enabling students to access world-class education at top destinations.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-14">

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide border transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-[#1a73e8] text-white border-[#1a73e8] shadow-md shadow-blue-200'
                  : 'bg-white text-[#25345d] border-gray-200 hover:border-[#1a73e8] hover:text-[#1a73e8]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Partner Cards Grid — 4 per row */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-16 text-sm">No partners found for this region.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {filtered.map((logo) => (
              <div
                key={logo.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-blue-50"
              >
                {/* Top Blue Gradient Banner */}
                <div className={`bg-gradient-to-br ${getGradient(logo.abbr)} h-32 flex items-center justify-center relative`}>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
                  {/* Abbreviation circle */}
                  <div className="w-16 h-16 rounded-full bg-white/15 border-2 border-white/40 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span
                      className="text-white font-black text-lg tracking-tight"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {logo.abbr}
                    </span>
                  </div>
                  {/* Country tag top-right */}
                  <span className="absolute top-3 right-3 bg-white/20 text-white text-[9px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/30 tracking-wider">
                    {logo.country}
                  </span>
                </div>

                {/* Card Body */}
                <div className="px-5 py-4">
                  <h3
                    className="font-bold text-[#25345d] text-sm leading-snug mb-1 group-hover:text-[#1a73e8] transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {logo.name}
                  </h3>
                  <p className="text-gray-400 text-[11px] mb-3">Accredited Partner Institution</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-[10px] font-bold text-[#1a73e8] uppercase tracking-widest hover:gap-2 transition-all"
                  >
                    Learn More <span>›</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats strip */}
        <div className="mt-16 bg-white rounded-2xl border border-blue-100 shadow-sm grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 overflow-hidden">
          {[
            { num: '100+', label: 'Partner Universities' },
            { num: '15+', label: 'Countries Covered' },
            { num: '5000+', label: 'Students Placed' },
            { num: '98%', label: 'Success Rate' },
          ].map((stat) => (
            <div key={stat.label} className="py-8 text-center">
              <p
                className="text-3xl font-black text-[#1a73e8] mb-1"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {stat.num}
              </p>
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <OverseasEducation />
    </div>
  );
};

export default PartnersColleges;
