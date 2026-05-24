import React, { useRef, useState } from 'react';
import Page1Bottom from '../Container/Page1Bottom';
import logoWhite from '../assets/LOGO WHITE_edited.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import TiltText from '../Container/TiltText';
import heroVideo from '../assets/file.mp4';
import profilePic from '../assets/profile.jpg';

const Page1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMove = (e) => {
    const rect = tiltRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 35;
    const y = -(e.clientY - rect.top - rect.height / 2) / 15;
    setXVal(x);
    setYVal(y);
  };

  useGSAP(() => {
    gsap.to(tiltRef.current, {
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 1.2,
      ease: 'power3.out',
    });
  }, [xVal, yVal]);

  return (
    <section
      id="home"
      onMouseMove={(e) => mouseMove(e)}
      className="min-h-screen p-4 md:p-6 bg-[#09090b] relative flex items-center justify-center overflow-hidden"
    >
      <div className="min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-3rem)] w-full rounded-[40px] md:rounded-[50px] shadow-2xl shadow-black/80 relative overflow-hidden border border-white/5 flex flex-col">
        
        {/* Background Video */}
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden rounded-[40px] md:rounded-[50px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute z-0 top-0 left-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* Subtle overlay gradients for rich contrast */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#09090b] via-[#09090b]/55 to-transparent z-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#09090b] via-transparent to-transparent z-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10 backdrop-blur-[1px]"></div>
        </div>

        {/* Foreground Content */}
        <div
          id="page1_in"
          className="relative z-20 flex-grow w-full flex flex-col justify-between p-6 md:p-12 lg:p-16 gap-8"
        >
          {/* Top Logo Header */}
          <div className="flex items-center justify-between">
            <img
              src={logoWhite}
              alt="Logo"
              className="h-12 md:h-16 w-auto object-contain cursor-pointer transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Main Mid Section (Split layout) */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 flex-grow">
            
            {/* Left Content (Tilt Text) */}
            <div className="w-full lg:w-3/5 text-left flex flex-col justify-center">
              <TiltText tiltRef={tiltRef} />
              
              {/* Call to Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 md:px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xs md:text-sm font-bold tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95 transition-all cursor-pointer"
                >
                  Explore Work
                </button>
                <button
                  onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 md:px-8 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs md:text-sm font-semibold tracking-wide border border-white/10 active:scale-95 transition-all cursor-pointer"
                >
                  View Resume
                </button>
              </div>
            </div>

            {/* Right Content (Professional Photo with Glass-Frame) */}
            <div className="w-full lg:w-2/5 flex items-center justify-center lg:justify-end">
              <div className="relative group">
                {/* Glow Ring Effects */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt animate-pulse"></div>
                
                {/* Main Circular Profile Photo */}
                <div className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-full overflow-hidden border-4 border-zinc-900 bg-zinc-950 flex items-center justify-center shadow-2xl">
                  <img
                    src={profilePic}
                    alt="Uday"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1"
                  />
                </div>

                {/* Floating Micro-Badge */}
                <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 glass-panel px-3 py-1.5 md:px-4 md:py-2 rounded-2xl border border-white/10 shadow-xl flex items-center gap-2 animate-bounce duration-1000">
                  <span className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-green-500 animate-ping"></span>
                  <span className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-green-500 absolute"></span>
                  <span className="text-[10px] md:text-xs font-bold text-white tracking-wide">Open To Work</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom stats & indicators */}
          <Page1Bottom />

        </div>

      </div>
    </section>
  );
};

export default Page1;
