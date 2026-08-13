import React, { useState, useEffect } from 'react';
import BannerConsultationCall from '../components/BannerConsultationCall';

const STORAGE_KEY = 'eduvista_blogs';

const defaultBlogs = [
  {
    id: 1,
    image: '/assets/advisors_table.png',
    category: 'Immigration Visa',
    readTime: '12 min read',
    title: 'What visa do you need to work legally in Singapore?',
    author: 'Sean McManley',
    date: 'Aug 13, 2026',
    description: 'Singapore work visa regulations have changed. Learn about the updated EP and S-Pass standards for international candidates...',
    isFeatured: true,
  },
  {
    id: 2,
    image: '/assets/sydney_hero_bg.png',
    category: 'Working Visa',
    readTime: '8 min read',
    title: 'Top reasons for Australian working visa rejection',
    author: 'Ben Markson',
    date: 'Dec 02, 2025',
    description: 'Failing to provide proper documentation is the leading cause for Australian visa refusals. Check your work experience proofing...',
    isFeatured: false,
  },
  {
    id: 3,
    image: '/assets/couple_travel.png',
    category: 'Working Visa',
    readTime: '6 min read',
    title: 'Canada Federal Skilled Worker Program',
    author: 'Caroline',
    date: 'Nov 26, 2025',
    description: 'Canada Express Entry CRS draws continue to invite skilled trade profiles. Here is how you can optimize your points index...',
    isFeatured: true,
  },
  {
    id: 4,
    image: '/assets/advisor_laptop.png',
    category: 'PR Visa',
    readTime: '4 min read',
    title: 'The United Kingdom Immigration & Permanent Residency Consultants',
    author: 'Caroline',
    date: 'Nov 12, 2025',
    description: 'Obtaining permanent residence in the United Kingdom requires a clear track record. Here is your definitive immigration guide...',
    isFeatured: false,
  },
];

const BlogListing = () => {
  const [blogs, setBlogs] = useState([]);
  const [activeTab, setActiveTab] = useState('latest');

  // Load from localStorage (synced with admin panel)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      setBlogs(saved ? JSON.parse(saved) : defaultBlogs);
    } catch {
      setBlogs(defaultBlogs);
    }
  }, []);

  // Listen for storage changes (when admin saves)
  useEffect(() => {
    const handleStorage = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) setBlogs(JSON.parse(saved));
      } catch {}
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const filteredBlogs =
    activeTab === 'featured' ? blogs.filter((b) => b.isFeatured) : blogs;

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#25345d] text-white py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
            News &amp; Articles
          </h1>
          <div className="flex items-center gap-1.5 text-xs opacity-70">
            <span>Home</span>
            <span>▸</span>
            <span>Our Latest Blogs</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('latest')}
            className={`py-3 px-6 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
              activeTab === 'latest'
                ? 'border-[#ff4d15] text-[#ff4d15]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Latest Blogs
          </button>
          <button
            onClick={() => setActiveTab('featured')}
            className={`py-3 px-6 text-xs font-bold uppercase tracking-wider border-b-2 transition-all ${
              activeTab === 'featured'
                ? 'border-[#ff4d15] text-[#ff4d15]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Featured Blogs
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Articles */}
          <div className="lg:col-span-8 space-y-10">
            {filteredBlogs.length === 0 ? (
              <p className="text-sm text-gray-400 py-12 text-center">
                No blogs in this section yet.
              </p>
            ) : (
              filteredBlogs.map((article) => (
                <div
                  key={article.id}
                  className="space-y-4 border-b border-gray-100 pb-8 last:border-b-0"
                >
                  <div className="relative h-64 rounded overflow-hidden bg-gray-50">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#ff4d15] text-white text-[10px] font-bold uppercase px-2.5 py-1">
                      {article.category}
                    </span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-3 text-gray-400 font-medium">
                      <span>{article.readTime}</span>
                    </div>
                    <h2
                      className="text-base font-bold text-[#25345d] hover:text-[#ff4d15] cursor-pointer transition-colors"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {article.title}
                    </h2>
                    <p className="text-gray-500 text-xs leading-relaxed max-w-2xl">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 pt-1">
                      <span>
                        By <strong className="text-gray-600">{article.author}</strong>
                      </span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-gray-50 p-6 rounded border border-gray-100 space-y-3">
              <h3 className="text-xs font-bold text-[#25345d] uppercase tracking-wider">
                Categories
              </h3>
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
