
import React from 'react';
import { CATEGORIES } from '../constants';
import { useGlobal } from '../context/GlobalContext';

const CategoryRail: React.FC = () => {
  const { activeCategory, setActiveCategory } = useGlobal();

  return (
    <section className="py-8 border-b border-slate-100/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">Browse by Vibe</h2>
          {activeCategory && (
            <button 
              onClick={() => setActiveCategory(null)}
              className="text-xs font-bold text-brand-blue hover:underline"
            >
              Clear Filter
            </button>
          )}
        </div>
        
        {/* 
            Responsive Layout:
            - Mobile: Horizontal scroll with "bleed" (negative margins) so content touches screen edges.
            - Desktop: Wrapped grid layout for easier scanning with mouse.
        */}
        <div className="
            flex gap-3 overflow-x-auto pb-4 
            -mx-4 px-4              /* Mobile Bleed: pulls container to edges, adds internal padding */
            md:mx-0 md:px-0 md:pb-0 /* Desktop Reset */
            md:flex-wrap md:overflow-visible 
            no-scrollbar snap-x md:snap-none
        ">
          <button 
              onClick={() => setActiveCategory(null)}
              className={`
                snap-start flex-shrink-0 
                flex items-center gap-2.5 px-4 py-2.5 md:px-5 md:py-3
                rounded-full border transition-all duration-200 group font-semibold text-sm whitespace-nowrap
                ${activeCategory === null 
                  ? 'bg-brand-blue border-brand-blue text-white shadow-lg shadow-brand-blue/30' 
                  : 'bg-white border-slate-200 text-slate-700 hover:border-brand-blue hover:text-brand-blue'}
              `}
            >
              All Vibes
            </button>

          {CATEGORIES.map((cat) => (
            <button 
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.name ? null : cat.name)}
              className={`
                snap-start flex-shrink-0 
                flex items-center gap-2.5 px-4 py-2.5 md:px-5 md:py-3
                rounded-full border transition-all duration-200 group
                ${activeCategory === cat.name 
                  ? 'bg-brand-blue border-brand-blue text-white shadow-lg shadow-brand-blue/30' 
                  : 'bg-white border-slate-200 hover:border-brand-blue hover:bg-brand-blue/5'}
              `}
            >
              <div className={`transition-colors ${activeCategory === cat.name ? 'text-white' : 'text-slate-400 group-hover:text-brand-blue'}`}>
                {cat.icon}
              </div>
              <span className={`font-semibold text-sm whitespace-nowrap ${activeCategory === cat.name ? 'text-white' : 'text-slate-700 group-hover:text-brand-dark'}`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryRail;
