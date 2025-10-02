'use client';

import allQuestions from '@/lib/allQuestions';
import Link from 'next/link';
import slugify from 'slugify';
import Navbar from '../Components/QNav';
import Footer from '../class/[id]/component/Foot';
import './questions.css'; // ✅ Import your new CSS file

export default function QuestionsPage() {
  return (
    <>
      <Navbar />
      <div className="questions-section">
        <h1 className="questions-title">💡 All Practice Questions</h1>
        <ul className="questions-list">
          {allQuestions.map((q, index) => {
            const slug = slugify(String(q.question || q.id || ''), { lower: true, strict: true });
            const safeIdSlug = slugify(String(q.id || 'noid'), { lower: true, strict: true });
            const uniqueSlug = `${slug}___${safeIdSlug}`;
            const key = `q-${uniqueSlug}-${index}`;

            return (
              <li key={key} className="question-item">
                <Link href={`/questions/${uniqueSlug}`} className="question-link">
                  {q.question}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
}
