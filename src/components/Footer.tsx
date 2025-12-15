import React from 'react';
import { motion } from 'framer-motion';

const backgroundImage = 'https://trust-notary.com/_assets/media/410302c96b526dec5577cf211c295462.png';
const wandaImage = 'https://trust-notary.com/_assets/media/b303c7f00f66528bd11ca25c0b1cb150.png';

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-[#c9b591]/30" />

      <div className="relative z-10">
        {/* Top Section with Trust Notary and Wanda's Photo */}
        <div className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-left"
              >
                <h2 className="text-5xl md:text-6xl font-bold text-[#142631] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Trust Notary
                </h2>
                <p className="text-xl text-[#142631]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700 }}>Wanda Jones</span>, Notary Public
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-end"
              >
                <div className="relative">
                  <div className="bg-black text-white text-center py-3 px-6 mb-0">
                    <p className="text-lg font-semibold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      I'm On My Way —
                    </p>
                  </div>
                  <div className="border-4 border-white">
                    <img
                      src={wandaImage}
                      alt="Wanda Jones"
                      className="w-full max-w-xs"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Find the Right Notary Solution Section */}
        <div className="bg-black text-white py-8">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center uppercase tracking-wider"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Find the Right Notary Solution
          </motion.h3>
        </div>

        {/* Services List */}
        <div className="bg-[#b89d6d] text-white py-12 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ul className="space-y-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                <li>• Power of Attorney</li>
                <li>• Wills & Trusts</li>
                <li>• Apostilles (facilitation available)</li>
                <li>• Affidavits, School Forms, Travel Letters</li>
              </ul>
              <ul className="space-y-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                <li>• Reverse Mortgage Closing</li>
                <li>• Loan Modification</li>
                <li>• Commercial Loans</li>
                <li>• Construction Documents</li>
                <li>• Real Estate & Loan Documents</li>
              </ul>
              <ul className="space-y-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                <li>• Refinance Loan</li>
                <li>• Purchase (Buyer Side)</li>
                <li>• Seller Package</li>
                <li>• HELOC / Equity Loan</li>
                <li>• Reverse Mortgage Application</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#142631] py-6 text-center"
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