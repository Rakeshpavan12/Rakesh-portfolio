import "./About.css";

import{FaCode,FaRocket,FaLaptopCode, FaGraduationCap} from "react-icons/fa"
function About() {
  return (
    <section className="about" id="about">

      <header className="about-header">
        <h2>About Me</h2>
        <p>A Brief Introduction</p>
      </header>

      <article className="about-content">

        <section className="about-text">

          <h3>Building Modern User Interface</h3>

          <p>
           I am a B.Tech graduatee Specializing in Data Science, I am Skiiied in creating responsive, modern, and user-friendly web applications.
           
          </p>
          <p>
            Focused on building responsive, user-friendly and visually appealing web applications using HTML, CSS, JavaScript and React. Skilled in transforming UI designs into clean, interactive interfaces while ensuring responsive layouts, reusable components and seamless user experiences.
          </p>

          <p>
            Familiar with React, REST APIs, Git, MySQL and MongoDB, with hands-on experience through real-world projects and continuous learning.
          </p>

        </section>
        <section className="focus-section">

  <article className="focus-card">
    <FaCode className="focus-icon" />
    <h3>Clean Code</h3>
    <p>Writing reusable, maintainable and scalable React applications.</p>
  </article>

  <article className="focus-card">
    <FaLaptopCode className="focus-icon" />
    <h3>Responsive Design</h3>
    <p>Creating layouts that work perfectly on every device.</p>
  </article>

  <article className="focus-card">
    <FaRocket className="focus-icon" />
    <h3>User Experience</h3>
    <p>Building fast, interactive and user-friendly interfaces.</p>
  </article>

  <article className="focus-card">
    <FaGraduationCap className="focus-icon" />
    <h3>Continuous Learning</h3>
    <p>Always learning modern technologies and improving every day.</p>
  </article>

</section>
<section className="stats-section">

  <div className="stat-item">
    <FaCode className="stat-icon" />
      <h3>4+</h3>
      <p>Projects</p>
    </div>
    <div className="divider"></div>

  <div className="stat-item">
    <FaRocket className="stat-icon" />
      <h3>1+</h3>
      <p>Training</p>
  </div>
  <div className="divider"></div>

  <div className="stat-item">
    <FaLaptopCode className="stat-icon" />
      <h3>6+</h3>
      <p>Technologies</p>
    </div>
  <div className="divider"></div>

  <div className="stat-item">
    <FaGraduationCap className="stat-icon" />
      <h3>1+</h3>
      <p>Certification</p>
  </div>
  <div className="divider"></div>

</section>


      </article>

    </section>
  );
}

export default About;