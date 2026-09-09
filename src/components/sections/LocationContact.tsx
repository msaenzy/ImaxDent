import React, { useState } from 'react';
import { CLINIC_INFO, SERVICE_OPTIONS } from '../../data/landingData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Button } from '../ui/Button';
import {
  MapPin,
  Clock,
  Phone,
  ExternalLink,
  MessageCircle,
  Send,
  CalendarCheck2,
} from 'lucide-react';

export const LocationContact: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({
    threshold: 0.15,
  });

  const [name, setName] = useState('');
  const [service, setService] = useState('Ortodoncia');
  const [preferredTime, setPreferredTime] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cleanName = name.trim() || 'un paciente';
    const cleanTime = preferredTime.trim() || 'flexible';

    // Exact required message structure:
    // "Hola, soy [Nombre]. Me interesa [Servicio] y mi horario preferente es [Horario]. ¿Podrían ayudarme a agendar?"
    const message = `Hola, soy ${cleanName}. Me interesa ${service} y mi horario preferente es ${cleanTime}. ¿Podrían ayudarme a agendar?`;
    const waUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-16 sm:py-24 bg-white border-t border-[#1B3A63]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#C89B3C] mb-2 font-display">
            Visítanos y conversemos
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#12233D] tracking-tight mb-3">
            Ubicación y contacto
          </h2>
          <p className="text-sm sm:text-base text-[#12233D]/80">
            Estamos en Guayaquil, en la calle Portete de Tarqui, listos para recibirte con planes claros y atención personalizada.
          </p>
        </div>

        {/* Two Columns: Left text & form (slide-left) / Right map (slide-right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Column 1: Info & Dynamic WhatsApp Form */}
          <div
            className={`lg:col-span-6 flex flex-col space-y-8 reveal-slide-left ${
              isVisible ? 'is-visible' : 'is-hidden'
            }`}
          >
            {/* Contact Details Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF9F6] border border-[#1B3A63]/10 shadow-xs space-y-4">
              <h3 className="font-display font-bold text-lg text-[#12233D] flex items-center gap-2">
                <CalendarCheck2 className="w-5 h-5 text-[#C89B3C]" />
                Datos del Consultorio
              </h3>

              <div className="space-y-3.5 text-sm sm:text-base text-[#12233D]/85">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C89B3C] shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-[#12233D]">Dirección: </span>
                    <span>{CLINIC_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#C89B3C] shrink-0" />
                  <div>
                    <span className="font-semibold text-[#12233D]">Horario: </span>
                    <span>{CLINIC_INFO.hours}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#C89B3C] shrink-0" />
                  <div>
                    <span className="font-semibold text-[#12233D]">WhatsApp: </span>
                    <span>{CLINIC_INFO.phoneFormatted}</span>
                  </div>
                </div>
              </div>

              {/* "Abrir en Mapa" Button */}
              <div className="pt-2">
                <Button
                  id="btn-open-google-maps"
                  href={CLINIC_INFO.googleMapsUrl}
                  variant="outline"
                  size="sm"
                  className="gap-2 text-xs sm:text-sm"
                >
                  <ExternalLink className="w-4 h-4 text-[#C89B3C]" />
                  <span>Abrir en Google Maps</span>
                </Button>
              </div>
            </div>

            {/* Direct WhatsApp Contact Form */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF9F6] border border-[#1B3A63]/10 shadow-xs">
              <h3 className="font-display font-bold text-lg text-[#12233D] mb-1">
                Agenda tu valoración por WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-[#12233D]/75 mb-6">
                Completa tus datos y envíanos un mensaje directo para coordinar tu cita:
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs sm:text-sm font-semibold text-[#12233D] mb-1"
                  >
                    Nombre y Apellido <span className="text-[#C89B3C]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. María Pérez"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1B3A63]/20 text-sm text-[#12233D] placeholder-[#12233D]/40 focus:outline-none focus:ring-2 focus:ring-[#C89B3C] focus:border-transparent transition-all"
                  />
                </div>

                {/* Servicio de interés */}
                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-xs sm:text-sm font-semibold text-[#12233D] mb-1"
                  >
                    Servicio de interés <span className="text-[#C89B3C]">*</span>
                  </label>
                  <select
                    id="contact-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1B3A63]/20 text-sm text-[#12233D] focus:outline-none focus:ring-2 focus:ring-[#C89B3C] focus:border-transparent transition-all"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Horario preferente */}
                <div>
                  <label
                    htmlFor="contact-time"
                    className="block text-xs sm:text-sm font-semibold text-[#12233D] mb-1"
                  >
                    Horario preferente
                  </label>
                  <input
                    id="contact-time"
                    type="text"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    placeholder="Ej. Sábado en la mañana / Entre semana 15:00"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#1B3A63]/20 text-sm text-[#12233D] placeholder-[#12233D]/40 focus:outline-none focus:ring-2 focus:ring-[#C89B3C] focus:border-transparent transition-all"
                  />
                </div>

                {/* Submit to WhatsApp */}
                <div className="pt-2">
                  <Button
                    id="btn-submit-whatsapp"
                    type="submit"
                    variant="primary"
                    size="md"
                    fullWidth
                    className="shadow-md"
                  >
                    <MessageCircle className="w-5 h-5 text-[#12233D]" />
                    <span>Enviar a WhatsApp</span>
                    <Send className="w-4 h-4 ml-1" />
                  </Button>
                  <p className="text-[11px] text-center text-[#12233D]/60 mt-2">
                    Abrirá un chat de WhatsApp con el mensaje listo para enviar al consultorio.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Column 2: Embedded Google Maps iframe */}
          <div
            className={`lg:col-span-6 h-full reveal-slide-right ${
              isVisible ? 'is-visible' : 'is-hidden'
            }`}
          >
            <div className="h-full rounded-2xl overflow-hidden border border-[#1B3A63]/15 shadow-md bg-[#FAF9F6] flex flex-col">
              <div className="p-4 bg-[#1B3A63] text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C89B3C]" />
                  <span className="font-display text-xs sm:text-sm font-semibold">
                    Imax Dent — Portete y la 27ava
                  </span>
                </div>
                <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded text-white/90">
                  Guayaquil
                </span>
              </div>

              {/* Embedded Google Maps iframe */}
              <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[560px]">
                <iframe
                  id="google-maps-iframe"
                  title="Ubicación de Imax Dent en Guayaquil, calle Portete de Tarqui"
                  src={CLINIC_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-3 bg-[#FAF9F6] border-t border-[#1B3A63]/10 text-center">
                <p className="text-xs text-[#12233D]/75">
                  Referencia: Portete de Tarqui #5310 y Aurelio Uraga (27ava), Guayaquil, Ecuador.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
