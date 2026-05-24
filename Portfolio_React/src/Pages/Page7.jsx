import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import resumePdf from '../assets/MahiCHSL.pdf';

const Page7 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [activeTab, setActiveTab] = useState('visual'); // visual | raw

  useGSAP(() => {
    gsap.from('#resume-card', {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      scrollTrigger: {
        trigger: '#resume',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });
  });

  const rawResumeText = `
UDAY - SOFTWARE ENGINEER
----------------------------------
Email: usamrat2004@gmail.com
Phone: +91 8868081000
Address: Alam Saria Dehat, Sambhal
GitHub: github.com/udsingh2024
LinkedIn: linkedin.com/in/uday-samrat-440ba5394
LeetCode: leetcode.com/u/udsingh

PROFILE SUMMARY
Passionate Computer Science Engineering 3rd year student with hands-on experience in MERN stack development, and modern web technologies. Built multiple full-stack applications, participated in hackathons, and achieved recognition in Ideathon 2026. Strong problem-solving, leadership, and teamwork skills with practical knowledge of React, Node.js, MongoDB, Java, and eager to work on real-world projects.

TECHNICAL SKILLS
- Programming: Java, C, JS, Python
- Frontend: HTML, CSS, Tailwind CSS, React.js, Next.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Tools & Platforms: Git, GitHub, Docker, WordPress, VS Code, IntelliJ Idea

PROJECTS
1. XpertAdviceHub (MERN Platform)
Role-based service marketplace platform with custom dashboards (Customer, Expert, Admin, Super Admin).
2. Virtual Assistant Web App
AI assistant responding to voice/text commands using MERN.
3. EcoIntellect (AI Waste Management)
MERN + Python image-based city waste sorting scheduler.
4. Spotify Backend APIs
Node.js streaming database structures.
5. DSA in Java
Standard libraries, LeetCode algorithms.

EDUCATION
- B.Tech CSE (2023 - 2027)
  MIT Moradabad (Affiliated to AKTU, Lucknow)
  GPA: 7.82 (1st Year) | 7.78 (2nd Year)
- High School CBSE (2022): 84%
- Tenth Grade CBSE (2020): 86%

ACHIEVEMENTS
- 1st Position: Ideathon 2026 (Smart Traffic)
- Internship Offer: Elevance Skills
- Coordinator: Hi-Tech 2026
- BharatiFastNews Founder (500+ regular views)
  `;

  return (
    <section
      id="resume"
      className="min-h-screen bg-[#09090b] text-white py-28 px-6 md:px-12 lg:px-24 border-b border-white/5 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title & Actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-[2px] w-8 bg-gradient-to-r from-primary to-secondary"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">05 / CURRICULUM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-white">
              MY RESUME
            </h2>
          </div>

          {/* Interactive controls */}
          <div className="flex items-center gap-4">
            <div className="p-1 rounded-xl bg-zinc-900 border border-white/5 flex gap-1 text-xs">
              <button
                onClick={() => setActiveTab('visual')}
                className={`px-4 py-2 rounded-lg font-medium cursor-pointer transition-colors ${
                  activeTab === 'visual' ? 'bg-primary text-white font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Visual Layout
              </button>
              <button
                onClick={() => setActiveTab('raw')}
                className={`px-4 py-2 rounded-lg font-medium cursor-pointer transition-colors ${
                  activeTab === 'raw' ? 'bg-primary text-white font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                ATS Raw Text
              </button>
            </div>

            <a
              href={resumePdf}
              download="Uday_Software_Engineer_Resume.pdf"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-xs shadow-lg shadow-primary/10 hover:shadow-primary/30 flex items-center gap-2 cursor-pointer active:scale-95 transition-all"
            >
              <i className="ri-download-2-line text-sm"></i> Download PDF
            </a>
          </div>
        </div>

        {/* Resume Card Container */}
        <div
          id="resume-card"
          className="w-full glass-panel rounded-3xl border border-white/10 shadow-2xl overflow-hidden p-8 md:p-12 min-h-[800px] select-text relative"
        >
          {activeTab === 'visual' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left font-sans text-sm text-zinc-300">
              
              {/* Header Info Block */}
              <div className="lg:col-span-12 border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <h1 className="text-4xl font-black tracking-widest font-display text-white">UDAY</h1>
                  <p className="text-primary font-mono text-sm tracking-wider uppercase font-bold mt-1">SOFTWARE ENGINEER</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <i className="ri-phone-fill text-primary"></i> +91 8868081000
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-mail-fill text-primary"></i> usamrat2004@gmail.com
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-map-pin-2-fill text-primary"></i> Sambhal, Uttar Pradesh
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-terminal-box-fill text-primary"></i> React & Node Developer
                  </div>
                </div>
              </div>

              {/* Sidebar Left Column (4 cols) */}
              <div className="lg:col-span-4 space-y-8 border-r border-white/5 pr-0 lg:pr-8">
                
                {/* Education section */}
                <div className="space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-primary font-bold border-b border-white/5 pb-2">EDUCATION</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-zinc-500 font-mono text-xs block">2023 - 2027</span>
                      <h4 className="font-bold text-white text-xs">B.Tech Computer Science</h4>
                      <p className="text-xs text-zinc-400">MIT Moradabad (AKTU Lucknow)</p>
                      <ul className="list-disc list-inside text-[11px] text-zinc-500 mt-1 font-mono">
                        <li>GPA: 7.82 (1st Year)</li>
                        <li>GPA: 7.78 (2nd Year)</li>
                      </ul>
                    </div>

                    <div className="h-[1px] bg-white/5"></div>

                    <div>
                      <span className="text-zinc-500 font-mono text-xs block">2022</span>
                      <h4 className="font-bold text-white text-xs">Higher Secondary School</h4>
                      <p className="text-xs text-zinc-400">SVM Sambhal [CBSE]</p>
                      <p className="text-[11px] font-mono text-zinc-500 mt-0.5">Percent: 84%</p>
                    </div>

                    <div className="h-[1px] bg-white/5"></div>

                    <div>
                      <span className="text-zinc-500 font-mono text-xs block">2020</span>
                      <h4 className="font-bold text-white text-xs">Tenth-Grade</h4>
                      <p className="text-xs text-zinc-400">SVM Sambhal [CBSE]</p>
                      <p className="text-[11px] font-mono text-zinc-500 mt-0.5">Percent: 86%</p>
                    </div>
                  </div>
                </div>

                {/* Soft Skills */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-primary font-bold border-b border-white/5 pb-2">SOFT SKILLS</h3>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['Project Management', 'Teamwork', 'Time Management', 'Leadership', 'Critical Thinking'].map((s, idx) => (
                      <span key={idx} className="px-2 py-1 rounded bg-zinc-900 text-zinc-400 text-xs border border-white/5 font-medium">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-primary font-bold border-b border-white/5 pb-2">LANGUAGES</h3>
                  <div className="text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-zinc-400 font-medium">English</span>
                      <span className="text-zinc-500">Professional</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400 font-medium">Hindi</span>
                      <span className="text-zinc-500">Native</span>
                    </div>
                  </div>
                </div>

                {/* Social Connect */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-primary font-bold border-b border-white/5 pb-2">SOCIAL ACCOUNTS</h3>
                  <div className="space-y-2 text-xs font-mono">
                    <a href="https://www.linkedin.com/in/uday-samrat-440ba5394/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                      <i className="ri-linkedin-box-fill text-primary text-base"></i> LinkedIn Profile
                    </a>
                    <a href="https://github.com/udsingh2024" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                      <i className="ri-github-fill text-primary text-base"></i> GitHub Repos
                    </a>
                    <a href="https://leetcode.com/u/udsingh/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                      <i className="ri-terminal-line text-primary text-base"></i> LeetCode Profile
                    </a>
                  </div>
                </div>

              </div>

              {/* Main Contents Right Column (8 cols) */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* Profile summary */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-primary font-bold border-b border-white/5 pb-2">PROFILE SUMMARY</h3>
                  <p className="text-zinc-300 leading-relaxed font-sans text-xs">
                    Passionate Computer Science Engineering 3rd year student with hands-on experience in MERN stack development and modern web technologies. Built multiple full-stack applications, participated in hackathons, and achieved recognition in Ideathon 2026. Strong problem-solving, leadership, and teamwork skills with practical knowledge of React, Node.js, MongoDB, Java, and eager to work on real-world projects to enhance my skills.
                  </p>
                </div>

                {/* Technical Skills List */}
                <div className="space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-primary font-bold border-b border-white/5 pb-2">TECHNICAL SKILLS</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <h4 className="font-bold text-white mb-1">Programming</h4>
                      <p className="text-zinc-400">Java, C, JavaScript, Python</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Frontend Dev</h4>
                      <p className="text-zinc-400">HTML, CSS, Tailwind CSS, React.js, Next.js</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Backend & Database</h4>
                      <p className="text-zinc-400">Node.js, Express.js, MongoDB</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Tools & Platforms</h4>
                      <p className="text-zinc-400">Git, GitHub, Docker, WordPress, VS Code</p>
                    </div>
                  </div>
                </div>

                {/* Selected projects summary */}
                <div className="space-y-4">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-primary font-bold border-b border-white/5 pb-2">SELECTED PROJECTS</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-white text-xs flex justify-between">
                        <span>XpertAdviceHub - Marketplace Platform</span>
                        <span className="font-mono text-[10px] text-zinc-500">MERN</span>
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        A full-stack role-based marketplace with custom dashboards supporting Customer, Expert, Admin, and Super Admin interactions, utilizing secure database transactions and JWT verification.
                      </p>
                    </div>

                    <div className="h-[1px] bg-white/5"></div>

                    <div>
                      <h4 className="font-bold text-white text-xs flex justify-between">
                        <span>Virtual Assistant Web App</span>
                        <span className="font-mono text-[10px] text-zinc-500">React & Web Speech</span>
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        A voice and text responsive virtual assistant app enabling smart browser automation, system commands, and speech recognition using modern frontend technologies.
                      </p>
                    </div>

                    <div className="h-[1px] bg-white/5"></div>

                    <div>
                      <h4 className="font-bold text-white text-xs flex justify-between">
                        <span>EcoIntellect - AI Waste Manager</span>
                        <span className="font-mono text-[10px] text-zinc-500">MERN & Python</span>
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        An AI waste sorting scheduling app featuring automatic classification pipelines using a combined Python ML backend and MERN client-dashboard.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Achievements List */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-primary font-bold border-b border-white/5 pb-2">ACHIEVEMENTS SUMMARY</h3>
                  <ul className="list-disc list-inside space-y-1 text-xs text-zinc-400">
                    <li><strong className="text-white">1st Position</strong> - Ideathon 2026 | Smart Traffic Innovation</li>
                    <li>Completed IIT Madras NPTEL Machine Learning Course with <strong className="text-white">70% marks</strong></li>
                    <li>Coordinator of the official campus technical symposium, <strong className="text-white">Hi-Tech 2026</strong></li>
                    <li>Received software internship offer from Elevance Skills</li>
                    <li>Runs BharatiFastNews portal, attracting 500+ regular views</li>
                  </ul>
                </div>

              </div>

            </div>
          ) : (
            <div className="w-full h-full text-left font-mono text-zinc-400 text-xs md:text-sm bg-zinc-950/40 p-6 rounded-2xl border border-white/5 overflow-auto max-h-[700px] leading-relaxed select-text whitespace-pre-wrap">
              {rawResumeText.trim()}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Page7;
