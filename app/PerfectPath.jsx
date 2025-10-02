'use client';
import React, { useEffect, useState } from 'react';
import './PerfectPath.css';

const generatePath = (gridSize, pathLength) => {
  const path = [];
  const totalCells = gridSize * gridSize;

  while (path.length < pathLength) {
    const rand = Math.floor(Math.random() * totalCells);
    if (!path.includes(rand)) path.push(rand);
  }

  return path;
};

const PerfectPath = ({ onClose }) => {
  const [gridSize, setGridSize] = useState(5);
  const [pathLength, setPathLength] = useState(5);
  const [path, setPath] = useState([]);
  const [userPath, setUserPath] = useState([]);
  const [previewing, setPreviewing] = useState(true);
  const [status, setStatus] = useState('');
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const newPath = generatePath(gridSize, pathLength);
    setPath(newPath);
    setPreviewing(true);
    setUserPath([]);
    setStatus('');
    setIsLocked(true);

    const timer = setTimeout(() => {
      setPreviewing(false);
      setIsLocked(false);
    }, 2000 - gridSize * 100);

    return () => clearTimeout(timer);
  }, [gridSize]);

  const handleClick = (index) => {
    if (previewing || isLocked) return;

    const updated = [...userPath, index];
    setUserPath(updated);

    if (!path.includes(index) || path[updated.length - 1] !== index) {
      setStatus('❌ Boom! Try Again');
      setIsLocked(true);
      setTimeout(() => {
        setGridSize(4);
        setPathLength(4);
        setUserPath([]);
        setStatus('');
        setIsLocked(false);
      }, 1000);
    } else if (updated.length === path.length) {
      setStatus('✅ Level Up!');
      setIsLocked(true);
      setTimeout(() => {
        setGridSize(gridSize + 1);
        setPathLength(pathLength + 1);
        setUserPath([]);
        setStatus('');
        setIsLocked(false);
      }, 1000);
    }
  };

  const renderGrid = () => {
    const total = gridSize * gridSize;
    const tiles = [];

    for (let i = 0; i < total; i++) {
      let className = 'tile';
      if (previewing && path.includes(i)) className += ' preview';
      if (!previewing && userPath.includes(i)) className += ' selected';

      tiles.push(
        <div
          key={i}
          className={className}
          onClick={() => handleClick(i)}
        />
      );
    }

    return tiles;
  };

  return (
    <div className="perfectpath-overlay">
      <div className="perfectpath-modal">
        <div className="top-bar">
          <span>🎮 Perfect Path</span>
          <button
            className="close-btn"
            onClick={() => {
              console.log('Close clicked');
              if (onClose) onClose();
            }}
          >
            ❌
          </button>
        </div>

        <div
          className="grid"
          style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
        >
          {renderGrid()}
        </div>

        {status && <div className="status">{status}</div>}
      </div>
    </div>
  );
};

export default PerfectPath;
