import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Scroll reveal rotation effect on text
    gsap.from('.rotateText', {
      transform: 'rotateX(-90deg)',
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#sectionText',
        start: 'top 70%',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
      },
    });
  });

  return (
    <section
      id="sectionText"
      className="bg-[#09090b] min-h-screen text-white py-24 px-4 sm:px-8 md:px-16 text-center flex flex-col justify-center items-center overflow-hidden relative border-b border-white/5"
    >
      <div className="absolute top-12 text-zinc-500 font-mono text-xs tracking-wider uppercase">
        © ud.studio 2026 | DESIGN & CODE INTELLIGENCE
      </div>

      <div className="space-y-6 mt-16 max-w-5xl w-full select-none flex flex-col items-center">
        <div className="rotateText w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter font-black font-display leading-none text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 uppercase">
            IMPACTFUL
          </h1>
        </div>
        <div className="rotateText w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter font-black font-display leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-600 uppercase">
            DESIGN
          </h1>
        </div>
        <div className="rotateText w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter font-black font-display leading-none text-zinc-700 uppercase">
            IS THE
          </h1>
        </div>
        <div className="rotateText w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter font-black font-display leading-none text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary uppercase">
            ENGINEERING
          </h1>
        </div>
        <div className="rotateText w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter font-black font-display leading-none text-zinc-500 uppercase">
            THAT
          </h1>
        </div>
        <div className="rotateText w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter font-black font-display leading-none text-white uppercase">
            WORKS.
          </h1>
        </div>
      </div>

      <div className="h-0.5 w-1/4 mt-16 bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
    </section>
  );
};

export default Page2;
