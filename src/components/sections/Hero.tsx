import React from 'react';
import { HERO_COPY, CLINIC_INFO, createWhatsAppUrl } from '../../data/landingData';
import { Button } from '../ui/Button';
import { ToothMascot } from '../ui/Logo';
import { MessageCircle, ArrowDown, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(CLINIC_INFO.defaultWhatsAppMessage);
  const h1Words = HERO_COPY.h1.split(' ');

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] lg:min-h-[calc(100vh-76px)] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-[#FAF9F6] to-[#FAF9F6]/80 pt-4 pb-12 lg:py-0"
    >
      {/* Soft decorative ambient warm shapes */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C89B3C]/8 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-5 w-[450px] h-[450px] bg-[#1B3A63]/5 rounded-full blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & Staggered H1 */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Top Eyebrow Badge with Location */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B3A63]/5 border border-[#1B3A63]/15 text-[#1B3A63] text-xs sm:text-sm font-semibold mb-5 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>Guayaquil — Calle Portete de Tarqui y la 27ava</span>
            </div>

            {/* H1 Title with word-by-word stagger animation */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#12233D] leading-[1.15] tracking-tight mb-6">
              {h1Words.map((word, index) => {
                const isHighlight =
                  word.toLowerCase().includes('sonrisa') || word.toLowerCase().includes('solución');
                return (
                  <span
                    key={`${word}-${index}`}
                    className={`inline-block mr-[0.28em] transition-all duration-500 transform ${
                      isHighlight ? 'text-[#1B3A63] underline decoration-[#C89B3C] decoration-4 underline-offset-4' : ''
                    }`}
                    style={{
                      animation: `heroWordFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                      animationDelay: `${index * 65}ms`,
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </h1>

            {/* Subheadline */}
            <p
              className="text-base sm:text-lg lg:text-xl text-[#12233D]/85 leading-relaxed mb-8 max-w-2xl"
              style={{
                animation: 'heroWordFadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                animationDelay: '300ms',
              }}
            >
              {HERO_COPY.subheadline}
            </p>

            {/* Quick trust check items */}
            <div
              className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-[#12233D]/80 mb-8"
              style={{
                animation: 'heroWordFadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                animationDelay: '350ms',
              }}
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C89B3C]" />
                <span>Ortodoncia desde $25 en premolares</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C89B3C]" />
                <span>Presupuesto claro desde el inicio</span>
              </div>
            </div>

            {/* CTAs with 300ms fade delay */}
            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
              style={{
                animation: 'heroWordFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                animationDelay: '400ms',
              }}
            >
              <Button
                id="hero-primary-whatsapp-cta"
                href={whatsappUrl}
                variant="primary"
                size="lg"
                className="group shadow-md hover:shadow-xl hover:shadow-[#C89B3C]/30 text-base"
              >
                <MessageCircle className="w-5 h-5 text-[#12233D] transition-transform group-hover:scale-110" />
                <span>{HERO_COPY.primaryCta}</span>
              </Button>

              <Button
                id="hero-secondary-cta"
                href="#tratamientos"
                variant="outline"
                size="lg"
                className="group text-base border-[#1B3A63] text-[#1B3A63] hover:bg-[#1B3A63] hover:text-[#FAF9F6]"
              >
                <span>{HERO_COPY.secondaryCta}</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </div>
          </div>

          {/* Right Column: Warm, authentic clinic imagery with mascot badge */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Photo Frame with subtle warm borders */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src={HERO_COPY.heroImage}
                  alt="Equipo odontológico y paciente con sonrisa saludable en consulta dental cálida"
                  loading="eager"
                  className="w-full h-[360px] sm:h-[420px] lg:h-[480px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12233D]/60 via-transparent to-transparent" />

                {/* Floating caption on image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#FAF9F6]/95 backdrop-blur-md border border-white/50 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#C89B3C]/15 text-[#C89B3C]">
                      <Sparkles className="w-5 h-5 text-[#C89B3C]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#12233D] font-display">
                        Atención dental cercana
                      </p>
                      <p className="text-[11px] text-[#12233D]/70">
                        Ambiente cómodo y sin temor
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 bg-[#1B3A63] text-white rounded-lg">
                    Portete #5310
                  </span>
                </div>
              </div>

              {/* Floating Mascot Badge in upper right */}
              <div
                className="absolute -top-6 -right-4 sm:-right-6 bg-white p-3 rounded-2xl shadow-xl border border-[#C89B3C]/20 flex items-center gap-2.5 z-20"
                aria-hidden="true"
              >
                <ToothMascot size={46} winking={true} />
                <div className="pr-1">
                  <p className="text-xs font-bold text-[#1B3A63] font-display">
                    ¡Tu sonrisa primero!
                  </p>
                  <p className="text-[10px] text-[#C89B3C] font-semibold">
                    @imax.dental
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroWordFadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
