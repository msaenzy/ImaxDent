import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Treatments } from './components/sections/Treatments';
import { AboutUs } from './components/sections/AboutUs';
import { Testimonials } from './components/sections/Testimonials';
import { LocationContact } from './components/sections/LocationContact';
import { Footer } from './components/layout/Footer';
import { CLINIC_INFO, createWhatsAppUrl } from './data/landingData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const floatingWhatsAppUrl = createWhatsAppUrl(CLINIC_INFO.defaultWhatsAppMessage);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#12233D] font-sans antialiased selection:bg-[#C89B3C]/20 selection:text-[#1B3A63]">
      {/* Navbar (sticky) */}
      <Navbar />

      {/* Main Content Sections (Strictly ordered) */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Por qué elegirnos */}
        <WhyChooseUs />

        {/* 3. Tratamientos */}
        <Treatments />

        {/* 4. Sobre nosotros */}
        <AboutUs />

        {/* 5. Testimonios */}
        <Testimonials />

        {/* 6. Ubicación y contacto */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Button */}
      <aside aria-label="Contacto directo por WhatsApp" className="fixed bottom-6 right-6 z-40">
        <a
          id="floating-whatsapp-btn"
          href={floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
          aria-label="Escribir por WhatsApp a Imax Dent"
        >
          <MessageCircle className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline-block font-display font-semibold text-sm">
            ¿Consultas? Escríbenos
          </span>
        </a>
      </aside>
    </div>
  );
}
