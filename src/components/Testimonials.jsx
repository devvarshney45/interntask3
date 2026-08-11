import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Evelyn W.',
    visa: 'Canada Students Visa',
    avatar: '/assets/testimonial_evelyn.png',
    initials: 'EW',
    color: '#25345d',
    text: 'Sapien sem accumsan vitae at purus diam integer congue magna sodales. Magna vitae and aenean mauris tempor augue in cubilia lacreet magna suscipit magna ipsum vitae purus ipsum primis cubilia lacreet and augue ultrce ligula egestas magna suscipit lectus gestas at magna viverra dolor neque gravida.',
  },
  {
    name: 'Leslie Serpas',
    visa: 'Singapore PR Visa',
    avatar: '/assets/testimonial_leslie.png',
    initials: 'LS',
    color: '#4a7eb5',
    text: 'Etiam sapien gravida and donec sagittis congue. Augue cubilia lacreet at magna suscipit egestas magna an ipsum vitae and purus ipsum primis undo cubilia lacreet augue ultrce ligula and egestas suscipit magna lectus gestas magna as viverra neque est gravida.',
  },
  {
    name: 'Dan Hodges',
    visa: 'USA Students Visa',
    avatar: null,
    initials: 'DH',
    color: '#ff4d15',
    text: 'An augue in cubilia lacreet undo magna suscipit egestas magna ipsum egestas vitae purus ipsum primis cubilia lacreet augue ultrce ligula egestas and magna suscipit lectus gestas magna a viverra dolor neque est gravida.',
  },
  {
    name: 'Maria Santos',
    visa: 'Australia Student Visa',
    avatar: null,
    initials: 'MS',
    color: '#2e7d52',
    text: 'Porta semper lacus cursus, feugiat primis augue suscipit egestas magna. The team at EduVista made my visa process completely stress-free. I got my Australia student visa within 3 weeks and now studying at Melbourne University.',
  },
  {
    name: 'James Chen',
    visa: 'UK Tier 4 Student Visa',
    avatar: null,
    initials: 'JC',
    color: '#7e3fa8',
    text: 'Incredible service! The consultants were always available to answer my questions. My UK student visa was approved on the first attempt. EduVista guided me through every step of the university selection and visa process.',
  },
];

const CARDS_PER_VIEW = 3;

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const maxIdx = testimonials.length - CARDS_PER_VIEW;
  const visible = testimonials.slice(idx, idx + CARDS_PER_VIEW);

  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
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

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#25345d] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Students Share Their Stories...
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis
            lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {visible.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-sm shadow-md p-6 flex flex-col gap-4 border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Large quote mark */}
              <div
                className="absolute top-5 right-5 text-5xl leading-none font-serif opacity-[0.06] text-[#25345d]"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                "
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-gray-100">
                  {t.avatar ? (
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover object-top"/>
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-white font-bold text-xs"
                      style={{ background: t.color }}
                    >
                      {t.initials}
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-bold text-[#25345d] text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {t.name}
                  </p>
                  <p className="text-[11px] text-gray-400">({t.visa})</p>
                </div>
              </div>

              <div className="border-t border-gray-100" />

              <p className="text-gray-500 text-[12px] leading-relaxed italic">
                {t.text}
              </p>

              {/* Rating stars */}
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => (
                  <span key={s} className="text-yellow-400 text-xs">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setIdx(i => Math.max(i - 1, 0))}
            disabled={idx === 0}
            className={`w-8 h-8 border border-gray-300 flex items-center justify-center transition-all ${idx === 0 ? 'opacity-30 cursor-not-allowed text-gray-400' : 'hover:border-[#25345d] hover:text-[#25345d] text-gray-500'}`}
          >
            <ChevronLeft size={15}/>
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-200 ${i === idx ? 'bg-[#ff4d15] w-5' : 'bg-gray-300 w-1.5'}`}
              />
            ))}
          </div>
          <button
            onClick={() => setIdx(i => Math.min(i + 1, maxIdx))}
            disabled={idx >= maxIdx}
            className={`w-8 h-8 border border-gray-300 flex items-center justify-center transition-all ${idx >= maxIdx ? 'opacity-30 cursor-not-allowed text-gray-400' : 'hover:border-[#25345d] hover:text-[#25345d] text-gray-500'}`}
          >
            <ChevronRight size={15}/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
