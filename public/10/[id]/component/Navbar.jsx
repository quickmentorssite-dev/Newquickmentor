import React from 'react';
import './Navbar.css'; // Adjust the path as needed

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">QuickMentors</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#" className="active">Notes</a></li>
        <li><a href="#">NCERT Solution</a></li>
        <li><a href="#">PYQs</a></li>
        <li><a href="#">MCQs</a></li>
        <li><a href="#">Exercises</a></li>
        <li className="dropdown">
          <a href="#">NCERT Books</a>
          {/* 
          <ul className="dropdown-content">
            <li><a href="#">Option 1</a></li>
            <li><a href="#">Option 2</a></li>
          </ul> 
          */}
        </li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
