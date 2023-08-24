import React from 'react'
import '../Components/Nav.css'
// import About from '../Components/About'
import {Link} from "react-router-dom"

export default function Nav() {
  return (
    <div className='header'>
     
      <div className='NavComponent'>

      <ul>
      <div className="Logo">
        <Link to='/'>Passport</Link>
      </div>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>

    
      </ul>

      <div className="btn">
        <button>Contact US</button>
       </div>

      </div>

    </div>
  )
}
