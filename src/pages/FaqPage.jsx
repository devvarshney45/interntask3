import React, { useState } from 'react';
import BannerConsultationCall from '../components/BannerConsultationCall';

const generalFaqs = [
  { id: 1, q: '1. Which payment methods do you accept?', a: 'Nullam rutrum eget nunc varius etiam mollis risus congue aliquam etiam sapien egestas, congue gestas posuere cubilia congue and ipsum mauris lectus laoreet gestas neque vitae auctor eros dolor luctus odio tempor sapien gravida donec and ipsum porta.' },
  { id: 2, q: '2. What is the registration process?', a: 'Semper lacus cursus porta, feugiat primis ligula risus auctor and rhoncus in ultrce ligula purus ipsum primis in cubilia.' },
  { id: 3, q: '3. How can I update my personal information?', a: 'An magnis nulla dolor sapien augue erat iaculis. Our helpdesk team can update your registration files instantly upon verification.' },
];

const prFaqs = [
  { id: 1, q: '1. How can ImmiEx help me?', a: 'ImmiEx provides expert legal advice and visa document preparation assistance to help you secure permanent residency.' },
  { id: 2, q: '2. What should I expect from Initial Consultation?', a: 'We will review your qualification profile, points test viability, and suggest candidate pathways for your target country.' },
  { id: 3, q: '3. What can prevent me from coming to Australia?', a: 'Health issues, criminal history, background checks, or failing to meet minimum point thresholds can result in refusal.' },
  { id: 4, q: '4. Who is Authorized Representative?', a: 'Registered MARA agents or lawyers certified to legally represent visa applications to the immigration department.' },
];

const touristFaqs = [
  { id: 1, q: '1. Qualification for a Canada Tourist Visa?', a: 'Proof of sufficient travel funds, proof of ties to home country (job/property), clean record, and valid passport.' },
  { id: 2, q: '2. Do you guarantee a visa approval?', a: 'No agency can guarantee approval as the final decision rests solely with consular officers.' },
  { id: 3, q: '3. How long does the application process take?', a: 'Typically 2 to 6 weeks depending on the visa office processing queues and document completeness.' },
];

const workingFaqs = [
  { id: 1, q: '1. How do I get started?', a: 'Submit your resume and academic transcripts for a pre-assessment evaluation by our migration consultants.' },
  { id: 2, q: '2. What is meant by the "locked-in" date?', a: 'The date on which your child or partner age is fixed for dependency calculations under local immigration laws.' },
  { id: 3, q: '3. What can prevent me from coming to Canada?', a: 'Security grounds, medical inadmissibility, or misrepresentation in visa documents.' },
  { id: 4, q: '4. What is the registration process?', a: 'Expression of Interest (EOI) submission followed by provincial nomination invitations.' },
  { id: 5, q: '5. In what currency must I pay the government fees?', a: 'Typically paid online in the destination country currency via credit card portal.' },
  { id: 6, q: '6. In what currency must I pay the government fees?', a: 'Typically paid online in the destination country currency via credit card portal.' },
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
