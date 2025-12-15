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
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <Quote className="text-blue-200 absolute top-6 right-6" size={32} />

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-700 mb-6 leading-relaxed italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-3">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-slate-900" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-slate-600 text-sm" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
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
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-8 bg-slate-100 rounded-full px-8 py-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">500+</div>
              <div className="text-slate-600 text-sm">Happy Clients</div>
            </div>
            <div className="w-px h-8 bg-slate-300" />
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">5.0</div>
              <div className="text-slate-600 text-sm">Average Rating</div>
            </div>
            <div className="w-px h-8 bg-slate-300" />
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">100%</div>
              <div className="text-slate-600 text-sm">Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;