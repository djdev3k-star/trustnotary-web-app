import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#142631] py-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6"
      >
        <p className="text-gray-300 text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          © <span style={{ fontFamily: 'EB Garamond, serif' }}>2025</span> Trust Notary | <span style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>Wanda Jones</span>, Texas Notary Public
        </p>
        <p className="text-gray-400 mt-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Licensed, Bonded & Insured | Serving Dallas Metro & North Texas
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;