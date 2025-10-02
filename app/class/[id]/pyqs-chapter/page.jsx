// No 'use client' here → Server Component → SEO will work

import SubjectSelectClient from './SubjectSelectClient';

import pyqChapterData from '@/data/pyqChapterData';

export async function generateMetadata({ params }) {
  const { id } = params;
  const classId = id || '10';

  const keywords = [
    `Class ${classId} PYQs`,
    `Class ${classId} chapterwise PYQs`,
    `Class ${classId} previous year questions`,
    `CBSE Class ${classId} PYQs`,
    `Science Class ${classId} PYQs`,
    `Social Science Class ${classId} PYQs`,
    `Maths Class ${classId} PYQs`,
    `English Class ${classId} PYQs`,
    `Chapterwise board questions Class ${classId}`,
    `Class ${classId} board exam questions`,
  ];

  return {
    title: `Class ${classId} Chapterwise PYQs | CBSE Board Questions`,
    description: `Prepare for CBSE Class ${classId} board exams with chapterwise previous year questions (PYQs) for all subjects. Practice important board questions with answers.`,
    keywords: keywords.join(', '),
  };
}

export default function SubjectSelectPage({ params }) {
  const { id } = params;
  const classData = pyqChapterData[id] || {};
  const subjects = Object.keys(classData);

  return <SubjectSelectClient id={id} subjects={subjects} />;
}
