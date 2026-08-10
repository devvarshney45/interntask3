import React from 'react';

const BannerConsultationCall = () => {
  return (
    <section className="bg-[#1b2646] text-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 items-center">
        {/* Left Side Photo */}
        <div className="md:col-span-5 relative h-72 md:h-96 overflow-hidden">
          <img
            src="/assets/couple_travel.png"
            alt="Traveler with suitcase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1b2646]/80 hidden md:block" />
        </div>

        {/* Right Side Text & CTA */}
        <div className="md:col-span-7 p-8 md:p-14 space-y-4">
          <h2
            className="text-2xl md:text-4xl font-bold leading-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Consultations for prospective immigrants
          </h2>
          <p className="text-gray-300 text-xs md:text-sm max-w-xl leading-relaxed">
            Semper lacus cursus porta, feugiat primis ligula risus auctor and rhoncus in ultrce ligula purus ipsum primis in cubilia
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-block bg-[#ff4d15] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-sm hover:bg-[#e03e08] transition-all duration-200 shadow-lg hover:shadow-orange-900/50"
            >
              GET STARTED
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerConsultationCall;
