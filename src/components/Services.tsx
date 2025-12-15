import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Home, Building, CreditCard, Plus } from 'lucide-react';

const backgroundImage = 'https://trust-notary.com/_assets/media/0ee4b0c9015ee3a8870ba13160f8ca61.jpg';

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
    <section id="services" className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#142631] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Professional Services & Transparent Pricing
          </h2>
          <p className="text-xl text-[#142631]/80 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            From residential closings to commercial transactions, we provide expert notary services with upfront pricing. No surprises, no hidden fees.
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
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#142631]/10"
            >
              {/* Service Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 flex items-center justify-center mb-6"
              >
                <service.icon className="text-[#cdad7d]" size={48} />
              </motion.div>

              {/* Service Details */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#142631] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {service.title}
                </h3>
                <div className="text-3xl font-bold text-[#142631] mb-3" style={{ fontFamily: 'EB Garamond, serif' }}>
                  {service.price}
                </div>
                <p className="text-[#142631]/70 leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#cdad7d] rounded-full" />
                    <span className="text-[#142631]/80 text-sm" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 bg-[#142631] hover:bg-[#1a3340] text-white py-3 rounded-lg font-semibold transition-all duration-300"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
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
          <div className="bg-[#142631] rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Texas Notary Fee Schedule
            </h3>
            <p className="text-[#cdad7d] mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>(Effective per Texas Government Code § 406.024)</p>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Acknowledgment or Proof (per signer)</td>
                    <td className="py-3 text-[#cdad7d] font-semibold text-right" style={{ fontFamily: 'EB Garamond, serif' }}>$10</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Each Additional Signatures (same document)</td>
                    <td className="py-3 text-[#cdad7d] font-semibold text-right" style={{ fontFamily: 'EB Garamond, serif' }}>$1</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Oath or Affirmation</td>
                    <td className="py-3 text-[#cdad7d] font-semibold text-right" style={{ fontFamily: 'EB Garamond, serif' }}>$10</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Jurat (Affidavit/Sworn Statement)</td>
                    <td className="py-3 text-[#cdad7d] font-semibold text-right" style={{ fontFamily: 'EB Garamond, serif' }}>$10</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Certified Copy of Non-Recordable Document</td>
                    <td className="py-3 text-[#cdad7d] font-semibold text-right" style={{ fontFamily: 'EB Garamond, serif' }}>$10</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Protest of a Bill or Note</td>
                    <td className="py-3 text-[#cdad7d] font-semibold text-right" style={{ fontFamily: 'EB Garamond, serif' }}>$4</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Each Notice of Protest</td>
                    <td className="py-3 text-[#cdad7d] font-semibold text-right" style={{ fontFamily: 'EB Garamond, serif' }}>$1</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Other Notarial Acts Allowed by Law</td>
                    <td className="py-3 text-[#cdad7d] font-semibold text-right" style={{ fontFamily: 'EB Garamond, serif' }}>$10</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-white/60 text-sm mt-6 text-center italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              *additional travel and convenience fees may apply
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;