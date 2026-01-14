
import React, { useState } from 'react';
import { Search, Bell, Menu, Zap, X, LogOut, Settings, User as UserIcon } from 'lucide-react';
import { useGlobal } from '../context/GlobalContext';
import { Link, useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const { searchQuery, setSearchQuery, isAuthenticated, logout } = useGlobal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'notifications' | 'account' | null>(null);

  const toggleDropdown = (type: 'notifications' | 'account') => {
    if (activeDropdown === type) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(type);
    }
  };

  // Mock Notifications
  const notifications = [
    { id: 1, text: "New perk added in Tech!", time: "2m ago", unread: true },
    { id: 2, text: "Your 'Winter in Korea' deals expires soon.", time: "1h ago", unread: false },
    { id: 3, text: "Welcome to Perksmania Level 3!", time: "1d ago", unread: false },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-brand-primary border-b border-white/10 shadow-sm"></div>

        <div className="relative container mx-auto px-3 mob-s:px-4 mob-l:px-6 lg:px-8 h-16 mob-s:h-20 flex items-center justify-between">

          {/* Logo Section */}
          <div
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img src="/assets/images/script blue 02.png" alt="Perksmania Logo" className="h-8 mob-s:h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Desktop Search - The "Pill" */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8 relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-300 group-focus-within:text-brand-accent transition-colors" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for perks, deals, or rewards..."
              className="w-full h-12 pl-12 pr-4 rounded-full bg-white/10 border-2 border-transparent focus:border-brand-accent/50 focus:bg-white/20 focus:outline-none focus:shadow-[0_0_0_4px_rgba(90,230,202,0.1)] transition-all font-medium text-white placeholder:text-slate-400"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 mob-s:gap-3 mob-m:gap-4 sm:gap-6">

            {/* Gamification Badge - Only show if authenticated */}
            {isAuthenticated ? (
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/10 cursor-pointer hover:bg-white/20 transition-all">
                <div className="p-1 bg-amber-500 rounded-full text-white">
                  <Zap size={12} fill="currentColor" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">Level 3</span>
                  <span className="text-xs font-bold text-white">Perk Pro</span>
                </div>
              </div>
            ) : null}

            {isAuthenticated ? (
              <>
                {/* Notifications */}
                <div className="relative">
                  <button
                    className={`relative p-2 rounded-full hover:bg-white/10 transition-colors ${activeDropdown === 'notifications' ? 'bg-white/10 text-brand-accent' : 'text-slate-300 hover:text-white'}`}
                    onClick={() => toggleDropdown('notifications')}
                  >
                    <Bell size={22} />
                    <span className="absolute top-1.5 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
                  </button>

                  {/* Notification Dropdown */}
                  {activeDropdown === 'notifications' && (
                    <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-float-in">
                      <div className="p-4 border-b border-slate-50 flex justify-between items-center">
                        <h3 className="font-bold text-slate-800">Notifications</h3>
                        <span className="text-xs font-bold text-brand-secondary cursor-pointer">Mark all read</span>
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        {notifications.map(note => (
                          <div key={note.id} className={`p-4 hover:bg-slate-50 border-b border-slate-50 last:border-0 cursor-pointer ${note.unread ? 'bg-blue-50/30' : ''}`}>
                            <p className="text-sm text-slate-700 font-medium mb-1">{note.text}</p>
                            <span className="text-xs text-slate-400">{note.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Account */}
                <div className="relative">
                  <button
                    className={`flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-white/10 transition-all border border-transparent hover:border-white/10 ${activeDropdown === 'account' ? 'bg-white/10' : ''}`}
                    onClick={() => toggleDropdown('account')}
                  >
                    <div className="w-9 h-9 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-full flex items-center justify-center text-white font-bold shadow-md">
                      JD
                    </div>
                    <span className="hidden lg:block text-sm font-semibold text-white">Account</span>
                  </button>

                  {/* Account Dropdown */}
                  {activeDropdown === 'account' && (
                    <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-float-in p-2">
                      <div className="p-2">
                        <Link to="/profile" className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 text-slate-600 font-medium transition-colors text-sm text-left">
                          <UserIcon size={16} /> Profile
                        </Link>
                        <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 text-slate-600 font-medium transition-colors text-sm text-left">
                          <Settings size={16} /> Settings
                        </button>
                        <div className="h-px bg-slate-100 my-1"></div>
                        <button
                          onClick={logout}
                          className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-red-50 text-red-600 font-medium transition-colors text-sm text-left"
                        >
                          <LogOut size={16} /> Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="hidden md:block px-4 py-2 text-white font-semibold hover:text-brand-accent transition-colors">
                  Sign In
                </Link>
                <Link to="/register" className="px-5 py-2 bg-brand-accent text-brand-primary font-bold rounded-full hover:bg-white transition-colors shadow-lg shadow-brand-accent/20">
                  Join Now
                </Link>
              </div>
            )}

            <button
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-full"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-brand-primary transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 flex justify-between items-center border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="/assets/images/script_teal.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-xl text-white">Menu</span>
          </div>
          <button onClick={() => setIsMenuOpen(false)} className="p-2 text-white hover:bg-white/10 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="p-6 flex flex-col gap-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-white/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full pl-10 h-12 rounded-xl bg-white/10 text-base text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 transition-all border border-white/5"
            />
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold text-brand-accent uppercase tracking-wider">Navigation</h4>
            <a href="#" className="block text-lg font-bold text-white hover:text-brand-accent transition-colors">Home</a>
            <a href="#" className="block text-lg font-bold text-white hover:text-brand-accent transition-colors">Popular Perks</a>
            <a href="#" className="block text-lg font-bold text-white hover:text-brand-accent transition-colors">Categories</a>
            <a href="#" className="block text-lg font-bold text-white hover:text-brand-accent transition-colors">Saved Items</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
