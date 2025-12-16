import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import trustNotaryLogo from '../assets/trust_notary_logo.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['about', 'services', 'testimonials', 'schedule', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
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
        background: isScrolled
          ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 0.2) 100%)'
          : 'transparent'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 lg:py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <img
              src={trustNotaryLogo}
              alt="Trust Notary Logo"
              className="h-12 sm:h-16 lg:h-20 w-auto"
            />
            <div className="flex flex-col">
              <div className="flex items-baseline space-x-1 sm:space-x-2">
                <span className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Trust
                </span>
                <span className="text-white text-sm sm:text-lg lg:text-2xl font-normal tracking-widest uppercase" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  NOTARY
                </span>
              </div>
              <span className="text-white text-xs sm:text-sm lg:text-base" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                <span style={{ fontFamily: 'EB Garamond, serif', fontWeight: 600 }}>Wanda Jones</span>, Notary Public
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-12">
            <div className="hidden lg:flex items-center space-x-8">
              {['about', 'services', 'testimonials', 'schedule', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="relative text-white hover:text-[#cdad7d] transition-colors font-medium text-base capitalize"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#cdad7d]"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.a
              href="tel:2146854750"
              className="hidden md:flex items-center space-x-2 bg-[#cdad7d]/10 hover:bg-[#cdad7d]/20 px-4 py-2 rounded-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5 text-[#cdad7d]" />
              <span className="text-lg font-semibold text-white" style={{ fontFamily: 'EB Garamond, serif' }}>
                (214) 685-4750
              </span>
            </motion.a>

            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
              {['about', 'services', 'testimonials', 'schedule', 'contact'].map((section, index) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left text-white hover:text-[#cdad7d] transition-colors font-medium text-lg capitalize py-2"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {section}
                </motion.button>
              ))}
              <motion.a
                href="tel:2146854750"
                className="flex items-center space-x-2 text-white hover:text-[#cdad7d] transition-colors py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Phone className="w-5 h-5 text-[#cdad7d]" />
                <span className="text-lg font-semibold" style={{ fontFamily: 'EB Garamond, serif' }}>
                  (214) 685-4750
                </span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;