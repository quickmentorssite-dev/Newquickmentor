'use client';

import { useState } from 'react';
import chapterQuestions from '@/data/chapterQuestions';
import Footer from '../../component/Foot.jsx';
import Navbar from '../../component/Anav.jsx';
import './layout.css';

export default function SubjectLayout({ children, params }) {
  const { id, subject } = params;

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const classData = chapterQuestions[id];
  const subjectKey = subject.charAt(0).toUpperCase() + subject.slice(1);
  const subjectData = classData?.[subjectKey];

  const currentChapters = subjectData ? Object.keys(subjectData) : [];

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <><Navbar />
    <div className="layout-container">
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <h2 className="sidebar-title">
          {subjectKey} Chapters
        </h2>
        <ul className="chapter-list">
          {currentChapters.map(chapter => (
            <li key={chapter}>
              <a
                href={`/class/${id}/chapterwise-exercise/${subject}/${chapter}`}
                className="chapter-link"
              >
                {chapter.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <button className="sidebar-toggle-button" onClick={toggleSidebar}>
        {sidebarOpen ? 'Show Chapter list' : 'Hide Chapter list'}
      </button>

      <main className="main-content">{children}</main>
    </div><Footer /></>
  );
}
