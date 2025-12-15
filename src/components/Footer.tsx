import React from 'react';
import { motion } from 'framer-motion';

const backgroundImage = 'https://trust-notary.com/_assets/media/410302c96b526dec5577cf211c295462.png';

const Footer = () => {
  return (
    <footer className="relative text-white py-16 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-[#142631]/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-6">
              <img
                src="https://trust-notary.com/61b326e6-b46f-46bd-9ed6-09fa51ab202f"
                alt="Trust Notary Logo"
                className="h-16 w-auto mb-4 transform scale-x-[-1] mx-auto"
              />
            </div>
            <p className="text-gray-300 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Professional Signing Services
            </p>
            <p className="text-[#cdad7d] font-semibold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700 }}>Wanda Jones</span>, Notary Public
            </p>
          </motion.div>
        </div>

        {/* Banner Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-[#cdad7d]/20 pt-8 pb-8 -mx-6"
        >
          <div className="bg-[#cdad7d]/90 backdrop-blur-sm py-8 px-8">
            <h3
              className="text-2xl md:text-3xl font-bold text-center mb-8 text-white"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Find the Right Notary Solution
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3 max-w-5xl mx-auto text-white text-left" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              <div className="text-sm">• Power of Attorney</div>
              <div className="text-sm">• Reverse Mortgage Closing</div>
              <div className="text-sm">• Refinance Loan</div>
              <div className="text-sm">• Seller Package</div>
              <div className="text-sm">• Wills & Trusts</div>
              <div className="text-sm">• Loan Modification</div>
              <div className="text-sm">• Purchase (Buyer Side)</div>
              <div className="text-sm">• HELOC / Equity Loan</div>
              <div className="text-sm">• Apostilles (facilitation available)</div>
              <div className="text-sm">• Commercial Loans</div>
              <div className="text-sm">• Construction Documents</div>
              <div className="text-sm">• Reverse Mortgage Application</div>
              <div className="text-sm">• Affidavits, School Forms, Travel Letters</div>
              <div className="text-sm">• Real Estate & IoT Documents</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-[#cdad7d]/20 pt-8 text-center"
        >
          <p className="text-gray-300" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            © <span style={{ fontFamily: 'EB Garamond, serif' }}>2025</span> Trust Notary | <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700 }}>Wanda Jones</span>, Texas Notary Public
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;