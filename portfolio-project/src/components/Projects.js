import React from 'react'
import projImg1 from '../Assets/Spotify.jpg'
import projImg2 from '../Assets/instagram.jpg'
import projImg3 from '../Assets/collectorsgramm.jpg'
import projImg4 from '../Assets/pet_appointment.jpg'
import './Projects.css'

const projects = [
  {
    id: 1,
    name: 'Spotify Clone',
    description: 'A full-stack application that emulates key functionalities of Spotify, allowing users to listen to songs, create playlists, and manage a music library. Built with Next.js, this project integrates Stripe for secure payment handling, uses Supabase for backend services, and PostgreSQL for database management. It provides both free and premium user experiences with Tailwind CSS for a sleek, responsive design.',
    githubLink: 'https://github.com/oladimejitaiwoodusote/Spotify-Mock',
    demoLink: 'https://spotify-mock-xi.vercel.app/',
    image: projImg1
  },
  {
    id: 2,
    name: 'Instagram Clone',
    description: 'An instagram clone application built using react.js for the front-end, Flask for the backend and PostgreSQL for storage. Implemented user authentication and authorization for account management. Also implemented social media features for user interactivity.',
    githubLink: 'https://github.com/oladimejitaiwoodusote/Instagram-Mock',
    demoLink: 'https://instagram-mock-one.vercel.app/',
    image: projImg2
  },
  {
    id: 3,
    name: 'Collectorsgramm',
    description: 'A mock social media site for vinyl collectors built using react.js for the front-end, Flask for the backend and SQLite for storage. Implemented user authentication and authorization for account management. Also implemented social media features for user interactivity.',
    githubLink: 'https://github.com/oladimejitaiwoodusote/Capstone-',
    demoLink: '',
    image: projImg3
  },
  {
    id: 4,
    name: 'Pet Appointment Tracker',
    description: 'Developed an appointment tracker for pet owners and doctors using react.js for the front-end, Flask for the backend and SQLite for storage. Implemented user authentication and authorization for account management.',
    githubLink: 'https://github.com/oladimejitaiwoodusote/phase-4-project',
    demoLink: '',
    image: projImg4
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