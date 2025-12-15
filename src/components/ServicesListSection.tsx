import React from 'react';
import { motion } from 'framer-motion';

const ServicesListSection = () => {
  return (
    <>
      <div className="bg-black text-white py-8 sm:py-10 lg:py-12">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center uppercase tracking-wider px-4"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Find the Right Notary Solution
        </motion.h3>
      </div>

      <div className="bg-[#b89d6d] text-white py-12 sm:py-14 lg:py-16 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              <li>• Power of Attorney</li>
              <li>• Wills & Trusts</li>
              <li>• Apostilles (facilitation available)</li>
              <li>• Affidavits, School Forms, Travel Letters</li>
            </ul>
            <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              <li>• Reverse Mortgage Closing</li>
              <li>• Loan Modification</li>
              <li>• Commercial Loans</li>
              <li>• Construction Documents</li>
              <li>• Real Estate & Loan Documents</li>
            </ul>
            <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              <li>• Refinance Loan</li>
              <li>• Purchase (Buyer Side)</li>
              <li>• Seller Package</li>
              <li>• HELOC / Equity Loan</li>
              <li>• Reverse Mortgage Application</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ServicesListSection;
