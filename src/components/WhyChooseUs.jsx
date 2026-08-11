import React from 'react';
import { Award, Clock, GraduationCap, Star } from 'lucide-react';

const chooseCards = [
  { icon: <Award size={28} className="text-[#ff4d15]" />, number: '99%', title: 'Success Rate' },
  { icon: <Clock size={28} className="text-[#ff4d15]" />, number: '15+', title: 'Years Experience' },
  { icon: <GraduationCap size={28} className="text-[#ff4d15]" />, number: '80+', title: 'Top Universities' },
  { icon: <Star size={28} className="text-[#ff4d15]" />, number: '4.9', title: 'User Rating' },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 px-4 bg-[#1b2646] text-white overflow-hidden">
      {/* Background world map watermark */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500'%3E%3Cg fill='%23ffffff'%3E%3Ccircle cx='200' cy='150' r='2'/%3E%3Ccircle cx='300' cy='200' r='2'/%3E%3Ccircle cx='400' cy='180' r='2'/%3E%3Ccircle cx='500' cy='220' r='2'/%3E%3Ccircle cx='600' cy='160' r='2'/%3E%3Ccircle cx='700' cy='190' r='2'/%3E%3Ccircle cx='800' cy='140' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Section Header */}
        <div className="mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Why Choose EduVista
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto leading-relaxed">
            Professional & experienced consultancy services, personalized student counseling, transparent & ethical services, strong university partnerships, and pre-departure briefings.
          </p>
        </div>

        {/* 4 White Floating Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {chooseCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-white text-gray-800 rounded-md p-8 shadow-xl flex flex-col items-center justify-center hover:-translate-y-1 transition-transform duration-300 border border-gray-100"
            >
              <div className="mb-4">{item.icon}</div>
              <div
                className="text-3xl font-extrabold text-[#25345d] mb-1"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {item.number}
              </div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
