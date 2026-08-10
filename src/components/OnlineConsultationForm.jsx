import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const OnlineConsultationForm = () => {
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
          subject: `Consultation Request: ${formData.visaType} for ${formData.visaCountry}`,
          message: `Free online consultation request for ${formData.visaType} visa to ${formData.visaCountry}.`,
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
    <section className="relative py-24 px-4 overflow-hidden" style={{ background: '#192238' }}>
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('/assets/advisor_laptop.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 text-white">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
              FREE 24/7 SUPPORT
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight mb-5"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Get Free &amp; Quality<br />Online Consultation
            </h2>
            <p className="text-[#ff9c7e] font-semibold text-base mb-4">
              Euismod risus auctor egestas augue mauri viverra euismod tortor eugiat a mauris placerat
            </p>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
              Fringilla risus nec, luctus mauris orci auctor purus euismod and pretium purus at pretium ligula rutrum viverra tortor sapien sodales and primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat eugiat mauris ipsum viverra tortor gravida
            </p>
          </div>

          {/* Right Floating White Form Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-lg p-8 shadow-2xl border border-gray-100">
            <h3
              className="text-xl font-bold text-[#25345d] text-center mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Request Free Consultation
            </h3>

            {status === 'success' ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle size={48} className="text-emerald-500 mx-auto" />
                <h4 className="font-bold text-[#25345d]">Request Submitted!</h4>
                <p className="text-xs text-gray-500">We will call you back within 24 hours.</p>
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
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-xs text-gray-700 focus:outline-none focus:border-[#25345d] bg-gray-50/50"
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
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-xs text-gray-700 focus:outline-none focus:border-[#25345d] bg-gray-50/50"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Your Phone Number*"
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-xs text-gray-700 focus:outline-none focus:border-[#25345d] bg-gray-50/50"
                  />
                </div>
                <div>
                  <select
                    name="visaType"
                    value={formData.visaType}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-xs text-gray-600 focus:outline-none focus:border-[#25345d] bg-gray-50/50"
                  >
                    <option value="">Select Visa</option>
                    <option value="Student Visa">Student Visa</option>
                    <option value="Working Visa">Working Visa</option>
                    <option value="Business Visa">Business Visa</option>
                    <option value="PR Visa">PR Visa</option>
                    <option value="Spouse/Family Visa">Spouse/Family Visa</option>
                  </select>
                </div>
                <div>
                  <select
                    name="visaCountry"
                    value={formData.visaCountry}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-xs text-gray-600 focus:outline-none focus:border-[#25345d] bg-gray-50/50"
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
    </section>
  );
};

export default OnlineConsultationForm;
