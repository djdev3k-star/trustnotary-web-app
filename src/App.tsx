import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ReliableSection from './components/ReliableSection';
import TestimonialsSection from './components/TestimonialsSection';
import LoanClosingsSection from './components/LoanClosingsSection';
import FeesSection from './components/FeesSection';
import MobileNotarySection from './components/MobileNotarySection';
import ScheduleSection from './components/ScheduleSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ReliableSection />
      <TestimonialsSection />
      <LoanClosingsSection />
      <FeesSection />
      <MobileNotarySection />
      <ScheduleSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;