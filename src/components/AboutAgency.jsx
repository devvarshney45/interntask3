import React from 'react';

const AboutAgency = () => {
  return (
    <section className="pb-20 pt-48 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Overlapping 3-Image Block exactly matching the mockup */}
          <div className="lg:col-span-5 relative flex items-center justify-center mb-10 lg:mb-0">
            {/* Base block container */}
            <div className="relative w-full max-w-[380px] aspect-[38/36] h-[360px] xs:h-auto">
              
              {/* Image 1: Top-Left */}
              <div 
                className="absolute top-0 left-0 rounded-sm overflow-hidden shadow-md z-20 border-2 border-white"
                style={{ width: '48%', height: '47%' }}
              >
                <img
                  src="/assets/advisor_laptop.png"
                  alt="Student Counseling"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 2: Bottom-Left */}
              <div 
                className="absolute bottom-0 left-0 rounded-sm overflow-hidden shadow-md z-30 border-2 border-white"
                style={{ width: '48%', height: '47%' }}
              >
                <img
                  src="/assets/advisors_table.png"
                  alt="Team Meeting"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 3: Right Side (Tall vertical block) */}
              <div 
                className="absolute top-[8%] right-0 rounded-sm overflow-hidden shadow-md z-10 border-2 border-white"
                style={{ width: '49%', height: '83%' }}
              >
                <img
                  src="/assets/couple_travel.png"
                  alt="Students"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content exactly matching mockup style */}
          <div className="lg:col-span-7">
            <span className="text-[#ff4d15] text-[11px] font-bold uppercase tracking-[0.2em] block mb-2">
              ABOUT AGENCY
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-[#25345d] leading-[1.25] mb-5"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Educational & Study Abroad<br />
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
