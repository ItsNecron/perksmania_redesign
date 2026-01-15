
import React from 'react';
import { Product } from '../types';
import { Heart, Star, Tag, Check } from 'lucide-react';
import { useGlobal } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const { likedProducts, toggleLike, claimedProducts, claimProduct, isAuthenticated, showToast } = useGlobal();
  const navigate = useNavigate();
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const isLiked = likedProducts.has(product.id);
  const isClaimed = claimedProducts.has(product.id);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isAuthenticated) {
      showToast('Please sign in to save perks', 'info');
      navigate('/login');
      return;
    }
    toggleLike(product.id);
  };

  const handleClaim = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isAuthenticated) {
      showToast('Please sign in to claim perks', 'info');
      navigate('/login');
      return;
    }
    claimProduct(product.id);
  };

  return (
    <div className={`group relative bg-brand-primary rounded-3xl overflow-hidden border border-white/5 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(22,0,109,0.3)] hover:border-brand-accent/30 hover:-translate-y-2 flex ${featured ? 'flex-col md:flex-row h-auto md:h-full' : 'flex-col h-full'}`}>

      {/* Image Section */}
      <div className={`relative overflow-hidden shrink-0 ${featured ? 'w-full h-48 md:w-1/2 md:h-full' : 'w-full aspect-[4/3]'}`}>
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
            <div className="px-3 py-1 bg-white text-brand-primary text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-white/10 flex items-center gap-1">
              🔥 Trending
            </div>
          )}
          {product.isNew && (
            <div className="px-3 py-1 bg-brand-secondary text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-brand-secondary/20 border border-white/10">
              New
            </div>
          )}
        </div>

        {/* Save Badge */}
        <div className="absolute bottom-4 right-4 bg-brand-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-lg border border-white/10 flex items-center gap-1.5 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Tag size={14} className="text-brand-accent" />
          <span className="text-sm font-bold text-white">Save {discount}%</span>
        </div>

        {/* Like Button */}
        <button
          onClick={handleLike}
          className={`absolute top-4 right-4 p-2.5 backdrop-blur-md rounded-full transition-all shadow-sm ${isLiked ? 'bg-white text-red-500' : 'bg-black/30 text-white hover:bg-white hover:text-red-500 border border-white/10'}`}
        >
          <Heart size={18} fill={isLiked ? "currentColor" : "none"} className={isLiked ? "text-red-500" : "text-white"} />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow relative">
        {/* Subtle Background Gradient for Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>

        <div className="flex items-center gap-2 mb-2 relative z-10">
          <span className="text-xs font-bold text-brand-accent uppercase tracking-wide">{product.category}</span>
          <span className="text-white/20 text-[10px]">•</span>
          <span className="text-xs font-medium text-blue-200 truncate group-hover:text-white transition-colors">{product.merchant}</span>
        </div>

        <h3 className={`font-bold text-white mb-2 leading-tight group-hover:text-brand-accent transition-colors relative z-10 ${featured ? 'text-xl md:text-2xl line-clamp-2' : 'text-lg line-clamp-2'}`}>
          {product.title}
        </h3>

        <div className="flex items-center gap-1 mb-4 relative z-10">
          <Star size={14} className="text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-semibold text-white">{product.rating}</span>
          <span className="text-xs text-white/40">({product.reviews})</span>
        </div>

        <div className="mt-auto flex items-end justify-between relative z-10">
          <div className="flex flex-col">
            <span className="text-xs text-blue-300/60 line-through">₱{product.originalPrice.toLocaleString()}</span>
            <span className="text-xl font-extrabold text-white">₱{product.price.toLocaleString()}</span>
          </div>
          <button
            onClick={handleClaim}
            disabled={isClaimed}
            className={`
              px-4 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2
              ${isClaimed
                ? 'bg-brand-accent/10 text-brand-accent cursor-default border border-brand-accent/20'
                : 'bg-white text-brand-primary hover:bg-brand-accent hover:text-brand-primary hover:shadow-[0_0_15px_rgba(90,230,202,0.4)]'}
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
