import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-6 sm:py-8 border-t border-[#cdad7d]/20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
          {/* Left: Certification Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center md:justify-start gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#cdad7d]/10 border-2 border-[#cdad7d] flex items-center justify-center"
            >
              <Shield className="text-[#cdad7d]" size={24} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#cdad7d]/10 border-2 border-[#cdad7d] flex items-center justify-center"
            >
              <Award className="text-[#cdad7d]" size={24} />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#cdad7d]/10 border-2 border-[#cdad7d] flex items-center justify-center"
            >
              <CheckCircle className="text-[#cdad7d]" size={24} />
            </motion.div>
          </motion.div>

          {/* Center: Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-3 tracking-wide" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              JOIN THE CONVERSATION!
            </h3>
            <div className="flex items-center justify-center gap-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#cdad7d]/20 border border-white/20 hover:border-[#cdad7d] flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="text-white" size={20} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#cdad7d]/20 border border-white/20 hover:border-[#cdad7d] flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="text-white" size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <p className="text-white/70 text-sm mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Call Us
            </p>
            <motion.a
              href="tel:2146854750"
              whileHover={{ scale: 1.05 }}
              className="text-[#cdad7d] text-2xl sm:text-3xl font-bold hover:text-[#cdad7d]/80 transition-colors inline-block"
              style={{ fontFamily: 'EB Garamond, serif' }}
            >
              (214) 685-4750
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-6 border-t border-white/10 text-center"
        >
          <p className="text-white/60 text-xs sm:text-sm mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            © <span style={{ fontFamily: 'EB Garamond, serif' }}>2025</span> Trust Notary | <span style={{ fontWeight: 600 }}>Wanda Jones</span>, Texas Notary Public
          </p>
          <p className="text-white/40 text-xs" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Licensed, Bonded & Insured | Dallas Metro & North Texas
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;