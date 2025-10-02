'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';  // <-- Add this line!
import { mathSolutions } from '@/data/mathSolution';
import Navbar from '../../component/Anav';
import Footer from '@/app/Components/Foot';

export default function MathChapterDetailPage() {
  const { id, chapter } = useParams();

  const chapterData = mathSolutions?.[id]?.[chapter];

  if (!chapterData) {
    return (
      <div className="p-4 text-red-600">
        ❌ Chapter not found for Class {id}, Chapter "{chapter}"
      </div>
    );
  }

  return (
   <>
  <Navbar />
  <div className="chapter-detail-container">
    <div className="intro-text toptext">
      <h1>📘 Class {id} - {chapter.replace(/-/g, ' ')} Exercise List</h1>
      <p>
        Welcome! This page contains all the <strong>exercise-wise solutions</strong> for the chapter <strong>{chapter.replace(/-/g, ' ')}</strong> from Class {id} Maths NCERT book.
      </p>
      <p>
        Select an exercise from the left to view detailed, step-by-step solutions tailored to help you score better and strengthen your understanding.
      </p>
    </div>

    <div className="exercise-layout">
      {/* Sidebar */}
      <aside className="exercise-sidebar">
        <h2 className="sidebar-title">📂 Exercises</h2>
        <ul className="exercise-list">
          {Object.keys(chapterData).map((subKey) => (
            <li key={subKey}>
              <Link
                href={`/class/${id}/math-solution/${chapter}/${subKey}`}
                className="exercise-link"
              >
                {subKey.replace(/-/g, ' ')}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* You can add content for selected subchapter on the right */}
    </div>
  </div>
  <Footer />
</>

  );
}
