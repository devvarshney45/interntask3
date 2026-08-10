import React, { useState } from 'react';

const HeroSection5 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [visaType, setVisaType] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching visas for ${name || 'User'} (${visaType || 'All Visas'})`);
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Banner */}
      <div
        className="relative w-full flex flex-col items-center justify-center py-24 md:py-32 px-4"
        style={{
          minHeight: '520px',
          backgroundImage: `url('/assets/sydney_hero_bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Navy Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(15,25,50,0.92) 0%, rgba(20,32,65,0.85) 50%, rgba(15,25,50,0.92) 100%)',
          }}
        />

        {/* Hero Text Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white flex flex-col items-center mb-10">
          <p
            className="text-gray-300 text-xs md:text-sm font-medium mb-3 tracking-widest uppercase"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            WE MAKE THE PROCESS FASTER
          </p>

          <h1
            className="font-black text-3xl sm:text-5xl md:text-6xl uppercase leading-tight mb-4 tracking-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Travel and Immigrate with ImmiEx
          </h1>

          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Aliquam nullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna tempor sodales sapien ...
          </p>
        </div>

        {/* Horizontal Quick Filter Search Bar (Homepage 5 Specific) */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
          <form
            onSubmit={handleSearch}
            className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 shadow-2xl grid grid-cols-1 sm:grid-cols-4 gap-3 items-center"
          >
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full bg-white text-gray-800 text-xs px-4 py-3 rounded-sm focus:outline-none placeholder-gray-400 font-medium"
              />
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full bg-white text-gray-800 text-xs px-4 py-3 rounded-sm focus:outline-none placeholder-gray-400 font-medium"
              />
            </div>
            <div>
              <select
                value={visaType}
                onChange={(e) => setVisaType(e.target.value)}
                className="w-full bg-white text-gray-700 text-xs px-4 py-3 rounded-sm focus:outline-none font-medium"
              >
                <option value="">Select Visa</option>
                <option value="Education Visa">Education Visa</option>
                <option value="Business Visa">Business Visa</option>
                <option value="Working Visa">Working Visa</option>
                <option value="PR Visa">PR Visa</option>
                <option value="Tourist Visa">Tourist Visa</option>
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#ff4d15] text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-sm hover:bg-[#e03e08] transition-colors shadow-md"
              >
                SEARCH NOW
              </button>
            </div>
          </form>

          {/* Subtext links below search bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-xs text-gray-300">
            <a href="#" className="hover:text-[#ff4d15] transition-colors">Educational Visa</a>
            <span className="text-white/20">•</span>
            <a href="#" className="hover:text-[#ff4d15] transition-colors">Business Visa</a>
            <span className="text-white/20">•</span>
            <a href="#" className="hover:text-[#ff4d15] transition-colors">PR Visa</a>
            <span className="text-white/20">•</span>
            <a href="#" className="hover:text-[#ff4d15] transition-colors">Tourist Visa</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection5;
