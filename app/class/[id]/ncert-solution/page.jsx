'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ncertSolutions } from '@/data/ncertSolutions';
import Footer from '../component/Foot.jsx';
import Navbar from '../component/Anav.jsx';

export default function SubjectListPage() {
  const params = useParams();
  const classId = params?.id?.toString();
  const subjects = ncertSolutions?.[classId];

  if (!subjects) {
    return (
      <div className="p-4 text-red-500">
        ❌ No NCERT solutions found for Class {classId}
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="mcqs-container">
        <h1 className="mcqs-heading">📘 Class {classId} - NCERT Subjects</h1>

        {/* ✅ SEO & Professional Paragraphs */}
        <section className="intro-section toptext" style={{ marginBottom: '2rem' }}>
          <p>
            Welcome to our <strong>Class {classId} NCERT Solutions</strong> section! Here, you'll find
            well-structured, chapterwise solutions for all major subjects including Maths, Science,
            Social Science, English, and more — as per the latest CBSE guidelines.
          </p>
          <p>
            These solutions are designed to help students build strong concepts and prepare for exams
            efficiently. Whether you're stuck on a tricky question or want to double-check your answers,
            our step-by-step explanations are perfect for self-study and quick revision.
          </p>
          <p>
            👉 This page covers the entire Class {classId} syllabus with direct access to chapterwise
            NCERT solutions. Just click on a subject below to get started.
          </p>
        </section>

        <div className="card-grid">
          {Object.keys(subjects).map((subjectKey, index) => {
            const isMaths = subjectKey === 'maths';
            const route = isMaths
              ? `/class/${classId}/math-solution`
              : `/class/${classId}/ncert-solution/${subjectKey}`;

            return (
              <div key={subjectKey} className={`subject-card card-${(index % 3) + 1}`}>
                <div className="card-content">
                  <h2 className="card-title">{subjectKey.replace(/-/g, ' ')}</h2>
                  <p className="card-desc">
                    {isMaths ? 'View all math chapter solutions' : 'View all chapter solutions'}
                  </p>
                </div>
                <Link href={route} className="card-button">
                  →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
