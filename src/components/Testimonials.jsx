import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Evelyn W.',
    visa: 'Canada Students Visa',
    avatar: '/assets/testimonial_evelyn.png',
    initials: 'EW',
    color: '#25345d',
    text: 'EduVista made my Canada student visa process completely smooth. Their team guided me through every step — from university selection to visa documentation. I couldn\'t have done it without them!',
  },
  {
    name: 'Leslie Serpas',
    visa: 'Singapore PR Visa',
    avatar: '/assets/testimonial_leslie.png',
    initials: 'LS',
    color: '#4a7eb5',
    text: 'Incredible consultancy! The team at EduVista is highly professional, always available, and gave me very honest advice. My Singapore PR was approved on the first attempt thanks to their expert guidance.',
  },
  {
    name: 'Dan Hodges',
    visa: 'USA Students Visa',
    avatar: null,
    initials: 'DH',
    color: '#ff4d15',
    text: 'The scholarship assistance I received from EduVista was outstanding. They found scholarships I never knew existed and helped me apply successfully. Now I\'m studying in the USA with 60% tuition covered!',
  },
  {
    name: 'Maria Santos',
    visa: 'Australia Student Visa',
    avatar: null,
    initials: 'MS',
    color: '#2e7d52',
    text: 'EduVista\'s pre-departure briefing was so thorough — from accommodation to local transport, banking to student registration. I felt fully prepared when I landed in Melbourne. Truly exceptional service!',
  },
  {
    name: 'James Chen',
    visa: 'UK Tier 4 Student Visa',
    avatar: null,
    initials: 'JC',
    color: '#7e3fa8',
    text: 'The team was always available to answer my questions at any hour. My UK student visa was approved first attempt. EduVista guided me through every step of the university selection and visa process.',
  },
  {
    name: 'Priya Sharma',
    visa: 'Germany Student Visa',
    avatar: null,
    initials: 'PS',
    color: '#c0392b',
    text: 'I had a very complex case but EduVista handled everything with ease. Their knowledge of German university requirements and visa regulations is impeccable. I am now pursuing my Masters in Berlin!',
  },
];

// Duplicate for seamless infinite loop
const allTestimonials = [...testimonials, ...testimonials];

const CARD_W = 360;
const GAP = 24;
const STEP = 1.4; // faster than courses – ~84px/sec @ 60fps

const Testimonials = () => {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const isPausedRef = useRef(false);
  const singleSetWidth = testimonials.length * (CARD_W + GAP);

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

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #f5f7fc 0%, #edf0f8 100%)' }}
    >
      {/* City skyline watermark */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-[0.025] pointer-events-none">
        <svg viewBox="0 0 1200 130" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
          {[
            [0,60,28,70],[35,40,18,90],[60,55,22,75],[90,30,38,100],[135,50,28,80],[170,55,22,75],[200,25,45,105],[255,45,32,85],[295,60,24,70],[330,35,40,95],[380,55,28,75],[415,60,20,70]
          ].map(([x,y,w,h],i) => (
            <rect key={i} x={x} y={y} width={w} height={h} fill="#25345d"/>
          ))}
        </svg>
      </div>

      <div className="relative">
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#25345d] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Students Share Their Stories...
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
            Hear directly from our students — their journeys, successes, and experiences with EduVista International.
          </p>
        </div>

        {/* Infinite scrolling testimonials */}
        <div
          className="w-full overflow-hidden relative"
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { isPausedRef.current = false; }}
        >
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{ width: '100px', background: 'linear-gradient(to right, #f0f3fa, transparent)' }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{ width: '100px', background: 'linear-gradient(to left, #edf0f8, transparent)' }}
          />

          {/* Track */}
          <div
            ref={trackRef}
            style={{
              display: 'flex',
              gap: `${GAP}px`,
              willChange: 'transform',
              paddingLeft: '40px',
              paddingRight: '40px',
              alignItems: 'stretch',
            }}
          >
            {allTestimonials.map((t, idx) => (
              <div
                key={`${t.name}-${idx}`}
                style={{
                  minWidth: `${CARD_W}px`,
                  maxWidth: `${CARD_W}px`,
                  flexShrink: 0,
                  background: '#fff',
                  border: '1px solid #e8edf5',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  position: 'relative',
                }}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                {/* Quote mark */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '20px',
                    fontSize: '52px',
                    lineHeight: 1,
                    fontFamily: 'Georgia, serif',
                    opacity: 0.06,
                    color: '#25345d',
                  }}
                >
                  "
                </div>

                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      flexShrink: 0,
                      border: '2px solid #e8edf5',
                    }}
                  >
                    {t.avatar ? (
                      <img src={t.avatar} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                    ) : (
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          background: t.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          fontWeight: '700',
                          fontSize: '13px',
                        }}
                      >
                        {t.initials}
                      </div>
                    )}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', color: '#25345d', fontSize: '14px' }}>
                      {t.name}
                    </p>
                    <p style={{ fontSize: '11px', color: '#999' }}>({t.visa})</p>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #f0f0f0' }} />

                <p style={{ color: '#666', fontSize: '12.5px', lineHeight: '1.75', fontStyle: 'italic', flex: 1 }}>
                  {t.text}
                </p>

                {/* Stars */}
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[1,2,3,4,5].map(s => (
                    <span key={s} style={{ color: '#f5a623', fontSize: '14px' }}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
