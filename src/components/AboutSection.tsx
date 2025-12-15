import React from 'react';
import { motion } from 'framer-motion';

const backgroundImage = 'https://trust-notary.com/_assets/media/04635ee3f7d37abf84d4fb40b9f6f952.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 sm:py-32 lg:py-40 overflow-hidden min-h-[50vh] sm:min-h-[60vh]">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center 30%'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex items-center justify-center min-h-[50vh] sm:min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-lg"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            At Trust Notary, we don't just show up—we represent your business like it's our own.
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;