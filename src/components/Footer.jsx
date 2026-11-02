import React, { useState } from 'react';

export default function Footer({ navigateTo }) {
  const [activeLocation, setActiveLocation] = useState('chennai');

  return (
    <footer className="bg-gradient-to-b from-[#F4C2C2]/15 via-background to-surface border-t border-[#7b5455]/15 flex flex-col pt-12 pb-6 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 text-left relative z-10 mt-auto font-body-md shadow-[0_-10px_40px_rgba(244,194,194,0.15)]">
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10 text-on-surface">
        
        {/* Column 1: Address */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#7b5455] font-display text-base font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">location_on</span> Head & Branch Offices
          </h3>
          <div className="flex flex-col gap-4">
            <div className="p-3.5 rounded-2xl bg-surface-container-low/60 border border-outline-variant/20 hover:border-primary/30 transition-colors">
              <p className="text-[#7b5455] text-[11px] font-bold tracking-[0.15em] uppercase mb-1.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7b5455]"></span> MUMBAI HEAD OFFICE
              </p>
              <p className="text-on-surface-variant text-xs leading-relaxed uppercase">
                314, Samruddhi Business Park Behind<br/>
                Evershine Mall, New Link Rd, Chincholi<br/>
                Bunder, Malad West, Mumbai 400064
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-surface-container-low/60 border border-outline-variant/20 hover:border-primary/30 transition-colors">
              <p className="text-[#7b5455] text-[11px] font-bold tracking-[0.15em] uppercase mb-1.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7b5455]"></span> AMRAVATI OFFICE
              </p>
              <p className="text-on-surface-variant text-xs leading-relaxed uppercase">
                24, Yashomangal Layout, VMV Road Near<br/>
                OM Lahari Complex, Amravati 444604
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Regional Hubs */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#7b5455] font-display text-base font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">domain</span> Locations We are Present
          </h3>
          <div className="flex gap-4 border-b border-[#7b5455]/15 relative">
            <button 
              onClick={() => setActiveLocation('chennai')}
              className={`text-xs font-bold pb-2.5 relative transition-colors cursor-pointer ${
                activeLocation === 'chennai' ? 'text-[#7b5455]' : 'text-on-surface-variant hover:text-[#7b5455]'
              }`}
            >
              Chennai
              {activeLocation === 'chennai' && <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#7b5455] rounded-full"></div>}
            </button>
            <button 
              onClick={() => setActiveLocation('bangalore')}
              className={`text-xs font-bold pb-2.5 relative transition-colors cursor-pointer ${
                activeLocation === 'bangalore' ? 'text-[#7b5455]' : 'text-on-surface-variant hover:text-[#7b5455]'
              }`}
            >
              Bangalore
              {activeLocation === 'bangalore' && <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#7b5455] rounded-full"></div>}
            </button>
            <button 
              onClick={() => setActiveLocation('pune')}
              className={`text-xs font-bold pb-2.5 relative transition-colors cursor-pointer ${
                activeLocation === 'pune' ? 'text-[#7b5455]' : 'text-on-surface-variant hover:text-[#7b5455]'
              }`}
            >
              Pune
              {activeLocation === 'pune' && <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#7b5455] rounded-full"></div>}
            </button>
          </div>
          <div className="min-h-[100px] p-3.5 rounded-2xl bg-surface-container-low/60 border border-outline-variant/20">
            <div className={`transition-all duration-300 ${activeLocation === 'chennai' ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
              <p className="text-on-surface-variant text-xs leading-relaxed uppercase">
                C/O Ashok Business Services No. 1/761,<br/>
                Bethel Nagar, Thiruvalluvar Salai, Injambakkam,<br/>
                Chennai, Tamil Nadu 600115
              </p>
            </div>
            <div className={`transition-all duration-300 ${activeLocation === 'bangalore' ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
              <p className="text-on-surface-variant text-xs leading-relaxed uppercase">
                No. 9 Krishna Complex 1st Floor, Ramamurthy<br/>
                Nagar Main Rd, Opp. Aquila Sports Arena,<br/>
                Dodda Banaswadi, Bangalore 560043
              </p>
            </div>
            <div className={`transition-all duration-300 ${activeLocation === 'pune' ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
              <p className="text-on-surface-variant text-xs leading-relaxed uppercase">
                Office No. 610, 6th Floor of Nyati Emporius,<br/>
                S.No. 105, Near Radha Chowk, Bengaluru-Mumbai<br/>
                Highway, Baner, Pune 411045
              </p>
            </div>
          </div>
        </div>

        {/* Column 3: Solutions */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#7b5455] font-display text-base font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">hub</span> Enterprise Solutions
          </h3>
          <div className="flex flex-col gap-2.5 text-xs text-on-surface-variant">
            <button onClick={() => navigateTo(3)} className="text-left hover:text-[#7b5455] hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer">
              <span className="material-symbols-outlined text-sm text-primary">chevron_right</span>
              Employee Onboarding Engine
            </button>
            <button onClick={() => navigateTo(3)} className="text-left hover:text-[#7b5455] hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer">
              <span className="material-symbols-outlined text-sm text-primary">chevron_right</span>
              Task & Work Management
            </button>
            <button onClick={() => navigateTo(3)} className="text-left hover:text-[#7b5455] hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer">
              <span className="material-symbols-outlined text-sm text-primary">chevron_right</span>
              Executive Intelligence & Analytics
            </button>
            <button onClick={() => navigateTo(3)} className="text-left hover:text-[#7b5455] hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer">
              <span className="material-symbols-outlined text-sm text-primary">chevron_right</span>
              Document Pro & Knowledge Hub
            </button>
            <button onClick={() => navigateTo(3)} className="text-left hover:text-[#7b5455] hover:translate-x-1 transition-all flex items-center gap-1.5 cursor-pointer">
              <span className="material-symbols-outlined text-sm text-primary">chevron_right</span>
              Meeting & MOM Automation
            </button>
          </div>
        </div>

        {/* Column 4: Useful Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#7b5455] font-display text-base font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">explore</span> Useful Links
          </h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button onClick={() => navigateTo(1)} className="text-on-surface-variant hover:text-[#7b5455] font-semibold text-left transition-colors cursor-pointer py-1">Home</button>
            <button onClick={() => navigateTo(3)} className="text-on-surface-variant hover:text-[#7b5455] font-semibold text-left transition-colors cursor-pointer py-1">Features</button>
            <button onClick={() => navigateTo(4)} className="text-on-surface-variant hover:text-[#7b5455] font-semibold text-left transition-colors cursor-pointer py-1">Pricing</button>
            <button onClick={() => navigateTo(5)} className="text-on-surface-variant hover:text-[#7b5455] font-semibold text-left transition-colors cursor-pointer py-1">Experience</button>
            <button onClick={() => navigateTo(6)} className="text-on-surface-variant hover:text-[#7b5455] font-semibold text-left transition-colors cursor-pointer py-1">Contact Us</button>
            <button onClick={() => navigateTo(7)} className="text-on-surface-variant hover:text-[#7b5455] font-semibold text-left transition-colors cursor-pointer py-1">FAQ</button>
            <button onClick={() => navigateTo(2)} className="text-primary hover:underline font-bold text-left transition-colors cursor-pointer py-1 col-span-2">Open Workspace Dashboard &rarr;</button>
          </div>
        </div>

      </div>
      <div className="max-w-[1600px] mx-auto w-full border-t border-[#7b5455]/15 pt-6 pb-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <p className="text-on-surface-variant/80 text-xs font-medium">
          Copyright © 2026 Digielves Tech Wizards Private Limited. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-xs text-on-surface-variant/70">
          <span>Privacy Policy</span>
          <span>•</span>
          <span>Terms of Service</span>
          <span>•</span>
          <span>Security</span>
        </div>
      </div>
    </footer>
  );
}
