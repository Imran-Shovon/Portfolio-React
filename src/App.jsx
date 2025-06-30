import Navbar from "./components/Navbar";
import Contact from "./features/Contact/Contact";
import Education from "./features/Education/Education";
import Experience from "./features/Experience/Experience";
import Footer from "./features/Footer/Footer";
import Home from "./features/Home/Home";
import Projects from "./features/Projects/Project";
import Research from "./features/ResearchActivities/Research";
import Skills from "./features/Skills/Skills";
import "./index.css"; // Ensure you have your styles imported

const App = () => {
  return (
    <div >
      <Navbar />
      <div className="">
      <section id="home" className="" >
        <Home />
      </section>

      <section id="skills" className="">
        <Skills />
      </section>
      <section id="experience" className="">
        <Experience />
      </section>

      <section id="projects" className="">
        <Projects />
      </section>

      <section id="education" className="">
        <Education />
      </section>

      <section id="research" className="">
        <Research />
      </section>

      {/* <section id="about" className="">
        <About />
      </section> */}

      <section id="contact" className="">
        <Contact />
      </section>

      <div>
        <Footer />
      </div>

      </div>
    </div>
  );
};

export default App;
