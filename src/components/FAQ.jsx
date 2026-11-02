import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const faqs = [
  { 
    category: "General",
    question: "What is VibeConnect?", 
    answer: "VibeConnect is a premium, all-in-one workspace operating system designed to elevate team collaboration, streamline project management, and unify your entire digital workflow in one elegant interface." 
  },
  { 
    category: "General",
    question: "Which industries can benefit from VibeConnect?", 
    answer: "Our modular architecture scales effortlessly across tech startups, creative agencies, enterprise corporations, and any organization striving for top-tier operational efficiency." 
  },
  { 
    category: "Product",
    question: "How does VibeConnect enhance team collaboration?", 
    answer: "By centralizing communication channels, shared documents, and real-time project tracking, VibeConnect eliminates silos and ensures your team stays synchronized across any timezone." 
  },
  { 
    category: "Product",
    question: "Does VibeConnect integrate with other software?", 
    answer: "Absolutely. VibeConnect features robust REST/GraphQL APIs and seamless out-of-the-box integrations with leading productivity, CRM, and cloud storage platforms." 
  },
  { 
    category: "Product",
    question: "What document management features are available?", 
    answer: "Experience intelligent document versioning, secure role-based access, and real-time collaborative editing, all housed within an intuitive, searchable repository." 
  },
  { 
    category: "Product",
    question: "What communication features are included?", 
    answer: "Enjoy crystal-clear video conferencing, instant messaging, dedicated project channels, and threaded discussions designed to keep conversations focused and actionable." 
  },
  { 
    category: "Product",
    question: "How does VibeConnect support project management?", 
    answer: "From interactive Gantt charts and Kanban boards to automated sprint tracking and resource allocation, our tools adapt perfectly to your preferred agile or waterfall methodologies." 
  },
  { 
    category: "Product",
    question: "Is VibeConnect customizable?", 
    answer: "Yes. Every aspect of your workspace, from dashboard layouts and custom data fields to notification preferences and branding, can be tailored to match your unique workflow." 
  },
  { 
    category: "Mobile",
    question: "Is VibeConnect accessible via mobile devices?", 
    answer: "VibeConnect is engineered with a responsive mobile-first architecture and native app support for iOS and Android, ensuring full control over your projects anytime, anywhere." 
  },
  { 
    category: "Security",
    question: "What security measures are in place for data protection?", 
    answer: "We employ enterprise-grade end-to-end encryption, multi-factor authentication (MFA), and routine third-party penetration testing to guarantee your data remains impenetrable." 
  },
  { 
    category: "Security",
    question: "Can VibeConnect assist with compliance and audits?", 
    answer: "Our comprehensive audit trails, automated compliance reporting, and strict data retention policies make adhering to industry standards like SOC2 and GDPR effortless." 
  },
  { 
    category: "Onboarding",
    question: "How is user onboarding managed?", 
    answer: "We provide interactive guided tours, extensive documentation, and automated role-based permission assignment to ensure new team members hit the ground running on day one." 
  },
  { 
    category: "Pricing",
    question: "What is the pricing structure for VibeConnect?", 
    answer: "We offer flexible, scalable subscription tiers ranging from starter packages for small teams to bespoke enterprise solutions. Check our Pricing page for detailed information." 
  },
  { 
    category: "Support",
    question: "What support services does VibeConnect provide?", 
    answer: "Our dedicated success team offers 24/7 premium support via chat and email, along with dedicated account managers for our enterprise partners." 
  },
  { 
    category: "Onboarding",
    question: "Can I migrate my existing data to VibeConnect?", 
    answer: "Yes! We offer a seamless, one-click migration tool that supports importing data from platforms like Slack, Asana, Google Workspace, and Microsoft Teams without any data loss." 
  },
  { 
    category: "Pricing",
    question: "Is there a free trial available for the Enterprise plan?", 
    answer: "Absolutely. We provide a fully-featured 14-day free trial for all our plans, giving your team complete access to experience the premium capabilities of VibeConnect risk-free." 
  }
];

const categories = ["All", "General", "Product", "Security", "Pricing", "Support"];

