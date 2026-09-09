import React from 'react';
import { TREATMENTS, createWhatsAppUrl } from '../../data/landingData';
import { TreatmentIcon } from '../ui/TreatmentIcons';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const Treatments: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
  });

  return (
    <section
      id="tratamientos"
      ref={ref}
      className="py-16 sm:py-24 bg-[#FAF9F6] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#C89B3C] mb-2 font-display">
            Nuestros Servicios
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#12233D] tracking-tight mb-4">
            Tratamientos pensados para tu bienestar
          </h2>
          <p className="text-sm sm:text-base text-[#12233D]/80 leading-relaxed">
            Planes claros desde tu primera visita con tecnología moderna y la cercanía que tú y tu familia merecen.
          </p>
        </div>

        {/* Treatments Grid with Stagger Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TREATMENTS.map((treatment, index) => {
            const waUrl = createWhatsAppUrl(treatment.whatsappMessage);
            return (
              <div
                key={treatment.id}
                className={`flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-white border border-[#1B3A63]/10 shadow-sm hover:shadow-lg hover:border-[#C89B3C]/50 transition-all duration-500 group reveal-stagger-item ${
                  isVisible ? 'is-visible' : 'is-hidden'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#FAF9F6] border border-[#1B3A63]/10 text-[#1B3A63] group-hover:text-[#C89B3C] group-hover:border-[#C89B3C]/30 flex items-center justify-center transition-colors shadow-xs">
                      <TreatmentIcon name={treatment.iconName} size={28} />
                    </div>
                    {treatment.badge && (
                      <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#F7EEDB] text-[#1B3A63] border border-[#C89B3C]/30">
                        {treatment.badge}
                      </span>
                    )}
                  </div>

                  {/* Treatment Name (Exact copy) */}
                  <h3 className="font-display font-bold text-xl text-[#12233D] mb-3 group-hover:text-[#1B3A63] transition-colors">
                    {treatment.name}
                  </h3>

                  {/* Treatment Description (Exact copy) */}
                  <p className="text-sm sm:text-base text-[#12233D]/80 leading-relaxed mb-6">
                    {treatment.description}
                  </p>
                </div>

                {/* Direct WhatsApp consultation CTA per service */}
                <div className="pt-4 border-t border-[#1B3A63]/10 mt-auto">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs sm:text-sm font-semibold text-[#1B3A63] hover:text-[#C89B3C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89B3C] rounded-lg py-1"
                    aria-label={`Consultar por ${treatment.name} vía WhatsApp`}
                  >
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      Consultar este tratamiento
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
