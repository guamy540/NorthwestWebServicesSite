import React, { useState } from "react";
import "./Navbar.css";
import '../../App.css'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
        <nav className="Navbar" style={{zIndex:100}}>
          <a href= "/"><span className="nav-logo pl-4"><span className="fizzColor">Fizz</span>Buzz</span></a>
          <div className={`nav-items ${isOpen && "open"}`}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/reviews">Reviews</a>
            <a href="/contact">Contact</a>
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"} mr-4`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </nav>  
  );
};

export default Navbar;