import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='nav'>
      <Link className='navlink' to="/home">Home</Link>
      <Link className='navlink' to="/education" >Education</Link>
      <Link className='navlink' to="/projects" >Projects</Link>
      <Link className='navlink' to="/skills" >Skills</Link>
      <Link className='navlink' to="/certifications" >Certifications</Link>
      <Link className='navlink' to="/contact" >Contact</Link>
    </div>
  )
}

export default Navbar;
