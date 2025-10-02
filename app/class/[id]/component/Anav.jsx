
'use client'
import React, { useState } from 'react';
import './Navbar.css';
import { useParams, useRouter } from 'next/navigation';

const Navbar = () => {
  const { id } = useParams();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const goToPage = (page) => {
    setMenuOpen(false); // close menu on navigation
    router.push(`/class/${id}/${page}`);
  };

  return (
    <nav className="navbar">
      <div className="logo">QuickMentors</div>

      {/* Hamburger icon */}
      <div 
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a onClick={() => { setMenuOpen(false); router.push('/'); }}>Home</a></li>
        <li><a onClick={() => goToPage('notes')} className="active">Notes</a></li>
        <li><a onClick={() => goToPage('ncert-solution')}>NCERT Solution</a></li>
        <li><a onClick={() => goToPage('pyqs-mcqs')}>PYQs-MCQs-ChapterWise</a></li>
        <li><a onClick={() => goToPage('pyqs-chapter')}>PYQs-Exercises-ChapterWise</a></li>
        <li><a onClick={() => goToPage('mcqs')}>Important MCQs</a></li>
        <li><a onClick={() => goToPage('pyqs-year')}>PYQs-Year Wise</a></li>
        <li><a onClick={() => goToPage('chapterwise-exercise')}>Important Questions</a></li>
        <li><a onClick={() => goToPage('ncert-book')}>NCERT Rationalised Chapter</a></li>
        <li><a href="https://first1-portfolio-xuyw-nishant-keshris-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
