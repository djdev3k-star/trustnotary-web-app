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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-4xl"
        >
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">When Accuracy Matters,</span>
              <br />
              <span className="text-white">So Does Who You Send</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl leading-relaxed">
              We show up on time, triple-check every document, and deliver professional, mobile signings—when and where your clients need them.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 bg-[#cdad7d]/20 backdrop-blur-sm border border-[#cdad7d]/40 px-6 py-3 rounded-lg">
              <Shield className="w-5 h-5 text-[#cdad7d]" />
              <span className="text-sm text-white font-medium">Trusted, Certified & Insured</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#cdad7d]/20 backdrop-blur-sm border border-[#cdad7d]/40 px-6 py-3 rounded-lg">
              <Star className="w-5 h-5 text-[#cdad7d] fill-current" />
              <span className="text-sm text-white font-medium">Rated 5-Stars on Google</span>
            </div>
          </div>

          <button className="bg-[#142631] border-2 border-[#cdad7d] text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-[#1a3340] transition-all transform hover:scale-105 shadow-2xl">
            Close with Confidence
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
