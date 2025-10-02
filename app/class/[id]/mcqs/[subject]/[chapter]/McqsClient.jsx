'use client';

import { useEffect, useState } from 'react';
import { useSidebar } from '@/context/SidebarContext';
import Navbar from '../../../component/Anav';
import Footer from '../../../component/Foot';
import './new.css';

export default function McqsClient({ id, subject, chapter, mcqs }) {
  const { sidebarOpen } = useSidebar();
  const [answered, setAnswered] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem(`mcqs-${id}-${subject}-${chapter}`);
    if (saved) setAnswered(JSON.parse(saved));
  }, [id, subject, chapter]);

  const handleAnswer = (qIndex, selected) => {
    const correct = mcqs[qIndex].answer === selected;
    const updated = { ...answered, [qIndex]: { selected, correct } };
    setAnswered(updated);
    localStorage.setItem(`mcqs-${id}-${subject}-${chapter}`, JSON.stringify(updated));
  };

  const readableChapter = chapter?.replace(/-/g, ' ');
  const capitalizedSubject = subject?.charAt(0).toUpperCase() + subject?.slice(1);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "name": `${readableChapter} MCQs - Class ${id}`,
    "educationalLevel": `Class ${id}`,
    "about": capitalizedSubject,
    "creator": {
      "@type": "Organization",
      "name": "YourPlatformName"
    }
  };

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className={`chapter-wrapper ${sidebarOpen ? 'with-sidebar' : 'full-width'}`}>
        <h1 className="chapter-title">
          {readableChapter} - MCQs (Class {id} - {capitalizedSubject})
        </h1>

        <p className="chapter-intro">
          Practice Multiple Choice Questions (MCQs) from <strong>Class {id} {capitalizedSubject} - {readableChapter}</strong>. These objective questions are designed to help students revise key concepts quickly and prepare effectively for school exams and board tests. All questions come with correct answers and detailed explanations, making your learning thorough and exam-ready.
        </p>

        <div className="questions-container">
          {mcqs.map((mcq, index) => {
            const userAnswer = answered[index]?.selected;
            const isCorrect = answered[index]?.correct;

            return (
              <div key={index} className="question-box">
                <p className="question-text">
                  <strong>{index + 1}.</strong> {mcq.question}
                </p>
                <ul className="options-list">
                  {mcq.options.map((opt, optIndex) => {
                    const label = optionLabels[optIndex] || String.fromCharCode(65 + optIndex);
                    const isSelected = userAnswer === opt;
                    const isRightAnswer = mcq.answer === opt;

                    let btnClass = 'option-btn';
                    if (userAnswer) {
                      if (isSelected && isCorrect) btnClass += ' correct-answer';
                      else if (isSelected && !isCorrect) btnClass += ' error-msg';
                      else if (isRightAnswer) btnClass += ' correct-answer';
                    }

                    return (
                      <li key={optIndex} className="option-item">
                        <button
                          className={btnClass}
                          disabled={!!userAnswer}
                          onClick={() => handleAnswer(index, opt)}
                        >
                          <strong>{label}.</strong> {opt}
                        </button>
                      </li>
                    );
                  })}
                </ul>

                {userAnswer && (
                  <p className={`typing-text ${isCorrect ? 'correct-answer' : 'error-msg'}`}>
                    {isCorrect ? '✅ Correct' : `❌ Incorrect. Correct answer: ${mcq.answer}`}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
