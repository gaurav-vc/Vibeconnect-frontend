import React, { useState, useRef, useEffect } from 'react';
import HeroAnimation from './components/HeroAnimation';
import BrandHero from './components/BrandHero';
import Dashboard from './components/Dashboard';
import FeaturesShowcase from './components/FeaturesShowcase';
import Pricing from './components/Pricing';
import NewAnimationPage from './components/NewAnimationPage';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ';
import Logo from './components/Logo';
import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState(0); // 0 = Hero, 1 = BrandHero, 2 = Dashboard, etc.
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNavPills, setShowNavPills] = useState(false);

  // Scroll to top whenever page changes
  const navigateTo = (page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Don't auto-start audio if clicking quick navigation links
      if (e.target.closest && e.target.closest('.no-autostart')) {
        return;
      }
      if (currentPage === 0 && !isPlaying && audioRef.current) {
        setIsPlaying(true);
        audioRef.current.play().catch(err => console.log("Audio play failed:", err));
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
    navigateTo(1);
  };

  const handleAudioEnded = () => {
    navigateTo(1);
  };

  // Render the separate pages based on state
  if (currentPage === 1) return <BrandHero navigateTo={navigateTo} />;
  if (currentPage === 2) return <Dashboard navigateTo={navigateTo} />;
  if (currentPage === 3) return <FeaturesShowcase navigateTo={navigateTo} />;
  if (currentPage === 4) return <Pricing navigateTo={navigateTo} />;
  if (currentPage === 5) return <NewAnimationPage navigateTo={navigateTo} />;
  if (currentPage === 6) return <ContactUs navigateTo={navigateTo} />;
  if (currentPage === 7) return <FAQ navigateTo={navigateTo} />;

  // Render Hero Landing Page (Page 0)
  return (
    <div className="relative w-full min-h-screen min-h-[100dvh] overflow-hidden bg-black text-white flex flex-col justify-between selection:bg-primary/30">
      
      {/* Top Floating Glass Navigation Header */}
      <div className="fixed top-3 sm:top-5 left-3 sm:left-6 right-3 sm:right-6 z-50 flex items-center justify-between pointer-events-auto">
        <div 
          onClick={(e) => { e.stopPropagation(); navigateTo(1); }} 
          className="no-autostart flex items-center gap-2.5 p-2 pr-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 hover:bg-black/60 transition-all cursor-pointer shadow-lg"
          title="Go to Home"
        >
          <Logo />
          <span className="font-display font-extrabold text-white text-sm sm:text-base tracking-tight">
            Vibe<span className="text-[#FFB6C1]">Connect</span>
          </span>
        </div>

        {/* Quick Route Selector for Direct Exploration */}
        <div className="no-autostart flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 p-1.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 shadow-lg">
            <button 
              onClick={(e) => { e.stopPropagation(); navigateTo(1); }}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white/90 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); navigateTo(3); }}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white/90 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              Features
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); navigateTo(4); }}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white/90 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              Pricing
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); navigateTo(2); }}
              className="px-4 py-1.5 rounded-full text-xs font-bold bg-primary text-white hover:bg-primary/90 transition-all cursor-pointer shadow-md"
            >
              Dashboard
            </button>
          </div>

          <button 
            onClick={(e) => { e.stopPropagation(); setShowNavPills(!showNavPills); }}
            className="sm:hidden px-3.5 py-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 text-xs font-bold text-white flex items-center gap-1.5 cursor-pointer"
          >
            <span>Menu</span>
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
        </div>
      </div>

      {/* Mobile Popover Menu for Landing Page */}
      {showNavPills && (
        <div className="no-autostart fixed top-16 left-4 right-4 z-50 p-4 rounded-2xl bg-black/85 backdrop-blur-2xl border border-white/20 shadow-2xl flex flex-col gap-2 sm:hidden animate-fade-in">
          <button onClick={() => navigateTo(1)} className="p-2.5 rounded-xl text-left text-sm font-semibold hover:bg-white/10 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-base">home</span> Home
          </button>
          <button onClick={() => navigateTo(3)} className="p-2.5 rounded-xl text-left text-sm font-semibold hover:bg-white/10 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-base">auto_awesome</span> Features
          </button>
          <button onClick={() => navigateTo(4)} className="p-2.5 rounded-xl text-left text-sm font-semibold hover:bg-white/10 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-base">payments</span> Pricing
          </button>
          <button onClick={() => navigateTo(5)} className="p-2.5 rounded-xl text-left text-sm font-semibold hover:bg-white/10 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-base">view_in_ar</span> 3D Experience
          </button>
          <button onClick={() => navigateTo(6)} className="p-2.5 rounded-xl text-left text-sm font-semibold hover:bg-white/10 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-base">mail</span> Contact Us
          </button>
          <button onClick={() => navigateTo(7)} className="p-2.5 rounded-xl text-left text-sm font-semibold hover:bg-white/10 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-base">help_outline</span> FAQ
          </button>
          <button onClick={() => navigateTo(2)} className="p-3 rounded-xl text-center text-sm font-bold bg-primary text-white mt-1">
            Open Dashboard &rarr;
          </button>
        </div>
      )}

      {/* Synchronized Background Video & Audio */}
      <HeroAnimation play={isPlaying} audioRef={audioRef} onEnded={handleAudioEnded} />

      {/* Hero Content Overlay */}
      <div className="content-overlay">
        <header className="hero px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-widest font-bold text-white mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-[#FFB6C1]" />
            <span>Next-Gen Enterprise Ecosystem</span>
          </div>

          <h1 className="font-display">VibeConnect</h1>
          
          <p className="font-body-lg">
            Experience a new dimension of connectivity and enterprise intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {!isPlaying ? (
              <button className="cta-button pulse" onClick={handleStart}>
                <span className="material-symbols-outlined text-xl">play_circle</span>
                <span>Click to Experience with Sound</span>
              </button>
            ) : (
              <button className="cta-button" onClick={handleSkipIntro}>
                <span>Skip Intro & Enter</span>
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            )}
            
            <button 
              onClick={(e) => { e.stopPropagation(); navigateTo(1); }}
              className="px-6 py-3 rounded-full bg-black/40 hover:bg-black/60 text-white/90 hover:text-white font-bold text-xs sm:text-sm tracking-wide border border-white/20 backdrop-blur-md transition-all cursor-pointer"
            >
              Skip Directly to Home &rarr;
            </button>
          </div>
        </header>
      </div>

      {/* Bottom Status Indicator */}
      <div className="relative z-20 pb-4 text-center text-xs text-white/60 tracking-wider">
        <span>Powered by Digielves Tech Wizards • Responsive on Mobile, Tablet & Desktop</span>
      </div>

      <audio 
        ref={audioRef} 
        src="/intro_audio.mp3" 
        preload="auto"
        onEnded={handleAudioEnded}
      />
    </div>
  );
}

export default App;
