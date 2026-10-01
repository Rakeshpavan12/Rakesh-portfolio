import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-heading">
        <h2>LET'S CONNECT</h2>
        <p>Let's Build Something Amazing Together.</p>
      </div>

      <div className="contact-content">

        {/* LEFT */}
        <div className="contact-intro">
          <span className="contact-line"></span>

          <h3>Interested in Working Together?</h3>

          <p>
            I'm Open to Opportunities in Frontend Development,
            React Development, and Full Stack Development.
            Feel Free to Reach Out and Let's Connect.
          </p>
        </div>


        {/* RIGHT */}
        <div className="contact-items">

          <a
            href="mailto:rakeshyarrannagari@gmail.com"
            className="contact-item"
          >
            <div className="contact-item-icon">
              <FaEnvelope />
            </div>

            <div className="contact-item-info">
              <span>Email</span>
              <p>rakeshyarrannagari@gmail.com</p>
            </div>

            <span className="contact-arrow">↗</span>
          </a>


          <a
            href="https://github.com/Rakeshpavan12"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div className="contact-item-icon">
              <FaGithub />
            </div>

            <div className="contact-item-info">
              <span>GitHub</span>
              <p>View My Repositories</p>
            </div>

            <span className="contact-arrow">↗</span>
          </a>


          <a
            href="https://www.linkedin.com/in/rakesh-pavan-yarrannagari-8579b5272/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div className="contact-item-icon">
              <FaLinkedin />
            </div>

            <div className="contact-item-info">
              <span>LinkedIn</span>
              <p>Connect With Me</p>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;