import React, { useState, useEffect } from 'react';
import { Settings, ArrowUp } from 'lucide-react';

const FloatingUI = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back to top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-[#25345d] text-white w-10 h-10 rounded-sm flex items-center justify-center shadow-lg hover:bg-[#ff4d15] transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
};

export default FloatingUI;
