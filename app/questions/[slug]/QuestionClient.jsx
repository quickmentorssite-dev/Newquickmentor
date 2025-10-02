'use client';

import Navbar from '@/app/Components/QNav';
import Footer from '@/app/class/[id]/component/Foot';
import Script from 'next/script';
import './question-detail.css';

export default function QuestionClient({ question }) {
  let answerText = '';
  if (Array.isArray(question.answer)) {
    answerText = question.answer.map(lineObj => lineObj['=>']).filter(Boolean).join(' ');
  } else {
    answerText = question.answer || '';
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": {
      "@type": "Question",
      "name": question.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answerText,
      },
    },
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem' }}>
        <div className="question-card">
          <h1 className="question-text">📘 {question.question}</h1>

          {!question.type && (
            <div style={{ marginTop: '1rem' }}>
              {Array.isArray(question.answer) ? (
                question.answer.map((lineObj, idx) => (
                  <p key={idx} className="answer-text">{lineObj['=>']}</p>
                ))
              ) : (
                <p className="answer-text">{question.answer}</p>
              )}
            </div>
          )}

          {question.type === 'mcq' && (
            <div style={{ marginTop: '1rem' }}>
              <ul style={{ paddingLeft: '1.2rem' }}>
                {Object.entries(question.options).map(([key, value]) => (
                  <li key={key} className="answer-text" style={{ marginBottom: '0.75rem' }}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
              <p className="answer-text">
                <strong>Answer:</strong> {question.answer}
              </p>
            </div>
          )}
        </div>
      </div>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />
      <Footer />
    </>
  );
}
