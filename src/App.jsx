import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutAgency from './components/AboutAgency';
import FindConsultant from './components/FindConsultant';
import EducationServices from './components/EducationServices';
import ProfessionalAdvisors from './components/ProfessionalAdvisors';
import VisaProcess from './components/VisaProcess';
import PopularCourses from './components/PopularCourses';
import OverseasEducation from './components/OverseasEducation';
import PartnerInstitutions from './components/PartnerInstitutions';
import Testimonials from './components/Testimonials';
import LatestNews from './components/LatestNews';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingUI from './components/FloatingUI';

function App() {
  return (
    <>
      <FloatingUI />
      <Header />
      <main>
        {/* Batch 1 – Hero & Core Sections */}
        <HeroSection />
        <AboutAgency />
        <FindConsultant />
        <EducationServices />
        <ProfessionalAdvisors />

        {/* Batch 2 & 3 – Visa Process, Courses, Banner, Partners, Testimonials, News */}
        <VisaProcess />
        <PopularCourses />
        <OverseasEducation />
        <PartnerInstitutions />
        <Testimonials />
        <LatestNews />

        {/* Contact */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
