import React, { useState } from 'react';
import PopularCourses from '../components/PopularCourses';
import OverseasEducation from '../components/OverseasEducation';

const courseItems = [
  { id: 1, title: 'IELTS Preparation Course', desc: 'Comprehensive coaching covering listening, reading, writing, and speaking modules with practice resources.', bg: 'bg-[#9254c8]/10 text-[#9254c8]', border: 'border-[#9254c8]/20' },
  { id: 2, title: 'TOEFL Preparation', desc: 'Strategic preparation to excel in the Test of English as a Foreign Language with simulated mock exams.', bg: 'bg-[#e28743]/10 text-[#e28743]', border: 'border-[#e28743]/20' },
  { id: 3, title: 'PTE Academic Coaching', desc: 'Focus on Pearson Test of English modules with computer-based practice and scoring guidance.', bg: 'bg-[#1e81b0]/10 text-[#1e81b0]', border: 'border-[#1e81b0]/20' },
  { id: 4, title: 'Duolingo English Test Prep', desc: 'Online preparation for the modern, fast, and convenient language proficiency test.', bg: 'bg-green-50 text-green-700', border: 'border-green-200' },
  { id: 5, title: 'GRE & GMAT Prep Course', desc: 'Advanced quantitative and verbal reasoning strategies for business school and graduate admissions.', bg: 'bg-red-50 text-red-600', border: 'border-red-100' },
  { id: 6, title: 'SAT & ACT Preparation', desc: 'Targeted study plans, logic training, and mock tests for undergraduate study abroad seekers.', bg: 'bg-blue-50 text-blue-600', border: 'border-blue-100' },
  { id: 7, title: 'Spoken English & Proficiency', desc: 'Development of fluency, public speaking, conversational grammar, and active communication skills.', bg: 'bg-purple-50 text-purple-600', border: 'border-purple-100' },
  { id: 8, title: 'Career & Professional Development', desc: 'Profile optimization, resume/CV reviews, statement of purpose (SOP) guidance, and interview prep.', bg: 'bg-indigo-50 text-indigo-600', border: 'border-indigo-100' },
];

const listFaqs = [
  { id: 1, q: '1. What are the online English courses?', a: 'Online English courses cover comprehensive grammar lessons, pronunciation rules, conversational topics, and professional writing skills.' },
  { id: 2, q: '2. What is the registration process?', a: 'Sign up online, complete the basic English diagnostic evaluation test, choose your plan, and start studying instantly.' },
  { id: 3, q: '3. What are the best free online diploma courses in English?', a: 'Our foundational English grammar and writing development diploma courses are offered free with certification upgrades.' },
  { id: 4, q: '4. What are the best free online certificate courses in English?', a: 'We offer interactive short courses covering email communication, IELTS preparation strategy, and speaking basics.' },
  { id: 5, q: '5. Which payment methods do you accept?', a: 'Visa, MasterCard, PayPal, and direct wire transfer methods are accepted.' },
];

const CoursesList = () => {
  const [openId, setOpenId] = useState(1);
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#25345d] text-white py-4 px-4 text-xs font-semibold">
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 opacity-80">
          <a href="#" className="hover:text-[#ff4d15] transition-colors">[ Home ]</a>
          <span>▸</span>
          <span className="text-gray-300">Courses List</span>
        </div>
      </div>

      {/* Grid of Courses */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1
            className="text-3xl font-extrabold text-[#25345d] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Top Ranked Courses
          </h1>
          <p className="text-gray-500 text-xs max-w-xl mx-auto leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis
            lacinia risus interdum auctor id viverra dolor iaculis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courseItems.map((course) => (
            <div key={course.id} className={`p-6 rounded-md border flex flex-col justify-between ${course.border} bg-white shadow-xs hover:shadow-md transition-shadow`}>
              <div className="space-y-3">
                <span className={`inline-block px-2.5 py-1 text-[10px] font-bold rounded-sm uppercase tracking-wide ${course.bg}`}>
                  Course {course.id}
                </span>
                <h3 className="font-bold text-[#25345d] text-sm leading-snug" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {course.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">{course.desc}</p>
              </div>
              <a href="#" className="text-xs font-bold text-[#ff4d15] hover:text-[#25345d] transition-colors mt-4 block">
                Read More ▸
              </a>
            </div>
          ))}
        </div>
      </div>

      <PopularCourses />

      {/* Accordion FAQ block */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center text-[#25345d] mb-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Need Some Help? Look Here
        </h2>
        <div className="space-y-4">
          {listFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border border-gray-100 rounded-sm">
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className={`w-full flex items-center justify-between p-4 text-left text-xs font-bold ${
                    isOpen ? 'bg-gray-50 text-[#ff4d15]' : 'text-[#25345d] hover:text-[#ff4d15]'
                  }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <span>{faq.q}</span>
                  <span>{isOpen ? '▴' : '▾'}</span>
                </button>
                {isOpen && (
                  <div className="p-4 pt-0 text-[11px] text-gray-500 leading-relaxed bg-gray-50 border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <OverseasEducation />
    </div>
  );
};

export default CoursesList;
