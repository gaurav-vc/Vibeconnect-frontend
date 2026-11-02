import React, { useEffect, useState } from 'react';

export default function Dashboard({ navigateTo }) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSearchVisible, setMobileSearchVisible] = useState(false);

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

  // Prevent body scrolling when mobile sidebar drawer is open
  useEffect(() => {
    if (isMobileSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileSidebarOpen]);

  const navItems = [
    { id: 'dashboard', label: 'Command Center', icon: 'dashboard', action: () => setActiveTab('dashboard') },
    { id: 'home', label: 'Home Page', icon: 'home', action: () => navigateTo(1) },
    { id: 'features', label: 'Features Showcase', icon: 'auto_awesome', action: () => navigateTo(3) },
    { id: 'pricing', label: 'Pricing Plans', icon: 'payments', action: () => navigateTo(4) },
    { id: 'experience', label: '3D Experience', icon: 'view_in_ar', action: () => navigateTo(5) },
    { id: 'contact', label: 'Contact Us', icon: 'contact_support', action: () => navigateTo(6) },
    { id: 'faq', label: 'FAQ Knowledge', icon: 'help_center', action: () => navigateTo(7) },
  ];

  const handleNavClick = (action) => {
    setIsMobileSidebarOpen(false);
    action();
  };

  return (
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex overflow-x-hidden selection:bg-primary/20 selection:text-primary relative antialiased">
      {/* Decorative Background Elements */}
      <div className="absolute right-[10%] top-[-10%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-primary-container/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute left-[20%] bottom-[-20%] w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-tertiary-container/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      
      {/* Desktop Fixed SideNavBar */}
      <nav className="hidden lg:flex h-screen w-72 fixed left-0 top-0 bg-surface/75 backdrop-blur-3xl border-r border-outline-variant/30 flex-col py-6 z-40">
        <div className="px-6 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo(1)}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-on-primary shadow-glow">
              <span className="material-symbols-outlined text-lg font-bold">layers</span>
            </div>
            <div>
              <h1 className="font-display font-extrabold text-lg text-primary leading-none">Vibe Space</h1>
              <p className="text-[10px] font-bold text-on-surface-variant/70 mt-1 tracking-widest uppercase">WORKSPACE OS</p>
            </div>
          </div>
        </div>

        <div className="px-5 pb-6">
          <button 
            onClick={() => alert("Creating a new project workspace...")}
            className="w-full bg-primary hover:bg-primary/90 text-on-primary py-3 rounded-2xl font-label-md flex justify-center items-center gap-2 shadow-md shadow-primary/25 transition-all duration-300 group cursor-pointer active:scale-95"
          >
            <span className="material-symbols-outlined text-xl transition-transform group-hover:rotate-90 duration-300">add</span>
            <span className="font-bold text-sm">New Project</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 space-y-1">
          <div className="px-3 pb-2 text-[10px] uppercase font-bold tracking-wider text-on-surface-variant/60">Main Menu</div>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.action)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-left text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-primary-container/40 text-primary font-bold shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${isActive ? 'text-primary' : 'text-on-surface-variant/70'}`}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* User Profile Card */}
        <div className="px-5 pt-4 border-t border-outline-variant/20 mx-2">
          <div className="flex items-center gap-3 p-3 bg-surface-container-lowest/80 rounded-2xl border border-outline-variant/30 shadow-sm">
            <img 
              alt="Alex Mercer" 
              className="w-10 h-10 rounded-full border-2 border-primary-container object-cover shadow-sm shrink-0" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkfFz8asXjWZVTJMvpJpbkg_lABFNhBGLOu7bdaHeVSZ4Ept3RiyHJCrceX7Y3_XuY5UsyH9SADG5HDLQuqLbItda6bde0Ov4qjz-rSayVCUhOK4IL-Nlod9gE_WZe0L384cGHnbEe2RyOSntMh3--_qwnuDazRzsfK_1CQGpLMW2mItLPZn5FuxAsIPUWjg_89X64AanyaOdvXAR084u_hEmYai3UNE1jFE7XcG46Ztw8uohUV0jm"
            />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-on-surface truncate">Alex Mercer</p>
              <p className="text-[10px] font-semibold text-primary truncate">Enterprise Admin</p>
            </div>
            <button onClick={() => navigateTo(1)} title="Exit to Home" className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-lg">logout</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile & Tablet Slide-Over Drawer */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isMobileSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          onClick={() => setIsMobileSidebarOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 ${
            isMobileSidebarOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div 
          className={`absolute top-0 bottom-0 left-0 w-72 sm:w-80 max-w-[85vw] bg-surface/95 backdrop-blur-2xl p-6 border-r border-outline-variant/30 shadow-2xl flex flex-col transition-all duration-300 transform ${
            isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between pb-6 border-b border-outline-variant/20 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-lg font-bold">layers</span>
              </div>
              <div>
                <h2 className="font-display font-extrabold text-base text-primary">Vibe Space</h2>
                <p className="text-[10px] font-bold text-on-surface-variant/70 uppercase">WORKSPACE OS</p>
              </div>
            </div>
            <button 
              onClick={() => setIsMobileSidebarOpen(false)}
              className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-1.5">
            <div className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant/60 px-2 pb-1">Navigate Platform</div>
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.action)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-primary text-on-primary font-bold shadow-md shadow-primary/20'
                      : 'text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  <span className={`material-symbols-outlined text-xl ${isActive ? 'text-on-primary' : 'text-primary'}`}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-outline-variant/20 mt-auto">
            <div className="flex items-center gap-3 p-3 bg-surface-container-lowest rounded-2xl border border-outline-variant/30">
              <img 
                alt="Alex Mercer" 
                className="w-10 h-10 rounded-full object-cover shrink-0" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkfFz8asXjWZVTJMvpJpbkg_lABFNhBGLOu7bdaHeVSZ4Ept3RiyHJCrceX7Y3_XuY5UsyH9SADG5HDLQuqLbItda6bde0Ov4qjz-rSayVCUhOK4IL-Nlod9gE_WZe0L384cGHnbEe2RyOSntMh3--_qwnuDazRzsfK_1CQGpLMW2mItLPZn5FuxAsIPUWjg_89X64AanyaOdvXAR084u_hEmYai3UNE1jFE7XcG46Ztw8uohUV0jm"
              />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-on-surface truncate">Alex Mercer</p>
                <p className="text-[10px] text-primary font-semibold">Admin</p>
              </div>
              <button onClick={() => navigateTo(1)} className="text-primary text-xs font-bold px-2 py-1 bg-primary-container/40 rounded-lg">
                Home
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-72 relative z-10 min-h-screen overflow-y-auto bg-surface-bright/50 flex flex-col">
        
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-surface/90 backdrop-blur-2xl border-b border-outline-variant/20 px-4 sm:px-6 md:px-10 py-3.5 flex justify-between items-center transition-all duration-300">
          
          {/* Mobile Menu Hamburger & Brand */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMobileSidebarOpen(true)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-surface-container-high/80 hover:bg-surface-container-highest text-primary cursor-pointer active:scale-95"
              aria-label="Open sidebar menu"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>

            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateTo(1)}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-sm font-bold">layers</span>
              </div>
              <span className="font-display text-base sm:text-lg font-bold text-on-surface">Vibe Space</span>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full group">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60 group-focus-within:text-primary transition-colors text-lg">
                search
              </span>
              <input 
                className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-full py-2 pl-10 pr-4 text-xs sm:text-sm font-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all duration-300 shadow-sm" 
                placeholder="Search projects, tasks, or metrics..." 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button 
              onClick={() => setMobileSearchVisible(!mobileSearchVisible)}
              className="md:hidden w-9 h-9 rounded-full bg-surface-container-lowest border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">search</span>
            </button>

            <button 
              onClick={() => alert("All notifications are cleared! System operating normally.")}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-container-lowest border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all duration-300 relative shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg sm:text-xl">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full ring-2 ring-surface-container-lowest animate-pulse" />
            </button>

            <button 
              onClick={() => navigateTo(1)}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high text-xs font-bold text-on-surface hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">home</span>
              <span>Back to Home</span>
            </button>
          </div>
        </header>

        {/* Mobile Search Expandable Bar */}
        {mobileSearchVisible && (
          <div className="md:hidden px-4 py-2.5 bg-surface border-b border-outline-variant/20 animate-fade-in">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-lg">
                search
              </span>
              <input 
                className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl py-2 pl-9 pr-4 text-xs text-on-surface focus:outline-none focus:border-primary"
                placeholder="Search workspace..."
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Dashboard Canvas */}
        <div className="p-4 sm:p-6 md:p-10 max-w-[1500px] w-full mx-auto space-y-6 sm:space-y-8 pb-24 flex-1">
          
          {/* Welcome Greeting Banner */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-2">
            <div className="fade-in-up">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary px-2.5 py-1 rounded-full bg-primary-container/40 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                <span>Live System Status: Normal</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-on-surface tracking-tight">
                Command Center
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-on-surface-variant mt-1 max-w-xl">
                Welcome back, Alex. Your enterprise workspace is operating at peak velocity with 24 active initiatives.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 fade-in-up">
              <button 
                onClick={() => alert("Dashboard view customized!")}
                className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface py-2 px-3.5 rounded-xl font-bold text-xs hover:bg-surface-container-low transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">tune</span>
                <span>Customize</span>
              </button>
              <button 
                onClick={() => alert("Exporting executive summary report as PDF...")}
                className="bg-primary text-on-primary py-2 px-4 rounded-xl font-bold text-xs hover:bg-primary/90 transition-all shadow-glow flex items-center gap-1.5 cursor-pointer active:scale-95"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                <span>Export Report</span>
              </button>
            </div>
          </div>

          {/* Bento Grid Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            
            {/* Card 1: Active Projects */}
            <div className="glass-panel glass-panel-hover p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group fade-in-up border border-outline-variant/30 shadow-md">
              <div className="absolute -right-6 -top-6 w-36 h-36 bg-gradient-to-br from-primary-container/40 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <p className="text-xs font-bold text-on-surface-variant/80 uppercase tracking-wider">Active Projects</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-on-surface">24</h3>
                    <span className="flex items-center text-primary bg-primary/10 px-2 py-0.5 rounded-full text-xs font-bold">
                      <span className="material-symbols-outlined text-xs mr-0.5">trending_up</span> +12%
                    </span>
                  </div>
                </div>
                <div className="w-11 h-11 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 flex items-center justify-center text-primary group-hover:rotate-12 transition-transform duration-300">
                  <span className="material-symbols-outlined text-2xl">folder_special</span>
                </div>
              </div>

              {/* Activity Bar Chart */}
              <div className="w-full h-12 flex items-end gap-1.5 relative z-10 pt-2">
                <div className="w-full bg-primary/20 h-[30%] rounded-t-md transition-all group-hover:h-[40%]" />
                <div className="w-full bg-primary/20 h-[45%] rounded-t-md transition-all group-hover:h-[55%]" />
                <div className="w-full bg-primary/30 h-[35%] rounded-t-md transition-all group-hover:h-[45%]" />
                <div className="w-full bg-primary/40 h-[65%] rounded-t-md transition-all group-hover:h-[75%]" />
                <div className="w-full bg-primary/30 h-[50%] rounded-t-md transition-all group-hover:h-[60%]" />
                <div className="w-full bg-primary/60 h-[80%] rounded-t-md transition-all group-hover:h-[90%]" />
                <div className="w-full bg-primary h-[100%] rounded-t-md relative shadow-md shadow-primary/30" />
              </div>
            </div>

            {/* Card 2: Team Velocity */}
            <div className="glass-panel glass-panel-hover p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group fade-in-up border border-outline-variant/30 shadow-md">
              <div className="absolute -right-6 -top-6 w-36 h-36 bg-gradient-to-br from-tertiary-container/40 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <p className="text-xs font-bold text-on-surface-variant/80 uppercase tracking-wider">Team Velocity</p>
                  <div className="flex items-baseline gap-1 mt-2">
                    <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-on-surface">89</h3>
                    <span className="text-xl font-bold text-on-surface-variant">%</span>
                  </div>
                </div>
                <div className="w-11 h-11 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 flex items-center justify-center text-tertiary group-hover:rotate-12 transition-transform duration-300">
                  <span className="material-symbols-outlined text-2xl">group_work</span>
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <div className="flex justify-between text-xs font-semibold text-on-surface-variant mb-2">
                  <span>Sprint Completion</span>
                  <span className="text-primary font-bold">Target: 95%</span>
                </div>
                <div className="w-full bg-surface-container-high rounded-full h-2.5 overflow-hidden border border-outline-variant/10">
                  <div className="bg-gradient-to-r from-primary-container to-primary h-full rounded-full relative" style={{ width: '89%' }} />
                </div>
              </div>
            </div>

            {/* Card 3: Tasks Resolved */}
            <div className="glass-panel glass-panel-hover p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group fade-in-up border border-outline-variant/30 shadow-md sm:col-span-2 lg:col-span-1">
              <div className="absolute -right-6 -top-6 w-36 h-36 bg-gradient-to-br from-secondary-container/40 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <p className="text-xs font-bold text-on-surface-variant/80 uppercase tracking-wider">Tasks Resolved</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-on-surface">142</h3>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">On Schedule</span>
                  </div>
                </div>
                <div className="w-11 h-11 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 flex items-center justify-center text-secondary group-hover:rotate-12 transition-transform duration-300">
                  <span className="material-symbols-outlined text-2xl">task_alt</span>
                </div>
              </div>

              <div className="relative z-10 flex items-center gap-3 bg-surface-container-lowest/80 p-3 rounded-2xl border border-outline-variant/20 mt-auto">
                <div className="w-8 h-8 rounded-full bg-primary-container/40 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-on-surface">48 Remaining</span>
                    <span className="text-[10px] font-semibold text-on-surface-variant">Closing this Friday</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          {/* Main Grid: Priority Initiatives & Live Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Initiatives Column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex justify-between items-center px-1">
                <h3 className="text-lg sm:text-xl font-display font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">flag</span>
                  Priority Initiatives
                </h3>
                <button 
                  onClick={() => alert("Showing all active enterprise initiatives...")}
                  className="text-primary text-xs font-bold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Initiative Card 1 */}
                <div className="glass-panel p-5 sm:p-6 glass-panel-hover group cursor-pointer flex flex-col justify-between border border-outline-variant/30 rounded-2xl shadow-sm">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-sm border border-primary/10">
                        <span className="material-symbols-outlined text-lg">rocket_launch</span>
                      </div>
                      <span className="bg-emerald-50 text-emerald-700 text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> On Track
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-tight mb-1.5">
                      Apollo Redesign V2
                    </h4>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed line-clamp-2 mb-4">
                      Complete UI overhaul focusing on responsive layout ergonomics and fluid canvas animations.
                    </p>
                  </div>
                  
                  <div className="pt-3 border-t border-outline-variant/20 flex justify-between items-center">
                    <div className="flex -space-x-2">
                      <img alt="Team" className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEtXLCbp6uxvP1SDcT8y0zGoOv9Dla7_Rcq3UMlSTFCPagoRKM7Me_85TnVaOnb3IIBuxwUN5FUF2uIRMGlNHzA2oylSn0k3fv4IEMsgPsgDPu5QeZPiLOpiZtXIhZW4WwSaVURK2vaeW8GkOGXBDMYl-GD5obUfD54U5hz7rhyfSJmefmU8eEX-02IYPyUVDUaA4tOoynPWvuKnwQ-lHwZu8GP98tEn4VqCE4Zs_rClz8g0mLvVpX" />
                      <img alt="Team" className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEhMqdlylXY6pBGf8Bm_J0A-IOHegtBHs3XeYoXdTiHqW0UF6Xn_OBru2fboIQrQSfwz-g1CI523tefEBjIP1LaNQsUS8Kw4oM_DYuqOi8GIULR_3VQTaMvuoy_qmcd4kszh60mKbQeqzEUBp0efg5k3ACU-yXLZO9ZUG6l76suSPL2W_-F0DAsCa_SAQqWUwIG7fhW6oi1dgQ-cpHFVHNLLUGwLrUgzTcm9-4xmKgkZdmfm2g8mVf" />
                      <div className="w-7 h-7 rounded-full border-2 border-white bg-primary-container text-primary flex items-center justify-center text-[10px] font-bold shadow-sm">+3</div>
                    </div>
                    <span className="text-xs font-bold text-primary">82% Complete</span>
                  </div>
                </div>

                {/* Initiative Card 2 */}
                <div className="glass-panel p-5 sm:p-6 glass-panel-hover group cursor-pointer flex flex-col justify-between border border-outline-variant/30 rounded-2xl shadow-sm">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-sm border border-primary/10">
                        <span className="material-symbols-outlined text-lg">sync_saved_locally</span>
                      </div>
                      <span className="bg-amber-50 text-amber-700 text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> In Review
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-tight mb-1.5">
                      Cloud Migration Hub
                    </h4>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed line-clamp-2 mb-4">
                      Zero-downtime database failover testing and enterprise SOC2 telemetry compliance verification.
                    </p>
                  </div>
                  
                  <div className="pt-3 border-t border-outline-variant/20 flex justify-between items-center">
                    <div className="flex -space-x-2">
                      <img alt="Team" className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1JCjFx41DYznhEoDV2Zm4cuxNmSZqCk9pN1U2QhrOKouUpeJ7W5wFb8iZKOTQ81_Wku3ECesiRkueMDK6P2cmPmZewkyc6-voBtZY2U2tki98CNS441lVOqOmQaOBYTihQxxzvVNo56lHYzZhg67VqwUpwpeKBMUSshjasqGPyfPhVosEzjVby_PysZOWRYcwTXvaZHJrGd5lpZTLWLyHGMM0hetyRMmgng4OnQoESOiSSOAZY7AZ" />
                      <div className="w-7 h-7 rounded-full border-2 border-white bg-primary-container text-primary flex items-center justify-center text-[10px] font-bold shadow-sm">+1</div>
                    </div>
                    <span className="text-xs font-bold text-primary">64% Complete</span>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Live Activity Feed Column */}
            <div className="glass-panel p-5 sm:p-6 flex flex-col border border-outline-variant/30 rounded-2xl shadow-sm">
              <div className="flex justify-between items-center mb-5 px-1">
                <h3 className="text-base sm:text-lg font-display font-bold text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">stream</span>
                  Live Team Stream
                </h3>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/20">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-base">code</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="text-xs font-bold text-on-surface">Sarah K.</span>
                      <span className="text-[10px] text-on-surface-variant">10m ago</span>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-snug">Pushed 4 responsive layout fixes to main branch.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/20">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-base">check_circle</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="text-xs font-bold text-on-surface">David M.</span>
                      <span className="text-[10px] text-on-surface-variant">32m ago</span>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-snug">Approved meeting MOM & auto-dispatched action items.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/20">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-base">cloud_done</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="text-xs font-bold text-on-surface">System Agent</span>
                      <span className="text-[10px] text-on-surface-variant">1h ago</span>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-snug">All database backup replications completed without errors.</p>
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
