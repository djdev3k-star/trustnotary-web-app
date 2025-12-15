import React from 'react';
import { motion } from 'framer-motion';
import { Headphones } from 'lucide-react';

const services = [
  { name: 'Refinance Documents', price: '$125 - $150' },
  { name: 'Buyer/Seller Documents', price: '$100 - $125' },
  { name: 'HELOC Office or Home', price: '$100 - $125' },
  { name: 'Reverse Mortgage Application', price: '$125 - $150' },
  { name: 'Reverse Mortgage Closing', price: '$150 - $175' },
  { name: 'Add-Ons each', price: '$25.00' },
  { name: 'Loan Modification', price: '$200+' },
  { name: 'Commercial Real Estate Closing', price: '$200+' }
];

const FeesSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Icon and Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-24 h-24 mb-8"
            >
              <Headphones className="text-[#cdad7d]" size={64} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-[#142631] leading-tight mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Mortgage and Loan Fees
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-[#142631]/80 leading-relaxed"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Transparent pricing built for speed, accuracy, and value. All fees comply with Texas Government Code § <span style={{ fontFamily: 'EB Garamond, serif' }}>406.024</span>.
            </motion.p>
          </motion.div>

          {/* Right - Services List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-between p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#cdad7d]/20 hover:border-[#cdad7d]/40"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-[#cdad7d] rounded-full" />
                  <span className="text-lg font-medium text-[#142631]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {service.name}
                  </span>
                </div>
                <span className="text-xl font-bold text-[#142631]" style={{ fontFamily: 'EB Garamond, serif' }}>
                  {service.price}
                </span>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center pt-8"
            >
              <p className="text-[#142631]/70 text-sm mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Additional travel fees may apply for locations outside standard service area.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeesSection;