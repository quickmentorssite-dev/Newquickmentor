'use client';
import React, { useState } from 'react';
import './Main.css';
import LoginModal from '../components/LoginModal';

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='WMain' id='RHOME'>
      {showModal && <LoginModal close={() => setShowModal(false)} />}

      <div className="MainRight">
        <div>
          <div className="MRTop">Learn, Practice & Grow</div>
          <div className="MRTop"> Only at <span>QuickMentors.</span></div>
        </div>
        <div className="MRCenter">
          Get structured notes, important questions, practice tests, PYQs, and full chapter coverage — everything you need to study smarter.
        </div>
        <div className="MRBottom" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* 👇 GUIDE TEXT */}
          <div style={{
            marginBottom: '8px',
            color: '#ff0000',
            fontWeight: 'bold',
            fontSize: '14px',
            animation: 'blink 1s infinite'
          }}>
            👉 Click the "Get Started" button to begin!
          </div>

          {/* BUTTON */}
          <button
            onClick={() => setShowModal(true)}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '8px',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="MainLeft">
        <img src="/STUDENT.png" alt="Student" />
      </div>

      {/* 👇 ADD BLINK ANIMATION IN YOUR CSS */}
      <style jsx>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Main;
