import Navbar from "./components/Navbar";
import About from "./features/About/About";
import Contact from "./features/Contact/Contact";
import Education from "./features/Education/Education";
import Experience from "./features/Experience/Experience";
import Footer from "./features/Footer/Footer";
import Home from "./features/Home/Home";
import Projects from "./features/Projects/Project";
import "./index.css"; // Ensure you have your styles imported

const App = () => {
  return (
    <div >
      <Navbar />
      <div className="">
      <section id="home" className="" >
        <Home />
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

      <section id="research" className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <h1 className="text-4xl font-bold">Footer Section</h1>
      </section>

      <section id="about" className="">
        <About />
      </section>

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
