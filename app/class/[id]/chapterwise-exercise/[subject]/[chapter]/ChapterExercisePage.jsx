'use client';

import './chapter.css';
import { useState } from 'react';

export default function ChapterExercisePage({ id, subject, chapter, questions }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const readableChapter = chapter.replace(/-/g, ' ');
  const capitalizedSubject = subject.charAt(0).toUpperCase() + subject.slice(1);
  const title = `Class ${id} ${capitalizedSubject} - ${readableChapter} Exercises`;

  return (
    <div className="chapter-container toptext">
      <h1 className="chapter-heading">{title}</h1>
      {questions.length === 0 ? (
        <p>❌ No questions available for this chapter.</p>
      ) : (
        questions.map((q, index) => (
          <div
            key={q.id || index}
            className={`question-card ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAnswer(index)}
          >
            <h2 className="question-text">{`Q${index + 1}: ${q.question}`}</h2>
            {activeIndex === index && (
              <div className="answer-wrapper">
                <p className="answer-text">{q.answer}</p>
              </div>
            )}
            <div className="down-arrow">↓</div>
          </div>
        ))
      )}
    </div>
  );
}
