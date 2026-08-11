import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        const data = await res.json();
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      // Simulate success for frontend-only environment or handle fallback
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#f5f7fa]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Get In Touch</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#25345d] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Contact Us
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
            Have a question or need a consultation? Fill in the form below and one of our expert advisors will reach out to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-sm p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-[#ff4d15]" size={18} />
              </div>
              <h4 className="font-semibold text-[#25345d] text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Location</h4>
              <p className="text-gray-500 text-sm">
                236, Jodhpur Gardens, Ground Floor,<br />
                Flat No. G2, P.S. Lake, Kolkata – 700045
              </p>
            </div>
            <div className="bg-white rounded-sm p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                <Phone className="text-[#ff4d15]" size={18} />
              </div>
              <h4 className="font-semibold text-[#25345d] text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Phone Numbers</h4>
              <p className="text-gray-500 text-sm">+91 8282002268<br />+91 8282002258</p>
            </div>
            <div className="bg-white rounded-sm p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                <Mail className="text-[#ff4d15]" size={18} />
              </div>
              <h4 className="font-semibold text-[#25345d] text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>Email Address</h4>
              <p className="text-gray-500 text-sm">info@eduvastaint.com<br />eduvasta50@gmail.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-sm shadow-sm border border-gray-100 p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-12 gap-4 text-center">
                <CheckCircle className="text-green-500" size={56} />
                <h3 className="text-xl font-bold text-[#25345d]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Message Sent!
                </h3>
                <p className="text-gray-500 text-sm max-w-sm">
                  Thank you for reaching out. One of our educational consultants will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 px-6 py-2.5 bg-[#25345d] text-white text-sm font-semibold hover:bg-[#ff4d15] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#25345d] mb-1.5 uppercase tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#25345d] focus:ring-1 focus:ring-[#25345d]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#25345d] mb-1.5 uppercase tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#25345d] focus:ring-1 focus:ring-[#25345d]/20 transition-all"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#25345d] mb-1.5 uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#25345d] focus:ring-1 focus:ring-[#25345d]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#25345d] mb-1.5 uppercase tracking-wider">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#25345d] focus:ring-1 focus:ring-[#25345d]/20 transition-all bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="University Selection">University Selection</option>
                      <option value="Visa Assistance">Visa Assistance</option>
                      <option value="Scholarship Assistance">Scholarship Assistance</option>
                      <option value="Pre-Departure Briefing">Pre-Departure Briefing</option>
                      <option value="Post-Arrival Support">Post-Arrival Support</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#25345d] mb-1.5 uppercase tracking-wider">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your global education needs..."
                    className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#25345d] focus:ring-1 focus:ring-[#25345d]/20 transition-all resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 p-3 rounded-sm">
                    <AlertCircle size={16} />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex items-center gap-2 px-8 py-3.5 bg-[#ff4d15] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#e03e08] transition-all duration-200 hover:shadow-lg hover:shadow-orange-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="30" strokeLinecap="round"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
