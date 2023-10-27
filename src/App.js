import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import { Work } from './components/Work';
import Contact from './components/Contact';
import { useEffect } from 'react'
import AOS from 'aos';

function App() {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
     <div>
      <Navbar />
      <Hero />
      <Work />
      <Contact />
     </div>
  );
}

export default App;
