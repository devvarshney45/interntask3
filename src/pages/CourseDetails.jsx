import React from 'react';
import PopularCourses from '../components/PopularCourses';
import OverseasEducation from '../components/OverseasEducation';

const CourseDetails = () => {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#25345d] text-white py-4 px-4 text-xs font-semibold">
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 opacity-80">
          <a href="#" className="hover:text-[#ff4d15] transition-colors">[ Home ]</a>
          <span>▸</span>
          <span className="text-gray-300">Course Details</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Course Header Title */}
        <h1
          className="text-3xl font-extrabold text-[#25345d] mb-6"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          IELTS / Language Training
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column Content */}
          <div className="lg:col-span-8 space-y-8 text-xs text-gray-500 leading-relaxed">
            {/* Metadata Badges */}
            <div className="flex flex-wrap items-center gap-4 bg-gray-50 p-4 rounded border border-gray-100 font-bold text-gray-700">
              <span className="flex items-center gap-1.5">⏱ Duration: <strong className="text-[#ff4d15]">40 Hours</strong></span>
              <span className="text-gray-200">|</span>
              <span className="flex items-center gap-1.5">📝 Assessment: <strong className="text-[#ff4d15]">Yes</strong></span>
              <span className="text-gray-200">|</span>
              <span className="flex items-center gap-1.5">🎓 Certification: <strong className="text-[#ff4d15]">Yes</strong></span>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#25345d]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                About IELTS Exam
              </h3>
              <p>
                Aliquam nullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna tempor sodales sapien. Semper lacus cursus porta, feugiat primis ligula risus auctor and rhoncus in ultrce ligula purus ipsum primis in cubilia.
              </p>
            </div>

            {/* IELTS Brand Motif */}
            <div className="bg-gray-50 p-8 rounded-md border border-gray-100 flex items-center justify-center">
              <div className="text-center space-y-2">
                <span className="text-5xl font-black tracking-widest text-[#ff4d15] block">IELTS™</span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-bold">
                  International English Language Testing System
                </span>
              </div>
            </div>

            {/* Video Play Banner */}
            <div className="relative h-64 rounded-md overflow-hidden bg-gray-100 shadow-inner group">
              <img
                src="/assets/couple_travel.png"
                alt="IELTS Prep Video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#ff4d15] shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                  <span className="text-2xl ml-1">▶</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#25345d]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                IELTS Tips &amp; Tricks
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Understand the test format and score mapping guides thoroughly.</li>
                <li>Practice under timed conditions to improve your pacing.</li>
                <li>Develop strategies for scanning details in the Reading test.</li>
                <li>Improve vocabulary and sentence structure variety for Writing.</li>
              </ul>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Categories */}
            <div className="bg-gray-50 p-6 rounded-md border border-gray-100 space-y-4">
              <h3 className="text-xs font-bold text-[#25345d] uppercase tracking-wider">Course Categories</h3>
              <ul className="space-y-2.5 text-xs text-gray-600 font-semibold">
                <li className="hover:text-[#ff4d15] cursor-pointer transition-colors">TOEFL</li>
                <li className="text-[#ff4d15] cursor-pointer font-bold border-l-2 border-[#ff4d15] pl-2">IELTS Training</li>
                <li className="hover:text-[#ff4d15] cursor-pointer transition-colors">SAT Prep</li>
                <li className="hover:text-[#ff4d15] cursor-pointer transition-colors">GRE Prep</li>
              </ul>
            </div>

            {/* Countries Widget */}
            <div className="bg-gray-50 p-6 rounded-md border border-gray-100 space-y-4">
              <h3 className="text-xs font-bold text-[#25345d] uppercase tracking-wider">Popular Countries</h3>
              <div className="space-y-3">
                {[
                  { name: 'Canada', img: '/assets/sydney_hero_bg.png' },
                  { name: 'United Kingdom', img: '/assets/advisor_laptop.png' },
                  { name: 'United States', img: '/assets/couple_travel.png' },
                ].map((country, idx) => (
                  <div key={idx} className="relative h-20 rounded overflow-hidden group">
                    <img src={country.img} alt={country.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold text-xs">{country.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <PopularCourses />
      <OverseasEducation />
    </div>
  );
};

export default CourseDetails;
