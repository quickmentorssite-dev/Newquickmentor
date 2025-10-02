// app/class/[id]/ncert-solution/[subject]/[chapter]/page.jsx

import { ncertSolutions } from '@/data/ncertSolutions';
import './pre.css';

export async function generateMetadata({ params }) {
  const id = params?.id || '';
  const subject = decodeURIComponent(params?.subject || '');
  const chapter = decodeURIComponent(params?.chapter || '');
  const cleanSubject = subject.replace(/-/g, ' ');
  const cleanChapter = chapter.replace(/-/g, ' ');

  const title = `NCERT Solutions Class ${id} ${cleanSubject} Chapter - ${cleanChapter}`;
  const description = `Find comprehensive NCERT solutions for Class ${id} ${cleanSubject} Chapter: ${cleanChapter}. Includes step-by-step answers to all textbook questions, exercises, and explanations.`;

  return {
    title,
    description,
    keywords: [
      `NCERT Solutions for Class ${id} ${cleanSubject}`,
      `${cleanSubject} Chapter ${cleanChapter} solutions`,
      `Class ${id} ${cleanSubject} ${cleanChapter} NCERT`,
      `${cleanChapter} NCERT solutions class ${id}`,
      `CBSE Class ${id} ${cleanSubject} Chapter ${cleanChapter}`,
    ],
    alternates: {
      canonical: `https://yourdomain.com/class/${id}/ncert-solution/${subject}/${chapter}`,
    },
    openGraph: {
      title,
      description,
      url: `https://yourdomain.com/class/${id}/ncert-solution/${subject}/${chapter}`,
      siteName: 'QuickMentors',
      type: 'article',
    },
  };
}

export default function NcertChapterPage({ params }) {
  const id = params?.id || '';
  const subject = decodeURIComponent(params?.subject || '');
  const chapter = decodeURIComponent(params?.chapter || '');

  const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/gi, '');

  const subjectData = ncertSolutions?.[id]?.[subject];
  let chapterData = null;

  if (subjectData) {
    for (const chapterKey in subjectData) {
      if (normalize(chapterKey) === normalize(chapter)) {
        chapterData = subjectData[chapterKey];
        break;
      }
    }
  }

  const formatAnswer = (answer) => {
    if (!answer) return <div className="answer-text">No answer provided.</div>;

    if (Array.isArray(answer)) {
      return (
        <ol className="answer-text">
          {answer.map((stepObj, i) => (
            <li key={i}>
              <strong>Step {stepObj.step}:</strong> {stepObj.explanation}
            </li>
          ))}
        </ol>
      );
    } else if (typeof answer === 'object') {
      return (
        <ul className="answer-text">
          {Object.entries(answer).map(([key, value]) => (
            <li key={key}>
              <strong>{key}.</strong> {value}
            </li>
          ))}
        </ul>
      );
    } else {
      return <div className="answer-text">{answer}</div>;
    }
  };

  return (
    <div className="chapter-container toptext">
      <h1 className="chapter-heading">
        NCERT Solutions for Class {id} {subject} - Chapter: {chapter}
      </h1>
      <p className="chapter-intro">
        Get detailed, step-by-step NCERT solutions for Class {id} {subject}, Chapter <strong>{chapter}</strong>. These answers are curated to help students prepare for board exams, school tests, and assignments efficiently.
      </p>

      {chapterData ? (
        chapterData.map((item, index) => (
          <div key={index} className="question-card">
            <span className="question-text">{item.question}</span>

            {item.image && (
              <div className="question-image-container">
                <img
                  src={item.image}
                  alt={`Illustration for question ${index + 1}`}
                  className="question-image"
                />
              </div>
            )}

            {item.options && (
              <ul className="options-list">
                {item.options.map((option, i) => (
                  <li key={i}>{option}</li>
                ))}
              </ul>
            )}

            {formatAnswer(item.answer)}
          </div>
        ))
      ) : (
        <p>No data found for this chapter.</p>
      )}
    </div>
  );
}
