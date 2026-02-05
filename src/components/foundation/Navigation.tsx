import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/lib/constants';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getPageFromHref = (href: string) => {
    if (href === '/') return 'home';
    return href.replace('/', '');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3 group"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              isScrolled ? 'bg-[#1A365D]' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <span className={`font-serif font-bold text-lg ${
                isScrolled ? 'text-[#D4AF37]' : 'text-white'
              }`}>
                AS
              </span>
            </div>
            <div className="hidden sm:block">
              <p className={`font-serif text-lg font-semibold tracking-tight transition-colors ${
                isScrolled ? 'text-[#2C2C2C]' : 'text-white'
              }`}>
                Abbas Shaffi Foundation
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => {
              const page = getPageFromHref(link.href);
              const isActive = currentPage === page;
              return (
                <button
                  key={link.name}
                  onClick={() => onNavigate(page)}
                                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    isActive
                      ? isScrolled
                        ? 'text-[#D4AF37] bg-[#1A365D]/5'
                        : 'text-[#D4AF37] bg-white/10'
                      : isScrolled
                        ? 'text-[#2C2C2C] hover:text-[#1A365D] hover:bg-gray-100'
                        : 'text-[#2C2C2C] hover:text-[#1A365D] hover:bg-black/5'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'text-[#2C2C2C] hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 space-y-1">
          {NAV_LINKS.map((link) => {
            const page = getPageFromHref(link.href);
            const isActive = currentPage === page;
            return (
              <button
                key={link.name}
                onClick={() => {
                  onNavigate(page);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-[#D4AF37] bg-[#1A365D]/5'
                    : 'text-[#2C2C2C] hover:text-[#1A365D] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
