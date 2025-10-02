'use client';

import { useParams, useRouter } from 'next/navigation';
import { ncertSolutions } from '@/data/ncertSolutions';
import { useState } from 'react';
import Navbar from '../../component/Anav';
import Footer from '@/app/Components/Foot';
import './Ncerrt.css';

export default function SubjectLayout({ children }) {
  const params = useParams();
  const router = useRouter();

  const id = params.id;
  const subject = decodeURIComponent(params.subject);

  const chapters = Object.keys(ncertSolutions?.[id]?.[subject] || {});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default false for mobile

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <>
      <Navbar />
      <div className="main-container">
        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <h2>{subject.toUpperCase()} - Class {id}</h2>
          <ul>
            {chapters.map((chapter) => (
              <li key={chapter}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(
                      `/class/${id}/ncert-solution/${encodeURIComponent(subject)}/${encodeURIComponent(chapter)}`
                    );
                    setIsSidebarOpen(false); // Auto-close on chapter click
                  }}
                >
                  {chapter.replace(/-/g, ' ')}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <button className="toggle-btn" onClick={toggleSidebar}>
            {isSidebarOpen ? 'Hide Chapter' : 'Show Other Chapters'}
          </button>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
