import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

const Schedule = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    location: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'Refinance Documents',
    'Buyer/Seller Documents',
    'Reverse Mortgage Application',
    'Loan Modification',
    'Commercial Real Estate Closing',
    'Other'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            Schedule with{' '}
            <span className="text-blue-600 font-semibold">Confidence</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Book your appointment today and experience professional notary services 
            that prioritize your time and peace of mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: 'Phone', value: '(555) 123-4567', href: 'tel:+15551234567' },
                  { icon: Mail, label: 'Email', value: 'info@trustnotary.com', href: 'mailto:info@trustnotary.com' },
                  { icon: MapPin, label: 'Service Area', value: 'Greater Metro Area + 25 miles', href: '#' }
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-50 to-[#cdad7d]/5 rounded-2xl hover:shadow-lg transition-all duration-300 group border border-slate-100"
                  >
                    <motion.div
                      className="w-12 h-12 bg-[#cdad7d]/20 group-hover:bg-[#cdad7d]/30 rounded-xl flex items-center justify-center transition-colors"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <contact.icon className="text-[#142631]" size={20} />
                    </motion.div>
                    <div>
                      <div className="text-[#142631]/60 text-sm">{contact.label}</div>
                      <div className="text-[#142631] font-semibold">{contact.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-br from-[#cdad7d]/10 to-slate-50 rounded-3xl p-8 border border-[#cdad7d]/20 shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-xl font-semibold text-[#142631] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Business Hours
              </h4>
              <div className="space-y-2">
                {[
                  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
                  { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
                  { day: 'Sunday', hours: 'By Appointment' }
                ].map((schedule, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between py-2 border-b border-[#cdad7d]/10 last:border-0"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-[#142631]/70" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{schedule.day}</span>
                    <span className="text-[#142631] font-semibold" style={{ fontFamily: 'EB Garamond, serif' }}>{schedule.hours}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="text-blue-600" size={24} />
              <h3 className="text-2xl font-semibold text-slate-900">
                Book Appointment
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-2">
                    Service Type *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-medium mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-2">
                    Preferred Time *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Address where service is needed"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Any special requirements or questions?"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(20, 38, 49, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#142631] hover:bg-[#1a3340] text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 border-2 border-[#cdad7d]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {isSubmitted ? (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <CheckCircle size={20} />
                    </motion.div>
                    <span>Appointment Requested!</span>
                  </>
                ) : (
                  <>
                    <Calendar size={20} />
                    <span>Book Appointment</span>
                  </>
                )}
              </motion.button>
            </form>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl"
              >
                <p className="text-green-800 text-center">
                  Thank you! We'll contact you within 2 hours to confirm your appointment.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;