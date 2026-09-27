import React, { useState, useEffect } from 'react';
import { Menu, X, HeartHandshake } from 'lucide-react';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#social-work' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Knowledge', href: '#knowledge' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-sm border-b border-[#1E293B]/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#1E293B] text-[#F59E0B] flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-[#2563EB] transition-colors">
            DS
          </div>
          <div className="flex flex-col">
            <span className={`font-heading font-extrabold text-lg sm:text-xl leading-tight tracking-tight transition-colors ${isScrolled ? 'text-[#1E293B]' : 'text-white'}`}>
              DR. A. SRINIVASAN
            </span>
            <span className={`text-[11px] font-medium uppercase tracking-wider transition-colors ${isScrolled ? 'text-[#2563EB]' : 'text-[#93C5FD]'}`}>
              Senior Social Worker • Gender Specialist
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-2.5 py-1.5 rounded-md text-xs xl:text-sm font-medium transition-colors ${
                isScrolled
                  ? 'text-[#0F172A] hover:text-[#1E293B] hover:bg-[#EFF6FF]'
                  : 'text-white hover:text-[#F59E0B] hover:bg-white/10'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              if (onOpenContactModal) {
                e.preventDefault();
                onOpenContactModal();
              }
            }}
            className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-xs xl:text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 gap-1.5 ${
              isScrolled
                ? 'text-white bg-[#1E293B] hover:bg-[#2563EB]'
                : 'text-[#1E293B] bg-white hover:bg-gray-100'
            }`}
          >
            <HeartHandshake className={`w-4 h-4 ${isScrolled ? 'text-[#F59E0B]' : 'text-[#2563EB]'}`} />
            Connect With Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg focus:outline-none focus:ring-2 transition-colors ${
            isScrolled
              ? 'text-[#1E293B] hover:bg-[#EFF6FF] focus:ring-[#1E293B]'
              : 'text-white hover:bg-white/10 focus:ring-white'
          }`}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-out Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-b border-[#1E293B]/10 px-4 pt-3 pb-6 mt-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-[#0F172A] hover:bg-[#1E293B] hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-[#1E293B]/10 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-2.5 rounded-full text-sm font-semibold text-white bg-[#1E293B] hover:bg-[#2563EB] transition-colors flex items-center justify-center gap-2"
              >
                <HeartHandshake className="w-4 h-4 text-[#F59E0B]" />
                Connect With Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
