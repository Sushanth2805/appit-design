import React from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'none';
}

// Animations disabled for stability and responsiveness
export const Reveal: React.FC<RevealProps> = ({ children, className = "" }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};