
import React from 'react';
import { CATEGORIES } from '../constants';
import { useGlobal } from '../context/GlobalContext';

const CategoryRail: React.FC = () => {
  const { activeCategory, setActiveCategory } = useGlobal();
  const [isExpanded, setIsExpanded] = React.useState(false);

  const visibleCategories = isExpanded ? CATEGORIES : CATEGORIES.slice(0, 3);

  return (
    <section className="py-8 border-b border-slate-100/50">
      <div className="container mx-auto px-3 mob-s:px-4 mob-l:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">Browse by Vibe</h2>
          <div className="flex gap-4">
            {activeCategory && (
              <button
                onClick={() => setActiveCategory(null)}
                className="text-xs font-bold text-brand-secondary hover:underline"
              >
                Clear Filter
              </button>
            )}
          </div>
        </div>

        {/* 
            Responsive Layout with "View All" Expansion:
            - !isExpanded: Horizontal scroll (Mobile S, M, L) showing limited items + View All button.
            - isExpanded: Wrapped grid (flex-wrap) showing all items.
            - Desktop: Always expanded/wrapped logic implies we can just use the same logic if checking window width, 
              but for now consistent behavior across devices (expandable) is cleanest, or we can default expands on desktop.
              Let's allow user toggle on all screens for consistency.
        */}
        <div className={`
            flex gap-3 pb-4 transition-all duration-300
            ${isExpanded 
              ? 'flex-wrap overflow-visible' 
              : 'overflow-x-auto -mx-3 px-3 mob-s:-mx-4 mob-s:px-4 mob-l:-mx-6 mob-l:px-6 md:mx-0 md:px-0 md:pb-0 no-scrollbar snap-x md:snap-none'}
        `}>
          <button
            onClick={() => setActiveCategory(null)}
            className={`
                snap-start flex-shrink-0 
                flex items-center gap-2.5 px-4 py-2.5 md:px-5 md:py-3
                rounded-full border transition-all duration-200 group font-semibold text-sm whitespace-nowrap
                ${activeCategory === null
                ? 'bg-brand-secondary border-brand-secondary text-white shadow-lg shadow-brand-secondary/30'
                : 'bg-white border-slate-200 text-slate-700 hover:border-brand-secondary hover:text-brand-secondary'}
              `}
          >
            All Vibes
          </button>

          {visibleCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.name ? null : cat.name)}
              className={`
                snap-start flex-shrink-0 
                flex items-center gap-2.5 px-4 py-2.5 md:px-5 md:py-3
                rounded-full border transition-all duration-200 group
                ${activeCategory === cat.name
                  ? 'bg-brand-secondary border-brand-secondary text-white shadow-lg shadow-brand-secondary/30'
                  : 'bg-white border-slate-200 hover:border-brand-secondary hover:bg-brand-secondary/5'}
              `}
            >
              <div className={`transition-colors ${activeCategory === cat.name ? 'text-white' : 'text-slate-400 group-hover:text-brand-secondary'}`}>
                {cat.icon}
              </div>
              <span className={`font-semibold text-sm whitespace-nowrap ${activeCategory === cat.name ? 'text-white' : 'text-slate-700 group-hover:text-brand-primary'}`}>
                {cat.name}
              </span>
            </button>
          ))}

          {/* View All / Show Less Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`
              snap-start flex-shrink-0 
              flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3
              rounded-full border border-slate-200 border-dashed 
              bg-slate-50 text-slate-500 font-bold text-sm whitespace-nowrap
              hover:bg-white hover:border-brand-secondary hover:text-brand-secondary transition-all
            `}
          >
            {isExpanded ? 'Show Less' : 'View All'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryRail;
