import React, { useState } from 'react';

const featuresList = [
  { 
    title: "Employee Onboarding (Master Employee Record)", 
    desc: "Streamline new hire integration with automated document collection, digital signing, and a centralized master employee record with custom compliance workflows.",
    icon: "badge"
  },
  { 
    title: "Project & Task Management (Work Engine)", 
    desc: "Organize tasks, assign responsibilities, and track sprint progress in real-time with Kanban boards, Gantt charts, and custom workflow automations.",
    icon: "assignment"
  },
  { 
    title: "Calendar & Scheduling (Sync Hub)", 
    desc: "A unified, intelligent calendar for all your appointments, client demos, and team deadlines to keep your entire organization synchronized across timezones.",
    icon: "calendar_month"
  },
  { 
    title: "Communication & Real-Time Chat (Collaboration Hub)", 
    desc: "Enhance team connectivity with encrypted instant messaging, threaded channels, screen sharing, and integrated one-click HD video conferencing.",
    icon: "forum"
  },
  { 
    title: "Attendance & Geofencing (Time Engine)", 
    desc: "Accurately monitor employee hours, shift rotations, overtime, and remote check-ins with automated time-tracking and biometric integrations.",
    icon: "schedule"
  },
  { 
    title: "Leave & PTO Management (Availability Engine)", 
    desc: "Simplify time-off requests, multi-tier approvals, and leave balance tracking while maintaining real-time visibility into team availability.",
    icon: "event_available"
  },
  { 
    title: "Payroll & Compensation (Finance Engine)", 
    desc: "Automate salary calculations, tax deductions, bonuses, pay slip generation, and direct bank deposits with 100% statutory compliance.",
    icon: "account_balance_wallet"
  },
  { 
    title: "Document Pro (Knowledge & Compliance Hub)", 
    desc: "Securely store, organize, and version company policies, NDA agreements, and contracts with granular role-based access control.",
    icon: "description"
  },
  { 
    title: "Meeting Management (Decision & MOM Engine)", 
    desc: "Schedule strategic syncs, auto-generate agendas, record action items, and automatically distribute Minutes of Meeting (MOM) for clear accountability.",
    icon: "groups"
  },
  { 
    title: "Reports & Analytics (Executive Intelligence Layer)", 
    desc: "Generate customizable executive dashboards, track organizational velocity, and uncover predictive data trends to make informed business choices.",
    icon: "analytics"
  }
];

export default function FeaturesAccordion() {
  const [openIndex, setOpenIndex] = useState(0); // Default first one open for discovery

  const toggleFeature = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-3.5 sm:gap-4">
      {featuresList.map((feature, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={`hover-accordion-item glass-card rounded-2xl transition-all duration-300 border ${
              isOpen 
                ? 'border-primary/50 bg-surface/90 shadow-lg shadow-primary/5' 
                : 'border-outline-variant/30 hover:border-primary/30 bg-surface/60'
            }`}
          >
            <button 
              onClick={() => toggleFeature(index)}
              className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 focus:outline-none cursor-pointer"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isOpen ? 'bg-primary text-on-primary shadow-glow' : 'bg-primary-container/40 text-primary'
                }`}>
                  <span className="material-symbols-outlined text-[20px] sm:text-[22px]">{feature.icon}</span>
                </div>
                <h3 className={`accordion-title font-bold text-base sm:text-lg md:text-xl transition-colors duration-300 truncate sm:whitespace-normal ${
                  isOpen ? 'text-primary' : 'text-on-surface'
                }`}>
                  {feature.title}
                </h3>
              </div>

              <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isOpen ? 'bg-primary text-on-primary rotate-180 shadow-sm' : 'bg-surface-container-high text-on-surface-variant'
              }`}>
                <span className="material-symbols-outlined text-[18px] font-bold">expand_more</span>
              </div>
            </button>
            
            <div 
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }}
            >
              <div className="px-4 sm:px-6 pb-5 pt-1 pl-16 sm:pl-20">
                <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
