import React from 'react';
import { motion } from 'framer-motion';

const ServicesListSection = () => {
  return (
    <>
      <div className="bg-black text-white py-12">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center uppercase tracking-wider"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Find the Right Notary Solution
        </motion.h3>
      </div>

      <div className="bg-[#b89d6d] text-white py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ul className="space-y-4 text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              <li>• Power of Attorney</li>
              <li>• Wills & Trusts</li>
              <li>• Apostilles (facilitation available)</li>
              <li>• Affidavits, School Forms, Travel Letters</li>
            </ul>
            <ul className="space-y-4 text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              <li>• Reverse Mortgage Closing</li>
              <li>• Loan Modification</li>
              <li>• Commercial Loans</li>
              <li>• Construction Documents</li>
              <li>• Real Estate & Loan Documents</li>
            </ul>
            <ul className="space-y-4 text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
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
