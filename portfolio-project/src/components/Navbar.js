import {NavLink} from 'react-router-dom'
import './Navbar.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineFileText} from 'react-icons/ai'
import {ImBlog} from 'react-icons/im'

function Navbar() {
  return (
    <div className="navbar_wrapper">
      <nav className='navbar'>
         <div className="navbar-logo_wrapper">
            <span className='navabar-logo'>OEO.</span>
         </div>
         <div className="navbar_icons">
            <NavLink className="navbar_link" to="/" activeClassName="active-link">
                <AiOutlineHome/> Home
            </NavLink>
            <NavLink className="navbar_link" to="/about" activeClassName="active-link">
                <AiOutlineUser/> About
            </NavLink>
            <NavLink className="navbar_link" to="/resume" activeClassName="active-link">
                <AiOutlineFileText/> Resume
            </NavLink>
            <NavLink className="navbar_link" to="/projects" activeClassName="active-link">
                <AiOutlineFundProjectionScreen/> Projects
            </NavLink>
            <NavLink className="navbar_link" to="/blog" activeClassName="active-link">
                <ImBlog/> Blog
            </NavLink>
         </div>
      </nav>
    </div>
  )
}

export default Navbar