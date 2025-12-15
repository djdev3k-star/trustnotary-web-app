import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Home, Car, Video } from 'lucide-react';

const backgroundImage = 'https://trust-notary.com/_assets/media/3813b32831794102f24059f09e0a6962.jpg';
const mortgageLoanImage = 'https://trust-notary.com/_assets/media/04a747008ac9ed0b219ae53a84d6eec9.jpg';

const services = [
  {
    title: 'General Notary',
    icon: FileText,
    description: 'Professional notarization services for all document types'
  },
  {
    title: 'Mortgage and Loan',
    image: mortgageLoanImage,
    description: 'Expert handling of mortgage documents and loan signings'
  },
  {
    title: 'Mobile Notary',
    icon: Car,
    description: 'Convenient notary services at your preferred location'
  },
  {
    title: 'RON',
    icon: Video,
    description: 'Remote Online Notarization for digital convenience'
  }
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-32 relative overflow-hidden">
      {/* Full background image */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-[#142631]/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              We handle every signing with care, accuracy, and total
              professionalism. Your documents are in good hands.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {service.image ? (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#142631]/80 to-transparent" />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-48 bg-gradient-to-br from-[#142631] to-[#1a3340]">
                    {service.icon && <service.icon className="w-16 h-16 text-[#cdad7d]" />}
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#142631] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#142631]/70">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#cdad7d] hover:bg-[#b89d6d] text-white px-12 py-6 rounded-lg text-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              BOOK APPOINTMENT
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;