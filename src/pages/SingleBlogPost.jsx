import React, { useState } from 'react';

const commentsList = [
  { id: 1, name: 'Tomas', date: '5 days ago', text: 'Porta semper lacus cursus a feugiat primis an ultrce dolor undo congue placerat. Semper lacus cursus porta, feugiat primis ligula risus auctor.' },
  { id: 2, name: 'Daniel Clark', date: '6 days ago', text: 'Great tips and guidelines for visa applicants. Helpful references provided here.' },
  { id: 3, name: 'Lourdes', date: '10 days ago', text: 'Semper lacus cursus porta, feugiat primis ligula risus auctor. Very detailed overview.' },
];

const SingleBlogPost = () => {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    alert('Comment submitted successfully!');
    setComment('');
    setName('');
    setEmail('');
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#25345d] text-white py-4 px-4 text-xs font-semibold">
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 opacity-80">
          <a href="#" className="hover:text-[#ff4d15] transition-colors">[ Home ]</a>
          <span>▸</span>
          <span className="text-gray-300">Article Details</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column Content */}
          <div className="lg:col-span-8 space-y-6 text-xs text-gray-500 leading-relaxed">
            <h1
              className="text-2xl md:text-3xl font-extrabold text-[#25345d]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              The United Kingdom Immigration &amp; Permanent Residency Consultants
            </h1>

            <div className="relative h-64 rounded overflow-hidden bg-gray-50">
              <img src="/assets/advisor_laptop.png" alt="UK Immigration" className="w-full h-full object-cover" />
            </div>

            <p>
              Aliquam nullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna tempor sodales sapien. Semper lacus cursus porta, feugiat primis ligula risus auctor and rhoncus in ultrce ligula purus ipsum primis in cubilia.
            </p>

            {/* Author Profile card */}
            <div className="bg-gray-50 p-6 rounded-md border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full shrink-0" />
              <div>
                <h4 className="font-bold text-[#25345d] text-xs mb-1">Published by James Taylor</h4>
                <p className="text-[10px] text-gray-400">Professional content creator and immigration legal analyst covering global migration trends.</p>
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-6 pt-10">
              <h3 className="text-sm font-bold text-[#25345d] border-b border-gray-100 pb-2">Comments</h3>
              <div className="space-y-4">
                {commentsList.map((item) => (
                  <div key={item.id} className="p-4 bg-gray-50/50 rounded border border-gray-100/50 flex items-start gap-3">
                    <div className="w-9 h-9 bg-gray-200 rounded-full shrink-0" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#25345d] text-xs">{item.name}</span>
                        <span className="text-[9px] text-gray-400">{item.date}</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-gray-500">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leave a Comment form */}
            <form onSubmit={handleCommentSubmit} className="space-y-4 pt-10">
              <h3 className="text-sm font-bold text-[#25345d] border-b border-gray-100 pb-2">Leave a Comment</h3>
              <textarea
                rows="4"
                placeholder="Add comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                className="w-full border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#ff4d15] rounded-sm"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name*"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#ff4d15] rounded-sm"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-gray-200 p-3 text-xs focus:outline-none focus:border-[#ff4d15] rounded-sm"
                />
              </div>
              <button
                type="submit"
                className="bg-[#ff4d15] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-sm hover:bg-[#e03e08] transition-colors"
              >
                POST COMMENT
              </button>
            </form>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-gray-50 p-6 rounded border border-gray-100 space-y-4">
              <h3 className="text-xs font-bold text-[#25345d] uppercase tracking-wider">Categories</h3>
              <ul className="space-y-2 text-xs text-gray-600 font-medium">
                <li className="hover:text-[#ff4d15] cursor-pointer">Education Visa</li>
                <li className="hover:text-[#ff4d15] cursor-pointer">Skilled Work Visa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPost;
