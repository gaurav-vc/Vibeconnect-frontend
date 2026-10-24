import React from 'react';

const Page2 = ({ onNext, onPrev }) => {
  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      <iframe 
        src="/@fs/c:/Users/MC VIP/OneDrive/Desktop/VibeConnect Website/stitch_modern_vibeconnect_redesign (1)/code.html" 
        className="w-full h-full border-none"
        title="Page 2"
      />
      
      <div className="absolute bottom-6 right-6 z-[100] flex gap-4">
        <button 
          onClick={onPrev}
          className="bg-black text-white px-6 py-3 rounded-full font-bold shadow-lg hover:opacity-80 transition-opacity border border-white/20"
        >
          &larr; Prev
        </button>
        <button 
          onClick={onNext}
          className="bg-black text-white px-6 py-3 rounded-full font-bold shadow-lg hover:opacity-80 transition-opacity border border-white/20"
        >
          Go to Page 3 &rarr;
        </button>
      </div>
    </div>
  );
};

export default Page2;
