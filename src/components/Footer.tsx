import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#142631] text-white py-16 border-t-2 border-[#cdad7d]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <img
                src="https://trust-notary.com/_assets/media/d6e45f5f618e1ed38748f618f54f523a.png"
                alt="Trust Notary Logo"
                className="h-16 w-auto mb-4"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Professional Signing Services
            </p>
            <p className="text-[#cdad7d] font-semibold">
              Wanda Jones, Notary Public
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-[#cdad7d]">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:2146854750" className="flex items-center space-x-3 text-gray-300 hover:text-[#cdad7d] transition-colors">
                <Phone className="w-5 h-5" />
                <span>(214) 685-4750</span>
              </a>
              <a href="mailto:info@trust-notary.com" className="flex items-center space-x-3 text-gray-300 hover:text-[#cdad7d] transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@trust-notary.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Serving Texas</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-[#cdad7d]">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-[#cdad7d] transition-colors cursor-pointer">Refinance Documents</li>
              <li className="hover:text-[#cdad7d] transition-colors cursor-pointer">Buyer/Seller Documents</li>
              <li className="hover:text-[#cdad7d] transition-colors cursor-pointer">Reverse Mortgage</li>
              <li className="hover:text-[#cdad7d] transition-colors cursor-pointer">Commercial Real Estate</li>
              <li className="hover:text-[#cdad7d] transition-colors cursor-pointer">Apostille Services</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-[#cdad7d]/20 pt-8 text-center"
        >
          <p className="text-gray-400 mb-4">
            © 2025 Trust Notary | All Rights Reserved | Wanda Jones, Texas Notary Public
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-[#cdad7d] transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-[#cdad7d] transition-colors">
              Terms of Service
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-[#cdad7d] transition-colors">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;