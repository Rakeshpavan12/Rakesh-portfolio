import './Projects.css';
import moviehub from"../../assets/moviehub.png";
import otp from "../../assets/otp-verification.png";
import ecommerce from "../../assets/ecommerce.png";
import {motion} from "framer-motion"
import { FaLink } from 'react-icons/fa';
function Projects() {
  const projects = [
    {
      id:1,
      title:"MovieHub - Movie Search & Trailer",
      description:"Responsive movie application built using React.js and TMDB API with movie search, trending movies, and trailer integration.",
      tech:["React.js","TMDB API","JavaScript"],
      github:"https://github.com/Rakeshpavan12/Movie-Streaming-ui",
      image:moviehub,
    },
    {
    id:2,
    title:"OTP Verification System",
    description:"OTP verification system with secure authentication using React, Node.js, Express, and REST APIs.",
    tech:["React.js","JavaScript","Node.js"],
    github:"https://github.com/Rakeshpavan12/otp-auth-system",
    image:otp,
    },
    {
      id:3,
      title:"E-Commerce Product Page",
      description:"Responsive e-commerce frontend with product filtering and dynamic UI interactions.",
      tech:["HTML","CSS","JavaScript"],
      github:"https://github.com/Rakeshpavan12/e-coomerce-product-page",
      image:ecommerce,
    }
  ];
  return (
    <section className="projects" id="projects">
      <div className="projects-heading">
        <h2>PROJECTS</h2>
        <p>Some of My Recent Works</p>
      </div>
      <div className="projects-grid">
  {projects.map((project) => (
    <motion.div
      className="project-card"
      key={project.id}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: project.id * 0.2,
      }}
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
    >
      <img src={project.image} alt={project.title} />

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tech-stack">
          {project.tech.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

        <div className="project-buttons">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className='project-btn'><FaLink size={22}/>View GitHub</a>
        </div>
      </div>
    </motion.div>
  ))}
</div>
    </section>
  );
}

export default Projects