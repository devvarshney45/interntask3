import React from 'react';
import { ChevronRight } from 'lucide-react';

const WorldMapFinder = () => {
  const cities = ['Canberra', 'Sydney', 'Adelaide', 'Melbourne', 'Brisbane', 'Darwin'];
  const practiceAreas = [
    'University Selection',
    'Visa Assistance',
    'Overseas Internship',
    'Health Insurance',
    'Tourist & Visitor Visa',
    'Travel Assistance',
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-14">
          <h2
            className="text-3.5xl font-extrabold text-[#25345d] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Find a consultant by:
          </h2>
          <p className="text-gray-400 text-xs max-w-xl leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis lacinia
            risus interdum auctor id viverra dolor iaculis luctus placerat and massa.
          </p>
        </div>

        {/* 3 Columns Layout matching mockup */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

          {/* Col 1: Cities (md:col-span-3) */}
          <div className="md:col-span-3">
            <h3
              className="font-bold text-[#25345d] text-sm mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              City:
            </h3>
            <ul className="space-y-3.5">
              {cities.map((city) => (
                <li key={city}>
                  <a
                    href="#"
                    className="text-gray-500 text-xs hover:text-[#ff4d15] transition-colors duration-150 block"
                  >
                    {city}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 mt-8 text-xs font-bold text-[#25345d] hover:text-[#ff4d15] transition-colors"
            >
              View All <ChevronRight size={14} className="text-[#ff4d15] w-3 h-3" />
            </a>
          </div>

          {/* Col 2: Practice Area (md:col-span-3) */}
          <div className="md:col-span-3">
            <h3
              className="font-bold text-[#25345d] text-sm mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Practice Area:
            </h3>
            <ul className="space-y-3.5">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <a
                    href="#"
                    className="text-gray-500 text-xs hover:text-[#ff4d15] transition-colors duration-150 block"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 mt-8 text-xs font-bold text-[#25345d] hover:text-[#ff4d15] transition-colors"
            >
              View All <ChevronRight size={14} className="text-[#ff4d15] w-3 h-3" />
            </a>
          </div>

          {/* Col 3: Map Image exactly matching mockup (md:col-span-6) */}
          <div className="md:col-span-6 flex justify-center items-start -mt-45">
            <div className="w-full max-w-[520px]">
              <img
                src="/assets/worldmap.png"
                alt="World Map Consultant Finder"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WorldMapFinder;
