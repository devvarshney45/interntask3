import React from 'react';
import ImmigrationOpportunities from '../components/ImmigrationOpportunities';
import BannerConsultationCall from '../components/BannerConsultationCall';

const countriesSpecialList = [
  { id: 'usa', name: 'USA', flag: '🇺🇸', desc: 'Leading global study destination with world-renowned universities and innovative programs.' },
  { id: 'canada', name: 'Canada', flag: '🇨🇦', desc: 'High-quality education, welcoming environment, and post-graduation work opportunities.' },
  { id: 'uk', name: 'United Kingdom', flag: '🇬🇧', desc: 'Historic academic institutions offering prestigious degrees and rich cultural exposure.' },
  { id: 'australia', name: 'Australia', flag: '🇦🇺', desc: 'World-class universities, excellent lifestyle, and diverse career prospects.' },
  { id: 'new-zealand', name: 'New Zealand', flag: '🇳🇿', desc: 'Safe environment, excellent research facilities, and globally recognized qualifications.' },
  { id: 'germany', name: 'Germany', flag: '🇩🇪', desc: 'Tuition-free options, state-of-the-art engineering, and strong industrial connections.' },
  { id: 'sweden', name: 'Sweden', flag: '🇸🇪', desc: 'Focus on innovation, critical thinking, and sustainable education paths.' },
  { id: 'denmark', name: 'Denmark', flag: '🇩🇰', desc: 'Student-centered learning, safe environments, and highly ranked institutions.' },
  { id: 'netherlands', name: 'Netherlands', flag: '🇳🇱', desc: 'Pioneer in English-taught programs and diverse international student culture.' },
  { id: 'ireland', name: 'Ireland', flag: '🇮🇪', desc: 'European tech hub offering fantastic graduate employment programs and friendly community.' },
  { id: 'malaysia', name: 'Malaysia', flag: '🇲🇾', desc: 'Affordable quality education and partner campus pathways in Southeast Asia.' },
  { id: 'hungary', name: 'Hungary', flag: '🇭🇺', desc: 'Rich cultural history, affordable living cost, and internationally recognized medical programs.' },
  { id: 'finland', name: 'Finland', flag: '🇫🇮', desc: 'World-class primary and higher education models emphasizing well-being and research.' },
  { id: 'italy', name: 'Italy', flag: '🇮🇹', desc: 'Historic arts, design, fashion, architecture, and globally recognized business schools.' },
  { id: 'france', name: 'France', flag: '🇫🇷', desc: 'Prestigious grandes écoles, rich heritage, and excellent business and culinary education.' },
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
