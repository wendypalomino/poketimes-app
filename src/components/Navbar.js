import React from 'react';


const Navbar = () =>{
    return(
        <nav className="nav wrapper red darken 3">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Poke's time</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;