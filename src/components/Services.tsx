import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Home, Building, CreditCard, Plus } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Refinance Documents',
    price: '$125 - $150',
    description: 'Complete refinancing document notarization with accuracy guarantee',
    features: ['Document review', 'Identity verification', 'Signature witnessing']
  },
  {
    icon: FileText,
    title: 'Buyer/Seller Documents',
    price: '$100 - $125',
    description: 'Real estate transaction document notarization services',
    features: ['Purchase agreements', 'Closing documents', 'Title transfers']
  },
  {
    icon: CreditCard,
    title: 'Reverse Mortgage Application',
    price: '$175',
    description: 'Specialized reverse mortgage document processing',
    features: ['Application review', 'Counseling certificates', 'Legal compliance']
  },
  {
    icon: Building,
    title: 'Commercial Real Estate',
    price: '$200+',
    description: 'Complex commercial property transaction support',
    features: ['Multi-party signings', 'Corporate documents', 'Investment properties']
  },
  {
    icon: FileText,
    title: 'Loan Modification',
    price: '$575+',
    description: 'Comprehensive loan modification document services',
    features: ['Hardship documentation', 'Financial statements', 'Modification agreements']
  },
  {
    icon: Plus,
    title: 'Add-On Services',
    price: '$25 each',
    description: 'Additional notarization services as needed',
    features: ['Extra signatures', 'Additional documents', 'Witness services']
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            Mortgage and{' '}
            <span className="text-blue-600 font-semibold">Loan Fees</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transparent pricing for all your notary needs. No hidden fees, no surprises - 
            just professional service at fair rates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              {/* Service Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
              >
                <service.icon className="text-white" size={28} />
              </motion.div>

              {/* Service Details */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <div className="text-3xl font-bold text-blue-600 mb-3">
                  {service.price}
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-900 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Book This Service
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Why Our Pricing is Different
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Transparent</h4>
                <p className="text-slate-600 text-sm">No hidden fees or surprise charges. What you see is what you pay.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Competitive</h4>
                <p className="text-slate-600 text-sm">Fair market rates that provide excellent value for professional service.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Inclusive</h4>
                <p className="text-slate-600 text-sm">Travel within 25 miles included. Extended travel available for additional fee.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;