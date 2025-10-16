import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProblemSection from "./components/Problem"
import Background from "./components/TechBackground";
import ValueProposition from "./components/ValueProposition";
import WhatWeDo from "./components/WhatWeDo";
import Services from "./components/Services";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Background />
      <Navbar />
     <Hero/>
     <ProblemSection/>
    
     <Services/>
      <ValueProposition/>
     <WhatWeDo/>
     
     <Contact/>
     <Footer/>
    </>
  );
}

export default App;
