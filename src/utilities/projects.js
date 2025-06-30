import hamxaa from "../assets/hamxaa.png";
import tailwind from "../assets/tailwind.svg";
import react from "../assets/react.svg";
import js from "../assets/js.svg";
import ridefraser from "../assets/ridefraser.png";
import typescript from "../assets/typescript.svg"
import getbooks from "../assets/getbooks.png"
import nextjs from "../assets/nextjs.svg"
import ameerahlamidi from "../assets/ameerah-lamidi.png"
import html from "../assets/html.svg"
import sandwichapp from "../assets/sandwichapp.png"
import quizapp from "../assets/nimelssaDashboard.png"
import vue from "../assets/vue.png"


export const projects = [
  {
    id: 1,
    header: "Hamxaa",
    projectImage: hamxaa ,
    stack: [tailwind, react, js],
    explanation:
      "Hamxaa is an Auto Repair software designed to help automotive repair shops manage customer relationships, streamline operations, track service history, manage inventory, and improve customer retention through automation.",
    websiteLink: "https://hamxaa.com/",
  },
  {
    id: 2,
    header: "RideFraser",
    projectImage: ridefraser ,
    stack: [tailwind, react, js],
    explanation:
      "RideFraser helps Nigerian e-commerce businesses automate and simplify their logistics.",
      websiteLink: "https://www.ridefraser.com/",
  },
  {
    id: 3,
    header: "GetBooks NG",
    projectImage: getbooks ,
    stack: [tailwind, react, typescript],
    explanation:
      "An e-commerce store for buying and selling books based on user’s location",
      websiteLink: "https://dev.getbooks.ng/",
  },
  {
    id: 4,
    header: "Client's Portfolio",
    projectImage: ameerahlamidi ,
    stack: [tailwind, nextjs, typescript,],
    explanation:
      "A responsive portfolio website built for a client to showcase their work and professional skills. Developed using Next.js, Tailwind CSS, and TypeScript for optimal performance, scalability, and clean design",
      // githubLink: "https://github.com/Fificode/accessories-hub",
      websiteLink: "https://ameerah-lamidi.vercel.app/"
    
  },
  {
    id: 5,
    header: "NIMELSSA Dashboard",
    projectImage: quizapp ,
    stack: [tailwind, vue, js],
    explanation:
      "A custom dashboard built for students to take quizzes seamlessly. It was built with Vue Js, Tailwind CSS, and Javascript",
    videoLink:"https://www.linkedin.com/posts/firdaws-lamidi-840b57200_frontenddevelopment-vuejs-technology-activity-7176740604385632256-ICxA?utm_source=share&utm_medium=member_desktop",
  
  },
  {
    id: 6,
    header: "Sandwich Club App",
    projectImage: sandwichapp ,
    stack: [html, tailwind, react, js],
    explanation:
      "A Sandwich app used for ordering sandwiches. It was built with HTML, Javascript, React js and Tailwind CSS",
      githubLink: "https://github.com/Fificode/react-sandwichclub",
      websiteLink: "https://sandwich-club.netlify.app/"
  
  },
];
