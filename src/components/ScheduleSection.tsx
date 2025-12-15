import React from 'react';
import { motion } from 'framer-motion';

const ScheduleSection = () => {
  return (
    <section className="py-32 bg-[#bcab99] relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #142631 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-[#142631] leading-tight mb-8"
          >
            We handle every signing with care, accuracy, and total
            professionalism. Your documents are in good hands.
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#142631] hover:bg-[#1a3340] text-white px-12 py-6 rounded-lg text-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            BOOK APPOINTMENT
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;