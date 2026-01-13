import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, className = "", glow = false }) => {
  return (
    <div className={`relative ${className}`}>
        {/* Glow behind phone */}
        {glow && (
             <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[3rem] blur opacity-30"></div>
        )}
      <div className="relative border-8 border-surfaceHighlight bg-black rounded-[2.5rem] overflow-hidden shadow-2xl h-full flex flex-col">
        {/* Notch Area */}
        <div className="absolute top-0 inset-x-0 h-6 bg-surfaceHighlight z-20 flex justify-center">
             <div className="w-32 h-5 bg-black rounded-b-xl"></div>
        </div>
        
        {/* Screen Content */}
        <div className="flex-1 w-full bg-surface relative z-10 overflow-hidden text-xs sm:text-sm">
            {children}
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-1 inset-x-0 flex justify-center z-20 pb-1">
            <div className="w-24 h-1 bg-white/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};