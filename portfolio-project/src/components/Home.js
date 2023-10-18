import React from 'react'
import profImg from '../Assets/peng.jpeg'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <section className='hero'>
            <h1>Hello! I'm Oladimeji Odusote and welcome!</h1>
            <p> Full Stack Web Developer | Tech Enthusiast </p>
        </section>

        <section className="about-me">
            <h2>A brief introduction...</h2>
            <p>
                During my time as a Flow Assurance Consultant in the Oil and Gas industry, 
                I was drawn to the world of programming. It became a powerful tool in my professional arsenal, 
                allowing me to optimize and innovate within my field.
            </p>
            <p>
                I've honed my skills particularly in Python and JavaScript, developing a proficiency that is both broad and deep. 
                My passion lies in web development, where I apply these languages in conjunction with technologies such as Node.js, 
                and frameworks like React.js and Flask-SQLAlchemy.
            </p>
            <p>
                Here, you'll find a showcase of my technical journey and the projects that have been a testament to my growth and 
                learning in the ever-evolving field of technology.
            </p>
            <img src={profImg} alt="Oladimeji Odusote"/>
        </section>

        <section className="contact-cta">
            <h2>Let's Connect!</h2>
            <p>
                Curious to work together or just connect? Find me on LinkedIn, GitHub or shoot me an email which can be found on my resume.
                Thanks for stopping by!
            </p>    
        </section>
    </div>
  )
}

export default Home