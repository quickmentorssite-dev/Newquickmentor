'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import SectionHero from './component/SectionHero';
import About from './component/Note';
import Footer from './component/Foot';

export default function ClientDashboard() {
  const { id } = useParams();

  const sections = [
    { name: 'PYQs', path: 'pyqs-year' },
    { name: 'MCQs', path: 'mcqs' },
    { name: 'NCERT Book', path: 'ncert-book' },
    { name: 'NCERT Solution', path: 'ncert-solution' },
    { name: 'PYQs-Chapterwise-MCQs', path: 'pyqs-chapter' },
    { name: 'PYQs-MCQ', path: 'pyqs-mcqs' },
    { name: 'Chapterwise Exercise', path: 'chapterwise-exercise' },
  ];

  return (
    <div className="p-4 space-y-4">
      <Navbar />
      <Hero />
      <About />

      <SectionHero
        title="MCQs"
        id='mmcqs'
        heading="Practice MCQs for Every Chapter"
        description={`Test your knowledge with chapter-wise MCQs. Get instant answers and explanations.`}
        buttonText="Start Practicing"
        targetSubRoute="mcqs"
        imageSrc='/smcqs.png'
        reverse={false}
      />
      <SectionHero
        title="NCERT Book PDFs"
        id='mncert-books'
        heading="Get all the NCERT rationalised chapters"
        description={`Download chapter-wise NCERT book PDFs for easy access anytime, anywhere.`}
        buttonText="Read Book"
        targetSubRoute="ncert-book"
        imageSrc='/sncert-books.png'
        reverse={false}
      />
      <SectionHero
        title="NCERT Chapter-Wise Solutions"
        id='mncert-solution'
        heading="Here, You can get the solutions of NCERT book chapter."
        description={`Get accurate NCERT chapter-wise solutions with step-by-step explanations.`}
        buttonText="Get Solutions"
        targetSubRoute="ncert-solution"
        imageSrc='/sncert-solutions.png'
        reverse={false}
      />
      <SectionHero
        title="PYQs Chapterwise MCQs"
        id='mpyqs-mcqs'
        heading="India’s First Chapter-wise PYQ MCQs — Interactive & Instant!"
        description={`Prepare smarter with real CBSE Previous Year MCQs — sorted chapter-wise for Class 10.`}
        buttonText="Test Exam Prepration"
        targetSubRoute="pyqs-mcqs"
        imageSrc='/spyqs-mcqs.png'
        reverse={false}
      />
      <SectionHero
        title="PYQs Chapterwise Exercises"
        id='mpyqs-exercise'
        heading="Chapter-wise PYQ Exercises — All in One Place!"
        description={`Practice board exam questions sorted by chapter.`}
        buttonText="Test Exam Prepration"
        targetSubRoute="pyqs-chapter"
        imageSrc='/spyqs-solutions.png'
        reverse={false}
      />
      <SectionHero
        title="Chapterwise Practice (With Hints)"
        id='mexercises'
        heading="Practice Smarter — Get Hints, Not Answers!"
        description={`Challenge yourself with chapter-wise questions.`}
        buttonText="Start Practicing"
        targetSubRoute="chapterwise-exercise"
        imageSrc='/schapterwise-exercise.png'
        reverse={false}
      />
      <SectionHero
        title="PYQs Yearwise"
        id="mpyqs-year"
        heading="Ace Boards with Yearwise PYQs!"
        description={`Practice previous year questions sorted by year.`}
        buttonText="Explore Now"
        targetSubRoute="pyqs-year"
        imageSrc="/spyqs-year.png"
        reverse={false}
      />
      <Footer />
    </div>
  );
}
