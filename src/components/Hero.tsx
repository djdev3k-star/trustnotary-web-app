import React from 'react';
import { motion } from 'framer-motion';
import { Star, Shield, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#142631] text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-4">
                <span className="text-white">Trust</span>
                <span className="text-[#cdad7d]"> / </span>
                <span className="text-white">Notary</span>
              </h1>
              <p className="text-xl text-gray-300 mb-2">
                Professional Signing Services
              </p>
              <p className="text-lg text-[#cdad7d] font-semibold">
                Wanda Jones, Notary Public
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-[#cdad7d]/10 border border-[#cdad7d]/30 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-[#cdad7d]" />
                <span className="text-sm text-gray-200">Trusted, Certified & Insured</span>
              </div>
              <div className="flex items-center space-x-2 bg-[#cdad7d]/10 border border-[#cdad7d]/30 px-4 py-2 rounded-lg">
                <Star className="w-5 h-5 text-[#cdad7d] fill-current" />
                <span className="text-sm text-gray-200">Rated 5-Stars on Google</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="tel:2146854750"
                className="inline-flex items-center space-x-3 mb-4"
              >
                <Phone className="w-6 h-6 text-[#cdad7d]" />
                <span className="text-2xl font-bold text-white hover:text-[#cdad7d] transition-colors">
                  (214) 685-4750
                </span>
              </a>
            </div>

            <button className="bg-[#cdad7d] text-[#142631] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#b89a6d] transition-all transform hover:scale-105 shadow-lg">
              Close with Confidence
            </button>
          </motion.div>

          {/* Image/Visual Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-full max-w-md">
              <div className="relative rounded-2xl overflow-hidden border-4 border-[#cdad7d]/30 shadow-2xl">
                <img
                  src="https://trust-notary.com/_assets/media/04635ee3f7d37abf84d4fb40b9f6f952.jpg"
                  alt="Professional notary services"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142631]/40 to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#cdad7d]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#cdad7d]/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
