'use client';
import React, { useState } from 'react';
import './Services.css';
import LoginModal from './LoginModal'; // Reuse the same modal!

const Services = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    return (
        <>
            {showModal && <LoginModal close={() => setShowModal(false)} />}

            <div className='SUP' id='RPRODUCTS'>
                <div className="SRight" onClick={handleOpenModal} style={{ cursor: 'pointer' }}>
                    <div className="SNotes">Notes</div>
                    <div className="SAN">Master Every Chapter with Expert Notes</div>
                    <div className="SMAN">Access comprehensive, chapter-wise notes designed to simplify complex topics, highlight key concepts, and support exam preparation. Perfect for quick revisions, deep understanding, and scoring high in board exams with focused, structured learning material.</div>
                </div>

                <div className="SCenter" onClick={handleOpenModal} style={{ cursor: 'pointer' }}>
                    <div className="SCT">
                        <div className="SAN">MCQs</div>
                        <div className="SMAN">Get topic-wise multiple choice questions designed to prepare you for board exams.</div>
                    </div>
                    <div className="SCB">
                        <div className="SAN">NCERT PDF</div>
                        <div className="SMAN">Get the complete NCERT textbooks in PDF format for easy reading and revision.</div>
                    </div>
                </div>

                <div className="SCenter" onClick={handleOpenModal} style={{ cursor: 'pointer' }}>
                    <div className="SCT">
                        <div className="SAN">PYQs</div>
                        <div className="SMAN">Solve PYQs to get familiar with question patterns and scoring strategies effectively.</div>
                    </div>
                    <div className="SCB">
                        <div className="SAN">Exercises</div>
                        <div className="SMAN">Prepare with diverse exercises: definitions, reasoning, short notes, and long answer questions.</div>
                    </div>
                </div>
            </div>

            <div className="SB" onClick={handleOpenModal} style={{ cursor: 'pointer' }}>
                <div className="SBW">
                    <div className="SAN">NCERT-Solution</div>
                    <div className="SBA">Get clear, step-by-step NCERT solutions for every question in each chapter.</div>
                </div>
                <div className="SBW">
                    <div className="SAN">Practice Papers</div>
                    <div className="SBA">Test your knowledge through chapter-wise and full syllabus practice question papers.</div>
                </div>
            </div>
        </>
    );
};

export default Services;
