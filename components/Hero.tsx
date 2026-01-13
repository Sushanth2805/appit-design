import React from 'react';
import { Apple, Play, ArrowRight, Users, MessageCircle, Heart, Share2, Search, Bell } from './ui/Icons';
import { PhoneFrame } from './ui/PhoneFrame';
import { Reveal } from './ui/Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Gradients - Static for performance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[600px] bg-gradient-to-b from-indigo-900/30 via-purple-900/10 to-transparent blur-[120px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <Reveal>
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full pl-2 pr-4 py-1.5 mb-8 hover:bg-white/10 transition-colors cursor-default backdrop-blur-md">
            <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                <div key={i} className="w-7 h-7 rounded-full border-2 border-background overflow-hidden">
                     <img 
                        src={`https://picsum.photos/40/40?random=${i}`} 
                        alt="User" 
                        className="w-full h-full object-cover"
                    />
                </div>
                ))}
            </div>
            <span className="text-sm text-gray-300 font-medium">Join 3 million+ users</span>
            </div>
        </Reveal>

        {/* Headline */}
        <Reveal delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            Connect, Share, <br className="hidden md:block"/>
            and <span className="shimmer-text">Grow Together</span>
            </h1>
        </Reveal>

        <Reveal delay={200}>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-secondary mb-12 leading-relaxed">
            Join Appit to build authentic connections and share your passions effortlessly. 
            Experience the next generation of social networking.
            </p>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
            <button className="group relative flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                <span>Download App</span>
                <div className="bg-black/10 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={16} />
                </div>
            </button>
            
            <div className="flex items-center gap-4 text-sm font-medium text-gray-400">
                <span className="opacity-70">Available on</span>
                <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-surfaceHighlight flex items-center justify-center border border-white/10 hover:bg-white hover:text-black hover:border-transparent transition-all duration-300">
                        <Apple size={20} className="fill-current mb-0.5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-surfaceHighlight flex items-center justify-center border border-white/10 hover:bg-white hover:text-black hover:border-transparent transition-all duration-300">
                        <Play size={18} className="fill-current ml-0.5" />
                    </a>
                </div>
            </div>
            </div>
        </Reveal>

        {/* Phones Display */}
        <div className="relative h-[400px] md:h-[650px] w-full max-w-5xl mx-auto perspective-[2000px]">
            {/* Center Phone (Main) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20 w-[280px] md:w-[340px] h-[580px] md:h-[680px]">
                <PhoneFrame glow>
                    <div className="flex flex-col h-full bg-zinc-950 p-4 pt-12 relative">
                         {/* Header */}
                        <div className="flex justify-between items-center mb-6 px-1">
                            <span className="text-white font-bold text-xl tracking-tight">Appit</span>
                            <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center">
                                 <Bell size={18} className="text-white" />
                            </div>
                        </div>
                        
                        {/* Feed */}
                        <div className="space-y-5 overflow-hidden">
                            {/* Post 1 */}
                            <div className="bg-zinc-900/50 rounded-3xl p-3 border border-white/5 backdrop-blur-sm">
                                <div className="flex items-center gap-3 mb-3 px-1">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-orange-500 p-[2px]">
                                        <img src="https://picsum.photos/100/100?random=20" className="w-full h-full rounded-full border border-black" />
                                    </div>
                                    <div className="text-xs">
                                        <div className="font-bold text-white">Sarah Connor</div>
                                        <div className="text-gray-500">2h ago</div>
                                    </div>
                                </div>
                                <div className="aspect-[4/5] rounded-2xl bg-zinc-800 relative overflow-hidden group">
                                    <img src="https://picsum.photos/400/500?random=10" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    
                                    {/* Interaction overlay */}
                                    <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-center">
                                        <div className="flex gap-4">
                                            <div className="flex flex-col items-center gap-1">
                                                <Heart size={20} className="text-white" />
                                                <span className="text-[10px] font-bold">2.4k</span>
                                            </div>
                                            <div className="flex flex-col items-center gap-1">
                                                <MessageCircle size={20} className="text-white" />
                                                <span className="text-[10px] font-bold">84</span>
                                            </div>
                                        </div>
                                        <Share2 size={20} className="text-white"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Action Button */}
                        <div className="absolute bottom-8 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform cursor-pointer">
                            <ArrowRight size={24} className="text-black" />
                        </div>
                    </div>
                </PhoneFrame>
            </div>

            {/* Left Phone */}
            <div className="absolute left-[-20px] md:left-[50px] top-12 md:top-24 z-10 w-[240px] md:w-[280px] h-[500px] md:h-[550px] hidden sm:block transform -rotate-12 scale-90 origin-bottom-right opacity-80 hover:opacity-100 hover:z-30 hover:scale-95 transition-all duration-500">
                <PhoneFrame>
                    <div className="flex flex-col h-full bg-zinc-900/80 backdrop-blur-sm p-4 pt-10">
                         <div className="flex items-center gap-3 mb-8">
                             <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                             <div className="h-3 w-24 bg-gray-700 rounded"></div>
                         </div>
                         <div className="space-y-4">
                             {[1,2,3,4,5].map(i => (
                                 <div key={i} className="flex gap-3 items-center">
                                     <div className="w-10 h-10 rounded-full bg-gray-800 flex-shrink-0"></div>
                                     <div className="flex-1 space-y-2">
                                         <div className="h-2 w-full bg-gray-800 rounded"></div>
                                         <div className="h-2 w-2/3 bg-gray-800 rounded"></div>
                                     </div>
                                 </div>
                             ))}
                         </div>
                    </div>
                </PhoneFrame>
            </div>

            {/* Right Phone */}
            <div className="absolute right-[-20px] md:right-[50px] top-12 md:top-24 z-10 w-[240px] md:w-[280px] h-[500px] md:h-[550px] hidden sm:block transform rotate-12 scale-90 origin-bottom-left opacity-80 hover:opacity-100 hover:z-30 hover:scale-95 transition-all duration-500">
                <PhoneFrame>
                    <div className="flex flex-col h-full bg-zinc-900/80 backdrop-blur-sm p-4 pt-10">
                        <div className="bg-zinc-800 rounded-full px-4 py-3 flex items-center gap-2 mb-8">
                            <Search size={16} className="text-gray-500" />
                            <span className="text-gray-500 text-xs">Search users...</span>
                        </div>
                        <div className="space-y-5">
                            {[1,2,3,4].map(i => (
                                <div key={i} className="flex items-center justify-between group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                         <div className="w-10 h-10 rounded-full bg-indigo-900/50 flex items-center justify-center text-xs font-bold text-indigo-200 border border-indigo-500/30">
                                            {String.fromCharCode(64+i)}
                                         </div>
                                         <div className="flex flex-col">
                                            <div className="w-20 h-2 bg-zinc-700 rounded mb-1.5 group-hover:bg-zinc-600 transition-colors"></div>
                                            <div className="w-12 h-1.5 bg-zinc-800 rounded"></div>
                                         </div>
                                    </div>
                                    <div className="w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors">
                                        <div className="w-2 h-2 bg-black rounded-full opacity-0 group-hover:opacity-100"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </PhoneFrame>
            </div>
        </div>
      </div>
      
      {/* Logos Strip */}
      <Reveal delay={600}>
        <div className="mt-20 border-t border-white/5 pt-10 pb-10 max-w-7xl mx-auto overflow-hidden">
            <p className="text-center text-sm text-gray-500 mb-8 font-medium tracking-wide">TRUSTED BY INNOVATIVE TEAMS</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                {['Lumina', 'Vortex', 'Velocity', 'Synergy', 'Enigma', 'Spectrum'].map((name) => (
                    <div key={name} className="flex items-center gap-2 text-xl font-bold text-white cursor-default select-none hover:text-white transition-colors">
                        <div className="w-6 h-6 rounded bg-current opacity-80"></div>
                        {name}
                    </div>
                ))}
            </div>
        </div>
      </Reveal>
    </section>
  );
};