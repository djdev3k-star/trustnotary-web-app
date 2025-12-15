import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import VisualShowcase from './components/VisualShowcase';
import Services from './components/Services';
import TestimonialsSection from './components/TestimonialsSection';
import ScheduleSection from './components/ScheduleSection';
import ContactSection from './components/ContactSection';
import ServicesListSection from './components/ServicesListSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <VisualShowcase />
      <Services />
      <TestimonialsSection />
      <ScheduleSection />
      <ContactSection />
      <ServicesListSection />
      <Footer />
    </div>
  );
}

export default App;