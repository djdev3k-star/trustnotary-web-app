import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

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
    <section id="contact" className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Contact Form */}
        <div className="bg-white py-32 px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Get In Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Ready to schedule your notary appointment? Contact us today.
            </motion.p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#cdad7d] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#cdad7d] focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#cdad7d] focus:outline-none transition-colors"
                  placeholder="(214) 685-4750"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#cdad7d] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your notary needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#142631] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1a3340] transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-8 pt-8 border-t-2 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-semibold">Phone:</span> (214) 685-4750</p>
                <p><span className="font-semibold">Email:</span> info@trust-notary.com</p>
                <p><span className="font-semibold">Serving:</span> Dallas Metro & North Texas</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right - Background Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative min-h-[800px] lg:min-h-screen"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://trust-notary.com/_assets/media/f3142f6ac4e5b930299dc9e030445db2.jpg)'
            }}
          />
          <div className="absolute inset-0 bg-[#142631]/30" />

          {/* Professional Badge */}
          <div className="absolute bottom-12 left-12 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-sm">
            <div className="text-gray-900 font-bold text-xl mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Wanda Jones
            </div>
            <div className="text-[#cdad7d] font-semibold text-lg mb-3">
              Licensed Notary Public
            </div>
            <div className="text-gray-600 text-sm">
              Bonded & Insured Professional serving the Dallas-Fort Worth Metroplex
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;