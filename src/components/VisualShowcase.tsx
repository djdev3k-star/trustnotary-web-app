import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const showcaseItems = [
  {
    image: 'https://trust-notary.com/_assets/media/a0cbf6662ccef407221ab03afbc5fb03.jpg',
    title: 'Professional Service',
    description: 'Expert document handling with attention to every detail'
  },
  {
    image: 'https://trust-notary.com/_assets/media/04a747008ac9ed0b219ae53a84d6eec9.jpg',
    title: 'Real Estate Closings',
    description: 'Smooth and efficient real estate transaction support'
  },
  {
    image: 'https://trust-notary.com/_assets/media/00790bfe9288b5780c9d6c7a7fcca94f.jpg',
    title: 'Mobile Services',
    description: 'We come to you at your convenience'
  },
  {
    image: 'https://trust-notary.com/_assets/media/3813b32831794102f24059f09e0a6962.jpg',
    title: 'Trusted Partner',
    description: 'Building lasting relationships through reliable service'
  }
];

const VisualShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#142631] mb-6">
            Why Choose <span className="text-[#cdad7d]">Trust Notary</span>
          </h2>
          <p className="text-xl text-[#142631]/80 max-w-3xl mx-auto">
            Professional notary services delivered with excellence and integrity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142631]/90 via-[#142631]/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-start space-x-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-[#cdad7d] mt-1 flex-shrink-0" />
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 bg-[#cdad7d]/10 border-2 border-[#cdad7d]/30 px-6 py-3 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-[#cdad7d]" />
            <span className="text-[#142631] font-semibold">
              Licensed, Bonded, and Insured for Your Protection
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualShowcase;
