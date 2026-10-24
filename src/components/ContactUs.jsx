import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Footer from './Footer';

const ContactUs = ({ navigateTo }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation shortly after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden min-h-screen flex flex-col">
      {/* Shared TopNavBar */}
      <div className="relative flex h-auto w-full flex-col bg-background group/design-root z-50">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-6 md:px-10 lg:px-12 xl:px-16 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-full max-w-[1600px] flex-1">
              <header className="flex items-center justify-between whitespace-nowrap px-4 py-3 glass-card rounded-full mt-4 sticky top-4 z-50">
                <div className="flex items-center gap-4 text-on-surface">
                  <Logo />
                </div>
                <div className="hidden md:flex flex-1 justify-end gap-8">
                  <div className="flex items-center gap-9">
                    <button onClick={() => navigateTo(1)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal">Home</button>
                    <button onClick={() => navigateTo(3)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal">Features</button>
                    <button onClick={() => navigateTo(6)} className="text-on-surface-variant hover:text-primary transition-colors font-label-sm uppercase text-primary font-bold">Contact Us</button>
                    <button onClick={() => navigateTo(7)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal">FAQ</button>
                    <button onClick={() => navigateTo(5)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal">Experience</button>
                  </div>
                  <button onClick={() => navigateTo(2)} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary-container text-on-primary-container text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-sm hover:shadow-md">
                    <span className="truncate">Sign Up</span>
                  </button>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>

      <main className="relative flex-1 flex flex-col lg:flex-row items-center justify-center py-20 px-6 md:px-12 max-w-[1600px] mx-auto w-full gap-16" style={{
        background: 'radial-gradient(circle at top right, rgba(244, 194, 194, 0.2) 0%, rgba(250, 249, 246, 0) 50%), radial-gradient(circle at bottom left, rgba(236, 186, 186, 0.2) 0%, rgba(250, 249, 246, 0) 50%)'
      }}>
        
        {/* Left Side: Content */}
        <div className="flex-1 flex flex-col w-full z-10">
          <div className={`mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter text-primary" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-medium leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              We're here to help. Reach out to us with any questions or to learn more about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
            {/* Email Card */}
            <a href="mailto:anurag.sharma@vibecopilot.ai" className={`hover-shine-card glass-card p-8 rounded-[2rem] flex flex-col items-start group fade-in-up ${isVisible ? 'visible' : ''} no-underline`} style={{ transitionDelay: '0.15s' }}>
              <div className="w-16 h-16 mb-6 rounded-2xl bg-primary-container flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-glow">
                <span className="material-symbols-outlined text-3xl">alternate_email</span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-3 tracking-tight font-display">Email Us</h3>
              <div className="mt-auto text-lg font-semibold text-primary group-hover:text-primary transition-colors flex items-center gap-2 duration-300 break-all">
                anurag.sharma@vibecopilot.ai
                <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
              </div>
            </a>

            {/* Call Card */}
            <a href="tel:+918423298423" className={`hover-shine-card glass-card p-8 rounded-[2rem] flex flex-col items-start group fade-in-up ${isVisible ? 'visible' : ''} no-underline`} style={{ transitionDelay: '0.3s' }}>
              <div className="w-16 h-16 mb-6 rounded-2xl bg-primary flex items-center justify-center text-on-primary group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 shadow-[0_10px_20px_rgba(123,84,85,0.2)]">
                <span className="material-symbols-outlined text-3xl">phone_in_talk</span>
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-3 tracking-tight font-display">Call Us</h3>
              <div className="mt-auto text-xl font-bold text-primary tracking-wide transition-colors flex items-center gap-2 duration-300">
                +91 84232 98423
                <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: Beautiful Blurred Image */}
        <div className={`flex-1 w-full max-w-xl lg:max-w-none relative z-10 fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl group border border-outline-variant/30">
            {/* Image is now clear per user request */}
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-105" style={{ backgroundImage: "url('/contact_office.jpg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-background/10 to-transparent"></div>
          </div>
        </div>
      </main>

      {/* Shared Footer */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default ContactUs;
