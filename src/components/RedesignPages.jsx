import React, { useState } from 'react';

const redesignPaths = [
  '/@fs/c:/Users/MC VIP/OneDrive/Desktop/VibeConnect Website/stitch_modern_vibeconnect_redesign/code.html',
  '/@fs/c:/Users/MC VIP/OneDrive/Desktop/VibeConnect Website/stitch_modern_vibeconnect_redesign (1)/code.html',
  '/@fs/c:/Users/MC VIP/OneDrive/Desktop/VibeConnect Website/stitch_modern_vibeconnect_redesign (2)/code.html',
  '/@fs/c:/Users/MC VIP/OneDrive/Desktop/VibeConnect Website/stitch_modern_vibeconnect_redesign (3)/code.html',
];

const RedesignPages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      {/* Use an iframe to perfectly render the standalone HTML files with their custom Tailwind configs */}
      <iframe 
        src={redesignPaths[currentIndex]} 
        className="w-full h-full border-none"
        title="Redesign Page"
      />
      
      {/* Navigation Controls to switch between the 4 designs */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-[100] flex gap-4 bg-black/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-2xl">
        <button 
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className="text-white disabled:opacity-30 hover:text-primary transition-colors font-semibold"
        >
          Previous
        </button>
        <span className="text-white font-mono font-bold">
          {currentIndex + 1} / {redesignPaths.length}
        </span>
        <button 
          onClick={() => setCurrentIndex(prev => Math.min(redesignPaths.length - 1, prev + 1))}
          disabled={currentIndex === redesignPaths.length - 1}
          className="text-white disabled:opacity-30 hover:text-primary transition-colors font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RedesignPages;
