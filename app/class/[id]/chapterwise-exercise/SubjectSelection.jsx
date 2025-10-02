'use client';
import { useRouter, useParams } from 'next/navigation';
import chapterQuestions from '@/data/chapterQuestions';
import Footer from '../component/Foot.jsx';
import Navbar from '../component/Anav.jsx';
import Link from 'next/link';

export default function SubjectSelection() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const classData = chapterQuestions[id];
  const subjects = Object.keys(classData || {});

  if (!classData) {
    return (
      <div className="p-4 text-white">
        <h1 className="mcqs-heading">Select a Subject - Class {id}</h1>
        <p className="text-red-500">No data found for this class.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="mcqs-container">
        <h1 className="mcqs-heading">📘 Class {id} Important Questions (Chapterwise)</h1>

        <div className='toptext' style={{ marginBottom: '2rem', color: 'black', fontSize: '1rem', lineHeight: '1.6' }}>
          <p>
            Get ready for your CBSE Class {id} board exams with our curated collection of chapterwise Important Questions and their detailed solutions.
          </p>
          <p style={{ marginTop: '1rem' }}>
            We cover Important Questions for Class {id} subjects including Science, Social Science, Mathematics, English, Hindi, and more.
          </p>
          <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#555' }}>
            Select a subject below to start practicing Important Questions chapterwise.
          </p>
        </div>

        <div className="card-grid">
          {subjects.map((subject, index) => (
            <div key={subject} className={`subject-card card-${(index % 3) + 1}`}>
              <div className="card-content">
                <h2 className="card-title">
                  {subject.charAt(0).toUpperCase() + subject.slice(1)}
                </h2>
                <p className="card-desc">Explore chapter-wise Important Questions</p>
              </div>
              <button
                onClick={() =>
                  router.push(`/class/${id}/chapterwise-exercise/${subject}`)
                }
                className="card-button"
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
