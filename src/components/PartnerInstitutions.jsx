import React from 'react';

// Partner logos rendered as styled SVG text (matching grayscale logos in Image 2)
const partners = [
  {
    id: 'alltv',
    render: () => (
      <div className="flex flex-col items-center">
        <div className="flex items-end gap-0.5">
          <span className="text-2xl font-black text-gray-400 tracking-tight">All</span>
          <div className="flex flex-col items-center mb-0.5">
            <div className="w-3 h-3 bg-gray-400 rounded-full" />
            <div className="w-2 h-2 border border-gray-400 rounded-full mt-0.5" />
          </div>
          <span className="text-2xl font-black text-gray-400 tracking-tight">TV</span>
        </div>
        <span className="text-[8px] text-gray-400 tracking-wider">Identify The Best Candidates</span>
      </div>
    ),
  },
  {
    id: 'sicmork',
    render: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 30 30" className="w-7 h-7" fill="none">
          <path d="M15 5 L20 12 L15 25 L10 12 Z" stroke="#9ca3af" strokeWidth="1.5" fill="none"/>
          <circle cx="15" cy="12" r="3" stroke="#9ca3af" strokeWidth="1.5" fill="none"/>
          <path d="M8 20 Q15 28 22 20" stroke="#9ca3af" strokeWidth="1.5" fill="none"/>
        </svg>
        <span className="text-xl font-semibold text-gray-400 tracking-wide">Sicmork</span>
      </div>
    ),
  },
  {
    id: 'greengrass',
    render: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 30 30" className="w-7 h-7" fill="none">
          <path d="M5 25 Q10 10 15 8 Q20 10 25 25" fill="#9ca3af" opacity="0.4"/>
          <path d="M10 25 L15 5 L20 25" stroke="#9ca3af" strokeWidth="1.5" fill="none"/>
          <line x1="8" y1="18" x2="22" y2="18" stroke="#9ca3af" strokeWidth="1"/>
        </svg>
        <div>
          <div className="text-sm font-bold text-gray-400 leading-none tracking-wide">GREEN GRASS</div>
          <div className="text-[9px] text-gray-400 tracking-widest">DESIGN</div>
        </div>
      </div>
    ),
  },
  {
    id: 'gsi',
    render: () => (
      <div>
        <div className="text-2xl font-black text-gray-400 tracking-tight">GSI</div>
        <div className="text-[9px] text-gray-400 tracking-widest font-semibold">CONSTRUCTION</div>
      </div>
    ),
  },
  {
    id: 'cbc',
    render: () => (
      <div>
        <span className="text-4xl font-thin text-gray-400 tracking-widest">cbc</span>
      </div>
    ),
  },
  {
    id: 'organic',
    render: () => (
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <path d="M12 2 C6 2 2 8 4 14 C6 20 12 22 12 22 C12 22 18 20 20 14 C22 8 18 2 12 2Z" fill="#9ca3af" opacity="0.3" stroke="#9ca3af" strokeWidth="1"/>
          <path d="M9 12 Q12 8 15 12" stroke="#9ca3af" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
        <div>
          <div className="text-[10px] font-bold text-gray-400 leading-tight">100%</div>
          <div className="text-[10px] italic text-gray-400">organic</div>
        </div>
      </div>
    ),
  },
  {
    id: 'healthbrand',
    render: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <path d="M12 21 C12 21 3 15 3 8 C3 5 5.5 3 8 4 C10 4.8 12 7 12 7 C12 7 14 4.8 16 4 C18.5 3 21 5 21 8 C21 15 12 21 12 21Z" fill="#9ca3af" opacity="0.4" stroke="#9ca3af" strokeWidth="1"/>
        </svg>
        <div>
          <div className="text-sm font-bold text-gray-400 tracking-wide">HEALTH</div>
          <div className="text-sm font-bold text-gray-400 tracking-wide">BRAND</div>
        </div>
      </div>
    ),
  },
  {
    id: 'airexpress',
    render: () => (
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 28 28" className="w-8 h-8" fill="none">
          <path d="M2 18 L20 6 L26 10 L14 16 L22 22 L18 24 L10 18 L4 20 Z" fill="#9ca3af" opacity="0.5" stroke="#9ca3af" strokeWidth="1"/>
          <path d="M18 6 L26 8" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <div>
          <div className="text-sm font-bold text-gray-400 tracking-wide">AIR</div>
          <div className="text-sm font-bold text-gray-400 tracking-wide">EXPRESS</div>
        </div>
      </div>
    ),
  },
];

const PartnerInstitutions = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#25345d] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Partner Institutions
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis
            lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa.
          </p>
        </div>

        {/* Partner Logos Grid - Row 1 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-0">
          {partners.slice(0, 4).map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center h-20 hover:opacity-60 transition-opacity duration-200 cursor-pointer group"
            >
              <div className="group-hover:scale-105 transition-transform duration-200">
                {partner.render()}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-2" />

        {/* Partner Logos Grid - Row 2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.slice(4, 8).map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center h-20 hover:opacity-60 transition-opacity duration-200 cursor-pointer group"
            >
              <div className="group-hover:scale-105 transition-transform duration-200">
                {partner.render()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerInstitutions;
