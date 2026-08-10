import React from 'react';
import BannerConsultationCall from '../components/BannerConsultationCall';

const blogArticles = [
  {
    id: 1,
    image: '/assets/advisors_table.png',
    category: 'Immigration Visa',
    readTime: '12 min read',
    title: 'What visa do you need to work legally in Singapore?',
    author: 'Sean McManley',
    date: '18 hours ago',
  },
  {
    id: 2,
    image: '/assets/sydney_hero_bg.png',
    category: 'Working Visa',
    readTime: '8 min read',
    title: 'Top reasons for Australian working visa rejection',
    author: 'Ben Markson',
    date: 'Dec 02, 2019',
  },
  {
    id: 3,
    image: '/assets/couple_travel.png',
    category: 'Working Visa',
    readTime: '6 min read',
    title: 'Canada Federal Skilled Worker Program',
    author: 'Caroline',
    date: 'Nov 26, 2019',
  },
  {
    id: 4,
    image: '/assets/advisor_laptop.png',
    category: 'PR Visa',
    readTime: '4 min read',
    title: 'The United Kingdom Immigration & Permanent Residency Consultants',
    author: 'Caroline',
    date: 'Nov 12, 2019',
  },
];

const BlogListing = () => {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#25345d] text-white py-4 px-4 text-xs font-semibold">
        <div className="max-w-6xl mx-auto flex items-center gap-1.5 opacity-80">
          <a href="#" className="hover:text-[#ff4d15] transition-colors">[ Home ]</a>
          <span>▸</span>
          <span className="text-gray-300">Our Latest News &amp; Articles</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Blog list */}
          <div className="lg:col-span-8 space-y-10">
            {blogArticles.map((article) => (
              <div key={article.id} className="space-y-4 border-b border-gray-100 pb-8 last:border-b-0">
                <div className="relative h-64 rounded overflow-hidden bg-gray-50">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-3 text-gray-400 font-semibold">
                    <span className="text-[#ff4d15]">{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="text-base font-bold text-[#25345d] hover:text-[#ff4d15] cursor-pointer" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {article.title}
                  </h2>
                  <div className="flex items-center gap-2 text-gray-400">
                    <span>By <strong className="text-gray-600">{article.author}</strong></span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 pt-6">
              <button className="w-8 h-8 rounded-full border border-gray-200 text-xs font-bold text-gray-400">◂</button>
              <button className="w-8 h-8 rounded-full bg-[#ff4d15] text-white text-xs font-bold">1</button>
              <button className="w-8 h-8 rounded-full border border-gray-200 text-xs font-bold text-gray-500 hover:bg-gray-50">2</button>
              <button className="w-8 h-8 rounded-full border border-gray-200 text-xs font-bold text-gray-500 hover:bg-gray-50">3</button>
              <button className="w-8 h-8 rounded-full border border-gray-200 text-xs font-bold text-gray-500 hover:bg-gray-50">▸</button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-gray-50 p-6 rounded border border-gray-100 space-y-4">
              <h3 className="text-xs font-bold text-[#25345d] uppercase tracking-wider">Categories</h3>
              <ul className="space-y-2 text-xs text-gray-600 font-medium">
                <li className="hover:text-[#ff4d15] cursor-pointer">Education Visa</li>
                <li className="hover:text-[#ff4d15] cursor-pointer">Skilled Work Visa</li>
                <li className="hover:text-[#ff4d15] cursor-pointer">Work Permit Visa</li>
                <li className="hover:text-[#ff4d15] cursor-pointer">PR &amp; Migrate Visa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <BannerConsultationCall />
    </div>
  );
};

export default BlogListing;
