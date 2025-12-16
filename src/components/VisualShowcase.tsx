import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/showcase-bg.jpg';

const showcaseItems = [
  {
    title: 'Professional Excellence',
    description: 'Expert document handling with meticulous attention to every detail'
  },
  {
    title: 'On-Time Service',
    description: 'We show up when we say we will, ready to get the job done right'
  },
  {
    title: 'Client-Focused',
    description: 'Your convenience is our priority with flexible scheduling options'
  },
  {
    title: 'Trusted & Secure',
    description: 'Licensed, bonded, and insured for complete peace of mind'
  }
];

const VisualShowcase = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      <div className="absolute inset-0 bg-[#cdad7d]/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Reliable Signings Every Time
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 group cursor-pointer"
            >
              <motion.h3
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 drop-shadow-lg"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
                whileHover={{ x: 5 }}
              >
                {item.title}
              </motion.h3>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed drop-shadow-md" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualShowcase;
