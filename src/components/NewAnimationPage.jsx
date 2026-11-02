import React, { useRef, useEffect, useState } from 'react';
import Logo from './Logo';

const NewAnimationPage = ({ navigateTo }) => {
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const frameCount = 240;
  const images = useRef([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;

    const currentFrame = (index) => 
      `/experience_frames/frame_${index.toString().padStart(3, '0')}.png`;

    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
          loadedCount++;
          if (isMounted) {
            setProgress(Math.round((loadedCount / frameCount) * 100));
            if (loadedCount >= 10) {
              setLoaded(true);
            }
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
    if (!canvas) return;
    const context = canvas.getContext('2d', { alpha: false });
    let animationFrameId;
    let currentFrameIndex = 0;
    let lastTime = 0;
    const fps = 30;
    const frameInterval = 1000 / fps;
    let forward = true;

    const render = (time) => {
      animationFrameId = requestAnimationFrame(render);
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      if (deltaTime < frameInterval) return;
      lastTime = time - (deltaTime % frameInterval);

      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
      }
      
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';

      const img = images.current[currentFrameIndex];
      
      if (img && img.complete && img.naturalWidth > 0) {
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      
        if (forward) {
          currentFrameIndex++;
          if (currentFrameIndex >= frameCount - 1) {
            forward = false;
          }
        } else {
          currentFrameIndex--;
          if (currentFrameIndex <= 0) {
            forward = true;
          }
        }
      }
    };
    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [loaded]);

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden flex flex-col justify-between selection:bg-primary/30">
      
      {/* Top Floating Glass Bar for Easy Navigation */}
      <div className="relative z-30 w-full px-4 sm:px-8 py-4 flex items-center justify-between">
        <div 
          onClick={() => navigateTo(1)} 
          className="flex items-center gap-3 cursor-pointer p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 hover:bg-black/60 transition-all"
        >
          <Logo />
          <span className="hidden sm:inline font-display font-bold text-white text-sm pr-3">VibeConnect</span>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => navigateTo(1)}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm backdrop-blur-md border border-white/20 transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
          >
            <span className="material-symbols-outlined text-sm">home</span>
            <span>Home</span>
          </button>
          <button 
            onClick={() => navigateTo(3)}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm backdrop-blur-md border border-white/20 transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
          >
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            <span>Features</span>
          </button>
          <button 
            onClick={() => navigateTo(2)}
            className="px-4 py-2 rounded-full bg-primary text-on-primary font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-lg shadow-primary/30"
          >
            <span className="material-symbols-outlined text-sm">space_dashboard</span>
            <span className="hidden sm:inline">Dashboard</span>
          </button>
        </div>
      </div>

      {/* Loading Overlay */}
      {!loaded && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black text-white gap-4 px-6 text-center">
          <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
          <h2 className="text-xl sm:text-2xl font-bold font-display">Initializing 3D Visual Experience...</h2>
          <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <span className="text-xs text-white/50">{progress}% Loaded</span>
        </div>
      )}

      {/* Responsive Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 object-cover w-full h-full pointer-events-none filter contrast-125 saturate-125" 
      />
      
      {/* Interactive Expandable Bottom Card */}
      <div className="relative z-10 flex flex-col items-center p-4 sm:p-8 w-full pb-8">
        <div 
          className={`cursor-pointer px-5 sm:px-10 py-6 rounded-3xl bg-black/60 backdrop-blur-2xl border border-white/20 transition-all duration-500 ease-out flex flex-col items-center w-full max-w-[900px] shadow-2xl hover:border-white/40 ${
            isExpanded ? 'max-h-[500px]' : 'max-h-[160px]'
          }`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Header prompt */}
          <div className="flex items-center gap-2 mb-2 text-primary text-xs sm:text-sm font-bold uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm">touch_app</span>
            <span>{isExpanded ? 'Tap to Collapse' : 'Tap to Explore Narrative'}</span>
          </div>

          <h3 className="text-white text-lg sm:text-2xl font-display font-extrabold text-center">
            The Next Dimension of Enterprise Intelligence
          </h3>

          {/* Expandable text body */}
          <div className={`flex flex-col gap-3 text-center text-white/90 text-sm sm:text-base leading-relaxed transition-all duration-500 pt-3 ${
            isExpanded ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 pointer-events-none'
          }`}>
            <p>Unlock the full potential of your team with our fluid, high-performance workspace suite.</p>
            <p>Engineered for high velocity, designed with mathematical precision, and built for modern organizations.</p>
            <div className="flex justify-center gap-3 pt-2">
              <button 
                onClick={(e) => { e.stopPropagation(); navigateTo(2); }} 
                className="px-6 py-2.5 rounded-full bg-primary text-white font-bold text-xs uppercase tracking-wider hover:scale-105 transition-transform"
              >
                Go to Workspace &rarr;
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 text-xs text-white/40 uppercase tracking-widest font-semibold">
          30 FPS Dynamic Canvas • 240 Frames Sequence
        </div>
      </div>
    </div>
  );
};

export default NewAnimationPage;
