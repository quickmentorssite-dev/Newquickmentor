import React from 'react'
import './Future.css'

const Future = () => {
    return (
        <section className="future-products-section" id='RFP'>
            <div className="future-products-container">
                <div className="future-products-text">
                    <h2 className="future-products-title">Shaping the Future of Learning</h2>
                    <p className="future-products-subtitle">
                        Our vision is to create a powerful educational platform that goes beyond traditional learning.
                    </p>
                    <p className="future-products-description">
                        We aim to provide a <strong>cloud space</strong> where students can easily access various study materials anytime and anywhere.
                        Our future includes an <strong>Activity Lab App</strong> where students can virtually perform experiments and learn by doing.
                        In addition, we plan to introduce a <strong>Student Connect App</strong> that enables learners to collaborate, discuss doubts, and grow together in a community.
                    </p>
                </div>
                <div className="future-products-image">
                    <img src="./details-2.png" alt="Future of Learning" className="future-products-img" />
                </div>
            </div>
        </section>

    )
}

export default Future
