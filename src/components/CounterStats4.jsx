import React from 'react';

const stats4 = [
  { value: '360+', label: 'Happy Students' },
  { value: '58', label: 'University Partners' },
  { value: '26', label: 'Countries' },
  { value: '427', label: 'Immigrations' },
];

const CounterStats4 = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden" style={{ background: '#172036' }}>
      {/* Background USA flag watermark */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `url('/assets/sydney_hero_bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) brightness(40%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats4.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div
                className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight"
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

export default CounterStats4;
