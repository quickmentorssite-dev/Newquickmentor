'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import ncertData from '@/data/ncertData';
import Footer from '../component/Foot.jsx';
import Navbar from '../component/Anav.jsx';
import './Ncert.css';

export default function NcertLayout({ children }) {
  const { id } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const classContent = ncertData[id];
  if (!classContent) return <div>No NCERT data found for this class.</div>;

  return (
    <><Navbar />
      <h1 className="page-title">Class {id} - NCERT Chapters</h1>
      <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? 'Hide Chapter List' : 'Show ChapterList'}
      </button>

      <div className="layout-container">
        {/* Sidebar */}
        <div className={`sidebar ${sidebarOpen ? '' : 'collapsed'}`}>
          <div className="sidebar-scroll">
            {Object.entries(classContent).map(([subject, chapters]) => (
              <div key={subject}>
                <div className="subject-title">{subject}</div>
                {chapters.map((chapter) => (
                  <Link
                    key={chapter.id}
                    href={`/class/${id}/ncert-book/${chapter.id}`}
                    className="chapter-link"
                  >
                    {chapter.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className={`main-content ${sidebarOpen ? 'with-sidebar' : 'full-width'}`}>
          {children}
        </div>
      </div><Footer />
    </>
  );
}
