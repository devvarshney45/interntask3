import React from 'react';
import ImmigrationLandmarks from '../components/ImmigrationLandmarks';
import BannerConsultationCall from '../components/BannerConsultationCall';

const CountryDetailsSpecial = () => {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#25345d] text-white py-4 px-4 text-xs font-semibold">
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 opacity-80">
          <a href="#" className="hover:text-[#ff4d15] transition-colors">[ Home ]</a>
          <span>▸</span>
          <span className="text-gray-300">Country Details</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column Content */}
          <div className="lg:col-span-8 space-y-6 text-xs text-gray-500 leading-relaxed">
            {/* Flag Banner */}
            <div className="relative h-48 rounded-md overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-950 p-8 text-white flex items-center justify-between shadow-lg">
              <div className="space-y-1 z-10">
                <span className="text-2xl font-black block tracking-wide">AUSTRALIA</span>
                <span className="text-[10px] text-gray-300 uppercase tracking-widest font-semibold block">Great Destination to Study and Live</span>
              </div>
              <span className="text-6xl opacity-90 z-10">🇦🇺</span>
            </div>

            <h1
              className="text-2xl md:text-3xl font-extrabold text-[#25345d]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Study. Work. Live in Australia
            </h1>

            <p>
              Aliquam nullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna tempor sodales sapien. Semper lacus cursus porta, feugiat primis ligula risus auctor and rhoncus in ultrce ligula purus ipsum primis in cubilia.
            </p>

            {/* Quick Country Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gray-50 p-5 rounded-md border border-gray-100 font-semibold text-gray-700">
              <div className="text-center p-2">
                <span className="text-[10px] text-gray-400 block">Capital</span>
                <span className="text-xs text-[#25345d] font-bold">Canberra</span>
              </div>
              <div className="text-center p-2 border-l border-gray-200">
                <span className="text-[10px] text-gray-400 block">Population</span>
                <span className="text-xs text-[#25345d] font-bold">25.4 M</span>
              </div>
              <div className="text-center p-2 border-l border-gray-200">
                <span className="text-[10px] text-gray-400 block">Currency</span>
                <span className="text-xs text-[#25345d] font-bold">AUD</span>
              </div>
              <div className="text-center p-2 border-l border-gray-200">
                <span className="text-[10px] text-gray-400 block">Language</span>
                <span className="text-xs text-[#25345d] font-bold">English</span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold text-[#25345d]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Why Study In Australia?
              </h3>
              <p>
                Semper lacus cursus porta, feugiat primis ligula risus auctor and rhoncus in ultrce ligula purus ipsum primis in cubilia. Processing times vary depending on the country and visa sub-class chosen.
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-gray-50 p-6 rounded border border-gray-100 space-y-4">
              <h3 className="text-xs font-bold text-[#25345d] uppercase tracking-wider">Visa Categories</h3>
              <ul className="space-y-2 text-xs text-gray-600 font-medium">
                <li className="hover:text-[#ff4d15] cursor-pointer">Study in Australia</li>
                <li className="hover:text-[#ff4d15] cursor-pointer">Skilled Immigration</li>
                <li className="hover:text-[#ff4d15] cursor-pointer">Work Permits</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ImmigrationLandmarks />
      <BannerConsultationCall />
    </div>
  );
};

export default CountryDetailsSpecial;
