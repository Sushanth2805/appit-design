import React from 'react';
import { Users, ShieldCheck, Zap, BarChart2, MessageCircle, Clock, Smartphone, UserCheck, Bell, Calendar, Check } from './ui/Icons';
import { Reveal } from './ui/Reveal';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
           <Reveal>
            <div className="inline-flex items-center gap-2 mb-6">
                <Zap size={16} className="text-yellow-400 fill-current" />
                <span className="text-sm font-bold text-yellow-400 uppercase tracking-widest">Powerful Features</span>
            </div>
           </Reveal>
           <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Everything You Need</h2>
           </Reveal>
           <Reveal delay={200}>
            <p className="text-secondary max-w-2xl mx-auto text-lg">
                Explore Appit's powerful features designed to help you connect, share, and engage with your community effortlessly.
            </p>
           </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
            {/* Feature 1: Large - Profile */}
            <div className="lg:col-span-2 row-span-2 bg-surfaceHighlight border border-white/10 rounded-[2rem] p-10 relative overflow-hidden group hover:border-white/20 transition-colors">
                <Reveal className="h-full flex flex-col justify-between relative z-10">
                    <div className="mb-10">
                        <div className="w-12 h-12 bg-white text-black rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-white/10">
                            <UserCheck size={24} />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-3">Customizable Profiles</h3>
                        <p className="text-secondary max-w-md text-lg">Personalize your profile with themes, layouts, and advanced settings to truly stand out from the crowd.</p>
                    </div>
                    {/* Visual representation */}
                    <div className="w-full bg-black/50 backdrop-blur-md border border-white/5 rounded-2xl p-6 flex gap-6 items-center hover:bg-black/80 transition-colors cursor-pointer">
                         <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-[2px]">
                             <img src="https://picsum.photos/200/200?random=1" className="w-full h-full rounded-full object-cover border-2 border-black" />
                         </div>
                         <div className="flex-1 space-y-3">
                             <div className="h-3 w-40 bg-zinc-800 rounded-full"></div>
                             <div className="h-2.5 w-24 bg-zinc-900 rounded-full"></div>
                             <div className="flex gap-6 mt-2">
                                <div className="text-center group/stat">
                                    <div className="text-white font-bold text-lg group-hover/stat:text-indigo-400 transition-colors">98</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wide">Posts</div>
                                </div>
                                <div className="text-center group/stat">
                                    <div className="text-white font-bold text-lg group-hover/stat:text-indigo-400 transition-colors">4.2k</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wide">Followers</div>
                                </div>
                             </div>
                         </div>
                    </div>
                </Reveal>
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-indigo-600/20 transition-colors duration-700"></div>
            </div>

            {/* Feature 2: Small - Community Groups */}
            <Reveal delay={200}>
                <div className="h-full bg-surfaceHighlight border border-white/10 rounded-[2rem] p-8 hover:bg-zinc-800/80 transition-colors group">
                    <div className="mb-6">
                        <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                            <Users size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Community Groups</h3>
                        <p className="text-sm text-secondary">Join or create groups around shared interests.</p>
                    </div>
                    <div className="flex -space-x-4 mt-8 pl-2">
                        {[1,2,3,4].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-surfaceHighlight bg-zinc-700 flex items-center justify-center text-[10px] text-white overflow-hidden relative z-0 hover:z-10 hover:scale-110 transition-transform cursor-pointer">
                                <img src={`https://picsum.photos/50/50?random=${i+20}`} className="w-full h-full object-cover"/>
                            </div>
                        ))}
                        <div className="w-10 h-10 rounded-full border-2 border-surfaceHighlight bg-indigo-600 flex items-center justify-center text-xs font-bold text-white relative z-10">
                            +5k
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* Feature 3: Small - Verified Users */}
            <Reveal delay={300}>
                <div className="h-full bg-surfaceHighlight border border-white/10 rounded-[2rem] p-8 hover:bg-zinc-800/80 transition-colors flex flex-col justify-between">
                    <div>
                        <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center mb-4 text-white">
                            <ShieldCheck size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Verified Users</h3>
                        <p className="text-sm text-secondary mb-4">Connect confidently with verified, authentic users.</p>
                    </div>
                    <div className="flex items-center gap-3 bg-black/40 p-3 rounded-2xl w-fit border border-white/5">
                        <img src="https://picsum.photos/30/30?random=50" className="w-8 h-8 rounded-full" />
                        <div>
                            <span className="text-sm font-bold text-white block">Emma Johnson</span>
                            <span className="text-[10px] text-gray-500">@emma_j</span>
                        </div>
                        <div className="bg-blue-500 rounded-full p-1 ml-1 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                            <Check size={10} className="text-white"/>
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* Feature 4: Medium - Smart Notifications */}
            <Reveal delay={400}>
                <div className="h-full bg-surfaceHighlight border border-white/10 rounded-[2rem] p-8 relative overflow-hidden group">
                    <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center mb-4 text-white">
                        <Bell size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Smart Notifications</h3>
                    <p className="text-sm text-secondary mb-8">Get real-time alerts for the updates that matter to you.</p>
                    <div className="space-y-3 relative z-10">
                        <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border-l-4 border-indigo-500 flex items-center gap-4 transform translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
                            <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,1)]"></div>
                            <div>
                                <div className="text-sm font-semibold text-white">New Comment</div>
                                <div className="text-xs text-gray-400">Sarah commented on your post</div>
                            </div>
                        </div>
                        <div className="bg-black/40 p-4 rounded-xl border-l-4 border-transparent opacity-60 flex items-center gap-4 transform translate-x-6 group-hover:translate-x-0 transition-transform duration-500 delay-75">
                            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                            <div>
                                <div className="text-sm font-semibold text-gray-300">New Like</div>
                                <div className="text-xs text-gray-500">John liked your photo</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* Feature 5: Wide - Account Insights */}
            <div className="md:col-span-2 bg-surfaceHighlight border border-white/10 rounded-[2rem] p-10 flex flex-col md:flex-row gap-10 items-center overflow-hidden group">
                 <Reveal className="flex-1">
                     <div className="w-12 h-12 bg-white text-black rounded-2xl flex items-center justify-center mb-6">
                        <BarChart2 size={24} />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-3">Account Insights</h3>
                     <p className="text-secondary text-lg leading-relaxed">Track your engagement and performance with detailed analytics dashboards built right into the app. Visualize your growth.</p>
                 </Reveal>
                 <Reveal delay={200} className="flex-1 w-full bg-black/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm relative">
                     <div className="flex items-end gap-3 h-32 pb-2 border-b border-zinc-800">
                         {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                             <div key={i} className="flex-1 bg-zinc-800 rounded-t-sm relative group/bar overflow-hidden">
                                <div 
                                    className="w-full bg-indigo-500 absolute bottom-0 left-0 transition-all duration-1000 ease-out group-hover:bg-indigo-400"
                                    style={{ 
                                        height: `${h}%`,
                                    }}
                                ></div>
                             </div>
                         ))}
                     </div>
                     <div className="flex justify-between text-[10px] text-gray-600 mt-3 font-medium uppercase">
                         <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                     </div>
                 </Reveal>
            </div>
            
            {/* Feature 6: Small - Messaging */}
             <Reveal delay={500}>
                <div className="h-full bg-surfaceHighlight border border-white/10 rounded-[2rem] p-8 hover:bg-zinc-800/80 transition-colors">
                    <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center mb-4 text-white">
                        <MessageCircle size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Easy Messaging</h3>
                    <p className="text-xs text-secondary">Chat seamlessly with friends and groups.</p>
                </div>
            </Reveal>

             {/* Feature 7: Small - Post Scheduling */}
             <Reveal delay={600}>
                <div className="h-full bg-surfaceHighlight border border-white/10 rounded-[2rem] p-8 hover:bg-zinc-800/80 transition-colors">
                    <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center mb-4 text-white">
                        <Calendar size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Post Scheduling</h3>
                    <p className="text-xs text-secondary">Plan content to share at the perfect time.</p>
                </div>
            </Reveal>
        </div>
      </div>
    </section>
  );
};