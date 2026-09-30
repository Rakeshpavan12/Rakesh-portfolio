import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-heading">
        <h2>LET'S CONNECT</h2>
        <p>Let's Build Something Amazing Together</p>
      </div>

      <div className="contact-container">
        

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />

          <h3>Email</h3>

          <a href="mailto:rakeshyarrannagari@gmail.com">
            rakeshyarrannagari@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />

          <h3>GitHub</h3>

          <a
            href="https://github.com/Rakeshpavan12"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Profile
          </a>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />

          <h3>LinkedIn</h3>

          <a
            href="https://www.linkedin.com/in/rakesh-pavan-yarrannagari-8579b5272/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;