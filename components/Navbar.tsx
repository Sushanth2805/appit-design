import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ArrowRight } from './ui/Icons';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Benefits', href: '#benefits' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 pointer-events-none">
      <div 
        className={`pointer-events-auto transition-all duration-500 ease-in-out w-full max-w-7xl rounded-2xl border ${
          isScrolled 
            ? 'bg-surface/80 backdrop-blur-xl border-white/10 shadow-2xl py-2 px-6 max-w-5xl' 
            : 'bg-transparent border-transparent py-4 px-4'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-2 transition-colors ${isScrolled ? 'bg-white text-black' : 'bg-surfaceHighlight border border-white/10 text-white'}`}>
               <Zap size={18} className="fill-current" />
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">Appit</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-secondary hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="text-sm font-medium text-white hover:text-gray-300">Log in</a>
            <a
              href="#"
              className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2 group"
            >
              Get Started
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-surfaceHighlight focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-surface border border-white/10 rounded-2xl p-4 shadow-2xl pointer-events-auto md:hidden">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-surfaceHighlight"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-white/10 my-2"></div>
            <a href="#" className="w-full text-center py-3 text-gray-300 font-medium">Log in</a>
            <a
              href="#"
              className="w-full text-center bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200"
            >
              Get Template
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};