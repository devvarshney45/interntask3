import React from 'react';
import CounterStats from '../components/CounterStats';
import WorldMapFinder from '../components/WorldMapFinder';
import BannerConsultationCall from '../components/BannerConsultationCall';

const visaList2Items = [
  { id: 1, title: 'Education Visa', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
  { id: 2, title: 'Business Immigration', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
  { id: 3, title: 'Skilled Immigration', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
  { id: 4, title: 'Spouse/Family Visas', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
  { id: 5, title: 'Tourist & Visitor Visas', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
  { id: 6, title: 'Resident Return Visas', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
  { id: 7, title: 'Working Holiday Visas', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
  { id: 8, title: 'Sponsored Business Visas', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
  { id: 9, title: 'Language Courses', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
];

const VisaList2 = () => {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#25345d] text-white py-4 px-4 text-xs font-semibold">
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 opacity-80">
          <a href="#" className="hover:text-[#ff4d15] transition-colors">[ Home ]</a>
          <span>▸</span>
          <span className="text-gray-300">Visa Categories</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2
            className="text-3xl font-bold text-[#25345d] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            ImmiEx Visa Categories
          </h2>
          <p className="text-gray-500 text-xs max-w-xl mx-auto leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis
            lacinia risus interdum auctor id viverra dolor iaculis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visaList2Items.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 p-6 rounded-md shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h3
                  className="font-bold text-[#25345d] text-sm"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
              <a
                href="#"
                className="text-[10px] font-bold text-gray-400 hover:text-[#ff4d15] transition-colors uppercase tracking-wider block mt-4"
              >
                Read More ▸
              </a>
            </div>
          ))}
        </div>
      </div>

      <CounterStats />
      <WorldMapFinder />
      <BannerConsultationCall />
    </div>
  );
};

export default VisaList2;
