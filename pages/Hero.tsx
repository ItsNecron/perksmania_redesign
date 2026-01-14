
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useGlobal } from '../context/GlobalContext';

const Hero: React.FC = () => {
  const { showToast } = useGlobal();

  const handleExplore = () => {
    const grid = document.getElementById('perks-grid');
    if (grid) {
      grid.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInfo = () => {
    showToast('Guide module coming soon!', 'info');
  };

  return (
    <section className="pt-24 mob-m:pt-28 lg:pt-32 pb-8 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="relative rounded-[1.5rem] mob-m:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden min-h-[400px] flex items-center p-6 mob-m:p-8 lg:p-16">

          {/* Dynamic Background Mesh */}
          <div className="absolute inset-0 bg-[#0f172a]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/40 rounded-full blur-[100px] animate-float"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/30 rounded-full blur-[100px] animate-pulse-slow"></div>
            <img
              src="https://picsum.photos/1200/600?blur=5"
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
              alt="Background texture"
            />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6">
              <Sparkles size={16} className="text-yellow-300" fill="currentColor" />
              <span className="text-sm font-semibold tracking-wide">Daily drops refreshed 2 hrs ago</span>
            </div>

            <h1 className="text-3xl mob-m:text-4xl mob-l:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Unlock the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-200">VIP Lifestyle</span> for less.
            </h1>

            <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
              Curated perks, exclusive drops, and experiences you actually want. Start saving on your terms.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleExplore}
                className="px-8 py-4 bg-white text-brand-primary rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2"
              >
                Explore Perks <ArrowRight size={20} />
              </button>
              <button
                onClick={handleInfo}
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                How it Works
              </button>
            </div>
          </div>

          {/* Floating Element (3Dish) */}
          <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 w-80 rotate-[-6deg] hover:rotate-0 transition-all duration-500 hover:scale-105">
            <div className="bg-white/90 backdrop-blur-xl p-4 rounded-3xl shadow-2xl border border-white/40">
              <div className="bg-gradient-to-br from-brand-secondary to-brand-accent h-40 rounded-2xl mb-4 flex items-center justify-center">
                <span className="text-6xl font-black text-white/20">50%</span>
              </div>
              <div className="space-y-2">
                <div className="h-4 w-3/4 bg-slate-200 rounded-full"></div>
                <div className="h-4 w-1/2 bg-slate-200 rounded-full"></div>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div className="text-brand-primary font-bold text-xl">$14.99</div>
                <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">-50% OFF</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
