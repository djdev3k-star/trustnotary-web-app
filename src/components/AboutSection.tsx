import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/hero-poster.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 sm:py-36 lg:py-48 overflow-hidden min-h-[60vh] sm:min-h-[70vh]">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center 30%'
        }}
      />
      <div className="absolute inset-0 bg-[#142631]/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex items-center justify-center min-h-[60vh] sm:min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 sm:space-y-10 lg:space-y-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-lg tracking-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            At Trust Notary, we don't just show up—we represent your business like it's our own.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              className="group relative bg-[#142631] border border-[#cdad7d] text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 font-semibold text-base sm:text-lg tracking-widest uppercase overflow-hidden transition-all duration-300 hover:border-[#cdad7d]/80"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#cdad7d]/0 via-[#cdad7d]/10 to-[#cdad7d]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#cdad7d]/50 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#cdad7d]/50 to-transparent" />
              </span>
              <span className="relative z-10">BOOK APPOINTMENT</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;