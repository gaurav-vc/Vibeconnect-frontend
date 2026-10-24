import React, { useState } from 'react';

const featuresList = [
  { title: "Employee Onboarding (Master Employee Record)", desc: "Streamline new hire integration with automated workflows, document collection, and a centralized master record." },
  { title: "Project & Task Management (Work Engine)", desc: "Organize tasks, assign responsibilities, and track project progress in real-time with our intuitive work engine." },
  { title: "Calendar (Scheduling Hub)", desc: "A unified view for all your appointments, meetings, and deadlines to keep your entire team synchronized." },
  { title: "Communication (Collaboration Hub)", desc: "Enhance team connectivity with instant messaging, shared channels, and integrated video conferencing." },
  { title: "Attendance Tracking (Time Engine)", desc: "Accurately monitor employee hours, shifts, and overtime with automated time-tracking capabilities." },
  { title: "Leave Management (Availability Engine)", desc: "Simplify time-off requests and approvals while maintaining real-time visibility into team availability." },
  { title: "Payroll Management (Finance Engine)", desc: "Automate salary calculations, tax deductions, and direct deposits with complete compliance and accuracy." },
  { title: "Document Pro (Knowledge & Compliance Hub)", desc: "Securely store, organize, and share company documents with granular access controls and version history." },
  { title: "Meeting Management (Decision & MOM Engine)", desc: "Schedule meetings, generate agendas, and automatically capture Minutes of Meeting (MOM) for actionable outcomes." },
  { title: "Reports & Analytics (Executive Intelligence Layer)", desc: "Generate customizable reports and visualize data trends to make informed, data-driven executive decisions." }
];

export default function FeaturesAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFeature = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
      {featuresList.map((feature, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={`hover-accordion-item glass-card rounded-2xl transition-all duration-500 transform ${isOpen ? 'is-open' : ''}`}
            style={{ animation: `fadeInUp 0.6s ease-out forwards`, animationDelay: `${index * 50}ms`, opacity: 0, transform: 'translateY(20px)' }}
          >
            <button 
              onClick={() => toggleFeature(index)}
              className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
            >
              <h3 className={`accordion-title font-bold text-lg md:text-xl transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-on-surface'}`}>
                {feature.title}
              </h3>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary text-on-primary rotate-180' : 'bg-surface-container-high text-on-surface-variant'}`}>
                <span className="material-symbols-outlined font-bold">expand_more</span>
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{ maxHeight: isOpen ? '200px' : '0px', opacity: isOpen ? 1 : 0 }}
            >
              <div className="px-6 pb-6 pt-2">
                <p className="text-on-surface-variant text-base md:text-lg leading-relaxed transform transition-transform duration-500" style={{ transform: isOpen ? 'translateY(0)' : 'translateY(-10px)' }}>
                  {feature.desc}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
    </div>
  );
}
