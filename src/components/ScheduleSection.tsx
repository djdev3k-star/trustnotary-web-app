import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const backgroundImage = 'https://trust-notary.com/_assets/media/3813b32831794102f24059f09e0a6962.jpg';
const professionalServiceImage = 'https://trust-notary.com/_assets/media/a0cbf6662ccef407221ab03afbc5fb03.jpg';
const realEstateClosingsImage = 'https://trust-notary.com/_assets/media/04a747008ac9ed0b219ae53a84d6eec9.jpg';
const mobileServicesImage = 'https://trust-notary.com/_assets/media/00790bfe9288b5780c9d6c7a7fcca94f.jpg';
const trustedPartnerImage = 'https://trust-notary.com/_assets/media/3813b32831794102f24059f09e0a6962.jpg';

const services = [
  {
    image: professionalServiceImage,
    title: 'General Notary',
    description: 'Professional notarization services for all document types'
  },
  {
    image: realEstateClosingsImage,
    title: 'Mortgage & Loan Closings',
    description: 'Expert handling of mortgage documents and loan signings'
  },
  {
    image: mobileServicesImage,
    title: 'Mobile Notary',
    description: 'Convenient notary services at your preferred location'
  },
  {
    image: trustedPartnerImage,
    title: 'Remote Online Notarization',
    description: 'Secure RON services for digital convenience'
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
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#142631]/90 via-[#142631]/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-start space-x-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-[#cdad7d] mt-1 flex-shrink-0" />
                      <h3 className="text-lg font-bold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-300" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {service.description}
                    </p>
                  </div>
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