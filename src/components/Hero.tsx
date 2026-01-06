import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Shield, CheckCircle } from 'lucide-react';
import googleIcon from '../assets/google_g_icon_download.png';
import heroVideo from '../assets/hero-video.mp4';
import heroPosterImage from '../assets/hero-poster.jpg';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [arrowX, setArrowX] = useState(0);

  return (
    <section className="relative min-h-screen bg-[#142631] text-white overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#142631]/70 via-[#142631]/40 to-[#142631]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#142631]/30 via-transparent to-[#142631]/30" />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 min-h-screen flex items-center"
      >
        <div className="w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '4rem' }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-0.5 bg-gradient-to-r from-[#cdad7d] to-[#cdad7d]/40"
              />

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                <motion.span
                  className="block text-white drop-shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  When Accuracy Matters,
                </motion.span>
                <motion.span
                  className="block mt-1 sm:mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-white drop-shadow-sm">So Does Who You Send</span>
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg sm:text-xl lg:text-2xl text-white/85 leading-relaxed max-w-2xl font-light"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                We show up on time, triple-check every document, and deliver professional, mobile signings—when and where your clients need them.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex lg:hidden flex-wrap gap-4"
            >
              <div className="flex items-center gap-2.5 px-4 py-2.5 border border-white/10 rounded-lg">
                <img src={googleIcon} alt="Google" className="w-5 h-5" />
                <div className="flex flex-col">
                  <span className="text-xs text-white font-semibold tracking-wide" style={{ fontFamily: 'Cormorant Garamond, serif' }}>5-Stars on Google</span>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 text-[#cdad7d] fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 border border-white/10 rounded-lg">
                <Shield className="w-5 h-5 text-[#cdad7d]" />
                <span className="text-xs text-white font-semibold tracking-wide" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Trusted & Insured</span>
              </div>
            </motion.div>

            <motion.button
              className="group relative bg-[#142631] border border-[#cdad7d] text-white px-10 md:px-14 py-4 md:py-5 font-semibold text-base md:text-lg tracking-widest uppercase overflow-hidden transition-all duration-300 hover:border-[#cdad7d]/80"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              onMouseEnter={() => setArrowX(3)}
              onMouseLeave={() => setArrowX(0)}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#cdad7d]/0 via-[#cdad7d]/10 to-[#cdad7d]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#cdad7d]/50 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#cdad7d]/50 to-transparent" />
              </span>
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span>Close with Confidence</span>
                <motion.span
                  className="inline-block"
                  animate={{ x: arrowX }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 hidden lg:flex flex-col gap-5 lg:pl-8"
          >
            <div className="flex items-center gap-4 p-5 border border-white/10 rounded-lg bg-white/[0.02] backdrop-blur-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5">
                <img src={googleIcon} alt="Google" className="w-7 h-7" />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-sm font-semibold text-white tracking-wide" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
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
            </div>

            <div className="flex items-center gap-4 p-5 border border-white/10 rounded-lg bg-white/[0.02] backdrop-blur-sm">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5">
                <Shield className="w-6 h-6 text-[#cdad7d]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-white tracking-wide" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Trusted, Certified & Insured
                </span>
                <span className="text-xs text-white/60" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Professional & Bonded Services
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-2 mt-2 pl-1"
            >
              <CheckCircle className="w-4 h-4 text-[#cdad7d]/70" />
              <span className="text-xs text-white/50 tracking-wide" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Texas Certified Notary
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
