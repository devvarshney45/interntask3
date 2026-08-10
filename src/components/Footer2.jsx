import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';

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
              <p>121 King Street, Melbourne,<br />Victoria 3000 Australia</p>
              <p>Phone: <span className="text-gray-700">+12 9 8765 4321</span></p>
              <p>
                Email:{' '}
                <a href="mailto:hello@demo.com" className="text-[#25345d] underline hover:text-[#ff4d15] transition-colors">
                  hello@demo.com
                </a>
              </p>
              <div className="pt-2 space-y-1">
                <p>Mon-Fri: 9:00AM - 6:30PM</p>
                <p>Saturday: 8:30AM - 3:30PM</p>
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
                'About ImmiEx',
                'Visa Information',
                'Immigration FAQ',
                'Immigration Assistance',
                'ImmiEx Testimonials',
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

          {/* Col 3: Visas */}
          <div>
            <h4
              className="font-bold text-[#25345d] text-sm mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Visas
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-500">
              {[
                'Visitor Visas',
                'Permanent Residence Visas',
                'Business Visas',
                'Working Holiday Visas',
                'Studying & Training Visas',
                'Skilled Work Visas',
                'Family & Partner Visas',
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

      {/* Bottom bar separator */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Left: ImmiEx Logo */}
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
                Immi<span className="text-[#ff4d15]">Ex</span>
              </div>
              <div className="text-[9px] text-gray-400 tracking-widest uppercase">Immigration Consulting</div>
            </div>
          </a>

          {/* Right: Copyright + links */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-[11px] text-gray-400">
            <span>
              © Copyright{' '}
              <strong className="text-gray-600 font-semibold">ImmiEx 2019</strong>{' '}
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
