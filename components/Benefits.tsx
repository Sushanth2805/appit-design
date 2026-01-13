import React from 'react';
import { Users, Globe, Sparkles, Heart, Smartphone } from './ui/Icons';
import { PhoneFrame } from './ui/PhoneFrame';
import { Reveal } from './ui/Reveal';

const BenefitCard = ({ icon: Icon, title, description, delay = 0 }: { icon: any, title: string, description: string, delay?: number }) => (
  <Reveal delay={delay}>
    <div className="h-full bg-surface border border-white/5 rounded-3xl p-8 hover:border-white/10 hover:bg-surfaceHighlight transition-all duration-300 group cursor-default">
        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white text-white group-hover:text-black transition-all duration-300 shadow-inner group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
        <Icon size={26} />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
        <p className="text-secondary leading-relaxed text-sm">{description}</p>
    </div>
  </Reveal>
);

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-6 bg-white/5 backdrop-blur-sm">
                <Sparkles size={14} className="text-indigo-400" />
                <span className="text-xs uppercase tracking-widest font-bold text-white">Why Choose Us</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Discover Appit's Benefits</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-secondary max-w-2xl mx-auto text-lg">
                Unlock a world of meaningful connections, tailored experiences, and seamless social interaction designed for the modern era.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-8 justify-center">
            <BenefitCard 
              icon={Users} 
              title="Authentic Connections" 
              description="Build genuine relationships with like-minded individuals who share your passions and values."
              delay={300}
            />
             <BenefitCard 
              icon={Globe} 
              title="Global Reach" 
              description="Connect with people across 50+ countries effortlessly. Break down barriers."
              delay={400}
            />
          </div>

          {/* Middle Column - Feature Image */}
          <div className="lg:col-span-1 h-[500px] lg:h-auto relative">
             <Reveal delay={500} className="h-full">
                <div className="h-full rounded-3xl bg-surface border border-white/5 overflow-hidden flex items-end justify-center pt-10 relative group">
                    <div className="absolute top-0 inset-x-0 h-2/3 bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                    
                    <div className="relative w-[90%] transform translate-y-8 group-hover:translate-y-4 transition-transform duration-500">
                        <PhoneFrame className="h-[450px] shadow-2xl">
                            <div className="bg-zinc-950 h-full p-5 flex flex-col items-center pt-12">
                                <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-indigo-500 to-purple-500 mb-4">
                                    <img src="https://picsum.photos/200/200?random=50" className="w-full h-full rounded-full border-2 border-black object-cover" />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-1">Jenney Roy</h3>
                                <p className="text-indigo-400 text-xs mb-6 font-medium">@jenroy_official</p>
                                
                                <div className="flex gap-3 w-full mb-8">
                                    <button className="flex-1 bg-white text-black py-2.5 rounded-xl text-xs font-bold hover:bg-gray-200">Follow</button>
                                    <button className="flex-1 bg-zinc-800 text-white py-2.5 rounded-xl text-xs font-bold hover:bg-zinc-700">Message</button>
                                </div>

                                <div className="grid grid-cols-3 gap-2 w-full">
                                    {[1,2,3].map(i => (
                                        <div key={i} className="aspect-square bg-zinc-800 rounded-lg overflow-hidden">
                                            <img src={`https://picsum.photos/100/100?random=${i+60}`} className="w-full h-full object-cover opacity-80" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </PhoneFrame>
                    </div>
                </div>
             </Reveal>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 justify-center">
            <BenefitCard 
              icon={Sparkles} 
              title="Personalized Experience" 
              description="Tailored content and recommendations delivered straight to your feed based on your interests."
              delay={600}
            />
            <BenefitCard 
              icon={Heart} 
              title="Community Support" 
              description="Join thriving communities around your interests. Find your tribe and grow together."
              delay={700}
            />
          </div>
        </div>
      </div>
    </section>
  );
};