
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
}

interface GlobalContextType {
  // Filter State
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategory: string | null;
  setActiveCategory: (categoryId: string | null) => void;

  // User Actions
  likedProducts: Set<string>;
  toggleLike: (productId: string) => void;
  claimedProducts: Set<string>;
  claimProduct: (productId: string) => void;

  // Auth State
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;

  // UI Feedback
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());
  const [claimedProducts, setClaimedProducts] = useState<Set<string>>(new Set());
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Auth State
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    showToast('Welcome back! You are now logged in.', 'success');
  };

  const logout = () => {
    setIsAuthenticated(false);
    showToast('You have been logged out.', 'info');
  };

  const toggleLike = (productId: string) => {
    setLikedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
        showToast('Removed from favorites', 'info');
      } else {
        newSet.add(productId);
        showToast('Added to favorites', 'success');
      }
      return newSet;
    });
  };

  const claimProduct = (productId: string) => {
    setClaimedProducts(prev => {
      const newSet = new Set(prev);
      if (!newSet.has(productId)) {
        newSet.add(productId);
        showToast('Perk claimed successfully!', 'success');
      }
      return newSet;
    });
  };

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  return (
    <GlobalContext.Provider value={{
      searchQuery,
      setSearchQuery,
      activeCategory,
      setActiveCategory,
      likedProducts,
      toggleLike,
      claimedProducts,
      claimProduct,
      isAuthenticated,
      login,
      logout,
      toasts,
      showToast
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobal must be used within a GlobalProvider');
  }
  return context;
};
