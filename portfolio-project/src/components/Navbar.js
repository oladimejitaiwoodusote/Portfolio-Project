import {NavLink} from 'react-router-dom'
import './Navbar.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {ImBlog} from 'react-icons/im'

function Navbar() {
  return (
    <div className="navbar_wrapper">
      <nav className='navbar'>
         <div className="navbar-logo_wrapper">
            <span className='navabar-logo'>ODUSOTE</span>
         </div>
         <div className="navbar_icons">
            <NavLink className="navbar_link" to="/" activeClassName="active-link">
                <AiOutlineHome/> Home
            </NavLink>
            <NavLink className="navbar_link" to="/about" activeClassName="active-link">
                <AiOutlineUser/> About
            </NavLink>
            <NavLink className="navbar_link" to="/projects" activeClassName="active-link">
                <AiOutlineFundProjectionScreen/> Projects
            </NavLink>
            <a className="navbar_link" href="https://medium.com/@taiwo.odusote" target="_blank" rel="noopener noreferrer">
                <ImBlog/> Blog
            </a>
         </div>
      </nav>
    </div>
  )
}

export default Navbar