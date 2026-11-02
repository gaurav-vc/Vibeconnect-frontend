import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ContactUs({ navigateTo }) {
  const [isVisible, setIsVisible] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSent(true);
      setTimeout(() => {
        setFormSent(false);
        setFormData({ name: '', email: '', message: '' });
      }, 4000);
    }
  };

  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden min-h-screen flex flex-col relative selection:bg-primary/20 selection:text-primary">
      {/* Decorative Orbs */}
      <div className="fixed top-[-10%] right-[-5%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-br from-[#f4c2c2]/25 to-transparent rounded-full blur-[90px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-gradient-to-tr from-[#ecbaba]/20 to-transparent rounded-full blur-[100px] sm:blur-[150px] pointer-events-none -z-10" />

      {/* Shared Responsive Navbar */}
      <Navbar currentPage={6} navigateTo={navigateTo} />

      <main className="relative flex-1 flex flex-col lg:flex-row items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 md:px-12 max-w-[1600px] mx-auto w-full gap-10 lg:gap-16">
        
        {/* Left Side: Content & Actions */}
        <div className="flex-1 flex flex-col w-full z-10">
          <div className={`mb-8 sm:mb-12 fade-in-up ${isVisible ? 'visible' : ''}`}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-container/40 text-primary border border-primary/20 text-xs font-bold uppercase tracking-widest mb-4">
              <span className="material-symbols-outlined text-sm">support_agent</span>
              <span>Direct Support Team</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight text-primary font-display">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl font-medium leading-relaxed">
              We're here to elevate your operations. Reach out to our solution architects for customized platform demonstrations and onboarding assistance.
            </p>
          </div>

          {/* Quick Connect Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-3xl mb-8">
            
            {/* Email Card */}
            <a 
              href="mailto:anurag.sharma@vibecopilot.ai" 
              className={`hover-shine-card glass-card p-6 sm:p-7 rounded-[1.75rem] flex flex-col items-start group fade-in-up ${isVisible ? 'visible' : ''} no-underline border border-outline-variant/30 hover:border-primary/50 shadow-md`} 
              style={{ transitionDelay: '0.15s' }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 rounded-2xl bg-primary-container flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-glow">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">alternate_email</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-on-surface mb-1 tracking-tight font-display">Email Us</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mb-4">Expect a response within 2 business hours.</p>
              <div className="mt-auto text-xs sm:text-sm md:text-base font-bold text-primary group-hover:text-primary transition-colors flex items-center gap-1.5 duration-300 break-all">
                <span>anurag.sharma@vibecopilot.ai</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1.5 transition-transform duration-300 shrink-0">arrow_forward</span>
              </div>
            </a>

            {/* Call Card */}
            <a 
              href="tel:+918423298423" 
              className={`hover-shine-card glass-card p-6 sm:p-7 rounded-[1.75rem] flex flex-col items-start group fade-in-up ${isVisible ? 'visible' : ''} no-underline border border-outline-variant/30 hover:border-primary/50 shadow-md`} 
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 rounded-2xl bg-primary flex items-center justify-center text-on-primary group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 shadow-lg shadow-primary/25">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">phone_in_talk</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-on-surface mb-1 tracking-tight font-display">Call Us Directly</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mb-4">Mon–Sat from 9:00 AM to 7:00 PM IST.</p>
              <div className="mt-auto text-base sm:text-lg font-bold text-primary tracking-wide transition-colors flex items-center gap-1.5 duration-300">
                <span>+91 84232 98423</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1.5 transition-transform duration-300">arrow_forward</span>
              </div>
            </a>
          </div>

          {/* Quick Message Form */}
          <div className="glass-card p-6 sm:p-8 rounded-[1.75rem] max-w-3xl border border-outline-variant/30 shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold text-on-surface mb-2 font-display">Send a Quick Message</h3>
            <p className="text-xs sm:text-sm text-on-surface-variant mb-5">Fill in your information and our team will get right back to you.</p>

            {formSent ? (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3 animate-fade-in">
                <span className="material-symbols-outlined text-2xl text-emerald-600">check_circle</span>
                <div>
                  <p className="text-sm font-bold">Message sent successfully!</p>
                  <p className="text-xs">Thank you for reaching out. We will contact you shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">Work Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">Message / Inquiry</label>
                  <textarea 
                    rows={3}
                    placeholder="Tell us about your team size or specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full sm:w-auto self-start px-8 py-3 rounded-full bg-primary text-on-primary font-bold text-sm tracking-wide hover:bg-primary/90 transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">send</span>
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Right Side: Office Visual */}
        <div className={`flex-1 w-full max-w-xl lg:max-w-none relative z-10 fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <div className="relative w-full aspect-[4/3] sm:aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl group border border-outline-variant/30">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-105" 
              style={{ backgroundImage: "url('/contact_office.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/50 via-background/10 to-transparent" />
            
            {/* Visual Glass Overlay Badge */}
            <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl glass-card backdrop-blur-xl border border-white/60 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">location_city</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-surface">Modern Enterprise Innovation Hub</h4>
                  <p className="text-xs text-on-surface-variant">Mumbai & Pan-India Regional Collaborations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Shared Responsive Footer */}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
