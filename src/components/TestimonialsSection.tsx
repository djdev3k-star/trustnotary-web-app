import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Trust Notary made the closing process smooth and easy. They arrived on time, were incredibly professional, and made sure every document was perfect. I couldn't have asked for better service during such an important transaction.",
    author: "Sarah Johnson",
    role: "Homebuyer",
    rating: 5
  },
  {
    text: "As a real estate agent, I've worked with many notaries, but Trust Notary stands out. They're always punctual, thorough, and make my clients feel comfortable throughout the entire signing process.",
    author: "Michael Chen", 
    role: "Real Estate Agent",
    rating: 5
  },
  {
    text: "Professional, efficient, and trustworthy. Trust Notary handled our commercial real estate closing with expertise and attention to detail. They made a complex process feel effortless.",
    author: "Jennifer Martinez",
    role: "Business Owner", 
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600')`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-6">
            Feedback from Clients
          </h2>
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="text-amber-400 fill-current" />
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-200 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-white/20 pt-4">
                <div className="font-semibold text-white text-lg">
                  {testimonial.author}
                </div>
                <div className="text-gray-400">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;