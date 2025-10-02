import { notFound } from 'next/navigation';
import pdfMapping from '@/lib/pdfMapping';
import notesData from '@/lib/notesData';
import ChapterNotesClient from './ChapterNotesClient';

export async function generateMetadata({ params }) {
  const { id, subject, chapterId } = params;
  const classData = notesData?.[id];
  const subjectData = classData?.subjects?.[capitalize(subject)];
  const chapter = subjectData?.find(ch => ch.id === chapterId);

  if (!chapter) {
    return {
      title: 'Chapter Not Found | CBSE Class Notes',
      description: 'Find CBSE Class Notes, NCERT Notes, Important Questions, and more for Class 9 and 10.',
      keywords: 'CBSE, NCERT, Class Notes, Class 9, Class 10, Free Notes, Revision Notes',
    };
  }

  const title = `${chapter.title} - Class ${id} ${capitalize(subject)} Notes | CBSE NCERT Free PDF`;
  const description = `Download free CBSE Class ${id} ${capitalize(subject)} notes for ${chapter.title}. Simple, clear, and best for revision and board exam preparation. NCERT-based, printable PDFs available.`;

  const keywords = [
    `Class ${id} ${capitalize(subject)} notes`,
    `${chapter.title} Class ${id} ${capitalize(subject)} notes`,
    `CBSE Class ${id} ${capitalize(subject)} notes`,
    `NCERT Class ${id} ${capitalize(subject)} notes`,
    `${chapter.title} notes PDF download`,
    `${chapter.title} NCERT Class ${id} ${capitalize(subject)}`,
    `Class ${id} ${capitalize(subject)} chapter-wise notes`,
    `CBSE board exam notes`,
    `${chapter.title} important questions`,
    `${chapter.title} short notes`,
    `NCERT revision notes for Class ${id} ${capitalize(subject)}`,
    `Free Class ${id} ${capitalize(subject)} notes`,
    `Reproduction Class 10 notes`, // example keyword for SEO
    `How to prepare for ${chapter.title} Class ${id} ${capitalize(subject)}`
  ].join(', ');

  return {
    title,
    description,
    keywords,

    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://your-domain.com/class/${id}/${subject}/${chapterId}`,
      siteName: 'QuickMentors',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function ChapterNotesPage({ params }) {
  const { id, subject, chapterId } = params;
  const pdfPath = pdfMapping?.[id]?.[chapterId];

  if (!pdfPath) return notFound();

  return (
    <div>
      <h1 style={{ color: 'black' }}>{getChapterTitle(id, subject, chapterId)}</h1>
      <ChapterNotesClient pdfPath={pdfPath} />
    </div>
  );
}

function capitalize(str = '') {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getChapterTitle(id, subject, chapterId) {
  const chapters = notesData?.[id]?.subjects?.[capitalize(subject)] || [];
  const chapter = chapters.find(ch => ch.id === chapterId);
  return chapter?.title || 'Chapter';
}
