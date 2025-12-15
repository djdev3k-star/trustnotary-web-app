import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-[#142631] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See Our <span className="text-[#cdad7d]">Professional Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the Trust Notary difference through our commitment to excellence
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#cdad7d]/30">
            <video
              className="w-full h-auto"
              controls
              poster="https://trust-notary.com/_assets/media/04635ee3f7d37abf84d4fb40b9f6f952.jpg"
              preload="metadata"
            >
              <source
                src="https://trust-notary.com/_assets/video/10a39bf285bb22e99497f536dcf905a3.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Play overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#142631]/60 to-transparent pointer-events-none" />
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#cdad7d]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#cdad7d]/20 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#cdad7d]/10 border border-[#cdad7d]/30 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-[#cdad7d] mb-2">15+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="bg-[#cdad7d]/10 border border-[#cdad7d]/30 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-[#cdad7d] mb-2">5000+</h3>
              <p className="text-gray-300">Successful Closings</p>
            </div>
            <div className="bg-[#cdad7d]/10 border border-[#cdad7d]/30 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-[#cdad7d] mb-2">100%</h3>
              <p className="text-gray-300">Customer Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
