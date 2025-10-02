'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { pyqsData } from '@/data/pyqsData';
import Navbar from '../../component/Anav';
import Footer from '@/app/Components/Foot';
import './layout.css';

export default function SubjectLayout({ children, params }) {
  const [sidebarOpen, setSidebarOpen] = useState(true); // 🔥 Sidebar toggle only

  useEffect(() => {
    // 🔥 Always force light mode
    document.body.className = 'light';
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const chapters = Object.keys(pyqsData?.[params.id]?.[params.subject] || []);

  return (
    <>
      <Navbar />
      <div className={`container ${sidebarOpen ? '' : 'collapsed'}`}>
        <aside className={`sidebar ${sidebarOpen ? '' : 'hide'}`}>
          <div className="sidebar-header">
            <h2 className="subject-title">{params.subject} Chapters</h2>
            {/* 🔥 Removed Theme Toggle Button */}
          </div>

          {chapters.length === 0 ? (
            <p className="no-chapters-msg">❌ No chapters found.</p>
          ) : (
            chapters.map((chapter) => (
              <Link
                key={chapter}
                href={`/class/${params.id}/pyqs-mcqs/${params.subject}/${chapter}`}
                className="chapter-link"
              >
                {chapter.replace(/-/g, ' ')}
              </Link>
            ))
          )}
        </aside>

        <main className="main-content">
          <button onClick={toggleSidebar} className="sidebar-toggle-btn">
            {sidebarOpen ? '⬅️ Hide Chapter' : '➡️ Show Other Chapters'}
          </button>

          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
