import React, { useRef, useEffect } from 'react';

const HeroAnimation = ({ play = false, audioRef, onEnded }) => {
  const videoRef = useRef(null);

  // Play or pause video based on state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (play) {
      video.play().catch(err => console.log("Video playback note:", err));
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [play]);

  // Keep video time tightly synchronized with audio
  useEffect(() => {
    if (!play || !audioRef?.current) return;

    const audio = audioRef.current;
    const syncWithAudio = () => {
      const video = videoRef.current;
      if (video && Math.abs(video.currentTime - audio.currentTime) > 0.15) {
        video.currentTime = audio.currentTime;
      }
    };

    audio.addEventListener('timeupdate', syncWithAudio);
    return () => audio.removeEventListener('timeupdate', syncWithAudio);
  }, [play, audioRef]);

  return (
    <video
      ref={videoRef}
      className="background-canvas"
      playsInline
      muted
      preload="auto"
      onEnded={onEnded}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    >
      <source src="/hero_video.mp4" type="video/mp4" />
      <source src="/Futuristic_enterprise_technology%E2%80%A6_1080p_202608061740.mp4" type="video/mp4" />
      <source src="/Futuristic_enterprise_technology…_1080p_202608061740.mp4" type="video/mp4" />
    </video>
  );
};

export default HeroAnimation;

