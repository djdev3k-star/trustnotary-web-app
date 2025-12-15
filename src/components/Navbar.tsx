import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const Navbar = () => {
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
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://trust-notary.com/61b326e6-b46f-46bd-9ed6-09fa51ab202f"
              alt="Trust Notary Logo"
              className="h-12 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="text-white text-2xl font-bold">Trust Notary</span>
          </div>

          <div className="flex items-center space-x-12">
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-[#cdad7d] transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-[#cdad7d] transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-white hover:text-[#cdad7d] transition-colors font-medium"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('schedule')}
                className="text-white hover:text-[#cdad7d] transition-colors font-medium"
              >
                Schedule
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-[#cdad7d] transition-colors font-medium"
              >
                Contact
              </button>
            </div>

            <a
              href="tel:2146854750"
              className="flex items-center space-x-3"
            >
              <Phone className="w-6 h-6 text-[#cdad7d]" />
              <span className="text-2xl font-bold text-white hover:text-[#cdad7d] transition-colors">
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