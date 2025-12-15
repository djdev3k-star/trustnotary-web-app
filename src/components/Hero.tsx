import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Phone } from 'lucide-react';

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

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-4xl"
        >
          <div>
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-4">
              <span className="text-white">Trust</span>
              <span className="text-[#cdad7d]"> / </span>
              <span className="text-white">Notary</span>
            </h1>
            <p className="text-2xl text-gray-200 mb-2">
              Professional Signing Services
            </p>
            <p className="text-xl text-[#cdad7d] font-semibold">
              Wanda Jones, Notary Public
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center space-x-2 bg-[#cdad7d]/20 backdrop-blur-sm border border-[#cdad7d]/40 px-6 py-3 rounded-lg">
              <Shield className="w-5 h-5 text-[#cdad7d]" />
              <span className="text-sm text-white font-medium">Trusted, Certified & Insured</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#cdad7d]/20 backdrop-blur-sm border border-[#cdad7d]/40 px-6 py-3 rounded-lg">
              <Star className="w-5 h-5 text-[#cdad7d] fill-current" />
              <span className="text-sm text-white font-medium">Rated 5-Stars on Google</span>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="tel:2146854750"
              className="inline-flex items-center space-x-3 mb-6"
            >
              <Phone className="w-7 h-7 text-[#cdad7d]" />
              <span className="text-3xl font-bold text-white hover:text-[#cdad7d] transition-colors">
                (214) 685-4750
              </span>
            </a>
          </div>

          <button className="bg-[#cdad7d] text-[#142631] px-10 py-5 rounded-lg font-bold text-xl hover:bg-[#b89a6d] transition-all transform hover:scale-105 shadow-2xl">
            Close with Confidence
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
