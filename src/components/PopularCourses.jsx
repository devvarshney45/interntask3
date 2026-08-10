import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Academic Writing',
    desc: 'Cursus porta feugiat primis and ultrce risus auctor, tempus dolor feugiat felis lobortis.',
    category: 'WRITING',
    bgFrom: '#5b7fe0',
    bgTo: '#7c58cb',
  },
  {
    id: 2,
    title: 'English for Career Development',
    desc: 'Cursus porta feugiat primis and ultrce risus auctor, tempus dolor feugiat felis lobortis.',
    category: 'CAREER',
    bgFrom: '#e05b8f',
    bgTo: '#c04fd8',
  },
  {
    id: 3,
    title: 'IELTS Course',
    desc: 'Cursus porta feugiat primis and ultrce risus auctor, tempus dolor feugiat felis lobortis.',
    category: 'IELTS',
    bgFrom: '#31aadb',
    bgTo: '#1fd5cf',
  },
  {
    id: 4,
    title: 'English Grammar and Punctuation',
    desc: 'Cursus porta feugiat primis and ultrce risus auctor, tempus dolor feugiat felis lobortis.',
    category: 'GRAMMAR',
    bgFrom: '#f57c36',
    bgTo: '#f5be38',
  },
  {
    id: 5,
    title: 'Spoken English Mastery',
    desc: 'Cursus porta feugiat primis and ultrce risus auctor, tempus dolor feugiat felis lobortis.',
    category: 'SPOKEN',
    bgFrom: '#3cbe7a',
    bgTo: '#2dd4c4',
  },
  {
    id: 6,
    title: 'Study Abroad Preparation',
    desc: 'Cursus porta feugiat primis and ultrce risus auctor, tempus dolor feugiat felis lobortis.',
    category: 'ABROAD',
    bgFrom: '#f5a632',
    bgTo: '#f5c842',
  },
];

const VISIBLE = 4;

const CourseCard = ({ course }) => (
  <div className="bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col overflow-hidden">
    {/* Colored header image area */}
    <div
      className="relative flex items-end justify-start overflow-hidden"
      style={{
        height: '160px',
        background: `linear-gradient(135deg, ${course.bgFrom} 0%, ${course.bgTo} 100%)`,
      }}
    >
      {/* Decorative SVG illustration inside banner */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 160" preserveAspectRatio="xMidYMid slice">
        {/* Abstract blobs */}
        <circle cx="200" cy="30" r="55" fill="white" opacity="0.08"/>
        <circle cx="50" cy="130" r="40" fill="white" opacity="0.07"/>
        {/* Lines pattern */}
        {[0,1,2,3].map(i => (
          <line key={i} x1={30 + i*50} y1="0" x2={i*50} y2="160" stroke="white" strokeWidth="0.5" opacity="0.15"/>
        ))}
        {/* Book icon */}
        <rect x="85" y="45" width="70" height="80" rx="3" fill="white" opacity="0.15"/>
        <rect x="90" y="50" width="60" height="70" rx="2" fill="white" opacity="0.15"/>
        <line x1="120" y1="50" x2="120" y2="120" stroke="white" strokeWidth="1" opacity="0.3"/>
      </svg>
      <div className="absolute bottom-3 left-4 text-[10px] font-bold text-white/70 tracking-widest">
        {course.category}
      </div>
    </div>

    {/* Card content */}
    <div className="p-5 flex flex-col flex-1">
      <h3
        className="font-bold text-[#25345d] text-[13px] leading-snug mb-2 group-hover:text-[#ff4d15] transition-colors"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {course.title}
      </h3>
      <p className="text-gray-400 text-[11px] leading-relaxed flex-1">{course.desc}</p>
      <a
        href="#"
        className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase text-[#25345d] hover:text-[#ff4d15] transition-colors mt-3"
      >
        READ MORE ›
      </a>
    </div>
  </div>
);

const PopularCourses = () => {
  const [start, setStart] = useState(0);
  const maxIdx = courses.length - VISIBLE;
  const visible = courses.slice(start, start + VISIBLE);

  return (
    <section className="py-20 px-4 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#25345d] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Most Popular Courses
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis
            lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {visible.map(course => <CourseCard key={course.id} course={course} />)}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setStart(i => Math.max(i - 1, 0))}
            disabled={start === 0}
            className={`w-7 h-7 border border-gray-300 flex items-center justify-center transition-all text-gray-500 ${start === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:border-[#25345d] hover:text-[#25345d]'}`}
          >
            <ChevronLeft size={14} />
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setStart(i)}
                className={`h-1.5 rounded-full transition-all duration-200 ${i === start ? 'bg-[#ff4d15] w-5' : 'bg-gray-300 w-1.5'}`}
              />
            ))}
          </div>
          <button
            onClick={() => setStart(i => Math.min(i + 1, maxIdx))}
            disabled={start >= maxIdx}
            className={`w-7 h-7 border border-gray-300 flex items-center justify-center transition-all text-gray-500 ${start >= maxIdx ? 'opacity-30 cursor-not-allowed' : 'hover:border-[#25345d] hover:text-[#25345d]'}`}
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
