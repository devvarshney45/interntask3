import React from 'react';

const AboutAgency = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Divider above section */}
        <div className="border-t border-dashed border-gray-200 mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Grid */}
          <div className="relative flex gap-4">
            {/* Left column - tall image */}
            <div className="flex flex-col gap-4 flex-1">
              <div
                className="rounded-lg overflow-hidden shadow-md"
                style={{ height: '200px' }}
              >
                <img
                  src="/assets/advisor_laptop.png"
                  alt="Advisor with laptop"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div
                className="rounded-lg overflow-hidden shadow-md"
                style={{ height: '185px' }}
              >
                <img
                  src="/assets/advisors_table.png"
                  alt="Team meeting"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right column - single taller image offset down */}
            <div className="flex-1 pt-10">
              <div
                className="rounded-lg overflow-hidden shadow-md"
                style={{ height: '270px' }}
              >
                <img
                  src="/assets/couple_travel.png"
                  alt="Happy students traveling"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              About Agency
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#25345d] leading-tight mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Consultations for<br />prospective students
            </h2>

            <ul className="space-y-5">
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-[#25345d] mt-2 shrink-0" />
                <p className="text-gray-500 text-sm leading-relaxed">
                  An magnis nulla dolor sapien augue est iaculis purus tempor magna ipsum vitae purus primis pretium ligula rutrum luctus blandit porta justo integer. Feugiat a primis ultrce ligula
                </p>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-[#25345d] mt-2 shrink-0" />
                <p className="text-gray-500 text-sm leading-relaxed">
                  Nemo ipsum egestas volute turpis dolores and aliquam quaerat sodales sapien undo pretium purus ligula a tempus ipsum unco auctor a mauris lectus ipsum blandit egestas magna ligula
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAgency;
