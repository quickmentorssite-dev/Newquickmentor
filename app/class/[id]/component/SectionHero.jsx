'use client';

import React from 'react';
import './Note.css';
import { useRouter, useParams } from 'next/navigation';

const SectionHero = ({
  title,
  id,
  heading,
  description,
  buttonText,
  targetSubRoute,
  imageSrc, // ✅ replace iframeSubRoute with imageSrc
  reverse = false,
}) => {
  const router = useRouter();
  const { id: routeId } = useParams();

  const handleClick = () => {
    router.push(`/class/${routeId}/${targetSubRoute}`);
  };

  return (
    <div id={id} className={`notes-container ${reverse ? 'reverse-layout' : ''}`}>
      <div className="notes-text">
        <p className="notes-welcome">{title}</p>
        <h1 className="notes-heading">{heading}</h1>
        <p className="notes-description">{description}</p>
        <button className="notes-button" onClick={handleClick}>
          {buttonText}
        </button>
      </div>

      <div className="notes-image">
        <img
          src={imageSrc}
          alt="Preview"
          style={{
            width: '80%',
            height: '60vh',
            objectFit: 'contain',
            border: '1px solid #ccc',
            borderRadius: '10px',
          }}
        />
      </div>
    </div>
  );
};

export default SectionHero;
