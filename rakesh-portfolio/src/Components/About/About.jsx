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
           I am a B.Tech Graduatee Specializing in Data Science, I am Skiiied in Creating Responsive, Modern, and User-Friendly Web Applications.
           
          </p>
          <p>
            Focused on Building Responsive, User-friendly and Visually Appealing Web Applications Using HTML, CSS, JavaScript and React. Skilled in Transforming UI Designs Into Clean, Interactive Interfaces While Ensuring Responsive Layouts, Reusable Components and Seamless User Experiences.
          </p>

          <p>
            Familiar With React, REST APIs, GIT, MYSQL and MongoDB, With Hands-On Experience Through Real-World Projects and Continuous Learning.
          </p>

        </section>
        <section className="focus-section">

  <article className="focus-card">
    <FaCode className="focus-icon" />
    <h3>Clean Code</h3>
    <p>Writing Reusable, Maintainable and Scalable React Applications.</p>  </article>

  <article className="focus-card">
    <FaLaptopCode className="focus-icon" />
    <h3>Responsive Design</h3>
    <p>Creating Layouts that Work Perfectly On Every Device.</p>
  </article>

  <article className="focus-card">
    <FaRocket className="focus-icon" />
    <h3>User Experience</h3>
    <p>Building Fast, Interactive and User-Friendly Interfaces.</p>
  </article>

  <article className="focus-card">
    <FaGraduationCap className="focus-icon" />
    <h3>Continuous Learning</h3>
    <p>Always Learning Modern Technologies and Improving Every Day.</p>
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