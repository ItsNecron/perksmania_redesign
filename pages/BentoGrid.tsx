
import React, { useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import { POPULAR_PERKS, DAILY_DROPS } from '../constants';
import { Flame, Frown } from 'lucide-react';
import { useGlobal } from '../context/GlobalContext';

const BentoGrid: React.FC = () => {
  const { activeCategory, searchQuery, showToast, setActiveCategory, setSearchQuery } = useGlobal();
  const [email, setEmail] = useState('');

  // Filter Logic
  const filteredPopular = useMemo(() => {
    return POPULAR_PERKS.filter(perk => {
      const matchesCategory = activeCategory ? perk.category === activeCategory : true;
      const matchesSearch = perk.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        perk.merchant.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const filteredDrops = useMemo(() => {
    return DAILY_DROPS.filter(perk => {
      const matchesCategory = activeCategory ? perk.category === activeCategory : true;
      const matchesSearch = perk.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        perk.merchant.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email', 'error');
      return;
    }
    showToast('Subscribed successfully! Watch your inbox.', 'success');
    setEmail('');
  };

  const handleReset = () => {
    setActiveCategory(null);
    setSearchQuery('');
  };

  const isEmpty = filteredPopular.length === 0 && filteredDrops.length === 0;

  return (
    <section id="perks-grid" className="py-12 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 flex items-center gap-2">
              {activeCategory ? `${activeCategory}` : 'Popular Perks'}
              {!activeCategory && <Flame className="text-orange-500 animate-pulse" />}
            </h2>
            <p className="text-slate-500 mt-1">
              {searchQuery ? `Showing results for "${searchQuery}"` : "Don't miss out on what everyone is claiming."}
            </p>
          </div>
          <button
            onClick={handleReset}
            className="hidden md:block text-brand-secondary font-bold hover:underline decoration-2 underline-offset-4"
          >
            View All Perks
          </button>
        </div>

        {isEmpty ? (
          <div className="py-20 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <Frown size={40} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">No perks found</h3>
            <p className="text-slate-500 mb-6">Try adjusting your filters or search query.</p>
            <button onClick={handleReset} className="px-6 py-2 bg-brand-secondary text-white rounded-lg font-bold hover:bg-brand-primary transition-colors">
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPopular.map((perk, index) => (
              // Logic to make the first item larger for visual variety (Bento style), but only if not filtering
              <div key={perk.id} className={(!activeCategory && !searchQuery && index === 0) ? "md:col-span-2 md:row-span-2" : ""}>
                <ProductCard product={perk} featured={!activeCategory && !searchQuery && index === 0} />
              </div>
            ))}
          </div>
        )}

        {/* Daily Drops Scroller - Mobile Optimized */}
        {filteredDrops.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Daily Drops</h2>
              <span className="px-2 py-1 bg-brand-accent/10 text-brand-accent text-xs font-bold rounded-md">
                Ends in 12h
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Special Banner Card (Only show if no search/filter to avoid confusion) */}
              {!activeCategory && !searchQuery && (
                <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-brand-secondary p-5 mob-m:p-6 lg:p-8 text-white flex flex-col justify-center items-start shadow-xl">
                  <h3 className="text-2xl font-bold mb-2">Subscribe & Save</h3>
                  <p className="text-white/80 mb-6 text-sm">Join the VIP list to get early access to drops.</p>
                  <form onSubmit={handleSubscribe} className="w-full bg-white/20 p-1 rounded-xl flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="bg-transparent w-full px-3 text-sm focus:outline-none placeholder:text-white/50 text-white"
                    />
                    <button type="submit" className="bg-white text-brand-secondary rounded-lg px-4 py-2 text-sm font-bold shadow-md hover:bg-slate-100 transition-colors">Go</button>
                  </form>
                </div>
              )}

              {filteredDrops.map((drop) => (
                <ProductCard key={drop.id} product={drop} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default BentoGrid;
