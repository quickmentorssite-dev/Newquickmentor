// This file should NOT have 'use client'

export async function generateMetadata({ params }) {
  const id = params?.id || '';
  const subject = decodeURIComponent(params?.subject || '');
  const chapter = decodeURIComponent(params?.chapter || '');
  const cleanSubject = subject.replace(/-/g, ' ');
  const cleanChapter = chapter.replace(/-/g, ' ');

  const title = `NCERT Solutions Class ${id} ${cleanSubject} Chapter - ${cleanChapter}`;
  const description = `Find comprehensive NCERT solutions for Class ${id} ${cleanSubject} Chapter: ${cleanChapter}. Includes step-by-step answers to all textbook questions, exercises, and explanations.`;

  return {
    title,
    description,
    keywords: [
      `NCERT Solutions for Class ${id} ${cleanSubject}`,
      `${cleanSubject} Chapter ${cleanChapter} solutions`,
      `Class ${id} ${cleanSubject} ${cleanChapter} NCERT`,
      `${cleanChapter} NCERT solutions class ${id}`,
      `CBSE Class ${id} ${cleanSubject} Chapter ${cleanChapter}`,
    ],
    alternates: {
      canonical: `https://yourdomain.com/class/${id}/ncert-solution/${subject}/${chapter}`,
    },
    openGraph: {
      title,
      description,
      url: `https://yourdomain.com/class/${id}/ncert-solution/${subject}/${chapter}`,
      siteName: 'QuickMentors',
      type: 'article',
    },
  };
}
