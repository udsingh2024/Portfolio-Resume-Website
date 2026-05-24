import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Page5 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const projects = [
    {
      title: 'XpertAdviceHub',
      role: 'Lead Fullstack Developer',
      stack: ['MERN Stack', 'Node.js', 'MongoDB', 'JWT Auth'],
      desc: 'A full-stack role-based marketplace enabling connections between experts and customers. Features multi-role dashboards supporting Customer, Expert, Admin, and Super Admin interactions, complete with secure transactions and chat structures.',
      gitLink: 'https://github.com/udsingh2024',
      glow: 'shadow-blue-500/10 border-blue-500/20',
      gradient: 'from-blue-600/20 via-indigo-600/5 to-transparent',
    },
    {
      title: 'Virtual Assistant Web App',
      role: 'Creative Frontend Developer',
      stack: ['React.js', 'Node.js', 'Speech APIs', 'GSAP'],
      desc: 'An interactive web assistant capable of responding to voice commands and text queries. Implements real-time Web Speech APIs for speech synthesis/recognition and interfaces with lightweight LLM engines.',
      gitLink: 'https://github.com/udsingh2024',
      glow: 'shadow-purple-500/10 border-purple-500/20',
      gradient: 'from-purple-600/20 via-pink-600/5 to-transparent',
    },
    {
      title: 'EcoIntellect Waste Manager',
      role: 'Backend & ML Engineer',
      stack: ['React', 'Python', 'ML Classification', 'MongoDB'],
      desc: 'A smart city waste sorting and management platform. Leverages a python backend for image recognition (waste classification) coupled with a MERN stack web app for scheduling, analytics, and rewards.',
      gitLink: 'https://github.com/udsingh2024',
      glow: 'shadow-emerald-500/10 border-emerald-500/20',
      gradient: 'from-emerald-600/20 via-teal-600/5 to-transparent',
    },
    {
      title: 'Spotify Backend APIs',
      role: 'Backend Architect',
      stack: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB'],
      desc: 'A robust collection of backend APIs mimicking Spotify. Manages user subscriptions, song catalogs, playlist sharing, tracks tracking, and audio streaming operations with high-performance routing.',
      gitLink: 'https://github.com/udsingh2024',
      glow: 'shadow-orange-500/10 border-orange-500/20',
      gradient: 'from-orange-600/20 via-yellow-600/5 to-transparent',
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#09090b] text-white py-28 px-4 sm:px-8 md:px-16 lg:px-24 border-b border-white/5 relative overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/3 right-10 h-96 w-96 rounded-full bg-primary/5 blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 h-80 w-80 rounded-full bg-secondary/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="flex flex-col mb-20 text-left">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-[2px] w-8 bg-gradient-to-r from-primary to-secondary"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">03 / SHOWCASE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-white">
            FEATURED PROJECTS
          </h2>
          <p className="text-zinc-400 text-sm mt-3 max-w-xl">
            A selection of key applications. Scroll to stack each layer.
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div className="relative space-y-16">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`project-sticky-card sticky rounded-3xl border border-white/10 shadow-2xl overflow-hidden glass-panel flex flex-col p-8 md:p-10 transition-all duration-300 ${project.glow}`}
              style={{
                top: `${100 + idx * 35}px`,
                zIndex: idx + 10,
              }}
            >
              {/* Card internal gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 z-0`}></div>

              <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                
                {/* Card Header metadata */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                    PROJECT 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono text-primary font-bold tracking-widest uppercase">
                    {project.role}
                  </span>
                </div>

                {/* Main Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-black font-display text-white">
                    {project.title}
                  </h3>

                  <p className="text-zinc-300 font-sans text-xs md:text-sm leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Stack Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-white/5 text-zinc-400 text-xs border border-white/5 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer action links */}
                <div className="border-t border-white/5 pt-6 mt-6 flex items-center justify-between">
                  <a
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold text-white hover:text-primary transition-colors cursor-pointer group"
                  >
                    <i className="ri-github-fill text-lg group-hover:scale-110 transition-transform"></i> View Repository
                  </a>
                  <span className="text-[10px] font-mono text-zinc-500">MERN DEVELOPMENT</span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Page5;
