import React from 'react';

const AdvisorExperienceBanner = () => {
  return (
    <section className="py-20 px-4 bg-gray-50/60 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              WE LOVE OUR CLIENTS
            </p>

            <h2
              className="text-3xl md:text-4xl font-bold text-[#25345d] leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              We provide the best consulting service in the industry since 1999
            </h2>

            <p className="text-[#25345d] font-medium text-sm leading-relaxed">
              Semper lacus cursus porta, feugiat primis ligula risus auctor rhoncus in ultrce ligula purus ipsum primis in cubilia
            </p>

            <p className="text-gray-500 text-xs leading-relaxed">
              An enim nullam tempor sapien gravida donec enim blandit ipsum at porta justo integer velna vitae auctor integer congue magna pretium purus pretium. An magnis nulla dolor sapien augue erat iaculis
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-block bg-[#ff4d15] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-sm hover:bg-[#e03e08] transition-all duration-200 shadow-md hover:shadow-orange-900/40"
              >
                DISCOVER MORE
              </a>
            </div>
          </div>

          {/* Right Column: Advisor Photo in Black Suit */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div
              className="relative rounded-lg overflow-hidden shadow-xl bg-white border border-gray-100"
              style={{ width: '320px', height: '380px' }}
            >
              <img
                src="/assets/advisor_laptop.png"
                alt="Senior Advisor"
                className="w-full h-full object-cover"
              />

              {/* Decorative accent element */}
              <div className="absolute top-4 left-4 bg-[#25345d] text-white px-3 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-wider">
                Since 1999
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorExperienceBanner;
