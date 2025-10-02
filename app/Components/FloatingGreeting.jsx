'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useUser } from '../../context/UserContext';
import dynamic from 'next/dynamic';

const PerfectPath = dynamic(() => import('../PerfectPath'), { ssr: false });

const FloatingGreeting = () => {
  const { user } = useUser();
  const boxRef = useRef(null);
  const modalRef = useRef(null);

  const [greetingPos, setGreetingPos] = useState({ x: 20, y: 100 });
  const [modalPos, setModalPos] = useState({ x: 0, y: 0 }); // Temporary default
  const [isMounted, setIsMounted] = useState(false);

  const [draggingBox, setDraggingBox] = useState(false);
  const [draggingModal, setDraggingModal] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const [showGame, setShowGame] = useState(false);

  useEffect(() => {
    // Only run in browser
    setModalPos({
      x: window.innerWidth / 2 - 150,
      y: window.innerHeight / 2 - 150,
    });
    setIsMounted(true);
  }, []);

  const handleMouseDownBox = (e) => {
    setDraggingBox(true);
    const rect = boxRef.current.getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseDownModal = (e) => {
    setDraggingModal(true);
    const rect = modalRef.current.getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseMove = (e) => {
    if (draggingBox) {
      setGreetingPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
    if (draggingModal) {
      setModalPos({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
  };

  const handleMouseUp = () => {
    setDraggingBox(false);
    setDraggingModal(false);
  };

  useEffect(() => {
    if (isMounted) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      if (isMounted) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, [offset, draggingBox, draggingModal, isMounted]);

  if (!user || !isMounted) return null;

  return (
    <>
      <div
        className="floating-greeting"
        ref={boxRef}
        onMouseDown={handleMouseDownBox}
        onClick={() => setShowGame(true)}
        style={{
          left: greetingPos.x,
          top: greetingPos.y,
          cursor: draggingBox ? 'grabbing' : 'grab',
          position: 'fixed',
          zIndex: 1000,
          background: '#005bb5',
          padding: '10px 15px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          userSelect: 'none',
          color: 'white',
        }}
      >
        👋 Hi, {user.name}
      </div>

      {showGame && (
        <div
          className="game-modal"
          ref={modalRef}
          onMouseDown={handleMouseDownModal}
          style={{
            position: 'fixed',
            left: modalPos.x,
            top: modalPos.y,
            background: '#f9f9f9',
            width: '40vmin',
            height: '40vmin',
            padding: '10px',
            borderRadius: '12px',
            boxShadow: '0 0 20px rgba(0,0,0,0.2)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: draggingModal ? 'grabbing' : 'grab',
          }}
        >
          <button
            onClick={() => setShowGame(false)}
            style={{
              position: 'absolute',
              top: 8,
              right: 8,
              background: '#ff5f57',
              border: 'none',
              color: 'white',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              fontWeight: 'bold',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            ✖
          </button>
          <PerfectPath />
        </div>
      )}
    </>
  );
};

export default FloatingGreeting;
