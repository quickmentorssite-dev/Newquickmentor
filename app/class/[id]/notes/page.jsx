'use client';

import { useParams, useRouter } from 'next/navigation';
import notesData from '@/lib/notesData';

export default function NotesSubjectPage() {
  const { id } = useParams();
  const router = useRouter();

  const subjects = Object.keys(notesData?.[id]?.subjects || {});

  const handleSubjectSelect = (subject) => {
    router.push(`/class/${id}/notes/${subject.toLowerCase()}`);
  };

  return (
    <div className='toptext' style={{ padding: '2rem' }}>
      <h1>Choose a Subject to View Notes</h1>
      <p style={{ maxWidth: '700px', marginBottom: '1.5rem' }}>
        Here you'll find all the subjects available for Class {id}. Click on a subject to explore
        chapter-wise notes, important concepts, and exam-ready material based on the latest NCERT and CBSE syllabus.
      </p>
      {subjects.map((subj) => (
        <button
          key={subj}
          onClick={() => handleSubjectSelect(subj)}
          style={{
            margin: '0.5rem',
            padding: '0.75rem 1.5rem',
            border: '1px solid #ccc',
            borderRadius: '8px',
            background: '#f9f9f9',
            cursor: 'pointer',
          }}
        >
          {subj}
        </button>
      ))}
    </div>
  );
}
