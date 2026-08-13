import React from 'react';

const AboutAgency = () => {
  return (
    <section className="pb-20 pt-48 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Single large image with decorative circle stamp */}
          <div className="lg:col-span-5 relative flex items-center justify-center mb-10 lg:mb-0">
            <div className="relative w-full max-w-[400px]">

              {/* Decorative dashed circle behind image */}
              <div
                className="absolute rounded-full border-2 border-dashed border-gray-200"
                style={{ width: '260px', height: '260px', top: '10%', left: '-8%', zIndex: 0 }}
              />

              {/* Single main image */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/assets/couple_travel.png"
                  alt="Students on campus"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* Small floating badge bottom-right */}
              <div
                className="absolute bottom-6 right-0 bg-white shadow-lg border border-gray-100 rounded-md px-4 py-3 z-20 flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-[#ff4d15] rounded-full flex items-center justify-center shrink-0">
                  <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#25345d]" style={{ fontFamily: 'Poppins, sans-serif' }}>15+ Years</p>
                  <p className="text-[9px] text-gray-400">Expert Consultancy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7">
            <span className="text-[#ff4d15] text-[11px] font-bold uppercase tracking-[0.2em] block mb-2">
              ABOUT AGENCY
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-[#25345d] leading-[1.25] mb-5"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Educational &amp; Study Abroad<br />
              Consultancy of the Year
            </h2>

            <p className="text-gray-500 text-[14px] leading-relaxed mb-4">
              EduVista International is a trusted student consultancy and international education service provider dedicated to helping students achieve their academic and career aspirations through quality global education opportunities.
            </p>
            <p className="text-gray-500 text-[14px] leading-relaxed mb-7">
              We are committed to helping students achieve their global academic and career ambitions. We provide expert guidance and personalized support at every stage of the study abroad journey — from choosing the right course and university to securing admission, scholarships, visas, and successful overseas transition.
            </p>

            <a
              href="#contact"
              className="inline-block border border-gray-300 text-gray-700 text-[11px] font-bold uppercase tracking-[0.15em] px-8 py-3.5 hover:bg-[#ff4d15] hover:text-white hover:border-[#ff4d15] transition-all duration-200"
            >
              Discover More
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutAgency;
