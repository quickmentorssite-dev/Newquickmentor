'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

import pyqChapterData from '@/data/pyqChapterData';
import Navbar from '../../../component/Anav';
import Footer from '@/app/Components/Foot';

import './pre.css';

export default function ChapterQuestionsPage() {
  const { id, subject, chapter } = useParams();

  const [theme, setTheme] = useState('light');
  const [selectedOptions, setSelectedOptions] = useState({});
  const [activeCard, setActiveCard] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const chapterList = pyqChapterData?.[id]?.[subject]
    ? Object.keys(pyqChapterData[id][subject])
    : [];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  useEffect(() => {
    if (id && subject && chapter) {
      const chapterQuestions = pyqChapterData?.[id]?.[subject]?.[chapter] || [];
      setQuestions(chapterQuestions);
    }
  }, [id, subject, chapter]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  const handleOptionSelect = (questionId, optionKey) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionId]: optionKey,
    }));
  };

  const toggleAnswer = (cardId) => {
    setActiveCard((prev) => (prev === cardId ? null : cardId));
  };

  const formatCorrectAnswer = (q) => {
    if (q.options && q.answer && q.options[q.answer]) {
      return `(${q.answer}) ${q.options[q.answer]}`;
    }
    return q.answer ? `(${q.answer})` : 'N/A';
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  if (!id || !subject || !chapter) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="layout-container" style={{ display: 'flex' }}>
        {/* Sidebar */}
        <aside
          className="sidebar"
          style={{
            width: sidebarOpen ? '250px' : '0',
            overflow: 'hidden',
            transition: 'width 0.3s ease',
            padding: sidebarOpen ? '20px' : '0',
            backgroundColor: '#f1f1f1',
          }}
        >
          <h2 className="sidebar-title">
            {subject} - Class {id}
          </h2>
          <ul className="chapter-list" style={{ paddingLeft: '0', listStyle: 'none' }}>
            {chapterList.map((chap) => (
              <li key={chap} style={{ marginBottom: '10px' }}>
                <Link
                  href={`/class/${id}/pyqs-chapter/${subject}/${chap}`}
                  className={`chapter-link ${chap === chapter ? 'active' : ''}`}
                  onClick={() => setSidebarOpen(false)}
                  style={{
                    textDecoration: 'none',
                    color: chap === chapter ? '#0070f3' : '#333',
                    fontWeight: chap === chapter ? 'bold' : 'normal',
                  }}
                >
                  {chap.replace(/-/g, ' ')}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Sidebar Toggle Button */}
        <button
          className="sidebar-toggle-button"
          onClick={toggleSidebar}
          aria-label={sidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
          style={{
            position: 'fixed',
            top: '100px',
            left: sidebarOpen ? '260px' : '10px',
            zIndex: 999,
            padding: '8px 16px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'left 0.3s ease',
          }}
        >
          {sidebarOpen ? 'Close Chapter list' : 'Open Chapter list'}
        </button>

        {/* Main Content */}
        <main
          className="main-content"
          style={{
            flex: 1,
            padding: '20px',
            marginLeft: sidebarOpen ? '260px' : '20px',
            transition: 'margin-left 0.3s ease',
          }}
        >
          <h1 className="chapter-heading" style={{ marginBottom: '20px' }}>
            Class {id} - {subject} - {chapter.replace(/-/g, ' ')}
          </h1>

          {questions.map((q) => {
            const selected = selectedOptions[q.id];
            const isMCQ = q.type === 'mcq';
            const isActive = activeCard === q.id;

            return (
              <div
                key={q.id}
                id={q.id}
                className={`question-card ${isActive ? 'active' : ''}`}
                onClick={() => toggleAnswer(q.id)}
                style={{
                  cursor: 'pointer',
                  backgroundColor: '#222',
                  color: '#eee',
                  marginBottom: '15px',
                  borderRadius: '8px',
                  padding: '15px',
                  boxShadow: isActive ? '0 0 10px #00bfff' : 'none',
                }}
              >
                <div className="question-text" style={{ fontWeight: 'bold' }}>
                  {q.question}
                </div>
                <div className="down-arrow" style={{ float: 'right' }}>▼</div>

                {q.image && (
                  <div className="question-image-container" style={{ marginTop: '10px' }}>
                    <img
                      src={q.image}
                      alt={`Illustration for ${q.id}`}
                      className="question-image"
                      style={{ maxWidth: '100%', borderRadius: '6px' }}
                    />
                  </div>
                )}

                {isActive && (
                  <div className="answer-wrapper" style={{ marginTop: '15px' }}>
                    {isMCQ && q.options ? (
                      <>
                        <ul className="answer-options" style={{ listStyle: 'none', paddingLeft: 0 }}>
                          {Object.entries(q.options).map(([key, value]) => (
                            <li
                              key={key}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleOptionSelect(q.id, key);
                              }}
                              style={{
                                cursor: 'pointer',
                                backgroundColor:
                                  selected === key
                                    ? key === q.answer
                                      ? 'lightgreen'
                                      : 'salmon'
                                    : 'transparent',
                                border: '1px solid #ccc',
                                borderRadius: '6px',
                                padding: '8px',
                                marginBottom: '6px',
                              }}
                            >
                              <strong>{key.toUpperCase()}.</strong> {value}
                            </li>
                          ))}
                        </ul>
                        {selected && (
                          <p className="result-message" style={{ fontWeight: 'bold' }}>
                            {selected === q.answer
                              ? '✅ Correct!'
                              : `❌ Incorrect. Correct answer is ${formatCorrectAnswer(q)}`}
                          </p>
                        )}
                      </>
                    ) : Array.isArray(q.answer) ? (
                      <ol className="answer-text" style={{ paddingLeft: '20px' }}>
                        {q.answer.map((stepObj) => (
                          <li key={`step-${q.id}-${stepObj.step}`}>
                            <strong>Step {stepObj.step}:</strong> {stepObj.explanation}
                          </li>
                        ))}
                      </ol>
                    ) : typeof q.answer === 'object' ? (
                      <ul className="answer-text" style={{ paddingLeft: '20px' }}>
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
                )}
              </div>
            );
          })}

          <button
            id="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#00bfff',
              border: 'none',
              borderRadius: '6px',
              color: '#000',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Back to Top
          </button>
        </main>
      </div>
      <Footer />
    </>
  );
}
