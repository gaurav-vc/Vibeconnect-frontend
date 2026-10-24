import React from 'react';

const Page1 = ({ onNext }) => {
  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      <iframe 
        src="/@fs/c:/Users/MC VIP/OneDrive/Desktop/VibeConnect Website/stitch_modern_vibeconnect_redesign/code.html" 
        className="w-full h-full border-none"
        title="Page 1"
      />
      
      <div className="absolute bottom-6 right-6 z-[100]">
        <button 
          onClick={onNext}
          className="bg-primary-container text-white px-6 py-3 rounded-full font-bold shadow-lg hover:opacity-80 transition-opacity bg-black border border-white/20"
        >
          Go to Page 2 &rarr;
        </button>
      </div>
    </div>
  );
};

export default Page1;
