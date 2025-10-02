'use client';

import { useParams, useRouter } from 'next/navigation';
import { mathSolutions } from '@/data/mathSolution';
import Navbar from '../component/Anav';
import Footer from '../component/Foot';

export default function MathChaptersPage() {
  const { id } = useParams();
  const router = useRouter();

  const classData = mathSolutions[id];

  if (!classData) {
    return <div className="p-4 text-red-600">❌ No Math data found for Class {id}</div>;
  }

  return (
    <>
      <Navbar />
      <div className="mcqs-container">
        <h1 className="mcqs-heading">📘 Class {id} - Maths Chapter Solutions</h1>

        {/* ✅ Optional SEO intro section if needed */}
        <section className="intro-section toptext" style={{ marginBottom: '2rem' }}>
          <p>
            Dive into the complete list of <strong>Class {id} Maths NCERT chapter solutions</strong>.
            Whether you're preparing for your CBSE board exams or revising concepts, our chapterwise
            solutions are crafted to match the latest syllabus and help you score higher.
          </p>
          <p>
            Tap on any chapter below to explore step-by-step solutions, explanations, and accurate
            answers to every NCERT maths exercise.
          </p>
        </section>

        <div className="card-grid">
          {Object.keys(classData).map((chapterSlug, index) => (
            <div key={chapterSlug} className={`subject-card card-${(index % 3) + 1}`}>
              <div className="card-content">
                <h2 className="card-title">{chapterSlug.replace(/-/g, ' ')}</h2>
                <p className="card-desc">Click to view complete solution</p>
              </div>
              <button
                onClick={() => router.push(`/class/${id}/math-solution/${chapterSlug}`)}
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
