import React, { useState } from 'react';
import { X } from 'lucide-react';

const ProfessionalAdvisors = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-3">
              Professional Advisors
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#25345d] leading-tight mb-5"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Get guarantee success<br />with our advisors
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Semper lacus cursus porta, feugiat primis ligula risus auctor and rhoncus in ultrce ligula urus ipsum primis in cubilia augue vitae lacreet augue in cubilia augue egestas an ipsum turpis.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Cursus risus lacreet auctor, varius augue. Nulla color and sapien risus nec. luctus mauris donec diam sapien neque in cubilia an ligula quaerat ipsum volute turpis sodales sapien vitae donec ipsum.
            </p>

            <a
              href="#contact"
              className="inline-block border-2 border-[#25345d] text-[#25345d] font-bold text-[11px] tracking-[0.15em] uppercase px-7 py-3 hover:bg-[#25345d] hover:text-white transition-all duration-200"
            >
              DISCOVER MORE
            </a>
          </div>

          {/* Right: Image + Play */}
          <div className="relative flex justify-center">
            {/* Dot pattern */}
            <div
              className="absolute"
              style={{
                right: '-15px',
                bottom: '-15px',
                width: '160px',
                height: '160px',
                backgroundImage: 'radial-gradient(circle, #c8d4e8 1.5px, transparent 1.5px)',
                backgroundSize: '12px 12px',
                zIndex: 0,
              }}
            />

            {/* Stamp overlay */}
            <div className="absolute -top-5 -right-5 opacity-10 z-10">
              <svg viewBox="0 0 100 100" width="100" height="100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#25345d" strokeWidth="3" strokeDasharray="5 4"/>
                <circle cx="50" cy="50" r="38" fill="none" stroke="#25345d" strokeWidth="1.5"/>
                <text x="50" y="44" textAnchor="middle" fontSize="7.5" fill="#25345d" fontWeight="bold" letterSpacing="1.5">IMMIGRATION</text>
                <text x="50" y="55" textAnchor="middle" fontSize="7.5" fill="#25345d" fontWeight="bold" letterSpacing="1.5">CONSULTING</text>
                <text x="50" y="66" textAnchor="middle" fontSize="6.5" fill="#25345d" letterSpacing="1">SINCE 2005</text>
              </svg>
            </div>

            {/* Main photo */}
            <div
              className="relative rounded overflow-hidden shadow-2xl z-10"
              style={{ width: '370px', height: '320px' }}
            >
              <img
                src="/assets/couple_travel.png"
                alt="Students studying abroad"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
            </div>

            {/* Play button */}
            <button
              onClick={() => setVideoOpen(true)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-14 h-14 bg-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-200 flex items-center justify-center"
              aria-label="Play video"
            >
              <div className="w-12 h-12 rounded-full border-2 border-[#ff4d15] flex items-center justify-center">
                <div
                  className="ml-1"
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: '7px solid transparent',
                    borderBottom: '7px solid transparent',
                    borderLeft: '12px solid #ff4d15',
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative bg-black rounded overflow-hidden w-full max-w-3xl mx-4"
            style={{ aspectRatio: '16/9' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40"
              onClick={() => setVideoOpen(false)}
            >
              <X size={16} />
            </button>
            <div className="w-full h-full flex items-center justify-center text-white text-center px-8">
              <div>
                <div className="text-5xl mb-4">▶</div>
                <p className="text-lg font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  About EduVista – International Education Consulting
                </p>
                <p className="text-gray-400 text-sm mt-2">Video demo – add your YouTube embed URL here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProfessionalAdvisors;
