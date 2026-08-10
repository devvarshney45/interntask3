import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const AustraliaMap = ({ activeState, setActiveState }) => {
  const states = [
    {
      id: 'wa',
      name: 'Western Australia',
      path: 'M 80 80 L 240 80 L 240 360 L 80 360 Z',
      fill: '#4a7eb5',
    },
    {
      id: 'nt',
      name: 'Northern Territory',
      path: 'M 240 80 L 360 80 L 360 240 L 240 240 Z',
      fill: '#5a9fd4',
    },
    {
      id: 'sa',
      name: 'South Australia',
      path: 'M 240 240 L 360 240 L 380 360 L 240 360 Z',
      fill: '#4a7eb5',
    },
    {
      id: 'qld',
      name: 'Queensland',
      path: 'M 360 80 L 500 80 L 500 260 L 360 240 Z',
      fill: '#5a9fd4',
    },
    {
      id: 'nsw',
      name: 'New South Wales',
      path: 'M 380 260 L 500 260 L 510 360 L 380 360 Z',
      fill: '#a8d8f0',
    },
    {
      id: 'vic',
      name: 'Victoria',
      path: 'M 380 360 L 510 360 L 500 400 L 380 395 Z',
      fill: '#a8d8f0',
    },
    {
      id: 'tas',
      name: 'Tasmania',
      path: 'M 430 420 L 490 420 L 500 465 L 435 465 Z',
      fill: '#c5e8f8',
    },
    {
      id: 'act',
      name: 'ACT',
      path: 'M 455 345 L 475 345 L 475 360 L 455 360 Z',
      fill: '#2e5f8a',
    },
  ];

  return (
    <div className="relative w-full" style={{ maxWidth: '320px' }}>
      {/* Ocean labels */}
      <div className="absolute" style={{ top: '15%', left: '2%', fontSize: '8px', color: '#999', lineHeight: '1.2', textAlign: 'center' }}>
        <div>INDIAN</div><div>OCEAN</div>
      </div>
      <div className="absolute" style={{ top: '10%', right: '2%', fontSize: '8px', color: '#999', lineHeight: '1.2', textAlign: 'center' }}>
        <div>SOUTH</div><div>PACIFIC</div><div>OCEAN</div>
      </div>
      <div className="absolute" style={{ bottom: '5%', left: '10%', fontSize: '8px', color: '#999', lineHeight: '1.2', textAlign: 'center' }}>
        <div>INDIAN OCEAN</div>
      </div>
      <div className="absolute" style={{ bottom: '18%', right: '3%', fontSize: '8px', color: '#999', lineHeight: '1.2', textAlign: 'center' }}>
        <div>Tasman Sea</div>
      </div>

      <svg
        viewBox="70 60 460 430"
        className="w-full h-auto"
        style={{ filter: 'drop-shadow(0 4px 16px rgba(74,126,181,0.15))' }}
      >
        {/* Western Australia */}
        <path
          d="M80 85 L235 85 L235 355 L80 355 Z"
          fill={activeState === 'wa' ? '#ff4d15' : '#4a7eb5'}
          stroke="white"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-300"
          onMouseEnter={() => setActiveState('wa')}
          onMouseLeave={() => setActiveState(null)}
          style={{ opacity: activeState && activeState !== 'wa' ? 0.7 : 1 }}
        />

        {/* Northern Territory */}
        <path
          d="M235 85 L365 85 L365 240 L235 240 Z"
          fill={activeState === 'nt' ? '#ff4d15' : '#5a9fd4'}
          stroke="white"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-300"
          onMouseEnter={() => setActiveState('nt')}
          onMouseLeave={() => setActiveState(null)}
          style={{ opacity: activeState && activeState !== 'nt' ? 0.7 : 1 }}
        />

        {/* South Australia */}
        <path
          d="M235 240 L365 240 L375 355 L235 355 Z"
          fill={activeState === 'sa' ? '#ff4d15' : '#4a7eb5'}
          stroke="white"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-300"
          onMouseEnter={() => setActiveState('sa')}
          onMouseLeave={() => setActiveState(null)}
          style={{ opacity: activeState && activeState !== 'sa' ? 0.7 : 1 }}
        />

        {/* Queensland */}
        <path
          d="M365 85 L505 85 L505 255 L365 240 Z"
          fill={activeState === 'qld' ? '#ff4d15' : '#5a9fd4'}
          stroke="white"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-300"
          onMouseEnter={() => setActiveState('qld')}
          onMouseLeave={() => setActiveState(null)}
          style={{ opacity: activeState && activeState !== 'qld' ? 0.7 : 1 }}
        />

        {/* New South Wales */}
        <path
          d="M375 255 L505 255 L510 355 L375 355 Z"
          fill={activeState === 'nsw' ? '#ff4d15' : '#a8d8f0'}
          stroke="white"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-300"
          onMouseEnter={() => setActiveState('nsw')}
          onMouseLeave={() => setActiveState(null)}
          style={{ opacity: activeState && activeState !== 'nsw' ? 0.7 : 1 }}
        />

        {/* Victoria */}
        <path
          d="M375 355 L510 355 L505 395 L378 392 Z"
          fill={activeState === 'vic' ? '#ff4d15' : '#a8d8f0'}
          stroke="white"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-300"
          onMouseEnter={() => setActiveState('vic')}
          onMouseLeave={() => setActiveState(null)}
          style={{ opacity: activeState && activeState !== 'vic' ? 0.7 : 1 }}
        />

        {/* ACT dot */}
        <circle
          cx="455" cy="362" r="5"
          fill={activeState === 'act' ? '#ff4d15' : '#1e3a5f'}
          stroke="white"
          strokeWidth="1.5"
          className="cursor-pointer transition-all duration-300"
          onMouseEnter={() => setActiveState('act')}
          onMouseLeave={() => setActiveState(null)}
        />
        <circle cx="455" cy="362" r="2" fill="white" />

        {/* Tasmania */}
        <path
          d="M432 420 L495 420 L498 465 L433 465 Z"
          fill={activeState === 'tas' ? '#ff4d15' : '#c5e8f8'}
          stroke="white"
          strokeWidth="2"
          className="cursor-pointer transition-all duration-300"
          onMouseEnter={() => setActiveState('tas')}
          onMouseLeave={() => setActiveState(null)}
          style={{ opacity: activeState && activeState !== 'tas' ? 0.7 : 1 }}
        />

        {/* State tooltip label */}
        {activeState && (
          <text
            x="290" y="475"
            textAnchor="middle"
            fontSize="10"
            fill="#25345d"
            fontWeight="bold"
          >
            {states.find(s => s.id === activeState)?.name}
          </text>
        )}
      </svg>
    </div>
  );
};


