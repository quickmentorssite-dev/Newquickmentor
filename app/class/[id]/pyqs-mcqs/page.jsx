import PyqsSubjectsClient from './PyqsSubjectsClient';

import { pyqsData } from '@/data/pyqsData';

export async function generateMetadata({ params }) {
  const { id } = params || {};
  const classId = id || '10';

  const title = `Class ${classId} PYQs MCQs | Previous Year Questions | Science, SST, English, Maths | QuickMentors`;
  const description = `Practice Class ${classId} Previous Year Questions (PYQs) in MCQ format. Subject-wise PYQs: Science, Maths, Social Science, English, Hindi and more. Prepare for CBSE board exams with important PYQs MCQs.`;

  const keywords = [
    `Class ${classId} PYQs MCQs`,
    `Class ${classId} Science PYQs MCQs`,
    `Class ${classId} Maths PYQs MCQs`,
    `Class ${classId} Social Science PYQs MCQs`,
    `Class ${classId} English PYQs MCQs`,
    `Class ${classId} Hindi PYQs MCQs`,
    `CBSE Class ${classId} PYQs MCQs`,
    `Class ${classId} Board Exam MCQs`,
    `Chapterwise PYQs MCQs Class ${classId}`,
    `Free PYQs MCQs Class ${classId}`,
    `Important PYQs MCQs Class ${classId}`,
    `QuickMentors Class ${classId} PYQs MCQs`,
  ].join(', ');

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://your-domain.com/class/${classId}/pyqs-mcqs`,
      siteName: 'QuickMentors',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function PyqsSubjectsPage({ params }) {
  return <PyqsSubjectsClient id={params.id} />;
}
