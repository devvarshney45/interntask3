import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';
import FloatingUI from './components/FloatingUI';

// Homepage 1 Sections
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
import ConsultationBanner from './components/ConsultationBanner';
import ContactSection from './components/ContactSection';

// Homepage Pages 2 to 9
import Homepage2 from './pages/Homepage2';
import Homepage3 from './pages/Homepage3';
import Homepage4 from './pages/Homepage4';
import Homepage5 from './pages/Homepage5';
import Homepage6 from './pages/Homepage6';
import Homepage7 from './pages/Homepage7';
import Homepage8 from './pages/Homepage8';
import Homepage9 from './pages/Homepage9';

// Standard Pages
import AboutUs from './pages/AboutUs';
import CoursesList from './pages/CoursesList';
import CourseDetails from './pages/CourseDetails';
import PartnersColleges from './pages/PartnersColleges';
import FaqPage from './pages/FaqPage';

// Special Pages
import CountriesListSpecial from './pages/CountriesListSpecial';
import CountryDetailsSpecial from './pages/CountryDetailsSpecial';
import VisaList1 from './pages/VisaList1';
import VisaList2 from './pages/VisaList2';
import VisaDetailsSpecial from './pages/VisaDetailsSpecial';

// Auxiliary Pages
import BlogListing from './pages/BlogListing';
import SingleBlogPost from './pages/SingleBlogPost';
import ContactStyle1 from './pages/ContactStyle1';
import ContactStyle2 from './pages/ContactStyle2';
import ContactStyle3 from './pages/ContactStyle3';

function App() {
  const [currentPage, setCurrentPage] = useState('home1');

  return (
    <>
      {/* Page Version Switcher Bar */}
      <div className="bg-[#141d3a] text-white text-xs py-1.5 px-4 flex items-center justify-between z-55 relative border-b border-white/10">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between flex-wrap">
          <span className="font-semibold text-gray-300">
            Current View:{' '}
            <span className="text-[#ff4d15] uppercase font-bold">
              {currentPage.startsWith('home')
                ? `Homepage ${currentPage.replace('home', '')}`
                : `Page: ${currentPage.toUpperCase()}`}
            </span>
          </span>
          <div className="flex items-center gap-1 flex-wrap">
            {['home1', 'home2', 'home3', 'home4', 'home5', 'home6', 'home7', 'home8', 'home9'].map((pKey, idx) => (
              <button
                key={pKey}
                onClick={() => setCurrentPage(pKey)}
                className={`px-1.5 py-0.5 rounded text-[9px] font-bold transition-colors ${
                  currentPage === pKey
                    ? 'bg-[#ff4d15] text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                HP {idx + 1}
              </button>
            ))}
            <span className="text-white/20 px-0.5">|</span>
            {['about', 'courses-list', 'course-details', 'partners', 'faqs'].map((pKey) => (
              <button
                key={pKey}
                onClick={() => setCurrentPage(pKey)}
                className={`px-1 py-0.5 rounded text-[8px] font-bold transition-colors uppercase ${
                  currentPage === pKey ? 'bg-[#ff4d15] text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {pKey.replace('-list', '').replace('-details', '')}
              </button>
            ))}
            <span className="text-white/20 px-0.5">|</span>
            {['countries-list', 'country-details', 'visa-list-1', 'visa-list-2', 'visa-details'].map((pKey) => (
              <button
                key={pKey}
                onClick={() => setCurrentPage(pKey)}
                className={`px-1 py-0.5 rounded text-[8px] font-bold transition-colors uppercase ${
                  currentPage === pKey ? 'bg-[#ff4d15] text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {pKey.replace('-list-1', ' 1').replace('-list-2', ' 2').replace('-list', ' List').replace('-details', ' Det')}
              </button>
            ))}
            <span className="text-white/20 px-0.5">|</span>
            {['blog-list', 'blog-post', 'contact-1', 'contact-2', 'contact-3'].map((pKey) => (
              <button
                key={pKey}
                onClick={() => setCurrentPage(pKey)}
                className={`px-1 py-0.5 rounded text-[8px] font-bold transition-colors uppercase ${
                  currentPage === pKey ? 'bg-[#ff4d15] text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {pKey}
              </button>
            ))}
          </div>
        </div>
      </div>

      <FloatingUI />
      <Header onSelectPage={(page) => setCurrentPage(page)} currentPage={currentPage} />

      <main>
        {currentPage === 'home1' && (
          <div>
            <HeroSection />
            <AboutAgency />
            <FindConsultant />
            <EducationServices />
            <ProfessionalAdvisors />
            <VisaProcess />
            <PopularCourses />
            <OverseasEducation />
            <PartnerInstitutions />
            <Testimonials />
            <ConsultationBanner />
            <LatestNews />
            <ContactSection />
          </div>
        )}

        {currentPage === 'home2' && <Homepage2 />}
        {currentPage === 'home3' && <Homepage3 />}
        {currentPage === 'home4' && <Homepage4 />}
        {currentPage === 'home5' && <Homepage5 />}
        {currentPage === 'home6' && <Homepage6 />}
        {currentPage === 'home7' && <Homepage7 />}
        {currentPage === 'home8' && <Homepage8 />}
        {currentPage === 'home9' && <Homepage9 />}

        {/* Standard Pages */}
        {currentPage === 'about' && <AboutUs />}
        {currentPage === 'courses-list' && <CoursesList />}
        {currentPage === 'course-details' && <CourseDetails />}
        {currentPage === 'partners' && <PartnersColleges />}
        {currentPage === 'faqs' && <FaqPage />}

        {/* Special Pages */}
        {currentPage === 'countries-list' && <CountriesListSpecial />}
        {currentPage === 'country-details' && <CountryDetailsSpecial />}
        {currentPage === 'visa-list-1' && <VisaList1 />}
        {currentPage === 'visa-list-2' && <VisaList2 />}
        {currentPage === 'visa-details' && <VisaDetailsSpecial />}

        {/* Auxiliary Pages */}
        {currentPage === 'blog-list' && <BlogListing />}
        {currentPage === 'blog-post' && <SingleBlogPost />}
        {currentPage === 'contact-1' && <ContactStyle1 />}
        {currentPage === 'contact-2' && <ContactStyle2 />}
        {currentPage === 'contact-3' && <ContactStyle3 />}
      </main>

      {/* Footer rendering: HP1, HP4, HP5, HP6, HP7, HP8, HP9 & aux pages get Footer (dark), HP2 & HP3 get Footer2 */}
      {currentPage === 'home2' || currentPage === 'home3' ? <Footer2 /> : <Footer />}
    </>
  );
}

export default App;
