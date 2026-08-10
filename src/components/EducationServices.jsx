import React from 'react';

const services = [
  {
    title: 'University Selection',
    desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
    featured: false,
  },
  {
    title: 'Visa Assistance',
    desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
    featured: false,
  },
  {
    title: 'Coaching Centers',
    desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
    featured: true,
  },
  {
    title: 'Overseas Internship',
    desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
    featured: false,
  },
  {
    title: 'Health Insurance',
    desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
    featured: false,
  },
  {
    title: 'Travel Assistance',
    desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
    featured: false,
  },
];

const EducationServices = () => {
  return (
    <section className="py-20 px-4" style={{ background: '#f5f7fa' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#25345d] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            ImmiEx Education Services
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis
            lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 rounded-sm overflow-hidden shadow-sm">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`
                group relative p-8 border-gray-200
                ${idx < 3 ? 'border-b' : ''}
                ${idx % 3 !== 2 ? 'border-r' : ''}
                transition-all duration-300
                ${service.featured
                  ? 'bg-[#25345d] text-white'
                  : 'bg-white hover:bg-[#f0f4fb]'
                }
              `}
            >
              <h3
                className={`font-semibold text-base mb-3 leading-snug ${service.featured ? 'text-white' : 'text-[#25345d]'}`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {service.title}
              </h3>
              <p
                className={`text-xs leading-relaxed mb-6 ${service.featured ? 'text-gray-300' : 'text-gray-500'}`}
              >
                {service.desc}
              </p>
              <a
                href="#"
                className={`
                  inline-flex items-center gap-1 text-xs font-bold tracking-wider uppercase
                  transition-colors duration-200
                  ${service.featured
                    ? 'text-[#ff9c7e] hover:text-white'
                    : 'text-[#25345d] hover:text-[#ff4d15]'
                  }
                `}
              >
                READ MORE
                <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 5l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Featured glow */}
              {service.featured && (
                <div className="absolute top-0 left-0 w-full h-1 bg-[#ff4d15]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationServices;
