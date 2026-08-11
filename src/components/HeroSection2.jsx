import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    preTitle: 'Study Abroad with',
    title: 'EDUVISTA',
    titleSub: 'INTERNATIONAL',
    desc: 'No IELTS | No Age Limit | Top Ranked Universities | Work Allowed and many more...',
    bg: '/assets/s1.jpg',
  },
  {
    id: 2,
    preTitle: 'Top Ranked',
    title: 'UNIVERSITIES',
    titleSub: '',
    desc: 'USA, Canada, UK, Australia, Germany, Sweden, Netherlands, Ireland, Malaysia, Hungary, Finland',
    bg: '/assets/s2.jpg',
  },
  {
    id: 3,
    preTitle: 'Your Gateway to',
    title: 'GLOBAL EDUCATION',
    titleSub: '',
    desc: 'Expert Guidance | Scholarship Assistance | Visa Support | Pre & Post Arrival Help',
    bg: '/assets/s3.jpg',
  },
];

// Orange icon SVGs matching the mockup exactly
const CheckIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" style={{ width: 36, height: 36 }}>
    <circle cx="20" cy="20" r="18" stroke="#ff4d15" strokeWidth="2" />
    <path d="M12 20l6 6 10-12" stroke="#ff4d15" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const UniversityIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" style={{ width: 36, height: 36 }}>
    <path d="M6 34h28M10 34V20M30 34V20M20 6L4 18h32L20 6z" stroke="#ff4d15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 34V26h8v8" stroke="#ff4d15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const DocumentIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" style={{ width: 36, height: 36 }}>
    <rect x="8" y="4" width="24" height="32" rx="2" stroke="#ff4d15" strokeWidth="2"/>
    <line x1="14" y1="14" x2="26" y2="14" stroke="#ff4d15" strokeWidth="2" strokeLinecap="round"/>
    <line x1="14" y1="20" x2="26" y2="20" stroke="#ff4d15" strokeWidth="2" strokeLinecap="round"/>
    <line x1="14" y1="26" x2="20" y2="26" stroke="#ff4d15" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const featureCards = [
  {
    icon: <CheckIcon />,
    title: 'Overseas Education and Study Visa Consultants',
    desc: 'Porta semper lacus cursus, feugiat primis ultrce and ligula risus auctor tempus feugiat dolor and lacinia.',
  },
  {
    icon: <UniversityIcon />,
    title: 'Guaranteed Admission in Top Ranked Universities',
    desc: 'Porta semper lacus cursus, feugiat primis ultrce and ligula risus auctor tempus feugiat dolor and lacinia.',
  },
  {
    icon: <DocumentIcon />,
    title: 'No IELTS Required for Australian Study Visa',
    desc: 'Porta semper lacus cursus, feugiat primis ultrce and ligula risus auctor tempus feugiat dolor and lacinia.',
  },
];

const HeroSection2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 400);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full overflow-hidden">
      {/* ── HERO BANNER ── */}
      <div
        className="relative w-full flex items-center"
        style={{ minHeight: '520px' }}
      >
        {/* Background image with smooth fade transition */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            backgroundImage: `url('${slide.bg}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            opacity: isTransitioning ? 0 : 1,
          }}
        />

        {/* Dark left-heavy overlay — same as mockup */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(10,20,50,0.82) 0%, rgba(15,30,65,0.65) 55%, rgba(5,15,40,0.35) 100%)',
          }}
        />

        {/* Slide content — LEFT aligned, exactly matching mockup */}
        <div
          className="relative z-10 w-full px-8 md:px-16 lg:px-24 py-20"
          style={{ maxWidth: '660px' }}
        >
          {/* Pre-title: normal weight, white, 22-24px */}
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '22px',
              fontWeight: '400',
              color: '#ffffff',
              marginBottom: '6px',
              lineHeight: 1.3,
              opacity: isTransitioning ? 0 : 1,
              transition: 'opacity 0.4s ease',
            }}
          >
            {slide.preTitle}
          </p>

          {/* Main BIG BOLD UPPERCASE title */}
          <h1
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: '900',
              color: '#ffffff',
              textTransform: 'uppercase',
              lineHeight: 1.05,
              margin: '0 0 4px',
              letterSpacing: '-0.5px',
              opacity: isTransitioning ? 0 : 1,
              transition: 'opacity 0.4s ease',
            }}
          >
            {slide.title}
          </h1>

          {/* Optional sub bold line */}
          {slide.titleSub && (
            <h2
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(22px, 3.5vw, 36px)',
                fontWeight: '800',
                color: '#ffffff',
                textTransform: 'uppercase',
                lineHeight: 1.2,
                marginBottom: '16px',
                opacity: isTransitioning ? 0 : 1,
                transition: 'opacity 0.4s ease',
              }}
            >
              {slide.titleSub}
            </h2>
          )}

          {/* Description — white, 15-16px, normal weight */}
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '15px',
              fontWeight: '400',
              color: '#ffffff',
              marginTop: '14px',
              lineHeight: 1.65,
              maxWidth: '520px',
              opacity: isTransitioning ? 0 : 1,
              transition: 'opacity 0.4s ease',
            }}
          >
            {slide.desc}
          </p>
        </div>
      </div>

      {/* ── THREE FEATURE CARDS — overlapping bottom of hero, matching mockup ── */}
      <div
        className="relative z-20 mx-auto px-4"
        style={{ maxWidth: '900px', marginTop: '-60px', marginBottom: '0' }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-3 bg-white shadow-xl divide-y md:divide-y-0 md:divide-x divide-gray-100"
        >
          {featureCards.map((card, idx) => (
            <div
              key={idx}
              style={{
                padding: '28px 24px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              {/* Orange icon */}
              <div>{card.icon}</div>

              {/* Bold orange title */}
              <h3
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '700',
                  fontSize: '14px',
                  color: '#ff4d15',
                  lineHeight: '1.4',
                  margin: 0,
                }}
              >
                {card.title}
              </h3>

              {/* Gray description */}
              <p
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '12.5px',
                  color: '#888',
                  lineHeight: '1.65',
                  margin: 0,
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
