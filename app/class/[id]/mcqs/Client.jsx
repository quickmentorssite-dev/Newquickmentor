'use client';

import { useRouter, useParams } from 'next/navigation';
import { mcqsData } from '@/data/mcqsData';
import Footer from '../component/Foot.jsx';
import Navbar from '../component/Anav.jsx';

export default function McqsSubjectsPage() {
  const router = useRouter();
  const { id } = useParams();
  const subjects = mcqsData[id] ? Object.keys(mcqsData[id]) : [];

  return (
    <>
      <Navbar />
      <main className="mcqs-container">
        <h1 className="mcqs-heading">Class {id} Chapterwise MCQs – All Subjects</h1>

        <section  className="intro-section toptext">
          <p>
            Prepare confidently with our <strong>CBSE Class {id} MCQs</strong> covering all subjects like
            Science, Maths, Social Science (SST), English, Civics, and History.
          </p>
          <p>
            All questions are based on the <strong>latest NCERT syllabus and CBSE exam pattern</strong>. You can quickly revise and test yourself with our chapterwise multiple-choice questions.
          </p>
          <p>
            🔍 What users search and we cover: <em>
              “Class {id} Science Important MCQs”, “Sound MCQs Class {id}”, “Chapterwise History MCQs Class {id}”, “Objective Questions for Class {id} CBSE”
            </em>
          </p>
        </section>

        {subjects.length > 0 ? (
          <section className="card-grid">
            {subjects.map((subject, index) => (
              <article key={subject} className={`subject-card card-${(index % 3) + 1}`}>
                <div className="card-content">
                  <h2 className="card-title">{subject.toUpperCase()}</h2>
                  <p className="card-desc">Tap to view chapterwise MCQs</p>
                </div>
                <button
                  onClick={() => router.push(`/class/${id}/mcqs/${subject}`)}
                  className="card-button"
                  aria-label={`Go to ${subject} MCQs`}
                >
                  →
                </button>
              </article>
            ))}
          </section>
        ) : (
          <p className="no-subjects">No subjects found for Class {id}.</p>
        )}

        <Footer />
      </main>
    </>
  );
}
