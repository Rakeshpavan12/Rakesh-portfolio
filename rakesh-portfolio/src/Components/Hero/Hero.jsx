import "./Hero.css";
import{FaHtml5,FaCss3Alt,FaReact,FaGithub,FaEnvelope,FaLinkedin} from "react-icons/fa";
import {SiJavascript} from "react-icons/si"
import profile from "../../assets/image.png"
import { useState,useEffect } from "react";
function Hero() {
    const text="Yarrannagari";
    const[displayText,setdisplaytext] = useState("");
    useEffect(()=> {
        let index = 0;
        const interval = setInterval(()=> {
            setdisplaytext(text.slice(0,index + 1));
            index++;
            if (index === text.length) {
                clearInterval(interval);
            }
        },150);
        return()=>clearInterval(interval);
    },[]);
  return (
    <>
    <section className="hero" id="home">

        <FaHtml5 className="floating-icon html" />
        <FaCss3Alt className="floating-icon css" />
        <FaReact className="floating-icon react" />
        <SiJavascript className="floating-icon js" />
        <div className="hero-left">
            <span className="badge">
                👋 Hi.I'm
            </span>
            <h1 className="hero-title">Rakesh Pavan<br /><span className="animated-name">{displayText}</span></h1>
            <h3 className="hero-subtitle">Frontend Developer | React Developer | UI Builder | Web Developer | Full Stack Developer</h3>
            <p className="hero-description">Frontend Developer Skilled in HTML, CSS, JavaScript and React. Passionate About Building Responsive, User-Friendly Web Applications With Clean Code, Modern UI and Seamlessuser Experiences.</p>
            <section className="contact-links">
                <a href="https://github.com/Rakeshpavan12" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/rakesh-pavan-yarrannagari-8579b5272/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="mailto:rakeshyarrannagari@gmail.com" targer="_blank" rel="noopener noreferrer"><FaEnvelope /></a>

            </section>
            <div className="hero-buttons">
                <button className="primary-btn" onClick={()=>document.getElementById("projects").scrollIntoView({behavior:"smooth"})}>Explore Projects</button>
                <button className="secondary-btn">Download CV</button>
            </div>
            </div>
            <div className="hero-right">
                <div className="image-glow"></div>
                <div className="code-window">
                    <div className="window-top">
                        <span className="red"></span>
                        <span className="blue"></span>
                        <span className="green"></span>

                    </div>
                    <pre>
                        {`constdeveloper=()=>{
                        name:"Rakesh Pavan",
                        role:"Frontend developer",
                        skills:["React", "JavaScript", "CSS"],
                        passion:"Building Modern UI"
                        }`}
                    </pre>
                </div>
                <img src={profile} alt="Rakesh Pavan" className="hero-img" />
            </div>

    </section>
   
    </>
  );
}

export default Hero