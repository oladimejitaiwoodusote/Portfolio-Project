import React from 'react'
import projImg1 from '../Assets/instagram.jpg'
import projImg2 from '../Assets/collectorsgramm.jpg'
import projImg3 from '../Assets/pet_appointment.jpg'
import './Projects.css'

const projects = [
  {
    id: 1,
    name: 'Instagram Clone',
    description: 'An instagram clone application built using react.js for the front-end, Flask for the backend and PostgreSQL for storage. Implemented user authentication and authorization for account management. Also implement social media features for user interactivity.',
    githubLink: 'https://github.com/oladimejitaiwoodusote/Instagram-Mock',
    demoLink: 'https://instagram-mock-one.vercel.app/',
    image: projImg1
  },
  {
    id: 2,
    name: 'Collectorsgramm',
    description: 'A mock social media site for vinyl collectors built using react.js for the front-end, Flask for the backend and SQLite for storage. Implemented user authentication and authorization for account management. Also implement social media features for user interactivity.',
    githubLink: 'https://github.com/oladimejitaiwoodusote/Capstone-',
    demoLink: '',
    image: projImg2
  },
  {
    id: 3,
    name: 'Pet Appointment Tracker',
    description: 'Developed an appointment tracker for pet owners and doctors using react.js for the front-end, Flask for the backend and SQLite for storage. Implemented user authentication and authorization for account management.',
    githubLink: 'https://github.com/oladimejitaiwoodusote/phase-4-project',
    demoLink: '',
    image: projImg3
  }
]


function Projects() {
  return (
    <div className='projects'>
        <h1>My Most Recent Projects:  </h1>
        <div className='project-grid'>
          {projects.map((project) => (           
            <div className='project-card' key={project.id}>
              <img src={project.image} alt={project.name}/>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className='buttons'>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      GitHub
                  </a>
                  {project.demoLink && (
                     <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        Demo
                     </a>
                  )}
                </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Projects