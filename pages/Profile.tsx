import React, { useState } from 'react';
import { User, History, Store, Heart, QrCode, Trash2, Save, ShoppingBag, Crown, Zap, Wallet, Sparkles, Clock, Check } from 'lucide-react';

const Profile: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'details' | 'history' | 'merchants' | 'saved' | 'qr' | 'delete' | 'tier_benefits'>('details');

    const menuItems = [
        { id: 'details', label: 'Account Details', icon: User },
        { id: 'history', label: 'Redemption History', icon: History },
        { id: 'merchants', label: 'Followed Merchants', icon: Store },
        { id: 'saved', label: 'Saved Perks', icon: Heart },
        { id: 'qr', label: 'QR Scanner', icon: QrCode },
        { id: 'delete', label: 'Delete My Account', icon: Trash2 },
    ];

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        displayName: '',
        email: '',
        contactNumber: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 lg:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar */}
                    <div className="w-full lg:w-1/4 space-y-6">
                        <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-100">
                            <nav className="space-y-2">
                                {menuItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = activeTab === item.id;

                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveTab(item.id as any)}
                                            className={`w-full flex items-center justify-between p-4 rounded-xl transition-all font-semibold text-sm ${isActive
                                                ? 'bg-[#0F172A] text-white shadow-lg shadow-slate-900/20'
                                                : 'text-slate-500 hover:bg-slate-50 hover:text-brand-secondary'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Icon size={18} />
                                                <span>{item.label}</span>
                                            </div>
                                            {isActive && <div className="w-1.5 h-1.5 bg-[#00D1B2] rounded-full"></div>}
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>

                        {/* Status Card */}
                        <div className="bg-gradient-to-br from-[#1e40af] to-[#3843D0] rounded-3xl p-6 text-white shadow-xl shadow-blue-900/20 relative overflow-hidden ring-4 ring-[#00D1B2]/20">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2"></div>

                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xs font-bold text-blue-200 uppercase tracking-wider">Status</h3>
                                <Crown size={20} className="text-[#FFD700]" strokeWidth={2.5} />
                            </div>

                            <h2 className="text-2xl font-bold italic mb-6">Perks Master</h2>

                            <div className="relative h-2.5 bg-blue-900/40 rounded-full overflow-hidden mb-3">
                                <div className="absolute top-0 left-0 h-full w-[75%] bg-[#00D1B2] rounded-full"></div>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-[10px] font-bold tracking-wide uppercase text-blue-100">73% to Perks Legend</p>
                                <button
                                    onClick={() => setActiveTab('tier_benefits')}
                                    className="px-3 py-1.5 bg-[#00D1B2] hover:bg-[#00b89d] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1"
                                >
                                    Details
                                    <span className="text-[10px]">›</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="w-full lg:w-3/4">
                        <div className={`bg-white rounded-[2rem] shadow-sm border border-slate-100 min-h-[600px] relative transition-all ${activeTab === 'tier_benefits' ? 'p-4 lg:p-6' : 'p-8 lg:p-12'}`}>

                            {/* Content Renders Here */}
                            {activeTab === 'details' && (
                                <div className="animate-float-in">
                                    <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
                                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00D1B2] to-[#3843D0] flex items-center justify-center text-white text-3xl font-bold italic shadow-lg shadow-blue-500/30">
                                            AC
                                        </div>
                                        <div className="text-center md:text-left">
                                            <h1 className="text-3xl font-bold text-slate-900">Account Details</h1>
                                            <div className="flex items-center gap-2 justify-center md:justify-start mt-1">
                                                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">MEMBERSHIP NO</span>
                                                <span className="text-sm font-semibold text-slate-500 tracking-wide">M633 5906 0833 5461</span>
                                            </div>
                                        </div>
                                    </div>

                                    <form className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">First Name</label>
                                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full h-14 bg-slate-50 rounded-2xl px-6 font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 transition-all border border-transparent focus:bg-white" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Last Name</label>
                                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full h-14 bg-slate-50 rounded-2xl px-6 font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 transition-all border border-transparent focus:bg-white" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Display Name</label>
                                            <input type="text" name="displayName" value={formData.displayName} onChange={handleChange} className="w-full h-14 bg-slate-50 rounded-2xl px-6 font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 transition-all border border-transparent focus:bg-white" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full h-14 bg-slate-50 rounded-2xl px-6 font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 transition-all border border-transparent focus:bg-white" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Contact Number</label>
                                            <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Enter your mobile number" className="w-full h-14 bg-slate-50 rounded-2xl px-6 font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-secondary/20 transition-all border border-transparent focus:bg-white placeholder:text-slate-400 placeholder:font-normal" />
                                        </div>

                                        <div className="pt-4">
                                            <button type="button" className="h-14 bg-[#3843D0] hover:bg-blue-700 text-white px-8 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-blue-900/20 transition-all active:scale-95">
                                                <Save size={20} />
                                                Save Changes
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}

                            {/* Placeholder States */}
                            {(activeTab === 'history' || activeTab === 'merchants' || activeTab === 'saved' || activeTab === 'qr') && (
                                <div className="h-full flex flex-col items-center justify-center text-center animate-float-in min-h-[400px]">
                                    <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center mb-6 text-slate-300">
                                        {activeTab === 'history' && <ShoppingBag size={48} strokeWidth={1.5} />}
                                        {activeTab === 'merchants' && <Store size={48} strokeWidth={1.5} />}
                                        {activeTab === 'saved' && <Heart size={48} strokeWidth={1.5} />}
                                        {activeTab === 'qr' && <QrCode size={48} strokeWidth={1.5} />}
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                                        {activeTab === 'history' && 'Redemption History'}
                                        {activeTab === 'merchants' && 'Followed Merchants'}
                                        {activeTab === 'saved' && 'Saved Perks'}
                                        {activeTab === 'qr' && 'Scan & Redeem'}
                                    </h2>

                                    {activeTab === 'history' ? (
                                        <>
                                            <p className="text-slate-500 max-w-sm mb-8">You haven't redeemed any perks yet. Start exploring the feed to find great deals!</p>
                                            <button className="bg-[#0F172A] text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors">Go to Feed</button>
                                        </>
                                    ) : (
                                        <>
                                            <h3 className="text-lg font-bold text-slate-900 mb-1">Coming Soon</h3>
                                            <p className="text-slate-500">This module is currently under development.</p>
                                        </>
                                    )}
                                </div>
                            )}

                            {/* Delete Account */}
                            {activeTab === 'delete' && (
                                <div className="animate-float-in">
                                    <div className="flex items-center gap-3 text-red-500 mb-8">
                                        <div className="p-2 bg-red-50 rounded-full border border-red-100">
                                            <Trash2 size={24} />
                                        </div>
                                        <h2 className="text-2xl font-bold">Danger Zone</h2>
                                    </div>

                                    <div className="bg-red-50 rounded-3xl p-8 border border-red-100 mb-8">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">Are you absolutely sure?</h3>
                                        <p className="text-red-800/80 leading-relaxed">
                                            Deleting your account will result in the immediate loss of all saved perks, membership level, and earned points. This action is irreversible.
                                        </p>
                                    </div>

                                    <button className="bg-[#DC2626] hover:bg-[#B91C1C] text-white h-14 px-8 rounded-xl font-bold shadow-lg shadow-red-500/20 transition-all active:scale-95">
                                        Request Account Deletion
                                    </button>
                                </div>
                            )}

                            {/* Tier Benefits Dashboard - High Fidelity Redesign */}
                            {activeTab === 'tier_benefits' && (
                                <div className="animate-float-in space-y-8">
                                    {/* Main Badge Card */}
                                    <div className="w-full bg-gradient-to-br from-[#FFF6E5] via-[#FFFBF2] to-[#FFF0D4] rounded-[2rem] p-6 lg:p-10 relative overflow-hidden shadow-sm border border-orange-50/50">
                                        <div className="flex flex-col lg:flex-row gap-8 items-center relative z-10">
                                            {/* Left Column: User & Progress */}
                                            <div className="flex-1 space-y-10 w-full">
                                                <div className="flex items-center gap-6">
                                                    <div className="relative">
                                                        <div className="w-24 h-24 rounded-full bg-slate-200 border-[6px] border-white shadow-xl overflow-hidden relative z-10">
                                                            <img
                                                                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                                                                alt="Profile"
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <div className="absolute -bottom-2 -right-2 z-20 bg-[#0F172A] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg tracking-wider transform rotate-2">
                                                            MASTER
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h2 className="text-4xl font-black text-[#0F172A] tracking-tight mb-1">ASTRAL</h2>
                                                        <p className="text-sm font-bold text-[#3843D0] tracking-wide">Status: PERKS MASTER</p>
                                                    </div>
                                                </div>

                                                <div className="space-y-2 px-2">
                                                    <div className="relative flex items-center justify-between">
                                                        {/* Base Line */}
                                                        <div className="absolute w-full h-2 bg-slate-200/60 rounded-full top-1/2 -translate-y-1/2 -z-10"></div>

                                                        {/* Active Line (75% width for Master) */}
                                                        <div className="absolute w-[50%] h-2 bg-[#3843D0] rounded-full top-1/2 -translate-y-1/2 -z-0"></div>

                                                        {['Rookie', 'Elite', 'Master', 'Legend', 'VIP'].map((tier, idx) => {
                                                            const isActive = idx <= 2;
                                                            const isCurrent = idx === 2; // Master

                                                            return (
                                                                <div key={tier} className="relative flex flex-col items-center group cursor-pointer">
                                                                    <div className={`
                                                                        w-5 h-5 rounded-full z-10 flex items-center justify-center transition-all duration-300
                                                                        ${isActive ? 'bg-[#3843D0] ring-4 ring-[#E0E7FF]' : 'bg-slate-100 ring-4 ring-white border border-slate-200'}
                                                                        ${isCurrent ? 'scale-125 shadow-lg shadow-blue-500/30' : ''}
                                                                    `}>
                                                                        {isActive && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                                                                    </div>
                                                                    <span className={`
                                                                        absolute -bottom-8 text-[11px] font-bold tracking-wide uppercase transition-colors duration-300
                                                                        ${isActive ? 'text-[#3843D0]' : 'text-slate-400'}
                                                                        ${isCurrent ? 'scale-110' : ''}
                                                                    `}>{tier}</span>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right Column: CTA Card */}
                                            <div className="w-full lg:w-[380px] xl:w-[420px] bg-white/70 backdrop-blur-xl rounded-[2rem] p-6 lg:p-8 border border-white/50 shadow-xl shadow-orange-900/5 relative overflow-hidden group hover:shadow-2xl hover:shadow-orange-900/10 transition-all duration-500">
                                                <div className="absolute top-0 right-0 p-8">
                                                    <div className="text-right">
                                                        <div className="flex items-center justify-end gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                                                            VALIDITY <span className="w-3.5 h-3.5 rounded-full border border-slate-300 flex items-center justify-center text-[8px] cursor-help hover:border-slate-400 text-slate-400">i</span>
                                                        </div>
                                                        <p className="text-sm font-bold text-[#0F172A] uppercase tracking-wide">Unlimited</p>
                                                    </div>
                                                </div>

                                                <div className="mt-8 mb-8">
                                                    <h3 className="text-5xl font-black text-slate-200 italic mb-4 transition-transform duration-500 group-hover:scale-105 origin-left">T3</h3>
                                                    <p className="text-base font-medium text-slate-600 leading-relaxed max-w-[90%]">
                                                        Upgrade to <span className="font-bold text-[#3843D0]">Perks Legend</span> by completing <span className="text-[#0F172A] font-bold">2 more</span> brand challenges this month.
                                                    </p>
                                                </div>

                                                <button className="w-full bg-[#0F172A] hover:bg-[#1E293B] text-white h-14 rounded-2xl font-bold shadow-lg shadow-slate-900/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group-hover:bg-[#000]">
                                                    View Tier Benefits
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2 bg-blue-50 rounded-lg text-[#3843D0]">
                                                    <Sparkles size={18} />
                                                </div>
                                                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">Points Balance</span>
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-black text-slate-900">450</h3>
                                                <p className="text-[10px] font-bold text-slate-400 mt-1">≈ ₱225.00 savings</p>
                                            </div>
                                        </div>

                                        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-500">
                                                    <Zap size={18} />
                                                </div>
                                                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">XP Streak</span>
                                            </div>
                                            <div>
                                                <div className="flex items-baseline gap-1">
                                                    <h3 className="text-3xl font-black text-slate-900">1450</h3>
                                                    <span className="text-sm font-bold text-slate-300">/ 2000</span>
                                                </div>
                                                <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                                                    <div className="h-full bg-emerald-500 w-[72%] rounded-full"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2 bg-amber-50 rounded-lg text-amber-500">
                                                    <Wallet size={18} />
                                                </div>
                                                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">Lifetime Savings</span>
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-black text-slate-900">₱0</h3>
                                                <p className="text-[10px] font-bold text-slate-400 mt-1">Across 24 claimed perks</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Coming Soon Area */}
                                    <div className="pt-12 pb-8 flex flex-col items-center justify-center text-center opacity-70">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                                            <Clock size={24} className="text-slate-300" />
                                        </div>
                                        <h3 className="text-lg font-black text-slate-900">Exclusive Tier Perks Coming Soon</h3>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Unlocking in Q3 2025</p>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
