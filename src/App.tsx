import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import VisualShowcase from './components/VisualShowcase';
import Services from './components/Services';
import TestimonialsSection from './components/TestimonialsSection';
import FeesSection from './components/FeesSection';
import ScheduleSection from './components/ScheduleSection';
import ContactSection from './components/ContactSection';
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
      <FeesSection />
      <ScheduleSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;