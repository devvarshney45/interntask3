import React from 'react';

const newsArticles = [
  {
    id: 1,
    image: '/assets/advisors_table.png',
    category: 'Immigration Visa',
    readTime: '12 min read',
    title: 'What visa do you need to work legally in Singapore?',
    excerpt: 'Aliquam nullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna tempor sodales sapien ...',
    author: 'Sean McCarthy',
    date: '18 hours ago',
  },
  {
    id: 2,
    image: '/assets/sydney_hero_bg.png',
    category: 'Working Visa',
    readTime: '8 min read',
    title: 'Top reasons for Australian working visa rejection',
    excerpt: 'Aliquam nullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna tempor sodales sapien ...',
    author: 'Ben Markton',
    date: 'Dec 02, 2019',
  },
  {
    id: 3,
    image: '/assets/couple_travel.png',
    category: 'PR Visa',
    readTime: '6 min read',
    title: 'The UK immigration & permanent residency consultants',
    excerpt: 'Aliquam nullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna tempor sodales sapien ...',
    author: 'Caroline',
    date: 'Nov 26, 2019',
  },
];

const LatestNews = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#25345d] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Our Stories & Latest News
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Cursus porta, feugiat primis in ultrce ligula risus auctor tempus dolor feugiat, felis
            lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa
          </p>
        </div>

        {/* 3 Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="group bg-white overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category chip */}
                <div className="absolute top-3 left-3">
                  <span className="bg-[#ff4d15] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="text-[11px] text-gray-400 mb-3 font-medium">
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h3
                  className="font-bold text-[#25345d] text-[15px] leading-snug mb-3 group-hover:text-[#ff4d15] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <a href="#">{article.title}</a>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-[12px] leading-relaxed mb-5 flex-1">
                  {article.excerpt}
                </p>

                {/* Author & Date */}
                <div className="text-[11px] text-gray-400 border-t border-gray-100 pt-3 flex justify-between">
                  <span>By <strong className="text-gray-600 font-semibold">{article.author}</strong></span>
                  <span>{article.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
