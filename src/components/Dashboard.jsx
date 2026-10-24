import React, { useEffect } from 'react';

export default function Dashboard({ navigateTo }) {
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
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex overflow-hidden selection:bg-primary/20 selection:text-primary relative antialiased">
      {/* Decorative Background Elements */}
      <div className="absolute right-[10%] top-[-10%] w-[600px] h-[600px] bg-primary-container/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute left-[20%] bottom-[-20%] w-[800px] h-[800px] bg-tertiary-container/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      
      {/* SideNavBar */}
      <nav className="hidden md:flex h-screen w-72 fixed left-0 top-0 bg-surface/50 backdrop-blur-3xl border-r border-outline-variant/20 flex-col py-8 z-50">
        <div className="px-8 mb-10 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-on-primary shadow-glow">
            <span className="material-symbols-outlined text-sm font-bold">layers</span>
          </div>
          <div>
            <h1 className="text-headline-md font-headline-md font-bold text-on-surface leading-none">Vibe Space</h1>
            <p className="text-label-sm font-label-sm text-on-surface-variant mt-1 tracking-wider">PREMIUM</p>
          </div>
        </div>
        <div className="px-6 pb-8">
          <button className="w-full bg-surface-container-highest hover:bg-primary hover:text-on-primary transition-all duration-300 text-on-surface py-3.5 rounded-2xl font-label-md flex justify-center items-center gap-2 shadow-sm hover:shadow-glow group">
            <span className="material-symbols-outlined transition-transform group-hover:rotate-90 duration-300" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
            New Project
          </button>
        </div>
        <div className="flex-1 overflow-y-auto space-y-2">
          <button className="w-full nav-item active border-none outline-none text-left">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
            Dashboard
          </button>
          <button className="w-full nav-item border-none outline-none text-left hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined">folder_open</span>
            Projects
          </button>
          <button className="w-full nav-item border-none outline-none text-left hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined">groups</span>
            Team
          </button>
          <button onClick={() => navigateTo(3)} className="w-full nav-item border-none outline-none text-left hover:bg-surface-container-low transition-colors text-primary font-semibold">
            <span className="material-symbols-outlined">insights</span>
            Next Page
          </button>
          <button onClick={() => navigateTo(6)} className="w-full nav-item border-none outline-none text-left hover:bg-surface-container-low transition-colors text-tertiary font-semibold">
            <span className="material-symbols-outlined">contact_support</span>
            Contact Us
          </button>
          <button onClick={() => navigateTo(7)} className="w-full nav-item border-none outline-none text-left hover:bg-surface-container-low transition-colors text-tertiary font-semibold">
            <span className="material-symbols-outlined">help_center</span>
            FAQ
          </button>
          <button onClick={() => navigateTo(1)} className="w-full nav-item border-none outline-none text-left hover:bg-surface-container-low transition-colors text-secondary font-semibold">
            <span className="material-symbols-outlined">arrow_back</span>
            Prev Page
          </button>
        </div>
        <div className="pt-6 border-t border-outline-variant/20 mx-6 space-y-2 mb-6">
          <button className="w-full nav-item border-none outline-none text-left">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </button>
        </div>
        <div className="px-8 pt-4 pb-2 flex items-center gap-4 bg-surface-container-lowest/50 rounded-2xl mx-4 border border-outline-variant/10 shadow-sm">
          <img alt="User Profile" className="w-10 h-10 rounded-full border-2 border-surface object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkfFz8asXjWZVTJMvpJpbkg_lABFNhBGLOu7bdaHeVSZ4Ept3RiyHJCrceX7Y3_XuY5UsyH9SADG5HDLQuqLbItda6bde0Ov4qjz-rSayVCUhOK4IL-Nlod9gE_WZe0L384cGHnbEe2RyOSntMh3--_qwnuDazRzsfK_1CQGpLMW2mItLPZn5FuxAsIPUWjg_89X64AanyaOdvXAR084u_hEmYai3UNE1jFE7XcG46Ztw8uohUV0jm"/>
          <div>
            <p className="text-label-md font-label-md text-on-surface font-semibold">Alex Mercer</p>
            <p className="text-label-sm font-label-sm text-on-surface-variant">Admin</p>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-72 relative z-10 h-screen overflow-y-auto bg-surface-bright/50">
        <header className="sticky top-0 z-40 bg-surface-bright/80 backdrop-blur-2xl border-b border-outline-variant/10 px-margin-mobile md:px-margin-desktop py-5 flex justify-between items-center transition-all duration-300">
          <div className="md:hidden flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined text-sm font-bold">layers</span>
            </div>
            <span className="text-headline-md font-headline-md font-bold text-on-surface">Vibe</span>
          </div>
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60 group-focus-within:text-primary transition-colors">search</span>
              <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-2xl py-2.5 pl-12 pr-4 text-body-md font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-300 shadow-sm" placeholder="Search projects, tasks, or command (⌘K)..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-5 ml-4">
            <button className="w-10 h-10 rounded-full bg-surface-container-lowest border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all duration-300 relative shadow-sm hover:shadow-md">
              <span className="material-symbols-outlined text-xl">notifications</span>
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full ring-2 ring-surface-container-lowest"></span>
            </button>
          </div>
        </header>

        {/* Dashboard Canvas */}
        <div className="p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto space-y-8 pb-20">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-2">
            <div className="fade-in-up">
              <h2 className="text-display-lg-mobile md:text-display font-display-lg-mobile md:font-display text-on-surface tracking-tight">Command Center</h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant mt-2 max-w-2xl">Good morning, Alex. Your workspace is operating at peak efficiency today.</p>
            </div>
            <div className="hidden sm:flex gap-3 fade-in-up" style={{ transitionDelay: '0.1s' }}>
              <button className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface py-2.5 px-5 rounded-2xl font-label-md hover:bg-surface-container-low hover:border-outline-variant/50 transition-all duration-300 shadow-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">tune</span> Customize
              </button>
              <button className="bg-primary text-on-primary py-2.5 px-5 rounded-2xl font-label-md hover:bg-primary-fixed hover:text-on-primary-fixed-variant transition-all duration-300 shadow-glow flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">download</span> Export
              </button>
            </div>
          </div>

          {/* Bento Grid Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel glass-panel-hover p-7 flex flex-col justify-between relative overflow-hidden group fade-in-up" style={{ transitionDelay: '0.2s' }}>
              <div className="absolute -right-6 -top-6 w-40 h-40 bg-gradient-to-br from-primary-container/40 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Active Projects</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <h3 className="text-display font-display text-on-surface">24</h3>
                    <span className="flex items-center text-primary bg-primary/10 px-2 py-1 rounded-full text-label-sm font-bold">
                      <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span> +12%
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/20 flex items-center justify-center text-primary group-hover:rotate-12 transition-transform duration-300">
                  <span className="material-symbols-outlined">folder_special</span>
                </div>
              </div>
              <div className="w-full h-12 flex items-end gap-1 relative z-10">
                <div className="w-full bg-primary/20 h-[20%] rounded-t-sm"></div>
                <div className="w-full bg-primary/20 h-[35%] rounded-t-sm"></div>
                <div className="w-full bg-primary/20 h-[25%] rounded-t-sm"></div>
                <div className="w-full bg-primary/40 h-[60%] rounded-t-sm"></div>
                <div className="w-full bg-primary/20 h-[40%] rounded-t-sm"></div>
                <div className="w-full bg-primary/60 h-[80%] rounded-t-sm"></div>
                <div className="w-full bg-primary h-[100%] rounded-t-sm relative shadow-[0_0_10px_rgba(244,194,194,0.8)]">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_5px_rgba(0,0,0,0.3)]"></div>
                </div>
              </div>
            </div>

            <div className="glass-panel glass-panel-hover p-7 flex flex-col justify-between relative overflow-hidden group fade-in-up" style={{ transitionDelay: '0.3s' }}>
              <div className="absolute -right-6 -top-6 w-40 h-40 bg-gradient-to-br from-tertiary-container/40 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Team Velocity</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <h3 className="text-display font-display text-on-surface">89<span className="text-headline-md text-on-surface-variant">%</span></h3>
                  </div>
                </div>
                <div className="w-12 h-12 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/20 flex items-center justify-center text-tertiary group-hover:rotate-12 transition-transform duration-300">
                  <span className="material-symbols-outlined">group_work</span>
                </div>
              </div>
              <div className="relative z-10 mt-auto">
                <div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant mb-2">
                  <span>Current Sprint</span>
                  <span>Target: 95%</span>
                </div>
                <div className="w-full bg-surface-container-high/50 rounded-full h-2 overflow-hidden border border-outline-variant/10">
                  <div className="bg-gradient-to-r from-tertiary-container to-tertiary h-full rounded-full relative" style={{ width: '89%' }}>
                    <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 blur-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel glass-panel-hover p-7 flex flex-col justify-between relative overflow-hidden group fade-in-up" style={{ transitionDelay: '0.4s' }}>
              <div className="absolute -right-6 -top-6 w-40 h-40 bg-gradient-to-br from-secondary-container/40 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <p className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">Tasks Resolved</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <h3 className="text-display font-display text-on-surface">142</h3>
                  </div>
                </div>
                <div className="w-12 h-12 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/20 flex items-center justify-center text-secondary group-hover:rotate-12 transition-transform duration-300">
                  <span className="material-symbols-outlined">task_alt</span>
                </div>
              </div>
              <div className="relative z-10 flex items-center gap-3 bg-surface-container-lowest/60 p-3 rounded-2xl border border-outline-variant/20 mt-auto">
                <div className="w-8 h-8 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-label-sm font-label-sm font-semibold text-on-surface">48 Remaining</span>
                    <span className="text-label-sm text-on-surface-variant text-[10px]">This week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2 fade-in-up" style={{ transitionDelay: '0.5s' }}>
             <div className="lg:col-span-2 space-y-6">
                 <div className="flex justify-between items-center px-1">
                     <h3 className="text-headline-md font-headline-md text-on-surface">Priority Initiatives</h3>
                     <button className="text-primary text-label-sm font-label-sm hover:underline flex items-center gap-1">View All <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="glass-panel p-6 glass-panel-hover group cursor-pointer flex flex-col h-full">
                        <div className="flex justify-between items-start mb-5">
                            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2 shadow-sm border border-primary/10">
                                <span className="material-symbols-outlined">rocket_launch</span>
                            </div>
                            <span className="bg-tertiary-container/30 border border-tertiary/20 text-tertiary text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> On Track
                            </span>
                        </div>
                        <h4 className="text-headline-sm md:text-[20px] font-headline-md font-semibold text-on-surface group-hover:text-primary transition-colors leading-tight mb-2">Apollo Redesign</h4>
                        <p className="text-body-sm md:text-[15px] font-body-md text-on-surface-variant line-clamp-2 mb-6 flex-1">Complete overhaul of the user interface focusing on dark mode accessibility and fluid animations.</p>
                        <div className="pt-4 border-t border-outline-variant/20 flex justify-between items-center mt-auto">
                            <div className="flex -space-x-2 relative group-hover:-space-x-1 transition-all duration-300">
                                <img alt="Team" className="w-9 h-9 rounded-full border-2 border-surface-container-lowest object-cover shadow-sm relative z-30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEtXLCbp6uxvP1SDcT8y0zGoOv9Dla7_Rcq3UMlSTFCPagoRKM7Me_85TnVaOnb3IIBuxwUN5FUF2uIRMGlNHzA2oylSn0k3fv4IEMsgPsgDPu5QeZPiLOpiZtXIhZW4WwSaVURK2vaeW8GkOGXBDMYl-GD5obUfD54U5hz7rhyfSJmefmU8eEX-02IYPyUVDUaA4tOoynPWvuKnwQ-lHwZu8GP98tEn4VqCE4Zs_rClz8g0mLvVpX"/>
                                <img alt="Team" className="w-9 h-9 rounded-full border-2 border-surface-container-lowest object-cover shadow-sm relative z-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEhMqdlylXY6pBGf8Bm_J0A-IOHegtBHs3XeYoXdTiHqW0UF6Xn_OBru2fboIQrQSfwz-g1CI523tefEBjIP1LaNQsUS8Kw4oM_DYuqOi8GIULR_3VQTaMvuoy_qmcd4kszh60mKbQeqzEUBp0efg5k3ACU-yXLZO9ZUG6l76suSPL2W_-F0DAsCa_SAQqWUwIG7fhW6oi1dgQ-cpHFVHNLLUGwLrUgzTcm9-4xmKgkZdmfm2g8mVf"/>
                                <div className="w-9 h-9 rounded-full border-2 border-surface-container-lowest bg-surface-container-high flex items-center justify-center text-label-sm font-label-sm text-on-surface-variant shadow-sm relative z-10">+2</div>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
             
             <div className="glass-panel p-7 lg:sticky lg:top-28 lg:h-[calc(100vh-140px)] flex flex-col">
                 <div className="flex justify-between items-center mb-8 px-1">
                     <h3 className="text-headline-md font-headline-md text-on-surface">Live Activity</h3>
                     <span className="relative flex h-3 w-3">
                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                         <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                     </span>
                 </div>
                 <div className="flex-1 overflow-y-auto pr-2 space-y-6">
                     <div className="relative flex items-start gap-4 group">
                         <div className="flex items-center justify-center w-10 h-10 rounded-2xl border border-primary/20 bg-primary/10 text-primary shrink-0 relative z-10 shadow-sm transition-transform group-hover:scale-110 duration-300">
                             <span className="material-symbols-outlined text-[18px]">commit</span>
                         </div>
                         <div className="flex-1 bg-surface-container-lowest/80 p-4 rounded-2xl border border-outline-variant/20 shadow-sm group-hover:border-primary/30 transition-colors duration-300 relative">
                             <div className="flex justify-between items-start mb-2">
                                 <span className="text-label-md font-label-md font-bold text-on-surface">Code pushed</span>
                                 <span className="text-[11px] font-label-sm text-on-surface-variant font-medium bg-surface-container p-1 px-2 rounded-lg">2h ago</span>
                             </div>
                             <p className="text-body-sm text-on-surface-variant leading-relaxed text-[14px]">Sarah committed to <span className="text-primary font-mono text-[12px] bg-primary/10 px-1.5 py-0.5 rounded">main</span> in Apollo.</p>
                         </div>
                     </div>
                 </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
