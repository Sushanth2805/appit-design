import React from 'react';
import { Apple, Play, Zap, X, Globe } from './ui/Icons';
import { PhoneFrame } from './ui/PhoneFrame';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Section */}
        <div className="relative rounded-3xl bg-surfaceHighlight overflow-hidden p-10 md:p-20 text-center mb-20 border border-white/10">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none"></div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
                Download Appit Social<br />and Connect Today
            </h2>
            <p className="text-secondary max-w-xl mx-auto mb-10 relative z-10">
                Download Appit now to start connecting with like-minded people and enjoy a seamless social experience!
            </p>

            <div className="flex justify-center gap-4 mb-16 relative z-10">
                <button className="bg-white text-black px-6 py-3 rounded-xl flex items-center gap-2 font-bold hover:bg-gray-200 transition-colors">
                    <Play size={20} fill="black" />
                    <div className="text-left">
                        <div className="text-[10px] uppercase leading-none">Get it on</div>
                        <div className="text-sm leading-none">Google Play</div>
                    </div>
                </button>
                 <button className="bg-white text-black px-6 py-3 rounded-xl flex items-center gap-2 font-bold hover:bg-gray-200 transition-colors">
                    <Apple size={24} fill="black" />
                    <div className="text-left">
                        <div className="text-[10px] uppercase leading-none">Download on the</div>
                        <div className="text-sm leading-none">App Store</div>
                    </div>
                </button>
            </div>

            {/* Footer Phones */}
            <div className="flex justify-center gap-4 md:gap-8 opacity-90 relative z-10 -mb-32 md:-mb-40 pointer-events-none">
                <div className="w-[180px] md:w-[240px] h-[400px]">
                    <PhoneFrame className="scale-90 origin-top">
                        <div className="bg-zinc-900 h-full w-full"></div>
                    </PhoneFrame>
                </div>
                 <div className="w-[180px] md:w-[240px] h-[400px] mt-10">
                    <PhoneFrame className="scale-90 origin-top">
                        <div className="bg-zinc-900 h-full w-full"></div>
                    </PhoneFrame>
                </div>
            </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col items-center pt-10 border-t border-white/5">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center">
                    <Zap size={20} fill="black" />
                </div>
                <span className="font-bold text-xl tracking-tight">Appit</span>
            </div>
            
            <p className="text-gray-500 text-sm mb-6">Empower Your Social Connections with Appit Social</p>
            
            <div className="bg-zinc-900 px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300 mb-8">
                hello@appit.com
            </div>

            <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm text-gray-400">
                <a href="#" className="hover:text-white">Benefits</a>
                <a href="#" className="hover:text-white">Features</a>
                <a href="#" className="hover:text-white">Pricing</a>
                <a href="#" className="hover:text-white">Testimonials</a>
                <a href="#" className="hover:text-white">FAQ's</a>
                <a href="#" className="hover:text-white">Waitlist</a>
            </div>

            <div className="flex justify-between w-full text-xs text-gray-600 border-t border-white/5 pt-8">
                <span>Template by Prahal</span>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};