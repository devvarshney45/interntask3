import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

const ProfessionalAdvisors = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  const whyChoose = [
    'Professional and experienced consultancy services',
    'Personalized Student Counseling',
    'Transparent & Ethical Services',
    'Scholarship Assistance',
    'Strong University Partnerships',
    'End-to-End Application Support',
    'Visa Success Guidance',
    'Pre-Departure Briefing',
    'Post-Arrival Assistance',
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-3">
              Why Choose EduVista International
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#25345d] leading-tight mb-5"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Get guaranteed success<br />with our expert advisors
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Our team brings together experienced counselors who provide honest, student-first guidance, ensuring every applicant finds a pathway suited to their academic goals, budget, and career aspirations.
            </p>

            <ul className="space-y-2 mb-8">
              {whyChoose.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle2 size={15} className="text-[#ff4d15] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-block border-2 border-[#25345d] text-[#25345d] font-bold text-[11px] tracking-[0.15em] uppercase px-7 py-3 hover:bg-[#25345d] hover:text-white transition-all duration-200"
            >
              DISCOVER MORE
            </a>
          </div>

          {/* Right: Director Photo + Play */}
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
                <text x="50" y="44" textAnchor="middle" fontSize="7.5" fill="#25345d" fontWeight="bold" letterSpacing="1.5">EDUCATION</text>
                <text x="50" y="55" textAnchor="middle" fontSize="7.5" fill="#25345d" fontWeight="bold" letterSpacing="1.5">CONSULTING</text>
                <text x="50" y="66" textAnchor="middle" fontSize="6.5" fill="#25345d" letterSpacing="1">KOLKATA</text>
              </svg>
            </div>

            {/* Main director photo */}
            <div
              className="relative rounded-lg overflow-hidden shadow-2xl z-10"
              style={{ width: '370px', height: '420px' }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[#25345d] to-[#1b2646] flex items-center justify-center">
                <img
                  src="/assets/saswati_rakshit.jpeg"
                  alt="Saswati Rakshit – Managing Director"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
                <div className="absolute inset-0 flex-col items-center justify-center text-white hidden" style={{display: 'none'}}>
                  <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-4xl font-bold mb-3">SR</div>
                  <p className="text-lg font-bold">Saswati Rakshit</p>
                  <p className="text-sm text-gray-300">Managing Director</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Name card at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#25345d]/90 px-5 py-3">
                <p className="text-white font-bold text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>Saswati Rakshit</p>
                <p className="text-[#ff9c7e] text-[11px] tracking-wider uppercase">Managing Director</p>
              </div>
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
                  About EduVista International – Your Gateway to Global Education
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
