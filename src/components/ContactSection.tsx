import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Contact Info */}
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
                className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-8"
              >
                Trust Notary
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Wanda Jones, Notary Public
                  </h3>
                  <p className="text-gray-600">Licensed & Bonded Professional</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Contact Information:</h4>
                    <div className="space-y-2 text-gray-600">
                      <p>📞 Phone: (214) 685-4750</p>
                      <p>📧 Email: info@trust-notary.com</p>
                      <p>🌐 Website: trust-notary.com</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Service Areas:</h4>
                    <div className="grid grid-cols-2 gap-2 text-gray-600 text-sm">
                      <p>• Dallas Metro</p>
                      <p>• Fort Worth</p>
                      <p>• North Texas</p>
                      <p>• Surrounding Areas</p>
                      <p>• Mobile Service Available</p>
                      <p>• Remote Notarization</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Specializations:</h4>
                    <div className="grid grid-cols-2 gap-2 text-gray-600 text-sm">
                      <p>• Real Estate Closings</p>
                      <p>• Loan Documents</p>
                      <p>• Refinancing</p>
                      <p>• Commercial Properties</p>
                      <p>• Reverse Mortgages</p>
                      <p>• Legal Document Notarization</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Wanda Jones, Professional Notary"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Professional Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="text-gray-900 font-semibold">
                  Licensed Notary Public
                </div>
                <div className="text-gray-600 text-sm">
                  Bonded & Insured Professional
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;