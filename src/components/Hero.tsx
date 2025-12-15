import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Shield } from 'lucide-react';
import googleIcon from '../assets/google_g_icon_download.png';

const heroVideo = 'https://trust-notary.com/_assets/video/10a39bf285bb22e99497f536dcf905a3.mp4';
const heroPosterImage = 'https://trust-notary.com/_assets/media/04635ee3f7d37abf84d4fb40b9f6f952.jpg';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen bg-[#142631] text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={heroPosterImage}
        >
          <source
            src={heroVideo}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#142631]/60 via-[#142631]/40 to-[#142631]/80" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 min-h-screen flex items-center"
      >
        <div className="w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Content - Takes up more space */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                <motion.span
                  className="block text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  When Accuracy Matters,
                </motion.span>
                <motion.span
                  className="block text-white mt-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  So Does Who You Send
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                We show up on time, triple-check every document, and deliver professional, mobile signings—when and where your clients need them.
              </motion.p>
            </div>

            <motion.button
              className="relative bg-black border-2 border-[#cdad7d] text-white px-8 md:px-12 py-4 md:py-5 rounded-lg font-bold text-lg md:text-xl shadow-2xl uppercase tracking-wider overflow-hidden group"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.span
                className="absolute inset-0 bg-[#cdad7d] opacity-0 group-hover:opacity-20 transition-opacity"
              />
              <motion.span
                className="relative z-10"
                animate={{
                  textShadow: [
                    '0 0 0px rgba(205, 173, 125, 0)',
                    '0 0 10px rgba(205, 173, 125, 0.5)',
                    '0 0 0px rgba(205, 173, 125, 0)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
              >
                Close with Confidence
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Trust Badges - Sidebar on desktop, below content on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 flex flex-row lg:flex-col gap-4 lg:gap-6"
          >
            <motion.div
              className="flex-1 lg:flex-none flex items-center gap-4 px-6 py-5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              transition={{ duration: 0.2 }}
            >
              <img src={googleIcon} alt="Google" className="w-10 h-10 flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Rated 5-Stars on Google
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <Star className="w-4 h-4 text-[#cdad7d] fill-current" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex-1 lg:flex-none flex items-center gap-4 px-6 py-5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              transition={{ duration: 0.2 }}
            >
              <Shield className="w-10 h-10 text-[#cdad7d] flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-white leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Trusted, Certified<br />& Insured
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
