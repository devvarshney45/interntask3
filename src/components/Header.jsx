import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, ChevronDown, Menu, X } from 'lucide-react';

const Header = ({ onSelectPage, currentPage }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const homePages = [
    'Homepage-1','Homepage-2','Homepage-3','Homepage-4','Homepage-5',
    'Homepage-6','Homepage-7','Homepage-8','Homepage-9',
  ];

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#25345d] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-1.5">
            <MapPin size={12} className="text-gray-300" />
            <span className="text-gray-200 text-[11px]">236, Jodhpur Gardens, Flat No. G2, Kolkata - 700045</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Phone size={11} className="text-gray-300" />
              <span className="text-gray-200 text-[11px]">+91 6282002268, +91 8282002258</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail size={11} className="text-[#ff4d15]" />
              <a href="mailto:eduvasta50@gmail.com" className="text-[#ff9c7e] text-[11px] hover:text-[#ff4d15] transition-colors">
                eduvasta50@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`bg-white border-b border-gray-100 transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <circle cx="20" cy="20" r="18" fill="none" stroke="#ff4d15" strokeWidth="2.5" opacity="0.15"/>
                <path d="M20 4 A16 16 0 0 1 36 20" stroke="#ff4d15" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M20 4 A16 16 0 0 0 4 20" stroke="#b0c4e8" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M4 20 A16 16 0 0 0 20 36" stroke="#ff4d15" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M20 36 A16 16 0 0 0 36 20" stroke="#b0c4e8" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <line x1="20" y1="4" x2="20" y2="36" stroke="#25345d" strokeWidth="1.5" opacity="0.5"/>
                <line x1="4" y1="20" x2="36" y2="20" stroke="#25345d" strokeWidth="1.5" opacity="0.5"/>
                <ellipse cx="20" cy="20" rx="8" ry="16" stroke="#25345d" strokeWidth="1" fill="none" opacity="0.4"/>
              </svg>
            </div>
            <div>
              <div className="font-bold text-lg text-[#25345d] leading-none tracking-tight group-hover:text-[#ff4d15] transition-colors">
                Edu<span className="text-[#ff4d15]">Vista</span>
              </div>
              <div className="text-[8px] text-gray-400 tracking-wider uppercase font-semibold mt-0.5">
                International
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* HOME */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('HOME')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-0.5 px-3 py-2 text-[13px] font-semibold transition-colors duration-200 tracking-wide ${currentPage !== 'home1' ? 'text-[#ff4d15]' : 'text-[#25345d] hover:text-[#ff4d15]'}`}>
                HOME
                {currentPage !== 'home1' && (
                  <span className="text-[9px] font-bold ml-1 text-[#ff4d15] opacity-75">
                    {currentPage.replace('home', '')}
                  </span>
                )}
                <ChevronDown size={12} className={`transition-transform duration-200 ${activeDropdown === 'HOME' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'HOME' && (
                <div className="absolute top-full left-0 mt-0 min-w-[180px] bg-white shadow-xl border border-gray-100 z-50 py-1">
                  {homePages.map((sub, index) => {
                    const pageKey = `home${index + 1}`;
                    const isActive = currentPage === pageKey;
                    return (
                      <a
                        key={sub}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (onSelectPage) onSelectPage(pageKey);
                          setActiveDropdown(null);
                        }}
                        className={`flex items-center justify-between px-5 py-2 text-[13px] transition-colors border-b border-gray-50 last:border-b-0 ${
                          isActive
                            ? 'bg-orange-50 text-[#ff4d15] font-semibold'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#ff4d15]'
                        }`}
                      >
                        <span>{sub}</span>
                        {isActive && (
                          <span className="text-[#ff4d15] text-xs font-bold ml-2">✓</span>
                        )}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* PAGES (Image 2 mega menu) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('PAGES')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-0.5 px-3 py-2 text-[13px] font-semibold text-[#25345d] hover:text-[#ff4d15] transition-colors duration-200 tracking-wide">
                PAGES
                <ChevronDown size={12} className={`transition-transform duration-200 ${activeDropdown === 'PAGES' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'PAGES' && (
                <div className="absolute top-full left-[-150px] mt-0 w-[640px] bg-white shadow-2xl border border-gray-100 z-50 p-6 grid grid-cols-3 gap-6">
                  {/* Col 1 */}
                  <div>
                    <h4 className="text-xs font-bold text-[#25345d] uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">STANDARD PAGES:</h4>
                    <ul className="space-y-2 text-[12px] text-gray-600">
                      {[
                        { name: 'About Us Page', key: 'about' },
                        { name: 'Courses List Page', key: 'courses-list' },
                        { name: 'Course Details Page', key: 'course-details' },
                        { name: 'Partners & Colleges', key: 'partners' },
                        { name: 'FAQs Page', key: 'faqs' }
                      ].map((p) => {
                        const isPageActive = currentPage === p.key;
                        return (
                          <li key={p.key}>
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                if (onSelectPage) onSelectPage(p.key);
                                setActiveDropdown(null);
                              }}
                              className={`block py-0.5 border-b border-dashed border-gray-100 transition-colors ${
                                isPageActive ? 'text-[#ff4d15] font-bold pl-1' : 'hover:text-[#ff4d15]'
                              }`}
                            >
                              {p.name} {isPageActive && '✓'}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {/* Col 2 */}
                  <div>
                    <h4 className="text-xs font-bold text-[#25345d] uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">SPECIAL PAGES:</h4>
                    <ul className="space-y-2 text-[12px] text-gray-600">
                      {[
                        { name: 'Countries List Page', key: 'countries-list' },
                        { name: 'Country Details Page', key: 'country-details' },
                        { name: 'Visa List Page #1', key: 'visa-list-1' },
                        { name: 'Visa List Page #2', key: 'visa-list-2' },
                        { name: 'Visa Details Page', key: 'visa-details' }
                      ].map((p) => {
                        const isPageActive = currentPage === p.key;
                        return (
                          <li key={p.key}>
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                if (onSelectPage) onSelectPage(p.key);
                                setActiveDropdown(null);
                              }}
                              className={`block py-0.5 border-b border-dashed border-gray-100 transition-colors ${
                                isPageActive ? 'text-[#ff4d15] font-bold pl-1' : 'hover:text-[#ff4d15]'
                              }`}
                            >
                              {p.name} {isPageActive && '✓'}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {/* Col 3 */}
                  <div>
                    <h4 className="text-xs font-bold text-[#25345d] uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">AUXILIARY PAGES:</h4>
                    <ul className="space-y-2 text-[12px] text-gray-600">
                      {[
                        { name: 'Blog Listing Page', key: 'blog-list' },
                        { name: 'Single Blog Post', key: 'blog-post' },
                        { name: 'Contact Style #1', key: 'contact-1' },
                        { name: 'Contact Style #2', key: 'contact-2' },
                        { name: 'Contact Style #3', key: 'contact-3' }
                      ].map((p) => {
                        const isPageActive = currentPage === p.key;
                        return (
                          <li key={p.key}>
                            <a
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                if (onSelectPage) onSelectPage(p.key);
                                setActiveDropdown(null);
                              }}
                              className={`block py-0.5 border-b border-dashed border-gray-100 transition-colors ${
                                isPageActive ? 'text-[#ff4d15] font-bold pl-1' : 'hover:text-[#ff4d15]'
                              }`}
                            >
                              {p.name} {isPageActive && '✓'}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* MEGA MENU (Image 3 mega menu) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('MEGA MENU')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-0.5 px-3 py-2 text-[13px] font-semibold text-[#25345d] hover:text-[#ff4d15] transition-colors duration-200 tracking-wide">
                MEGA MENU
                <ChevronDown size={12} className={`transition-transform duration-200 ${activeDropdown === 'MEGA MENU' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'MEGA MENU' && (
                <div className="absolute top-full left-[-250px] mt-0 w-[720px] bg-white shadow-2xl border border-gray-100 z-50 p-6 grid grid-cols-3 gap-6">
                  {/* Col 1 */}
                  <div>
                    <h4 className="text-xs font-bold text-[#25345d] uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">WHAT WE OFFER:</h4>
                    <ul className="space-y-2 text-[12px] text-gray-600">
                      {[
                        'Student Visa Assessment',
                        'Working Visa Assessment',
                        'Business Visa Assessment',
                        'PR Visa Assessment',
                        'Visa Eligibility Assessment',
                        'Family Visa Assessment',
                        'Immigration Consultation'
                      ].map((p) => (
                        <li key={p}>
                          <a href="#" className="hover:text-[#ff4d15] transition-colors block py-0.5 border-b border-dashed border-gray-100">{p}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Col 2 */}
                  <div>
                    <h4 className="text-xs font-bold text-[#25345d] uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">FEATURED NEWS:</h4>
                    <div className="bg-gray-50 rounded-sm overflow-hidden border border-gray-100">
                      <img src="/assets/couple_travel.png" alt="Featured News" className="w-full h-24 object-cover" />
                      <div className="p-3">
                        <h5 className="font-bold text-[#25345d] text-xs leading-snug mb-1" style={{fontFamily: 'Poppins, sans-serif'}}>
                          We make the visa process faster
                        </h5>
                        <p className="text-gray-500 text-[11px] leading-tight">
                          Porta semper lacus cursus, feugiat primis ultrice in ligula. risus auctor tempus feugiat dolor imped...
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Col 3 */}
                  <div>
                    <h4 className="text-xs font-bold text-[#25345d] uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">LATEST NEWS:</h4>
                    <div className="space-y-3">
                      {[
                        { title: 'Etiam sapien risus ante auctor tempus an accumsan ...', time: '18 hours ago', img: '/assets/advisor_laptop.png' },
                        { title: 'Blandit tempor sapien ipsum, porta risus auctor justa ...', time: 'Dec 02, 2019', img: '/assets/advisors_table.png' },
                        { title: 'Cursus risus an auctor risus laoreet undo auctor varius ...', time: 'Nov 26, 2019', img: '/assets/couple_travel.png' },
                      ].map((news, i) => (
                        <div key={i} className="flex gap-2 items-center border-b border-dashed border-gray-100 pb-2 last:border-b-0">
                          <img src={news.img} alt="thumb" className="w-10 h-10 object-cover rounded-sm shrink-0" />
                          <div>
                            <p className="text-[11px] font-semibold text-[#25345d] leading-tight hover:text-[#ff4d15] transition-colors">{news.title}</p>
                            <span className="text-[10px] text-gray-400">{news.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* SIMPLE LINK */}
            <a href="#" className="px-3 py-2 text-[13px] font-semibold text-[#25345d] hover:text-[#ff4d15] transition-colors duration-200 tracking-wide">
              SIMPLE LINK
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (onSelectPage) onSelectPage('contact-2');
              }}
              className="ml-3 px-5 py-2.5 bg-[#ff4d15] text-white text-[13px] font-semibold rounded-sm hover:bg-[#e03e08] transition-all duration-200 hover:shadow-lg hover:shadow-orange-200 tracking-wide uppercase"
            >
              GET CONSULTATION
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[#25345d]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-2">
            <a href="#" className="py-2 px-3 text-sm font-semibold text-[#25345d] hover:text-[#ff4d15] border-b border-gray-50">HOME</a>
            <a href="#" className="py-2 px-3 text-sm font-semibold text-[#25345d] hover:text-[#ff4d15] border-b border-gray-50">PAGES</a>
            <a href="#" className="py-2 px-3 text-sm font-semibold text-[#25345d] hover:text-[#ff4d15] border-b border-gray-50">MEGA MENU</a>
            <a href="#" className="py-2 px-3 text-sm font-semibold text-[#25345d] hover:text-[#ff4d15] border-b border-gray-50">SIMPLE LINK</a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                if (onSelectPage) onSelectPage('contact-2');
              }}
              className="mt-2 text-center py-2.5 bg-[#ff4d15] text-white text-sm font-semibold rounded-sm hover:bg-[#e03e08] transition-colors block"
            >
              GET CONSULTATION
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
