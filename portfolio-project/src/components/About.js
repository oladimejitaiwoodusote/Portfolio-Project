import React from 'react'
import profImg from '../Assets/guitar.jpeg'
import profImg2 from '../Assets/futbol.jpg'
import './About.css'
import {DiPython, DiJavascript1,DiNodejs, DiReact, DiPostgresql, DiHtml5, DiCss3} from 'react-icons/di'
import { SiSqlite, SiFlask, SiVercel, SiHeroku} from "react-icons/si";


function About() {
  return (
    <div className='home'>
        <section className='about-me'>
            <div className='about-me-content'>
                <div className='text-content'>
                    <h1>My Story and Background</h1>
                    <p>
                        Hello! I'm Oladimeji Odusote, a Software Developer. I spent my formative years in
                        Lagos, Nigeria until the age of 14 when I relocated to the United States with my family, I 
                        pursued my undergraduate degree at the University of Illinois at Urbana-Champaign, where I
                        earned a BSc. in Chemical Engineering and was introduced to the world of software
                        development. 
                    </p>
                    <p>
                        After graduating, I ventured into the field of engineering, working as a flow assurance
                        engineer at Evoleap in Houston, TX. It was during this role that my interest and passion 
                        for software development truly flourished. I was given coding tasks in addition to my 
                        engineering responsibilities to automate team workflows, igniting my passion for 
                        software development.
                    </p>
                    <p>
                        My enthusiasm led me to attend a Full-Stack development bootcamp, Flatiron School.
                        in New York City. Since then, I've been back in Houston, TX, 
                        working as a software developer at Renola Energy, an LNG company.
                    </p>
                    <p>
                        Beyond the realm of work and software development, I enjoy spending my free time 
                        reading 19th-century Russian literature, playing soccer, playing the guitar, and 
                        indulging in the world of vinyl records. Thank you for visiting my website!
                    </p>
                </div>
                <div className='About_image-content'>
                    <div className='About_image-wrapper'>
                        <img src={profImg} alt="guitar"/>
                        <img src={profImg2} alt="futbol"/>
                    </div>
                </div>
            </div>
        </section>
        <section className='technical-skills'>
            <h1>Technical Skills</h1>
            <div className='icon-grid'>
                <DiPython className='icon'/>
                <DiJavascript1 className='icon'/>
                <DiNodejs className='icon'/>
                <DiReact className='icon'/>
                <DiPostgresql className='icon'/>
                <DiHtml5 className='icon'/>
                <DiCss3 className='icon'/>
                <SiSqlite className='icon'/>
                <SiFlask className='icon'/>
                <SiVercel className='icon'/>
                <SiHeroku className='icon'/>
            </div>
        </section>
    </div>
  )
}

export default About