import React, { useState } from 'react';
import BannerConsultationCall from '../components/BannerConsultationCall';

const categoryCards = [
  { id: 1, title: 'Business Immigration', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
  { id: 2, title: 'Skilled Immigration', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
  { id: 3, title: 'Spouse/Family Visas', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
  { id: 4, title: 'Tourist & Visitor Visas', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
  { id: 5, title: 'Resident Return Visas', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
  { id: 6, title: 'Working Holiday Visas', desc: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat' },
];

const listFaqs = [
  { id: 1, q: '1. What payment methods do you accept?', a: 'Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien egestas.' },
  { id: 2, q: '2. What is the registration process?', a: 'Submit your profile, complete initial counseling, document collection, and fee settlement.' },
  { id: 3, q: '3. How can I update or correct my personal information?', a: 'Inform our assigned migration advisor immediately to file corrections with department authorities.' },
  { id: 4, q: '4. Does your immigration firm offers money-back guarantee?', a: 'No migration firm can legally guarantee a visa success. Refund structures are governed by our services contract.' },
  { id: 5, q: '5. How long does it take to get a student visa?', a: 'Usually 4 to 8 weeks depending on visa office processing pipelines.' },
];

const VisaDetailsSpecial = () => {
  const [openId, setOpenId] = useState(1);
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#25345d] text-white py-4 px-4 text-xs font-semibold">
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 opacity-80">
          <a href="#" className="hover:text-[#ff4d15] transition-colors">[ Home ]</a>
          <span>▸</span>
          <span className="text-gray-300">Visa Details</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column content */}
          <div className="lg:col-span-8 space-y-6 text-xs text-gray-500 leading-relaxed">
            <h1
              className="text-2xl md:text-3xl font-extrabold text-[#25345d] mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Australia Visitor Visa (Subclass600)
            </h1>

            <p>
              Aliquam nullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna tempor sodales sapien. Semper lacus cursus porta, feugiat primis ligula risus auctor and rhoncus in ultrce ligula purus ipsum primis in cubilia.
            </p>

            {/* Travel Australia banner */}
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 rounded-md flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold mb-1">AUSTRALIA</h3>
                <p className="text-[10px] text-gray-300 uppercase tracking-widest font-semibold">Great Destination Study and Live</p>
              </div>
              <span className="text-4xl">🇦🇺</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold text-[#25345d]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Documents for Australia visa application
              </h3>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Valid passport copies and current visa verification stamps.</li>
                <li>Completed online subclass 600 application files.</li>
                <li>Proof of travel funds support (bank certificate).</li>
                <li>Travel itinerary and holiday accommodation reservations.</li>
              </ul>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-gray-50 p-6 rounded border border-gray-100 space-y-4">
              <h3 className="text-xs font-bold text-[#25345d] uppercase tracking-wider">Visa Categories</h3>
              <ul className="space-y-2 text-xs text-gray-600 font-medium">
                <li className="hover:text-[#ff4d15] cursor-pointer">Student Visas</li>
                <li className="text-[#ff4d15] font-bold border-l-2 border-[#ff4d15] pl-2">Visitor Visas</li>
                <li className="hover:text-[#ff4d15] cursor-pointer">Work Visas</li>
                <li className="hover:text-[#ff4d15] cursor-pointer">PR Visas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Section: Visa categories */}
        <div className="py-16 border-t border-b border-gray-100 my-16">
          <h2 className="text-xl font-bold text-[#25345d] text-center mb-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Australian Visas Categories:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categoryCards.map((card) => (
              <div key={card.id} className="border border-gray-100 p-6 rounded bg-white shadow-xs hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#25345d] text-xs mb-2">{card.title}</h4>
                <p className="text-gray-400 text-[10px] leading-relaxed mb-4">{card.desc}</p>
                <a href="#" className="text-[10px] font-bold text-gray-400 hover:text-[#ff4d15] transition-colors">Read More ▸</a>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center text-[#25345d] mb-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Have Questions? Look Here
          </h2>
          <div className="space-y-4">
            {listFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="border border-gray-100 rounded-sm">
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className={`w-full flex items-center justify-between p-4 text-left text-xs font-bold ${
                      isOpen ? 'bg-gray-50 text-[#ff4d15]' : 'text-[#25345d] hover:text-[#ff4d15]'
                    }`}
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <span>{faq.q}</span>
                    <span>{isOpen ? '▴' : '▾'}</span>
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-[11px] text-gray-500 leading-relaxed bg-gray-50 border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <BannerConsultationCall />
    </div>
  );
};

export default VisaDetailsSpecial;
