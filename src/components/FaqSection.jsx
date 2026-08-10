import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: '1. What is the visa requirement for study?',
    answer:
      'Aliquam nullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna tempor sodales sapien. Semper lacus cursus porta, feugiat primis ligula risus auctor and rhoncus in ultrce ligula purus ipsum primis in cubilia.',
  },
  {
    id: 2,
    question: '2. How long does the visa application take?',
    answer:
      'Semper lacus cursus porta, feugiat primis ligula risus auctor and rhoncus in ultrce ligula purus ipsum primis in cubilia. Processing times vary depending on the country and visa sub-class chosen.',
  },
  {
    id: 3,
    question: '3. How to select a course and university?',
    answer:
      'Our dedicated counselors assist you in choosing the right institution based on your career goals, budget, academic qualification, and preferred study destination.',
  },
  {
    id: 4,
    question: '4. What are the costs for permanent residency?',
    answer:
      'Permanent residency fee schedules depend on points test evaluation, state nominations, and application processing charges set by foreign immigration authorities.',
  },
  {
    id: 5,
    question: '5. Can I work while studying in Australia?',
    answer:
      'Yes, student visa holders in Australia are permitted to work up to 48 hours per fortnight during study terms and unlimited hours during scheduled course breaks.',
  },
];

const FaqSection = () => {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#25345d] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Have Questions? Look Here
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis
            lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className={`w-full flex items-center justify-between p-5 text-left text-sm font-semibold transition-colors ${
                    isOpen ? 'bg-gray-50 text-[#ff4d15]' : 'bg-white text-[#25345d] hover:text-[#ff4d15]'
                  }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp size={18} className="text-[#ff4d15] shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-gray-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 bg-gray-50 text-gray-500 text-xs leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Subtext link */}
        <div className="text-center mt-10">
          <p className="text-xs text-gray-500">
            Still have a question?{' '}
            <a href="#contact" className="text-[#25345d] font-semibold underline hover:text-[#ff4d15]">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
