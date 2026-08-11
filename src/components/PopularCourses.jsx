import React, { useEffect, useRef, useState } from 'react';

const courses = [
  {
    id: 1,
    title: 'University Admissions Counseling',
    desc: 'Expert guidance on selecting the right university and program tailored to your academic profile and career goals.',
    img: '/assets/advisor_laptop.png',
    tag: 'ADMISSIONS',
  },
  {
    id: 2,
    title: 'Student Visa Documentation',
    desc: 'Complete assistance with visa application documentation, financial proofs, and interview preparation support.',
    img: '/assets/advisors_table.png',
    tag: 'VISA SUPPORT',
  },
  {
    id: 3,
    title: 'IELTS & English Proficiency',
    desc: 'Preparation guidance for IELTS and other English language proficiency requirements for top universities worldwide.',
    img: '/assets/couple_travel.png',
    tag: 'LANGUAGE',
  },
  {
    id: 4,
    title: 'Scholarship Assistance',
    desc: 'Comprehensive scholarship search, eligibility assessment, and application support to minimize tuition cost.',
    img: '/assets/sydney_hero_bg.png',
    tag: 'SCHOLARSHIP',
  },
  {
    id: 5,
    title: 'Career Development Planning',
    desc: 'Career counseling and planning sessions to map your study path to your long-term professional aspirations.',
    img: '/assets/advisor_laptop.png',
    tag: 'CAREER',
  },
  {
    id: 6,
    title: 'Pre-Departure Briefing',
    desc: 'Comprehensive pre-departure sessions covering accommodation, culture, transport, and student life abroad.',
    img: '/assets/couple_travel.png',
    tag: 'PRE-DEPARTURE',
  },
  {
    id: 7,
    title: 'SOP & Application Writing',
    desc: 'Professional guidance on crafting compelling Statements of Purpose, recommendation letters, and application essays.',
    img: '/assets/advisors_table.png',
    tag: 'DOCUMENTATION',
  },
  {
    id: 8,
    title: 'Post-Arrival Support',
    desc: 'Ongoing support after landing — from bank account setup and local registration to academic induction guidance.',
    img: '/assets/sydney_hero_bg.png',
    tag: 'POST-ARRIVAL',
  },
];

const allCourses = [...courses, ...courses];

const PopularCourses = () => {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const isPausedRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);

  const CARD_W = 260;
  const GAP = 24;
  const STEP = 0.7;
  const singleSetWidth = courses.length * (CARD_W + GAP);

  useEffect(() => {
    const animate = () => {
      if (!isPausedRef.current) {
        posRef.current += STEP;
        if (posRef.current >= singleSetWidth) {
          posRef.current = 0;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [singleSetWidth]);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
    setIsPaused(true);
  };
  const handleMouseLeave = () => {
    isPausedRef.current = false;
    setIsPaused(false);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="text-center px-4 mb-12">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#25345d] mb-3"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Our Most Popular Services
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
          From university admissions and visa support to career planning and pre-departure briefings —
          EduVista International guides you through every step of your global education journey.
        </p>
      </div>

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{ width: '80px', background: 'linear-gradient(to right, white, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{ width: '80px', background: 'linear-gradient(to left, white, transparent)' }}
        />

        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: `${GAP}px`,
            willChange: 'transform',
            paddingLeft: '40px',
            paddingRight: '40px',
          }}
        >
          {allCourses.map((course, idx) => (
            <div
              key={`${course.id}-${idx}`}
              style={{
                minWidth: `${CARD_W}px`,
                maxWidth: `${CARD_W}px`,
                flexShrink: 0,
                border: '1px solid #e8e8e8',
                background: '#fff',
              }}
              className="hover:shadow-lg transition-shadow duration-200 group"
            >
              <div style={{ height: '170px', overflow: 'hidden' }}>
                <img
                  src={course.img}
                  alt={course.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div style={{ padding: '18px 18px 20px' }}>
                <span
                  style={{
                    fontSize: '9px',
                    fontWeight: '700',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#ff4d15',
                    display: 'block',
                    marginBottom: '6px',
                  }}
                >
                  {course.tag}
                </span>
                <h3
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '700',
                    fontSize: '14px',
                    color: '#25345d',
                    lineHeight: '1.4',
                    marginBottom: '8px',
                  }}
                >
                  {course.title}
                </h3>
                <p style={{ fontSize: '12px', color: '#888', lineHeight: '1.7', marginBottom: '12px' }}>
                  {course.desc}
                </p>
                <a
                  href="#"
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#25345d',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    textDecoration: 'none',
                  }}
                  className="hover:text-[#ff4d15] transition-colors"
                >
                  READ MORE »
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
