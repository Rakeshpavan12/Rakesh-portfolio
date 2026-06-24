
import "./Navbar.css";
function Navbar() {
  const downloadcv = () => {
    const link = document.createElement("a");
    link.href="/Rakesh Pavan Y_Developer_Resume.pdf";
    link.download="Rakesh_pavan_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <nav className="navbar">
        <div className="logo">
            Rakesh<span>.dev</span>
        </div>
        <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certification">Certifications</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="cv-btn"onClick={downloadcv}>Download CV</button>
    </nav>
  )
}

export default Navbar