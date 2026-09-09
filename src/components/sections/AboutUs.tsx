import React from 'react';
import { ABOUT_US } from '../../data/landingData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Heart, Coins, ShieldCheck, UserCheck } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({
    threshold: 0.15,
  });

  const getValueIcon = (id: string) => {
    switch (id) {
      case 'cercania':
        return <Heart className="w-5 h-5 text-[#C89B3C]" />;
      case 'precios-claros':
        return <Coins className="w-5 h-5 text-[#C89B3C]" />;
      case 'prevencion-primero':
        return <ShieldCheck className="w-5 h-5 text-[#C89B3C]" />;
      case 'atencion-personalizada':
        return <UserCheck className="w-5 h-5 text-[#C89B3C]" />;
      default:
        return <Heart className="w-5 h-5 text-[#C89B3C]" />;
    }
  };

  return (
    <section
      id="nosotros"
      ref={ref}
      className="py-16 sm:py-24 bg-white border-y border-[#1B3A63]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center reveal-fade-scale ${
            isVisible ? 'is-visible' : 'is-hidden'
          }`}
        >
          {/* Left Column: Image with Warm Tone & Context */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-[#FAF9F6]">
                <img
                  src={ABOUT_US.image}
                  alt="Equipo dental de Imax Dent atendiendo con calidez y dedicación en Guayaquil"
                  loading="lazy"
                  className="w-full h-[380px] sm:h-[450px] object-cover object-center"
                />
              </div>

              {/* Decorative badge */}
              <div className="absolute -bottom-5 -right-3 sm:right-6 bg-[#1B3A63] text-white p-4 rounded-2xl shadow-xl max-w-xs border border-white/20">
                <p className="text-xs font-semibold text-[#C89B3C] uppercase tracking-wider">
                  Enfoque familiar
                </p>
                <p className="text-sm font-medium mt-0.5">
                  Atención para niños, jóvenes y adultos en Guayaquil.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Values */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#C89B3C] mb-2 font-display">
              {ABOUT_US.title}
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#12233D] tracking-tight mb-6">
              {ABOUT_US.headline}
            </h2>

            {/* Exact Copy text: "quiénes somos" */}
            <p className="text-base sm:text-lg text-[#12233D]/85 leading-relaxed mb-8">
              {ABOUT_US.description}
            </p>

            {/* 4 Values (Exact copy) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
              {ABOUT_US.values.map((val) => (
                <div
                  key={val.id}
                  className="p-4 rounded-xl bg-[#FAF9F6] border border-[#1B3A63]/10 flex items-start gap-3.5 hover:border-[#C89B3C]/40 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-white border border-[#1B3A63]/10 shrink-0">
                    {getValueIcon(val.id)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm sm:text-base text-[#12233D]">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#12233D]/75 mt-0.5 leading-snug">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
