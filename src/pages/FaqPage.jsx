import React, { useState } from 'react';
import BannerConsultationCall from '../components/BannerConsultationCall';

const generalFaqs = [
  { id: 1, q: '1. What services does EduVista International offer?', a: 'We offer professional educational consultancy including university selection, application processing, Statement of Purpose (SOP) guidance, scholarship search matching, visa processing, pre-departure briefings, and post-arrival accommodation assistance.' },
  { id: 2, q: '2. Which countries do you assist with for study options?', a: 'We support admissions to top universities and colleges across 15+ destination countries including the USA, Canada, UK, Australia, New Zealand, Germany, Sweden, Denmark, Netherlands, Ireland, Hungary, Finland, Italy, France, and Malaysia.' },
  { id: 3, q: '3. Do you offer English test preparation coaching?', a: 'Yes, we provide specialized training programs for IELTS, TOEFL, PTE, Duolingo English Test, as well as academic test preps like GRE, GMAT, SAT, and ACT.' },
];

const prFaqs = [
  { id: 1, q: '1. How do you help with university selection and application?', a: 'Our counselors review your academic history, budget, and career goals to suggest compatible colleges. We then assist with full application submissions, letter of recommendation layouts, and credit transfer guidance.' },
  { id: 2, q: '2. What is the process for Statement of Purpose (SOP) guidance?', a: 'We help draft and refine your SOPs and motivation letters to showcase your unique profile strengths and align them with university selection criteria.' },
];

const touristFaqs = [
  { id: 1, q: '1. What visa support services do you provide?', a: 'We provide full visa documentation assistance, interview prep, financial document guidelines, and mock visa interview rounds to maximize your success probability.' },
  { id: 2, q: '2. Do you offer pre-departure and post-arrival assistance?', a: 'Yes! We conduct pre-departure briefing sessions and assist with travel arrangements, airport pickup coordination, accommodation booking, and health insurance registration.' },
];

const workingFaqs = [
  { id: 1, q: '1. How do I initiate a consultation with EduVista?', a: 'You can book an appointment by contacting us via phone (+91 6282002268), emailing eduvasta50@gmail.com, or visiting our office at Jodhpur Gardens, Kolkata.' },
  { id: 2, q: '2. Do you charge fees for initial profile evaluations?', a: 'Please contact our front desk for active consultation terms and specialized package details.' },
];

const AccordionGroup = ({ title, items }) => {
  const [openId, setOpenId] = useState(1);
  return (
    <div className="space-y-4 mb-10">
      <h3 className="text-base font-bold text-[#25345d] mb-4 border-b border-gray-100 pb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {title}
      </h3>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="border border-gray-100 rounded-sm bg-gray-50/50">
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className={`w-full flex items-center justify-between p-3.5 text-left text-xs font-semibold ${
                isOpen ? 'bg-white text-[#ff4d15]' : 'text-[#25345d] hover:text-[#ff4d15]'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span>{item.q}</span>
              <span className="text-gray-400">{isOpen ? '▴' : '▾'}</span>
            </button>
            {isOpen && (
              <div className="p-4 pt-0 text-[11px] text-gray-500 leading-relaxed bg-white border-t border-gray-50">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const FaqPage = () => {
  return (
    <div className="bg-white">
      {/* Breadcrumb Header */}
      <div className="bg-[#25345d] text-white py-4 px-4 text-xs font-semibold">
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 opacity-80">
          <a href="#" className="hover:text-[#ff4d15] transition-colors">[ Home ]</a>
          <span>▸</span>
          <span className="text-gray-300">FAQs</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <AccordionGroup title="General Questions" items={generalFaqs} />
            <AccordionGroup title="PR & Migration Visa" items={prFaqs} />
          </div>
          <div>
            <AccordionGroup title="Tourist & Visitor Visa" items={touristFaqs} />
            <AccordionGroup title="Working Visa" items={workingFaqs} />
          </div>
        </div>
      </div>

      <BannerConsultationCall />
    </div>
  );
};

export default FaqPage;
