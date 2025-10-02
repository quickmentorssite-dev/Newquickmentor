import React from 'react';
import styles from './Hero.css';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='content'>
        <h1>
          Welcome to <span className='highlight'>QuickMentors</span>
        </h1>
        <p>
          QuickMentors is your one-stop platform for free, high-quality education up to Class 10.
We provide NCERT Books, Chapter-wise Solutions, MCQs, PYQs, and Exercises — all organized smartly for effortless learning. Whether you're preparing for exams or revising tough topics, QuickMentors helps you learn faster, better, and without any cost.
        </p>
        <a className='button' href="/">Read More</a>
      </div>

      <div className='waves'>
        <svg className='wave' viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="0.3" d="M0,192L80,202.7C160,213,320,235,480,224C640,213,800,171,960,154.7C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
        </svg>
        <svg className='wave' viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="0.5" d="M0,160L80,165.3C160,171,320,181,480,170.7C640,160,800,128,960,138.7C1120,149,1280,203,1360,229.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
        </svg>
        <svg className='wave'viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,288L80,272C160,256,320,224,480,218.7C640,213,800,235,960,229.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;