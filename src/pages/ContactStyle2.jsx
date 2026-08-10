import React, { useState } from 'react';
import BannerConsultationCall from '../components/BannerConsultationCall';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactStyle2 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setName('');
    setEmail('');
    setSubject('');
    setMsg('');
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#25345d] text-white py-4 px-4 text-xs font-semibold">
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 opacity-80">
          <a href="#" className="hover:text-[#ff4d15] transition-colors">[ Home ]</a>
          <span>▸</span>
          <span className="text-gray-300">Contact Us</span>
        </div>
      </div>

      {/* Large Map Banner */}
      <div className="w-full h-80 bg-gray-100 border-b border-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835837651586!2d144.9537363153403!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sin!4v1628178129184!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Melbourne Location"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#25345d] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Have Questions? Get in Touch
          </h2>
          <p className="text-gray-400 text-xs max-w-xl mx-auto leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis
            lacinia risus interdum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact details card */}
          <div className="md:col-span-4 bg-gray-50/50 p-8 border border-gray-100/60 rounded-md space-y-6">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-[#ff4d15] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-[#25345d] text-xs">Our Location</h4>
                <p className="text-[10px] text-gray-400 mt-0.5">121 King St, Melbourne VIC 3000 Australia</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={20} className="text-[#ff4d15] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-[#25345d] text-xs">Let's Talk</h4>
                <p className="text-[10px] text-gray-400 mt-0.5">P: +12 3 3456 7890<br />F: +12 3 0987 6543</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={20} className="text-[#ff4d15] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-[#25345d] text-xs">Drop a Line</h4>
                <p className="text-[10px] text-gray-400 mt-0.5">hello@domain.com<br />career@domain.com</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="md:col-span-8">
            <form onSubmit={handleSend} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter Your Name*"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border border-gray-200 text-xs px-4 py-3 rounded-sm focus:outline-none focus:border-[#ff4d15] bg-white text-gray-800"
                />
                <input
                  type="email"
                  placeholder="Enter Your Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border border-gray-200 text-xs px-4 py-3 rounded-sm focus:outline-none focus:border-[#ff4d15] bg-white text-gray-800"
                />
              </div>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full border border-gray-200 text-xs px-4 py-3 rounded-sm focus:outline-none focus:border-[#ff4d15] bg-white text-gray-700"
              >
                <option value="">Your Question About...</option>
                <option value="student">Student Visa</option>
                <option value="pr">PR Visa</option>
                <option value="other">Other Query</option>
              </select>
              <textarea
                rows="4"
                placeholder="Your Message..."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                required
                className="w-full border border-gray-200 text-xs p-4 rounded-sm focus:outline-none focus:border-[#ff4d15] bg-white text-gray-800"
              />
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-[#ff4d15] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-sm hover:bg-[#e03e08] transition-colors"
                >
                  SEND YOUR MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <BannerConsultationCall />
    </div>
  );
};

export default ContactStyle2;
