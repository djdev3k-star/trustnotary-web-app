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

const backgroundImage = 'https://trust-notary.com/_assets/media/00790bfe9288b5780c9d6c7a7fcca94f.jpg';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-32 text-white relative overflow-hidden">
      {/* Full background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-[#142631]/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Client <span className="text-[#cdad7d]">Testimonials</span>
          </h2>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img
              src="/src/assets/google_g_icon_download.png"
              alt="Google"
              className="w-8 h-8"
            />
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} className="text-[#cdad7d] fill-current" />
              ))}
            </div>
          </div>
          <p className="text-xl text-gray-300">Rated 5-Stars on Google</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#cdad7d]/5 backdrop-blur-sm border-2 border-[#cdad7d]/20 rounded-2xl p-8 hover:bg-[#cdad7d]/10 hover:border-[#cdad7d]/40 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-6">
                <img
                  src="/src/assets/google_g_icon_download.png"
                  alt="Google"
                  className="w-5 h-5"
                />
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-[#cdad7d] fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-200 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Divider */}
              <div className="border-t-2 border-[#cdad7d]/30 pt-4">
                <div className="font-semibold text-white text-lg">
                  {testimonial.author}
                </div>
                <div className="text-[#cdad7d]">
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