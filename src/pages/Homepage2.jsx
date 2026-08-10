import React from 'react';
import HeroSection2 from '../components/HeroSection2';
import AboutAgency from '../components/AboutAgency';
import WorldMapFinder from '../components/WorldMapFinder';
import CounterStats from '../components/CounterStats';
import VisaProcess from '../components/VisaProcess';
import ImmigrationOpportunities from '../components/ImmigrationOpportunities';
import OverseasEducation from '../components/OverseasEducation';
import PartnerUniversitiesFilter from '../components/PartnerUniversitiesFilter';
import Testimonials from '../components/Testimonials';
import LatestNews from '../components/LatestNews';
import OnlineConsultationForm from '../components/OnlineConsultationForm';

const Homepage2 = () => {
  return (
    <div>
      {/* 1. Hero Banner + 6 Floating Feature Cards */}
      <HeroSection2 />

      {/* 2. About Agency (Immigrants focus) */}
      <AboutAgency />

      {/* 3. World Map Consultant Finder */}
      <WorldMapFinder />

      {/* 4. Counter Stats Banner (650+ Happy Students, etc.) */}
      <CounterStats />

      {/* 5. 3-Tab Visa Process */}
      <VisaProcess />

      {/* 6. 7 Country Flag Cards (Canada, Australia, Singapore, UK, USA, NZ, China) */}
      <ImmigrationOpportunities />

      {/* 7. Overseas Education Banner */}
      <OverseasEducation />

      {/* 8. Partner Institutes & Universities with Country Filters */}
      <PartnerUniversitiesFilter />

      {/* 9. Testimonials ("What Our Clients Say") */}
      <Testimonials />

      {/* 10. Latest News */}
      <LatestNews />

      {/* 11. Free Online Consultation Banner + Form (replaces ContactSection for HP2) */}
      <OnlineConsultationForm />
    </div>
  );
};

export default Homepage2;
