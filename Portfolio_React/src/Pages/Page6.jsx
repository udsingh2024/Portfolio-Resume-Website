import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Page6 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Animate timeline nodes
    gsap.from('.timeline-item', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '#experience',
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    });

    // Grow the timeline line
    gsap.from('.timeline-line', {
      height: '0%',
      duration: 2,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.timeline-container',
        start: 'top 60%',
        end: 'bottom 80%',
        scrub: true,
      },
    });
  });

  const achievements = [
    {
      year: '2026',
      title: '1st Position - Ideathon 2026',
      subtitle: 'Smart Traffic Innovation Project',
      desc: 'Developed and pitched a smart traffic flow optimization prototype using computer vision and edge nodes. Awarded first place for technology innovation and feasibility.',
      icon: 'ri-trophy-line',
      color: 'bg-amber-500 shadow-amber-500/50',
    },
    {
      year: '2026',
      title: 'Internship Offer - Elevance Skills',
      subtitle: 'Software Engineering Trainee',
      desc: 'Secured first formal software engineering internship offer. Prepared to develop core MERN stack widgets and optimize databases for corporate products.',
      icon: 'ri-briefcase-line',
      color: 'bg-blue-500 shadow-blue-500/50',
    },
    {
      year: '2026',
      title: 'Coordinator of Hi-Tech 2026',
      subtitle: 'Department Technical Event Organizer',
      desc: 'Led a student coordination team of 15 members to plan, market, and manage department-wide tech events, programming battles, and panel talks.',
      icon: 'ri-group-line',
      color: 'bg-purple-500 shadow-purple-500/50',
    },
    {
      year: '2025 - Present',
      title: 'BharatiFastNews Portal',
      subtitle: 'Founder & Fullstack Developer',
      desc: 'Architected and launched a local news publication site attracting 500+ regular views. Managed layout engineering, databases, and responsive design.',
      icon: 'ri-global-line',
      color: 'bg-emerald-500 shadow-emerald-500/50',
    },
    {
      year: '2025',
      title: 'NPTEL Machine Learning Course',
      subtitle: 'Certification - IIT Madras (70% Score)',
      desc: 'Completed rigorous theoretical and practical coursework in machine learning modeling, gradient descent optimization, and regression models.',
      icon: 'ri-award-line',
      color: 'bg-red-500 shadow-red-500/50',
    },
    {
      year: '2023 - Present',
      title: 'Hackathon Competitor',
      subtitle: '4+ Hackathons Participation',
      desc: 'Collaborated in multi-disciplinary teams to create working prototypes under 36-hour timelines. Gained extensive practice in Git workflows and rapid app assembly.',
      icon: 'ri-gamepad-line',
      color: 'bg-pink-500 shadow-pink-500/50',
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-[#09090b] text-white py-28 px-4 sm:px-8 md:px-16 lg:px-24 border-b border-white/5 relative overflow-hidden"
    >
      {/* Background glow orb */}
      <div className="absolute top-1/4 left-10 h-96 w-96 rounded-full bg-secondary/5 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-[2px] w-8 bg-gradient-to-r from-primary to-secondary"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">04 / MILESTONES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-white">
            EXPERIENCE & ACHIEVEMENTS
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container relative max-w-4xl mx-auto mt-12 pl-12 md:pl-0">
          
          {/* Main vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-800 pointer-events-none transform -translate-x-1/2">
            <div className="timeline-line w-full bg-gradient-to-b from-primary via-secondary to-accent h-full"></div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {achievements.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className="timeline-item flex flex-col md:flex-row items-start md:items-center relative w-full group"
                >
                  
                  {/* Left spacer / content for larger screens */}
                  <div className={`w-full md:w-1/2 md:pr-12 text-left md:text-right ${isEven ? 'md:block' : 'hidden md:block'}`}>
                    {isEven && (
                      <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-all shadow-lg shadow-black/20 relative">
                        <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase mb-1 block">{item.year}</span>
                        <h3 className="text-lg font-bold font-display text-white">{item.title}</h3>
                        <p className="text-xs text-zinc-400 font-medium mb-2">{item.subtitle}</p>
                        <p className="text-zinc-300 font-sans text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Icon Node in center */}
                  <div className="absolute left-6 md:left-1/2 h-10 w-10 rounded-full border-4 border-zinc-950 flex items-center justify-center text-white z-20 transform -translate-x-1/2 bg-zinc-900 group-hover:scale-110 transition-transform">
                    <span className={`absolute inset-0 rounded-full blur-[6px] opacity-40 group-hover:opacity-80 transition-opacity ${item.color.split(' ')[0]}`}></span>
                    <div className={`h-full w-full rounded-full flex items-center justify-center relative z-10 ${item.color.split(' ')[0]}`}>
                      <i className={`${item.icon} text-xs`}></i>
                    </div>
                  </div>

                  {/* Right spacer / content for larger screens */}
                  <div className={`w-full md:w-1/2 md:pl-12 text-left ${!isEven ? 'block' : 'block md:hidden'}`}>
                    {!isEven && (
                      <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-secondary/30 transition-all shadow-lg shadow-black/20 relative">
                        <span className="text-xs font-mono font-bold text-secondary tracking-widest uppercase mb-1 block">{item.year}</span>
                        <h3 className="text-lg font-bold font-display text-white">{item.title}</h3>
                        <p className="text-xs text-zinc-400 font-medium mb-2">{item.subtitle}</p>
                        <p className="text-zinc-300 font-sans text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    )}
                    {/* Mobile fallback when even index items need to show in the right slot */}
                    {isEven && (
                      <div className="block md:hidden glass-panel p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-all shadow-lg shadow-black/20 relative">
                        <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase mb-1 block">{item.year}</span>
                        <h3 className="text-lg font-bold font-display text-white">{item.title}</h3>
                        <p className="text-xs text-zinc-400 font-medium mb-2">{item.subtitle}</p>
                        <p className="text-zinc-300 font-sans text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Page6;
