import SubjectSelectorClient from './SubjectSelectorClient';
import pyqData from '@/lib/pyqData'; // for safe SEO access

export async function generateMetadata({ params }) {
  const { id } = params || {};
  const classId = id || '10';

  const title = `Class ${classId} Yearwise PYQs | Board Exam Question Papers | QuickMentors`;
  const description = `Practice Class ${classId} Yearwise Previous Year Questions (PYQs) from Board Exams. Chapterwise and Subjectwise PYQs for Science, Maths, SST, English, Hindi. Prepare smarter for CBSE Board Exams.`;

  const keywords = [
    `Class ${classId} Yearwise PYQs`,
    `Class ${classId} Board Exam PYQs`,
    `Class ${classId} Science Yearwise PYQs`,
    `Class ${classId} Maths Yearwise PYQs`,
    `Class ${classId} SST Yearwise PYQs`,
    `Class ${classId} English Yearwise PYQs`,
    `Class ${classId} Hindi Yearwise PYQs`,
    `Chapterwise Yearwise PYQs Class ${classId}`,
    `Board Exam Question Papers Class ${classId}`,
    `CBSE Class ${classId} PYQs`,
    `Class ${classId} Free PYQs`,
    `QuickMentors Class ${classId} Yearwise PYQs`,
  ].join(', ');

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://your-domain.com/class/${classId}/pyqs-year`,
      siteName: 'QuickMentors',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function PyqsYearSubjectPage({ params }) {
  return <SubjectSelectorClient id={params.id} />;
}
