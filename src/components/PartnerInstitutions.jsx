import React from 'react';

// Partner logos as styled SVG text elements - matching the greyscale logos in the screenshot
const PartnerInstitutions = () => {
  const partners = [
    // Row 1
    {
      id: 'alltv',
      render: () => (
        <div className="flex flex-col items-center opacity-40 hover:opacity-70 transition-opacity group-hover:opacity-70">
          <div className="flex items-center gap-0.5">
            <span className="text-2xl font-black text-gray-600 tracking-tight">All</span>
            <div className="flex flex-col items-center mx-0.5 mb-0.5">
              <div className="w-2.5 h-2.5 bg-gray-600 rounded-full" />
              <div className="w-2 h-2 border-2 border-gray-600 rounded-full mt-0.5" />
            </div>
            <span className="text-2xl font-black text-gray-600 tracking-tight">TV</span>
          </div>
          <span className="text-[8px] text-gray-500 tracking-wider mt-0.5">Identify The Best Candidates</span>
        </div>
      ),
    },
    {
      id: 'sicmork',
      render: () => (
        <div className="flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity">
          <svg viewBox="0 0 28 28" className="w-6 h-6" fill="none">
            <path d="M14 4 L19 11 L14 24 L9 11 Z" stroke="#555" strokeWidth="1.5" fill="none"/>
            <circle cx="14" cy="11" r="2.5" stroke="#555" strokeWidth="1.5" fill="none"/>
            <path d="M7 19 Q14 26 21 19" stroke="#555" strokeWidth="1.5" fill="none"/>
          </svg>
          <span className="text-xl font-semibold text-gray-500 tracking-wide">Sicmork</span>
        </div>
      ),
    },
    {
      id: 'greengrass',
      render: () => (
        <div className="flex items-center gap-1.5 opacity-40 hover:opacity-70 transition-opacity">
          <svg viewBox="0 0 28 28" className="w-6 h-6" fill="none">
            <path d="M5 24 Q10 9 14 7 Q18 9 23 24" fill="#888" opacity="0.3"/>
            <path d="M9 24 L14 4 L19 24" stroke="#666" strokeWidth="1.5" fill="none"/>
            <line x1="7" y1="17" x2="21" y2="17" stroke="#666" strokeWidth="1"/>
          </svg>
          <div>
            <div className="text-xs font-bold text-gray-500 leading-none tracking-wide">GREEN GRASS</div>
            <div className="text-[8px] text-gray-500 tracking-widest">DESIGN</div>
          </div>
        </div>
      ),
    },
    {
      id: 'gsi',
      render: () => (
        <div className="opacity-40 hover:opacity-70 transition-opacity">
          <div className="text-3xl font-black text-gray-500 tracking-tight">GSI</div>
          <div className="text-[8px] text-gray-500 tracking-widest font-semibold">CONSTRUCTION</div>
        </div>
      ),
    },
    // Row 2
    {
      id: 'cbc',
      render: () => (
        <div className="opacity-40 hover:opacity-70 transition-opacity">
          <span className="text-4xl font-thin text-gray-500 tracking-widest">cbc</span>
        </div>
      ),
    },
    {
      id: 'organic',
      render: () => (
        <div className="flex items-center gap-1.5 opacity-40 hover:opacity-70 transition-opacity">
          <svg viewBox="0 0 22 22" className="w-5 h-5" fill="none">
            <path d="M11 2 C5.5 2 2 7.5 3.5 12.5 C5 18 11 20 11 20 C11 20 17 18 18.5 12.5 C20 7.5 16.5 2 11 2Z" fill="#888" opacity="0.25" stroke="#888" strokeWidth="0.8"/>
            <path d="M8 11 Q11 7.5 14 11" stroke="#888" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
          <div>
            <div className="text-[10px] font-bold text-gray-500">100%</div>
            <div className="text-[10px] italic text-gray-500">organic</div>
          </div>
        </div>
      ),
    },
    {
      id: 'healthbrand',
      render: () => (
        <div className="flex items-center gap-1.5 opacity-40 hover:opacity-70 transition-opacity">
          <svg viewBox="0 0 22 22" className="w-5 h-5" fill="none">
            <path d="M11 19 C11 19 3 14 3 8 C3 5.5 5.2 3.5 7.5 4.5 C9.2 5.2 11 7 11 7 C11 7 12.8 5.2 14.5 4.5 C16.8 3.5 19 5.5 19 8 C19 14 11 19 11 19Z" fill="#888" opacity="0.3" stroke="#888" strokeWidth="0.8"/>
          </svg>
          <div>
            <div className="text-xs font-bold text-gray-500 tracking-wide">HEALTH</div>
            <div className="text-xs font-bold text-gray-500 tracking-wide">BRAND</div>
          </div>
        </div>
      ),
    },
    {
      id: 'airexpress',
      render: () => (
        <div className="flex items-center gap-1.5 opacity-40 hover:opacity-70 transition-opacity">
          <svg viewBox="0 0 26 26" className="w-7 h-7" fill="none">
            <path d="M2 17 L18 6 L24 10 L13 16 L21 21 L17 23 L9 17 L4 19 Z" fill="#888" opacity="0.4" stroke="#888" strokeWidth="0.8"/>
          </svg>
          <div>
            <div className="text-xs font-bold text-gray-500 tracking-wide">AIR</div>
            <div className="text-xs font-bold text-gray-500 tracking-wide">EXPRESS</div>
          </div>
        </div>
      ),
    },
  ];

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
          <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis
            lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa.
          </p>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-100 divide-x divide-y md:divide-y-0 divide-gray-100">
          {partners.slice(0, 4).map(p => (
            <div key={p.id} className="flex items-center justify-center h-24 group cursor-pointer px-4">
              {p.render()}
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-t-0 border-gray-100 divide-x divide-y md:divide-y-0 divide-gray-100">
          {partners.slice(4, 8).map(p => (
            <div key={p.id} className="flex items-center justify-center h-24 group cursor-pointer px-4">
              {p.render()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerInstitutions;