const FindConsultant = () => {
  const [activeState, setActiveState] = useState(null);

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
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <h2
            className="text-3xl font-bold text-[#25345d] mb-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Find a consultant by:
          </h2>
          <p className="text-gray-500 text-sm max-w-lg leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis lacinia
            risus interdum auctor id viverra dolor iaculis luctus placerat and massa.
          </p>
        </div>

        {/* Three column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* City Column */}
          <div>
            <h3
              className="font-bold text-[#25345d] text-base mb-5 pb-2 border-b border-gray-100"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              City:
            </h3>
            <ul className="space-y-3">
              {cities.map((city) => (
                <li key={city}>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-[#ff4d15] transition-colors duration-200 hover:pl-1 block"
                  >
                    {city}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#" className="flex items-center gap-1 mt-5 text-sm font-semibold text-[#25345d] hover:text-[#ff4d15] transition-colors">
              View All <ChevronRight size={14} className="text-[#ff4d15]" />
            </a>
          </div>

          {/* Practice Areas Column */}
          <div>
            <h3
              className="font-bold text-[#25345d] text-base mb-5 pb-2 border-b border-gray-100"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Pratice Area:
            </h3>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <a
                    href="#"
                    className="text-gray-600 text-sm hover:text-[#ff4d15] transition-colors duration-200 hover:pl-1 block"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#" className="flex items-center gap-1 mt-5 text-sm font-semibold text-[#25345d] hover:text-[#ff4d15] transition-colors">
              View All <ChevronRight size={14} className="text-[#ff4d15]" />
            </a>
          </div>

          {/* Map Column */}
          <div className="flex justify-center items-start pt-2">
            <AustraliaMap activeState={activeState} setActiveState={setActiveState} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindConsultant;
