import React from 'react';

const services = [
  {
    title: 'Expert Educational Guidance',
    desc: 'Profile evaluation, course & university matching, credit transfers, and pathways guidance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ff4d15" strokeWidth="2" className="w-8 h-8">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Scholarship Assistance',
    desc: 'Merit-based and need-based global scholarship searches, matching, and application support.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ff4d15" strokeWidth="2" className="w-8 h-8">
        <rect x="2" y="7" width="20" height="14" rx="2" strokeLinecap="round" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Visa Processing Support',
    desc: 'Visa documentation assistance, interview preparation, mock interviews, and submission guidance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ff4d15" strokeWidth="2" className="w-8 h-8">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Document Verification & Attestation',
    desc: 'Academic document review, transcript attestation guidance, and Statement of Purpose (SOP) guidance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ff4d15" strokeWidth="2" className="w-8 h-8">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
      </svg>
    ),
  },
  {
    title: 'IELTS & Language Preparation',
    desc: 'Coaching for IELTS, TOEFL, PTE, Duolingo English Test, and spoken English proficiency.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ff4d15" strokeWidth="2" className="w-8 h-8">
        <rect x="3" y="4" width="18" height="16" rx="2" strokeLinecap="round" />
        <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Pre-Departure & Post-Arrival Support',
    desc: 'Accommodation guidance, airport pickup coordination, pre-departure briefings, and health insurance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ff4d15" strokeWidth="2" className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" strokeLinecap="round" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
      </svg>
    ),
  },
];

const ImmiExServices = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#25345d] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            EduVista Core Consultancy Services
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            Eduvista International provides comprehensive support services at every stage of the student’s study abroad journey, ensuring a smooth transition to foreign academic life.
          </p>
        </div>

        {/* 6 Services Grid (2 rows x 3 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-sm border border-gray-100 shadow-xs hover:shadow-md transition-shadow duration-300 flex items-start gap-4 group"
            >
              <div className="p-2 bg-orange-50 rounded-sm shrink-0 group-hover:bg-[#ff4d15] group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <div>
                <h3
                  className="font-bold text-[#25345d] text-base mb-1 group-hover:text-[#ff4d15] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImmiExServices;
