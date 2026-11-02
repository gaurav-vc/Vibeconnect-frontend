import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function BrandHero({ navigateTo }) {
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-up, .fade-in-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleFlip = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden min-h-screen flex flex-col relative selection:bg-primary/20 selection:text-primary">
      {/* Floating Animated Gradient Orbs */}
      <div className="fixed top-[-10%] right-[-5%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-br from-[#f4c2c2]/25 to-transparent rounded-full blur-[90px] sm:blur-[140px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="fixed bottom-[-10%] left-[-5%] w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-gradient-to-tr from-[#ecbaba]/20 to-transparent rounded-full blur-[100px] sm:blur-[150px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '10s' }} />

      {/* Shared Responsive Navbar */}
      <Navbar currentPage={1} navigateTo={navigateTo} />

      {/* Main Content */}
      <main className="relative pt-24 sm:pt-28 md:pt-32 pb-20 flex-1">
        {/* Hero Section */}
        <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 relative z-10">
          <div className="flex min-h-[500px] lg:min-h-[620px] flex-col gap-10 lg:flex-row items-center justify-between animate-up fade-in-up">
            
            {/* Left Content */}
            <div className="flex flex-col gap-5 sm:gap-6 lg:w-1/2 z-10 w-full text-center lg:text-left items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/30 border border-primary/20 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                <span className="text-primary font-bold text-xs uppercase tracking-widest">Enterprise Operating System</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.12] tracking-tight drop-shadow-sm text-primary">
                YOUR ULTIMATE <br className="hidden sm:inline" />
                <span className="text-gradient">WORKSPACE COMPANION</span>
              </h1>

              <h2 className="font-body-lg text-sm sm:text-lg md:text-xl font-semibold leading-relaxed max-w-lg tracking-wide uppercase text-primary/80">
                Unmatched Elegance. Limitless Productivity.
              </h2>

              <p className="text-on-surface-variant text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
                Seamlessly unify project management, team collaboration, document intelligence, and meeting workflows in one beautifully orchestrated platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 w-full sm:w-auto">
                <button 
                  onClick={() => navigateTo(3)} 
                  className="w-full sm:w-auto flex h-12 sm:h-14 px-8 items-center justify-center rounded-full bg-primary text-on-primary font-bold text-sm sm:text-base hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-95 cursor-pointer group"
                >
                  <span>Explore Features</span>
                  <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <button 
                  onClick={() => navigateTo(2)} 
                  className="w-full sm:w-auto flex h-12 sm:h-14 px-8 items-center justify-center rounded-full border border-primary/30 bg-surface-container-low/70 backdrop-blur-md text-on-surface font-semibold text-sm sm:text-base hover:bg-surface-container-high hover:border-primary transition-all active:scale-95 cursor-pointer"
                >
                  <span className="material-symbols-outlined mr-2 text-lg text-primary">space_dashboard</span>
                  <span>View Dashboard</span>
                </button>
              </div>

              {/* Social Proof Stats */}
              <div className="flex items-center gap-6 pt-4 border-t border-outline-variant/30 w-full justify-center lg:justify-start">
                <div>
                  <p className="text-xl sm:text-2xl font-bold font-display text-primary">99.98%</p>
                  <p className="text-[11px] sm:text-xs text-on-surface-variant font-medium">Uptime SLA</p>
                </div>
                <div className="h-8 w-px bg-outline-variant/40" />
                <div>
                  <p className="text-xl sm:text-2xl font-bold font-display text-primary">50,000+</p>
                  <p className="text-[11px] sm:text-xs text-on-surface-variant font-medium">Active Users</p>
                </div>
                <div className="h-8 w-px bg-outline-variant/40" />
                <div>
                  <p className="text-xl sm:text-2xl font-bold font-display text-primary">4.9 / 5.0</p>
                  <p className="text-[11px] sm:text-xs text-on-surface-variant font-medium">Client Rating</p>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:w-1/2 relative w-full h-[320px] sm:h-[420px] md:h-[480px] lg:h-[560px] mt-4 lg:mt-0">
              <div className="absolute inset-0 z-0">
                <div 
                  className="w-full h-full bg-cover bg-center rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl transition-all duration-700 hover:scale-[1.02] border border-outline-variant/40 group overflow-hidden" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7097M8gp2Hcgt-DUidpEeyjjhacfceGHtfGgHEbsQ4rg2s8iykio2msXAJGWhekzoB5E2t2th1pIugpLuJHMHmohlPFBkDAlfX9sUGTVqc4F5XVW-FIqoFfmlfFW4DaKSS_Xiow-ApgpfcksGjTyss7rMba4b1YHqViVcusVvFtHqth_IseMjEa_QhKKbl7xWGD_BbrCGrsMfoTRx7A6wAheolIej7WLZOWhbVAj63kU68T4WZvGk')" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
                </div>
              </div>

              {/* Floating Dynamic Badge */}
              <div className="absolute -bottom-4 left-4 sm:-bottom-6 sm:left-6 lg:-left-8 glass-card p-4 sm:p-5 rounded-2xl z-10 flex items-center gap-3.5 animate-up fade-in-up shadow-2xl border border-white/60 backdrop-blur-xl">
                <div className="w-11 h-11 rounded-xl bg-primary-container flex items-center justify-center text-primary shadow-glow shrink-0">
                  <span className="material-symbols-outlined text-2xl">trending_up</span>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-on-surface">Productivity Boost</p>
                  <p className="text-[11px] sm:text-xs font-semibold text-primary">+127% Team Efficiency</p>
                </div>
              </div>

              {/* Top Floating Badge */}
              <div className="absolute -top-3 right-4 sm:-top-5 sm:right-6 glass-card px-4 py-2.5 rounded-full z-10 hidden sm:flex items-center gap-2 shadow-xl border border-white/60 backdrop-blur-xl">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-on-surface">Vibe Core Active</span>
              </div>
            </div>

          </div>
        </section>

        {/* Features Flip Cards Section */}
        <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 mt-24 sm:mt-32 relative z-10">
          <div className="flex flex-col gap-4 text-center items-center mb-12 sm:mb-16 animate-up fade-in-up">
            <span className="text-xs uppercase tracking-widest font-bold text-primary px-3.5 py-1 rounded-full bg-primary-container/40">
              Interactive Showcase
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-primary">
              Crafted for <span className="text-gradient">Unmatched Elegance</span>
            </h2>
            <p className="text-on-surface-variant font-body-lg text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              Every interaction is crafted with meticulous attention to detail. Hover on desktop or tap on mobile to flip each card and explore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Flip Card 1 */}
            <div 
              className={`flip-card-container animate-up fade-in-up group ${flippedCards[0] ? 'is-flipped' : ''}`}
              style={{ transitionDelay: '0.1s', minHeight: '380px', height: 'auto' }}
              onClick={() => toggleFlip(0)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden relative shrink-0 mb-5">
                      <div 
                        className="w-full h-full bg-cover bg-center absolute inset-0 transition-transform duration-700 group-hover:scale-110" 
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBahWaCE-YMdpnb5OGc2hHlF9xy6sUVd5dnwLpNxb80lIZ-AYe4eKCtfNTau33un2UiVcJ704Kr-nizUhglmAUS-dpdDCmYtefHWcyc0vl-lWHmdAqRbLgjcac7WH2NAro0Tpp9ZVMUX1p0wuFWBobZQ0BpqxDeyvLzrQg_zTDOC4t4RvmCNZb_ZSnAWdP9jMQoGoMaB3iReB_4kTgLAnZRDl1BimfhdC9BxBzPmABAYRz7VYAdg4RX')" }}
                      />
                    </div>
                    <h3 className="text-on-surface font-headline-md text-xl font-bold mb-2">Glassmorphism UI</h3>
                    <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">
                      Subtle translucency, deep blur shaders, and atmospheric lighting creating a modern, airy interface.
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold text-primary pt-3 border-t border-outline-variant/20">
                    <span>Tap or hover to flip</span>
                    <span className="material-symbols-outlined text-sm">cached</span>
                  </div>
                </div>
                <div className="flip-card-back p-6 sm:p-8 flex flex-col justify-center items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-3">auto_awesome</span>
                  <h3 className="font-headline-md text-xl font-bold mb-3 text-primary">Digielves Tech Wizards</h3>
                  <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                    We are a forward-thinking technology enterprise dedicated to crafting elite digital experiences and pushing the boundaries of web engineering.
                  </p>
                  <button onClick={(e) => { e.stopPropagation(); navigateTo(3); }} className="mt-5 px-4 py-2 rounded-full bg-primary text-on-primary text-xs font-bold hover:scale-105 transition-transform shadow-md">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Flip Card 2 */}
            <div 
              className={`flip-card-container animate-up fade-in-up group ${flippedCards[1] ? 'is-flipped' : ''}`}
              style={{ transitionDelay: '0.2s', minHeight: '380px', height: 'auto' }}
              onClick={() => toggleFlip(1)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden relative shrink-0 mb-5">
                      <div 
                        className="w-full h-full bg-cover bg-center absolute inset-0 transition-transform duration-700 group-hover:scale-110" 
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtN07zX1yQV7uUAaG8KO9JCEjSw8wXz-9jR_2CxM_e_bFbiXv-oZhzq7T7V9KgR89IwSHqiVkdmiaCh7kbLZN_O1mSJAFrC7GHE9AVrAFb_nBFGiSwcKv4dfwmUD9U_GXvc3poURfg8oVlRcP5UZLaVROKSHXxEzm2mSrCBF2b7gL2lFEHoREbsVYp4s_PBHr71Bb8ICRkTCFL8JLgaFhfbV3knmAknYK8PRUgYG3v75DiTep-ipMT')" }}
                      />
                    </div>
                    <h3 className="text-on-surface font-headline-md text-xl font-bold mb-2">Refined Typography</h3>
                    <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">
                      Fluid type scale mathematically tuned for absolute readability across phone, tablet, and desktop viewports.
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold text-primary pt-3 border-t border-outline-variant/20">
                    <span>Tap or hover to flip</span>
                    <span className="material-symbols-outlined text-sm">cached</span>
                  </div>
                </div>
                <div className="flip-card-back p-6 sm:p-8 flex flex-col justify-center items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-3">flag</span>
                  <h3 className="font-headline-md text-xl font-bold mb-3 text-primary">Our Core Mission</h3>
                  <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                    Elevating enterprise workflows through purposeful ergonomics, robust engineering, and a relentless pursuit of perfection in every pixel.
                  </p>
                  <button onClick={(e) => { e.stopPropagation(); navigateTo(4); }} className="mt-5 px-4 py-2 rounded-full bg-primary text-on-primary text-xs font-bold hover:scale-105 transition-transform shadow-md">
                    Explore Pricing
                  </button>
                </div>
              </div>
            </div>

            {/* Flip Card 3 */}
            <div 
              className={`flip-card-container animate-up fade-in-up group ${flippedCards[2] ? 'is-flipped' : ''}`}
              style={{ transitionDelay: '0.3s', minHeight: '380px', height: 'auto' }}
              onClick={() => toggleFlip(2)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden relative shrink-0 mb-5">
                      <div 
                        className="w-full h-full bg-cover bg-center absolute inset-0 transition-transform duration-700 group-hover:scale-110" 
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2joff5hoUWA6npb3IoBcIi2151CZUNJqYxDObBS2YPMEpDNqOYcvTqmXQfaA2ZWAvmtVeQh6DAXYCNeXsao9juJ4BlMM0K9cyPK70IPV4iwPG7dskhBeEFntPCeM5w1EZVDggEAqDWfSbDD865dRf5w-sz-hz_asnhp8cbas5MGlLkRsVl3Gvls6VH-4DJbOKPumbqGvuUsmF9BbpX4IYb-apRRz40WefonLdNAAXBg44KlfdTDK0')" }}
                      />
                    </div>
                    <h3 className="text-on-surface font-headline-md text-xl font-bold mb-2">Fluid Micro-Interactions</h3>
                    <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">
                      Tactile button feedback, smooth spring curves, and delightful interactive states crafted for high engagement.
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold text-primary pt-3 border-t border-outline-variant/20">
                    <span>Tap or hover to flip</span>
                    <span className="material-symbols-outlined text-sm">cached</span>
                  </div>
                </div>
                <div className="flip-card-back p-6 sm:p-8 flex flex-col justify-center items-center text-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-3">public</span>
                  <h3 className="font-headline-md text-xl font-bold mb-3 text-primary">Pan-India Presence</h3>
                  <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                    Operating from Mumbai and Amravati, with regional presence in Chennai, Bangalore, and Pune to serve world-class modern enterprises.
                  </p>
                  <button onClick={(e) => { e.stopPropagation(); navigateTo(6); }} className="mt-5 px-4 py-2 rounded-full bg-primary text-on-primary text-xs font-bold hover:scale-105 transition-transform shadow-md">
                    Contact Our Team
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Banner Section */}
        <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 mt-24 sm:mt-32 mb-16 relative z-10">
          <div className="bg-gradient-to-r from-primary-container via-[#f7d6d6] to-primary-container rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col items-center text-center gap-6 relative overflow-hidden animate-up fade-in-up shadow-2xl border border-white/60">
            <div className="absolute top-[-50%] left-[-10%] w-72 sm:w-96 h-72 sm:h-96 bg-white/50 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-50%] right-[-10%] w-72 sm:w-96 h-72 sm:h-96 bg-[#ecbaba]/40 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md shadow-sm relative z-10">
              <span className="material-symbols-outlined text-primary text-sm font-bold">rocket_launch</span>
              <span className="text-primary font-bold text-xs uppercase tracking-wider">Fast Setup • Zero Friction</span>
            </div>

            <h2 className="text-on-primary-container font-display text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-3xl relative z-10">
              Ready to Transform Your Entire Digital Workspace?
            </h2>

            <p className="text-on-primary-container/85 font-body-lg text-sm sm:text-lg md:text-xl font-medium max-w-2xl relative z-10 leading-relaxed">
              Experience the unmatched harmony of productivity and design. Join top-performing teams using VibeConnect today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2 relative z-10 w-full sm:w-auto">
              <button 
                onClick={() => navigateTo(6)} 
                className="w-full sm:w-auto flex h-12 sm:h-14 px-8 sm:px-10 items-center justify-center rounded-full bg-primary text-on-primary font-bold text-base hover:bg-primary/90 transition-all hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 active:scale-95 cursor-pointer"
              >
                Schedule a Consultation
              </button>
              <button 
                onClick={() => navigateTo(5)} 
                className="w-full sm:w-auto flex h-12 sm:h-14 px-8 items-center justify-center rounded-full bg-white/70 hover:bg-white text-on-surface font-bold text-base transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Watch 3D Experience
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Shared Responsive Footer */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
