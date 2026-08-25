import React from "react";
import { SITE_DATA } from "../data/content";

export const LogosMarquee: React.FC = () => {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-6 sm:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <p className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-500 font-bold">
          Metodologia baseada em experiências reais no sistema de cooperativas:
        </p>
      </div>

      {/* Logos Marquee / Carousel with gradient fade edges */}
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="animate-marquee flex items-center gap-8 sm:gap-12">
          {SITE_DATA.cooperativeLogos.map((item, index) => (
            <div key={`marquee-logo-1-${index}`} className="shrink-0 px-3 sm:px-5">
              <img
                src={item.url}
                alt={item.name}
                referrerPolicy="no-referrer"
                className="h-8 sm:h-9 max-w-[130px] w-auto object-contain transition-transform hover:scale-105"
              />
            </div>
          ))}
          {SITE_DATA.cooperativeLogos.map((item, index) => (
            <div key={`marquee-logo-2-${index}`} className="shrink-0 px-3 sm:px-5">
              <img
                src={item.url}
                alt={item.name}
                referrerPolicy="no-referrer"
                className="h-8 sm:h-9 max-w-[130px] w-auto object-contain transition-transform hover:scale-105"
              />
            </div>
          ))}
          {SITE_DATA.cooperativeLogos.map((item, index) => (
            <div key={`marquee-logo-3-${index}`} className="shrink-0 px-3 sm:px-5">
              <img
                src={item.url}
                alt={item.name}
                referrerPolicy="no-referrer"
                className="h-8 sm:h-9 max-w-[130px] w-auto object-contain transition-transform hover:scale-105"
              />
            </div>
          ))}
          {SITE_DATA.cooperativeLogos.map((item, index) => (
            <div key={`marquee-logo-4-${index}`} className="shrink-0 px-3 sm:px-5">
              <img
                src={item.url}
                alt={item.name}
                referrerPolicy="no-referrer"
                className="h-8 sm:h-9 max-w-[130px] w-auto object-contain transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
