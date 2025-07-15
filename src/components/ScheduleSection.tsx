import React from 'react';
import { motion } from 'framer-motion';

const ScheduleSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600')`
        }}
      />

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
            className="text-5xl md:text-6xl font-light text-gray-900 leading-tight mb-8"
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
            className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-6 rounded-full text-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            BOOK APPOINTMENT
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;