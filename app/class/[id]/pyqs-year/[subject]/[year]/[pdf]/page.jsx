// ✅ Server Component (no 'use client' here)
import PdfViewerClient from './PdfViewerClient';

export async function generateMetadata({ params }) {
  const { id, subject, year, pdf } = params;
  const setNumber = pdf?.split("-").pop();
  const subjectCapitalized = subject.charAt(0).toUpperCase() + subject.slice(1);

  return {
    title: `CBSE Class ${id} ${subjectCapitalized} ${year} Set ${setNumber} PDF | Download Solved/Unsolved Papers`,
    description: `Download CBSE Class ${id} ${subjectCapitalized} ${year} Set ${setNumber} previous year question paper PDF. Free download of both solved and unsolved papers for board exam preparation. Useful for revisions, practice, and scoring high marks.`,
    keywords: [
      `CBSE Class ${id} ${subjectCapitalized} ${year} Set ${setNumber} PDF`,
      `CBSE ${year} ${subjectCapitalized} Set ${setNumber} question paper`,
      `Download Class ${id} ${subjectCapitalized} previous year paper ${year}`,
      `Class ${id} ${subjectCapitalized} PYQ ${year}`,
      `CBSE ${year} ${subjectCapitalized} Set ${setNumber} solved paper`,
      `Class ${id} ${subjectCapitalized} board exam question paper`,
      `Free PDF ${subjectCapitalized} ${year} CBSE Class ${id}`,
      `CBSE ${subjectCapitalized} ${year} board paper with solution`,
      `Set ${setNumber} ${subjectCapitalized} paper Class ${id} CBSE`,
    ],
    openGraph: {
      title: `CBSE Class ${id} ${subjectCapitalized} ${year} Set ${setNumber} Question Paper PDF`,
      description: `Access and download the official CBSE Class ${id} ${subjectCapitalized} Set ${setNumber} ${year} board exam question paper in PDF format. Prepare better with PYQs.`,
      url: `https://yourdomain.com/class/${id}/pyqs-year/${subject}/${year}/${pdf}`,
      siteName: "Your Edu Platform",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `CBSE Class ${id} ${subjectCapitalized} ${year} Set ${setNumber} PDF`,
      description: `Get free access to Class ${id} ${subjectCapitalized} previous year board exam papers. Perfect for practice and scoring high marks.`,
    }
  };
}

// ✅ This is the actual default export React Component (must return JSX)
export default function PdfPage({ params }) {
  return <PdfViewerClient params={params} />;
}
