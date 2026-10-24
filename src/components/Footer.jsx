import React, { useState } from 'react';

export default function Footer({ navigateTo }) {
  const [activeLocation, setActiveLocation] = useState('chennai');

  return (
    <footer className="bg-gradient-to-b from-[#F4C2C2]/10 to-background border-t border-[#7b5455]/10 flex flex-col pt-10 pb-4 px-6 md:px-10 lg:px-12 xl:px-16 text-left relative z-10 mt-auto font-body-md shadow-[0_-10px_40px_rgba(244,194,194,0.15)]">
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-8 text-on-surface">
        
        {/* Column 1: Address */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#7b5455] font-display text-base font-bold flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">location_on</span> Address
          </h3>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[#7b5455]/70 text-[10px] font-bold tracking-[0.15em] uppercase mb-1.5">HEAD OFFICE</p>
              <p className="text-on-surface-variant text-xs leading-relaxed uppercase max-w-[260px]">
                314, SAMRUDDHI BUSINESS PARK BEHIND<br/>
                EVERSHINE MALL, NEW LINK RD, CHINCHOLI<br/>
                BUNDER, MALAD WEST, MUMBAI 400064.
              </p>
            </div>
            <div>
              <p className="text-[#7b5455]/70 text-[10px] font-bold tracking-[0.15em] uppercase mb-1.5">AMRAVATI OFFICE</p>
              <p className="text-on-surface-variant text-xs leading-relaxed uppercase max-w-[260px]">
                24, YASHOMANGAL LAYOUT, VMV ROAD NEAR<br/>
                OM LAHARI COMPLEX, AMRAVATI 444604
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Locations We are Present */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#7b5455] font-display text-base font-bold">Locations We are Present</h3>
          <div className="flex gap-6 border-b border-[#7b5455]/10 relative">
            <button 
              onClick={() => setActiveLocation('chennai')}
              className={`text-xs font-semibold pb-3 relative transition-colors ${activeLocation === 'chennai' ? 'text-[#7b5455]' : 'text-on-surface-variant hover:text-[#7b5455]'}`}
            >
              Chennai
              {activeLocation === 'chennai' && <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#7b5455]"></div>}
            </button>
            <button 
              onClick={() => setActiveLocation('bangalore')}
              className={`text-xs font-semibold pb-3 relative transition-colors ${activeLocation === 'bangalore' ? 'text-[#7b5455]' : 'text-on-surface-variant hover:text-[#7b5455]'}`}
            >
              Bangalore
              {activeLocation === 'bangalore' && <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#7b5455]"></div>}
            </button>
            <button 
              onClick={() => setActiveLocation('pune')}
              className={`text-xs font-semibold pb-3 relative transition-colors ${activeLocation === 'pune' ? 'text-[#7b5455]' : 'text-on-surface-variant hover:text-[#7b5455]'}`}
            >
              Pune
              {activeLocation === 'pune' && <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#7b5455]"></div>}
            </button>
          </div>
          <div className="h-20"> {/* Reduced height */}
            <div className={`transition-opacity duration-300 ${activeLocation === 'chennai' ? 'opacity-100' : 'opacity-0 hidden'}`}>
              <p className="text-on-surface-variant text-xs leading-relaxed uppercase mt-1">
                C/O ASHOK BUSINESS SERVICES NO.1/761,<br/>
                BETHEL NAGAR THIRUVALLUVAR SALAI INJAMBAKKKAM<br/>
                CHENNAI 600115
              </p>
            </div>
            <div className={`transition-opacity duration-300 ${activeLocation === 'bangalore' ? 'opacity-100' : 'opacity-0 hidden'}`}>
              <p className="text-on-surface-variant text-xs leading-relaxed uppercase mt-1">
                No.9 Krishna Complex First Floor, Ramamurthy<br/>
                Nagar Main Road, Opposite Aquila Sports Arena,<br/>
                Dodda Banaswadi Post Bangalore 560043
              </p>
            </div>
            <div className={`transition-opacity duration-300 ${activeLocation === 'pune' ? 'opacity-100' : 'opacity-0 hidden'}`}>
              <p className="text-on-surface-variant text-xs leading-relaxed uppercase mt-1">
                Office No. 610, 6th Floor of Nyati Emporius,<br/>
                S.No.105, Near Radha Chowk, Bengaluru-Mumbai<br/>
                Highway, Baner, Pune 411045
              </p>
            </div>
          </div>
        </div>

        {/* Column 3: Solutions */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#7b5455] font-display text-base font-bold">Solutions</h3>
          <div className="flex flex-col gap-3">
          </div>
        </div>

        {/* Column 4: Useful Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#7b5455] font-display text-base font-bold">Useful Links</h3>
          <div className="flex flex-col gap-2">
            <button onClick={() => navigateTo(1)} className="text-on-surface-variant hover:text-[#7b5455] font-medium text-xs text-left transition-colors cursor-pointer w-fit">Home</button>
            <button onClick={() => navigateTo(3)} className="text-on-surface-variant hover:text-[#7b5455] font-medium text-xs text-left transition-colors cursor-pointer w-fit">Features</button>
            <button onClick={() => navigateTo(6)} className="text-on-surface-variant hover:text-[#7b5455] font-medium text-xs text-left transition-colors cursor-pointer w-fit">Contact Us</button>
            <button onClick={() => navigateTo(7)} className="text-on-surface-variant hover:text-[#7b5455] font-medium text-xs text-left transition-colors cursor-pointer w-fit">FAQ</button>
            <button onClick={() => navigateTo(5)} className="text-on-surface-variant hover:text-[#7b5455] font-medium text-xs text-left transition-colors cursor-pointer w-fit">Experience</button>
          </div>
        </div>

      </div>
      <div className="max-w-[1600px] mx-auto w-full border-t border-[#7b5455]/10 pt-4 pb-2 text-center">
        <p className="text-on-surface-variant/70 text-xs font-normal">Copyright © 2023 Digielves Tech Wizards Private Limited All rights reserved</p>
      </div>
    </footer>
  );
}
