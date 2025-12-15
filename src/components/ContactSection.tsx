import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const wandaImage = 'https://trust-notary.com/_assets/media/b303c7f00f66528bd11ca25c0b1cb150.png';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://trust-notary.com/_assets/media/410302c96b526dec5577cf211c295462.png')"
        }}
      />
      <div className="absolute inset-0 bg-[#142631]/20" />

      <div className="relative z-10 w-full px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-start order-2 lg:order-1"
            >
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="border-4 border-white shadow-2xl"
                >
                  <img
                    src={wandaImage}
                    alt="Wanda Jones"
                    className="w-full max-w-[250px] sm:max-w-xs"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm text-white text-center py-3 sm:py-4 px-4 sm:px-6"
                >
                  <p className="text-lg sm:text-xl lg:text-2xl font-semibold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    I'm on my way!
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 order-1 lg:order-2"
            >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Get In Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Ready to schedule your notary appointment? Contact us today.
            </motion.p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#cdad7d] focus:outline-none transition-colors bg-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#cdad7d] focus:outline-none transition-colors bg-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#cdad7d] focus:outline-none transition-colors bg-white"
                  placeholder="(214) 685-4750"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#cdad7d] focus:outline-none transition-colors resize-none bg-white"
                  placeholder="Tell us about your notary needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#142631] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1a3340] transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-2"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;