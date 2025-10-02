'use client'
import React, { useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="WNav">
      <div className="NavRight">QuickMentors</div>

      {/* Hamburger for mobile */}
      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`NavLeft ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#RHOME" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#RPRODUCTS" className="nav-link" onClick={() => setMenuOpen(false)}>Products</a></li>
          <li><a href="#RFEATURES" className="nav-link" onClick={() => setMenuOpen(false)}>Features</a></li>
          <li><a href="#RABOUT" className="nav-link" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#RFP" className="nav-link" onClick={() => setMenuOpen(false)}>Future-Projects</a></li>
          <li><a href="https://first1-portfolio-xuyw-nishant-keshris-projects.vercel.app/" target="_blank" rel="noreferrer" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
