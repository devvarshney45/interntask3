import React, { useState, useRef } from 'react';
import { Lock, LogOut, Trash2, Pencil, Star, StarOff, PlusCircle, UploadCloud, X, LayoutDashboard, FileText, GraduationCap } from 'lucide-react';

// ─── Cloudinary config (unsigned upload only) ───
const CLOUD_NAME = 'dxaww50be';
const UPLOAD_PRESET = 'eduvista_uploads';

// ─── Secret key ─────────────────────────────────
const ADMIN_KEY = 'eduvista@2025';
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

const AdminBlog = () => {
  const [authed, setAuthed] = useState(false);
  const [keyInput, setKeyInput] = useState('');
  const [keyError, setKeyError] = useState('');
  const [adminSection, setAdminSection] = useState('blogs'); // 'blogs' | 'courses'
  const [blogs, setBlogs] = useState(loadBlogs);

  // ── Courses state ──
  const COURSES_KEY = 'eduvista_courses';
  const defaultCourseItems = [
    { id: 1, title: 'IELTS Preparation Course', desc: 'Comprehensive coaching covering listening, reading, writing, and speaking modules.' },
    { id: 2, title: 'TOEFL Preparation', desc: 'Strategic preparation to excel in the Test of English as a Foreign Language.' },
    { id: 3, title: 'PTE Academic Coaching', desc: 'Focus on Pearson Test of English modules with computer-based practice.' },
    { id: 4, title: 'GRE & GMAT Prep Course', desc: 'Advanced quantitative and verbal reasoning strategies for admissions.' },
  ];

  const loadCourses = () => {
    try {
      const s = localStorage.getItem(COURSES_KEY);
      return s ? JSON.parse(s) : defaultCourseItems;
    } catch { return defaultCourseItems; }
  };

  const [courses, setCourses] = useState(loadCourses);
  const [courseEditId, setCourseEditId] = useState(null);
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDesc, setCourseDesc] = useState('');
  const [showCourseForm, setShowCourseForm] = useState(false);

  const persistCourses = (updated) => {
    setCourses(updated);
    localStorage.setItem(COURSES_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('storage'));
  };

  const handleCourseSave = (e) => {
    e.preventDefault();
    if (!courseTitle) return;
    if (courseEditId) {
      persistCourses(courses.map(c => c.id === courseEditId ? { ...c, title: courseTitle, desc: courseDesc } : c));
    } else {
      persistCourses([...courses, { id: Date.now(), title: courseTitle, desc: courseDesc }]);
    }
    setCourseEditId(null); setCourseTitle(''); setCourseDesc(''); setShowCourseForm(false);
  };

  const handleCourseEdit = (c) => {
    setCourseEditId(c.id); setCourseTitle(c.title); setCourseDesc(c.desc);
    setShowCourseForm(true); window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCourseDelete = (id) => {
    if (window.confirm('Delete this course?')) persistCourses(courses.filter(c => c.id !== id));
  };

  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Immigration Visa');
  const [author, setAuthor] = useState('Admin');
  const [image, setImage] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [imageUploading, setImageUploading] = useState(false);
  const [imageUploadError, setImageUploadError] = useState('');
  const fileInputRef = useRef(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setImageUploadError('Please select a valid image file');
      return;
    }
    setImageUploading(true);
    setImageUploadError('');

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.secure_url) {
        setImage(data.secure_url);
      } else {
        setImageUploadError('Upload failed. Try again.');
      }
    } catch {
      setImageUploadError('Error uploading image.');
    } finally {
      setImageUploading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (keyInput === ADMIN_KEY) {
      setAuthed(true);
      setKeyError('');
    } else {
      setKeyError('Invalid Secret Key');
    }
  };

  const persistBlogs = (newBlogs) => {
    setBlogs(newBlogs);
    saveBlogs(newBlogs);
    window.dispatchEvent(new Event('storage'));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!title || !description || !image) {
      alert('Please fill out all required fields and upload an image.');
      return;
    }

    if (editingId) {
      const updated = blogs.map((b) =>
        b.id === editingId
          ? { ...b, title, description, category, author, image, isFeatured }
          : b
      );
      persistBlogs(updated);
    } else {
      const newB = {
        id: Date.now(),
        title,
        description,
        category,
        author,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        readTime: `${Math.max(3, Math.ceil(description.split(' ').length / 150))} min read`,
        image,
        isFeatured,
      };
      persistBlogs([newB, ...blogs]);
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
      <div className="min-h-screen bg-[#0a1120] flex items-center justify-center px-4 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-[#1a73e8]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-[#ff4d15]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl w-full max-w-md p-8 relative z-10">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-[#1a73e8]/10 border border-[#1a73e8]/30 rounded-2xl flex items-center justify-center mb-4 shadow-inner">
              <Lock size={28} className="text-[#1a73e8]" />
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Edu<span className="text-[#1a73e8]">Vista</span> Control Panel
            </h1>
            <p className="text-xs text-slate-400 mt-2 font-medium">Please enter your credentials to authenticate</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Secret Key</label>
              <input
                type="password"
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] transition-all"
                autoFocus
              />
              {keyError && <p className="text-red-400 text-xs mt-2 font-semibold">⚠️ {keyError}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-[#1a73e8] text-white py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#155cb8] active:scale-[0.98] transition-all shadow-lg shadow-[#1a73e8]/20"
            >
              Authenticate Portal
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ── Admin Dashboard ──
  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100 flex flex-col md:flex-row">

      {/* Sidebar navigation */}
      <aside className="w-full md:w-64 bg-slate-900 border-r border-slate-800 flex flex-col shrink-0">
        {/* Sidebar Brand header */}
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#1a73e8] flex items-center justify-center text-white font-black text-sm">EV</div>
          <div>
            <h2 className="font-extrabold text-sm tracking-tight text-white">EduVista Admin</h2>
            <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" /> Live Server
            </span>
          </div>
        </div>

        {/* Sidebar Section tabs */}
        <div className="p-4 flex-1 space-y-1.5">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2">Management</p>
          <button
            onClick={() => setAdminSection('blogs')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-bold transition-all ${adminSection === 'blogs'
                ? 'bg-[#1a73e8] text-white shadow-md shadow-[#1a73e8]/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
          >
            <FileText size={16} />
            <span> Articles ({blogs.length})</span>
          </button>
          <button
            onClick={() => setAdminSection('courses')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-bold transition-all ${adminSection === 'courses'
                ? 'bg-[#1a73e8] text-white shadow-md shadow-[#1a73e8]/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
          >
            <GraduationCap size={16} />
            <span>📚 Courses ({courses.length})</span>
          </button>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-800">
          <button
            onClick={() => setAuthed(false)}
            className="w-full flex items-center justify-center gap-2 bg-slate-850 hover:bg-red-950/40 border border-slate-800 text-slate-400 hover:text-red-400 py-2.5 rounded-lg text-xs font-bold transition-all"
          >
            <LogOut size={14} />
            <span>Logout Portal</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 bg-[#080d1a] pb-16">
        {/* Top Sticky Header */}
        <header className="sticky top-0 bg-[#080d1a]/85 backdrop-blur-md border-b border-slate-900 z-40 px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-black text-white tracking-tight capitalize" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {adminSection === 'blogs' ? '📝 Article Management' : '📚 Course Catalog'}
            </h1>
            <p className="text-[11px] text-slate-500 font-medium">Manage and dynamic-sync live site assets</p>
          </div>

          <div>
            {adminSection === 'blogs' && (
              <button
                onClick={() => { resetForm(); setShowForm(true); }}
                className="flex items-center gap-2 bg-[#ff4d15] text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-[#e03e08] transition-all shadow-lg shadow-[#ff4d15]/10"
              >
                <PlusCircle size={14} /> New Article
              </button>
            )}
            {adminSection === 'courses' && (
              <button
                onClick={() => { setShowCourseForm(true); setCourseEditId(null); setCourseTitle(''); setCourseDesc(''); }}
                className="flex items-center gap-2 bg-[#ff4d15] text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-[#e03e08] transition-all shadow-lg shadow-[#ff4d15]/10"
              >
                <PlusCircle size={14} /> New Course
              </button>
            )}
          </div>
        </header>

        <div className="px-8 py-8">
          {/* ── COURSES PANEL ── */}
          {adminSection === 'courses' && (
            <div className="space-y-8">
              {showCourseForm && (
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl max-w-3xl">
                  <h2 className="text-xs font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-1.5">
                    {courseEditId ? '✏️ Edit Course Details' : '📚 Register New Course'}
                  </h2>
                  <form onSubmit={handleCourseSave} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Course Title *</label>
                      <input
                        type="text"
                        value={courseTitle}
                        onChange={(e) => setCourseTitle(e.target.value)}
                        placeholder="e.g. IELTS Premium Preparation"
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#1a73e8]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Description *</label>
                      <textarea
                        value={courseDesc}
                        onChange={(e) => setCourseDesc(e.target.value)}
                        placeholder="Detail syllabus highlights..."
                        rows={4}
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#1a73e8]"
                      />
                    </div>
                    <div className="flex gap-3 pt-2">
                      <button
                        type="submit"
                        className="bg-[#1a73e8] text-white text-xs font-bold px-6 py-2.5 rounded-lg hover:bg-[#155cb8] transition-all uppercase tracking-widest"
                      >
                        {courseEditId ? 'Update Course' : 'Save Course'}
                      </button>
                      <button
                        type="button"
                        onClick={() => { setShowCourseForm(false); setCourseEditId(null); }}
                        className="border border-slate-800 text-slate-400 hover:text-white text-xs font-bold px-6 py-2.5 rounded-lg hover:bg-slate-850 transition-all uppercase"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Courses Grid Card List */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
                <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between">
                  <h3 className="font-bold text-white text-xs uppercase tracking-wider">Live Course Catalog</h3>
                  <span className="text-[11px] text-slate-500 font-semibold">{courses.length} courses listed</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead className="bg-slate-950 border-b border-slate-800">
                      <tr className="text-left font-bold text-slate-400 uppercase tracking-widest">
                        <th className="px-6 py-4 w-12">#</th>
                        <th className="px-6 py-4">Title</th>
                        <th className="px-6 py-4">Syllabus Highlights</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {courses.length === 0 && (
                        <tr>
                          <td colSpan={4} className="text-center text-slate-500 py-16 font-medium text-xs">No courses registered yet.</td>
                        </tr>
                      )}
                      {courses.map((c, idx) => (
                        <tr key={c.id} className="hover:bg-slate-800/20 transition-colors">
                          <td className="px-6 py-4 text-slate-500 font-bold">{idx + 1}</td>
                          <td className="px-6 py-4 font-bold text-white text-sm">{c.title}</td>
                          <td className="px-6 py-4 text-slate-400 leading-relaxed max-w-sm truncate">{c.desc}</td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex gap-2 justify-end">
                              <button
                                onClick={() => handleCourseEdit(c)}
                                className="flex items-center gap-1.5 text-[#1a73e8] hover:bg-[#1a73e8]/10 border border-[#1a73e8]/20 px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-colors"
                              >
                                <Pencil size={11} /> Edit
                              </button>
                              <button
                                onClick={() => handleCourseDelete(c.id)}
                                className="flex items-center gap-1.5 text-red-400 hover:bg-red-950/20 border border-red-950 px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-colors"
                              >
                                <Trash2 size={11} /> Delete
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
          )}

          {/* ── BLOGS PANEL ── */}
          {adminSection === 'blogs' && (
            <div className="space-y-8">
              {showForm && (
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl max-w-3xl">
                  <h2 className="text-xs font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-1.5">
                    {editingId ? '✏️ Modify Article Post' : '📝 Publish New Article'}
                  </h2>
                  <form onSubmit={handleSave} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Article Title *</label>
                        <input
                          type="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder="What visa do you need..."
                          required
                          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#1a73e8]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Author *</label>
                        <input
                          type="text"
                          value={author}
                          onChange={(e) => setAuthor(e.target.value)}
                          placeholder="e.g. Admin Team"
                          required
                          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#1a73e8]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">Article Description / Content *</label>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Write clean paragraph content here..."
                        rows={6}
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#1a73e8]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Featured Image Banner *</label>
                      <div
                        className="relative border-2 border-dashed border-slate-800 hover:border-[#1a73e8] rounded-xl p-6 text-center cursor-pointer transition-colors"
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
                            <div className="w-8 h-8 border-2 border-[#1a73e8] border-t-transparent rounded-full animate-spin" />
                            <p className="text-xs text-slate-400">Uploading to cloud server...</p>
                          </div>
                        ) : image ? (
                          <div className="relative inline-block">
                            <img
                              src={image}
                              alt="Preview"
                              className="max-h-48 rounded-lg border border-slate-800 object-cover mx-auto"
                            />
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); setImage(''); }}
                              className="absolute -top-2.5 -right-2.5 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
                            >
                              <X size={13} />
                            </button>
                            <p className="text-[11px] text-slate-500 mt-2 font-medium">Click to select a different banner image</p>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-2 py-4">
                            <UploadCloud size={32} className="text-slate-600 mb-1" />
                            <p className="text-xs font-bold text-slate-300">Click to upload media</p>
                            <p className="text-[10px] text-slate-500">Supports PNG, JPG, WEBP formats (max 5MB)</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 py-1">
                      <input
                        type="checkbox"
                        id="featuredPostChk"
                        checked={isFeatured}
                        onChange={(e) => setIsFeatured(e.target.checked)}
                        className="w-4 h-4 rounded border-slate-800 bg-slate-950 text-[#1a73e8] focus:ring-0 focus:ring-offset-0"
                      />
                      <label htmlFor="featuredPostChk" className="text-xs font-bold text-slate-300 cursor-pointer">
                        Mark this article as Featured (Highlights top card index)
                      </label>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="submit"
                        className="bg-[#1a73e8] text-white text-xs font-bold px-6 py-2.5 rounded-lg hover:bg-[#155cb8] transition-all uppercase tracking-widest"
                      >
                        {editingId ? 'Save Edits' : 'Publish Article'}
                      </button>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="border border-slate-800 text-slate-400 hover:text-white text-xs font-bold px-6 py-2.5 rounded-lg hover:bg-slate-850 transition-all uppercase"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Articles Grid Card List */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
                <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between">
                  <h3 className="font-bold text-white text-xs uppercase tracking-wider">Live Published News</h3>
                  <span className="text-[11px] text-slate-500 font-semibold">{blogs.length} articles published</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead className="bg-slate-950 border-b border-slate-800">
                      <tr className="text-left font-bold text-slate-400 uppercase tracking-widest">
                        <th className="px-6 py-4 w-24">Banner</th>
                        <th className="px-6 py-4">Title</th>
                        <th className="px-6 py-4 w-32">Author</th>
                        <th className="px-6 py-4 w-28">Date</th>
                        <th className="px-6 py-4 w-24 text-center">Featured</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {blogs.length === 0 && (
                        <tr>
                          <td colSpan={6} className="text-center text-slate-500 py-16 font-medium text-xs">No article posts published yet.</td>
                        </tr>
                      )}
                      {blogs.map((b) => (
                        <tr key={b.id} className="hover:bg-slate-800/20 transition-colors">
                          <td className="px-6 py-4">
                            <img src={b.image} alt="" className="w-14 h-9 object-cover rounded border border-slate-800" />
                          </td>
                          <td className="px-6 py-4 font-bold text-white text-sm max-w-sm truncate">{b.title}</td>
                          <td className="px-6 py-4 text-slate-400 font-semibold">{b.author}</td>
                          <td className="px-6 py-4 text-slate-500 whitespace-nowrap">{b.date}</td>
                          <td className="px-6 py-4 text-center">
                            <button
                              onClick={() => toggleFeatured(b.id)}
                              className="hover:scale-110 active:scale-95 transition-transform"
                            >
                              {b.isFeatured ? (
                                <Star size={16} className="text-amber-400 fill-amber-400 drop-shadow-md" />
                              ) : (
                                <StarOff size={16} className="text-slate-600" />
                              )}
                            </button>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex gap-2 justify-end">
                              <button
                                onClick={() => handleEdit(b)}
                                className="flex items-center gap-1.5 text-[#1a73e8] hover:bg-[#1a73e8]/10 border border-[#1a73e8]/20 px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-colors"
                              >
                                <Pencil size={11} /> Edit
                              </button>
                              <button
                                onClick={() => handleDelete(b.id)}
                                className="flex items-center gap-1.5 text-red-400 hover:bg-red-950/20 border border-red-950 px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-colors"
                              >
                                <Trash2 size={11} /> Delete
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
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminBlog;
