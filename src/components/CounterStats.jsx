import React from 'react';

const stats = [
  { value: '650+', label: 'Happy Students' },
  { value: '118', label: 'University Partners' },
  { value: '64+', label: 'Countries' },
  { value: '1969', label: 'Immigrations' },
];

const CounterStats = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden" style={{ background: '#1c2536' }}>
      {/* Background Statue of Liberty / Airplane overlay graphic */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `url('/assets/sydney_hero_bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) brightness(50%)',
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center text-white z-10">
        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Thousands Of People Choose Our Services
        </h2>

        {/* Red accent bar line */}
        <div className="w-96 max-w-full h-1 bg-[#ff4d15] mx-auto mb-16 rounded-full" />

        {/* 4 Stat Items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div
                className="text-4xl md:text-5xl font-black text-[#e2b76e] mb-2 tracking-tight"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {stat.value}
              </div>
              <div className="text-gray-300 text-xs font-semibold tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterStats;
