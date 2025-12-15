import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Shield, Users } from 'lucide-react';

const backgroundImage = 'https://trust-notary.com/_assets/media/a0cbf6662ccef407221ab03afbc5fb03.jpg';

const showcaseItems = [
  {
    icon: Award,
    title: 'Professional Excellence',
    description: 'Expert document handling with meticulous attention to every detail'
  },
  {
    icon: Clock,
    title: 'On-Time Service',
    description: 'We show up when we say we will, ready to get the job done right'
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your convenience is our priority with flexible scheduling options'
  },
  {
    icon: Shield,
    title: 'Trusted & Secure',
    description: 'Licensed, bonded, and insured for complete peace of mind'
  }
];

const VisualShowcase = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      <div className="absolute inset-0 bg-[#cdad7d]/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Reliable Signings Every Time
          </h2>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            We offer flexible signing arrangements including refinance, buyer/seller documents, HELOC, reverse mortgages, and more. Our commitment is to make your closing process smooth and worry-free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex items-start space-x-6"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex-shrink-0"
              >
                <item.icon className="w-16 h-16 text-[#cdad7d] drop-shadow-lg" strokeWidth={1.5} />
              </motion.div>
              <div className="text-left">
                <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {item.title}
                </h3>
                <p className="text-xl text-white leading-relaxed drop-shadow-md" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualShowcase;
