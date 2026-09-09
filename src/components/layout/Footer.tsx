import React from 'react';
import { Logo, ToothMascot } from '../ui/Logo';
import { CLINIC_INFO, createWhatsAppUrl } from '../../data/landingData';
import { Instagram, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = createWhatsAppUrl(CLINIC_INFO.defaultWhatsAppMessage);

  return (
    <footer id="main-footer" className="bg-[#12233D] text-[#FAF9F6] border-t border-[#1B3A63]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand Info & Mascot */}
          <div className="md:col-span-5 flex flex-col items-start space-y-4">
            <Logo variant="dark" size="lg" />
            <p className="text-sm text-[#FAF9F6]/80 max-w-md leading-relaxed">
              Atención dental cercana, clara y accesible en Guayaquil. Porque tu sonrisa
              merece una solución pensada para ti con planes claros desde tu primera visita.
            </p>

            {/* Instagram Link (only confirmed social network) */}
            <div className="pt-2 flex items-center gap-3">
              <a
                id="footer-instagram-link"
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1B3A63]/50 hover:bg-[#1B3A63] text-[#FAF9F6] border border-[#FAF9F6]/15 transition-colors text-sm font-medium focus-visible:ring-2 focus-visible:ring-[#C89B3C]"
                aria-label="Perfil oficial de Instagram @imax.dental"
              >
                <Instagram className="w-4 h-4 text-[#C89B3C]" />
                <span>@imax.dental</span>
              </a>

              <a
                id="footer-whatsapp-link"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#FAF9F6] border border-[#25D366]/30 transition-colors text-sm font-medium focus-visible:ring-2 focus-visible:ring-[#C89B3C]"
                aria-label="Contactar por WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>+593 96 939 3900</span>
              </a>
            </div>
          </div>

          {/* Direct details */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-display font-semibold text-base text-[#FAF9F6] tracking-wide">
              Ubicación y Atención
            </h3>
            <ul className="space-y-2.5 text-sm text-[#FAF9F6]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C89B3C] shrink-0 mt-1" />
                <span>{CLINIC_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <span>{CLINIC_INFO.hours}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C89B3C] shrink-0" />
                <span>WhatsApp: {CLINIC_INFO.phoneFormatted}</span>
              </li>
            </ul>
          </div>

          {/* Mascot Friendly Note */}
          <div className="md:col-span-3 flex flex-col sm:flex-row md:flex-col items-center md:items-start gap-4 p-4 rounded-2xl bg-[#1B3A63]/30 border border-[#FAF9F6]/10">
            <ToothMascot size={52} winking={true} />
            <div>
              <p className="text-xs font-semibold text-[#C89B3C] uppercase tracking-wider">
                Tratamientos claros
              </p>
              <p className="text-xs text-[#FAF9F6]/80 mt-1">
                Ortodoncia, limpiezas, resinas, prótesis y extracciones en Guayaquil (calle Portete de Tarqui).
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#FAF9F6]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF9F6]/60 gap-4">
          <p>© {currentYear} Imax Dent. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1.5">
            <span>Guayaquil, Ecuador</span>
            <span>•</span>
            <a
              href={CLINIC_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C89B3C] hover:underline"
            >
              @imax.dental
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
