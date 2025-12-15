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
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-3">
              <img
                src="https://trust-notary.com/61b326e6-b46f-46bd-9ed6-09fa51ab202f"
                alt="Trust Notary Logo"
                className="h-12 w-auto"
              />
            </div>

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
          </div>

          <a
            href="tel:2146854750"
            className="flex items-center space-x-2 bg-[#cdad7d] hover:bg-[#b89a6d] transition-colors px-4 py-2 rounded-lg"
          >
            <Phone className="w-5 h-5 text-[#142631]" />
            <span className="text-[#142631] font-semibold">(214) 685-4750</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;