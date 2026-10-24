import React, { useEffect } from 'react';
import Logo from './Logo';
import Footer from './Footer';

export default function BrandHero({ navigateTo }) {
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

  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden min-h-screen">
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
                    <button onClick={() => navigateTo(1)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal text-primary font-bold">Home</button>
                    <button onClick={() => navigateTo(3)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal">Features</button>
                    <button onClick={() => navigateTo(6)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal">Contact Us</button>
                    <button onClick={() => navigateTo(7)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal">FAQ</button>
                    <button onClick={() => navigateTo(5)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal">Experience</button>
                  </div>
                  <button onClick={() => navigateTo(2)} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary-container hover:bg-primary-fixed transition-colors text-on-primary-container text-sm font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Sign Up</span>
                  </button>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative pt-10 pb-24" style={{
        background: 'radial-gradient(circle at top right, rgba(244, 194, 194, 0.2) 0%, rgba(250, 249, 246, 0) 50%), radial-gradient(circle at bottom left, rgba(236, 186, 186, 0.2) 0%, rgba(250, 249, 246, 0) 50%)'
      }}>
        {/* Hero Section */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16 relative z-10">
          <div className="flex min-h-[600px] flex-col gap-10 lg:flex-row items-center justify-between animate-up fade-in-up">
            <div className="flex flex-col gap-6 lg:w-1/2 z-10">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-[-0.03em] drop-shadow-sm" style={{ color: '#7b5455' }}>
                YOUR ULTIMATE <br/><span style={{ color: '#7b5455' }}>WORKSPACE COMPANION</span>
              </h1>
              <h2 className="font-body-lg text-lg md:text-xl font-medium leading-relaxed max-w-lg mt-2 tracking-wide uppercase drop-shadow-sm" style={{ color: '#7b5455' }}>
                Unmatched Elegance
              </h2>
              <div className="flex gap-4 mt-4">
                <button onClick={() => navigateTo(3)} className="flex h-12 px-8 items-center justify-center rounded-full bg-primary text-on-primary font-bold text-base hover:bg-on-primary-container transition-all hover:shadow-lg hover:-translate-y-0.5">
                  Get Started
                </button>
                <button onClick={() => navigateTo(3)} className="flex h-12 px-8 items-center justify-center rounded-full border border-outline-variant bg-transparent text-on-surface font-semibold text-base hover:bg-surface-container-low transition-all">
                  View Demo
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 relative w-full h-[400px] lg:h-[600px]">
              <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-cover bg-center rounded-3xl object-cover transition-all duration-300 hover:-translate-y-1 hover:scale-105 shadow-xl" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7097M8gp2Hcgt-DUidpEeyjjhacfceGHtfGgHEbsQ4rg2s8iykio2msXAJGWhekzoB5E2t2th1pIugpLuJHMHmohlPFBkDAlfX9sUGTVqc4F5XVW-FIqoFfmlfFW4DaKSS_Xiow-ApgpfcksGjTyss7rMba4b1YHqViVcusVvFtHqth_IseMjEa_QhKKbl7xWGD_BbrCGrsMfoTRx7A6wAheolIej7WLZOWhbVAj63kU68T4WZvGk')" }}></div>
              </div>
              <div className="absolute -bottom-10 -left-10 lg:-left-20 glass-card p-6 rounded-2xl z-10 hidden md:flex flex-col gap-3 animate-up fade-in-up" style={{ transitionDelay: '0.2s' }}>
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-primary-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">trending_up</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Growth Rate</p>
                    <p className="text-xs text-on-surface-variant">+127% this month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16 mt-32 relative z-10">
          <div className="flex flex-col gap-6 text-center items-center mb-16 animate-up fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight tracking-[-0.02em] max-w-2xl" style={{ color: '#7b5455' }}>
              Unmatched Elegance
            </h2>
            <p className="text-on-surface-variant font-body-lg text-lg leading-relaxed max-w-xl">
              Discover features designed for the elite. Every interaction is crafted with meticulous attention to detail.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flip-card-container animate-up fade-in-up group" style={{ transitionDelay: '0.1s' }} onClick={() => {}}>
              <div className="flip-card-inner">
                <div className="flip-card-front p-6 flex flex-col gap-6">
                  <div className="w-full h-48 rounded-2xl overflow-hidden relative shrink-0">
                    <div className="w-full h-full bg-cover bg-center absolute inset-0 transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBahWaCE-YMdpnb5OGc2hHlF9xy6sUVd5dnwLpNxb80lIZ-AYe4eKCtfNTau33un2UiVcJ704Kr-nizUhglmAUS-dpdDCmYtefHWcyc0vl-lWHmdAqRbLgjcac7WH2NAro0Tpp9ZVMUX1p0wuFWBobZQ0BpqxDeyvLzrQg_zTDOC4t4RvmCNZb_ZSnAWdP9jMQoGoMaB3iReB_4kTgLAnZRDl1BimfhdC9BxBzPmABAYRz7VYAdg4RX')" }}></div>
                  </div>
                  <div>
                    <h3 className="text-on-surface font-headline-md text-xl font-bold mb-2">Glassmorphism</h3>
                    <p className="text-on-surface-variant font-body-md leading-relaxed">Subtle translucency and depth creating a modern, airy interface.</p>
                  </div>
                </div>
                <div className="flip-card-back">
                  <h3>Digielves Tech Wizards</h3>
                  <p>We are a forward-thinking tech company dedicated to crafting elite digital experiences and pushing the boundaries of web design.</p>
                </div>
              </div>
            </div>
            <div className="flip-card-container animate-up fade-in-up group" style={{ transitionDelay: '0.2s' }} onClick={() => {}}>
              <div className="flip-card-inner">
                <div className="flip-card-front p-6 flex flex-col gap-6">
                  <div className="w-full h-48 rounded-2xl overflow-hidden relative shrink-0">
                    <div className="w-full h-full bg-cover bg-center absolute inset-0 transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtN07zX1yQV7uUAaG8KO9JCEjSw8wXz-9jR_2CxM_e_bFbiXv-oZhzq7T7V9KgR89IwSHqiVkdmiaCh7kbLZN_O1mSJAFrC7GHE9AVrAFb_nBFGiSwcKv4dfwmUD9U_GXvc3poURfg8oVlRcP5UZLaVROKSHXxEzm2mSrCBF2b7gL2lFEHoREbsVYp4s_PBHr71Bb8ICRkTCFL8JLgaFhfbV3knmAknYK8PRUgYG3v75DiTep-ipMT')" }}></div>
                  </div>
                  <div>
                    <h3 className="text-on-surface font-headline-md text-xl font-bold mb-2">Refined Typography</h3>
                    <p className="text-on-surface-variant font-body-md leading-relaxed">High-end type scale with perfect proportions and readability.</p>
                  </div>
                </div>
                <div className="flip-card-back">
                  <h3>Our Mission</h3>
                  <p>Elevating brands through meticulous design, robust engineering, and a relentless pursuit of perfection in every pixel.</p>
                </div>
              </div>
            </div>
            <div className="flip-card-container animate-up fade-in-up group" style={{ transitionDelay: '0.3s' }} onClick={() => {}}>
              <div className="flip-card-inner">
                <div className="flip-card-front p-6 flex flex-col gap-6">
                  <div className="w-full h-48 rounded-2xl overflow-hidden relative shrink-0">
                    <div className="w-full h-full bg-cover bg-center absolute inset-0 transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2joff5hoUWA6npb3IoBcIi2151CZUNJqYxDObBS2YPMEpDNqOYcvTqmXQfaA2ZWAvmtVeQh6DAXYCNeXsao9juJ4BlMM0K9cyPK70IPV4iwPG7dskhBeEFntPCeM5w1EZVDggEAqDWfSbDD865dRf5w-sz-hz_asnhp8cbas5MGlLkRsVl3Gvls6VH-4DJbOKPumbqGvuUsmF9BbpX4IYb-apRRz40WefonLdNAAXBg44KlfdTDK0')" }}></div>
                  </div>
                  <div>
                    <h3 className="text-on-surface font-headline-md text-xl font-bold mb-2">Micro-interactions</h3>
                    <p className="text-on-surface-variant font-body-md leading-relaxed">Engaging hover states and fluid entrance animations.</p>
                  </div>
                </div>
                <div className="flip-card-back">
                  <h3>Global Presence</h3>
                  <p>Operating from Mumbai and Amravati, with a strong presence in Chennai, Bangalore, and Pune to serve a diverse clientele.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-12 xl:px-16 mt-32 mb-20 relative z-10">
          <div className="bg-primary-container rounded-[2.5rem] p-10 md:p-20 flex flex-col items-center text-center gap-8 relative overflow-hidden animate-up fade-in-up shadow-2xl">
            <div className="absolute top-[-50%] left-[-10%] w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none"></div>
            <h2 className="text-on-primary-container font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-[-0.02em] max-w-2xl relative z-10">
              Ready to transform your web presence?
            </h2>
            <p className="text-on-primary-container/80 font-body-lg text-lg md:text-xl font-medium max-w-xl relative z-10">
              Join the top 1% today. Elevate your brand with design that speaks volumes.
            </p>
            <button onClick={() => navigateTo(6)} className="mt-4 flex h-14 px-10 items-center justify-center rounded-full bg-primary text-on-primary font-bold text-lg hover:bg-on-primary-fixed transition-all hover:shadow-xl hover:-translate-y-1 relative z-10">
              Contact Us
            </button>
          </div>
        </section>
      </main>

      {/* Shared Footer */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
