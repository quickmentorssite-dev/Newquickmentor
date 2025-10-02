'use client';

import Link from 'next/link';
import Footer from '../component/Foot.jsx';
import Navbar from '../component/Anav.jsx';

export default function SubjectSelectClient({ id, subjects }) {
  return (
    <>
      <Navbar />
      <div className="mcqs-container">
        <h1 className="mcqs-heading">📘 Class {id} Chapterwise PYQs (Board Questions)</h1>

        {/* SEO-friendly top paragraph */}
        <div className="toptext"  style={{ marginBottom: '2rem', color: 'black', fontSize: '1rem', lineHeight: '1.6' }}>
          <p>
            Prepare effectively for your CBSE Class {id} board exams with our comprehensive collection of chapterwise Previous Year Questions (PYQs).
            Explore subject-wise PYQs with answers to understand exam patterns, important topics, and frequently asked questions.
          </p>
          <p style={{ marginTop: '1rem' }}>
            We provide high-quality solved PYQs for Class {id} in all major subjects — Science, Social Science, Mathematics, English, Hindi and more. 
            Use these chapterwise PYQs to strengthen your concepts, practice answer writing, and improve your board exam scores.
          </p>
          <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#555' }}>
            Start by selecting a subject below to view its chapterwise previous year questions.
          </p>
        </div>

        {/* Subject cards */}
        <div className="card-grid">
          {subjects.map((subject, index) => (
            <div key={subject} className={`subject-card card-${(index % 3) + 1}`}>
              <div className="card-content">
                <h2 className="card-title">{subject}</h2>
                <p className="card-desc">Previous Year Questions</p>
              </div>
              <Link
                href={`/class/${id}/pyqs-chapter/${subject}`}
                className="card-button"
              >
                →
              </Link>
            </div>
          ))}
        </div>

        {/* Internal Linking SEO block */}
        <div style={{ marginTop: '3rem', padding: '1.5rem', borderTop: '1px solid #ccc' }}>
          <h2 style={{ fontSize: '1.3rem', color: 'black', marginBottom: '1rem' }}>
            📚 Explore More Resources for Class {id}
          </h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'black' }}>
            <li>
              <Link href={`/class/${id}/notes`} style={{ textDecoration: 'underline', color: '#0070f3' }}>
                Class {id} Notes (All Subjects)
              </Link>
            </li>
            <li>
              <Link href={`/class/${id}/mcqs`} style={{ textDecoration: 'underline', color: '#0070f3' }}>
                Class {id} MCQs (Chapterwise Practice)
              </Link>
            </li>
            <li>
              <Link href={`/class/${id}/ncert-solution`} style={{ textDecoration: 'underline', color: '#0070f3' }}>
                Class {id} NCERT Solutions (Subjectwise)
              </Link>
            </li>
            <li>
              <Link href={`/class/${id}/pyqs-year`} style={{ textDecoration: 'underline', color: '#0070f3' }}>
                Class {id} PYQs - Yearwise
              </Link>
            </li>
          </ul>
          <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'black' }}>
            Prepare smarter with QuickMentors — find Notes, MCQs, NCERT Solutions, and PYQs for every subject in Class {id} and boost your board exam preparation.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
