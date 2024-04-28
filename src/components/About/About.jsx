import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import SAVE_20231011_205649 from '../../assets/SAVE_20231011_205649.svg'
const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={SAVE_20231011_205649} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Front-End Developer with 5 years of experience building user-friendly and responsive web applications. Skilled in HTML, CSS, JavaScript frameworks like react, and UI/UX best practices.</p>
                <p>I am a front-end developer with a passion for creating user-friendly and visually appealing web interfaces. I have strong proficiency in HTML, CSS, and JavaScript, and I am experienced in building responsive websites that function flawlessly across all devices.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>5+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About