'use client';
import React from 'react';
import './Note.css';
import { useRouter, useParams } from 'next/navigation';

const Note = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const handleGetStarted = () => {
    router.push(`/class/${id}/notes`);
  };

  return (
    <div className="notes-container" id='mnotes'>
      <div className="notes-text">
        <p className="notes-welcome">Notes</p>
        <h1 className="notes-heading">
        High-Quality Notes<br />
        for Every Chapter
        </h1>
        <p className="notes-description">
          Explore chapter-wise notes designed to<br />
          you grasp key concepts easily.<br />
          Crafted for clarity and aligned with your syllabus,<br />
          these notes are perfect for exam prep and revisions.<br />
        </p>
        <button className="notes-button" onClick={handleGetStarted}>
          Get Notes
        </button>
      </div>
      <div className="notes-image">
        <img className='notesviewer'
          src={'/snotes.png'}
          width="100%"
          height="80vh"
          style={{ border: '1px solid #ccc' }}
        />
      </div>
    </div>
  );
};

export default Note;
