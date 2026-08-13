import React, { useState } from 'react';
import { ArrowUp, ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'What services does EduVista International offer?', a: 'EduVista International provides end-to-end study abroad services including university selection, student visa documentation, IELTS/English proficiency preparation, scholarship assistance, SOP & application writing, pre-departure briefing, and post-arrival support.' },
  { q: 'How do I apply to a university through EduVista?', a: 'Simply book a free consultation with our advisors. We assess your academic profile, shortlist suitable universities, guide you through documentation, and submit your application on your behalf.' },
  { q: 'Which countries do you assist with for study abroad?', a: 'We assist students wishing to study in the USA, UK, Canada, Australia, New Zealand, Germany, France, Ireland, Netherlands, Malaysia, and many more destinations across the globe.' },
  { q: 'Is there a fee for initial consultation?', a: 'No, your initial consultation with our expert advisors is completely free. We only charge service fees after you confirm your enrollment with us.' },
  { q: 'How long does the visa process take?', a: 'Visa processing times vary by country and visa type. On average it takes 4–12 weeks. Our team starts your visa preparation early to ensure timely submission and avoid delays.' },
  { q: 'Can EduVista help with scholarships?', a: 'Yes! Our scholarship assistance service helps you identify and apply for merit-based, need-based, and country-specific scholarships to reduce your tuition costs.' },
];

const FaqAccordion = () => {
  const [openId, setOpenId] = useState(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openId === i;
        return (
          <div key={i} className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-xs">
            <button
              onClick={() => setOpenId(isOpen ? null : i)}
              className={`w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold transition-colors ${
                isOpen ? 'text-[#ff4d15] bg-orange-50' : 'text-[#25345d] hover:text-[#ff4d15]'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span>{faq.q}</span>
              <ChevronDown
                size={16}
                className={`shrink-0 ml-3 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-[#ff4d15]' : 'text-gray-400'
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-4 pt-1 text-xs text-gray-500 leading-relaxed border-t border-gray-100 bg-orange-50">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const Footer2 = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Main 4 Columns */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1: Contact Details */}
          <div>
            <h4
              className="font-bold text-[#25345d] text-sm mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Contact Details
            </h4>
            <div className="space-y-3 text-xs text-gray-500 leading-relaxed">
              <p>236, Jodhpur Gardens, Ground Floor,<br />Flat No. G2, P.S. Lake, Kolkata – 700045</p>
              <p>Phone: <span className="text-gray-700">+91 8282002268, +91 8282002258</span></p>
              <p>
                Email:{' '}
                <a href="mailto:info@eduvastaint.com" className="text-[#25345d] underline hover:text-[#ff4d15] transition-colors">
                  info@eduvastaint.com
                </a>
              </p>
              <p>
                Secondary:{' '}
                <a href="mailto:eduvasta50@gmail.com" className="text-[#25345d] underline hover:text-[#ff4d15] transition-colors">
                  eduvasta50@gmail.com
                </a>
              </p>
              <div className="pt-2 space-y-1">
                <p>Mon-Sat: 10:00AM - 7:00PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Col 2: Useful Links */}
          <div>
            <h4
              className="font-bold text-[#25345d] text-sm mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Useful Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-500">
              {[
                'About EduVista',
                'University Selection',
                'Visa Information',
                'Scholarship Assistance',
                'EduVista Testimonials',
                'Contact Us',
                'Terms and Conditions',
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#ff4d15] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4
              className="font-bold text-[#25345d] text-sm mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-500">
              {[
                'Student Visa Assessment',
                'Working Visa Assessment',
                'Business Visa Assessment',
                'PR Visa Assessment',
                'Visa Eligibility Assessment',
                'Family Visa Assessment',
                'Immigration Consultation',
              ].map((visa) => (
                <li key={visa}>
                  <a href="#" className="hover:text-[#ff4d15] transition-colors">
                    {visa}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Stay Always In Touch */}
          <div>
            <h4
              className="font-bold text-[#25345d] text-sm mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Stay Always In Touch
            </h4>

            {subscribed ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 p-3 rounded-sm text-xs">
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="border border-gray-200 text-xs px-4 py-3 rounded-sm focus:outline-none focus:border-[#25345d] bg-white text-gray-700 placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="bg-[#ff4d15] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-sm hover:bg-[#e03e08] transition-colors"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Section — above bottom bar */}
      <div className="bg-[#f8f9fb] border-t border-gray-100 py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#ff4d15] text-[11px] font-bold uppercase tracking-[0.2em] block mb-2">
              GOT QUESTIONS?
            </span>
            <h2
              className="text-2xl font-extrabold text-[#25345d]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion />
        </div>
      </div>

      {/* Bottom bar separator */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Left: EduVista Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-9 h-9">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <path d="M20 4 A16 16 0 0 1 36 20" stroke="#ff4d15" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M20 4 A16 16 0 0 0 4 20" stroke="#b0c4e8" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M4 20 A16 16 0 0 0 20 36" stroke="#ff4d15" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M20 36 A16 16 0 0 0 36 20" stroke="#b0c4e8" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <ellipse cx="20" cy="20" rx="8" ry="16" stroke="#25345d" strokeWidth="1" fill="none" opacity="0.4"/>
                <line x1="4" y1="20" x2="36" y2="20" stroke="#25345d" strokeWidth="1" opacity="0.4"/>
              </svg>
            </div>
            <div>
              <div className="font-bold text-[#25345d] text-base leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Edu<span className="text-[#ff4d15]">Vista</span>
              </div>
              <div className="text-[9px] text-gray-400 tracking-widest uppercase">International Profile</div>
            </div>
          </a>

          {/* Right: Copyright + links */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-[11px] text-gray-400">
            <span>
              © Copyright{' '}
              <strong className="text-gray-600 font-semibold">EduVista International 2026</strong>{' '}
              All Rights Reserved
            </span>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-gray-200">|</span>
              <a href="#" className="hover:text-[#ff4d15] transition-colors">Privacy Policy</a>
              <span className="text-gray-200">|</span>
              <a href="#" className="hover:text-[#ff4d15] transition-colors">Terms &amp; Conditions</a>
              <span className="text-gray-200">|</span>
              <a href="#" className="hover:text-[#ff4d15] transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-to-top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 bg-[#32436d] text-white w-9 h-9 rounded-sm flex items-center justify-center shadow-lg hover:bg-[#ff4d15] transition-all duration-300"
        aria-label="Back to top"
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
};

export default Footer2;
