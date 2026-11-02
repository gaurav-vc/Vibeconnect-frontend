import React, { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar({ currentPage, navigateTo }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { id: 1, label: 'Home', icon: 'home' },
    { id: 3, label: 'Features', icon: 'auto_awesome' },
    { id: 4, label: 'Pricing', icon: 'payments' },
    { id: 5, label: 'Experience', icon: 'view_in_ar' },
    { id: 6, label: 'Contact Us', icon: 'mail' },
    { id: 7, label: 'FAQ', icon: 'help_outline' },
  ];

  const handleNavClick = (pageId) => {
    setIsMobileMenuOpen(false);
    navigateTo(pageId);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 md:px-10 lg:px-12 py-3 transition-all duration-300">
        <div className="max-w-[1600px] mx-auto">
          <header className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-500 ${
            scrolled 
              ? 'bg-surface/90 backdrop-blur-2xl shadow-lg border border-outline-variant/40' 
              : 'glass-card bg-surface/75 backdrop-blur-xl border border-outline-variant/30 shadow-md'
          }`}>
            {/* Logo */}
            <div 
              onClick={() => handleNavClick(1)} 
              className="flex items-center gap-3 cursor-pointer group"
              title="VibeConnect Home"
            >
              <Logo />
              <span className="hidden sm:inline-block font-display font-extrabold text-xl tracking-tight text-primary transition-transform group-hover:scale-105">
                Vibe<span className="text-[#a67b7b]">Connect</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                      isActive 
                        ? 'text-primary bg-primary-container/40 shadow-sm' 
                        : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high/50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => handleNavClick(2)}
                className="cursor-pointer flex items-center gap-2 overflow-hidden rounded-full h-9 sm:h-10 px-4 sm:px-6 bg-primary text-on-primary text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95 shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">space_dashboard</span>
                <span className="truncate">Dashboard</span>
              </button>

              {/* Mobile / Tablet Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-high/70 hover:bg-surface-container-highest text-on-surface transition-all focus:outline-none cursor-pointer active:scale-95"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <div className="w-5 h-4 flex flex-col justify-between items-center">
                  <span className={`w-full h-0.5 bg-primary rounded-full transition-all duration-300 transform origin-left ${
                    isMobileMenuOpen ? 'rotate-45 translate-x-0.5 -translate-y-0.5' : ''
                  }`} />
                  <span className={`w-full h-0.5 bg-primary rounded-full transition-all duration-200 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`} />
                  <span className={`w-full h-0.5 bg-primary rounded-full transition-all duration-300 transform origin-left ${
                    isMobileMenuOpen ? '-rotate-45 translate-x-0.5 translate-y-0.5' : ''
                  }`} />
                </div>
              </button>
            </div>
          </header>
        </div>
      </div>

      {/* Mobile / Tablet Drawer Overlay */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Drawer Content */}
        <div 
          className={`absolute top-20 left-3 right-3 sm:left-6 sm:right-6 max-h-[calc(100vh-100px)] overflow-y-auto bg-surface/95 backdrop-blur-2xl rounded-3xl p-6 border border-outline-variant/40 shadow-2xl transition-all duration-500 transform ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-8 opacity-0 scale-95'
          }`}
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20 mb-2">
              <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant/70">Navigation Menu</span>
              <span className="text-xs font-semibold text-primary px-2.5 py-1 rounded-full bg-primary-container/40">VibeConnect</span>
            </div>

            {navLinks.map((link, idx) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{ animationDelay: `${idx * 40}ms` }}
                  className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-on-primary font-bold shadow-md shadow-primary/20 scale-[1.01]'
                      : 'hover:bg-surface-container-high/60 text-on-surface font-medium'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`material-symbols-outlined text-2xl ${isActive ? 'text-on-primary' : 'text-primary'}`}>
                      {link.icon}
                    </span>
                    <span className="text-base">{link.label}</span>
                  </div>
                  <span className={`material-symbols-outlined text-sm transition-transform ${isActive ? 'text-on-primary translate-x-1' : 'text-on-surface-variant/40'}`}>
                    chevron_right
                  </span>
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-outline-variant/20 flex flex-col gap-3">
              <button
                onClick={() => handleNavClick(2)}
                className="w-full h-12 rounded-2xl bg-gradient-to-r from-primary to-[#9a6c6d] text-on-primary font-bold text-sm tracking-wide shadow-lg shadow-primary/30 flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-transform"
              >
                <span className="material-symbols-outlined text-xl">space_dashboard</span>
                <span>Open Dashboard</span>
              </button>
              
              <div className="flex items-center justify-center gap-4 text-xs text-on-surface-variant/60 pt-2">
                <span>© 2026 VibeConnect</span>
                <span>•</span>
                <span>Fully Responsive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

