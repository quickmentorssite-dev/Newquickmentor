'use client';

import { useState } from 'react';
import { MathJax, MathJaxContext } from "better-react-mathjax";

import './newpage.css';

export default function MathExercise({ id, chapter, exercise, exerciseData }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const cleanAnswerText = (text) => {
    return text.replace(/^Ans:\s*/i, '').trim();
  };

  const renderStep = (step, index) => {
    if (!step) return null;

    if (Array.isArray(step)) {
      return step.map((subStep, i) => (
        <div key={i} className="ml-4">
          {renderStep(subStep, i)}
        </div>
      ));
    }

    if (typeof step === 'string') {
      return <p key={index}>{cleanAnswerText(step)}</p>;
    }

    if (typeof step === 'object' && step["=>"]) {
      return <p key={index}>{cleanAnswerText(step["=>"])}</p>;
    }

    if (typeof step === 'object' && step.type) {
      switch (step.type) {
        case 'text':
        case 'paragraph':
          return <p key={index}>{cleanAnswerText(step.content)}</p>;
        case 'latex':
          return (
            <div key={index} className="answer-text">
              <MathJax math={step.content} />
            </div>
          );
        case 'list':
          return (
            <ul key={index} className="answer-text">
              {step.content.map((item, i) => (
                <li key={i}>{cleanAnswerText(item)}</li>
              ))}
            </ul>
          );
        case 'numbered-list':
          return (
            <ol key={index} className="answer-text">
              {step.content.map((item, i) => (
                <li key={i}>{cleanAnswerText(item)}</li>
              ))}
            </ol>
          );
        case 'image':
          return (
            <img
              key={index}
              src={step.content}
              alt={`solution-step-${index}`}
              className="max-w-full h-auto rounded shadow my-2"
            />
          );
        case 'link':
          return (
            <a
              key={index}
              href={step.content}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              {step.label || step.content}
            </a>
          );
        case 'heading':
          return (
            <h3 key={index} className="text-xl font-semibold mt-4 text-white">
              {step.content}
            </h3>
          );
        case 'code':
          return (
            <pre
              key={index}
              className="bg-gray-900 text-green-300 p-4 rounded overflow-auto"
            >
              <code>{step.content}</code>
            </pre>
          );
        default:
          return (
            <p key={index} className="text-yellow-400">
              ⚠️ Unknown type: {step.type}
            </p>
          );
      }
    }

    return (
      <p key={index} className="text-red-400">
        ⚠️ Unsupported answer format: {JSON.stringify(step)}
      </p>
    );
  };

  if (!exerciseData) {
    return (
      <div className="p-4 text-red-600">
        ❌ Exercise "{exercise}" not found in Chapter "{chapter}" for Class {id}
      </div>
    );
  }

  return (
    <div
      className="light"
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
        padding: '1rem',
      }}
    >
      {/* <h1>Class {id} Maths Chapter {chapter.replace(/-/g, ' ')} - Exercise {exercise.replace(/-/g, ' ')}</h1>
      <p>
        NCERT Solutions for Class {id} Maths Chapter {chapter.replace(/-/g, ' ')} Exercise {exercise.replace(/-/g, ' ')} are provided here.
        These solutions are based on the latest CBSE guidelines and help you score better in exams.
      </p> */}

      <div className="chapter-container">
        <h1 className="chapter-heading">{exercise.replace(/-/g, ' ')}</h1>

        {Array.isArray(exerciseData) ? (
          exerciseData.map((item, idx) => (
            <div
              key={idx}
              className={`question-card ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => toggleActive(idx)}
            >
              <div className="question-text">
                Q{idx + 1}: {item.question}
              </div>

              <div className="answer-wrapper">
                {activeIndex === idx && (
                  <div className="answer-text">{renderStep(item.answer, 0)}</div>
                )}
              </div>

              {activeIndex !== idx && <div className="down-arrow">⬇️</div>}
            </div>
          ))
        ) : (
          <p className="text-red-400">❌ Invalid data structure in solution.</p>
        )}
      </div>
    </div>
  );
}
