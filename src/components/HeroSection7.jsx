import React, { useState } from 'react';

const HeroSection7 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [visa, setVisa] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching visas for ${name} (${visa})`);
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Banner with Sydney Harbor bridge/skyline */}
      <div
        className="relative w-full flex flex-col items-center justify-center py-28 px-4"
        style={{
          minHeight: '500px',
          backgroundImage: `url('/assets/sydney_hero_bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#162039]/80" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white flex flex-col items-center mb-8">
          <p className="text-[#ff4d15] text-xs font-bold tracking-widest uppercase mb-3">
            TRUSTED IMMIGRATION AGENCY
          </p>
          <h1
            className="font-black text-3xl sm:text-5xl md:text-6xl uppercase leading-tight mb-4 tracking-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            IMMIGRATION AND VISA CONSULTATION
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat eugiat mauris ipsum in viverra tortor.
          </p>
        </div>

        {/* Inline Search Bar */}
        <div className="relative z-10 w-full max-w-3xl mx-auto px-4">
          <form
            onSubmit={handleSearch}
            className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 shadow-2xl grid grid-cols-1 sm:grid-cols-4 gap-3"
          >
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white text-gray-800 text-xs px-4 py-3 rounded-sm focus:outline-none placeholder-gray-400 font-medium"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-gray-800 text-xs px-4 py-3 rounded-sm focus:outline-none placeholder-gray-400 font-medium"
            />
            <select
              value={visa}
              onChange={(e) => setVisa(e.target.value)}
              className="bg-white text-gray-700 text-xs px-4 py-3 rounded-sm focus:outline-none font-medium"
            >
              <option value="">Select Visa</option>
              <option value="student">Student Visa</option>
              <option value="working">Skilled Work Visa</option>
              <option value="pr">PR Visa</option>
            </select>
            <button
              type="submit"
              className="bg-[#ff4d15] text-white font-bold text-xs uppercase tracking-widest py-3 rounded-sm hover:bg-[#e03e08] transition-colors"
            >
              SEARCH NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection7;
