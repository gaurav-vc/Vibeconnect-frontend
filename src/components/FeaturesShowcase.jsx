import React, { useEffect } from 'react';
import Logo from './Logo';
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
    <div className="bg-background text-on-surface antialiased overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        {/* TopNavBar */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-surface-variant transition-all duration-300 shadow-md">
          <div className="px-4 md:px-10 flex flex-1 justify-center py-3">
            <div className="layout-content-container flex flex-col max-w-container-max w-full">
              <header className="flex items-center justify-between whitespace-nowrap">
                <div className="flex items-center gap-4 text-on-surface">
                  <Logo />
                </div>
                <div className="hidden md:flex flex-1 justify-end gap-8">
                  <div className="flex items-center gap-9">
                    <button onClick={() => navigateTo(1)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal">Home</button>
                    <button onClick={() => navigateTo(3)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal text-primary font-bold">Features</button>
                    <button onClick={() => navigateTo(6)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal">Contact Us</button>
                    <button onClick={() => navigateTo(7)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal">FAQ</button>
                    <button onClick={() => navigateTo(5)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal">Experience</button>
                  </div>
                  <button onClick={() => navigateTo(2)} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary-container text-on-primary-container text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-sm hover:shadow-md">
                    <span className="truncate">Sign Up</span>
                  </button>
                </div>
              </header>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 w-full pt-20">
          {/* Hero Section */}
          <section className="relative w-full min-h-[870px] flex items-center justify-center px-4 md:px-10 py-20 parallax-section overflow-hidden" style={{ backgroundImage: "linear-gradient(rgba(26, 28, 26, 0.4), rgba(47, 19, 20, 0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCWeE4mK_30vd7tomUa9DNPc_adzVadNdvr828iv1rL-prnsf_0I1bUNEnV0_Vr_x140ss5IQIfiOWUQXzQuGXddeVA8083WArvZwbeEjjU-nFiX0i2QjUokCEFzEgo6Bk1M8Zz_zL55teGh9dTujAH9f0eLrbHBkNITW2fOAiP7n1EDk6HaOQQA7oPXyALJStdCbkiAsqZkMStZbKHkghsON3hXZ0XMFppEoMBtYgJuaA3c-1P6Q1')" }}>
            <div className="absolute inset-0 bg-pattern opacity-20"></div>
            <div className="relative z-10 flex flex-col items-center justify-center gap-8 text-center max-w-4xl mx-auto fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container/20 backdrop-blur-md border border-surface/30 mb-4">
                <span className="size-2 rounded-full bg-primary-container animate-pulse"></span>
                <span className="text-on-primary text-label-sm uppercase tracking-widest font-semibold">Next Generation</span>
              </div>
              <h1 className="text-on-primary text-5xl md:text-7xl font-extrabold leading-tight tracking-tight display-text text-balance">
                Experience the <span className="text-primary-container relative inline-block">Future
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary-container opacity-60" preserveAspectRatio="none" viewBox="0 0 100 10">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
                  </svg>
                </span>
              </h1>
              <p className="text-surface-container text-lg md:text-xl font-normal leading-relaxed max-w-2xl text-balance opacity-90">
                Discover the amazing features that set us apart. A premium suite of tools designed to elevate your workflow and unleash your creative potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto justify-center">
                <button onClick={() => navigateTo(2)} className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-primary-container text-on-primary-container text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-glow group">
                  <span>Get Started</span>
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <button onClick={() => navigateTo(2)} className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-transparent border-2 border-surface-container text-on-primary text-base font-bold transition-all duration-300 hover:bg-surface-container/10">
                  <span>View Demo</span>
                </button>
              </div>
            </div>
          </section>

          {/* Feature Showcase Section */}
          <section className="py-24 px-4 md:px-10 bg-surface relative z-10">
            <div className="max-w-container-max mx-auto">
              <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1 flex flex-col gap-6 fade-in-up">
                  <div className="w-12 h-1 bg-primary rounded-full mb-2"></div>
                  <h2 className="text-on-surface text-4xl md:text-5xl font-extrabold leading-tight tracking-tight display-text">
                    Unleash Your <span className="text-gradient">Potential</span>
                  </h2>
                  <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                    Our suite of powerful tools is meticulously designed to elevate your workflow, blending intuitive interfaces with deep, actionable insights.
                  </p>
                  <ul className="flex flex-col gap-4 mt-4">
                    <li className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0 size-6 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                        <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                      </div>
                      <span className="text-on-surface font-medium text-body-lg">Lightning fast performance</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0 size-6 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                        <span className="material-symbols-outlined text-[16px] font-bold">check</span>
                      </div>
                      <span className="text-on-surface font-medium text-body-lg">Enterprise-grade security</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary-container/30 blur-[100px] rounded-full z-0 pointer-events-none"></div>
                  <div className="hover-shine-card glass-card rounded-2xl p-6 flex flex-col gap-4 fade-in-up cursor-pointer" style={{ transitionDelay: '100ms' }}>
                    <div className="shine-image w-full aspect-video rounded-xl bg-cover bg-center overflow-hidden relative group" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxNH5TG92WQeIFgdXemTX2_XDUEpoh-0uzB8A0skulf53PztbLpTgKnwlz_N8fYXvb888VELOIO3-eB_e1SiZ4tNzWP331Cyr4nDnlvX-d63Nry3QYuhTTiNct0tGUMi195Kn_bbthdx1L_VQ4015dgGpr7siXr4Xsr0i54xZpK8wffjHjb5Opzh-p1bNYu-H9XWaH0fObFGToFIfFGkFFUUZdq4UvSe21KkWUIXfbfh4MPPfsamR2')" }}>
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-on-surface text-xl font-bold mb-2">Intuitive Design</h3>
                      <p className="text-on-surface-variant text-sm">A premium glass-like interface that's easy to use and beautiful to look at.</p>
                    </div>
                  </div>
                  <div className="hover-shine-card glass-card rounded-2xl p-6 flex flex-col gap-4 translate-y-0 sm:translate-y-8 fade-in-up cursor-pointer" style={{ transitionDelay: '200ms' }}>
                    <div className="shine-image w-full aspect-video rounded-xl bg-cover bg-center overflow-hidden relative group" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3Rp5Rk1aEc_WvaoqKuXlou2NRVzvuKOvkx_AX6Q8T85oC7pFX3226MDnGj7w7XZVeHklBByilIuOpA8bK7BrNHNr4UP0cToZOiHFdSjSZyAiRB4fyBgggMQhrRI5b0viasMJ2K8D7XGyvPZ5Pv_VDSeSt93SEzAhujj751HSCnQW4Jt0WLgQPEwwJayWAin_zvwveX1LMBnRSw3z_PdI2zsy4MrcuLT4Xhi8vhB9URzLAYJYw6Tla')" }}>
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-on-surface text-xl font-bold mb-2">Advanced Analytics</h3>
                      <p className="text-on-surface-variant text-sm">Gain deep insights with our comprehensive analytics tools.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Features Accordion Section */}
          <section className="py-24 px-4 md:px-10 bg-surface-container-lowest relative z-10">
            <div className="max-w-container-max mx-auto">
              <div className="flex flex-col items-center text-center gap-4 mb-16 fade-in-up">
                <h2 className="text-on-surface text-4xl md:text-5xl font-extrabold leading-tight display-text">
                  Comprehensive <span className="text-primary italic">Capabilities</span>
                </h2>
                <p className="text-on-surface-variant text-lg max-w-2xl">
                  Dive deep into the robust features designed to empower your entire organization.
                </p>
              </div>
              <FeaturesAccordion />
            </div>
          </section>

          {/* Features Grid Section */}
          <section className="py-24 px-4 md:px-10 bg-surface-container-low relative">
            <div className="max-w-container-max mx-auto flex flex-col gap-16">
              <div className="flex flex-col items-center text-center gap-4 fade-in-up">
                <h2 className="text-on-surface text-4xl md:text-5xl font-extrabold leading-tight display-text">More to <span className="text-primary italic">Love</span></h2>
                <p className="text-on-surface-variant text-lg max-w-2xl">Explore even more ways we can help you succeed with our comprehensive toolset.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="hover-glow-card glass-card p-8 rounded-2xl flex flex-col items-start gap-6 fade-in-up cursor-pointer" style={{ transitionDelay: '0ms' }}>
                  <div className="glow-icon-wrapper size-14 rounded-2xl bg-surface shadow-sm flex items-center justify-center text-primary border border-surface-variant relative z-10">
                    <span className="material-symbols-outlined text-[28px]">headset</span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-on-surface text-xl font-bold mb-2">24/7 Support</h3>
                    <p className="text-on-surface-variant text-body-md leading-relaxed">Our dedicated team is here to help you anytime, anywhere, ensuring you never miss a beat.</p>
                  </div>
                </div>
                <div className="hover-glow-card glass-card p-8 rounded-2xl flex flex-col items-start gap-6 fade-in-up cursor-pointer" style={{ transitionDelay: '100ms' }}>
                  <div className="glow-icon-wrapper size-14 rounded-2xl bg-surface shadow-sm flex items-center justify-center text-primary border border-surface-variant relative z-10">
                    <span className="material-symbols-outlined text-[28px]">lock</span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-on-surface text-xl font-bold mb-2">Secure Data</h3>
                    <p className="text-on-surface-variant text-body-md leading-relaxed">Your information is protected by industry-leading encryption and advanced security protocols.</p>
                  </div>
                </div>
                <div className="hover-glow-card glass-card p-8 rounded-2xl flex flex-col items-start gap-6 fade-in-up cursor-pointer" style={{ transitionDelay: '200ms' }}>
                  <div className="glow-icon-wrapper size-14 rounded-2xl bg-surface shadow-sm flex items-center justify-center text-primary border border-surface-variant relative z-10">
                    <span className="material-symbols-outlined text-[28px]">cloud</span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-on-surface text-xl font-bold mb-2">Cloud Storage</h3>
                    <p className="text-on-surface-variant text-body-md leading-relaxed">Seamlessly sync and access your files from any device with our robust cloud infrastructure.</p>
                  </div>
                </div>
                <div className="hover-glow-card glass-card p-8 rounded-2xl flex flex-col items-start gap-6 fade-in-up cursor-pointer" style={{ transitionDelay: '300ms' }}>
                  <div className="glow-icon-wrapper size-14 rounded-2xl bg-surface shadow-sm flex items-center justify-center text-primary border border-surface-variant relative z-10">
                    <span className="material-symbols-outlined text-[28px]">tune</span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-on-surface text-xl font-bold mb-2">Customizable</h3>
                    <p className="text-on-surface-variant text-body-md leading-relaxed">Tailor the platform to fit your unique workflow with extensive configuration options.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-32 px-4 md:px-10 bg-surface relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-surface-variant/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
            <div className="max-w-4xl mx-auto relative z-10 glass-card rounded-[2rem] p-10 md:p-16 border border-primary-container/50 text-center shadow-xl flex flex-col items-center gap-8 fade-in-up">
              <h2 className="text-on-surface text-4xl md:text-6xl font-extrabold display-text leading-tight">
                Ready to <span className="text-primary relative whitespace-nowrap">dive in?
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary opacity-30" preserveAspectRatio="none" viewBox="0 0 100 10">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
                  </svg>
                </span>
              </h2>
              <p className="text-on-surface-variant text-xl max-w-2xl text-balance">
                Join thousands of users who have already transformed their workflow. Start your journey today.
              </p>
              <button onClick={() => navigateTo(2)} className="mt-4 flex cursor-pointer items-center justify-center rounded-full h-16 px-10 bg-primary text-on-primary text-lg font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 group">
                <span>Start Your Free Trial</span>
                <span className="material-symbols-outlined ml-3 group-hover:translate-x-2 transition-transform">rocket_launch</span>
              </button>
            </div>
          </section>
        </main>
        
        {/* Shared Footer */}
        <Footer navigateTo={navigateTo} />
      </div>
    </div>
  );
}
