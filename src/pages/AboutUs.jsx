import React from 'react';
import AboutAgency from '../components/AboutAgency';
import ImmiExServices from '../components/ImmiExServices';
import FindConsultant from '../components/FindConsultant';
import CounterStats from '../components/CounterStats';
import VisaProcess from '../components/VisaProcess';
import Testimonials from '../components/Testimonials';
import PartnerInstitutions from '../components/PartnerInstitutions';
import BannerConsultationCall from '../components/BannerConsultationCall';

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#25345d] text-white py-4 px-4 text-xs font-semibold">
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 opacity-80">
          <a href="#" className="hover:text-[#ff4d15] transition-colors">[ Home ]</a>
          <span>▸</span>
          <span className="text-gray-300">About Us</span>
        </div>
      </div>

      <AboutAgency />
      <ImmiExServices />
      <FindConsultant />
      <CounterStats />
      <VisaProcess />
      <Testimonials />
      <PartnerInstitutions />
      <BannerConsultationCall />
    </div>
  );
};

export default AboutUs;
