import React, { useState, useRef, useEffect } from 'react'
import HeroAnimation from './components/HeroAnimation'
import BrandHero from './components/BrandHero'
import Dashboard from './components/Dashboard'
import FeaturesShowcase from './components/FeaturesShowcase'
import NewAnimationPage from './components/NewAnimationPage'
import ContactUs from './components/ContactUs'
import FAQ from './components/FAQ'
import Logo from './components/Logo'
import './index.css'

function App() {
  const [currentPage, setCurrentPage] = useState(0); // 0 = Hero, 1 = BrandHero, etc.
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleGlobalClick = () => {
      if (currentPage === 0 && !isPlaying && audioRef.current) {
        setIsPlaying(true);
        audioRef.current.play().catch(err => console.log("Play failed:", err));
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [currentPage, isPlaying]);

  const handleStart = (e) => {
    e.stopPropagation();
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Play failed:", err));
    }
  };

  const handleSkipIntro = (e) => {
    e.stopPropagation();
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setCurrentPage(1);
  };

  const handleAudioEnded = () => {
    setCurrentPage(1);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // Render the separate pages based on state
  if (currentPage === 1) return <BrandHero navigateTo={navigateTo} />;
  if (currentPage === 2) return <Dashboard navigateTo={navigateTo} />;
  if (currentPage === 3) return <FeaturesShowcase navigateTo={navigateTo} />;
  if (currentPage === 5) return <NewAnimationPage navigateTo={navigateTo} />;
  if (currentPage === 6) return <ContactUs navigateTo={navigateTo} />;
  if (currentPage === 7) return <FAQ navigateTo={navigateTo} />;

  // Render Hero
  return (
    <>
      <div className="fixed top-6 left-6 md:left-10 z-50">
        <Logo />
      </div>
      <HeroAnimation play={isPlaying} />
      <div className="content-overlay">
        <header className="hero">
          <h1>VibeConnect</h1>
          <p>Experience a new dimension of connectivity.</p>
          {!isPlaying ? (
            <button className="cta-button pulse" onClick={handleStart}>
              Click anywhere to Start
            </button>
          ) : (
            <button className="cta-button" onClick={handleSkipIntro}>
              Skip Intro
            </button>
          )}
        </header>
      </div>
      <audio 
        ref={audioRef} 
        src="/intro_audio.mp3" 
        onEnded={handleAudioEnded}
      />
    </>
  )
}

export default App
