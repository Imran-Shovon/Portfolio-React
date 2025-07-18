import Brac_Bank from "../assets/images/BracBank.png";
import Jachai from "../assets/images/Jachai.png";
import SwiggyApiClone from "../assets/images/SwiggyAPIClone.png";
  const projects = [
    {
      title: "e-KYC - Electronic Know Your Customer",
      duration: "Jan 2022 – Present",
      image: Brac_Bank,
      description:
        `As a Junior Software Engineer, I contributed to the development and maintenance of a 
        digital eKYC (Electronic Know Your Customer) solution used across multiple banks. 
        My responsibilities included implementing responsive user interfaces using Angular 
        I also assisted in deployment workflows and DevOps practices. This role strengthened 
        my foundation in full-stack development and taught me the importance of security, scalability, 
        and performance in financial applications.
        `,
      tags: ["Angular", ".NET", "SQL", "Nebular", "Bootstrap"],
      category: "Web App",
      code: "",
      live: "https://eaccount.bracbank.com/onboarding/common/welcome",
    },

    {
      title: "Jachai",
      duration: "Jan 2022 – Present",
      image: Jachai,
      description:
        `At Jachai, I worked as a Junior Software Engineer on a government-integrated 
        platform used for birth certificate verification via proxy APIs. I was involved 
        in developing and maintaining frontend components using Angular. My responsibilities 
        included consuming secure API endpoints, handling response validations, and ensuring 
        reliable communication between client and server systems. This role enhanced my understanding 
        of secure data handling, API-driven architectures, and real-world application of digital identity 
        verification in government services.
        `,
      tags: ["Angular", ".NET", "SQL", "Store Procedure", "Redux"],
      category: "Web App",
      code: "",
      live: "",
    },

    
    {
      title: "Swiggy API Clone",
      duration: "2025",
      image: SwiggyApiClone,
      description:
        `As part of a personal project, I developed a dynamic food delivery interface using React.js 
        and integrated the real-time Swiggy API to display restaurant listings, menus, and live order data. 
        The project focused on rendering responsive UI components, optimizing API calls, and ensuring smooth 
        user interactions with real-time data updates. This experience helped me strengthen my skills in React 
        hooks, component architecture, API consumption, and performance optimization in single-page applications.
        `,
      tags: ["React", "Swiggy API", "Redux"],
      category: "Web App",
      code: "https://github.com/Imran-Shovon/React.git",
      live: "https://react-ten-drab.vercel.app/",
    },

  ];

export default projects;