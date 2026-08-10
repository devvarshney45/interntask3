import React from 'react';
import HeroSection5 from '../components/HeroSection5';
import AboutAgency from '../components/AboutAgency';
import ImmiExServices from '../components/ImmiExServices';
import ImmigrationOpportunities from '../components/ImmigrationOpportunities';
import BannerFlyAbroad from '../components/BannerFlyAbroad';
import VisaProcess from '../components/VisaProcess';
import Testimonials from '../components/Testimonials';
import AdvisorExperienceBanner from '../components/AdvisorExperienceBanner';
import WhyChooseUs from '../components/WhyChooseUs';
import PartnerInstitutions from '../components/PartnerInstitutions';
import FaqSection from '../components/FaqSection';
import LatestNews from '../components/LatestNews';

const Homepage5 = () => {
  return (
    <div>
      {/* 1. Hero Section 5 + Quick Filter Search Bar */}
      <HeroSection5 />

      {/* 2. About Agency (Video Modal + Couple photo) */}
      <AboutAgency />

      {/* 3. ImmiEx Immigration Services (6 Red-Icon Cards Grid) */}
      <ImmiExServices />

      {/* 4. Immigration Opportunities (7 Country Flag Cards Grid) */}
      <ImmigrationOpportunities />

      {/* 5. Banner: Give Wings To Your Dreams, Fly To Your Dream Abroad */}
      <BannerFlyAbroad />

      {/* 6. 3-Tab Visa Process */}
      <VisaProcess />

      {/* 7. Testimonials ("Our Success Stories...") */}
      <Testimonials />

      {/* 8. Advisor Experience Banner (Since 1999) */}
      <AdvisorExperienceBanner />

      {/* 9. Why Choose ImmiEx (4 White Floating Stat Cards) */}
      <WhyChooseUs />

      {/* 10. Partner Institutes & Universities Logos */}
      <PartnerInstitutions />

      {/* 11. Accordion FAQ Section ("Have Questions? Look Here") */}
      <FaqSection />

      {/* 12. Latest News ("Our Stories & Latest News") */}
      <LatestNews />
    </div>
  );
};

export default Homepage5;
