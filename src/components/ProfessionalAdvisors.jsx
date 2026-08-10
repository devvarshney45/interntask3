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
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              Professional Advisors
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#25345d] leading-tight mb-6"
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
              className="inline-block border-2 border-[#25345d] text-[#25345d] font-bold text-xs tracking-widest uppercase px-7 py-3 hover:bg-[#25345d] hover:text-white transition-all duration-200"
            >
              DISCOVER MORE
            </a>
          </div>

          {/* Right: Image + Video Play */}
          <div className="relative flex justify-center">
            {/* Dotted background pattern */}
            <div
              className="absolute"
              style={{
                right: '-20px',
                bottom: '-20px',
                width: '180px',
                height: '180px',
                backgroundImage: 'radial-gradient(circle, #d0d9e8 1.5px, transparent 1.5px)',
                backgroundSize: '12px 12px',
                opacity: 0.8,
                zIndex: 0,
              }}
            />

            {/* Stamp overlay graphic */}
            <div
              className="absolute -top-4 -right-8 opacity-10 text-[#25345d]"
              style={{ zIndex: 1 }}
            >
              <svg viewBox="0 0 100 100" width="120" height="120">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#25345d" strokeWidth="3" strokeDasharray="6 4" />
                <circle cx="50" cy="50" r="38" fill="none" stroke="#25345d" strokeWidth="1.5" />
                <text x="50" y="44" textAnchor="middle" fontSize="8" fill="#25345d" fontWeight="bold" letterSpacing="2">IMMIGRATION</text>
                <text x="50" y="55" textAnchor="middle" fontSize="8" fill="#25345d" fontWeight="bold" letterSpacing="2">CONSULTING</text>
                <text x="50" y="66" textAnchor="middle" fontSize="7" fill="#25345d" letterSpacing="1">SINCE 2005</text>
              </svg>
            </div>

            {/* Main photo container */}
            <div
              className="relative rounded-lg overflow-hidden shadow-xl z-10"
              style={{ width: '340px', height: '310px' }}
            >
              <img
                src="/assets/couple_travel.png"
                alt="Happy advisors"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Play Button */}
            <button
              onClick={() => setVideoOpen(true)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 z-20 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-200 group"
              aria-label="Play video"
            >
              <div className="w-14 h-14 rounded-full border-2 border-[#ff4d15] flex items-center justify-center">
                <div
                  className="ml-1"
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: '8px solid transparent',
                    borderBottom: '8px solid transparent',
                    borderLeft: '14px solid #ff4d15',
                  }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-200 mt-20" />
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative bg-black rounded-lg overflow-hidden w-full max-w-3xl mx-4"
            style={{ aspectRatio: '16/9' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
              onClick={() => setVideoOpen(false)}
            >
              <X size={16} />
            </button>
            <div className="w-full h-full flex items-center justify-center text-white text-center px-8">
              <div>
                <div className="text-5xl mb-4">▶</div>
                <p className="text-lg font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  About ImmiEx – Immigration Consulting
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
