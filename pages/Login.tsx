
import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useGlobal } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const { login } = useGlobal();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
        login(); // Simulate login
        navigate('/'); // Redirect to home
    };

    return (
        <div className="min-h-screen bg-[#14004B] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00D1B2]/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="w-full max-w-md bg-[#F2F0F9] rounded-3xl p-8 relative z-10 shadow-2xl">
                <div className="text-center mb-8">
                    <img
                        src="/assets/images/script blue 02.png"
                        alt="Perksmania"
                        className="h-12 w-auto mx-auto mb-6"
                    />
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
                    <p className="text-slate-500">Enter your details to access your rewards.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-[#00D1B2] transition-colors" />
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full h-12 pl-12 pr-4 bg-[#FFFFFF] border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#00D1B2] focus:bg-white transition-all hover:bg-slate-50"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center ml-1">
                            <label className="text-sm font-semibold text-slate-700">Password</label>
                            <a href="#" className="text-xs font-semibold text-[#00D1B2] hover:text-[#00D1B2]/80 transition-colors">Forgot Password?</a>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-[#00D1B2] transition-colors" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full h-12 pl-12 pr-12 bg-[#FFFFFF] border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#00D1B2] focus:bg-white transition-all hover:bg-slate-50"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full h-12 bg-[#00D1B2] hover:bg-[#00D1B2]/90 text-white font-bold rounded-xl shadow-lg shadow-[#00D1B2]/20 flex items-center justify-center gap-2 transform transition-all active:scale-[0.98]"
                        >
                            Sign In <ArrowRight size={20} />
                        </button>
                    </div>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-slate-500 text-sm">
                        Don't have an account?{' '}
                        <Link to="/register" className="font-bold text-[#00D1B2] hover:text-[#00D1B2]/80 transition-colors">
                            Create one
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
