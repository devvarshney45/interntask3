import React from 'react';
import BannerConsultationCall from '../components/BannerConsultationCall';
import { GraduationCap, Wrench, Briefcase, Award, Users, Search, HelpCircle, Shield, Plane, Heart, FileText } from 'lucide-react';

const visaTypes = [
  { id: 1, title: 'Education Visa', icon: <GraduationCap size={32} className="text-gray-500" /> },
  { id: 2, title: 'Skilled Worker Visa', icon: <Wrench size={32} className="text-gray-500" /> },
  { id: 3, title: 'Work Permit Visa', icon: <Briefcase size={32} className="text-gray-500" /> },
  { id: 4, title: 'Business Visa', icon: <Briefcase size={32} className="text-gray-500" /> },
  { id: 5, title: 'Investor Visa', icon: <Award size={32} className="text-gray-500" /> },
  { id: 6, title: 'Sponsorship Visa', icon: <Users size={32} className="text-gray-500" /> },
  { id: 7, title: 'PR Visa', icon: <Shield size={32} className="text-gray-500" /> },
  { id: 8, title: 'Migrate Visa', icon: <Plane size={32} className="text-gray-500" /> },
  { id: 9, title: 'Visitor Visa', icon: <Users size={32} className="text-gray-500" /> },
  { id: 10, title: 'Family Visa', icon: <Heart size={32} className="text-gray-500" /> },
  { id: 11, title: 'Tourist Visa', icon: <Search size={32} className="text-gray-500" /> },
  { id: 12, title: 'Immigration Consult', icon: <HelpCircle size={32} className="text-gray-500" /> },
];

const VisaList1 = () => {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visaTypes.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 p-8 rounded-sm text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center space-y-4"
            >
              <div className="p-3 bg-gray-50 rounded-full text-gray-400 group-hover:bg-orange-50 group-hover:text-[#ff4d15] transition-colors">
                {item.icon}
              </div>
              <h3
                className="font-bold text-[#25345d] text-sm leading-snug"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor and lacinia blandit posuere ligula
              </p>
            </div>
          ))}
        </div>
      </div>

      <BannerConsultationCall />
    </div>
  );
};

export default VisaList1;
