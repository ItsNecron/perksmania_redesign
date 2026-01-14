
import React from 'react';
import { Product } from '../types';
import { Heart, Star, Tag, Check } from 'lucide-react';
import { useGlobal } from '../context/GlobalContext';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const { likedProducts, toggleLike, claimedProducts, claimProduct } = useGlobal();
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const isLiked = likedProducts.has(product.id);
  const isClaimed = claimedProducts.has(product.id);

  return (
    <div className={`group relative bg-white rounded-3xl overflow-hidden border border-slate-100 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 flex flex-col ${featured ? 'md:col-span-2 md:row-span-2 h-full' : 'h-full'}`}>

      {/* Image Section */}
      <div className={`relative overflow-hidden ${featured ? 'h-3/5' : 'aspect-[4/3]'}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {product.isHot && (
            <div className="px-3 py-1 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg flex items-center gap-1">
              🔥 Trending
            </div>
          )}
          {product.isNew && (
            <div className="px-3 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
              New
            </div>
          )}
        </div>

        {/* Save Badge */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Tag size={14} className="text-green-600" />
          <span className="text-sm font-bold text-green-700">Save {discount}%</span>
        </div>

        {/* Like Button */}
        <button
          onClick={(e) => { e.stopPropagation(); toggleLike(product.id); }}
          className={`absolute top-4 right-4 p-2.5 backdrop-blur-md rounded-full transition-all shadow-sm ${isLiked ? 'bg-red-50 text-red-500' : 'bg-white/50 text-white hover:bg-white hover:text-red-500'}`}
        >
          <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-wide">{product.category}</span>
          <span className="text-slate-300 text-[10px]">•</span>
          <span className="text-xs font-medium text-slate-400 truncate">{product.merchant}</span>
        </div>

        <h3 className={`font-bold text-slate-800 mb-2 leading-tight ${featured ? 'text-2xl' : 'text-lg line-clamp-2'}`}>
          {product.title}
        </h3>

        <div className="flex items-center gap-1 mb-4">
          <Star size={14} className="text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-semibold text-slate-700">{product.rating}</span>
          <span className="text-xs text-slate-400">({product.reviews})</span>
        </div>

        <div className="mt-auto flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400 line-through">₱{product.originalPrice.toLocaleString()}</span>
            <span className="text-xl font-extrabold text-brand-secondary">₱{product.price.toLocaleString()}</span>
          </div>
          <button
            onClick={() => claimProduct(product.id)}
            disabled={isClaimed}
            className={`
              px-4 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2
              ${isClaimed
                ? 'bg-green-100 text-green-700 cursor-default'
                : 'bg-slate-100 text-brand-primary hover:bg-brand-secondary hover:text-white group-hover:bg-brand-secondary group-hover:text-white'}
            `}
          >
            {isClaimed ? (
              <>Claimed <Check size={16} /></>
            ) : (
              'Claim'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
