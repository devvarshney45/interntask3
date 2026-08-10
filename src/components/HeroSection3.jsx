import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const HeroSection3 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visaType: '',
    visaCountry: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `HP3 Consultation Request: ${formData.visaType} for ${formData.visaCountry}`,
          message: `Consultation request from Homepage 3 hero form for ${formData.visaType} to ${formData.visaCountry}.`,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', visaType: '', visaCountry: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Subtle skyline background pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 300'%3E%3Cpath fill='%2325345d' d='M0 300 L0 200 L40 200 L40 150 L80 150 L80 220 L120 220 L120 120 L170 120 L170 300 L220 300 L220 180 L260 180 L260 300 L350 300 L350 140 L400 140 L400 300 L500 300 L500 160 L550 160 L550 300 L650 300 L650 100 L720 100 L720 300 L800 300 L800 190 L850 190 L850 300 L1000 300 Z'/%3E%3C/svg%3E")`,
          backgroundPosition: 'bottom center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Paragraph */}
          <div className="lg:col-span-7 space-y-6">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#25345d] leading-tight tracking-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Professional Assistance of Visa and Immigration
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
              Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat eugiat mauris ipsum in viverra tortor and gravida purus lorem in tortor
            </p>
          </div>

          {/* Right Column: Dark Blue Embedded Form Card */}
          <div className="lg:col-span-5 bg-[#1b2646] text-white rounded-md p-8 shadow-2xl border border-blue-900/50">
            <h3
              className="text-xl font-bold text-white text-center mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Request Free Consultation
            </h3>

            {status === 'success' ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle size={44} className="text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white text-base">Request Sent Successfully!</h4>
                <p className="text-xs text-gray-300">An advisor will get in touch with you shortly.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-xs text-[#ff4d15] font-semibold underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter Your Name*"
                    className="w-full bg-white text-gray-800 text-xs px-4 py-3 rounded-sm focus:outline-none placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter Your Email*"
                    className="w-full bg-white text-gray-800 text-xs px-4 py-3 rounded-sm focus:outline-none placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Your Phone Number*"
                    className="w-full bg-white text-gray-800 text-xs px-4 py-3 rounded-sm focus:outline-none placeholder-gray-400"
                  />
                </div>
                <div>
                  <select
                    name="visaType"
                    value={formData.visaType}
                    onChange={handleChange}
                    required
                    className="w-full bg-white text-gray-700 text-xs px-4 py-3 rounded-sm focus:outline-none"
                  >
                    <option value="">Select Visa</option>
                    <option value="Education Visa">Education Visa</option>
                    <option value="Business Visa">Business Visa</option>
                    <option value="Working Visa">Working Visa</option>
                    <option value="PR Visa">PR Visa</option>
                    <option value="Tourist Visa">Tourist Visa</option>
                  </select>
                </div>
                <div>
                  <select
                    name="visaCountry"
                    value={formData.visaCountry}
                    onChange={handleChange}
                    required
                    className="w-full bg-white text-gray-700 text-xs px-4 py-3 rounded-sm focus:outline-none"
                  >
                    <option value="">Visa For</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="USA">USA</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Singapore">Singapore</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#ff4d15] text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-sm hover:bg-[#e03e08] transition-colors mt-2"
                >
                  {status === 'loading' ? 'SENDING...' : 'SEND REQUEST'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Dark Navy Full-Width Banner Bar */}
      <div className="bg-[#25345d] py-4 text-center text-white text-xs font-semibold tracking-wider uppercase border-t border-b border-blue-900/50">
        Over 10,000+ Students Chosen Us For Their Visa &amp; Immigration
      </div>
    </section>
  );
};

export default HeroSection3;
