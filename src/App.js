import React, {useEffect} from "react";
import { Toaster } from "sonner";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Navbar from "./containers/Navbar";
import Skills from "./containers/Skills";
import Works from "./containers/Works";
import AOS from "aos";
import "aos/dist/aos.css";




function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
   
  }, []);
  return (
    <div>
    <Toaster position="top-right"/>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
