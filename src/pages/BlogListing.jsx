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
  const refreshBlogs = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setBlogs(JSON.parse(saved));
      } else {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultBlogs));
        setBlogs(defaultBlogs);
      }
    } catch {
      setBlogs(defaultBlogs);
    }
  };

  useEffect(() => {
    refreshBlogs();
  }, [activeTab]);

  // Listen for storage changes and page focus to keep in sync
  useEffect(() => {
    window.addEventListener('storage', refreshBlogs);
    window.addEventListener('focus', refreshBlogs);
    // Interval fallback to sync updates instantly on the same tab
    const interval = setInterval(refreshBlogs, 1500);
    return () => {
      window.removeEventListener('storage', refreshBlogs);
      window.removeEventListener('focus', refreshBlogs);
      clearInterval(interval);
    };
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
        {/* Tabs — Latest only */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className="py-3 px-6 text-xs font-bold uppercase tracking-wider border-b-2 border-[#ff4d15] text-[#ff4d15]"
          >
            Latest Blogs
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="max-w-[1400px] mx-auto">
          {filteredBlogs.length === 0 ? (
            <p className="text-sm text-gray-400 py-12 text-center">
              No blogs in this section yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredBlogs.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* Card Image Wrapper */}
                  <div className="relative h-56 bg-slate-50 flex items-center justify-center overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Date badge — top left */}
                    <span className="absolute top-3 left-3 bg-[#ff4d15] text-white text-[10px] font-bold uppercase px-3 py-1.5 shadow-md rounded-sm tracking-wider">
                      {article.date}
                    </span>
                    {/* FEATURED badge — top right, only on first card */}
                    {filteredBlogs.indexOf(article) === 0 && (
                      <span className="absolute top-3 right-3 bg-[#25345d] text-white text-[10px] font-bold uppercase px-3 py-1.5 shadow-md rounded-sm tracking-wider">
                        ⭐ Featured
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-gray-400 text-[11px] mb-2 font-medium">
                      <span className="text-[#ff4d15] font-bold uppercase tracking-wider">{article.category || 'Visa Details'}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3
                      className="font-bold text-[#25345d] text-[15px] leading-snug mb-3 group-hover:text-[#ff4d15] transition-colors line-clamp-2"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {article.title}
                    </h3>

                    <p className="text-gray-500 text-[12px] leading-relaxed mb-4 flex-1 line-clamp-3">
                      {article.description}
                    </p>

                    <div className="border-t border-gray-100 pt-3 flex items-center justify-between text-[11px] text-gray-400">
                      <span>
                        By <strong className="text-gray-600 font-semibold">{article.author}</strong>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <BannerConsultationCall />
    </div>
  );
};

export default BlogListing;
