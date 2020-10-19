import React from 'react';
import {Link} from 'react-router-dom'


const Navbar = () =>{
    return(
        <nav className="nav wrapper red darken 3">
        <div className ="nav-wrapper">
          <a href="#" className="brand-logo">Poke's time</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;