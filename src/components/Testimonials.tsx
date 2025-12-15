import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homebuyer',
    text: 'Trust Notary made the closing process smooth and easy. They arrived on time, were incredibly professional, and made sure every document was perfect. Highly recommend!',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    name: 'Michael Chen',
    role: 'Real Estate Agent',
    text: 'They showed up on time and were incredibly professional throughout. My clients always have a great experience with Trust Notary. They\'re my go-to for all closings.',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    name: 'Jennifer Martinez',
    role: 'Business Owner',
    text: 'Exceptional service! They handled our commercial real estate closing with expertise and attention to detail. Made a complex process feel effortless.',
    rating: 5,
    avatar: '👩‍💻'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Feedback from{' '}
            <span className="text-blue-600 font-semibold">Clients</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Don't just take our word for it. See what our satisfied clients have to say about our notary services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-slate-50 via-white to-[#cdad7d]/5 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group border border-slate-100"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#cdad7d]/0 to-[#cdad7d]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Quote Icon */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Quote className="text-[#cdad7d]/20 absolute top-6 right-6" size={32} />
              </motion.div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + i * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <Star size={16} className="text-[#cdad7d] fill-current" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#142631] mb-6 leading-relaxed italic relative z-10" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-3 relative z-10">
                <motion.div
                  className="text-3xl bg-[#cdad7d]/10 w-12 h-12 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <div className="font-semibold text-[#142631]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-[#142631]/60 text-sm" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-flex items-center space-x-8 bg-gradient-to-r from-slate-100 via-[#cdad7d]/5 to-slate-100 rounded-full px-8 py-4 shadow-md"
            whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
          >
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="text-2xl font-bold text-[#142631]"
                style={{ fontFamily: 'EB Garamond, serif' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                500+
              </motion.div>
              <div className="text-[#142631]/70 text-sm" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Happy Clients</div>
            </motion.div>
            <div className="w-px h-8 bg-[#cdad7d]/30" />
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="text-2xl font-bold text-[#142631]"
                style={{ fontFamily: 'EB Garamond, serif' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                5.0
              </motion.div>
              <div className="text-[#142631]/70 text-sm" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Average Rating</div>
            </motion.div>
            <div className="w-px h-8 bg-[#cdad7d]/30" />
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="text-2xl font-bold text-[#142631]"
                style={{ fontFamily: 'EB Garamond, serif' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                100%
              </motion.div>
              <div className="text-[#142631]/70 text-sm" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Satisfaction</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;