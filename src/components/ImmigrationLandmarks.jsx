import React from 'react';

const landmarkCards = [
  {
    id: 'canada',
    country: 'Canada',
    flag: '🇨🇦',
    image: '/assets/sydney_hero_bg.png',
    desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
  },
  {
    id: 'australia',
    country: 'Australia',
    flag: '🇦🇺',
    image: '/assets/sydney_hero_bg.png',
    desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
  },
  {
    id: 'singapore',
    country: 'Singapore',
    flag: '🇸🇬',
    image: '/assets/advisors_table.png',
    desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
  },
  {
    id: 'uk',
    country: 'United Kingdom',
    flag: '🇬🇧',
    image: '/assets/advisor_laptop.png',
    desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat',
  },
];

const ImmigrationLandmarks = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#25345d] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Immigration Opportunities
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis
            lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {landmarkCards.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-sm overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col"
            >
              {/* Photo Banner */}
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.country}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Flag Tag at bottom left */}
                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded flex items-center gap-1.5 font-semibold">
                  <span>{item.flag}</span>
                  <span>{item.country}</span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{item.desc}</p>
                <a
                  href="#"
                  className="text-xs font-bold text-[#25345d] group-hover:text-[#ff4d15] transition-colors inline-block"
                >
                  Read More ▸
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImmigrationLandmarks;
