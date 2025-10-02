'use client';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { mcqsData } from '@/data/mcqsData.js';
import { SidebarProvider, useSidebar } from '@/context/SidebarContext';
import Navbar from '../../component/Anav'; // ✅ Navbar
import './layout.css';

function SidebarLayout({ children }) {
  const params = useParams();
  const pathname = usePathname();
  const { sidebarOpen, setSidebarOpen } = useSidebar();

  const chapters = Object.keys(mcqsData?.[params.id]?.[params.subject] || {});

  return (
    <>
      <Navbar />

      <div className={`layout-wrapper ${sidebarOpen ? 'sidebar-open' : 'sidebar-collapsed'}`}>
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-header">
            <div className="subject-title">
              {params.subject.replace(/-/g, ' ')} – Class {params.id}
            </div>
          </div>

          <div className="chapter-links">
            {chapters.map((chapter) => (
              <Link
                key={chapter}
                href={`/class/${params.id}/mcqs/${params.subject}/${chapter}`}
                className={`chapter-link ${pathname.includes(chapter) ? 'active' : ''}`}
              >
                {chapter.replace(/-/g, ' ')}
              </Link>
            ))}
          </div>
        </aside>

        {/* ✅ Toggle Button */}
        <button
          className="sidebar-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? '❌ Hide Chapters' : '📚 Show Chapters'}
        </button>

        {/* Main Content */}
        <main className="main-content">{children}</main>
      </div>
    </>
  );
}

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <SidebarLayout>{children}</SidebarLayout>
    </SidebarProvider>
  );
}
