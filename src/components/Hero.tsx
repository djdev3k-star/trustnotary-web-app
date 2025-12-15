import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield } from 'lucide-react';

const heroVideo = 'https://trust-notary.com/_assets/video/10a39bf285bb22e99497f536dcf905a3.mp4';
const heroPosterImage = 'https://trust-notary.com/_assets/media/04635ee3f7d37abf84d4fb40b9f6f952.jpg';

const Hero = () => {
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
        <div className="w-full">
          {/* Top Right Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-32 right-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-center space-x-2 px-4 py-2">
              <Star className="w-5 h-5 text-[#cdad7d] fill-current" />
              <div className="flex flex-col">
                <span className="text-xs text-white font-bold drop-shadow-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Rated <span style={{ fontFamily: 'EB Garamond, serif' }}>5</span>-Stars on Google</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-[#cdad7d] fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2 px-4 py-3">
              <Shield className="w-6 h-6 text-[#cdad7d]" />
              <span className="text-sm text-white font-bold drop-shadow-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Trusted, Certified<br/>& Insured</span>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 max-w-3xl"
          >
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                <span className="text-white">When Accuracy Matters,</span>
                <br />
                <span className="text-white">So Does Who You Send</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                We show up on time, triple-check every document, and deliver professional, mobile signings—when and where your clients need them.
              </p>
            </div>

            <button className="bg-black border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 transition-all transform hover:scale-105 shadow-2xl uppercase tracking-wider" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Close with Confidence
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
