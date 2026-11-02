import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FeaturesAccordion from './FeaturesAccordion';

export default function FeaturesShowcase({ navigateTo }) {
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

    document.querySelectorAll('.fade-in-up, .animate-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background text-on-surface antialiased overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container flex flex-col min-h-screen">
      {/* Shared Responsive Navbar */}
      <Navbar currentPage={3} navigateTo={navigateTo} />

      {/* Main Content */}
      <main className="flex-1 w-full pt-16 sm:pt-20">
        
        {/* Hero Section */}
        <section 
          className="relative w-full min-h-[550px] sm:min-h-[680px] lg:min-h-[780px] flex items-center justify-center px-4 sm:px-6 md:px-10 py-16 sm:py-24 parallax-section overflow-hidden" 
          style={{ backgroundImage: "linear-gradient(rgba(26, 28, 26, 0.5), rgba(47, 19, 20, 0.7)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCWeE4mK_30vd7tomUa9DNPc_adzVadNdvr828iv1rL-prnsf_0I1bUNEnV0_Vr_x140ss5IQIfiOWUQXzQuGXddeVA8083WArvZwbeEjjU-nFiX0i2QjUokCEFzEgo6Bk1M8Zz_zL55teGh9dTujAH9f0eLrbHBkNITW2fOAiP7n1EDk6HaOQQA7oPXyALJStdCbkiAsqZkMStZbKHkghsON3hXZ0XMFppEoMBtYgJuaA3c-1P6Q1')" }}
        >
          <div className="absolute inset-0 bg-pattern opacity-15" />
          <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8 text-center max-w-4xl mx-auto px-4 fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container/30 backdrop-blur-md border border-white/20">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse" />
              <span className="text-white text-xs sm:text-sm uppercase tracking-widest font-bold">Comprehensive Platform</span>
            </div>

            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] tracking-tight drop-shadow-md">
              Experience the{' '}
              <span className="text-primary-container relative inline-block">
                Future
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary-container opacity-60" preserveAspectRatio="none" viewBox="0 0 100 10">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
            </h1>

            <p className="text-white/90 text-sm sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl drop-shadow">
              Discover the breakthrough features that set VibeConnect apart. A unified suite of enterprise tools built to supercharge productivity and elevate team connection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto justify-center">
              <button 
                onClick={() => navigateTo(2)} 
                className="w-full sm:w-auto flex min-w-[180px] cursor-pointer items-center justify-center rounded-full h-12 sm:h-14 px-8 bg-primary-container text-on-primary-container text-sm sm:text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-glow group shadow-lg"
              >
                <span>Launch Workspace</span>
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button 
                onClick={() => navigateTo(5)} 
                className="w-full sm:w-auto flex min-w-[180px] cursor-pointer items-center justify-center rounded-full h-12 sm:h-14 px-8 bg-black/40 backdrop-blur-md border border-white/30 text-white text-sm sm:text-base font-bold transition-all duration-300 hover:bg-white/20"
              >
                <span>View 3D Demo</span>
              </button>
            </div>
          </div>
        </section>

        {/* Feature Spotlight Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-12 bg-surface relative z-10">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-6 fade-in-up">
                <div className="w-12 h-1 bg-primary rounded-full mb-2" />
                <h2 className="text-on-surface text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  Unleash Your Team's <span className="text-gradient">Full Potential</span>
                </h2>
                <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-xl">
                  Our suite of enterprise tools is meticulously designed to eliminate digital friction, seamlessly blending responsive interfaces with actionable intelligence.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div className="p-4 rounded-2xl bg-surface-container-low/70 border border-outline-variant/30 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-sm font-bold">bolt</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-on-surface">Sub-Millisecond Sync</h4>
                      <p className="text-xs text-on-surface-variant mt-1">Instant updates across all desktop and mobile devices.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-container-low/70 border border-outline-variant/30 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-sm font-bold">shield</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-on-surface">Bank-Grade Privacy</h4>
                      <p className="text-xs text-on-surface-variant mt-1">End-to-end 256-bit encryption with SOC2 compliance.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column Cards */}
              <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary-container/30 blur-[100px] rounded-full z-0 pointer-events-none" />
                
                <div className="hover-shine-card glass-card rounded-2xl p-5 sm:p-6 flex flex-col gap-4 fade-in-up cursor-pointer border border-outline-variant/40 shadow-lg">
                  <div className="shine-image w-full aspect-video rounded-xl bg-cover bg-center overflow-hidden relative group" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxNH5TG92WQeIFgdXemTX2_XDUEpoh-0uzB8A0skulf53PztbLpTgKnwlz_N8fYXvb888VELOIO3-eB_e1SiZ4tNzWP331Cyr4nDnlvX-d63Nry3QYuhTTiNct0tGUMi195Kn_bbthdx1L_VQ4015dgGpr7siXr4Xsr0i54xZpK8wffjHjb5Opzh-p1bNYu-H9XWaH0fObFGToFIfFGkFFUUZdq4UvSe21KkWUIXfbfh4MPPfsamR2')" }}>
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-on-surface text-lg sm:text-xl font-bold mb-1">Intuitive Ergonomics</h3>
                    <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">A modern glass-like workspace that feels lightweight, effortless, and stunning on every device.</p>
                  </div>
                </div>

                <div className="hover-shine-card glass-card rounded-2xl p-5 sm:p-6 flex flex-col gap-4 translate-y-0 sm:translate-y-6 fade-in-up cursor-pointer border border-outline-variant/40 shadow-lg">
                  <div className="shine-image w-full aspect-video rounded-xl bg-cover bg-center overflow-hidden relative group" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3Rp5Rk1aEc_WvaoqKuXlou2NRVzvuKOvkx_AX6Q8T85oC7pFX3226MDnGj7w7XZVeHklBByilIuOpA8bK7BrNHNr4UP0cToZOiHFdSjSZyAiRB4fyBgggMQhrRI5b0viasMJ2K8D7XGyvPZ5Pv_VDSeSt93SEzAhujj751HSCnQW4Jt0WLgQPEwwJayWAin_zvwveX1LMBnRSw3z_PdI2zsy4MrcuLT4Xhi8vhB9URzLAYJYw6Tla')" }}>
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-on-surface text-lg sm:text-xl font-bold mb-1">Executive Analytics</h3>
                    <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">Gain instant visibility into sprint velocity, resource utilization, and key KPI trends.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Interactive Features Accordion Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-12 bg-surface-container-lowest relative z-10">
          <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col items-center text-center gap-4 mb-12 sm:mb-16 fade-in-up">
              <span className="text-xs uppercase tracking-widest font-bold text-primary px-3.5 py-1 rounded-full bg-primary-container/40">
                10 Core Modular Engines
              </span>
              <h2 className="text-on-surface text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                Comprehensive <span className="text-primary italic">Capabilities</span>
              </h2>
              <p className="text-on-surface-variant text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                Dive deep into the robust modules designed to empower your entire company. Tap each feature to uncover details.
              </p>
            </div>
            <FeaturesAccordion />
          </div>
        </section>

        {/* More to Love Grid Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-12 bg-surface-container-low relative">
          <div className="max-w-[1600px] mx-auto flex flex-col gap-12 sm:gap-16">
            <div className="flex flex-col items-center text-center gap-4 fade-in-up">
              <h2 className="text-on-surface text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                More to <span className="text-primary italic">Love</span>
              </h2>
              <p className="text-on-surface-variant text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                Explore even more reasons high-growth organizations rely on VibeConnect daily.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="hover-glow-card glass-card p-6 sm:p-8 rounded-2xl flex flex-col items-start gap-4 fade-in-up cursor-pointer border border-outline-variant/30 shadow-md">
                <div className="glow-icon-wrapper size-12 sm:size-14 rounded-2xl bg-surface shadow-sm flex items-center justify-center text-primary border border-surface-variant relative z-10">
                  <span className="material-symbols-outlined text-[26px] sm:text-[28px]">headset_mic</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-on-surface text-lg sm:text-xl font-bold mb-2">24/7 Dedicated Support</h3>
                  <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">Our dedicated engineering team is here anytime to ensure your company never experiences downtime.</p>
                </div>
              </div>

              <div className="hover-glow-card glass-card p-6 sm:p-8 rounded-2xl flex flex-col items-start gap-4 fade-in-up cursor-pointer border border-outline-variant/30 shadow-md">
                <div className="glow-icon-wrapper size-12 sm:size-14 rounded-2xl bg-surface shadow-sm flex items-center justify-center text-primary border border-surface-variant relative z-10">
                  <span className="material-symbols-outlined text-[26px] sm:text-[28px]">lock</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-on-surface text-lg sm:text-xl font-bold mb-2">Zero-Trust Security</h3>
                  <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">Granular permissions, multi-factor authentication, and tamper-proof audit trails for total peace of mind.</p>
                </div>
              </div>

              <div className="hover-glow-card glass-card p-6 sm:p-8 rounded-2xl flex flex-col items-start gap-4 fade-in-up cursor-pointer border border-outline-variant/30 shadow-md">
                <div className="glow-icon-wrapper size-12 sm:size-14 rounded-2xl bg-surface shadow-sm flex items-center justify-center text-primary border border-surface-variant relative z-10">
                  <span className="material-symbols-outlined text-[26px] sm:text-[28px]">cloud_sync</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-on-surface text-lg sm:text-xl font-bold mb-2">Continuous Sync</h3>
                  <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">Seamlessly transition from your phone on the commute to your desktop workstation with zero lag.</p>
                </div>
              </div>

              <div className="hover-glow-card glass-card p-6 sm:p-8 rounded-2xl flex flex-col items-start gap-4 fade-in-up cursor-pointer border border-outline-variant/30 shadow-md">
                <div className="glow-icon-wrapper size-12 sm:size-14 rounded-2xl bg-surface shadow-sm flex items-center justify-center text-primary border border-surface-variant relative z-10">
                  <span className="material-symbols-outlined text-[26px] sm:text-[28px]">tune</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-on-surface text-lg sm:text-xl font-bold mb-2">Bespoke Customization</h3>
                  <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">Tailor fields, dashboards, automated notifications, and UI branding to match your company workflow.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 bg-surface relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-primary-container/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10 glass-card rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 md:p-16 border border-primary-container/50 text-center shadow-2xl flex flex-col items-center gap-6 fade-in-up">
            <h2 className="text-on-surface text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Ready to <span className="text-primary relative inline-block">Elevate Your Team?</span>
            </h2>
            <p className="text-on-surface-variant text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              Join forward-thinking companies already achieving operational excellence with VibeConnect.
            </p>
            <button 
              onClick={() => navigateTo(2)} 
              className="mt-2 flex cursor-pointer items-center justify-center rounded-full h-12 sm:h-14 px-8 sm:px-10 bg-primary text-on-primary text-sm sm:text-base font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 group active:scale-95"
            >
              <span>Explore The Dashboard</span>
              <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">rocket_launch</span>
            </button>
          </div>
        </section>

      </main>
      
      {/* Shared Responsive Footer */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
