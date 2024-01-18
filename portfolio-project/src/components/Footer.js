import React from 'react'
import './Footer.css'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'


function Footer() {
  return (
        <footer className='Footer_wrapper'>
            <div className="Footer_copyright">
                <p>© 2024 Oladimeji Odusote</p>
            </div>
            <div className="Footer_links">
                <a href="https://github.com/oladimejitaiwoodusote">
                    <AiFillGithub/>  
                </a>
                <a href="https://www.linkedin.com/in/oladimejiodusote/">
                    <AiFillLinkedin/>
                </a>
            </div>
        </footer>
  )
}

export default Footer