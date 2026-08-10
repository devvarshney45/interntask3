import React from 'react';

const ConsultationBanner = () => {
  return (
    <section
      className="py-10 px-4"
      style={{ background: '#ff4d15' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div>
          <p className="text-white/80 text-[11px] uppercase tracking-widest font-semibold mb-1">
            Get in Touch
          </p>
          <h3
            className="text-white text-xl font-bold"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Get Your Free Consultation Now
          </h3>
        </div>
        <a
          href="#contact"
          className="shrink-0 inline-block bg-[#25345d] text-white font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-3.5 hover:bg-[#1a2448] transition-all duration-200 shadow-lg"
        >
          GET CONSULTATION
        </a>
      </div>
    </section>
  );
};

export default ConsultationBanner;
