import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, ChevronDown, Menu, X } from 'lucide-react';

const Header = ({ onSelectPage, currentPage }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDropdown = (name) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  };
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 80);
  };

  const standardPages = [
    { name: 'About Us', key: 'about' },
    { name: 'Courses List', key: 'courses-list' },
    { name: 'Course Details', key: 'course-details' },
    { name: 'Partners & Colleges', key: 'partners' },
    { name: 'FAQs', key: 'faqs' },
  ];
  const specialPages = [
    { name: 'Countries List', key: 'countries-list' },
    { name: 'Country Details', key: 'country-details' },
    { name: 'Visa List #1', key: 'visa-list-1' },
    { name: 'Visa List #2', key: 'visa-list-2' },
    { name: 'Visa Details', key: 'visa-details' },
  ];
  const auxiliaryPages = [
    { name: 'Blog Listing', key: 'blog-list' },
    { name: 'Single Blog Post', key: 'blog-post' },
    { name: 'Contact Style #1', key: 'contact-1' },
    { name: 'Contact Style #2', key: 'contact-2' },
    { name: 'Contact Style #3', key: 'contact-3' },
  ];

  const megaLinks = [
    'Student Visa Assessment',
    'Working Visa Assessment',
    'Business Visa Assessment',
    'PR Visa Assessment',
    'Visa Eligibility Assessment',
    'Family Visa Assessment',
    'Immigration Consultation',
  ];

  const latestNews = [
    { title: 'Global education opportunities open for 2026 intake...', time: '2 days ago', img: '/assets/advisor_laptop.png' },
    { title: 'Scholarship seminars for international students...', time: 'Dec 02, 2025', img: '/assets/advisors_table.png' },
    { title: 'New university partnerships announced by EduVista...', time: 'Nov 26, 2025', img: '/assets/couple_travel.png' },
  ];

  const navLinkCls = 'flex items-center gap-0.5 px-4 py-2.5 text-[13px] font-semibold text-[#333] hover:text-[#ff4d15] transition-colors duration-150 tracking-wide whitespace-nowrap select-none cursor-pointer';
  const dropItemCls = 'block px-5 py-2.5 text-[13px] text-gray-600 hover:text-[#ff4d15] hover:bg-gray-50 transition-colors border-b border-dashed border-gray-100 last:border-b-0 whitespace-nowrap';
  const megaItemCls = 'block py-2 text-[13px] text-gray-600 hover:text-[#ff4d15] transition-colors border-b border-dashed border-gray-100 last:border-b-0 whitespace-nowrap';
  const colHeadCls = 'text-[12px] font-bold text-[#25345d] uppercase tracking-widest mb-4';

  const navigate = (key) => {
    if (onSelectPage) onSelectPage(key);
    setActiveDropdown(null);
    setMobileOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#25345d] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-1.5">
            <MapPin size={12} className="text-gray-300" />
            <span className="text-gray-200 text-[11px]">236, Jodhpur Gardens, Flat No. G2, P.S. Lake, Kolkata – 700045</span>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5">
              <Phone size={11} className="text-gray-300" />
              <span className="text-gray-200 text-[11px]">+91 8282002268, +91 8282002258</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail size={11} className="text-[#ff4d15]" />
              <a href="mailto:info@eduvastaint.com" className="text-[#ff9c7e] text-[11px] hover:text-[#ff4d15] transition-colors">
                info@eduvastaint.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'} border-b border-gray-100`}>
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">

          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="flex items-center gap-2.5 group shrink-0">
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
              <div className="font-bold text-[18px] text-[#25345d] leading-none group-hover:text-[#ff4d15] transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Edu<span className="text-[#ff4d15]">Vista</span>
              </div>
              <div className="text-[9px] text-gray-400 tracking-widest uppercase font-semibold mt-0.5">
                International
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center">

            {/* HOME link */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigate('home'); }}
              className={navLinkCls}
              style={{ color: currentPage === 'home' ? '#ff4d15' : undefined }}
            >
              HOME
            </a>

            {/* ─── PAGES mega ─── */}
            <div
              className="relative"
              onMouseEnter={() => openDropdown('PAGES')}
              onMouseLeave={closeDropdown}
            >
              <button className={navLinkCls} style={{ color: activeDropdown === 'PAGES' ? '#ff4d15' : undefined }}>
                PAGES <ChevronDown size={13} className={`ml-0.5 transition-transform duration-150 ${activeDropdown === 'PAGES' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'PAGES' && (
                <div
                  className="absolute top-full left-0 bg-white z-50"
                  style={{
                    width: '640px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    border: '1px solid #e8e8e8',
                    padding: '28px 30px 24px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '0 24px',
                  }}
                  onMouseEnter={() => openDropdown('PAGES')}
                  onMouseLeave={closeDropdown}
                >
                  {/* Standard Pages */}
                  <div>
                    <div className={colHeadCls}>STANDARD PAGES:</div>
                    <ul>
                      {standardPages.map((p) => (
                        <li key={p.key}>
                          <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); navigate(p.key); }}
                            className={megaItemCls}
                            style={currentPage === p.key ? { color: '#ff4d15', fontWeight: '600' } : {}}
                          >
                            {p.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Special Pages */}
                  <div>
                    <div className={colHeadCls}>SPECIAL PAGES:</div>
                    <ul>
                      {specialPages.map((p) => (
                        <li key={p.key}>
                          <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); navigate(p.key); }}
                            className={megaItemCls}
                            style={currentPage === p.key ? { color: '#ff4d15', fontWeight: '600' } : {}}
                          >
                            {p.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Auxiliary Pages */}
                  <div>
                    <div className={colHeadCls}>AUXILIARY PAGES:</div>
                    <ul>
                      {auxiliaryPages.map((p) => (
                        <li key={p.key}>
                          <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); navigate(p.key); }}
                            className={megaItemCls}
                            style={currentPage === p.key ? { color: '#ff4d15', fontWeight: '600' } : {}}
                          >
                            {p.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* ─── SERVICES mega ─── */}
            <div
              className="relative"
              onMouseEnter={() => openDropdown('MEGA')}
              onMouseLeave={closeDropdown}
            >
              <button className={navLinkCls} style={{ color: activeDropdown === 'MEGA' ? '#ff4d15' : undefined }}>
                SERVICES <ChevronDown size={13} className={`ml-0.5 transition-transform duration-150 ${activeDropdown === 'MEGA' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'MEGA' && (
                <div
                  className="absolute top-full bg-white z-50"
                  style={{
                    width: '750px',
                    right: 0,
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    border: '1px solid #e8e8e8',
                    padding: '28px 30px 24px',
                    display: 'grid',
                    gridTemplateColumns: '210px 1fr 210px',
                    gap: '0 28px',
                  }}
                  onMouseEnter={() => openDropdown('MEGA')}
                  onMouseLeave={closeDropdown}
                >
                  {/* What We Offer */}
                  <div>
                    <div className={colHeadCls}>WHAT WE OFFER:</div>
                    <ul>
                      {megaLinks.map((item) => (
                        <li key={item}>
                          <a href="#" className={megaItemCls}>{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Featured News */}
                  <div>
                    <div className={colHeadCls}>FEATURED NEWS:</div>
                    <div style={{ border: '1px solid #eee', overflow: 'hidden' }}>
                      <img
                        src="/assets/couple_travel.png"
                        alt="Featured"
                        style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }}
                      />
                      <div style={{ padding: '12px 14px' }}>
                        <p style={{ fontWeight: '700', color: '#25345d', fontSize: '13px', marginBottom: '6px', lineHeight: '1.4', fontFamily: 'Poppins, sans-serif' }}>
                          Your Gateway to Global Education
                        </p>
                        <p style={{ color: '#777', fontSize: '11px', lineHeight: '1.6' }}>
                          EduVista International offers end-to-end guidance for students seeking admissions to top universities worldwide...
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Latest News */}
                  <div>
                    <div className={colHeadCls}>LATEST NEWS:</div>
                    <div>
                      {latestNews.map((n, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'flex-start',
                            paddingBottom: '12px',
                            marginBottom: '12px',
                            borderBottom: i < latestNews.length - 1 ? '1px dashed #e5e5e5' : 'none',
                          }}
                        >
                          <img
                            src={n.img}
                            alt=""
                            style={{ width: '50px', height: '40px', objectFit: 'cover', flexShrink: 0 }}
                          />
                          <div>
                            <p style={{ fontSize: '12px', fontWeight: '600', color: '#25345d', lineHeight: '1.4', marginBottom: '3px' }}>
                              {n.title}
                            </p>
                            <span style={{ fontSize: '11px', color: '#999' }}>{n.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ABOUT */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigate('about'); }}
              className={navLinkCls}
              style={{ color: currentPage === 'about' ? '#ff4d15' : undefined }}
            >
              ABOUT
            </a>

            {/* GET CONSULTATION */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate('contact-2');
              }}
              style={{
                marginLeft: '12px',
                padding: '10px 22px',
                background: '#ff4d15',
                color: '#fff',
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#e03e08'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#ff4d15'}
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
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-1">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigate('home'); }}
              className="py-2 px-3 text-sm text-gray-700 hover:text-[#ff4d15] border-b border-gray-50 font-semibold"
            >
              Home
            </a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigate('about'); }}
              className="py-2 px-3 text-sm text-gray-700 hover:text-[#ff4d15] border-b border-gray-50"
            >
              About Us
            </a>
            <div className="border-t border-gray-100 mt-2 pt-2">
              {[...standardPages, ...specialPages, ...auxiliaryPages].map((p) => (
                <a
                  key={p.key}
                  href="#"
                  onClick={(e) => { e.preventDefault(); navigate(p.key); }}
                  className="block py-2 px-3 text-sm text-gray-700 hover:text-[#ff4d15] border-b border-gray-50"
                >
                  {p.name}
                </a>
              ))}
            </div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); navigate('contact-2'); }}
              className="mt-3 text-center py-2.5 bg-[#ff4d15] text-white text-sm font-semibold uppercase tracking-wide"
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
