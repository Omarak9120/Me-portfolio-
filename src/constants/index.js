import project1 from "../assets/projects/Project1.png";
import project2 from "../assets/projects/Project2.png";
import project3 from "../assets/projects/Project3.png";
import project4 from "../assets/projects/Project4.png";

export const HERO_CONTENT = `I am an aspiring Software Engineer with a Bachelor's degree in computer science from the Lebanese International University (LIU). Currently enhancing my skills at 42 Beirut, I engage in hands-on projects that push me to think critically and solve complex problems. My experience managing a guesthouse has honed my skills in business operations and customer service, complementing my technical expertise. I am seeking web development roles where I can apply my diverse experiences to build innovative solutions.`;

export const EXPERIENCES = [
  {
    id: 1,
    year: "Jul-2024 - Present",
    role: "Full Stack Developer Intern",
    company: "OctaNet Services Pvt Ltd.",
    description: `Developed a full-stack product management admin page using MongoDB, Express, React, and Node.js (MERN). Implemented core functionalities including product creation, editing, deletion, and category-based filtering. Ensured responsiveness and seamless user experience across devices.`,
    technologies: ["Node.js", "React.js", "Express.js", "MongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "Product Management Admin App",
    image: project4,
    description:
      "A fully functional admin page website contain features like product listing, adding, editing, delete, and user authentication.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    link: "https://github.com/Omarak9120",
  },
  {
    title: "Todo-List",
    image: project3,
    description:
      "An application for managing tasks and projects, with features such as task creation, deletion, and editing.",
    technologies: ["React.js", "Tailwind", "Express.js", "PostgreSQL"],
    link: "https://github.com/Omarak9120",
  },
  {
    title: "Restaurant Menu App",
    image: project1,
    description:
      "A website showcasing Restaurant Food Menu with ability to filter food to specified categories.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Omarak9120",
  },
  {
    title: "Simon Game",
    image: project2,
    description:
      "Simon Game is a very known game where user should follow the color sequence to pass levels.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Omarak9120",
  },
];


