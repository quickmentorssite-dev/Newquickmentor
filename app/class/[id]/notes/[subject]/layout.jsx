'use client';

import notesData from '@/lib/notesData';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useState } from 'react';
import './layout.css'; // ✅ Reuse styles from MCQ layout
import Navbar from '../../component/Anav';
import Footer from '@/app/Components/Foot';

export default function NotesSubjectLayout({ children }) {
  const { id, subject } = useParams();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Capitalize subject to match the structure of notesData
  const subjectKey = subject?.charAt(0).toUpperCase() + subject?.slice(1);
  const chapters = notesData?.[id]?.subjects?.[subjectKey] || [];

  return (
    <><Navbar />
    <div className={`layout-wrapper ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="subject-title">
            {subject?.replace(/-/g, ' ')} – Class {id}
          </div>
        </div>

        <div className="chapter-links">
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/class/${id}/notes/${subject}/${chapter.id}`}
              className={`chapter-link ${pathname.includes(chapter.id) ? 'active' : ''}`}
            >
              {chapter.title}
            </Link>
          ))}
        </div>
      </aside>

      {/* Toggle Sidebar Button */}
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? '❌ Hide Chapters' : '📚 Show Chapters'}
      </button>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>
    </div>
    </>
  );
}
