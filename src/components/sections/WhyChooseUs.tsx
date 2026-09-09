import React from 'react';
import { WHY_CHOOSE_US } from '../../data/landingData';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { MapPin, BadgeDollarSign, HeartHandshake, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>({
    threshold: 0.15,
  });

  const getCardIcon = (id: number) => {
    switch (id) {
      case 1:
        return <MapPin className="w-6 h-6 text-[#C89B3C]" />;
      case 2:
        return <BadgeDollarSign className="w-6 h-6 text-[#C89B3C]" />;
      case 3:
        return <HeartHandshake className="w-6 h-6 text-[#C89B3C]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C89B3C]" />;
    }
  };

  return (
    <section
      id="por-que-elegirnos"
      ref={ref}
      className="py-16 sm:py-20 bg-[#FAF9F6] border-y border-[#1B3A63]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#C89B3C] mb-2 font-display">
            Razones para confiar en nosotros
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#12233D] tracking-tight">
            Por qué elegir Imax Dent
          </h2>
        </div>

        {/* 3 Cards with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.id}
              className={`p-7 sm:p-8 rounded-2xl bg-white border border-[#1B3A63]/10 shadow-sm hover:shadow-md transition-all duration-500 reveal-stagger-item ${
                isVisible ? 'is-visible' : 'is-hidden'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Card Icon Container */}
              <div className="w-13 h-13 rounded-2xl bg-[#FAF9F6] border border-[#C89B3C]/30 flex items-center justify-center mb-6 shadow-xs">
                {getCardIcon(item.id)}
              </div>

              {/* Exact Copy Title */}
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#12233D] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Exact Copy Description */}
              <p className="text-sm sm:text-base text-[#12233D]/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
