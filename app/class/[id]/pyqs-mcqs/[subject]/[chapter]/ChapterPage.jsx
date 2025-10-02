'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import './page.css';

function TypingText({ text }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <p className="typing-text">{displayed}</p>;
}

function MCQCard({ question, index }) {
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleClick = (optionKey) => {
    setSelected(optionKey);
    if (optionKey === question.answer) {
      setFeedback('✅ Correct Answer');
    } else {
      setFeedback(
        `❌ Incorrect. Correct answer is (${question.answer}) ${question.options[question.answer]}`
      );
    }
  };

  return (
    <div className="question-box">
      <p className="question-text">Q{index + 1}: {question.question}</p>
      {!selected ? (
        <ul className="options-list">
          {Object.entries(question.options).map(([key, value]) => (
            <li key={key} className="option-item">
              <button onClick={() => handleClick(key)} className="option-btn">
                <strong>{key}.</strong> {value}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <TypingText text={feedback} />
      )}
    </div>
  );
}

export default function ChapterPage({ questions }) {
  const { id, subject, chapter } = useParams();

  const readableChapter = chapter?.replace(/-/g, ' ') || 'Chapter';
  const capitalizedSubject =
    subject?.charAt(0).toUpperCase() + subject?.slice(1) || 'Subject';

  if (!questions || questions.length === 0) {
    return (
      <p className="error-msg">❌ No questions found for {readableChapter}</p>
    );
  }

  return (
    <div className="chapter-wrapper">
      <h1 className="chapter-title">
        {readableChapter} - Class {id} {capitalizedSubject} PYQs MCQs
      </h1>

      <p className="chapter-intro">
        Prepare for your <strong>CBSE Class {id} {capitalizedSubject}</strong> exams with
        <strong> chapter-wise Previous Year Questions (PYQs)</strong> in MCQ format. This
        collection from <strong>"{readableChapter}"</strong> includes actual CBSE board exam
        questions. Perfect for practice, revision, and boosting marks.
      </p>

      <div className="questions-container">
        {questions.map((q, index) => (
          <MCQCard key={q.id} question={q} index={index} />
        ))}
      </div>
    </div>
  );
}
