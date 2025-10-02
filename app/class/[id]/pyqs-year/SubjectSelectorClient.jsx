'use client';

import { useRouter } from "next/navigation";
import pyqData from "@/lib/pyqData";
import Footer from '../component/Foot.jsx';
import Navbar from '../component/Anav.jsx';

export default function SubjectSelectorClient({ id }) {
  const router = useRouter();

  const classData = pyqData[parseInt(id)];

  if (!classData) {
    return (
      <div className="p-4 text-red-600 font-semibold">
        ❌ No PYQ data found for Class {id}
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="mcqs-container">
        <h1 className="mcqs-heading">📘 Class {id} - Yearwise Board Exam PYQs - Subjects</h1>

        {/* ✅ SEO Paragraph */}
        <div className="toptext" style={{ padding: '1rem 0', color: '#333', fontSize: '1rem', lineHeight: '1.6' }}>
          <p>
            Access <strong>Class {id} CBSE Board Exam Yearwise Previous Year Questions (PYQs)</strong> organized by subject and chapter. Download and practice real board exam questions for subjects like <strong>Science</strong>, <strong>Mathematics</strong>, <strong>Social Science</strong>, <strong>English</strong>, and <strong>Hindi</strong>.
          </p>
          <p>
            Use these <strong>Yearwise PYQs</strong> to understand exam patterns, important questions, and trends. Practice chapterwise PYQs to strengthen your board preparation. All resources are free and curated for Class {id} students. Start now with QuickMentors.
          </p>
        </div>

        {/* ✅ Subject Cards */}
        <div className="card-grid">
          {Object.keys(classData).map((subject, index) => (
            <div key={subject} className={`subject-card card-${(index % 3) + 1}`}>
              <div className="card-content">
                <h2 className="card-title">{subject}</h2>
                <p className="card-desc">Chapterwise Yearwise PYQs</p>
              </div>
              <button
                className="card-button"
                onClick={() => router.push(`/class/${id}/pyqs-year/${subject}`)}
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
