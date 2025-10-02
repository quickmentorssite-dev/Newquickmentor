import ChapterExercisePage from './ChapterExercisePage';
import chapterQuestions from '@/data/chapterQuestions';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { id, subject, chapter } = params;

  const readableChapter = chapter.replace(/-/g, ' ');
  const capitalizedSubject = subject.charAt(0).toUpperCase() + subject.slice(1);
  const title = `Class ${id} ${capitalizedSubject} - ${readableChapter} Exercises with Answers | Practice Questions`;

  const baseUrl = 'https://your-domain.com'; // ✅ Change this to your domain
  const pageUrl = `${baseUrl}/class/${id}/chapterwise-exercise/${subject}/${chapter}`;
  const imageUrl = `${baseUrl}/images/class-${id}-${subject}-${chapter}.jpg`;

  return {
    title,
    description: `Practice Class ${id} ${capitalizedSubject} Chapter "${readableChapter}" exercises with answers. Perfect for revision and self-study.`,
    keywords: [
      `Class ${id} ${capitalizedSubject} questions`,
      `${readableChapter} exercises`,
      `Chapterwise questions for Class ${id}`,
      `Practice questions ${readableChapter}`,
      `${capitalizedSubject} Class ${id} chapter exercises`,
      `CBSE ${capitalizedSubject} questions`,
      `NCERT ${capitalizedSubject} Class ${id}`
    ],
    alternates: {
      canonical: pageUrl
    },
    openGraph: {
      title,
      description: `Get chapterwise exercise questions for Class ${id} ${capitalizedSubject} - ${readableChapter}. Boost your board exam preparation!`,
      url: pageUrl,
      siteName: 'QuickMentors',
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: `Class ${id} ${capitalizedSubject} - ${readableChapter} Exercises`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: `Download and practice Class ${id} ${capitalizedSubject} chapter "${readableChapter}" questions with solutions. Great for self-assessment.`,
      site: '@yourTwitterHandle',
      images: [imageUrl]
    }
  };
}

export default async function Page({ params }) {
  const { id, subject, chapter } = params;
  const questions = chapterQuestions?.[id]?.[subject]?.[chapter] || [];

  return (
    <ChapterExercisePage
      id={id}
      subject={subject}
      chapter={chapter}
      questions={questions}
    />
  );
}
