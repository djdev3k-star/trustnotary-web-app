import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const backgroundImage = 'https://trust-notary.com/_assets/media/410302c96b526dec5577cf211c295462.png';
const sideImage = 'https://trust-notary.com/_assets/media/b303c7f00f66528bd11ca25c0b1cb150.png';

const Footer = () => {
  return (
    <footer className="relative text-white py-16 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-[#142631]/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <img
                src="https://trust-notary.com/61b326e6-b46f-46bd-9ed6-09fa51ab202f"
                alt="Trust Notary Logo"
                className="h-16 w-auto mb-4 transform scale-x-[-1]"
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

          {/* Services */}
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
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center"
          >
            <img
              src={sideImage}
              alt="Trust Notary"
              className="w-full max-w-xs rounded-lg shadow-xl"
            />
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-[#cdad7d]/20 pt-8 text-center"
        >
          <p className="text-gray-300">
            © 2025 Trust Notary | Wanda Jones, Texas Notary Public
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;