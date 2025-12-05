
import React, { useState } from 'react';
import { Search, Bell, Menu, Zap, X, LogOut, Settings, User as UserIcon } from 'lucide-react';
import { useGlobal } from '../context/GlobalContext';

const Navigation: React.FC = () => {
  const { searchQuery, setSearchQuery } = useGlobal();
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
    { id: 2, text: "Your 'Winter in Korea' deal expires soon.", time: "1h ago", unread: false },
    { id: 3, text: "Welcome to Perksmania Level 3!", time: "1d ago", unread: false },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm"></div>
        
        <div className="relative container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center shadow-lg shadow-brand-blue/30 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-extrabold text-xl italic">P</span>
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-teal tracking-tight">
              Perksmania
            </span>
          </div>

          {/* Desktop Search - The "Pill" */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8 relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-brand-blue transition-colors" />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for vibes, brands, or deals..." 
              className="w-full h-12 pl-12 pr-4 rounded-full bg-slate-100/50 border-2 border-transparent focus:border-brand-blue/30 focus:bg-white focus:outline-none focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] transition-all font-medium text-slate-700 placeholder:text-slate-400"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-6">
            
            {/* Gamification Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full border border-amber-200 cursor-pointer hover:shadow-md transition-shadow">
              <div className="p-1 bg-amber-500 rounded-full text-white">
                <Zap size={12} fill="currentColor" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] uppercase font-bold text-amber-600 tracking-wider">Level 3</span>
                <span className="text-xs font-bold text-amber-900">Perk Pro</span>
              </div>
            </div>

            {/* Notifications */}
            <div className="relative">
              <button 
                className={`relative p-2 rounded-full hover:bg-slate-100 transition-colors ${activeDropdown === 'notifications' ? 'bg-slate-100 text-brand-blue' : 'text-slate-600'}`}
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
                    <span className="text-xs font-bold text-brand-blue cursor-pointer">Mark all read</span>
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
                className={`flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200 ${activeDropdown === 'account' ? 'bg-slate-100' : ''}`}
                onClick={() => toggleDropdown('account')}
              >
                <div className="w-9 h-9 bg-gradient-to-br from-brand-blue to-brand-teal rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  JD
                </div>
                <span className="hidden lg:block text-sm font-semibold text-slate-700">Account</span>
              </button>

               {/* Account Dropdown */}
               {activeDropdown === 'account' && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-float-in p-2">
                  <div className="p-2">
                    <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 text-slate-600 font-medium transition-colors text-sm text-left">
                      <UserIcon size={16} /> Profile
                    </button>
                    <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 text-slate-600 font-medium transition-colors text-sm text-left">
                      <Settings size={16} /> Settings
                    </button>
                    <div className="h-px bg-slate-100 my-1"></div>
                    <button className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-red-50 text-red-600 font-medium transition-colors text-sm text-left">
                      <LogOut size={16} /> Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white">
          <div className="p-4 flex justify-between items-center border-b border-slate-100">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-extrabold italic">P</span>
                </div>
                <span className="font-bold text-xl">Menu</span>
             </div>
             <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-500 hover:bg-slate-100 rounded-full">
               <X size={24} />
             </button>
          </div>
          <div className="p-6 flex flex-col gap-6">
             <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..." 
                  className="w-full pl-10 h-12 rounded-xl bg-slate-100 text-base focus:outline-none"
                />
             </div>
             
             <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Navigation</h4>
                <a href="#" className="block text-lg font-bold text-slate-800">Home</a>
                <a href="#" className="block text-lg font-bold text-slate-800">Popular Perks</a>
                <a href="#" className="block text-lg font-bold text-slate-800">Categories</a>
                <a href="#" className="block text-lg font-bold text-slate-800">Saved Items</a>
             </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
