import React from 'react';
import { motion } from 'framer-motion';
import wandaImage from '../assets/wanda.png';
import contactBg from '../assets/contact-bg.png';

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${contactBg})`
        }}
      />
      <div className="absolute inset-0 bg-[#142631]/20" />

      <div className="relative z-10 w-full px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-start order-2 lg:order-1"
            >
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="border-4 border-white shadow-2xl"
                >
                  <img
                    src={wandaImage}
                    alt="Wanda Jones"
                    className="w-full max-w-[250px] sm:max-w-xs"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm text-white text-center py-3 sm:py-4 px-4 sm:px-6"
                >
                  <p className="text-lg sm:text-xl lg:text-2xl font-semibold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    I'm on my way!
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 order-1 lg:order-2"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4 tracking-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Get In Touch
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 font-light leading-relaxed"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Ready to schedule your notary appointment? Contact us today.
              </motion.p>

              <motion.a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                href="https://trustnotary.setmore.com/book"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full bg-[#142631] border border-[#cdad7d] text-white px-8 py-4 font-bold text-lg tracking-wide uppercase overflow-hidden transition-all duration-300 hover:border-[#cdad7d]/80 flex items-center justify-center space-x-2"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#cdad7d]/0 via-[#cdad7d]/10 to-[#cdad7d]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">Book Appointment</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;