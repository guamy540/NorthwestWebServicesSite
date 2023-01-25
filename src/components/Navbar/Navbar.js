import React, { useState } from "react";
import "./Navbar.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
        <nav className="Navbar" style={{zIndex:100}}>
          <a href= "/"><span className="nav-logo text-white pl-4">NORTHWEST WEB SERVICES</span></a>
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