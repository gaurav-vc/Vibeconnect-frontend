import React, { useRef, useEffect, useState } from 'react';

const HeroAnimation = ({ play = true }) => {
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const frameCount = 300;
  const images = useRef([]);

  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;

    const currentFrame = (index) => 
      `/hero_frames/frame_${index.toString().padStart(3, '0')}.png`;

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
    if (!canvas) return;
    
    const context = canvas.getContext('2d', { alpha: false });
    let animationFrameId;
    let currentFrameIndex = 0;
    let lastTime = 0;
    const fps = 30; // 30 fps for super smooth 10-second HD animation
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
      if (img && img.complete && img.naturalWidth > 0) {
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      
        if (play) {
          currentFrameIndex = (currentFrameIndex + 1) % frameCount;
        }
      }
    };
    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [loaded, play]);

  return (
    <>
      {!loaded && (
        <div className="loading-overlay">
          <h2>Loading Experience...</h2>
        </div>
      )}
      <canvas 
        ref={canvasRef} 
        className="background-canvas"
      />
    </>
  );
};

export default HeroAnimation;
