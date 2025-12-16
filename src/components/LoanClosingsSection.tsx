import React from 'react';
import { motion } from 'framer-motion';
import loanClosingsImage from '../assets/loan-closings.jpg';

const LoanClosingsSection = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Loan Closings Are{' '}
                <span className="block font-normal">
                  Time-Sensitive — and
                </span>
                <span className="block font-normal text-amber-600">
                  Vulnerable to Delays
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-600 leading-relaxed mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Closings can fall apart over the smallest details: a missed signature,
                a no-show notary, or a client who didn't understand what they were signing.
                These mistakes don't just cause delays—they cost trust, time, and sometimes
                even the deal.
              </motion.p>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={loanClosingsImage}
                alt="Professional document review"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="text-gray-900 font-semibold">
                  Zero Errors Guarantee
                </div>
                <div className="text-gray-600 text-sm">
                  Professional accuracy every time
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LoanClosingsSection;