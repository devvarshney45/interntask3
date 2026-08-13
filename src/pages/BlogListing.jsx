import React, { useState } from 'react';
import BannerConsultationCall from '../components/BannerConsultationCall';

// Initial pre-loaded blog list matching the user request guidelines.
const initialBlogs = [
  {
    id: 1,
    image: '/assets/advisors_table.png',
    category: 'Immigration Visa',
    readTime: '12 min read',
    title: 'What visa do you need to work legally in Singapore?',
    author: 'Sean McManley',
    date: '18 hours ago',
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
    date: 'Dec 02, 2019',
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
    date: 'Nov 26, 2019',
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
    date: 'Nov 12, 2019',
    description: 'Obtaining permanent residence in the United Kingdom requires a clear track record. Here is your definitive immigration guide...',
    isFeatured: false,
  },
];

const BlogListing = () => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [activeTab, setActiveTab] = useState('latest'); // 'latest' or 'featured'

  // Admin form fields
  const [showAdmin, setShowAdmin] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Immigration Visa');
  const [author, setAuthor] = useState('Admin');
  const [keywords, setKeywords] = useState('');
  const [image, setImage] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Filtered blogs
  const filteredBlogs = blogs.filter((b) => {
    if (activeTab === 'featured') return b.isFeatured;
    return true; // 'latest' shows all blogs as requested
  });

  const handleSave = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    const defaultImg = image || '/assets/couple_travel.png';
    const currentDate = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });

    if (editingId) {
      // Update
      setBlogs(
        blogs.map((b) =>
          b.id === editingId
            ? { ...b, title, description, category, author, image: defaultImg, isFeatured }
            : b
        )
      );
      setEditingId(null);
    } else {
      // Create new
      const newBlog = {
        id: Date.now(),
        image: defaultImg,
        category,
        readTime: '5 min read',
        title,
        author,
        date: currentDate,
        description,
        isFeatured,
      };
      setBlogs([newBlog, ...blogs]);
    }

    // Reset Form
    setTitle('');
    setDescription('');
    setCategory('Immigration Visa');
    setKeywords('');
    setImage('');
    setIsFeatured(false);
  };

  const handleEdit = (blog) => {
    setEditingId(blog.id);
    setTitle(blog.title);
    setDescription(blog.description || '');
    setCategory(blog.category);
    setAuthor(blog.author);
    setImage(blog.image);
    setIsFeatured(!!blog.isFeatured);
    setShowAdmin(true);
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((b) => b.id !== id));
  };

  const toggleFeaturedStatus = (id) => {
    setBlogs(
      blogs.map((b) => (b.id === id ? { ...b, isFeatured: !b.isFeatured } : b))
    );
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#25345d] text-white py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold font-sans">News & Articles</h1>
            <div className="flex items-center gap-1.5 text-xs opacity-80">
              <span className="text-gray-300">Home</span>
              <span>▸</span>
              <span>Our Latest Blogs</span>
            </div>
          </div>
          <button
            onClick={() => setShowAdmin(!showAdmin)}
            className="bg-[#ff4d15] hover:bg-[#e03e08] text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded transition-all shadow-md"
          >
            {showAdmin ? 'Close Admin Dashboard' : 'Open Admin Dashboard'}
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Admin Dashboard */}
        {showAdmin && (
          <div className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-lg font-bold text-[#25345d] mb-4 font-sans">
              {editingId ? 'Edit Article' : 'Create New Article'}
            </h3>
            
            <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600 block">Title*</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter blog title"
                  required
                  className="w-full border border-gray-200 p-2.5 text-xs rounded bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600 block">Category*</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-gray-200 p-2.5 text-xs rounded bg-white"
                >
                  <option>Immigration Visa</option>
                  <option>Working Visa</option>
                  <option>PR Visa</option>
                  <option>Student Visa</option>
                </select>
              </div>

              <div className="space-y-1 md:col-span-2">
                <label className="text-xs font-bold text-gray-600 block">Description / Content*</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter blog body content..."
                  required
                  rows={4}
                  className="w-full border border-gray-200 p-2.5 text-xs rounded bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600 block">Author Name</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Admin"
                  className="w-full border border-gray-200 p-2.5 text-xs rounded bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600 block">Keywords</label>
                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="visa, immigration, study"
                  className="w-full border border-gray-200 p-2.5 text-xs rounded bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600 block">Image URL / Path</label>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="/assets/couple_travel.png"
                  className="w-full border border-gray-200 p-2.5 text-xs rounded bg-white"
                />
              </div>

              <div className="flex items-center gap-2 pt-6">
                <input
                  type="checkbox"
                  id="featuredCheck"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                  className="w-4 h-4 text-[#ff4d15] accent-[#ff4d15]"
                />
                <label htmlFor="featuredCheck" className="text-xs font-bold text-gray-700 cursor-pointer">
                  Feature this article on main screen
                </label>
              </div>

              <div className="md:col-span-2 pt-2 flex gap-3">
                <button
                  type="submit"
                  className="bg-[#25345d] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded hover:bg-slate-800 transition-all"
                >
                  {editingId ? 'Update Article' : 'Publish Article'}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingId(null);
                      setTitle('');
                      setDescription('');
                    }}
                    className="border border-gray-300 text-gray-600 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded hover:bg-gray-100"
                  >
                    Cancel Edit
                  </button>
                )}
              </div>
            </form>

            {/* List for Edit/Delete Admin Control */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h4 className="text-sm font-bold text-[#25345d] mb-4">Manage Created Articles</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-400 font-bold">
                      <th className="pb-2">Title</th>
                      <th className="pb-2">Category</th>
                      <th className="pb-2">Date</th>
                      <th className="pb-2 text-center">Featured Status</th>
                      <th className="pb-2 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {blogs.map((b) => (
                      <tr key={b.id} className="hover:bg-gray-50/50">
                        <td className="py-3 font-semibold text-gray-700">{b.title}</td>
                        <td className="py-3 text-gray-500">{b.category}</td>
                        <td className="py-3 text-gray-500">{b.date}</td>
                        <td className="py-3 text-center">
                          <input
                            type="checkbox"
                            checked={!!b.isFeatured}
                            onChange={() => toggleFeaturedStatus(b.id)}
                            className="w-4 h-4 accent-[#ff4d15]"
                          />
                        </td>
                        <td className="py-3 text-right space-x-2">
                          <button
                            onClick={() => handleEdit(b)}
                            className="text-[#1a73e8] font-bold hover:underline"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(b.id)}
                            className="text-red-500 font-bold hover:underline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Section Tabs */}
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

        {/* Blog display list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            {filteredBlogs.length === 0 ? (
              <p className="text-sm text-gray-400 py-12 text-center">No blogs available in this section.</p>
            ) : (
              filteredBlogs.map((article) => (
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
                    <p className="text-gray-500 text-xs leading-relaxed max-w-2xl">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-2 text-gray-400 pt-1">
                      <span>By <strong className="text-gray-600">{article.author}</strong></span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
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
