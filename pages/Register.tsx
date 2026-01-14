
import React, { useState } from 'react';
import { Mail, Lock, Calendar, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        birthday: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const steps = [
        { number: 1, label: "Account", active: true },
        { number: 2, label: "About You", active: false },
        { number: 3, label: "Your Vibe", active: false }
    ];

    return (
        <div className="min-h-screen bg-[#14004B] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00D1B2]/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="w-full max-w-lg bg-[#F2F0F9] rounded-3xl p-8 lg:p-10 relative z-10 shadow-2xl">
                <div className="text-center mb-8">
                    <img xmlns="http://www.w3.org/2000/svg"
                        src="/assets/images/script blue 02.png"
                        alt="Perksmania"
                        className="h-12 w-auto mx-auto mb-6"
                    />
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Create Account</h2>
                    <p className="text-slate-500">Let's get you started with the basics.</p>
                </div>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-[#00D1B2] transition-colors" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full h-12 pl-12 pr-4 bg-[#FFFFFF] border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#00D1B2] focus:bg-white transition-all hover:bg-slate-50"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-[#00D1B2] transition-colors" />
                            </div>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="w-full h-12 pl-12 pr-4 bg-[#FFFFFF] border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#00D1B2] focus:bg-white transition-all hover:bg-slate-50"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1">Birthday</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <Calendar className="h-5 w-5 text-slate-400 group-focus-within:text-[#00D1B2] transition-colors" />
                            </div>
                            <input
                                type="text"
                                name="birthday"
                                value={formData.birthday}
                                onChange={handleChange}
                                placeholder="mm / dd / yyyy"
                                className="w-full h-12 pl-12 pr-4 bg-[#FFFFFF] border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#00D1B2] focus:bg-white transition-all hover:bg-slate-50"
                            />
                        </div>
                    </div>

                    <div className="pt-2">
                        <p className="text-xs text-slate-500 mb-4 text-center">
                            By joining, you agree to our Terms and Privacy Policy.
                        </p>
                        <button className="w-full h-12 bg-[#00D1B2] hover:bg-[#00D1B2]/90 text-white font-bold rounded-xl shadow-lg shadow-[#00D1B2]/20 flex items-center justify-center gap-2 transform transition-all active:scale-[0.98]">
                            Continue <ArrowRight size={20} />
                        </button>
                    </div>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-slate-500 text-sm">
                        Already have an account?{' '}
                        <Link to="/login" className="font-bold text-[#00D1B2] hover:text-[#00D1B2]/80 transition-colors">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
