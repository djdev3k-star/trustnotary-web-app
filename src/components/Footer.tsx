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
            <p className="text-gray-300 mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Professional Signing Services
            </p>
            <p className="text-[#cdad7d] font-semibold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700 }}>Wanda Jones</span>, Notary Public
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-[#cdad7d]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Contact Us</h3>
            <div className="space-y-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
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
            <h3 className="text-xl font-semibold mb-4 text-[#cdad7d]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Services</h3>
            <ul className="space-y-2 text-gray-300" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
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

        {/* Banner Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-[#cdad7d]/20 pt-8 pb-8 -mx-6"
        >
          <div className="bg-[#cdad7d]/30 backdrop-blur-sm py-8 px-8">
            <h3
              className="text-2xl md:text-3xl font-bold text-center mb-8 text-white"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Find the Right Notary Solution
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3 max-w-5xl mx-auto text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
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
            © 2025 Trust Notary | <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700 }}>Wanda Jones</span>, Texas Notary Public
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;