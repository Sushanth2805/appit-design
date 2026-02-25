import React from 'react';
import { MessageCircle, Star } from './ui/Icons';
import { Reveal } from './ui/Reveal';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Emily Johnson",
      role: "Freelance Designer",
      image: "https://picsum.photos/100/100?random=1",
      text: "I've been looking for a place to get real feedback on my designs, not just likes. Authentick's feedback circles are exactly what I needed."
    },
    {
      name: "Michael Brown",
      role: "Content Creator",
      image: "https://picsum.photos/100/100?random=2",
      text: "The growth analytics are actually useful. I can see exactly which posts are resonating and why. It's helping me refine my strategy."
    },
    {
      name: "David Wilson",
      role: "Indie Developer",
      image: "https://picsum.photos/100/100?random=3",
      text: "Finally, a platform that feels like a community. I've met two collaborators for my new project in just the first week of using Authentick."
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-background relative">
      {/* Bg decoration */}
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
            <Reveal>
                <div className="inline-flex items-center gap-2 mb-6 border border-white/10 rounded-full px-4 py-1.5 bg-white/5">
                    <MessageCircle size={14} className="text-white" />
                    <span className="text-xs uppercase tracking-wider font-bold text-white">Testimonials</span>
                </div>
            </Reveal>
            <Reveal delay={100}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">What Early Users Say</h2>
            </Reveal>
            <Reveal delay={200}>
                <p className="text-secondary">Feedback from our beta testers and early adopters.</p>
            </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
                <Reveal key={i} delay={i * 150} className="h-full">
                    <div className="h-full bg-surface border border-white/5 rounded-3xl p-8 hover:border-white/15 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                        <div>
                            <div className="flex gap-1 mb-6">
                                {[1,2,3,4,5].map(star => <Star key={star} size={14} className="text-yellow-500 fill-current" />)}
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed mb-8 font-medium">"{t.text}"</p>
                        </div>
                        <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                            <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full ring-2 ring-white/10" />
                            <div>
                                <div className="text-white font-bold text-sm">{t.name}</div>
                                <div className="text-xs text-gray-500 font-medium">{t.role}</div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
};