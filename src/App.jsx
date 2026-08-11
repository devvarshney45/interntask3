import React, { useState } from 'react';
import Header from './components/Header';
import Footer2 from './components/Footer2';
import FloatingUI from './components/FloatingUI';

// Single Homepage (Homepage 2)
import Homepage2 from './pages/Homepage2';

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
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>

      <FloatingUI />
      <Header onSelectPage={(page) => setCurrentPage(page)} currentPage={currentPage} />

      <main>
        {currentPage === 'home' && <Homepage2 />}

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

      <Footer2 />
    </>
  );
}

export default App;
