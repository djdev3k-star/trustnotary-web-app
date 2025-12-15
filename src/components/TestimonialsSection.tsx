import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Wanda Jones was professional, patient... She took the time to understand the client's unique circumstances and never made anyone feel rushed. ... Thanks to her dedication, we were able to close the deal. Highly recommend her services!",
    author: "Valerie Sotelo",
    role: "",
    rating: 5
  },
  {
    text: "... I found Trust Notary in Seagoville and Ms. Wanda helped me out. She was incredibly kind, professional, and thorough. She took the time to explain everything clearly, making sure I understood each step of the process ...",
    author: "Alex Felix",
    role: "",
    rating: 5
  },
  {
    text: "We are traveling across country and needed to have paperwork notarized within hours. Wanda called within minutes and showed up within an hour. She is incredibly professional and kind. We could not have asked for better service.",
    author: "Dana Vorhees",
    role: "",
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
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Feedback from Clients
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
          <p className="text-xl text-gray-300" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Rated <span style={{ fontFamily: 'EB Garamond, serif' }}>5</span>-Stars on Google</p>
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
              <p className="text-gray-200 leading-relaxed mb-6 text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                "{testimonial.text}"
              </p>

              {/* Divider */}
              <div className="border-t-2 border-[#cdad7d]/30 pt-4">
                <div className="font-semibold text-white text-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {testimonial.author}
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