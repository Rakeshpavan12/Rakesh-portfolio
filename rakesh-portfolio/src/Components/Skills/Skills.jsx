import './Skills.css';
import { FaHtml5,FaCss3,FaJs,FaReact,FaJava,FaGitAlt,FaGithub, FaNodeJs} from 'react-icons/fa';
import { SiMysql,SiMongodb, SiExpress} from 'react-icons/si';
function Skills() {
      return (
        <section className='Skills'id="skills">
            <header className="skills-header">
                <h2>Skills</h2>
                <p>Technologies and tools I work With</p>
            </header>
            <main className='skills-section'>
                <article className='skill-card'><FaHtml5 className='skill-icon'/><h2>HTML5</h2> </article>
                <article className='skill-card'><FaCss3 className='skill-icon' /><h2>Css3</h2></article>
                 <article className='skill-card'><FaJs className='skill-icon' /><h2>JavaScript</h2></article>
                  <article className='skill-card'><FaReact className='skill-icon' /><h2>React.js</h2></article>
                  <article className='skill-card'><FaNodeJs className='skill-icon' /><h2>Node.js</h2></article>
                  <article className='skill-card'><SiExpress className='skill-icon' /><h2>Express.js</h2></article>
                   <article className='skill-card'><FaJava className='skill-icon' /><h2>Java</h2></article>
                    <article className='skill-card'><FaGitAlt className='skill-icon' /><h2>Git</h2></article>
                     <article className='skill-card'><FaGithub className='skill-icon' /><h2>GitHub</h2></article>
                      <article className='skill-card'><SiMysql className='skill-icon' /><h2>MySQL</h2></article>
                       <article className='skill-card'><SiMongodb className='skill-icon' /><h2>MongoDB</h2></article>

            </main>
        </section>

      )
    }
    
    export default Skills