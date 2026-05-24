import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import resumePdf from '../assets/MahiCHSL.pdf';

const Page8 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from('#contact-hub > div', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });
  });

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#09090b] text-white pt-28 pb-12 px-6 md:px-12 lg:px-24 flex flex-col justify-between border-t border-white/5 relative overflow-hidden"
    >
      {/* Background Glow Orb */}
      <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto w-full relative z-10 my-auto">
        
        {/* Title */}
        <div className="flex flex-col mb-12 text-left">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-[2px] w-8 bg-gradient-to-r from-primary to-secondary"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">06 / CONNECTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-white">
            LET'S WORK TOGETHER
          </h2>
        </div>

        {/* Hiring Info Hub */}
        <div id="contact-hub" className="space-y-8">
          
          {/* Main pitch card */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden space-y-6">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-secondary to-accent"></div>
            
            {/* Availability status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono font-bold tracking-wide">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              OPEN FOR B.TECH INTERNSHIPS & FULL-TIME ROLES
            </div>

            <h3 className="text-xl md:text-2xl font-bold font-display text-white mt-4">
              Seeking Software Engineering Roles
            </h3>

            <p className="text-zinc-300 font-sans text-sm md:text-base leading-relaxed">
              I am actively looking for opportunities to join a professional engineering team. With solid hands-on experience in fullstack MERN development, database modeling, and problem-solving in Java, I am ready to contribute to scalable products and clean architectures.
            </p>

            {/* Direct Recruiter Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="mailto:usamrat2004@gmail.com"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-xs md:text-sm tracking-wide shadow-lg shadow-primary/10 hover:shadow-primary/30 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
              >
                <i className="ri-mail-send-line"></i> Email Me Directly
              </a>
              <a
                href={resumePdf}
                download="Uday_Software_Engineer_Resume.pdf"
                className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs md:text-sm tracking-wide border border-white/10 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
              >
                <i className="ri-download-2-line"></i> Download Resume PDF
              </a>
            </div>
          </div>

          {/* Grid coordinates & social channels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Quick coordinates panel */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4 text-xs md:text-sm text-left">
              <div className="flex items-center gap-3">
                <i className="ri-phone-line text-primary text-lg"></i>
                <div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase block">TELEPHONE</span>
                  <a href="tel:+918868081000" className="text-zinc-300 hover:text-white transition-colors">
                    +91 8868081000
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <i className="ri-map-pin-line text-secondary text-lg"></i>
                <div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase block">LOCATION</span>
                  <span className="text-zinc-300">Uttar Pradesh, India (Open to Relocate)</span>
                </div>
              </div>
            </div>

            {/* Social channels panel */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 flex items-center justify-around gap-4 text-center">
              <a
                href="https://www.linkedin.com/in/uday-samrat-440ba5394/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1.5 cursor-pointer text-zinc-400 hover:text-white transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                  <i className="ri-linkedin-fill text-lg"></i>
                </div>
                <span className="text-[9px] font-mono tracking-wider">LINKEDIN</span>
              </a>

              <a
                href="https://github.com/udsingh2024"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1.5 cursor-pointer text-zinc-400 hover:text-white transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-zinc-700/50 group-hover:border-zinc-500/40 transition-all">
                  <i className="ri-github-fill text-lg"></i>
                </div>
                <span className="text-[9px] font-mono tracking-wider">GITHUB</span>
              </a>

              <a
                href="https://leetcode.com/u/udsingh/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1.5 cursor-pointer text-zinc-400 hover:text-white transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-amber-600/20 group-hover:border-amber-500/40 transition-all">
                  <i className="ri-terminal-box-fill text-lg"></i>
                </div>
                <span className="text-[9px] font-mono tracking-wider">LEETCODE</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Footer copyright */}
      <footer className="w-full max-w-4xl mx-auto border-t border-white/5 pt-8 mt-16 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-600">
        <div>
          © 2026 UDAY. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-1">
          OPEN TO ROLE OFFERS <i className="ri-briefcase-fill text-primary ml-1"></i>
        </div>
      </footer>
    </section>
  );
};

export default Page8;
