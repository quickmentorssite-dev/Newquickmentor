import { getMcqs } from '@/data/getMcqs';
import McqsWrapper from './McqsWrapper';

export async function generateMetadata({ params }) {
  const { id, subject, chapter } = params;

  const readableChapter = chapter.replace(/-/g, ' ');
  const capitalizedSubject = subject.charAt(0).toUpperCase() + subject.slice(1);
  const pageTitle = `Class ${id} ${capitalizedSubject} - ${readableChapter} MCQs with Answers | Practice Quiz`;

  const baseUrl = 'https://your-domain.com';
  const pageUrl = `${baseUrl}/app/class/${id}/mcqs/${subject}/${chapter}`;

  return {
    title: pageTitle,
    description: `Download and practice Class ${id} ${capitalizedSubject} Chapter "${readableChapter}" MCQs with answers. Improve your preparation with these important objective-type questions for revision, CBSE board exams, and tests.`,
    keywords: [
      `Class ${id} ${capitalizedSubject} MCQs`,
      `${readableChapter} MCQs`,
      `MCQ questions for Class ${id} ${capitalizedSubject}`,
      `Class ${id} ${capitalizedSubject} Chapter ${readableChapter} MCQs`,
      `Multiple choice questions ${readableChapter}`,
      `Objective questions for ${readableChapter}`,
      `Practice test for ${readableChapter}`,
      `${readableChapter} quiz Class ${id}`,
      `CBSE Class ${id} ${capitalizedSubject} Chapterwise MCQs`,
      `Free MCQ practice ${readableChapter}`,
      `NCERT ${capitalizedSubject} Class ${id} questions`,
      `Important MCQs for ${readableChapter}`
    ],
    alternates: {
      canonical: pageUrl
    },
    openGraph: {
      title: pageTitle,
      description: `Free MCQs for Class ${id} ${capitalizedSubject} - Chapter "${readableChapter}" with correct answers and explanations. Boost your exam preparation now!`,
      url: pageUrl,
      type: "article",
      siteName: "YourPlatformName",
      images: [
        {
          url: `${baseUrl}/images/class-${id}-${subject}-${chapter}.jpg`,
          width: 800,
          height: 600,
          alt: `Class ${id} ${capitalizedSubject} - ${readableChapter} MCQs`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: `Prepare for exams with Class ${id} ${capitalizedSubject} MCQs for ${readableChapter}. Includes answers and detailed solutions.`,
      site: "@yourTwitterHandle",
      images: [`${baseUrl}/images/class-${id}-${subject}-${chapter}.jpg`]
    }
  };
}

export default async function Page({ params }) {
  const { id, subject, chapter } = params;
  const mcqs = await getMcqs(id, subject, chapter);

  return (
    <McqsWrapper
      id={id}
      subject={subject}
      chapter={chapter}
      mcqs={mcqs}
    />
  );
}
