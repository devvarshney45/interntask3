import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Academic Writing',
    desc: 'Cursus porta feugiat and primis ultrce risus auctor, tempus a dolor feugiat felis lobortis.',
    image: null,
    bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    emoji: '✍️',
    imageDesc: 'Students with books raised up celebrating',
  },
  {
    id: 2,
    title: 'English for Career Development',
    desc: 'Cursus porta feugiat and primis ultrce risus auctor, tempus a dolor feugiat felis lobortis.',
    image: null,
    bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    emoji: '💼',
    imageDesc: 'Group study session with laptops in library',
  },
  {
    id: 3,
    title: 'IELTS Course',
    desc: 'Cursus porta feugiat and primis ultrce risus auctor, tempus a dolor feugiat felis lobortis.',
    image: null,
    bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    emoji: '📝',
    imageDesc: 'Stack of books and notebooks on desk',
  },
  {
    id: 4,
    title: 'English Grammar and Punctuation',
    desc: 'Cursus porta feugiat and primis ultrce risus auctor, tempus a dolor feugiat felis lobortis.',
    image: null,
    bg: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    emoji: '📚',
    imageDesc: 'Excited woman student with sticky notes',
  },
  {
    id: 5,
    title: 'Spoken English Mastery',
    desc: 'Cursus porta feugiat and primis ultrce risus auctor, tempus a dolor feugiat felis lobortis.',
    image: null,
    bg: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    emoji: '🎤',
    imageDesc: 'Student presenting in front of class',
  },
  {
    id: 6,
    title: 'Study Abroad Preparation',
    desc: 'Cursus porta feugiat and primis ultrce risus auctor, tempus a dolor feugiat felis lobortis.',
    image: null,
    bg: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    emoji: '🌏',
    imageDesc: 'Student with globe and travel bags',
  },
];

const CARDS_VISIBLE = 4;

