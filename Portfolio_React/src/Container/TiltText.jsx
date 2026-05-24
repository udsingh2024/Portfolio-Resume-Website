import React from 'react'

const TiltText = (props) => {
  return (
    <div id='tiltDiv' ref={props.tiltRef} className='mt-20 md:mt-28 max-w-4xl select-none'>
      <div className="flex items-center gap-3 mb-4">
        <span className="h-[2px] w-8 bg-gradient-to-r from-primary to-secondary"></span>
        <h3 className="text-xs md:text-sm tracking-widest text-zinc-400 font-semibold uppercase">CREATIVE SOFTWARE ENGINEER</h3>
      </div>
      <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase font-black leading-tight text-white font-sans tracking-tight'>
        I AM <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent font-bold'>UDAY</span>™
      </h1>
      <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-sans leading-none font-black tracking-tighter text-glow mt-1'>
        MERN STACK
      </h1>
      <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-zinc-400 font-sans leading-tight font-light tracking-tight mt-1'>
        DEVELOPER
      </h1>
    </div>
  )
}

export default TiltText
