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
        <div className="absolute inset-0 bg-[#142631]/40" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20 min-h-screen flex items-center"
      >
        <div className="w-full">
          {/* Top Right Badges - Hidden on mobile, shown on larger screens */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex absolute top-32 right-6 flex-col gap-4"
          >
            <motion.div
              className="flex items-center justify-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <img src={googleIcon} alt="Google" className="w-5 h-5" />
              <div className="flex flex-col">
                <span className="text-xs text-white font-bold drop-shadow-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Rated <span style={{ fontFamily: 'EB Garamond, serif' }}>5</span>-Stars on Google</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Star className="w-3 h-3 text-[#cdad7d] fill-current" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center space-x-2 px-4 py-3 bg-white/5 backdrop-blur-sm rounded-lg"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <Shield className="w-6 h-6 text-[#cdad7d]" />
              <span className="text-sm text-white font-bold drop-shadow-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Trusted, Certified<br/>& Insured</span>
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 max-w-3xl"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                <motion.span
                  className="text-white inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  When Accuracy Matters,
                </motion.span>
                <br />
                <motion.span
                  className="text-white inline-block"
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
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl leading-relaxed"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                We show up on time, triple-check every document, and deliver professional, mobile signings—when and where your clients need them.
              </motion.p>
            </div>

            {/* Mobile Badges - Shown only on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex lg:hidden flex-wrap gap-3"
            >
              <div className="flex items-center space-x-2 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-lg">
                <img src={googleIcon} alt="Google" className="w-4 h-4" />
                <div className="flex flex-col">
                  <span className="text-xs text-white font-bold drop-shadow-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>5-Stars on Google</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 text-[#cdad7d] fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 px-3 py-2 bg-white/5 backdrop-blur-sm rounded-lg">
                <Shield className="w-4 h-4 text-[#cdad7d]" />
                <span className="text-xs text-white font-bold drop-shadow-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Trusted & Insured</span>
              </div>
            </motion.div>

            <motion.button
              className="relative bg-black border-2 border-[#cdad7d] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg shadow-2xl uppercase tracking-wider overflow-hidden group"
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
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
