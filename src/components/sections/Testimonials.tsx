import React from 'react';
import { TESTIMONIALS } from '../../data/landingData';
import { Quote, Star, MessageSquareQuote, ShieldAlert } from 'lucide-react';

export const Testimonials: React.FC = () => {
  // Duplicate slots for seamless infinite marquee loop
  const duplicatedSlots = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimonios"
      className="py-16 sm:py-24 bg-[#FAF9F6] overflow-hidden relative"
      aria-label="Testimonios de pacientes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#C89B3C] mb-2 font-display">
          Experiencias en Guayaquil
        </span>
        <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#12233D] tracking-tight mb-3">
          Opiniones de nuestros pacientes
        </h2>
        <p className="text-sm sm:text-base text-[#12233D]/75 max-w-xl mx-auto">
          La confianza y comodidad de quienes nos visitan son nuestra mayor prioridad en cada atención.
        </p>

        {/* Note / Pending status banner */}
        <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-full bg-[#C89B3C]/10 border border-[#C89B3C]/20 text-[#1B3A63] text-xs font-medium">
          <ShieldAlert className="w-3.5 h-3.5 text-[#C89B3C]" />
          <span>Sección en actualización con valoraciones verificadas de @imax.dental</span>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Carousel with hover/touch pause */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right subtle gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />

        <div
          className="animate-marquee flex gap-6"
          tabIndex={0}
          role="region"
          aria-label="Carrusel de testimonios"
        >
          {duplicatedSlots.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[290px] sm:w-[350px] p-6 rounded-2xl bg-white border border-[#1B3A63]/10 shadow-sm hover:shadow-md transition-shadow shrink-0 flex flex-col justify-between"
            >
              <div>
                {/* Header with stars & slot indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C89B3C]">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#1B3A63]/60 bg-[#FAF9F6] px-2.5 py-0.5 rounded-md border border-[#1B3A63]/10">
                    Slot #{item.slotNumber}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-[#C89B3C]/30 mb-2" />

                {/* Exact mandated placeholder copy */}
                <p className="text-xs sm:text-sm text-[#12233D]/80 italic leading-relaxed mb-4">
                  &ldquo;{item.placeholderText}&rdquo;
                </p>
              </div>

              {/* Patient attribution placeholder */}
              <div className="pt-3 border-t border-[#1B3A63]/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FAF9F6] border border-[#C89B3C]/30 flex items-center justify-center text-[#1B3A63] font-bold text-xs">
                  P{item.slotNumber}
                </div>
                <div>
                  <p className="text-xs font-bold text-[#12233D] font-display">
                    Paciente Imax Dent
                  </p>
                  <p className="text-[11px] text-[#12233D]/60">
                    Tratamiento verificado
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