export default function FAQ({ navigateTo }) {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleFlip = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const filteredFaqs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden min-h-screen flex flex-col relative selection:bg-primary/20 selection:text-primary">
      {/* Decorative Floating Orbs */}
      <div className="fixed top-[-10%] right-[-5%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-br from-[#f4c2c2]/25 to-transparent rounded-full blur-[90px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-gradient-to-tr from-[#ecbaba]/20 to-transparent rounded-full blur-[100px] sm:blur-[150px] pointer-events-none -z-10" />

      {/* Shared Responsive Navbar */}
      <Navbar currentPage={7} navigateTo={navigateTo} />

      <main className="relative flex-1 flex flex-col items-center pt-24 sm:pt-28 pb-20 px-4 sm:px-6 md:px-12 max-w-[1600px] mx-auto w-full z-10">
        
        {/* Header */}
        <div className={`text-center mb-10 sm:mb-14 fade-in-up ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/40 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="material-symbols-outlined text-sm">quiz</span>
            <span>Instant Answers</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight text-primary font-display">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto font-medium leading-relaxed">
            Everything you need to know about VibeConnect and how it can empower your organization. Hover on desktop or tap on mobile to reveal detailed answers.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-6 sm:mt-8">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    isSelected 
                      ? 'bg-primary text-on-primary shadow-md shadow-primary/25 scale-105' 
                      : 'bg-surface-container-high/60 text-on-surface hover:bg-surface-container-highest'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Flip Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredFaqs.map((faq, index) => {
            const isFlipped = !!flippedCards[index];
            return (
              <div 
                key={index}
                className={`flip-card-container fade-in-up ${isVisible ? 'visible' : ''} ${isFlipped ? 'is-flipped' : ''}`} 
                style={{ 
                  transitionDelay: `${(index % 8) * 0.05}s`, 
                  minHeight: '290px',
                  height: 'auto'
                }} 
                onClick={() => toggleFlip(index)}
              >
                <div className="flip-card-inner">
                  
                  {/* Card Front */}
                  <div className="flip-card-front p-6 sm:p-7 flex flex-col justify-between items-center text-center border border-outline-variant/30 shadow-md">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary-container/50 text-primary flex items-center justify-center mb-4 shadow-sm">
                      <span className="material-symbols-outlined text-2xl sm:text-3xl">help_outline</span>
                    </div>

                    <h3 className="text-on-surface font-headline-md text-base sm:text-lg font-bold leading-snug flex-1 flex items-center">
                      {faq.question}
                    </h3>

                    <div className="w-full pt-4 mt-3 border-t border-outline-variant/20 flex items-center justify-between text-xs font-semibold text-primary">
                      <span className="px-2 py-0.5 rounded-md bg-primary-container/30 text-[10px] uppercase font-bold tracking-wider">{faq.category}</span>
                      <span className="flex items-center gap-1 text-[11px]">
                        <span>Tap to flip</span>
                        <span className="material-symbols-outlined text-sm">sync</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Back */}
                  <div 
                    className="flip-card-back p-6 sm:p-8 flex flex-col justify-center items-center text-center relative overflow-hidden" 
                    style={{
                      background: 'linear-gradient(225deg, rgba(255,255,255,0.98) 0%, rgba(244,194,194,0.5) 50%, rgba(220,170,170,0.85) 100%)',
                      boxShadow: '0 20px 50px rgba(123,84,85,0.2)',
                      border: '1px solid rgba(255,255,255,0.8)'
                    }}
                  >
                    <span className="material-symbols-outlined text-primary text-2xl mb-2">lightbulb</span>
                    <p className="text-[#202020] text-xs sm:text-sm md:text-base font-semibold leading-relaxed drop-shadow-sm relative z-20">
                      {faq.answer}
                    </p>
                    <div className="mt-4 text-[10px] uppercase tracking-widest font-bold text-[#7b5455]">
                      Tap again to return
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Help Prompt */}
        <div className="mt-16 text-center p-8 rounded-3xl glass-card max-w-xl border border-outline-variant/30 shadow-lg">
          <h3 className="font-display font-bold text-lg sm:text-xl text-on-surface mb-2">Have a question not listed here?</h3>
          <p className="text-xs sm:text-sm text-on-surface-variant mb-4">Our dedicated product specialists are ready to answer any custom inquiry.</p>
          <button 
            onClick={() => navigateTo(6)}
            className="px-6 py-2.5 rounded-full bg-primary text-on-primary font-bold text-xs sm:text-sm hover:scale-105 transition-transform shadow-md cursor-pointer"
          >
            Ask a Specialist &rarr;
          </button>
        </div>

      </main>

      {/* Shared Responsive Footer */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
