import React from 'react';

const BottomCtaStrip = () => {
  return (
    <section className="bg-[#ff4d15] py-6 px-4 text-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <h3
          className="text-sm md:text-base font-bold text-center sm:text-left"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          If you have any questions or visa difficulties, contact us
        </h3>
        <a
          href="#contact"
          className="bg-white text-[#ff4d15] hover:bg-[#25345d] hover:text-white font-bold text-xs uppercase tracking-widest px-8 py-3 rounded-sm transition-all duration-300 shadow-md shrink-0"
        >
          CONTACT US
        </a>
      </div>
    </section>
  );
};

export default BottomCtaStrip;
