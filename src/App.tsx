import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const AboutSection = lazy(() => import('./components/AboutSection'));
const VisualShowcase = lazy(() => import('./components/VisualShowcase'));
const Services = lazy(() => import('./components/Services'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const ScheduleSection = lazy(() => import('./components/ScheduleSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const ServicesListSection = lazy(() => import('./components/ServicesListSection'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-screen" />}>
        <AboutSection />
        <VisualShowcase />
        <Services />
        <TestimonialsSection />
        <ScheduleSection />
        <ContactSection />
        <ServicesListSection />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;