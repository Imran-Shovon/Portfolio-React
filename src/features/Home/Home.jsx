import { Typewriter } from 'react-simple-typewriter';
import profileImg from '../../assets/images/shovon.jpeg'; // Ensure the image exists

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full pt-24 px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 bg-white text-gray-800 dark:bg-gray-900 dark:text-white"
    >
      {/* Left Content */}
      <div className="md:w-1/3 w-full text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
          Hi, I am <br />
          <span className="text-purple-500">Md. Shovon Biswas</span>
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4">
          I am a{' '}
          <span className="text-purple-400">
            <Typewriter
              words={['Frontend Developer and Researcher']}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>

        <p className="mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
          Driven by curiosity and fueled by creativity, I’m a passionate and detail-oriented software engineer 
          with a strong background in <strong>frontend development and academic research</strong>. 
          With a strong foundation in 
          frontend technologies like React and Angular. I’ve published three research papers, 
          showcasing my ability to blend innovation with real-world problem-solving. I’m committed to continuous 
          learning, clean code, and creating meaningful impact through innovation, collaboration, and thoughtful 
          problem-solving.

        </p>

        <div className="mt-6 mb-6">
          <a
            href="https://drive.google.com/file/d/1W7U-KWDSOEPnrJKgFvIIzKiq3Dmgtcq0/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-md bg-gray-300 dark:bg-gray-600 text-blue-100 dark:text-white hover:bg-blue-300 dark:hover:bg-blue-400 transition duration-300"
          >
            Check Resume
          </a>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="md:w-1/3 w-full flex justify-center md:justify-end">
        <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl">
          <img
            src={profileImg}
            alt="Md. Shovon Biswas"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
