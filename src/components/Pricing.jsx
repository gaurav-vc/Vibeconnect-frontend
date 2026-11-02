import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Pricing({ navigateTo }) {
  const [annualBilling, setAnnualBilling] = useState(false);

  return (
    <div className="bg-surface text-on-surface font-body-md antialiased overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col relative">
      {/* Decorative Floating Orbs */}
      <div className="fixed top-[-10%] right-[-5%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-br from-[#f4c2c2]/25 to-transparent rounded-full blur-[90px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-gradient-to-tr from-[#ecbaba]/20 to-transparent rounded-full blur-[100px] sm:blur-[150px] pointer-events-none -z-10" />

      {/* Shared Responsive Navbar */}
      <Navbar currentPage={4} navigateTo={navigateTo} />
      
      <main className="w-full flex-1 pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 text-center overflow-hidden">
          <div className="max-w-[800px] mx-auto flex flex-col items-center gap-4 sm:gap-6 fade-in-up visible">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/40 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">payments</span>
              <span>Transparent & Scalable Plans</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-on-surface tracking-tight">
              Elevate Your Workflow with <span className="text-primary">ProTier</span>
            </h1>

            <p className="font-body-lg text-sm sm:text-base md:text-lg text-on-surface-variant max-w-[620px] leading-relaxed">
              Experience enterprise-grade features designed for ambitious professionals. Select a plan tailored to scale seamlessly with your team.
            </p>

            {/* Monthly / Annual Toggle */}
            <div className="flex items-center gap-3 p-1.5 rounded-full bg-surface-container-high/70 border border-outline-variant/30 mt-2">
              <button 
                onClick={() => setAnnualBilling(false)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  !annualBilling ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Monthly Billing
              </button>
              <button 
                onClick={() => setAnnualBilling(true)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  annualBilling ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span>Annual Billing</span>
                <span className="px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase">Save 20%</span>
              </button>
            </div>
          </div>
        </section>
        
        {/* Pricing Cards Section */}
        <section className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 pb-20 sm:pb-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch fade-in-up visible">
            
            {/* Basic Plan */}
            <div className="flex flex-col rounded-3xl border border-outline-variant/40 bg-surface-container-lowest/80 backdrop-blur-xl p-6 sm:p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 relative z-10">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant/70">Starter</span>
                <h3 className="font-display text-2xl font-bold text-on-surface mt-1 mb-2">Basic Tier</h3>
                <p className="font-body-md text-xs sm:text-sm text-on-surface-variant mb-6">Essential tools for individuals and small teams beginning their scaling journey.</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-on-surface">
                    ${annualBilling ? '22' : '29'}
                  </span>
                  <span className="font-body-md text-sm text-on-surface-variant">/ user / mo</span>
                </div>
              </div>

              <button 
                onClick={() => navigateTo(2)}
                className="w-full py-3.5 px-4 rounded-full bg-surface-container-high text-on-surface font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-all shadow-sm mb-8 cursor-pointer active:scale-95"
              >
                Get Started Free
              </button>

              <div className="border-t border-outline-variant/20 pt-6 mt-auto">
                <p className="text-xs font-bold uppercase tracking-wider text-on-surface mb-4">Included in Basic:</p>
                <ul className="flex flex-col gap-3.5 text-xs sm:text-sm text-on-surface-variant">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                    <span>Core Task & Sprint Engine</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                    <span>Standard Community Support</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                    <span>Up to 5 Active Workspaces</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                    <span>10 GB Encrypted Cloud Storage</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Pro Plan (Most Popular) */}
            <div className="flex flex-col rounded-3xl border-2 border-primary bg-surface-container-lowest/95 backdrop-blur-2xl p-7 sm:p-10 shadow-2xl relative z-20 md:-translate-y-3 hover:-translate-y-4 transition-all">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-[#9a6c6d] text-on-primary text-xs font-extrabold uppercase px-4 py-1.5 rounded-full shadow-lg tracking-wider whitespace-nowrap">
                ★ Most Popular Choice
              </div>

              <div className="mb-6 mt-2">
                <span className="text-xs uppercase tracking-widest font-bold text-primary">High-Growth</span>
                <h3 className="font-display text-3xl font-extrabold text-primary mt-1 mb-2">Professional</h3>
                <p className="font-body-md text-xs sm:text-sm text-on-surface-variant mb-6">Advanced modular capabilities for growing organizations and fast-paced teams.</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl sm:text-6xl font-black text-on-surface">
                    ${annualBilling ? '62' : '79'}
                  </span>
                  <span className="font-body-md text-sm text-on-surface-variant">/ user / mo</span>
                </div>
              </div>

              <button 
                onClick={() => navigateTo(2)}
                className="w-full py-4 px-4 rounded-full bg-primary text-on-primary font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 mb-8 cursor-pointer active:scale-95"
              >
                Start 14-Day Pro Trial
              </button>

              <div className="border-t border-outline-variant/30 pt-6 mt-auto">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-4">Everything in Basic, plus:</p>
                <ul className="flex flex-col gap-3.5 text-xs sm:text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                    <span className="text-on-surface font-semibold">Priority 24/7 SLA Support</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                    <span className="text-on-surface font-semibold">Unlimited Workspace Projects</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                    <span className="text-on-surface font-semibold">Executive Analytics & Velocity Metrics</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                    <span className="text-on-surface font-semibold">Meeting Management & MOM Auto-Generation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                    <span className="text-on-surface font-semibold">100 GB Cloud Storage per seat</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="flex flex-col rounded-3xl border border-outline-variant/40 bg-surface-container-lowest/80 backdrop-blur-xl p-6 sm:p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 relative z-10">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant/70">Custom Scale</span>
                <h3 className="font-display text-2xl font-bold text-on-surface mt-1 mb-2">Enterprise</h3>
                <p className="font-body-md text-xs sm:text-sm text-on-surface-variant mb-6">Tailored architecture and dedicated infrastructure for enterprise governance.</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold text-on-surface">
                    ${annualBilling ? '159' : '199'}
                  </span>
                  <span className="font-body-md text-sm text-on-surface-variant">/ user / mo</span>
                </div>
              </div>

              <button 
                onClick={() => navigateTo(6)}
                className="w-full py-3.5 px-4 rounded-full bg-surface-container-high text-on-surface font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-all shadow-sm mb-8 cursor-pointer active:scale-95"
              >
                Contact Enterprise Sales
              </button>

              <div className="border-t border-outline-variant/20 pt-6 mt-auto">
                <p className="text-xs font-bold uppercase tracking-wider text-on-surface mb-4">Enterprise Highlights:</p>
                <ul className="flex flex-col gap-3.5 text-xs sm:text-sm text-on-surface-variant">
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                    <span>All Professional Capabilities</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                    <span>Dedicated Technical Account Manager</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                    <span>Custom REST/GraphQL API Integration</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                    <span>Custom SSO, SAML & SOC2 Audit Trails</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-lg shrink-0">check_circle</span>
                    <span>Unlimited Secure Storage & Custom Backup</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>
        
        {/* Testimonials */}
        <section className="bg-surface-container-low/70 py-16 sm:py-24 px-4 sm:px-6 md:px-12 border-t border-outline-variant/20">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-on-surface mb-3">Trusted by Industry Leaders</h2>
              <p className="font-body-lg text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto">
                Discover why premier organizations depend on VibeConnect to power their daily work execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Testimonial 1 */}
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-surface-container-lowest shadow-md border border-outline-variant/30 fade-in-up visible">
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl overflow-hidden border-2 border-primary-container">
                  <img className="w-full h-full object-cover" alt="Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1JCjFx41DYznhEoDV2Zm4cuxNmSZqCk9pN1U2QhrOKouUpeJ7W5wFb8iZKOTQ81_Wku3ECesiRkueMDK6P2cmPmZewkyc6-voBtZY2U2tki98CNS441lVOqOmQaOBYTihQxxzvVNo56lHYzZhg67VqwUpwpeKBMUSshjasqGPyfPhVosEzjVby_PysZOWRYcwTXvaZHJrGd5lpZTLWLyHGMM0hetyRMmgng4OnQoESOiSSOAZY7AZ"/>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex gap-1 mb-2 text-primary">
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                  </div>
                  <p className="font-body-lg text-xs sm:text-sm text-on-surface italic mb-3 leading-relaxed">
                    "Switching to VibeConnect Pro was the best architectural decision for our product team. The modular features are unmatched and the interface is breathtaking."
                  </p>
                  <div>
                    <h4 className="font-headline-md text-sm font-bold text-on-surface">Sarah Jenkins</h4>
                    <p className="font-body-md text-xs text-on-surface-variant">Creative Director, DesignCo</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-surface-container-lowest shadow-md border border-outline-variant/30 fade-in-up visible">
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl overflow-hidden border-2 border-primary-container">
                  <img className="w-full h-full object-cover" alt="Michael Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-UEMkOu0F79MglxF43HfP02Ri7ZaM16yEf3l9bPZ_FF8yNx2Tolx4FvqOb7b4KUg0YBJobSRV7UlDeapAzfBlUQRLlMJ4ultWvz80g-Nv4-kLAix9-4kucA1avqtdqf8bXOeQueKhhXlp5YK4o1WcXTDMqpC4EZ1Qu-eeEsplGkUPiSqxHp9tnd9555k5bgpa-4FlUqNIRQjTgblM2q6sFPqOQCw0oiFUkyp362tajus4EBo_4EOq"/>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex gap-1 mb-2 text-primary">
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                    <span className="material-symbols-outlined text-base">star</span>
                  </div>
                  <p className="font-body-lg text-xs sm:text-sm text-on-surface italic mb-3 leading-relaxed">
                    "The Enterprise tier gives us total control over governance, multi-project velocity, and compliance. Highly recommended for any scaling organization."
                  </p>
                  <div>
                    <h4 className="font-headline-md text-sm font-bold text-on-surface">Michael Chen</h4>
                    <p className="font-body-md text-xs text-on-surface-variant">Chief Technology Officer, TechFlow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Shared Responsive Footer */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
