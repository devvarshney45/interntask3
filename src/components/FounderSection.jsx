import React from 'react';
import { CheckCircle2, Quote } from 'lucide-react';

const coreValues = [
  { label: 'Integrity', desc: 'Honest, transparent, and ethical in every interaction.' },
  { label: 'Excellence', desc: 'Delivering quality guidance and outstanding outcomes.' },
  { label: 'Commitment', desc: 'Dedicated to every student\'s success journey.' },
  { label: 'Innovation', desc: 'Embracing modern, forward-thinking education solutions.' },
];

const FounderSection = () => {
  return (
    <section className="py-20 px-4 bg-[#f8f9fc] overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <div className="text-center mb-12">
          <span className="text-[#ff4d15] text-[11px] font-bold uppercase tracking-[0.25em]">
            LEADERSHIP & VISION
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#25345d] mt-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Meet Our Founder
          </h2>
        </div>

        {/* Main card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12">

          {/* Left: photo panel */}
          <div className="lg:col-span-4 relative min-h-[420px] bg-[#25345d]">
            <img
              src="/assets/saswati_rakshit.jpeg"
              alt="Saswati Rakshit – Managing Director"
              className="w-full h-full object-cover object-top absolute inset-0"
              style={{ minHeight: '420px' }}
            />
            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10" />

            {/* Bottom name badge */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#25345d]/90 px-6 py-4">
              <p
                className="text-white font-bold text-lg leading-tight"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Saswati Rakshit
              </p>
              <p className="text-[#ff9c7e] text-[11px] uppercase tracking-widest font-medium mt-0.5">
                Managing Director — EduVista International
              </p>
            </div>
          </div>

          {/* Right: Content panel */}
          <div className="lg:col-span-8 p-10 flex flex-col justify-center gap-7">

            {/* Quote */}
            <div className="relative">
              <Quote size={28} className="text-[#ff4d15] opacity-30 absolute -top-2 -left-1" />
              <blockquote
                className="text-gray-600 text-[15px] leading-relaxed pl-6 italic"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                "Transforming education through expert guidance, innovation, and impactful solutions that empower institutions and learners to unlock their full potential and achieve global success."
              </blockquote>
            </div>

            {/* Mission & Vision row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border-l-4 border-[#ff4d15] pl-4 py-1">
                <h4
                  className="text-[#25345d] font-bold text-sm mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Our Mission
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  To provide transformative educational consultancy that empowers every student to reach their global academic and career aspirations.
                </p>
              </div>
              <div className="border-l-4 border-[#25345d] pl-4 py-1">
                <h4
                  className="text-[#25345d] font-bold text-sm mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Our Vision
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Creating a future where quality education and innovation empower every learner and institution to achieve global success.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h4
                className="text-[#25345d] font-bold text-sm mb-3"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Core Values
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {coreValues.map((v) => (
                  <div key={v.label} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[#ff4d15] mt-0.5 shrink-0" />
                    <div>
                      <span className="text-[#25345d] font-semibold text-xs">{v.label}: </span>
                      <span className="text-gray-500 text-xs">{v.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact badge */}
            <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-dashed border-gray-200">
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Email</span>
                <a href="mailto:info@eduvastaint.com" className="text-[#ff4d15] text-xs font-semibold hover:underline">
                  info@eduvastaint.com
                </a>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Phone</span>
                <span className="text-[#25345d] text-xs font-semibold">+91 8282002268</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Location</span>
                <span className="text-[#25345d] text-xs font-semibold">Kolkata, India</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
