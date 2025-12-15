import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#142631]/95 backdrop-blur-sm border-b border-[#cdad7d]/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="https://trust-notary.com/_assets/media/d6e45f5f618e1ed38748f618f54f523a.png"
              alt="Trust Notary Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Contact */}
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