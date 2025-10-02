import ncertData from '@/data/ncertData';
import ChapterViewClient from './ChapterViewClient'; // ✅ updated name

export async function generateMetadata({ params }) {
  const { id, chapterId } = params;
  const classData = ncertData[id];
  let chapter = null;
  let subject = "";

  if (!classData) return { title: "Class Not Found" };

  for (const subj in classData) {
    const found = classData[subj].find((c) => c.id === chapterId);
    if (found) {
      chapter = found;
      subject = subj;
      break;
    }
  }

  if (!chapter) return { title: "Chapter Not Found" };

  return {
    title: `${chapter.title} - Class ${id} ${subject} NCERT Rationalised PDF`,
    description: `Download rationalised Class ${id} ${subject} chapter "${chapter.title}" NCERT PDF based on the latest CBSE syllabus.`,
    keywords: [
      `${chapter.title} Class ${id} PDF`,
      `NCERT ${subject} Class ${id} ${chapter.title} Rationalised PDF`,
      `Class ${id} ${subject} Chapter ${chapter.title} PDF`,
      `Download Class ${id} ${subject} NCERT Book Chapter ${chapter.title}`,
      `CBSE Class ${id} ${subject} Rationalised NCERT Book`,
      `Latest NCERT ${subject} PDF for Class ${id}`,
      `Free Class ${id} ${subject} ${chapter.title} PDF`,
      `Class ${id} ${chapter.title} NCERT Chapter`,
      `NCERT ${subject} Chapter PDF Class ${id}`,
      `${chapter.title} Rationalised PDF Download`,
      `NCERT Rationalised Book Class ${id} ${subject}`
    ],
    openGraph: {
      title: `${chapter.title} - Class ${id} ${subject} Rationalised NCERT PDF`,
      description: `Get Class ${id} ${subject} rationalised chapter "${chapter.title}" NCERT book in PDF. Best for CBSE 2025 preparation.`,
      url: `https://yourdomain.com/class/${id}/ncert-book/${chapterId}`,
    },
    alternates: {
      canonical: `https://yourdomain.com/class/${id}/ncert-book/${chapterId}`,
    }
  };
}

export default function Page({ params }) {
  const { id, chapterId } = params;
  return <ChapterViewClient id={id} chapterId={chapterId} />;
}
