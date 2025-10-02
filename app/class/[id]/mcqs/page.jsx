// app/class/[id]/mcqs/page.jsx

import Client from './Client';

// ✅ Dynamic metadata for better SEO per class
export async function generateMetadata({ params }) {
  const { id } = params;

  return {
    title: `Class ${id} Chapterwise MCQs | CBSE Objective Questions`,
    description: `Practice chapterwise important MCQs for Class ${id} covering Science, Maths, SST, History, Civics and more, as per latest CBSE exam pattern.`,
    keywords: [
      `Class ${id} MCQs`,
      `Important MCQs Class ${id}`,
      `Science MCQs Class ${id}`,
      `Maths Chapterwise Questions Class ${id}`,
      `CBSE Class ${id} Objective Questions`,
      `Class ${id} History Important MCQs`,
      `Class ${id} Sound Chapter MCQs`,
      `Class ${id} Civics MCQs`,
      `Class ${id} SST Important Questions`,
      `Free MCQs for Class ${id}`,
    ],
  };
}

export default function Page() {
  return <Client />;
}
