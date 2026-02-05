import React from 'react';
import { NAV_LINKS } from '@/lib/constants';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const getPageFromHref = (href: string) => {
    if (href === '/') return 'home';
    return href.replace('/', '');
  };

  return (
    <footer className="bg-[#1A365D] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Foundation Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                <span className="font-serif font-bold text-lg text-[#D4AF37]">AS</span>
              </div>
              <span className="font-serif text-lg font-semibold">Abbas Shaffi Foundation</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Dedicated to uplifting communities worldwide through strategic, transparent, and unbiased giving.
            </p>
            {/* Social icons removed */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#D4AF37] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate(getPageFromHref(link.href))}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-[#D4AF37] mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {NAV_LINKS.slice(4).map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate(getPageFromHref(link.href))}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#D4AF37] mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 mt-0.5 text-[#D4AF37]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Portland, Oregon
                  <br />
                  United States
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-[#D4AF37]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@abbasshaffifoundation.org</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/50 text-sm">
              © 2025 Abbas Shaffi Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/50">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Use</button>
              <button className="hover:text-white transition-colors">Accessibility</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
