import React, { useState } from 'react';
import './Navbar.css'; // your CSS file
import { useUser } from '@/context/UserContext';

const Navbar = () => {
  const { userData } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className="navbar">
      <div className="logo">QuickMentors</div>

      {/* Hamburger for small screens */}
      <div className={`hamburger${menuOpen ? ' open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#mnotes" className="active">Notes</a></li>
        <li><a href="#mncert-solution">NCERT Solution</a></li>
        <li><a href="#mpyqs-mcqs">PYQs-MCQs-ChapterWise</a></li>
        <li><a href="#mpyqs-exercise">PYQs-Exercises-ChapterWise</a></li>
        <li><a href="#mmcqs">Important MCQs</a></li>
        <li><a href="#mpyqs-year">PYQs-YearWise</a></li>
        <li><a href="#mexercises">Important Questions</a></li>
        <li className="dropdown">
          <a href="#mncert-books">NCERT Books</a>
          {/* 
          <ul className="dropdown-content">
            <li><a href="#">Option 1</a></li>
            <li><a href="#">Option 2</a></li>
          </ul> 
          */}
        </li>
        <li><a href="https://first1-portfolio-xuyw-nishant-keshris-projects.vercel.app/">Contact</a></li>
      </ul>

      {userData && <span className="user-greeting">Hi, {userData.name}</span>}
    </nav>
  );
};

export default Navbar;