const CourseCard = ({ course }) => (
  <div className="bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col overflow-hidden rounded-sm">
    {/* Image */}
    <div
      className="w-full flex items-center justify-center relative overflow-hidden"
      style={{ height: '170px', background: course.bg }}
    >
      {/* SVG scene illustrations to match the image screenshots */}
      <svg viewBox="0 0 240 170" className="w-full h-full absolute inset-0">
        {course.id === 1 && (
          <>
            {/* Celebrating students */}
            <rect width="240" height="170" fill="url(#g1)"/>
            <defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#667eea"/><stop offset="1" stopColor="#764ba2"/></linearGradient></defs>
            {/* People silhouettes */}
            {[50, 90, 130, 170, 200].map((x, i) => (
              <g key={i}>
                <circle cx={x} cy={85 - i * 5} r="12" fill="white" opacity="0.7"/>
                <rect x={x - 10} y={97 - i * 5} width="20" height="35" rx="4" fill="white" opacity="0.5"/>
                {/* Raised arms with books */}
                <line x1={x - 8} y1={100 - i * 5} x2={x - 20} y2={70 - i * 5} stroke="white" strokeWidth="3" opacity="0.6" strokeLinecap="round"/>
                <rect x={x - 25} y={55 - i * 5} width="8" height="12" rx="1" fill="white" opacity="0.8"/>
              </g>
            ))}
          </>
        )}
        {course.id === 2 && (
          <>
            <rect width="240" height="170" fill="url(#g2)"/>
            <defs><linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#b06ab3"/><stop offset="1" stopColor="#4568dc"/></linearGradient></defs>
            {/* Library bookshelf */}
            <rect x="0" y="0" width="240" height="170" fill="url(#g2)" opacity="0.8"/>
            {[0,1,2,3,4,5,6].map(i => (
              <rect key={i} x={10 + i * 32} y="10" width="28" height="100" rx="2" fill="white" opacity={0.1 + i * 0.03}/>
            ))}
            {/* Group of people */}
            {[70, 110, 150].map((x, i) => (
              <g key={i}>
                <circle cx={x} cy={115} r="14" fill="white" opacity="0.75"/>
                <rect x={x - 13} y={129} width="26" height="35" rx="5" fill="white" opacity="0.55"/>
              </g>
            ))}
            {/* Laptop */}
            <rect x="85" y="148" width="70" height="6" rx="1" fill="white" opacity="0.5"/>
            <rect x="90" y="130" width="60" height="18" rx="2" fill="white" opacity="0.35"/>
          </>
        )}
        {course.id === 3 && (
          <>
            <rect width="240" height="170" fill="url(#g3)"/>
            <defs><linearGradient id="g3" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#4facfe"/><stop offset="1" stopColor="#00f2fe"/></linearGradient></defs>
            {/* Stack of books */}
            {[0,1,2,3,4].map(i => (
              <rect key={i} x={60} y={80 - i * 16} width={120 - i * 10} height="14" rx="2" fill="white" opacity={0.4 + i * 0.1}/>
            ))}
            {/* Coffee mug */}
            <rect x="150" y="90" width="30" height="35" rx="4" fill="white" opacity="0.6"/>
            <path d="M180 100 Q195 100 195 112 Q195 124 180 124" stroke="white" strokeWidth="3" fill="none" opacity="0.6"/>
          </>
        )}
        {course.id === 4 && (
          <>
            <rect width="240" height="170" fill="url(#g4)"/>
            <defs><linearGradient id="g4" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fa709a"/><stop offset="1" stopColor="#fee140"/></linearGradient></defs>
            {/* Excited woman with sticky notes */}
            <circle cx="100" cy="80" r="28" fill="white" opacity="0.7"/>
            <rect x="72" y="108" width="56" height="55" rx="8" fill="white" opacity="0.5"/>
            {/* Glasses */}
            <circle cx="92" cy="77" r="8" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2"/>
            <circle cx="108" cy="77" r="8" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2"/>
            <line x1="100" y1="77" x2="100" y2="77" stroke="rgba(0,0,0,0.3)" strokeWidth="2"/>
            {/* Sticky notes */}
            {[[150,30,'#fff176'],[175,55,'#b2ff59'],[145,70,'#ff80ab'],[170,90,'#80d8ff']].map(([x,y,c],i) => (
              <rect key={i} x={x} y={y} width="35" height="30" rx="2" fill={c} opacity="0.85"/>
            ))}
          </>
        )}
        {course.id === 5 && (
          <>
            <rect width="240" height="170" fill="url(#g5)"/>
            <defs><linearGradient id="g5" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#43e97b"/><stop offset="1" stopColor="#38f9d7"/></linearGradient></defs>
            {/* Microphone & speaker */}
            <circle cx="120" cy="85" r="35" fill="white" opacity="0.15"/>
            <rect x="112" y="55" width="16" height="30" rx="8" fill="white" opacity="0.7"/>
            <path d="M105 78 Q120 90 135 78" stroke="white" strokeWidth="2" fill="none" opacity="0.7"/>
            <line x1="120" y1="90" x2="120" y2="110" stroke="white" strokeWidth="3" opacity="0.7"/>
            <line x1="108" y1="110" x2="132" y2="110" stroke="white" strokeWidth="3" opacity="0.7"/>
          </>
        )}
        {course.id === 6 && (
          <>
            <rect width="240" height="170" fill="url(#g6)"/>
            <defs><linearGradient id="g6" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f7971e"/><stop offset="1" stopColor="#ffd200"/></linearGradient></defs>
            {/* Globe */}
            <circle cx="120" cy="85" r="45" fill="white" opacity="0.2" stroke="white" strokeWidth="2"/>
            <ellipse cx="120" cy="85" rx="20" ry="45" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5"/>
            <line x1="75" y1="85" x2="165" y2="85" stroke="white" strokeWidth="1.5" opacity="0.5"/>
            <ellipse cx="120" cy="85" rx="45" ry="15" fill="none" stroke="white" strokeWidth="1" opacity="0.4"/>
          </>
        )}
      </svg>
      
      {/* Emoji overlay */}
      <div className="absolute bottom-3 right-3 text-3xl opacity-60">{course.emoji}</div>
    </div>

    {/* Card content */}
    <div className="p-5 flex flex-col flex-1 gap-3">
      <h3
        className="font-semibold text-[#25345d] text-sm leading-snug group-hover:text-[#ff4d15] transition-colors"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {course.title}
      </h3>
      <p className="text-gray-500 text-xs leading-relaxed flex-1">{course.desc}</p>
      <a
        href="#"
        className="inline-flex items-center gap-1 text-xs font-bold tracking-wider uppercase text-[#25345d] hover:text-[#ff4d15] transition-colors mt-1"
      >
        READ MORE
        <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 5l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  </div>
);

const PopularCourses = () => {
  const [startIdx, setStartIdx] = useState(0);
  const maxIdx = courses.length - CARDS_VISIBLE;

  const prev = () => setStartIdx((i) => Math.max(i - 1, 0));
  const next = () => setStartIdx((i) => Math.min(i + 1, maxIdx));

  const visible = courses.slice(startIdx, startIdx + CARDS_VISIBLE);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#25345d] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Most Popular Courses
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis
            lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {visible.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            disabled={startIdx === 0}
            className={`w-8 h-8 border border-gray-300 flex items-center justify-center rounded-sm transition-all ${
              startIdx === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:border-[#25345d] hover:text-[#25345d] text-gray-500'
            }`}
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setStartIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === startIdx ? 'bg-[#ff4d15] w-4' : 'bg-gray-300 w-1.5'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            disabled={startIdx >= maxIdx}
            className={`w-8 h-8 border border-gray-300 flex items-center justify-center rounded-sm transition-all ${
              startIdx >= maxIdx ? 'opacity-30 cursor-not-allowed' : 'hover:border-[#25345d] hover:text-[#25345d] text-gray-500'
            }`}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
