import React from 'react';

const BannerFlyAbroad = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto rounded-lg overflow-hidden bg-[#1b2646] text-white shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          {/* Left Text Column */}
          <div className="md:col-span-7 p-8 md:p-14 space-y-4">
            <p className="text-xs font-semibold text-[#ff9c7e] uppercase tracking-widest">
              GETTING A VISA
            </p>

            <h2
              className="text-2xl md:text-4xl font-bold leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Give wings to your dreams, Fly to your dream abroad
            </h2>

            <p className="text-gray-300 text-xs md:text-sm max-w-xl leading-relaxed">
              Aliquam nullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna tempor sodales sapien ...
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-block bg-[#ff4d15] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-sm hover:bg-[#e03e08] transition-all duration-200 shadow-md hover:shadow-orange-900/50"
              >
                APPLY NOW ▸
              </a>
            </div>
          </div>

          {/* Right Image Column (Big Ben / London) */}
          <div className="md:col-span-5 relative h-72 md:h-96 overflow-hidden">
            <img
              src="/assets/advisor_laptop.png"
              alt="Big Ben London"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1b2646] via-transparent to-transparent hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerFlyAbroad;
