import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#142631] py-8 sm:py-10 lg:py-12 text-center border-t border-[#cdad7d]/20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 mb-4 sm:mb-6">
          <motion.a
            href="tel:2146854750"
            className="flex items-center space-x-2 text-gray-300 hover:text-[#cdad7d] transition-colors text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
          >
            <Phone size={14} className="sm:w-4 sm:h-4" />
            <span style={{ fontFamily: 'Cormorant Garamond, serif' }}>(214) 685-4750</span>
          </motion.a>
          <span className="hidden md:inline text-[#cdad7d]/30">|</span>
          <motion.a
            href="mailto:info@trustnotary.com"
            className="flex items-center space-x-2 text-gray-300 hover:text-[#cdad7d] transition-colors text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
          >
            <Mail size={14} className="sm:w-4 sm:h-4" />
            <span style={{ fontFamily: 'Cormorant Garamond, serif' }}>info@trustnotary.com</span>
          </motion.a>
          <span className="hidden md:inline text-[#cdad7d]/30">|</span>
          <div className="flex items-center space-x-2 text-gray-300 text-sm sm:text-base">
            <MapPin size={14} className="sm:w-4 sm:h-4" />
            <span style={{ fontFamily: 'Cormorant Garamond, serif' }}>Dallas Metro & North Texas</span>
          </div>
        </div>

        <motion.div
          className="w-16 sm:w-20 lg:w-24 h-px bg-[#cdad7d]/30 mx-auto mb-4 sm:mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          © <span style={{ fontFamily: 'EB Garamond, serif' }}>2025</span> Trust Notary | <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>Wanda Jones</span>, Texas Notary Public
        </p>
        <p className="text-gray-400 text-xs sm:text-sm" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Licensed, Bonded & Insured
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;