'use client';

import { useEffect, useState } from 'react';
import './pre.css';

export default function ChapterwisePYQPage({ id, subject, chapter, questions }) {
  const [theme, setTheme] = useState('light');
  const [selectedOptions, setSelectedOptions] = useState({});
  const [activeCard, setActiveCard] = useState(null);

  const readableChapter = chapter.replace(/-/g, ' ');
  const capitalizedSubject = subject.charAt(0).toUpperCase() + subject.slice(1);
  const heading = `Class ${id} - ${capitalizedSubject} - ${readableChapter} PYQs`;

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const btn = document.getElementById('back-to-top');
    const toggleBtn = () => {
      if (btn) btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    };
    window.addEventListener('scroll', toggleBtn);
    return () => window.removeEventListener('scroll', toggleBtn);
  }, []);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  const handleOptionSelect = (questionId, optionKey) => {
    setSelectedOptions(prev => ({ ...prev, [questionId]: optionKey }));
  };

  const toggleAnswer = (cardId) => {
    setActiveCard(prev => (prev === cardId ? null : cardId));
  };

  const formatCorrectAnswer = (q) => {
    if (q.options && q.answer && q.options[q.answer]) {
      return `(${q.answer}) ${q.options[q.answer]}`;
    }
    return q.answer ? `(${q.answer})` : 'N/A';
  };

  return (
    <div className="chapter-container">
      {/* Theme Toggle Button */}
      <button onClick={toggleTheme} className="theme-toggle-btn">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>

      {/* Heading */}
      <h1 className="chapter-heading">{heading}</h1>

      {/* Professional Intro Text */}
      <div className="chapter-intro">
        <p>
          Welcome to the <strong>Class {id} {capitalizedSubject} – {readableChapter}</strong> Previous Year Questions (PYQs) collection.
          This section includes a curated list of important CBSE exam questions from past years.
        </p>
        <p>
          Use these questions to practice and strengthen your understanding of the chapter. Each question is selected to reflect the pattern of real board exams and class tests.
        </p>
      </div>

      {/* Questions */}
      {questions.length === 0 ? (
        <p className="no-pyqs-msg">❌ No PYQs available for this chapter.</p>
      ) : (
        questions.map((q) => {
          const selected = selectedOptions[q.id];
          const isMCQ = q.type === 'mcq';
          const isActive = activeCard === q.id;

          return (
            <div
              key={q.id}
              id={q.id}
              className={`question-card ${isActive ? 'active' : ''}`}
              onClick={() => toggleAnswer(q.id)}
            >
              <span className="question-text">{q.question}</span>
              <span className="down-arrow">▼</span>

              {q.image && (
                <div className="question-image-container">
                  <img src={q.image} alt={`Illustration for ${q.id}`} className="question-image" />
                </div>
              )}

              <div className="answer-wrapper">
                {isMCQ && q.options ? (
                  <>
                    <ul className="answer-options">
                      {Object.entries(q.options).map(([key, value]) => (
                        <li
                          key={key}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOptionSelect(q.id, key);
                          }}
                          className={`${
                            selected === key
                              ? key === q.answer
                                ? 'selected correct'
                                : 'selected incorrect'
                              : ''
                          }`}
                        >
                          <strong>{key.toUpperCase()}.</strong> {value}
                        </li>
                      ))}
                    </ul>
                    {selected && (
                      <p className="result-message">
                        {selected === q.answer
                          ? '✅ Correct!'
                          : `❌ Incorrect. Correct answer is ${formatCorrectAnswer(q)}`}
                      </p>
                    )}
                  </>
                ) : Array.isArray(q.answer) ? (
                  <ol className="answer-text">
                    {q.answer.map((stepObj) => (
                      <li key={`step-${q.id}-${stepObj.step}`}>
                        <strong>Step {stepObj.step}:</strong> {stepObj.explanation}
                      </li>
                    ))}
                  </ol>
                ) : typeof q.answer === 'object' ? (
                  <ul className="answer-text">
                    {Object.entries(q.answer).map(([key, value]) => (
                      <li key={`${q.id}-${key}`}>
                        <strong>{key}.</strong> {value}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="answer-text">{q.answer}</div>
                )}
              </div>
            </div>
          );
        })
      )}

      {/* Back to Top Button */}
      <button id="back-to-top" className="back-to-top-btn">
        Back to Top
      </button>
    </div>
  );
}
