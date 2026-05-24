import React, { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Page4 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const skillCategories = [
    {
      title: 'Programming',
      icon: 'ri-code-s-slash-line',
      desc: 'Writing clean, optimized code for computational logic and data structures.',
      items: [
        { name: 'Java', level: 90, desc: 'Data structures, algorithm design, and core JVM architectures.' },
        { name: 'JavaScript', level: 85, desc: 'Interactive scripts, DOM operations, and asynchronous loops.' },
        { name: 'Python', level: 75, desc: 'Script writing, ML model interfacing, and data utilities.' },
        { name: 'C Language', level: 80, desc: 'Procedural logic, pointers memory control, and basic compilers.' },
      ],
    },
    {
      title: 'Frontend Dev',
      icon: 'ri-layout-masonry-line',
      desc: 'Building responsive, premium user interfaces with clean animations.',
      items: [
        { name: 'React.js', level: 90, desc: 'Custom hooks, Context providers, state systems, and lazy loading.' },
        { name: 'Next.js', level: 80, desc: 'Server components, static page generation, and search optimization.' },
        { name: 'Tailwind CSS', level: 95, desc: 'Fluid design systems, media breakpoints, and glassmorphic panels.' },
        { name: 'HTML & CSS', level: 95, desc: 'Semantic layouts, keyframes, transitions, and flexbox coordinates.' },
      ],
    },
    {
      title: 'Backend Dev',
      icon: 'ri-server-line',
      desc: 'Architecting fast, secure RESTful application servers and API routing.',
      items: [
        { name: 'Node.js', level: 85, desc: 'Runtime execution, module patterns, and file streams.' },
        { name: 'Express.js', level: 85, desc: 'Middleware pipelines, JSON API routing, and error handlers.' },
        { name: 'REST APIs', level: 88, desc: 'Endpoint designs, status validation, and integration tests.' },
      ],
    },
    {
      title: 'Databases',
      icon: 'ri-database-2-line',
      desc: 'Designing schema models and database aggregation pipelines.',
      items: [
        { name: 'MongoDB', level: 85, desc: 'Mongoose schemas, collection queries, indexes, and aggregations.' },
        { name: 'SQL Basics', level: 70, desc: 'Table connections, selects, and database migrations.' },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: 'ri-tools-line',
      desc: 'Managing version histories, packaging systems, and dev tools.',
      items: [
        { name: 'Git & GitHub', level: 90, desc: 'Branch controls, remote merges, conflicts fixing, and Actions.' },
        { name: 'Docker', level: 70, desc: 'Image packaging, containers configurations, and microservices.' },
        { name: 'VS Code & IntelliJ', level: 95, desc: 'Debug configurations, short keys flow, and custom workspaces.' },
      ],
    },
  ];

  // GSAP tab switch animation
  useGSAP(() => {
    gsap.fromTo(
      '.skills-display-container',
      { opacity: 0, x: 20, scale: 0.98 },
      { opacity: 1, x: 0, scale: 1, duration: 0.5, ease: 'power2.out' }
    );
  }, [activeTab]);

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#09090b] text-white py-28 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col justify-center items-center border-b border-white/5 relative overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl w-full relative z-10">
        
        {/* Title */}
        <div className="flex flex-col mb-16 text-left">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-[2px] w-8 bg-gradient-to-r from-primary to-secondary"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">02 / EXPERTISE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-white">
            TECHNICAL SKILLS
          </h2>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Tab Selectors (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            {skillCategories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`w-full flex items-center justify-between p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                  activeTab === idx
                    ? 'bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/50 shadow-lg shadow-primary/5 text-white'
                    : 'bg-zinc-900/30 border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl transition-all ${
                    activeTab === idx ? 'bg-primary text-white shadow-md shadow-primary/20' : 'bg-white/5 text-zinc-400'
                  }`}>
                    <i className={`${category.icon} text-lg`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm md:text-base font-display">{category.title}</h4>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      {category.items.length} Techs
                    </span>
                  </div>
                </div>
                <i className={`ri-arrow-right-s-line text-xl transition-transform duration-300 ${
                  activeTab === idx ? 'translate-x-1 text-primary' : 'text-zinc-600'
                }`}></i>
              </button>
            ))}
          </div>

          {/* Right Column: Display Panel (8 cols) */}
          <div className="lg:col-span-8">
            <div className="skills-display-container glass-panel p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative min-h-[480px] flex flex-col justify-between">
              {/* Radial gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent z-0 pointer-events-none"></div>

              <div className="relative z-10 space-y-8">
                {/* Category Info Header */}
                <div className="border-b border-white/10 pb-6">
                  <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest block mb-1">
                    ACTIVE ENVIRONMENT
                  </span>
                  <h3 className="text-2xl font-black font-display text-white">
                    {skillCategories[activeTab].title}
                  </h3>
                  <p className="text-zinc-400 text-xs md:text-sm mt-2 font-sans leading-relaxed">
                    {skillCategories[activeTab].desc}
                  </p>
                </div>

                {/* Skill gauges grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {skillCategories[activeTab].items.map((skill, sIdx) => {
                    const radius = 30;
                    const strokeDasharray = 2 * Math.PI * radius;
                    const strokeDashoffset = strokeDasharray - (skill.level / 100) * strokeDasharray;

                    return (
                      <div
                        key={sIdx}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-colors"
                      >
                        {/* Circle SVG */}
                        <div className="relative flex items-center justify-center h-16 w-16 flex-shrink-0">
                          <svg className="h-full w-full transform -rotate-90">
                            {/* Track circle */}
                            <circle
                              cx="32"
                              cy="32"
                              r={radius}
                              className="stroke-zinc-800 fill-none"
                              strokeWidth="4"
                            />
                            {/* Glowing progress circle */}
                            <circle
                              cx="32"
                              cy="32"
                              r={radius}
                              className="stroke-primary fill-none transition-all duration-1000 ease-out"
                              strokeWidth="4"
                              strokeDasharray={strokeDasharray}
                              strokeDashoffset={strokeDashoffset}
                              strokeLinecap="round"
                            />
                          </svg>
                          <span className="absolute text-[10px] font-mono font-bold text-white">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Name & Desc */}
                        <div className="space-y-1">
                          <h4 className="font-bold text-white text-sm font-display tracking-wide">
                            {skill.name}
                          </h4>
                          <p className="text-[11px] text-zinc-400 font-sans leading-relaxed">
                            {skill.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Console Prompt Decorative Footer */}
              <div className="relative z-10 border-t border-white/5 pt-6 mt-8 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  Active Core Systems: Node.js, Express, React
                </span>
                <span>CTRL + SHIFT + E</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Page4;
