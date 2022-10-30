import About from "./containers/About";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Navbar from "./containers/Navbar";
import Skills from "./containers/Skills";
import Works from "./containers/Works";

function App() {
  return (
    <div>
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
