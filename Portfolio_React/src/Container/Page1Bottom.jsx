import React from 'react';
import img1 from '../assets/cssda-wotd-white.avif';
import img2 from '../assets/EN_legend_large.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Page1Bottom = () => {
  useGSAP(() => {
    // Spin animation for design seals
    gsap.to('#seal-container img', {
      rotation: 360,
      duration: 15,
      repeat: -1,
      ease: 'linear',
    });
  });

  return (
    <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-6 border-t border-white/5 mt-auto">
      {/* Services & Focus */}
      <div className="space-y-1">
        <h2 className="text-xs md:text-sm text-zinc-400 font-medium tracking-widest uppercase">
          Fullstack Architect & UI Specialist
        </h2>
        <h3 className="text-[10px] md:text-xs text-zinc-500 font-mono">
          React • Node.js • Express • MongoDB
        </h3>
      </div>

      {/* Stats Widgets */}
      <div className="flex items-center gap-6 md:gap-8 border-l border-zinc-800 pl-6 md:pl-8">
        <div>
          <div className="text-xl md:text-2xl font-black text-white font-display">6+</div>
          <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Projects</div>
        </div>
        <div>
          <div className="text-xl md:text-2xl font-black text-white font-display">1st</div>
          <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Ideathon 2026</div>
        </div>
        <div>
          <div className="text-xl md:text-2xl font-black text-white font-display">4+</div>
          <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Hackathons</div>
        </div>
      </div>

      {/* Decorative Badges/Seals */}
      <div id="seal-container" className="hidden md:flex items-center gap-4">
        {img1 && <img src={img1} alt="CSSDA Seal" className="h-10 w-10 object-contain opacity-35 hover:opacity-75 transition-opacity duration-300" />}
        {img2 && <img src={img2} alt="Legend Seal" className="h-10 w-10 object-contain opacity-35 hover:opacity-75 transition-opacity duration-300" />}
      </div>
    </div>
  );
};

export default Page1Bottom;
