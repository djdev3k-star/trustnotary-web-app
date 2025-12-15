import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}
      style={{
        boxShadow: isScrolled ? '0 8px 32px -8px rgba(0, 0, 0, 0.3)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(205, 173, 125, 0.1)' : 'none',
        background: isScrolled
          ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.9) 90%, rgba(0, 0, 0, 0.7) 100%)'
          : 'transparent'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/src/assets/trust_notary_logo.svg"
              alt="Trust Notary Logo"
              className="h-20 w-auto"
            />
            <div className="flex flex-col">
              <div className="flex items-baseline space-x-2">
                <span className="text-white text-4xl font-bold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Trust
                </span>
                <span className="text-white text-xl font-normal tracking-widest uppercase" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  NOTARY
                </span>
              </div>
              <span className="text-white text-base" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                <span style={{ fontFamily: 'EB Garamond, serif', fontWeight: 600 }}>Wanda Jones</span>, Notary Public
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-12">
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-[#cdad7d] transition-colors font-medium text-base"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-[#cdad7d] transition-colors font-medium text-base"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-white hover:text-[#cdad7d] transition-colors font-medium text-base"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('schedule')}
                className="text-white hover:text-[#cdad7d] transition-colors font-medium text-base"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Schedule
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-[#cdad7d] transition-colors font-medium text-base"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Contact
              </button>
            </div>

            <a
              href="tel:2146854750"
              className="flex items-center space-x-2"
            >
              <Phone className="w-5 h-5 text-[#cdad7d]" />
              <span className="text-lg font-semibold text-white hover:text-[#cdad7d] transition-colors" style={{ fontFamily: 'EB Garamond, serif' }}>
                (214) 685-4750
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;