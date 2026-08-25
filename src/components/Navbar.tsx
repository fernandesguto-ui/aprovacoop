import React from "react";
import { SITE_DATA } from "../data/content";

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          {/* Logo Only */}
          <a href="#" className="flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-xl p-1.5">
            <img
              src={SITE_DATA.logoUrl}
              alt="Aprova Coop Logo"
              referrerPolicy="no-referrer"
              className="h-14 sm:h-16 w-auto object-contain max-w-[280px] sm:max-w-[340px] transition-transform duration-200 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </a>
        </div>
      </div>
    </header>
  );
};
