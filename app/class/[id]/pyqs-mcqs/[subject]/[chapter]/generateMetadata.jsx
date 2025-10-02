import { pyqsData } from '@/data/pyqsData';

export const dynamic = 'force-dynamic'; // Needed to enable per-request metadata

export async function generateMetadata({ params }) {
  const { id, subject, chapter } = params;

  const readableChapter = chapter.replace(/-/g, ' ');
  const capitalizedSubject = subject.charAt(0).toUpperCase() + subject.slice(1);
  const pageTitle = `Class ${id} ${capitalizedSubject} - ${readableChapter} PYQs MCQs | Board Exam Prep`;
  const baseUrl = 'https://your-domain.com'; // Replace with your actual domain
  const pageUrl = `${baseUrl}/class/${id}/pyqs/${subject}/${chapter}`;
  const imageUrl = `${baseUrl}/images/class-${id}-${subject}-${chapter}.jpg`;

  return {
    title: pageTitle,
    description: `Download Class ${id} ${capitalizedSubject} Chapter "${readableChapter}" PYQs in MCQ format. Practice real CBSE previous year questions with answers and explanations.`,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: `Prepare for CBSE Class ${id} ${capitalizedSubject} with PYQs from the chapter "${readableChapter}". Practice important board exam MCQs with answers.`,
      url: pageUrl,
      siteName: "QuickMentors",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: `Class ${id} ${capitalizedSubject} - ${readableChapter} PYQs`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: `Boost your CBSE Class ${id} ${capitalizedSubject} exam prep with real PYQs from chapter "${readableChapter}". Includes MCQs with correct answers.`,
      site: '@yourTwitterHandle',
      images: [imageUrl],
    },
  };
}
