import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center justify-center relative cursor-pointer hover:scale-105 transition-transform duration-300">
      <div className="relative font-display font-extrabold italic tracking-[0.1em] text-4xl leading-none">
        {/* Main Text */}
        <span 
          style={{ 
            color: '#FFB6C1', 
            WebkitTextStroke: '2px #FF91A4',
            position: 'relative',
            zIndex: 2
          }}
        >
          VC
        </span>
        {/* Background outline effect to mimic double line */}
        <span 
          className="absolute top-1 -left-1 opacity-50"
          style={{ 
            color: 'transparent',
            WebkitTextStroke: '1px #FFB6C1',
            zIndex: 1
          }}
        >
          VC
        </span>
      </div>
    </div>
  );
}
