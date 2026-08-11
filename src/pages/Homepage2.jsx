import React from 'react';
import HeroSection2 from '../components/HeroSection2';
import AboutAgency from '../components/AboutAgency';
import FounderSection from '../components/FounderSection';
import WorldMapFinder from '../components/WorldMapFinder';
import PopularCourses from '../components/PopularCourses';
import OverseasEducation from '../components/OverseasEducation';
import PartnerUniversitiesFilter from '../components/PartnerUniversitiesFilter';
import Testimonials from '../components/Testimonials';
import VisaProcess from '../components/VisaProcess';
import LatestNews from '../components/LatestNews';
import OnlineConsultationForm from '../components/OnlineConsultationForm';

const Homepage2 = () => {
  return (
    <div>
      {/* 1. Hero Banner + 3 Bottom Feature Cards */}
      <HeroSection2 />

      {/* 2. About Agency - 3 overlapping images + text */}
      <AboutAgency />

      {/* 3. Meet Our Founder - Saswati Rakshit */}
      <FounderSection />

      {/* 4. World Map / Find a Consultant */}
      <WorldMapFinder />

      {/* 5. Our Most Popular Courses - Infinite Auto-Scroll Carousel */}
      <PopularCourses />

      {/* 6. Overseas Education Banner */}
      <OverseasEducation />

      {/* 7. Partner Institutes & Universities */}
      <PartnerUniversitiesFilter />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Visa / Working Process (after Testimonials) */}
      <VisaProcess />

      {/* 10. Latest News */}
      <LatestNews />

      {/* 10. Online Consultation Form */}
      <OnlineConsultationForm />
    </div>
  );
};

export default Homepage2;
