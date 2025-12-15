import React from 'react';
import { motion } from 'framer-motion';

const backgroundImage = 'https://trust-notary.com/_assets/media/3813b32831794102f24059f09e0a6962.jpg';

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-32 relative overflow-hidden">
      {/* Full background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-[#142631]/40" />

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
            className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8 drop-shadow-lg"
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