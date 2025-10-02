import ChapterwisePYQPage from './ChapterwisePYQPage';
import pyqChapterData from '@/data/pyqChapterData';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { id, subject, chapter } = params;

  const readableChapter = chapter.replace(/-/g, ' ');
  const capitalizedSubject = subject.charAt(0).toUpperCase() + subject.slice(1);

  const title = `Class ${id} ${capitalizedSubject} - ${readableChapter} Chapterwise PYQs | CBSE Previous Year Questions`;
  const baseUrl = 'https://your-domain.com'; // 🔁 Replace with your domain
  const pageUrl = `${baseUrl}/class/${id}/chapterwise-pyqs/${subject}/${chapter}`;
  const imageUrl = `${baseUrl}/images/pyq-class-${id}-${subject}-${chapter}.jpg`;

  return {
    title,
    description: `Practice Class ${id} ${capitalizedSubject} Previous Year Questions for chapter "${readableChapter}". Perfect for board exam revision with solved PYQs.`,
    keywords: [
      `Class ${id} ${capitalizedSubject} PYQs`,
      `${readableChapter} previous year questions`,
      `Chapterwise PYQs ${capitalizedSubject}`,
      `PYQs of ${readableChapter} chapter`,
      `Important questions for Class ${id} ${capitalizedSubject}`,
      `CBSE Class ${id} ${capitalizedSubject} PYQs`,
      `${readableChapter} Class ${id} PYQs`
    ],
    alternates: {
      canonical: pageUrl
    },
    openGraph: {
      title,
      description: `Get Class ${id} ${capitalizedSubject} PYQs from ${readableChapter} chapter. Includes MCQs and long answers with solutions.`,
      url: pageUrl,
      siteName: 'QuickMentors',
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: `PYQs for ${readableChapter} Class ${id}`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: `Download and practice Class ${id} ${capitalizedSubject} chapter "${readableChapter}" PYQs with answers. Best for last-minute preparation.`,
      site: '@yourTwitterHandle',
      images: [imageUrl]
    }
  };
}

export default function Page({ params }) {
  const { id, subject, chapter } = params;
  const questions = pyqChapterData?.[id]?.[subject]?.[chapter] || [];

  return (
    <ChapterwisePYQPage
      id={id}
      subject={subject}
      chapter={chapter}
      questions={questions}
    />
  );
}
