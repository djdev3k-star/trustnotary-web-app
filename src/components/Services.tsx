import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Home, Building, CreditCard, Plus } from 'lucide-react';
import backgroundImage from '../assets/services-bg.jpg';

const services = [
  {
    icon: Home,
    title: 'Refinance',
    price: '$125 - $150',
    description: 'Complete refinancing document notarization with accuracy guarantee',
    features: ['Document review', 'Identity verification', 'Signature witnessing']
  },
  {
    icon: FileText,
    title: 'Buyer/Seller',
    price: '$100 - $125',
    description: 'Real estate transaction document notarization services',
    features: ['Purchase agreements', 'Closing documents', 'Title transfers']
  },
  {
    icon: CreditCard,
    title: 'Reverse Mortgage Application',
    price: '$85 - $175',
    description: 'Specialized reverse mortgage document processing',
    features: ['Application review', 'Counseling certificates', 'Legal compliance']
  },
  {
    icon: Building,
    title: 'Commercial Real Estate',
    price: '$250+',
    description: 'Complex commercial property transaction support',
    features: ['Multi-party signings', 'Corporate documents', 'Investment properties']
  },
  {
    icon: FileText,
    title: 'Loan Modification',
    price: '$125',
    description: 'Comprehensive loan modification document services',
    features: []
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
    <section id="services" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#142631] mb-4 sm:mb-6 tracking-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Professional Services & Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[#142631]/80 max-w-3xl mx-auto leading-relaxed font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            From residential closings to commercial transactions, we provide expert notary services with upfront pricing. No surprises, no hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#142631]/10"
            >
              {/* Service Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6"
              >
                <service.icon className="text-[#cdad7d]" size={40} />
              </motion.div>

              {/* Service Details */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#142631] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {service.title}
                </h3>
                <div className="text-2xl sm:text-3xl font-bold text-[#142631] mb-2 sm:mb-3" style={{ fontFamily: 'EB Garamond, serif' }}>
                  {service.price}
                </div>
                <p className="text-sm sm:text-base text-[#142631]/70 leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#cdad7d] rounded-full flex-shrink-0" />
                    <span className="text-[#142631]/80 text-xs sm:text-sm" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://trustnotary.setmore.com/book"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full mt-4 sm:mt-6 bg-[#142631] border border-[#cdad7d] text-white py-2.5 sm:py-3 font-semibold text-sm sm:text-base tracking-wide uppercase overflow-hidden transition-all duration-300 hover:border-[#cdad7d]/80 inline-block text-center"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#cdad7d]/0 via-[#cdad7d]/10 to-[#cdad7d]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">Book This Service</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-10 sm:mt-12 lg:mt-16 px-2"
        >
          <div className="bg-[#142631] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Texas Notary Fee Schedule
            </h3>
            <p className="text-[#cdad7d] text-sm sm:text-base mb-8 sm:mb-10" style={{ fontFamily: 'Cormorant Garamond, serif' }}>(Effective per Texas Government Code § 406.024)</p>

            <div className="space-y-4 sm:space-y-0">
              {/* Mobile-friendly list view */}
              <div className="block sm:hidden space-y-3">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex justify-between items-start">
                    <span className="text-white text-sm leading-relaxed pr-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Acknowledgment or Proof (per signer)</span>
                    <span className="text-[#cdad7d] font-semibold text-lg whitespace-nowrap" style={{ fontFamily: 'EB Garamond, serif' }}>$10</span>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex justify-between items-start">
                    <span className="text-white text-sm leading-relaxed pr-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Each Additional Signatures (same document)</span>
                    <span className="text-[#cdad7d] font-semibold text-lg whitespace-nowrap" style={{ fontFamily: 'EB Garamond, serif' }}>$1</span>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex justify-between items-start">
                    <span className="text-white text-sm leading-relaxed pr-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Oath or Affirmation</span>
                    <span className="text-[#cdad7d] font-semibold text-lg whitespace-nowrap" style={{ fontFamily: 'EB Garamond, serif' }}>$10</span>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex justify-between items-start">
                    <span className="text-white text-sm leading-relaxed pr-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Jurat (Affidavit/Sworn Statement)</span>
                    <span className="text-[#cdad7d] font-semibold text-lg whitespace-nowrap" style={{ fontFamily: 'EB Garamond, serif' }}>$10</span>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex justify-between items-start">
                    <span className="text-white text-sm leading-relaxed pr-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Certified Copy of Non-Recordable Document</span>
                    <span className="text-[#cdad7d] font-semibold text-lg whitespace-nowrap" style={{ fontFamily: 'EB Garamond, serif' }}>$10</span>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex justify-between items-start">
                    <span className="text-white text-sm leading-relaxed pr-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Other Notarial Acts Allowed by Law</span>
                    <span className="text-[#cdad7d] font-semibold text-lg whitespace-nowrap" style={{ fontFamily: 'EB Garamond, serif' }}>$10</span>
                  </div>
                </div>
              </div>

              {/* Desktop table view */}
              <div className="hidden sm:block">
                <table className="w-full text-left">
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-4 pr-6 text-white text-base lg:text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Acknowledgment or Proof (per signer)</td>
                      <td className="py-4 text-[#cdad7d] font-semibold text-right text-lg lg:text-xl" style={{ fontFamily: 'EB Garamond, serif' }}>$10</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-4 pr-6 text-white text-base lg:text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Each Additional Signatures (same document)</td>
                      <td className="py-4 text-[#cdad7d] font-semibold text-right text-lg lg:text-xl" style={{ fontFamily: 'EB Garamond, serif' }}>$1</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-4 pr-6 text-white text-base lg:text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Oath or Affirmation</td>
                      <td className="py-4 text-[#cdad7d] font-semibold text-right text-lg lg:text-xl" style={{ fontFamily: 'EB Garamond, serif' }}>$10</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-4 pr-6 text-white text-base lg:text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Jurat (Affidavit/Sworn Statement)</td>
                      <td className="py-4 text-[#cdad7d] font-semibold text-right text-lg lg:text-xl" style={{ fontFamily: 'EB Garamond, serif' }}>$10</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-4 pr-6 text-white text-base lg:text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Certified Copy of Non-Recordable Document</td>
                      <td className="py-4 text-[#cdad7d] font-semibold text-right text-lg lg:text-xl" style={{ fontFamily: 'EB Garamond, serif' }}>$10</td>
                    </tr>

                    <tr>
                      <td className="py-4 pr-6 text-white text-base lg:text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Other Notarial Acts Allowed by Law</td>
                      <td className="py-4 text-[#cdad7d] font-semibold text-right text-lg lg:text-xl" style={{ fontFamily: 'EB Garamond, serif' }}>$10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-white/60 text-sm sm:text-base mt-6 sm:mt-8 text-center italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              *additional travel and convenience fees may apply
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;