import React from 'react';

const services = [
  {
    title: 'Expert Educational Guidance',
    desc: 'Profile evaluation, course & university matching, credit transfers, and pathways guidance.',
  },
  {
    title: 'Scholarship Assistance',
    desc: 'Merit-based and need-based global scholarship searches, matching, and application support.',
  },
  {
    title: 'Visa Processing Support',
    desc: 'Visa documentation assistance, interview preparation, mock interviews, and submission guidance.',
  },
  {
    title: 'Document Verification & Attestation',
    desc: 'Academic document review, transcript attestation guidance, and Statement of Purpose (SOP) guidance.',
  },
  {
    title: 'IELTS & Language Preparation',
    desc: 'Coaching for IELTS, TOEFL, PTE, Duolingo English Test, and spoken English proficiency.',
  },
  {
    title: 'Pre-Departure & Post-Arrival Support',
    desc: 'Accommodation guidance, airport pickup coordination, pre-departure briefings, and health insurance.',
  },
  {
    title: 'University Admissions Counseling',
    desc: 'End-to-end university application support, shortlisting, and admissions strategy for top institutions.',
  },
  {
    title: 'Career Development Planning',
    desc: 'Career counseling and planning sessions to map your study path to your long-term professional aspirations.',
  },
  {
    title: 'SOP & Application Writing',
    desc: 'Professional guidance on crafting compelling Statements of Purpose, recommendation letters, and essays.',
  },
];

const ImmiExServices = () => {
  return (
    <section className="py-20 px-4 bg-[#f7f8fa]">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-semibold text-[#25345d] mb-5"
            style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.01em' }}
          >
            EduVista Core Consultancy Services
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis
            lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa.
          </p>
        </div>

        {/* Bordered table-style grid — 3 columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            border: '1px solid #e0e0e0',
            background: '#fff',
          }}
        >
          {services.map((item, idx) => {
            const col = idx % 3;
            const row = Math.floor(idx / 3);
            const totalRows = Math.ceil(services.length / 3);
            const isLastRow = row === totalRows - 1;
            const isLastCol = col === 2;

            return (
              <div
                key={idx}
                style={{
                  padding: '28px 30px 24px',
                  borderRight: isLastCol ? 'none' : '1px solid #e0e0e0',
                  borderBottom: isLastRow ? 'none' : '1px solid #e0e0e0',
                  background: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '160px',
                  cursor: 'pointer',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#f9f9fb'}
                onMouseLeave={e => e.currentTarget.style.background = '#fff'}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '700',
                      fontSize: '15px',
                      color: '#25345d',
                      marginBottom: '10px',
                      lineHeight: '1.35',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#888',
                      lineHeight: '1.7',
                      marginBottom: '18px',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
                <a
                  href="#"
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    color: '#555',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#ff4d15'}
                  onMouseLeave={e => e.currentTarget.style.color = '#555'}
                >
                  Read More <span style={{ fontSize: '13px' }}>›</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImmiExServices;
