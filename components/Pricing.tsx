import React, { useState } from 'react';
import { Check, Star } from './ui/Icons';
import { Reveal } from './ui/Reveal';

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-32 bg-background border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
           <Reveal>
            <div className="inline-flex items-center gap-2 mb-6 border border-white/10 rounded-full px-4 py-1.5 bg-white/5">
                <Star size={14} className="text-white" />
                <span className="text-xs uppercase tracking-wider font-bold text-white">Our Pricing</span>
            </div>
           </Reveal>
           <Reveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Flexible Pricing Plans</h2>
           </Reveal>
           <Reveal delay={200}>
            <p className="text-secondary mb-10 text-lg">Choose a plan that fits your needs. No hidden fees.</p>
           </Reveal>
           
           {/* Toggle */}
           <Reveal delay={300}>
            <div className="flex items-center justify-center gap-4 bg-surfaceHighlight w-fit mx-auto p-2 rounded-full border border-white/5">
                <span className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${!isAnnual ? 'text-white bg-zinc-800 shadow-sm' : 'text-gray-500 cursor-pointer'}`} onClick={() => setIsAnnual(false)}>Monthly</span>
                <span className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${isAnnual ? 'text-white bg-zinc-800 shadow-sm' : 'text-gray-500 cursor-pointer'}`} onClick={() => setIsAnnual(true)}>Yearly <span className="text-indigo-400 text-[10px] ml-1">-20%</span></span>
            </div>
           </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Reveal delay={400} className="h-full">
                <div className="h-full bg-surface border border-white/10 rounded-[2rem] p-10 flex flex-col hover:border-white/20 transition-all duration-300">
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-white">Free Plan</h3>
                        <div className="mt-4 flex items-baseline">
                            <span className="text-5xl font-bold text-white">$0</span>
                            <span className="text-secondary ml-2 text-sm font-medium">/per month</span>
                        </div>
                        <p className="text-sm text-secondary mt-4 leading-relaxed">Great for getting started and experiencing the basics of Appit.</p>
                    </div>
                    <button className="w-full bg-surfaceHighlight border border-white/10 text-white font-bold py-4 rounded-xl mb-10 hover:bg-white hover:text-black hover:border-transparent transition-all duration-300">
                        Get Started
                    </button>
                    <div className="space-y-4 flex-1">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">What's Included</p>
                        {['Create and customize profile', 'Connect with other users', 'Send and receive messages', 'Access to basic features'].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                <div className="bg-zinc-800 p-1 rounded-full mt-0.5">
                                    <Check size={10} className="text-white" />
                                </div>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>

            {/* Premium Plan */}
            <Reveal delay={500} className="h-full relative">
                {/* Glow effect for premium */}
                <div className="absolute -inset-[1px] bg-gradient-to-b from-indigo-500 to-purple-600 rounded-[2rem] opacity-50 blur-sm"></div>
                
                <div className="h-full bg-zinc-900 border border-transparent rounded-[2rem] p-10 flex flex-col relative overflow-hidden z-10 shadow-2xl">
                    <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold px-4 py-2 rounded-bl-2xl shadow-lg">
                        MOST POPULAR
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-white">Premium Plan</h3>
                        <div className="mt-4 flex items-baseline">
                            <span className="text-5xl font-bold text-white">${isAnnual ? '8' : '10'}</span>
                            <span className="text-secondary ml-2 text-sm font-medium">/per month</span>
                        </div>
                        <p className="text-sm text-secondary mt-4 leading-relaxed">Unlock the full potential with advanced tools and features.</p>
                    </div>
                    <button className="w-full bg-white text-black font-bold py-4 rounded-xl mb-10 hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        Get Started
                    </button>
                    <div className="space-y-4 flex-1">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">What's Included</p>
                        {['Everything in Free', 'View and share content', 'Receive notifications and updates', 'Priority support', 'Ad-free experience', 'Verification badge'].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 text-sm text-white">
                                <div className="bg-indigo-600 p-1 rounded-full mt-0.5">
                                    <Check size={10} className="text-white" />
                                </div>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>
        </div>
      </div>
    </section>
  );
};