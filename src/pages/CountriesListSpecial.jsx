import React from 'react';
import ImmigrationOpportunities from '../components/ImmigrationOpportunities';
import BannerConsultationCall from '../components/BannerConsultationCall';

const countriesSpecialList = [
  { id: 'canada', name: 'Canada', flag: '🇨🇦', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
  { id: 'australia', name: 'Australia', flag: '🇦🇺', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
  { id: 'singapore', name: 'Singapore', flag: '🇸🇬', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
  { id: 'uk', name: 'United Kingdom', flag: '🇬🇧', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
  { id: 'usa', name: 'United States', flag: '🇺🇸', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
  { id: 'nz', name: 'New Zealand', flag: '🇳🇿', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
];

const CountriesListSpecial = () => {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#25345d] text-white py-4 px-4 text-xs font-semibold">
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 opacity-80">
          <a href="#" className="hover:text-[#ff4d15] transition-colors">[ Home ]</a>
          <span>▸</span>
          <span className="text-gray-300">Countries List</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1
            className="text-3xl font-extrabold text-[#25345d] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Immigration Countries Directory
          </h1>
          <p className="text-gray-500 text-xs max-w-xl mx-auto leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis
            lacinia risus interdum auctor id viverra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {countriesSpecialList.map((country) => (
            <div key={country.id} className="border border-gray-100 p-6 rounded-md bg-white shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{country.flag}</span>
                <h3 className="font-bold text-[#25345d] text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {country.name}
                </h3>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">{country.desc}</p>
              <a href="#" className="text-xs font-bold text-[#ff4d15] hover:text-[#25345d] transition-colors">
                Explore Country Details ▸
              </a>
            </div>
          ))}
        </div>
      </div>

      <ImmigrationOpportunities />
      <BannerConsultationCall />
    </div>
  );
};

export default CountriesListSpecial;
