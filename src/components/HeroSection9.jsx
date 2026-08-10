import React from 'react';

const countryCards = [
  {
    id: 1,
    city: 'London',
    country: 'United Kingdom',
    flag: '🇬🇧',
    image: '/assets/advisor_laptop.png',
  },
  {
    id: 2,
    city: 'Berlin',
    country: 'Germany',
    flag: '🇩🇪',
    image: '/assets/advisors_table.png',
  },
  {
    id: 3,
    city: 'Paris',
    country: 'France',
    flag: '🇫🇷',
    image: '/assets/couple_travel.png',
  },
];

const HeroSection9 = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Banner */}
      <div
        className="relative w-full flex items-center justify-center py-28 px-4"
        style={{
          minHeight: '480px',
          backgroundImage: `url('/assets/advisors_table.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-[#162039]/85" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white flex flex-col items-center">
          <p className="text-[#ff4d15] text-xs font-bold tracking-widest uppercase mb-3">
            IMMIGRATION &amp; VISA CONSULTANCY
          </p>
          <h1
            className="font-black text-3xl sm:text-5xl md:text-6xl uppercase leading-tight mb-5 tracking-wide text-white"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            IMMIGRATION AND VISA CONSULTATION
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl leading-relaxed mb-8">
            Feugiat primis ligula risus auctor egestas augue mauri viverra.
          </p>
        </div>
      </div>

      {/* 3 Country Card Banners Overlaying Bottom */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 -mt-16 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {countryCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-sm overflow-hidden border border-gray-100 shadow-xl group flex flex-col relative h-36 justify-end p-4 text-white"
            >
              {/* Image background */}
              <img
                src={card.image}
                alt={card.city}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Tint Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Text */}
              <div className="relative z-10">
                <span className="text-sm font-semibold tracking-wider flex items-center gap-1.5">
                  <span>{card.flag}</span>
                  <span>{card.city}</span>
                </span>
                <span className="text-[10px] text-gray-300 block">{card.country}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection9;
