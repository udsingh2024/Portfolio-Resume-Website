import React, { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';
import logoWhite from '../assets/LOGO WHITE_edited.png';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled for background styling
      setIsScrolled(window.scrollY > 50);

      // Check active section
      const scrollPos = window.scrollY + 200;
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-[#09090b]/80 border-b border-white/5 backdrop-blur-md shadow-lg shadow-black/20'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <img
            src={logoWhite}
            alt="Uday Logo"
            className="h-10 w-auto transition-transform duration-500 group-hover:rotate-12"
          />
          <span className="font-display font-black tracking-widest text-lg text-white group-hover:text-primary transition-colors">
            UDAY.
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`font-sans text-sm tracking-wide font-medium cursor-pointer transition-all relative py-2 ${
                activeSection === link.id
                  ? 'text-white font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => handleNavClick('contact')}
            className="relative px-6 py-2 rounded-full overflow-hidden text-sm font-semibold text-white transition-all cursor-pointer bg-zinc-900 border border-white/10 hover:border-primary/50 group active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              Get in Touch <i className="ri-arrow-right-line"></i>
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-zinc-300 hover:text-white text-3xl focus:outline-none p-1 cursor-pointer transition-colors"
          aria-label="Toggle navigation menu"
        >
          <i className={mobileMenuOpen ? 'ri-close-line' : 'ri-menu-4-fill'}></i>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-80 max-w-full bg-[#09090b] border-l border-white/10 shadow-2xl p-8 z-50 flex flex-col justify-between transition-transform duration-300 ease-out transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <span className="font-display font-black tracking-widest text-lg text-white">
              UDAY.
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-400 hover:text-white text-2xl cursor-pointer"
            >
              <i className="ri-close-line"></i>
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left font-sans text-xl font-medium cursor-pointer transition-colors ${
                  activeSection === link.id ? 'text-primary' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>

        <button
          onClick={() => handleNavClick('contact')}
          className="w-full bg-gradient-to-r from-primary to-secondary py-3 text-center rounded-xl font-bold text-white shadow-lg shadow-primary/20 cursor-pointer active:scale-95 transition-transform"
        >
          Hire Me
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm lg:hidden"
        />
      )}
    </header>
  );
};

export default Header;
