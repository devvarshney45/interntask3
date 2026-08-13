import React, { useState, useRef } from 'react';
import { Lock, LogOut, Trash2, Pencil, Star, StarOff, PlusCircle, UploadCloud, X } from 'lucide-react';

// ─── Cloudinary config (unsigned upload only — no secret exposed) ─
const CLOUD_NAME = 'dxaww50be';
const UPLOAD_PRESET = 'eduvista_uploads'; // create this unsigned preset in Cloudinary dashboard

// ─── Secret key ─────────────────────────────────────────
const ADMIN_KEY = 'eduvista@2025';

// ─── Shared in-memory blog store (imported via window so BlogListing can read it) ──
// We use localStorage so both AdminBlog and BlogListing share data
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
    description: 'Failing to provide proper documentation is the leading cause for Australian visa refusals...',
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
    description: 'Canada Express Entry CRS draws continue to invite skilled trade profiles...',
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
    description: 'Obtaining permanent residence in the United Kingdom requires a clear track record...',
    isFeatured: false,
  },
];

function loadBlogs() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultBlogs;
  } catch {
    return defaultBlogs;
  }
}

function saveBlogs(blogs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
}

// ─── MAIN COMPONENT ──────────────────────────────────────
const AdminBlog = () => {
  const [authed, setAuthed] = useState(false);
  const [keyInput, setKeyInput] = useState('');
  const [keyError, setKeyError] = useState('');

  const [blogs, setBlogs] = useState(loadBlogs);

  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Immigration Visa');
  const [author, setAuthor] = useState('Admin');
  const [image, setImage] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Image upload state
  const [imageUploading, setImageUploading] = useState(false);
  const [imageUploadError, setImageUploadError] = useState('');
  const fileInputRef = useRef(null);

  // Upload image to Cloudinary (unsigned)
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setImageUploadError('Please select an image file.');
      return;
    }
    // Validate size (max 5 MB)
    if (file.size > 5 * 1024 * 1024) {
      setImageUploadError('Image must be under 5 MB.');
      return;
    }

    setImageUploading(true);
    setImageUploadError('');

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', UPLOAD_PRESET);
      formData.append('folder', 'eduvista_blogs');

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        { method: 'POST', body: formData }
      );

      if (!res.ok) throw new Error('Upload failed');
      const data = await res.json();
      setImage(data.secure_url);
    } catch (err) {
      setImageUploadError('Upload failed. Check your Cloudinary upload preset.');
    } finally {
      setImageUploading(false);
    }
  };

  // Auth
  const handleLogin = (e) => {
    e.preventDefault();
    if (keyInput === ADMIN_KEY) {
      setAuthed(true);
      setKeyError('');
    } else {
      setKeyError('Incorrect admin key. Please try again.');
    }
  };

  const persistBlogs = (updated) => {
    setBlogs(updated);
    saveBlogs(updated);
  };

  // Save blog (create or update)
  const handleSave = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    const today = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });

    const imgPath = image || '/assets/couple_travel.png';

    if (editingId) {
      persistBlogs(
        blogs.map((b) =>
          b.id === editingId
            ? { ...b, title, description, category, author, image: imgPath, isFeatured }
            : b
        )
      );
    } else {
      const newBlog = {
        id: Date.now(),
        image: imgPath,
        category,
        readTime: '5 min read',
        title,
        author,
        date: today,
        description,
        isFeatured,
      };
      persistBlogs([newBlog, ...blogs]);
    }

    resetForm();
  };

  const resetForm = () => {
    setEditingId(null);
    setTitle('');
    setDescription('');
    setCategory('Immigration Visa');
    setAuthor('Admin');
    setImage('');
    setIsFeatured(false);
    setShowForm(false);
    setImageUploadError('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleEdit = (blog) => {
    setEditingId(blog.id);
    setTitle(blog.title);
    setDescription(blog.description || '');
    setCategory(blog.category);
    setAuthor(blog.author);
    setImage(blog.image);
    setIsFeatured(!!blog.isFeatured);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this blog post?')) {
      persistBlogs(blogs.filter((b) => b.id !== id));
    }
  };

  const toggleFeatured = (id) => {
    persistBlogs(blogs.map((b) => (b.id === id ? { ...b, isFeatured: !b.isFeatured } : b)));
  };

  // ── Login screen ──
  if (!authed) {
    return (
      <div className="min-h-screen bg-[#0f1828] flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-14 h-14 bg-[#25345d] rounded-full flex items-center justify-center mb-3">
              <Lock size={26} color="#fff" />
            </div>
            <h1 className="text-xl font-bold text-[#25345d]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Admin Access
            </h1>
            <p className="text-xs text-gray-400 mt-1">EduVista Blog Management Portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">Admin Secret Key</label>
              <input
                type="password"
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
                placeholder="Enter your secret key..."
                className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#25345d]"
                autoFocus
              />
              {keyError && <p className="text-red-500 text-xs mt-1.5">{keyError}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-[#25345d] text-white py-2.5 rounded font-bold text-sm uppercase tracking-wider hover:bg-[#1c2847] transition-all"
            >
              Login to Admin
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── Admin Dashboard ──
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-[#25345d] text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
        <div>
          <h1 className="text-base font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            EduVista — Blog Admin
          </h1>
          <p className="text-xs text-gray-300">{blogs.length} articles total</p>
        </div>
        <div className="flex gap-3 items-center">
          <button
            onClick={() => { setShowForm(!showForm); setEditingId(null); resetForm(); setShowForm(true); }}
            className="flex items-center gap-2 bg-[#ff4d15] text-white text-xs font-bold px-4 py-2 rounded hover:bg-[#e03e08] transition-all"
          >
            <PlusCircle size={14} /> New Post
          </button>
          <button
            onClick={() => setAuthed(false)}
            className="flex items-center gap-2 bg-white/10 text-white text-xs font-bold px-4 py-2 rounded hover:bg-white/20 transition-all"
          >
            <LogOut size={14} /> Logout
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Create/Edit Form */}
        {showForm && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
            <h2 className="text-sm font-bold text-[#25345d] mb-5">
              {editingId ? '✏️ Edit Article' : '📝 Create New Article'}
            </h2>
            <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Title *</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Article title..."
                  required
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Category *</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                >
                  <option>Immigration Visa</option>
                  <option>Working Visa</option>
                  <option>PR Visa</option>
                  <option>Student Visa</option>
                  <option>Education News</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-600 mb-1">Description / Content *</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Write the blog content here..."
                  required
                  rows={4}
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1">Author</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Author name"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-600 mb-2">Blog Image *</label>

                {/* Image upload area */}
                <div
                  className="relative border-2 border-dashed border-gray-200 rounded-lg p-4 text-center hover:border-[#25345d] transition-colors cursor-pointer"
                  onClick={() => !imageUploading && fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                  {imageUploading ? (
                    <div className="flex flex-col items-center gap-2 py-4">
                      <div className="w-8 h-8 border-2 border-[#25345d] border-t-transparent rounded-full animate-spin" />
                      <p className="text-xs text-gray-500">Uploading to Cloudinary...</p>
                    </div>
                  ) : image ? (
                    <div className="relative inline-block">
                      <img
                        src={image}
                        alt="Preview"
                        className="max-h-40 max-w-full rounded object-cover mx-auto"
                      />
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setImage(''); if (fileInputRef.current) fileInputRef.current.value = ''; }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-red-600"
                      >
                        <X size={12} />
                      </button>
                      <p className="text-xs text-gray-400 mt-2">Click to change image</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 py-4">
                      <UploadCloud size={28} className="text-gray-300" />
                      <p className="text-sm font-semibold text-gray-500">Click to select image</p>
                      <p className="text-xs text-gray-400">PNG, JPG, WEBP · max 5 MB</p>
                    </div>
                  )}
                </div>

                {imageUploadError && (
                  <p className="text-red-500 text-xs mt-1.5">{imageUploadError}</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featuredChk"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                  className="w-4 h-4 accent-[#ff4d15]"
                />
                <label htmlFor="featuredChk" className="text-xs font-bold text-gray-700 cursor-pointer">
                  Mark as Featured
                </label>
              </div>
              <div className="md:col-span-2 flex gap-3 pt-2">
                <button
                  type="submit"
                  className="bg-[#25345d] text-white text-xs font-bold px-6 py-2.5 rounded hover:bg-[#1c2847] transition-all uppercase tracking-wider"
                >
                  {editingId ? 'Update Article' : 'Publish Article'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="border border-gray-300 text-gray-600 text-xs font-bold px-6 py-2.5 rounded hover:bg-gray-50 transition-all uppercase tracking-wider"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Blog Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-[#25345d]">All Articles</h2>
            <span className="text-xs text-gray-400">{blogs.length} posts</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr className="text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                  <th className="px-6 py-3">Image</th>
                  <th className="px-6 py-3">Title</th>
                  <th className="px-6 py-3">Category</th>
                  <th className="px-6 py-3">Author</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3 text-center">Featured</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {blogs.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center text-gray-400 py-12 text-xs">No articles yet. Create one!</td>
                  </tr>
                )}
                {blogs.map((b) => (
                  <tr key={b.id} className="hover:bg-gray-50/60 transition-colors">
                    <td className="px-6 py-3">
                      <img
                        src={b.image}
                        alt=""
                        className="w-14 h-10 object-cover rounded"
                      />
                    </td>
                    <td className="px-6 py-3 font-semibold text-gray-700 max-w-[220px]">
                      <p className="truncate">{b.title}</p>
                    </td>
                    <td className="px-6 py-3">
                      <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {b.category}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-gray-500 text-xs">{b.author}</td>
                    <td className="px-6 py-3 text-gray-400 text-xs whitespace-nowrap">{b.date}</td>
                    <td className="px-6 py-3 text-center">
                      <button
                        onClick={() => toggleFeatured(b.id)}
                        title={b.isFeatured ? 'Remove from featured' : 'Mark as featured'}
                        className="hover:scale-110 transition-transform"
                      >
                        {b.isFeatured
                          ? <Star size={16} className="text-amber-400 fill-amber-400" />
                          : <StarOff size={16} className="text-gray-300" />
                        }
                      </button>
                    </td>
                    <td className="px-6 py-3 text-right">
                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={() => handleEdit(b)}
                          className="flex items-center gap-1 text-[#1a73e8] hover:bg-blue-50 px-2 py-1 rounded text-xs font-bold transition-colors"
                        >
                          <Pencil size={12} /> Edit
                        </button>
                        <button
                          onClick={() => handleDelete(b.id)}
                          className="flex items-center gap-1 text-red-500 hover:bg-red-50 px-2 py-1 rounded text-xs font-bold transition-colors"
                        >
                          <Trash2 size={12} /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBlog;
