import ChapterPage from './ChapterPage';
import { getPyqs } from '@/data/getPyqs';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  // ✅ Full SEO metadata injected here
  const { id, subject, chapter } = params;
  const readableChapter = chapter.replace(/-/g, ' ');
  const capitalizedSubject = subject.charAt(0).toUpperCase() + subject.slice(1);

  const pageTitle = `Class ${id} ${capitalizedSubject} - ${readableChapter} PYQs with Answers | Previous Year Questions`;
  const pageDescription = `Download and practice Class ${id} ${capitalizedSubject} Chapter "${readableChapter}" PYQs with answers. Improve your preparation with these important previous year questions for revision, CBSE board exams, and tests.`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [
      `Class ${id} ${capitalizedSubject} PYQs`,
      `${readableChapter} PYQs`,
      `Previous year questions for Class ${id} ${capitalizedSubject}`,
      `Class ${id} ${capitalizedSubject} Chapter ${readableChapter} questions`,
      `CBSE ${readableChapter} important questions`,
      `CBSE Class ${id} ${capitalizedSubject} Chapterwise PYQs`,
      `Download PYQs ${readableChapter}`,
      `Free PYQs Class ${id}`,
      `Solved PYQs for ${readableChapter}`,
      `Chapterwise previous year questions ${capitalizedSubject}`,
      `Important board questions for ${readableChapter}`,
      `NCERT ${capitalizedSubject} Class ${id} PYQs`
    ]
  };
}

export default async function Page({ params }) {
  const { id, subject, chapter } = params;
  const questions = await getPyqs(id, subject, chapter);

  return <ChapterPage questions={questions} />;
}
