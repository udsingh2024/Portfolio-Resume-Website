import React from 'react';
import ThreeBackground from './components/ThreeBackground';
import CreativeCursor from './components/cursor/CreativeCursor';
import Header from './Container/Header';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Page5 from './Pages/Page5';
import Page6 from './Pages/Page6';
import Page7 from './Pages/Page7';
import Page8 from './Pages/Page8';

const App = () => {
  return (
    <>
      {/* Interactive Custom Cursor */}
      <CreativeCursor />

      {/* Interactive WebGL background */}
      <ThreeBackground />

      <div id="main" className="relative z-10 w-full min-h-screen selection:bg-primary selection:text-white">
        {/* Navigation Navbar */}
        <Header />

        {/* Content sections */}
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
      </div>
    </>
  );
};

export default App;
