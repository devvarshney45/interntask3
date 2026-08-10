import React from 'react';
import HeroSection4 from '../components/HeroSection4';
import WorldMapFinder from '../components/WorldMapFinder';
import VisaProcess from '../components/VisaProcess';
import CounterStats4 from '../components/CounterStats4';
import ProfessionalAdvisors from '../components/ProfessionalAdvisors';
import ImmigrationLandmarks from '../components/ImmigrationLandmarks';
import FaqSection from '../components/FaqSection';
import OnlineConsultationForm from '../components/OnlineConsultationForm';
import PartnerInstitutions from '../components/PartnerInstitutions';
import Testimonials from '../components/Testimonials';
import LatestNews from '../components/LatestNews';
import BannerConsultationCall from '../components/BannerConsultationCall';

const Homepage4 = () => {
  return (
    <div>
      {/* 1. Hero Section 4 + 4 Feature Cards */}
      <HeroSection4 />

      {/* 2. World Map Consultant Finder */}
      <WorldMapFinder />

      {/* 3. 3-Tab Visa Process */}
      <VisaProcess />

      {/* 4. USA Flag Theme Counter Stats (360+, 58, 26, 427) */}
      <CounterStats4 />

      {/* 5. Professional Advisors ("Get guaranteed success with our advisors") */}
      <ProfessionalAdvisors />

      {/* 6. Immigration Opportunities (4 Landmark Photo Cards) */}
      <ImmigrationLandmarks />

      {/* 7. Accordion FAQ Section ("Have Questions? Look Here") */}
      <FaqSection />

      {/* 8. Free Online Consultation Banner & Form */}
      <OnlineConsultationForm />

      {/* 9. Partner Institutes & Universities */}
      <PartnerInstitutions />

      {/* 10. Testimonials ("Our Success Stories...") */}
      <Testimonials />

      {/* 11. Latest News ("What You Can Read Now") */}
      <LatestNews />

      {/* 12. Consultations Split Banner Call to Action */}
      <BannerConsultationCall />
    </div>
  );
};

export default Homepage4;
