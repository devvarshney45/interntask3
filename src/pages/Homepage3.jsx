import React from 'react';
import HeroSection3 from '../components/HeroSection3';
import ImmiExServices from '../components/ImmiExServices';
import AboutAgency from '../components/AboutAgency';
import AdvisorExperienceBanner from '../components/AdvisorExperienceBanner';
import WhyChooseUs from '../components/WhyChooseUs';
import VisaProcess from '../components/VisaProcess';
import ImmigrationOpportunities from '../components/ImmigrationOpportunities';
import PartnerUniversitiesFilter from '../components/PartnerUniversitiesFilter';
import BannerConsultationCall from '../components/BannerConsultationCall';
import FaqSection from '../components/FaqSection';
import Testimonials from '../components/Testimonials';
import LatestNews from '../components/LatestNews';

const Homepage3 = () => {
  return (
    <div>
      {/* 1. Hero Section 3 with embedded Form Card */}
      <HeroSection3 />

      {/* 2. 6 Services Grid with Red Icons */}
      <ImmiExServices />

      {/* 3. About Agency (Video Modal + Couple photo) */}
      <AboutAgency />

      {/* 4. Advisor Experience Banner (Since 1999) */}
      <AdvisorExperienceBanner />

      {/* 5. Why Choose ImmiEx (4 White Floating Stat Cards) */}
      <WhyChooseUs />

      {/* 6. 3-Tab Visa Process */}
      <VisaProcess />

      {/* 7. Immigration Opportunities (Country Flag Cards) */}
      <ImmigrationOpportunities />

      {/* 8. Partner Institutes & Universities Filter */}
      <PartnerUniversitiesFilter />

      {/* 9. Dark Blue Split Banner Call to Action */}
      <BannerConsultationCall />

      {/* 10. Accordion FAQ Section ("Have Questions? Look Here") */}
      <FaqSection />

      {/* 11. Testimonials ("What Our Clients Say") */}
      <Testimonials />

      {/* 12. Latest News */}
      <LatestNews />
    </div>
  );
};

export default Homepage3;
