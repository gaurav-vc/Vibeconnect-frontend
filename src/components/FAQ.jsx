import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Footer from './Footer';

const faqs = [
  { question: "What is Vibe Connect?", answer: "Vibe Connect is a premium, all-in-one workspace companion designed to elevate team collaboration, streamline project management, and unify your digital workflow in one elegant interface." },
  { question: "Which industries can benefit from Vibe Connect?", answer: "Our versatile architecture is built for scale, making it ideal for tech startups, creative agencies, enterprise corporations, and any organization striving for top-tier operational efficiency." },
  { question: "How does Vibe Connect enhance team collaboration?", answer: "By centralizing communication channels, shared documents, and real-time project tracking, Vibe Connect eliminates silos and ensures your team stays synchronized across any timezone." },
  { question: "Does Vibe Connect integrate with other software?", answer: "Absolutely. Vibe Connect features robust API capabilities and seamless out-of-the-box integrations with leading productivity, CRM, and cloud storage platforms." },
  { question: "What document management features are available?", answer: "Experience intelligent document versioning, secure role-based access, and real-time collaborative editing, all housed within an intuitive, searchable repository." },
  { question: "What communication features are included?", answer: "Enjoy crystal-clear video conferencing, instant messaging, dedicated project channels, and threaded discussions designed to keep conversations focused and actionable." },
  { question: "How does Vibe Connect support project management?", answer: "From interactive Gantt charts and Kanban boards to automated sprint tracking and resource allocation, our tools adapt perfectly to your preferred agile or waterfall methodologies." },
  { question: "Is Vibe Connect customizable?", answer: "Yes. Every aspect of your workspace, from dashboard layouts and custom data fields to notification preferences and branding, can be tailored to match your unique workflow." },
  { question: "Is Vibe Connect accessible via mobile devices?", answer: "Vibe Connect offers native, highly optimized applications for both iOS and Android, ensuring you have full control over your projects anytime, anywhere." },
  { question: "What security measures are in place for data protection?", answer: "We employ military-grade end-to-end encryption, multi-factor authentication (MFA), and routine third-party penetration testing to guarantee your data remains impenetrable." },
  { question: "Can Vibe Connect assist with compliance and audits?", answer: "Our comprehensive audit trails, automated compliance reporting, and strict data retention policies make adhering to industry standards like SOC2 and GDPR effortless." },
  { question: "How is user onboarding managed?", answer: "We provide interactive guided tours, extensive documentation, and automated role-based permission assignment to ensure new team members hit the ground running on day one." },
  { question: "What is the pricing structure for Vibe Connect?", answer: "We offer flexible, scalable subscription tiers ranging from starter packages for small teams to bespoke enterprise solutions. Check our Pricing page for detailed information." },
  { question: "What support services does Vibe Connect provide?", answer: "Our dedicated success team offers 24/7 premium support via chat and email, along with dedicated account managers for our enterprise partners." },
  { question: "Can I migrate my existing data to Vibe Connect?", answer: "Yes! We offer a seamless, one-click migration tool that supports importing data from platforms like Slack, Asana, Google Workspace, and Microsoft Teams without any data loss." },
  { question: "Is there a free trial available for the Enterprise plan?", answer: "Absolutely. We provide a fully-featured 14-day free trial for all our plans, giving your team complete access to experience the premium capabilities of Vibe Connect risk-free." }
];

const FAQ = ({ navigateTo }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden min-h-screen flex flex-col">
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
                    <button onClick={() => navigateTo(1)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal">Home</button>
                    <button onClick={() => navigateTo(3)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal">Features</button>
                    <button onClick={() => navigateTo(6)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal">Contact Us</button>
                    <button onClick={() => navigateTo(7)} className="text-on-surface-variant hover:text-primary transition-colors font-label-sm uppercase text-primary font-bold">FAQ</button>
                    <button onClick={() => navigateTo(5)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal">Experience</button>
                  </div>
                  <button onClick={() => navigateTo(2)} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary-container text-on-primary-container text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-sm hover:shadow-md">
                    <span className="truncate">Sign Up</span>
                  </button>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>

      <main className="relative flex-1 flex flex-col items-center py-20 px-6 md:px-12 max-w-[1600px] mx-auto w-full z-10" style={{
        background: 'radial-gradient(circle at top right, rgba(244, 194, 194, 0.2) 0%, rgba(250, 249, 246, 0) 50%), radial-gradient(circle at bottom left, rgba(236, 186, 186, 0.2) 0%, rgba(250, 249, 246, 0) 50%)'
      }}>
        
        <div className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-primary" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-medium leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            Everything you need to know about Vibe Connect and how it can transform your team's workflow. Hover over a question to reveal the answer.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {faqs.map((faq, index) => {
            return (
              <div 
                key={index}
                className={`flip-card-container fade-in-up ${isVisible ? 'visible' : ''}`} 
                style={{ transitionDelay: `${index * 0.05}s`, height: '280px' }} 
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front p-8 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary-container/50 text-primary flex items-center justify-center mb-6 shadow-sm">
                      <span className="material-symbols-outlined text-3xl">help_outline</span>
                    </div>
                    <h3 className="text-on-surface font-headline-md text-xl font-bold leading-tight">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flip-card-back p-8 md:p-10 flex flex-col justify-center items-center text-center relative overflow-hidden" style={{
                    background: 'linear-gradient(225deg, rgba(255,255,255,0.95) 0%, rgba(244,194,194,0.4) 40%, rgba(210,150,150,0.7) 100%)',
                    boxShadow: '0 20px 50px rgba(123,84,85,0.15)',
                    border: '1px solid rgba(255,255,255,0.6)'
                  }}>
                    <p className="text-[#2a2a2a] text-lg md:text-xl font-medium leading-[1.8] tracking-wide font-display drop-shadow-sm relative z-20">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Shared Footer */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default FAQ;
