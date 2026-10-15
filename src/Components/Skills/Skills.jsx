import "./Skills.css";

import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

function Skills() {

  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
      ],
    },

    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React.js", icon: <FaReact /> },
      ],
    },

    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "REST APIs", icon: <FaCode /> },
        { name: "CRUD Operations", icon: <FaCode /> },
        { name: "MVC Architecture", icon: <FaCode /> },
        { name: "Routing", icon: <FaCode /> },
      ],
    },

    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },

    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Thunder Client", icon: <SiPostman /> },
        { name: "VS Code", icon: <FaCode /> },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">

      <div className="skills-heading">
        <h2>SKILLS</h2>
        <p>Technologies & Tools I Work With</p>
      </div>

      <div className="skills-container">

        {skillCategories.map((category, index) => (

          <div className="skill-category" key={index}>

            <h3>{category.title}</h3>

            <div className="skill-items">

              {category.skills.map((skill, skillIndex) => (

                <div className="skill-item" key={skillIndex}>

                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <span>{skill.name}</span>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;