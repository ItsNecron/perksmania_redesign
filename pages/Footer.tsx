import React from 'react';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 rounded-t-[3rem] mt-12 relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-secondary via-brand-accent to-purple-500"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <img src="/assets/images/script blue 02.png" alt="Perksmania" className="h-14 w-auto" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              The ultimate destination for next-gen rewards.
              Find your vibe, save cash, and live better.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Press</li>
              <li className="hover:text-white cursor-pointer transition-colors">Sustainability</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cookie Settings</li>
            </ul>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h4 className="font-bold text-white mb-2">Get the App</h4>
            <p className="text-slate-400 text-xs mb-4">Scan to download and get exclusive mobile-only perks.</p>
            <div className="flex gap-2">
              <div className="flex-1 h-10 bg-black rounded-lg border border-slate-700 flex items-center justify-center text-xs text-slate-300 hover:border-slate-500 cursor-pointer">
                App Store
              </div>
              <div className="flex-1 h-10 bg-black rounded-lg border border-slate-700 flex items-center justify-center text-xs text-slate-300 hover:border-slate-500 cursor-pointer">
                Google Play
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026, <b>Perks Mania</b>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;