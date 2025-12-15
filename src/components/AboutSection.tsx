import React from 'react';
import { motion } from 'framer-motion';

const backgroundImage = 'https://trust-notary.com/_assets/media/04635ee3f7d37abf84d4fb40b9f6f952.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-40 overflow-hidden min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex items-center min-h-screen">
        <div className="text-center space-y-10 w-full">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg"
          >
            When Accuracy Matters,
            <span className="block mt-2">
              So Does Who You Send
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white font-medium leading-relaxed max-w-4xl mx-auto drop-shadow-lg"
          >
            At Trust Notary, we don't just show up
            <span className="block mt-2">
              —we represent your business like it's
            </span>
            <span className="block mt-2">
              our own.
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-white leading-relaxed max-w-4xl mx-auto drop-shadow-lg"
          >
            We show up on time, triple-check every document, and deliver professionalism
            that gives signers — and whoever sent them — peace of mind. Whether you need
            mobile, in-office, or remote signing services, we're here to make the process
            seamless and stress-free.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#142631] hover:bg-[#1a3340] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Free 15-Minute Consultation
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;