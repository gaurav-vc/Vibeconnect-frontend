import React, { useRef, useEffect, useState } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const frameCount = 300;
  
  // Create an array to hold all preloaded image objects
  const images = useRef([]);

  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;

    // Helper to format frame numbers with leading zeros (e.g., 001, 002... 300)
    const currentFrame = (index) => 
      `/frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        img.onload = () => {
          loadedCount++;
          if (loadedCount === frameCount && isMounted) {
            setLoaded(true);
          }
        };
        images.current.push(img);
      }
    };

    preloadImages();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d', { alpha: false }); // alpha: false for better performance
    let animationFrameId;
    let currentFrameIndex = 0;
    let lastTime = 0;
    const fps = 30; // Match standard video frame rate for smoother, higher quality feel
    const frameInterval = 1000 / fps;

    const render = (time) => {
      animationFrameId = requestAnimationFrame(render);

      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;

      if (deltaTime < frameInterval) return;
      lastTime = time - (deltaTime % frameInterval);

      // We multiply by devicePixelRatio for sharper rendering on high-DPI displays (Retina/4K)
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      // Scale canvas CSS size back down to fit the screen
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      // Enhance image quality
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';

      const img = images.current[currentFrameIndex];
      if (img) {
        // Calculate dimensions to cover the screen (like background-size: cover)
        const scale = Math.max(
          canvas.width / img.width,
          canvas.height / img.height
        );
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      }

      currentFrameIndex = (currentFrameIndex + 1) % frameCount;
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [loaded]);

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

export default BackgroundAnimation;
