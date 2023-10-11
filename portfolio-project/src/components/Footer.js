import React from 'react'
import './Footer.css'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'


function Footer() {
  return (
    <div className='Footer_wrapper'>
        <footer>
            <div className="Footer_tag">
                <p>Developed and Designed by Oladimeji Odusote</p>
            </div>
            <div className="Footer_copyright">
                <p>Copyright © 2023 Oladimeji Odusote</p>
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
    </div>
  )
}

export default Footer