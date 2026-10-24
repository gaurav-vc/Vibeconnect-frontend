import React, { useRef, useEffect, useState } from 'react';
import Logo from './Logo';

const NewAnimationPage = ({ navigateTo }) => {
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const frameCount = 240;
  const images = useRef([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;

    const currentFrame = (index) => 
      `/@fs/c:/Users/MC VIP/OneDrive/Desktop/VibeConnect Website/VibeConnect_Experience-Frames_300/frame_${index.toString().padStart(3, '0')}.png`;

    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
          loadedCount++;
          if (loadedCount >= 1 && isMounted) {
            setLoaded(true);
          }
        };
        images.current.push(img);
      }
    };
    preloadImages();
    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d', { alpha: false });
    let animationFrameId;
    let currentFrameIndex = 0;
    let lastTime = 0;
    const fps = 30;
    const frameInterval = 1000 / fps;

    const render = (time) => {
      animationFrameId = requestAnimationFrame(render);
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      if (deltaTime < frameInterval) return;
      lastTime = time - (deltaTime % frameInterval);

      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';

      const img = images.current[currentFrameIndex];
      if (typeof window.forward === 'undefined') window.forward = true;
      
      if (img && img.complete && img.naturalWidth > 0) {
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      
        if (window.forward) {
          currentFrameIndex++;
          if (currentFrameIndex >= frameCount - 1) {
            window.forward = false;
          }
        } else {
          currentFrameIndex--;
          if (currentFrameIndex <= 0) {
            window.forward = true;
          }
        }
      }
    };
    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [loaded]);

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center">
      {!loaded && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black text-white">
          <h2 className="text-2xl font-bold">Loading Experience...</h2>
        </div>
      )}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 object-cover w-full h-full pointer-events-none filter contrast-125 saturate-125 drop-shadow-2xl" />
      
      <div className="relative z-10 flex flex-col items-center p-8 w-full">
        <div 
          className={`cursor-pointer px-4 md:px-12 py-8 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col items-center w-full max-w-[1200px] hover:-translate-y-1 ${isExpanded ? 'max-h-[600px] -translate-y-2' : 'max-h-[300px]'}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className={`flex flex-col gap-6 text-center text-white/90 text-2xl md:text-3xl leading-relaxed transition-all duration-[600ms] delay-100 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
            <p>Unlock the full potential of your team with our premium suite of tools.</p>
            <p>Designed for scale, engineered for perfection, and built for you.</p>
          </div>
          <div className={`mt-8 text-base font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${isExpanded ? 'text-white/60' : 'text-white/40 group-hover:text-white/90'}`}>
            {isExpanded ? 'Tap to close' : 'Tap to explore'}
          </div>
        </div>
        
        <button onClick={() => navigateTo(1)} className="mt-16 px-10 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold backdrop-blur-md border border-white/20 transition-all shadow-lg uppercase text-base tracking-widest z-50">
          &larr; Back to Home
        </button>
      </div>
    </div>
  );
};

export default NewAnimationPage;
