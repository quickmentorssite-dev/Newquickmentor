'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { pyqsData } from '@/data/pyqsData';
import Footer from '../component/Foot.jsx';
import Navbar from '../component/Anav.jsx';

export default function PyqsSubjectsClient({ id }) {
  const router = useRouter();

  const subjects = Object.keys(pyqsData?.[id] || {});

  if (subjects.length === 0) {
    return (
      <div className="p-4 text-red-600 font-bold">
        ❌ No subjects found for Class {id}
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="mcqs-container">
        <h1 className="mcqs-heading">📘 Class {id} - Previous Year Questions (MCQs) Subjects</h1>

        {/* ✅ SEO paragraph on top */}
        <div className="toptext"  style={{ padding: '1rem 0', color: '#333', fontSize: '1rem', lineHeight: '1.6' }}>
          <p>
            Prepare for your <strong>Class {id} CBSE Board Exams</strong> with chapter-wise <strong>Previous Year Questions (PYQs)</strong> in <strong>MCQ format</strong>. Practice important MCQs for subjects like <strong>Science</strong>, <strong>Mathematics</strong>, <strong>Social Science</strong>, <strong>English</strong>, and <strong>Hindi</strong>. All questions are curated from actual CBSE board exams.
          </p>
          <p>
            Master each subject by solving high-quality MCQs from past exams. Our free collection of <strong>Class {id} PYQs MCQs</strong> will help you understand exam trends, boost accuracy, and score higher. Start practicing today with QuickMentors.
          </p>
        </div>

        {/* ✅ Cards */}
        <div className="card-grid">
          {subjects.map((subject, index) => (
            <div key={subject} className={`subject-card card-${(index % 3) + 1}`}>
              <div className="card-content">
                <h2 className="card-title">{subject}</h2>
                <p className="card-desc">MCQs from Previous Year Questions</p>
              </div>
              <button
                className="card-button"
                onClick={() => router.push(`/class/${id}/pyqs-mcqs/${subject}`)}
              >
                →
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
