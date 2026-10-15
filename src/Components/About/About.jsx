import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <header className="about-header">
          <p className="about-label">ABOUT ME</p>
        </header>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a B.Tech graduate in Data Science with a strong interest
              in web development. I enjoy building clean, responsive, and
              user-friendly web applications.
            </p>

            <p>
              I work with HTML, CSS, JavaScript, React.js, Node.js,
              Express.js, MySQL, and MongoDB to develop interactive
              user interfaces and full-stack web applications.
            </p>

            <p>
              Through hands-on projects and full-stack development
              training, I'm continuing to strengthen my programming,
              problem-solving, and application development skills.
            </p>
          </div>

          <div className="about-details">
            <div className="about-detail">
              <span>01</span>
              <div>
                <h3>Frontend Development</h3>
                <p>Building responsive interfaces with React.js and JavaScript.</p>
              </div>
            </div>

            <div className="about-detail">
              <span>02</span>
              <div>
                <h3>Backend Development</h3>
                <p>Working with Node.js, Express.js, REST APIs, and databases.</p>
              </div>
            </div>

            <div className="about-detail">
              <span>03</span>
              <div>
                <h3>Practical Projects</h3>
                <p>Turning ideas into functional web applications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;