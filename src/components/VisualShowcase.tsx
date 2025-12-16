import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/showcase-bg.jpg';

const VisualShowcase = () => {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      <div className="absolute inset-0 bg-[#cdad7d]/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#cdad7d]/20 via-[#cdad7d]/40 to-[#cdad7d]/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg tracking-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Reliable Signings Every Time
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualShowcase;
