import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
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
    <footer className="relative bg-[#1b2646] text-white pt-20 pb-8 overflow-hidden">
      {/* World Map Dotted Pattern Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='150' cy='120' r='1.5'/%3E%3Ccircle cx='180' cy='140' r='1.5'/%3E%3Ccircle cx='210' cy='110' r='1.5'/%3E%3Ccircle cx='250' cy='150' r='1.5'/%3E%3Ccircle cx='300' cy='180' r='1.5'/%3E%3Ccircle cx='350' cy='210' r='1.5'/%3E%3Ccircle cx='400' cy='160' r='1.5'/%3E%3Ccircle cx='450' cy='140' r='1.5'/%3E%3Ccircle cx='500' cy='190' r='1.5'/%3E%3Ccircle cx='550' cy='220' r='1.5'/%3E%3Ccircle cx='600' cy='170' r='1.5'/%3E%3Ccircle cx='650' cy='130' r='1.5'/%3E%3Ccircle cx='700' cy='160' r='1.5'/%3E%3Ccircle cx='750' cy='200' r='1.5'/%3E%3Ccircle cx='800' cy='150' r='1.5'/%3E%3Ccircle cx='850' cy='180' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Main 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <path d="M20 4 A16 16 0 0 1 36 20" stroke="#ff4d15" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M20 4 A16 16 0 0 0 4 20" stroke="#7090d0" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M4 20 A16 16 0 0 0 20 36" stroke="#ff4d15" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M20 36 A16 16 0 0 0 36 20" stroke="#7090d0" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <ellipse cx="20" cy="20" rx="8" ry="16" stroke="white" strokeWidth="1" fill="none" opacity="0.4"/>
                  <line x1="4" y1="20" x2="36" y2="20" stroke="white" strokeWidth="1" opacity="0.4"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-xl text-white leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Edu<span className="text-[#ff4d15]">Vista</span>
                </div>
                <div className="text-[10px] text-gray-400 tracking-widest uppercase">International Profile</div>
              </div>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Eduvista International is dedicated to providing strategic and innovative education institution consultancy solutions globally.
            </p>
          </div>

          {/* Col 2: Contact Details */}
          <div>
            <h4
              className="font-bold text-white text-sm mb-5"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Contact Details
            </h4>
            <div className="space-y-3 text-xs text-gray-400 leading-relaxed">
              <p>236, Jodhpur Gardens, Ground Floor,<br />Flat No. G2, P.S. Lake, Kolkata - 700045</p>
              <p>Phone: <span className="text-gray-300">+91 6282002268, +91 8282002258</span></p>
              <p>Email: <a href="mailto:eduvasta50@gmail.com" className="text-gray-300 underline hover:text-[#ff4d15]">eduvasta50@gmail.com</a></p>
              <div className="pt-2 border-t border-white/10 space-y-1">
                <p>Mon-Sat: 10:00AM - 7:00PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Col 3: Useful Links */}
          <div>
            <h4
              className="font-bold text-white text-sm mb-5"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Useful Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {[
                'About EduVista',
                'University Selection',
                'Visa Assistance',
                'Overseas Internship',
                'Health Insurance',
                'Travel Assistance',
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

          {/* Col 4: Stay Informed Newsletter */}
          <div>
            <h4
              className="font-bold text-white text-sm mb-5"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Stay Informed
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Subscribe to our newsletters to get the latest news and helps
            </p>

            {subscribed ? (
              <div className="bg-emerald-900/40 border border-emerald-500/30 text-emerald-300 p-3 rounded-sm text-xs">
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
                  className="bg-white text-gray-800 text-xs px-4 py-3 rounded-sm focus:outline-none placeholder-gray-400"
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

        {/* Bottom Line */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© Copyright <strong className="text-gray-200">EduVista International 2026</strong>. All Rights Reserved</p>

          {/* Social icons */}
          <div className="flex items-center gap-5 text-gray-400">
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">f</a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">t</a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Google Plus">g+</a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Tumblr">t</a>
          </div>
        </div>
      </div>

      {/* Floating back-to-top button */}
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

export default Footer;
