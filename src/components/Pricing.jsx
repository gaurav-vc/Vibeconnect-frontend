import React, { useEffect } from 'react';
import Logo from './Logo';
import Footer from './Footer';

export default function Pricing({ navigateTo }) {
  return (
    <div className="bg-surface text-on-surface font-body-md antialiased overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-surface-variant bg-surface-container-lowest/80 backdrop-blur-md">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-on-surface">
            <Logo />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => navigateTo(1)} className="text-on-surface-variant hover:text-primary transition-colors font-label-sm uppercase">Home</button>
            <button onClick={() => navigateTo(3)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal">Features</button>
            <button onClick={() => navigateTo(4)} className="text-on-surface-variant hover:text-primary transition-colors font-label-sm uppercase text-primary font-bold">Pricing</button>
            <button onClick={() => navigateTo(5)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal">Experience</button>
            <button onClick={() => navigateTo(6)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal">Contact Us</button>
            <button onClick={() => navigateTo(7)} className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium leading-normal">FAQ</button>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center justify-center px-4 py-2 text-on-surface font-label-sm uppercase hover:bg-surface-variant rounded-lg transition-colors">Log In</button>
            <button onClick={() => navigateTo(2)} className="flex items-center justify-center px-6 py-2 bg-primary-container text-on-primary-container font-label-sm uppercase rounded-lg hover:bg-primary hover:text-on-primary transition-colors shadow-sm">Sign Up</button>
          </div>
        </div>
      </header>
      
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-margin-mobile md:px-margin-desktop text-center overflow-hidden">
          {/* Decorative background blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container/20 rounded-full blur-3xl -z-10"></div>
          <div className="max-w-[800px] mx-auto flex flex-col items-center gap-6 fade-in-up visible">
            <span className="inline-block py-1.5 px-4 rounded-full bg-surface-variant text-on-surface-variant font-label-sm uppercase tracking-wider">Premium Experience</span>
            <h1 className="font-display text-display text-on-surface">Elevate Your Workflow with <span className="text-primary">ProTier</span></h1>
            <p className="font-body-lg text-on-surface-variant max-w-[600px]">Experience top-tier features designed for ambitious professionals. Select a plan tailored to scale alongside your success.</p>
          </div>
        </section>
        
        {/* Pricing Cards Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center fade-in-up visible" style={{ transitionDelay: '0.1s' }}>
            {/* Basic Plan */}
            <div className="flex flex-col rounded-2xl border border-outline-variant bg-surface-container-lowest p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 h-full relative z-10">
              <div className="mb-8">
                <h3 className="font-headline-md text-on-surface mb-2">Basic</h3>
                <p className="font-body-md text-on-surface-variant mb-6">Essential tools for individuals starting their journey.</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl text-on-surface">$29</span>
                  <span className="font-body-md text-on-surface-variant">/month</span>
                </div>
              </div>
              <button className="w-full py-3 px-4 rounded-lg bg-surface-variant text-on-surface font-label-sm uppercase hover:bg-outline-variant transition-colors mb-8">Start Basic</button>
              <ul className="flex flex-col gap-4 mt-auto">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span className="font-body-md text-on-surface-variant">Core feature access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span className="font-body-md text-on-surface-variant">Standard support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span className="font-body-md text-on-surface-variant">Up to 3 projects</span>
                </li>
              </ul>
            </div>
            
            {/* Pro Plan (Most Popular) */}
            <div className="flex flex-col rounded-3xl border-2 border-primary glass-panel p-10 shadow-2xl md:-translate-y-4 hover:-translate-y-5 transition-all relative z-20 h-[105%]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-label-sm uppercase px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                Most Popular
              </div>
              <div className="mb-8 mt-2">
                <h3 className="font-headline-lg text-primary mb-2">Pro</h3>
                <p className="font-body-md text-on-surface-variant mb-6">Advanced capabilities for growing teams and agencies.</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl text-on-surface">$79</span>
                  <span className="font-body-md text-on-surface-variant">/month</span>
                </div>
              </div>
              <button className="w-full py-4 px-4 rounded-xl bg-primary text-on-primary font-label-sm uppercase hover:bg-surface-tint transition-all shadow-lg hover:shadow-xl mb-8">Get Pro Now</button>
              <ul className="flex flex-col gap-5 mt-auto">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span className="font-body-md text-on-surface font-medium">All Basic features</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span className="font-body-md text-on-surface-variant">Priority 24/7 support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span className="font-body-md text-on-surface-variant">Unlimited projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span className="font-body-md text-on-surface-variant">Advanced analytics dashboard</span>
                </li>
              </ul>
            </div>
            
            {/* Enterprise Plan */}
            <div className="flex flex-col rounded-2xl border border-outline-variant bg-surface-container-lowest p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 h-full relative z-10">
              <div className="mb-8">
                <h3 className="font-headline-md text-on-surface mb-2">Enterprise</h3>
                <p className="font-body-md text-on-surface-variant mb-6">Custom solutions for large-scale operations.</p>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl text-on-surface">$199</span>
                  <span className="font-body-md text-on-surface-variant">/month</span>
                </div>
              </div>
              <button className="w-full py-3 px-4 rounded-lg bg-surface-container border border-outline text-on-surface font-label-sm uppercase hover:bg-surface-variant transition-colors mb-8">Contact Sales</button>
              <ul className="flex flex-col gap-4 mt-auto">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span className="font-body-md text-on-surface-variant">All Pro features</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span className="font-body-md text-on-surface-variant">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span className="font-body-md text-on-surface-variant">Custom API integration</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Social Proof / Testimonials */}
        <section className="bg-surface-container-low py-24 px-margin-mobile md:px-margin-desktop border-t border-surface-variant">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-on-surface mb-4">Trusted by Industry Leaders</h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">See how top professionals are leveraging ProTier to accelerate their growth and streamline operations.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="flex flex-col md:flex-row gap-6 p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 fade-in-up visible" style={{ transitionDelay: '0.1s' }}>
                <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border-2 border-primary-container">
                  <img className="w-full h-full object-cover" alt="Sarah Jenkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1JCjFx41DYznhEoDV2Zm4cuxNmSZqCk9pN1U2QhrOKouUpeJ7W5wFb8iZKOTQ81_Wku3ECesiRkueMDK6P2cmPmZewkyc6-voBtZY2U2tki98CNS441lVOqOmQaOBYTihQxxzvVNo56lHYzZhg67VqwUpwpeKBMUSshjasqGPyfPhVosEzjVby_PysZOWRYcwTXvaZHJrGd5lpZTLWLyHGMM0hetyRMmgng4OnQoESOiSSOAZY7AZ"/>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex gap-1 mb-3 text-primary-container">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="font-body-lg text-on-surface italic mb-4">"Switching to the Pro tier was the best decision for our team. The premium features are unmatched and the interface is elegantly designed."</p>
                  <div>
                    <h4 className="font-headline-md text-base text-on-surface">Sarah Jenkins</h4>
                    <p className="font-body-md text-sm text-on-surface-variant">Creative Director, DesignCo</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="flex flex-col md:flex-row gap-6 p-8 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 fade-in-up visible" style={{ transitionDelay: '0.2s' }}>
                <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border-2 border-primary-container">
                  <img className="w-full h-full object-cover" alt="Michael Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-UEMkOu0F79MglxF43HfP02Ri7ZaM16yEf3l9bPZ_FF8yNx2Tolx4FvqOb7b4KUg0YBJobSRV7UlDeapAzfBlUQRLlMJ4ultWvz80g-Nv4-kLAix9-4kucA1avqtdqf8bXOeQueKhhXlp5YK4o1WcXTDMqpC4EZ1Qu-eeEsplGkUPiSqxHp9tnd9555k5bgpa-4FlUqNIRQjTgblM2q6sFPqOQCw0oiFUkyp362tajus4EBo_4EOq"/>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex gap-1 mb-3 text-primary-container">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="font-body-lg text-on-surface italic mb-4">"The enterprise plan gives us everything we need and more. Highly recommended for scaling businesses that value refined user experiences."</p>
                  <div>
                    <h4 className="font-headline-md text-base text-on-surface">Michael Chen</h4>
                    <p className="font-body-md text-sm text-on-surface-variant">CTO, TechFlow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Shared Footer */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
