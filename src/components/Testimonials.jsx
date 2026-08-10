import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

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
    text: 'Porta semper lacus cursus, feugiat primis augue suscipit egestas magna. The team at ImmiEx made my visa process completely stress-free. I got my Australia student visa within 3 weeks and now studying at Melbourne University.',
  },
  {
    name: 'James Chen',
    visa: 'UK Tier 4 Student Visa',
    avatar: null,
    initials: 'JC',
    color: '#7e3fa8',
    text: 'Incredible service! The consultants were always available to answer my questions. My UK student visa was approved on the first attempt. ImmiEx guided me through every step of the university selection and visa process.',
  },
];

const CARDS_PER_VIEW = 3;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = testimonials.length - CARDS_PER_VIEW;

  const prev = () => setCurrentIndex((i) => Math.max(i - 1, 0));
  const next = () => setCurrentIndex((i) => Math.min(i + 1, maxIndex));

  const visible = testimonials.slice(currentIndex, currentIndex + CARDS_PER_VIEW);

  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #f5f7fa 0%, #eef1f8 100%)',
      }}
    >
      {/* City skyline background watermark */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 200'%3E%3Crect x='0' y='120' width='30' height='80' fill='%2325345d'/%3E%3Crect x='40' y='90' width='20' height='110' fill='%2325345d'/%3E%3Crect x='70' y='110' width='25' height='90' fill='%2325345d'/%3E%3Crect x='110' y='60' width='40' height='140' fill='%2325345d'/%3E%3Crect x='160' y='80' width='30' height='120' fill='%2325345d'/%3E%3Crect x='200' y='100' width='20' height='100' fill='%2325345d'/%3E%3Crect x='230' y='50' width='50' height='150' fill='%2325345d'/%3E%3Crect x='290' y='70' width='35' height='130' fill='%2325345d'/%3E%3Crect x='340' y='90' width='25' height='110' fill='%2325345d'/%3E%3Crect x='380' y='40' width='60' height='160' fill='%2525345d'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#25345d] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Students Share Their Stories...
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis
            lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {visible.map((t, idx) => (
            <div
              key={t.name}
              className="bg-white rounded-sm shadow-md p-6 flex flex-col gap-4 border border-gray-100 hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Quote icon */}
              <Quote
                size={20}
                className="absolute top-4 right-4 opacity-10 text-[#25345d]"
                fill="#25345d"
              />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-gray-100">
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ background: t.color }}
                    >
                      {t.initials}
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-[#25345d] text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">({t.visa})</p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100" />

              {/* Text */}
              <p className="text-gray-500 text-xs leading-relaxed italic">
                {t.text}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className={`w-8 h-8 border border-gray-300 flex items-center justify-center rounded-sm transition-all duration-200 ${
              currentIndex === 0
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:border-[#25345d] hover:text-[#25345d] text-gray-500'
            }`}
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  i === currentIndex ? 'bg-[#ff4d15] w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className={`w-8 h-8 border border-gray-300 flex items-center justify-center rounded-sm transition-all duration-200 ${
              currentIndex >= maxIndex
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:border-[#25345d] hover:text-[#25345d] text-gray-500'
            }`}
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
