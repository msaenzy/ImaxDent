import React, { useState, useEffect } from 'react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { CLINIC_INFO, createWhatsAppUrl } from '../../data/landingData';
import { Menu, X, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Tratamientos', href: '#tratamientos' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const whatsappUrl = createWhatsAppUrl(CLINIC_INFO.defaultWhatsAppMessage);

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-[#1B3A63]/10 py-3'
          : 'bg-[#FAF9F6] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo link */}
          <a
            href="#inicio"
            className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] rounded-lg"
            aria-label="Imax Dent - Inicio"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Anchor Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm lg:text-base font-medium text-[#12233D] hover:text-[#1B3A63] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] rounded after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C89B3C] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA */}
          <div className="hidden md:flex items-center">
            <Button
              id="navbar-whatsapp-cta"
              href={whatsappUrl}
              variant="primary"
              size="sm"
              className="group shadow-sm hover:shadow"
            >
              <MessageCircle className="w-4 h-4 text-[#12233D] transition-transform group-hover:scale-110" />
              <span>Agendar por WhatsApp</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#12233D] bg-[#C89B3C] rounded-xl text-xs font-semibold flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#C89B3C]"
              aria-label="Agendar valoración por WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#12233D]" />
              <span className="sr-only sm:not-sr-only">WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#12233D] hover:text-[#1B3A63] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C]"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-[#FAF9F6] border-b border-[#1B3A63]/15 px-4 pt-2 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col space-y-3 pt-2" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#12233D] hover:bg-[#1B3A63]/5 hover:text-[#1B3A63] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <Button
                id="mobile-nav-whatsapp-cta"
                href={whatsappUrl}
                variant="primary"
                size="md"
                fullWidth
                className="mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageCircle className="w-5 h-5 text-[#12233D]" />
                <span>Agendar por WhatsApp</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
