import React from 'react';
import { motion } from 'framer-motion';

const MobileNotarySection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600')`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
                className="text-5xl md:text-6xl font-light text-gray-900 leading-tight mb-8"
              >
                Mobile Notary
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight mb-8"
              >
                Schedule with{' '}
                <span className="text-amber-600">Confidence</span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-600 leading-relaxed mb-8"
              >
                We understand that important signing has 
                specific timing requirements. That's why we offer 
                flexible scheduling designed to meet your 
                timeline — not ours. Our mobile notary service 
                brings professional expertise directly to your 
                preferred location.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                BOOK APPOINTMENT
              </motion.button>
            </div>
          </motion.div>

          {/* Right - Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200"
          >
            <h4 className="text-2xl font-semibold text-gray-900 mb-6">
              Quick Quote
            </h4>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Service Type
                </label>
                <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all">
                  <option>Select Service Type</option>
                  <option>Refinance Documents</option>
                  <option>Buyer/Seller Documents</option>
                  <option>Reverse Mortgage</option>
                  <option>Loan Modification</option>
                  <option>Commercial Real Estate</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Enter address or location"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                GET QUOTE
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileNotarySection;