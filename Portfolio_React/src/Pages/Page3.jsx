import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profilePic from '../assets/profile.jpg';

const Page3 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Reveal text block
    gsap.from('#about-content > div', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '#about',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });
  });

  const softSkills = [
    { name: 'Project Management', icon: 'ri-briefcase-line', color: 'from-blue-500/20 to-indigo-500/20' },
    { name: 'Teamwork', icon: 'ri-team-line', color: 'from-purple-500/20 to-pink-500/20' },
    { name: 'Time Management', icon: 'ri-time-line', color: 'from-emerald-500/20 to-teal-500/20' },
    { name: 'Leadership', icon: 'ri-compass-3-line', color: 'from-amber-500/20 to-orange-500/20' },
    { name: 'Critical Thinking', icon: 'ri-brain-line', color: 'from-red-500/20 to-rose-500/20' },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-[#09090b] text-white py-28 px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center border-b border-white/5 relative overflow-hidden"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-primary/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-secondary/10 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl w-full relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-[2px] w-8 bg-gradient-to-r from-primary to-secondary"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">01 / IDENTITY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-white">
            ABOUT ME
          </h2>
        </div>

        {/* Grid Content */}
        <div id="about-content" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Profile Summary & Story */}
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-secondary"></div>
              
              <h3 className="text-2xl font-bold font-display text-white mb-6">
                Bridging Logic & Visual Excellence
              </h3>
              
              <p className="text-zinc-300 font-sans leading-relaxed text-lg mb-6">
                I am a passionate <strong>Computer Science Engineering student (3rd year)</strong> at MIT Moradabad (affiliated to AKTU, Lucknow). With hands-on experience in MERN stack development and modern web technologies, I specialize in architecting responsive web applications with rich user interfaces.
              </p>
              
              <p className="text-zinc-400 font-sans leading-relaxed">
                Known for my problem-solving ability, leadership, and teamwork skills, I excel in high-pressure environments. From organizing tech symposiums to building AI-powered web assistants, I strive to push the boundaries of modern frontend and fullstack engineering.
              </p>
            </div>

            {/* Vision & Languages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Vision Card */}
              <div className="glass-panel p-6 rounded-2xl border border-white/5 shadow-xl">
                <div className="flex items-center gap-3 mb-3 text-secondary">
                  <i className="ri-rocket-line text-2xl"></i>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm font-display">Career Vision</h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  To leverage full-stack expertise to build next-generation SaaS tools, immersive 3D web experiences, and highly scalable products that deliver impactful user experiences.
                </p>
              </div>

              {/* Languages Card */}
              <div className="glass-panel p-6 rounded-2xl border border-white/5 shadow-xl">
                <div className="flex items-center gap-3 mb-3 text-accent">
                  <i className="ri-translate-2 text-2xl"></i>
                  <h4 className="font-bold text-white uppercase tracking-wider text-sm font-display">Languages</h4>
                </div>
                <div className="flex flex-col gap-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-zinc-300">
                    <span>English</span>
                    <span className="text-zinc-500">Professional</span>
                  </div>
                  <div className="w-full bg-zinc-800/50 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[85%] rounded-full"></div>
                  </div>
                  
                  <div className="flex items-center justify-between text-zinc-300 mt-2">
                    <span>Hindi</span>
                    <span className="text-zinc-500">Native</span>
                  </div>
                  <div className="w-full bg-zinc-800/50 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-full rounded-full"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Strengths & Soft Skills */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl relative">
              <h3 className="text-xl font-bold font-display text-white mb-6 flex items-center gap-2">
                <i className="ri-medal-line text-primary"></i> CORE STRENGTHS
              </h3>
              
              <div className="flex flex-col gap-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-x-1 group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} text-white group-hover:scale-110 transition-transform`}>
                      <i className={`${skill.icon} text-lg`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white font-sans text-sm tracking-wide">{skill.name}</h4>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">PROVEN ABILITY</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Page3;
