import React from 'react';

const services = [
  {
    id: 1,
    title: 'IELTS Coaching',
    desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
  },
  {
    id: 2,
    title: 'TOEFL Coaching',
    desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
  },
  {
    id: 3,
    title: 'SAT Prep Course',
    desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
  },
  {
    id: 4,
    title: 'ACT Prep Course',
    desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
  },
  {
    id: 5,
    title: 'GMAT Prep Course',
    desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
  },
  {
    id: 6,
    title: 'GRE Prep Course',
    desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
  },
];

const EducationServices = () => {
  return (
    <section className="py-20 px-4" style={{ background: '#f7f8fc' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl font-bold text-[#25345d] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            ImmiEx Education Services
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis
            lacinia risus interdum.
          </p>
        </div>

        {/* 6 Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 p-7 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200 group"
            >
              {/* Number accent */}
              <div
                className="text-4xl font-black mb-3 leading-none"
                style={{ color: 'rgba(37,52,93,0.07)', fontFamily: 'Poppins, sans-serif' }}
              >
                0{item.id}
              </div>
              <h3
                className="font-bold text-[#25345d] text-[15px] mb-3 group-hover:text-[#ff4d15] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">{item.desc}</p>
              <a
                href="#"
                className="text-[10px] font-bold text-gray-400 hover:text-[#ff4d15] transition-colors uppercase tracking-wider"
              >
                Read More ›
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationServices;
